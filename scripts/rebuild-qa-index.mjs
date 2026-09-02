import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const qaDir = path.join(rootDir, 'content', 'qa');

// 카테고리 매핑 함수
export function getCategoryInfo(catStr = '') {
  if (catStr.includes('ADHD') || catStr.includes('틱') || catStr.includes('소아')) {
    return { key: 'tic', name: '소아청소년 & 성인 ADHD·틱' };
  }
  if (catStr.includes('불면') || catStr.includes('수면')) {
    return { key: 'insomnia', name: '불면증 & 수면장애' };
  }
  if (catStr.includes('공황') || catStr.includes('불안') || catStr.includes('강박')) {
    return { key: 'panic', name: '공황 · 불안 & 강박증' };
  }
  if (catStr.includes('자율신경') || catStr.includes('실신') || catStr.includes('어지럼') || catStr.includes('이명')) {
    return { key: 'autonomic', name: '자율신경 & 실신·어지럼증·이명' };
  }
  if (catStr.includes('우울') || catStr.includes('화병') || catStr.includes('번아웃')) {
    return { key: 'stress', name: '우울증 · 화병 & 번아웃' };
  }
  if (catStr.includes('신체화') || catStr.includes('담적') || catStr.includes('두통') || catStr.includes('턱관절')) {
    return { key: 'somatic', name: '신체화 & 담적·두통·턱관절' };
  }
  return { key: 'panic', name: '공황 · 불안 & 강박증' };
}

// 전체 Q&A 스캔 및 _index.md 동적 재생성
export function rebuildQAIndex() {
  if (!fs.existsSync(qaDir)) {
    fs.mkdirSync(qaDir, { recursive: true });
  }

  const files = fs.readdirSync(qaDir).filter(f => f.endsWith('.md') && f !== '_index.md');
  const items = [];

  for (const file of files) {
    const filePath = path.join(qaDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const slug = file.replace(/\.md$/, '');

    // 프론트매터 파싱
    const fmMatch = content.match(/^---([\s\S]*?)---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];

    const titleMatch = fm.match(/title:\s*["']?(.*?)["']?$/m);
    const dateMatch = fm.match(/date:\s*["']?(.*?)["']?$/m);
    const categoryMatch = fm.match(/category:\s*["']?(.*?)["']?$/m);
    const locationMatch = fm.match(/location:\s*["']?(.*?)["']?$/m);
    const patientMatch = fm.match(/patient_info:\s*["']?(.*?)["']?$/m);
    const summaryMatch = fm.match(/summary:\s*["']?(.*?)["']?$/m);
    const tagsMatch = fm.match(/tags:\s*\n((?:\s*-\s*["'].*?["']\r?\n?)+)/);

    let tags = [];
    if (tagsMatch) {
      tags = tagsMatch[1]
        .split(/\r?\n/)
        .map(t => t.replace(/^\s*-\s*["']/, '').replace(/["']\s*$/, '').trim())
        .filter(Boolean);
    }

    const title = titleMatch ? titleMatch[1].trim() : slug;
    const rawDate = dateMatch ? dateMatch[1].trim() : '2026-09-01';
    const dateObj = new Date(rawDate);
    const dateStr = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : '2026-09-01';
    const rawCat = categoryMatch ? categoryMatch[1].trim() : '공황 · 불안 & 강박증';
    const { key: categoryKey, name: categoryName } = getCategoryInfo(rawCat);
    const location = locationMatch ? locationMatch[1].trim() : '인천 부평구';
    const patientInfo = patientMatch ? patientMatch[1].trim() : `질문자: ${location} 거주 환자분`;

    // 본문에서 답변 추출 (Section 4 또는 Section 1 또는 요약)
    let answerSummary = '';
    const s4Match = content.match(/## 4\.[^\n]*\n+([\s\S]*?)(?=\n<div|\n---|$)/);
    if (s4Match) {
      answerSummary = s4Match[1].replace(/[*_#`]/g, '').trim();
    } else {
      const s1Match = content.match(/## 1\.[^\n]*\n+([\s\S]*?)(?=\n---|$)/);
      if (s1Match) {
        answerSummary = s1Match[1].replace(/[*_#`]/g, '').trim();
      }
    }

    if (!answerSummary) {
      answerSummary = summaryMatch ? summaryMatch[1].trim() : '권형근 대표원장의 1:1 맞춤 신경계 진단과 한방 치료 솔루션입니다.';
    }

    // 줄바꿈 제거 및 한 줄 요약으로 정리 (YAML html 블록 문법 보호)
    answerSummary = answerSummary.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim();
    if (answerSummary.length > 180) {
      answerSummary = answerSummary.slice(0, 180) + '...';
    }

    // 기본 태그 보충
    if (tags.length === 0) {
      if (categoryKey === 'tic') tags = ['소아틱장애', '성인ADHD', '두뇌훈련'];
      else if (categoryKey === 'insomnia') tags = ['수면장애', '불면증한의원', '수면제감약'];
      else if (categoryKey === 'panic') tags = ['공황장애', '예기불안', '과호흡응급대처'];
      else if (categoryKey === 'autonomic') tags = ['자율신경실조증', '어지럼증', '미주신경실신'];
      else if (categoryKey === 'stress') tags = ['화병', '매핵기', '우울증한방치료'];
      else tags = ['담적병', '신체화장애', '편두통'];
    }

    items.push({
      slug,
      title,
      dateStr,
      dateObj: !isNaN(dateObj.getTime()) ? dateObj : new Date('2026-09-01'),
      categoryKey,
      categoryName,
      location,
      patientInfo,
      summary: summaryMatch ? summaryMatch[1].trim() : '',
      answerSummary,
      tags
    });
  }

  // 최신 날짜순 정렬
  items.sort((a, b) => b.dateObj - a.dateObj);

  // 카테고리별 개수 산출
  const counts = {
    all: items.length,
    tic: 0,
    insomnia: 0,
    panic: 0,
    autonomic: 0,
    stress: 0,
    somatic: 0
  };

  items.forEach(item => {
    if (counts[item.categoryKey] !== undefined) {
      counts[item.categoryKey]++;
    }
  });

  // Q&A 카드 HTML 생성
  const qaCardsHtml = items.map(item => {
    const tagList = item.tags.slice(0, 3).map(t => `• ${t}`).join(' ');
    return `              <!-- [Q&A | ${item.categoryName}] ${item.title} -->
              <article class="qa-item ${item.categoryKey} heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="${item.categoryKey}">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">${item.categoryName}</span>
                    <span class="text-xs text-[#68736E]">${item.location} • ${item.dateStr}</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">${item.patientInfo}</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/${item.slug}/" class="hover:underline">
                        ${item.title}
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      ${item.answerSummary}
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">${tagList}</span>
                  <a href="/qa/${item.slug}/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>`;
  }).join('\n\n');

  const indexContent = `---
title: "Q&A 상담 사례"
linkTitle: "Q&A 상담사례"
summary: "인천 부평, 구월동, 송도, 부천 질환별 환자 상담 질문과 권형근 대표원장의 1:1 심층 전문 답변"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Clinical Case & Doctor Q&A</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              1:1 진료 Q&A 상담 사례
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              나와 비슷한 증상으로 고민하셨던 환자분들의 생생한 상담 내용과<br class="hidden sm:block">
              권형근 대표원장(한방침구과 전문의)의 1:1 심층 의학적 해답 및 치료 계획을 확인해보세요.
            </p>
          </div>

          <!-- 2. Q&A 카테고리 필터 탭 & 검색 -->
          <div class="space-y-8" id="qa-list-section">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-clipboard-question text-[#2F5D50]"></i>
                <span>질환별 1:1 전문 상담 사례</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하시면 원장님의 상세 전문 답변을 확인하실 수 있습니다.</div>
            </div>

            <!-- 탭 버튼 목록 -->
            <div class="flex flex-wrap gap-2 pb-2" id="qa-category-tabs">
              <button onclick="filterQA('all', this)" class="qa-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80" id="qa-tab-count-all">(${counts.all})</span>
              </button>
              <button onclick="filterQA('tic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80" id="qa-tab-count-tic">(${counts.tic})</span>
              </button>
              <button onclick="filterQA('insomnia', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80" id="qa-tab-count-insomnia">(${counts.insomnia})</span>
              </button>
              <button onclick="filterQA('panic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80" id="qa-tab-count-panic">(${counts.panic})</span>
              </button>
              <button onclick="filterQA('autonomic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80" id="qa-tab-count-autonomic">(${counts.autonomic})</span>
              </button>
              <button onclick="filterQA('stress', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80" id="qa-tab-count-stress">(${counts.stress})</span>
              </button>
              <button onclick="filterQA('somatic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80" id="qa-tab-count-somatic">(${counts.somatic})</span>
              </button>
            </div>

            <!-- Q&A 카드 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]" id="qa-grid">
${qaCardsHtml}
            </div>

            <!-- 페이지네이션 컨트롤 바 -->
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DDE6E1] pt-6 not-prose" id="qa-pagination-wrapper">
              <div class="text-xs sm:text-sm text-[#68736E] font-medium" id="qa-pagination-info">
                총 <strong class="text-[#2F5D50] font-bold" id="qa-total-count">${counts.all}</strong>개 상담사례 중 <span id="qa-page-range" class="font-semibold text-[#26332E]">1 - ${Math.min(8, counts.all)}</span>개 표시
              </div>
              <div class="flex items-center gap-1.5 flex-wrap justify-center" id="qa-pagination-controls">
                <!-- 동적 페이지 번호 버튼 -->
              </div>
            </div>

            <!-- 하단 빠른 상담 CTA 배너 -->
            <div class="heal-card bg-[#F2F7F4] p-6 sm:p-8 rounded-2xl border border-[#DDE6E1] space-y-4 mt-8">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div class="w-16 h-16 rounded-2xl overflow-hidden border border-[#DDE6E1] flex-shrink-0 bg-white shadow-xs">
                  <img src="/images/director.jpg" alt="권형근 대표원장" class="w-full h-full object-cover" />
                </div>
                <div class="space-y-1 text-center sm:text-left flex-1">
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E]">
                    "원장님과 1:1 상담 및 진료 예약을 원하시나요?"
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    카카오톡 실시간 채팅 상담과 24시간 네이버 예약, 전화 문의를 통해 편리하게 일정을 잡으실 수 있습니다.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a href="https://pf.kakao.com/_Tcxcxoxj" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-comment"></i>
                  <span>카카오톡 1:1 상담</span>
                </a>
                <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-calendar-check"></i>
                  <span>네이버 진료예약</span>
                </a>
                <a href="tel:032-719-3472" class="heal-btn heal-btn-primary text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-phone"></i>
                  <span>전화 문의 (032-719-3472)</span>
                </a>
              </div>
            </div>

          </div>

          <!-- JavaScript 필터링 & 반응형 페이지네이션 로직 -->
          <script>
            (function() {
              const ITEMS_PER_PAGE = 8;
              let currentCategory = 'all';
              let currentPage = 1;
              let filteredItems = [];

              function getFilteredItems() {
                const allItems = Array.from(document.querySelectorAll('.qa-item'));
                if (currentCategory === 'all') {
                  return allItems;
                }
                return allItems.filter(item => item.getAttribute('data-category') === currentCategory);
              }

              function updateDisplay(scrollToTop = false) {
                filteredItems = getFilteredItems();
                const totalCount = filteredItems.length;
                const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

                if (currentPage > totalPages) {
                  currentPage = totalPages;
                }

                const allItems = document.querySelectorAll('.qa-item');
                allItems.forEach(item => {
                  item.style.display = 'none';
                });

                const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
                const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalCount);

                for (let i = startIndex; i < endIndex; i++) {
                  if (filteredItems[i]) {
                    filteredItems[i].style.display = 'flex';
                  }
                }

                const totalCountEl = document.getElementById('qa-total-count');
                const rangeEl = document.getElementById('qa-page-range');

                if (totalCountEl) totalCountEl.textContent = totalCount;
                if (rangeEl) {
                  if (totalCount === 0) {
                    rangeEl.textContent = '0';
                  } else {
                    rangeEl.textContent = \`\${startIndex + 1} - \${endIndex}\`;
                  }
                }

                renderPaginationControls(totalPages);

                if (scrollToTop) {
                  const sectionEl = document.getElementById('qa-list-section');
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }

              function renderPaginationControls(totalPages) {
                const container = document.getElementById('qa-pagination-controls');
                if (!container) return;

                if (totalPages <= 1) {
                  container.innerHTML = '';
                  return;
                }

                let html = '';
                const prevDisabled = currentPage === 1;
                html += \`<button onclick="window.changeQAPage(\${currentPage - 1})" \${prevDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 \${prevDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <i class="fa-solid fa-chevron-left text-[10px]"></i>
                  <span>이전</span>
                </button>\`;

                let startPage = Math.max(1, currentPage - 2);
                let endPage = Math.min(totalPages, startPage + 4);
                if (endPage - startPage < 4) {
                  startPage = Math.max(1, endPage - 4);
                }

                if (startPage > 1) {
                  html += \`<button onclick="window.changeQAPage(1)" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">1</button>\`;
                  if (startPage > 2) {
                    html += \`<span class="text-xs text-gray-400 px-1">...</span>\`;
                  }
                }

                for (let p = startPage; p <= endPage; p++) {
                  const isActive = p === currentPage;
                  html += \`<button onclick="window.changeQAPage(\${p})" class="w-8 h-8 rounded-lg text-xs font-bold transition \${isActive ? 'bg-[#2F5D50] text-white shadow-sm' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">\${p}</button>\`;
                }

                if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                    html += \`<span class="text-xs text-gray-400 px-1">...</span>\`;
                  }
                  html += \`<button onclick="window.changeQAPage(\${totalPages})" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">\${totalPages}</button>\`;
                }

                const nextDisabled = currentPage === totalPages;
                html += \`<button onclick="window.changeQAPage(\${currentPage + 1})" \${nextDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 \${nextDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <span>다음</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>\`;

                container.innerHTML = html;
              }

              window.filterQA = function(category, btn) {
                currentCategory = category;
                currentPage = 1;

                const buttons = document.querySelectorAll('.qa-tab-btn');
                buttons.forEach(b => {
                  b.classList.remove('active-tab', 'bg-[#2F5D50]', 'text-white');
                  b.classList.add('bg-white', 'text-[#53615B]');
                });

                if (btn) {
                  btn.classList.add('active-tab', 'bg-[#2F5D50]', 'text-white');
                  btn.classList.remove('bg-white', 'text-[#53615B]');
                }

                updateDisplay(false);
              };

              window.changeQAPage = function(page) {
                currentPage = page;
                updateDisplay(true);
              };

              document.addEventListener('DOMContentLoaded', () => {
                const activeBtn = document.querySelector('.qa-tab-btn.active-tab');
                if (activeBtn) {
                  activeBtn.classList.add('bg-[#2F5D50]', 'text-white');
                }
                updateDisplay(false);
              });
            })();
          </script>

          <style>
            .qa-tab-btn {
              background-color: #ffffff;
              color: #53615B;
              border: 1px solid #DDE6E1;
            }
            .qa-tab-btn.active-tab {
              background-color: #2F5D50 !important;
              color: #ffffff !important;
              border-color: #2F5D50 !important;
            }
            .qa-tab-btn:hover:not(.active-tab) {
              background-color: #EAF3EF;
              color: #2F5D50;
            }
          </style>

        </div>
---
`;

  fs.writeFileSync(path.join(qaDir, '_index.md'), indexContent, 'utf8');
  console.log(`✅ [Rebuild QA Index] content/qa/_index.md 파일이 성공적으로 업데이트되었습니다. (총 ${items.length}개 Q&A 반영 완료)`);
}

// 직접 스크립트 실행 시
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  rebuildQAIndex();
}
