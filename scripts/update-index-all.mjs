import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

// 6대 핵심 진료 분야 표준화 매핑
const CATEGORY_ASSIGNMENT = {
  // 1. 공황 · 불안 & 강박증 (5편)
  'panic-disorder-breathing': '공황 · 불안 & 강박증',
  'anticipatory-anxiety': '공황 · 불안 & 강박증',
  'claustrophobia-agoraphobia': '공황 · 불안 & 강박증',
  'social-anxiety-tremor': '공황 · 불안 & 강박증',
  'ocd-compulsive-thoughts': '공황 · 불안 & 강박증',

  // 2. 자율신경 & 실신·어지럼증·이명 (5편)
  'autonomic-fatigue': '자율신경 & 실신·어지럼증·이명',
  'vasovagal-syncope': '자율신경 & 실신·어지럼증·이명',
  'autonomic-palpitation-sweating': '자율신경 & 실신·어지럼증·이명',
  'cervicogenic-dizziness': '자율신경 & 실신·어지럼증·이명',
  'tinnitus-autonomic-dizziness': '자율신경 & 실신·어지럼증·이명',

  // 3. 불면증 & 수면장애 (4편)
  'insomnia-sleep-maintenance': '불면증 & 수면장애',
  'sleep-onset-insomnia': '불면증 & 수면장애',
  'nightmare-sleep-paralysis': '불면증 & 수면장애',
  'sleeping-pill-withdrawal': '불면증 & 수면장애',

  // 4. 소아청소년 & 성인 ADHD·틱장애 (5편)
  'child-tic-disorder': '소아청소년 & 성인 ADHD·틱장애',
  'vocal-tic-tourette': '소아청소년 & 성인 ADHD·틱장애',
  'child-adhd-concentration': '소아청소년 & 성인 ADHD·틱장애',
  'child-night-terror-anxiety': '소아청소년 & 성인 ADHD·틱장애',
  'adult-adhd-executive-dysfunction': '소아청소년 & 성인 ADHD·틱장애',

  // 5. 우울증 · 화병 & 번아웃 (3편)
  'hwabyeong-maehaekgi': '우울증 · 화병 & 번아웃',
  'chronic-depression-lethargy': '우울증 · 화병 & 번아웃',
  'burnout-somatization': '우울증 · 화병 & 번아웃',

  // 6. 신체화 & 담적·두통·턱관절 (3편)
  'stress-headache-digestion': '신체화 & 담적·두통·턱관절',
  'damjeok-functional-dyspepsia': '신체화 & 담적·두통·턱관절',
  'tmj-bruxism-stress': '신체화 & 담적·두통·턱관절'
};

const CATEGORY_MAP = {
  '공황 · 불안 & 강박증': { class: 'panic', tab: 'panic' },
  '자율신경 & 실신·어지럼증·이명': { class: 'autonomic', tab: 'autonomic' },
  '불면증 & 수면장애': { class: 'insomnia', tab: 'insomnia' },
  '소아청소년 & 성인 ADHD·틱장애': { class: 'tic', tab: 'tic' },
  '우울증 · 화병 & 번아웃': { class: 'stress', tab: 'stress' },
  '신체화 & 담적·두통·턱관절': { class: 'somatic', tab: 'somatic' }
};

// 1. 각 칼럼 파일의 프론트매터 카테고리 업데이트
Object.entries(CATEGORY_ASSIGNMENT).forEach(([slug, category]) => {
  const filePath = path.join(columnDir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/^category:\s*".*?"/m, `category: "${category}"`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// 2. 전체 칼럼 메타데이터 로드
const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
const columns = [];

files.forEach(f => {
  const filePath = path.join(columnDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const slug = f.replace('.md', '');

  const fmMatch = content.match(/^---([\s\S]*?)---/);
  if (fmMatch) {
    const fm = fmMatch[1];
    const titleMatch = fm.match(/title:\s*"(.*?)"/);
    const dateMatch = fm.match(/date:\s*([\d-]+)/);
    const summaryMatch = fm.match(/summary:\s*"(.*?)"/);
    const categoryMatch = fm.match(/category:\s*"(.*?)"/);
    const tagsMatch = fm.match(/tags:\s*\n((?:\s*-\s*".*?"\r?\n?)+)/);

    let tags = [];
    if (tagsMatch) {
      tags = tagsMatch[1].split(/\r?\n/).map(t => t.replace(/^\s*-\s*"/, '').replace(/"\s*$/, '').trim()).filter(Boolean);
    }

    const title = titleMatch ? titleMatch[1] : '';
    const date = dateMatch ? dateMatch[1] : '2026-08-20';
    const summary = summaryMatch ? summaryMatch[1] : '';
    const category = categoryMatch ? categoryMatch[1] : (CATEGORY_ASSIGNMENT[slug] || '공황 · 불안 & 강박증');

    columns.push({
      slug,
      title,
      date,
      summary,
      category,
      tags: tags.slice(0, 4)
    });
  }
});

// 날짜순 내림차순 정렬
columns.sort((a, b) => new Date(b.date) - new Date(a.date));

// 카테고리별 카운트
const counts = {
  all: columns.length,
  panic: columns.filter(c => c.category === '공황 · 불안 & 강박증').length,
  autonomic: columns.filter(c => c.category === '자율신경 & 실신·어지럼증·이명').length,
  insomnia: columns.filter(c => c.category === '불면증 & 수면장애').length,
  tic: columns.filter(c => c.category === '소아청소년 & 성인 ADHD·틱장애').length,
  stress: columns.filter(c => c.category === '우울증 · 화병 & 번아웃').length,
  somatic: columns.filter(c => c.category === '신체화 & 담적·두통·턱관절').length
};

console.log('6 Pillars Category Counts:', counts);

// 카드 HTML 생성
const cardsHtml = columns.map(c => {
  const catInfo = CATEGORY_MAP[c.category] || { class: 'panic' };
  const tagsString = c.tags.map(t => `• ${t}`).join(' ');

  return `              <!-- [${c.category}] ${c.title} -->
              <article class="column-item ${catInfo.class} heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">${c.category}</span>
                    <span class="text-xs text-[#68736E]">${c.date} • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/${c.slug}/" class="hover:underline">
                      ${c.title}
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    ${c.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">${tagsString}</span>
                  <a href="/column/${c.slug}/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>`;
}).join('\n\n');

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
                전체보기 <span class="text-[11px] opacity-80">(${counts.all})</span>
              </button>
              <button onclick="filterColumn('panic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80">(${counts.panic})</span>
              </button>
              <button onclick="filterColumn('autonomic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80">(${counts.autonomic})</span>
              </button>
              <button onclick="filterColumn('insomnia', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80">(${counts.insomnia})</span>
              </button>
              <button onclick="filterColumn('tic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80">(${counts.tic})</span>
              </button>
              <button onclick="filterColumn('stress', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80">(${counts.stress})</span>
              </button>
              <button onclick="filterColumn('somatic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80">(${counts.somatic})</span>
              </button>
            </div>

            <!-- 칼럼 카드 그리드 (개별 상세 페이지 직결 링크) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

${cardsHtml}

            </div>
          </div>

          <!-- JavaScript 카테고리 필터링 스크립트 -->
          <style>
            .column-tab-btn {
              background-color: #F2F7F4;
              color: #4E6159;
              border: 1px solid #DDE6E1;
              cursor: pointer;
            }
            .column-tab-btn:hover {
              background-color: #E2EAE6;
              color: #26332E;
            }
            .column-tab-btn.active-tab {
              background-color: #2F5D50 !important;
              color: #ffffff !important;
              border-color: #2F5D50 !important;
              box-shadow: 0 2px 6px rgba(47, 93, 80, 0.25);
            }
          </style>

          <script>
            function filterColumn(category, btn) {
              var tabs = document.querySelectorAll('.column-tab-btn');
              tabs.forEach(function(t) {
                t.classList.remove('active-tab');
              });
              btn.classList.add('active-tab');

              var items = document.querySelectorAll('.column-item');
              items.forEach(function(item) {
                if (category === 'all') {
                  item.style.display = 'flex';
                } else {
                  if (item.classList.contains(category)) {
                    item.style.display = 'flex';
                  } else {
                    item.style.display = 'none';
                  }
                }
              });
            }
          </script>

          <!-- 3. 상담/예약 배너 -->
          <div class="text-center pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:032-719-3472" class="heal-btn heal-btn-primary">
              <i class="fa-solid fa-phone"></i>
              <span>전화 상담: 032-719-3472</span>
            </a>
            <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao">
              <i class="fa-solid fa-comment"></i>
              <span>카카오톡 1:1 상담</span>
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver">
              <i class="fa-solid fa-calendar-check"></i>
              <span>네이버 진료 예약</span>
            </a>
          </div>

        </div>
---
`;

fs.writeFileSync(path.join(columnDir, '_index.md'), indexContent, 'utf8');
console.log('✅ Successfully updated content/column/_index.md with 6 Core Pillars (25 Columns)!');
