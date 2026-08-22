import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { TIC_ADHD_COLUMNS } from './columns-data-1-tic-adhd.mjs';
import { PANIC_ANXIETY_COLUMNS } from './columns-data-2-panic-anxiety.mjs';
import { AUTONOMIC_COLUMNS } from './columns-data-3-autonomic.mjs';
import { INSOMNIA_COLUMNS } from './columns-data-4-insomnia.mjs';
import { DEPRESSION_SOMATIC_COLUMNS } from './columns-data-5-depression-somatic.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

// 전체 25개 칼럼 취합
const ALL_COLUMNS = [
  ...TIC_ADHD_COLUMNS,
  ...PANIC_ANXIETY_COLUMNS,
  ...AUTONOMIC_COLUMNS,
  ...INSOMNIA_COLUMNS,
  ...DEPRESSION_SOMATIC_COLUMNS
];

console.log(`총 ${ALL_COLUMNS.length}개의 전문 심층 칼럼 데이터가 로드되었습니다.`);

// 개별 마크다운 파일 렌더링 함수
function renderColumnFile(c) {
  const cleanTitle = c.title.replace(/"/g, "'");
  const cleanSummary = c.summary.replace(/"/g, "'");
  const frontmatter = `---
title: "${cleanTitle}"
summary: "${cleanSummary}"
date: "${c.date}"
type: column
category: "${c.category}"
tags: ${JSON.stringify(c.tags)}
---

<!-- 1. 진료실 목소리 Voice Box -->
<div class="voice-box">
${c.voiceQuotes.map(q => {
  const cleanQuote = q.replace(/^["'“\s]+|["'”\s]+$/g, '');
  return `  <div class="voice-line">${cleanQuote}</div>`;
}).join('\n')}
</div>

<!-- 2. 인트로 본문 -->
<div class="intro-body">
${c.introText.map(p => `  <p>${p}</p>`).join('\n')}
</div>

<!-- 3. 목차 TOC Box -->
<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
${c.toc.map(item => `    <li>${item}</li>`).join('\n')}
  </ol>
</div>

<!-- 4. 본론 1: 기전 및 흐름 다이어그램 -->
<div class="section">
  <div class="section-label">핵심 병리 기전 01</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[0]}</h2>
  
  <div class="my-6 p-4 sm:p-5 bg-[#F2F7F4] rounded-2xl border border-[#DDE6E1]">
    <div class="text-xs font-bold text-[#2F5D50] mb-3 text-center">📊 ${c.flow.title}</div>
    <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
${c.flow.steps.map((step, idx) => `      <span class="bg-[#202947] text-white px-3 py-1.5 rounded-xl font-semibold shadow-sm">${step}</span>
${idx < c.flow.steps.length - 1 ? '      <i class="fa-solid fa-arrow-right text-[#2F5D50] text-xs"></i>' : ''}`).join('\n')}
    </div>
  </div>

  <div class="text-sm sm:text-base leading-relaxed text-[#3D4D47] space-y-4">
${c.section1Text.trim()}
  </div>
</div>

<hr class="my-8 border-[#E2EAE5]">

<!-- 5. 본론 2: 진료실 질문 박스 -->
<div class="section">
  <div class="section-label">진료실 현장 관찰 02</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[1]}</h2>
  
  <div class="my-6 p-5 bg-[#FAFBF9] rounded-2xl border border-[#E2EAE5] space-y-3">
    <div class="font-extrabold text-[#2F5D50] text-sm sm:text-base flex items-center gap-2">
      <i class="fa-solid fa-stethoscope text-[#2F5D50]"></i>
      <span>${c.clinicBox.title}</span>
    </div>
    <ul class="space-y-2 text-xs sm:text-sm text-[#4E6159] pl-1">
${c.clinicBox.items.map(it => `      <li class="flex items-start gap-2"><span class="text-[#2F5D50] font-bold">✓</span><span>${it}</span></li>`).join('\n')}
    </ul>
  </div>
</div>

<hr class="my-8 border-[#E2EAE5]">

<!-- 6. 본론 3: 임상 연구 및 학술 박스 -->
<div class="section">
  <div class="section-label">학술 연구 & 임상 근거 03</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[2]}</h2>
  
  <div class="my-6 p-5 bg-white rounded-2xl border-2 border-[#2F5D50]/30 shadow-sm space-y-3">
    <div class="text-xs font-extrabold text-[#2F5D50] tracking-wider uppercase flex items-center gap-1.5">
      <i class="fa-solid fa-book-medical"></i>
      <span>${c.researchBox.title}</span>
    </div>
    <div class="space-y-2">
${c.researchBox.items.map(it => `      <div class="flex items-start gap-2 text-xs sm:text-sm text-[#26332E] font-medium"><span class="text-[#2F5D50]">📄</span><span>${it}</span></div>`).join('\n')}
    </div>
    <div class="pt-3 mt-3 border-t border-dashed border-[#DDE6E1] text-xs text-[#68736E] leading-relaxed italic">
      💡 ${c.researchBox.note}
    </div>
  </div>
</div>

<hr class="my-8 border-[#E2EAE5]">

<!-- 7. 본론 4: 한의학 3대 체질 유형 카드 -->
<div class="section">
  <div class="section-label">맞춤 한의학 변증 04</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[3]}</h2>
  
  <div class="grid grid-cols-1 gap-4 my-6">
${c.typeCards.map(tc => `    <div class="p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-2">
      <div class="flex items-center gap-2.5">
        <span class="text-xl">${tc.icon}</span>
        <h3 class="font-extrabold text-sm sm:text-base text-[#202947]">${tc.title}</h3>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8">
        ${tc.desc}
      </p>
    </div>`).join('\n')}
  </div>
</div>

<hr class="my-8 border-[#E2EAE5]">

<!-- 8. 본론 5: 구조 및 뇌신경 통합 치료 -->
<div class="section">
  <div class="section-label">해아림 통합 치료 솔루션 05</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[4]}</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
${c.structCards.map(sc => `    <div class="bg-white rounded-2xl border border-[#DDE6E1] overflow-hidden shadow-sm flex flex-col justify-between">
      <div class="bg-[#202947] p-3.5 px-4 flex items-center justify-between text-white">
        <span class="text-xs font-bold text-[#B4C2DC]">${sc.badge}</span>
        <span class="text-xs font-extrabold">${sc.title}</span>
      </div>
      <div class="p-4 sm:p-5 text-xs sm:text-sm text-[#4E6159] leading-relaxed">
        ${sc.body}
      </div>
    </div>`).join('\n')}
  </div>
</div>

<hr class="my-8 border-[#E2EAE5]">

<!-- 9. 현실적 FAQ -->
<div class="section">
  <div class="section-label">진료실 자주 묻는 질문 06</div>
  <h2 class="text-xl sm:text-2xl font-bold text-[#26332E] pb-2 border-b border-[#DDE6E1]">${c.toc[5]}</h2>
  
  <div class="space-y-4 my-6">
${c.faq.map((fq, idx) => `    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q${idx + 1}</span>
        <span>${fq.q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8">
        ${fq.a}
      </p>
    </div>`).join('\n')}
  </div>
</div>

<!-- 10. 마무리 및 원장 조언 -->
<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium">
    "${c.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
  return frontmatter;
}

// 1. 25개 마크다운 파일 쓰기
let writtenCount = 0;
for (const col of ALL_COLUMNS) {
  const filePath = path.join(columnDir, `${col.slug}.md`);
  const content = renderColumnFile(col);
  fs.writeFileSync(filePath, content, 'utf8');
  writtenCount++;
  console.log(`[작성 완료 ${writtenCount}/25] ${col.slug}.md`);
}

// 2. content/column/_index.md 업데이트
function getCategoryClass(cat) {
  if (cat.includes('공황') || cat.includes('불안') || cat.includes('강박')) return 'panic';
  if (cat.includes('자율신경') || cat.includes('실신') || cat.includes('어지럼') || cat.includes('이명')) return 'autonomic';
  if (cat.includes('불면증') || cat.includes('수면')) return 'insomnia';
  if (cat.includes('소아') || cat.includes('ADHD') || cat.includes('틱')) return 'tic';
  if (cat.includes('우울증') || cat.includes('화병') || cat.includes('번아웃')) return 'stress';
  if (cat.includes('신체화') || cat.includes('담적') || cat.includes('두통') || cat.includes('턱관절')) return 'somatic';
  return 'all';
}

const columnCardsHtml = ALL_COLUMNS.map(col => {
  const catClass = getCategoryClass(col.category);
  return `
              <!-- [${col.category}] ${col.title} -->
              <article class="column-item ${catClass} heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">${col.category}</span>
                    <span class="text-xs text-[#68736E]">${col.date} • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/${col.slug}/" class="hover:underline">
                      ${col.title}
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    ${col.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/${col.slug}/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>`;
}).join('\n');

const indexContent = `---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "인천 부평, 구월동, 송도, 부천, 시흥, 청라 질환별 권형근 대표원장의 심층 건강 의학 칼럼"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Health Column & In-Depth Insights</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              질환별 심층 건강 의학 칼럼
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              권형근 대표원장(한방침구과 전문의)이 임상 현장에서 직접 집필하는 6대 진료 분야별 병리 기전, 정밀 진단 및 근본 자생력 회복 가이드입니다.
            </p>
          </div>

          <!-- 2. 질환별 카테고리 필터 탭 (6대 진료영역 통합) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>6대 핵심 진료 분야별 전문 칼럼</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하시면 해당 칼럼의 상세 전문 페이지로 이동합니다.</div>
            </div>

            <!-- 탭 버튼 목록 (6대 분야) -->
            <div class="flex flex-wrap gap-2 pb-2" id="column-category-tabs">
              <button onclick="filterColumn('all', this)" class="column-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80">(25)</span>
              </button>
              <button onclick="filterColumn('panic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('autonomic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('insomnia', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80">(4)</span>
              </button>
              <button onclick="filterColumn('tic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('stress', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80">(3)</span>
              </button>
              <button onclick="filterColumn('somatic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80">(3)</span>
              </button>
            </div>

            <!-- 칼럼 카드 그리드 (개별 상세 페이지 직결 링크) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">
${columnCardsHtml}
            </div>
          </div>

          <!-- JavaScript 카테고리 필터링 스크립트 -->
          <script>
            function filterColumn(category, btn) {
              const items = document.querySelectorAll('.column-item');
              const buttons = document.querySelectorAll('.column-tab-btn');

              buttons.forEach(b => {
                b.classList.remove('active-tab', 'bg-[#2F5D50]', 'text-white');
                b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
              });
              btn.classList.add('active-tab', 'bg-[#2F5D50]', 'text-white');
              btn.classList.remove('bg-[#EAF3EF]', 'text-[#2F5D50]');

              items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                  item.style.display = 'flex';
                } else {
                  item.style.display = 'none';
                }
              });
            }

            document.addEventListener('DOMContentLoaded', () => {
              const activeBtn = document.querySelector('.column-tab-btn.active-tab');
              if (activeBtn) {
                activeBtn.classList.add('bg-[#2F5D50]', 'text-white');
              }
              const otherBtns = document.querySelectorAll('.column-tab-btn:not(.active-tab)');
              otherBtns.forEach(b => {
                b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
              });
            });
          </script>

        </div>
---
`;

fs.writeFileSync(path.join(columnDir, '_index.md'), indexContent, 'utf8');
console.log('content/column/_index.md 파일이 성공적으로 업데이트되었습니다.');
console.log('총 25개 칼럼 및 _index.md 빌드가 완료되었습니다.');

