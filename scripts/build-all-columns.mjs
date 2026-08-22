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

// 질환군별 맞춤 통합 치료 솔루션 (섹션 5 차별화 설정)
function getSection5Config(category, slug) {
  if (category.includes('소아') || category.includes('ADHD') || category.includes('틱')) {
    return {
      title: '두뇌 발달과 감각 통합을 돕는 소아 맞춤 뇌신경 훈련 & 구조 솔루션',
      intro: '소아청소년의 뇌는 지금 이 순간에도 빠르게 성장하고 변화하는 과정에 있습니다. 따라서 단순히 신경전달물질을 억제하는 약물 치료에만 의존하기보다는, 두개천골계(CST)를 이완하여 뇌척수액 순환을 돕고 두뇌 감각 통합 훈련을 병행하여 아이 스스로 뇌 억제 브레이크를 튼튼하게 키울 수 있도록 돕습니다.',
      outro: '이처럼 아이의 체질에 맞춘 순한 한약 치료와 두뇌 감각 훈련이 조화를 이룰 때, 아이의 정서적 안정은 물론 학습 집중력과 자존감까지 함께 회복됩니다.'
    };
  } else if (category.includes('공황') || category.includes('불안') || category.includes('강박')) {
    return {
      title: '편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료',
      intro: '공황과 불안, 강박 사고는 뇌 변연계의 편도체(Amygdala)가 과도하게 경보를 울리며 횡격막과 흉곽 근육을 극도로 긴장시키는 상태입니다. 뇌의 공포 회로를 진정시키기 위해서는 자율신경을 안정시키는 미주신경 자극 침구 치료와 호흡 패턴 교정이 반드시 함께 이루어져야 합니다.',
      outro: '심담(心膽)을 강화하는 맞춤 한약과 자율신경 이완 치료가 결합되면, 예기치 못한 불안 자극 앞에서도 심장 박동과 호흡이 스스로 평정을 되찾게 됩니다.'
    };
  } else if (category.includes('자율신경') || category.includes('실신') || category.includes('어지럼') || category.includes('이명')) {
    if (slug === 'cervicogenic-dizziness' || slug === 'tinnitus-autonomic-dizziness') {
      return {
        title: '경추 신경 압박 해소와 내이 혈류를 개선하는 구조·한방 통합 솔루션',
        intro: '경추성 어지럼증과 신경성 이명은 목뼈의 비틀림으로 인한 추골동맥 및 뇌신경 압박, 그리고 내이(달팽이관·전정기관)로 가는 미세 혈류 장애가 핵심입니다. 상부 경추의 구조적 정렬과 뇌혈류 촉진 침구 치료를 동시에 진행해야 머리가 맑아집니다.',
        outro: '목과 턱의 신경 압박을 해소하는 추나·FCST 요법과 청간식풍(淸肝熄風) 한약이 함께 작용할 때, 만성적인 어지럼증과 귓속 잡음이 서서히 잦아듭니다.'
      };
    }
    return {
      title: '교감·부교감 균형을 복구하는 자율신경 재조절 & 심혈류 순환 치료',
      intro: '자율신경실조증은 교감신경과 부교감신경의 상호 조절 능력이 무너져 체온, 혈압, 소화, 심박수 조절에 이상이 생긴 상태입니다. 목 부위 성상신경절(SGB) 침치료와 경락 약침을 통해 상체로 치솟는 열을 내리고 전신 혈류 순환을 정상화합니다.',
      outro: '오장육부의 기혈을 보강하는 맞춤 한약과 자율신경 조절 치료를 통해 물먹은 솜 같던 몸의 자생력을 근본적으로 회복시킵니다.'
    };
  } else if (category.includes('불면증') || category.includes('수면')) {
    return {
      title: '과열된 뇌 스위치를 끄는 수면 뇌파 안정 & 심신(心腎) 조화 치료',
      intro: '밤마다 잠을 이루지 못하거나 자주 깨는 것은 뇌의 디폴트모드네트워크(DMN)가 꺼지지 않고 심장과 간의 허열(虛熱)이 뇌로 치솟기 때문입니다. 두피와 심장 경락의 특효혈(백회·신문·안면혈) 침치료를 통해 과열된 뇌파를 델타파(깊은 수면파)로 유도합니다.',
      outro: '수면제 의존 없이도 자연스럽게 졸음이 찾아오도록 뇌 신경망을 진정시키는 한방 수면 치료로 개운한 아침을 되찾아 드립니다.'
    };
  } else if (category.includes('우울증') || category.includes('화병') || category.includes('번아웃')) {
    return {
      title: '가슴의 맺힌 울화를 풀고 뇌 세로토닌을 깨우는 해울(解鬱) 신경 치료',
      intro: '화병과 우울증, 번아웃은 억압된 감정과 만성 스트레스로 인해 가슴 정중앙(전중혈)의 기운이 꽉 막히고 뇌 세로토닌·도파민 신경망이 방전된 상태입니다. 가슴과 목구멍의 기혈 울체를 뚫어주는 소간해울(疏肝解鬱) 침구 치료로 답답함을 즉각 해소합니다.',
      outro: '뇌 신경전달물질의 활성을 돕는 맞춤 한약과 신체 활력 회복 치료가 결합되어 무기력감의 늪에서 벗어날 수 있는 힘을 길러드립니다.'
    };
  } else {
    // 신체화, 담적, 두통, 턱관절
    if (slug === 'tmj-bruxism-stress') {
      return {
        title: '턱관절 디스크와 경추 정렬을 바로잡는 FCST 뇌척주요법 & 침구 치료',
        intro: '턱관절은 하루 2,000번 이상 움직이며 뇌간으로 수많은 신경 신호를 보내는 핵심 부위입니다. 수면 중 이악물기와 이갈이로 인한 턱관절 편차를 FCST 구강내 균형장치와 경추 추나요법으로 바로잡아 턱 통증과 연관 두통을 근본 치료합니다.',
        outro: '구조적 턱관절 교정과 턱 근육의 긴장을 푸는 작약감초탕 계열 한약 치료가 결합될 때 턱의 소리와 통증, 안면 비대칭이 함께 호전됩니다.'
      };
    }
    return {
      title: '굳어진 위장과 뇌-장 신경망을 부드럽게 되살리는 복부 온열 & 한방 치료',
      intro: '신경성 소화장애, 긴장성 두통, 담적병은 뇌와 장이 미주신경으로 연결된 뇌-장 축(Gut-Brain Axis)의 기능 이상입니다. 딱딱하게 굳은 명치와 복부 근육을 온열 침구와 약침으로 풀어 위장 평활근의 자율 연동 운동을 복구합니다.',
      outro: '위장 외벽의 담적 독소를 녹이는 맞춤 한약과 복부 순환 치료를 통해 더부룩함과 두통 없는 가벼운 일상을 완성합니다.'
    };
  }
}

// 개별 마크다운 파일 렌더링 함수
function renderColumnFile(c) {
  const cleanTitle = c.title.replace(/"/g, "'");
  const cleanSummary = c.summary.replace(/"/g, "'");
  const sec5 = getSection5Config(c.category, c.slug);
  
  // 1. Voice Box Quotes
  const voiceLinesHtml = c.voiceQuotes.map(q => {
    const cleanQuote = q.replace(/^["'“\s]+|["'”\s]+$/g, '');
    return `  <div class="voice-line">${cleanQuote}</div>`;
  }).join('\n');

  // 2. 인트로 본문
  const introParagraphs = c.introText.join('\n\n');

  // 3. 목차(TOC) 6대 표준 통일 매핑
  const standardToc = [
    c.toc[0] || `${cleanTitle.split('?')[0].trim()}의 신경학적 핵심 원인과 진행 메커니즘`,
    `진료실에서 가장 먼저 살피는 생활 속 단서와 전조 신호`,
    `국내외 임상 연구와 한의학적 치료 보고`,
    `한의학에서 바라보는 환자별 3대 맞춤 체질 유형`,
    sec5.title,
    `환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)`
  ];

  const tocListHtml = standardToc.map(item => `    <li>${item}</li>`).join('\n');

  // 4. 흐름도 다이어그램 HTML
  const flowStepsHtml = c.flow.steps.map((step, idx) => 
    `      <span class="bg-[#202947] text-white px-3 py-1.5 rounded-xl font-semibold shadow-sm">${step}</span>` +
    (idx < c.flow.steps.length - 1 ? `\n      <i class="fa-solid fa-arrow-right text-[#2F5D50] text-xs"></i>` : '')
  ).join('\n');

  // 5. 진료실 질문 체크리스트 HTML
  const clinicItemsHtml = c.clinicBox.items.map(it => 
    `      <li class="flex items-start gap-2"><span class="text-[#2F5D50] font-bold">✓</span><span>${it}</span></li>`
  ).join('\n');

  // 6. 학술 연구 박스 HTML
  const researchItemsHtml = c.researchBox.items.map(it => 
    `      <div class="flex items-start gap-2 text-xs sm:text-sm text-[#26332E] font-medium"><span class="text-[#2F5D50]">📄</span><span>${it}</span></div>`
  ).join('\n');

  // 7. 한의학 3대 체질 유형 카드 HTML
  const typeCardsHtml = c.typeCards.map(tc => 
    `    <div class="p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-2">
      <div class="flex items-center gap-2.5">
        <span class="text-xl">${tc.icon}</span>
        <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">${tc.title}</h3>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${tc.desc}
      </p>
    </div>`
  ).join('\n');

  // 8. 구조/신경 치료 솔루션 카드 HTML
  const structCardsHtml = c.structCards.map(sc => 
    `    <div class="bg-white rounded-2xl border border-[#DDE6E1] overflow-hidden shadow-sm flex flex-col justify-between">
      <div class="bg-[#202947] p-3.5 px-4 flex items-center justify-between text-white">
        <span class="text-xs font-bold text-[#B4C2DC]">${sc.badge}</span>
        <span class="text-xs font-extrabold">${sc.title}</span>
      </div>
      <div class="p-4 sm:p-5 text-xs sm:text-sm text-[#4E6159] leading-relaxed">
        ${sc.body}
      </div>
    </div>`
  ).join('\n');

  // 9. FAQ 항목 HTML
  const faqItemsHtml = c.faq.map((fq, idx) => 
    `    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q${idx + 1}</span>
        <span>${fq.q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${fq.a}
      </p>
    </div>`
  ).join('\n');

  return `---
title: "${cleanTitle}"
summary: "${cleanSummary}"
date: "${c.date}"
type: column
category: "${c.category}"
tags: ${JSON.stringify(c.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
${tocListHtml}
  </ol>
</div>

<div class="section-label">핵심 병리 기전 01</div>

## ${standardToc[0]}

<div class="my-6 p-4 sm:p-5 bg-[#F2F7F4] rounded-2xl border border-[#DDE6E1] not-prose">
  <div class="text-xs font-bold text-[#2F5D50] mb-3 text-center">📊 ${c.flow.title}</div>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
${flowStepsHtml}
  </div>
</div>

${c.section1Text.trim()}

---

<div class="section-label">진료실 현장 관찰 02</div>

## ${standardToc[1]}

진료실에 찾아오시는 많은 환자분들과 보호자분들은 '내가 왜 이런 증상을 겪게 되었는지' 단순히 최근의 과도한 스트레스나 피로 때문이라고만 생각하십니다. 

하지만 임상 현장에서 맥진(脈診), 설진(舌診), 자율신경 검사(HRV), 그리고 체형·구조 진단을 함께 진행해보면, 스트레스 이전부터 몸의 균형을 서서히 무너뜨리고 있던 여러 가지 생활 속 신호들을 발견하게 됩니다.

<div class="my-6 p-5 bg-[#FAFBF9] rounded-2xl border border-[#E2EAE5] space-y-3 not-prose">
  <div class="font-extrabold text-[#2F5D50] text-sm sm:text-base flex items-center gap-2">
    <i class="fa-solid fa-stethoscope text-[#2F5D50]"></i>
    <span>${c.clinicBox.title}</span>
  </div>
  <ul class="space-y-2 text-xs sm:text-sm text-[#4E6159] pl-1 list-none m-0">
${clinicItemsHtml}
  </ul>
</div>

위의 문항들은 단순한 신체 습관이 아니라, **뇌신경계와 자율신경계가 만성적인 과부하 상태에 놓여 있음을 알리는 몸의 SOS 신호**입니다. 이러한 신호들이 누적되면 신경 전달 물질의 불균형이 가속화되고 뇌의 자율 조절 능력이 저하되어 증상이 만성화되기 쉽습니다.

---

<div class="section-label">학술 연구 & 임상 근거 03</div>

## ${standardToc[2]}

한의학적 뇌신경 치료는 단순히 주관적인 느낌이나 경험에만 의존하지 않습니다. 최근 국내외 학계에서는 한약 처방의 신경 보호 효과, 침구 치료의 뇌혈류 개선, 그리고 턱관절 및 상부 경추 구조 치료가 뇌간 신경망에 미치는 영향에 대한 객관적인 임상 연구와 증례 보고들이 꾸준히 발표되고 있습니다.

<div class="my-6 p-5 bg-white rounded-2xl border-2 border-[#2F5D50]/30 shadow-sm space-y-3 not-prose">
  <div class="text-xs font-extrabold text-[#2F5D50] tracking-wider uppercase flex items-center gap-1.5">
    <i class="fa-solid fa-book-medical"></i>
    <span>${c.researchBox.title}</span>
  </div>
  <div class="space-y-2">
${researchItemsHtml}
  </div>
  <div class="pt-3 mt-3 border-t border-dashed border-[#DDE6E1] text-xs text-[#68736E] leading-relaxed italic">
    💡 ${c.researchBox.note}
  </div>
</div>

이러한 임상 연구들이 시사하는 바는 명확합니다. 증상을 단순히 화학적으로 억누르는 일시적인 대증요법을 넘어, **신경계의 자생력을 키우고 구조적 신경 압박을 해소할 때 장기적인 치료 호전율이 높아지고 치료 종료 후에도 재발 위험을 현저히 낮출 수 있다는 점**입니다.

---

<div class="section-label">맞춤 한의학 변증 04</div>

## ${standardToc[3]}

한의학 치료의 가장 큰 강점은 같은 진단명을 가진 환자라도 각자의 체질적 취약점과 병리적 원인을 정밀하게 분류하여 맞춤 처방을 적용한다는 점입니다. 

사람마다 심장이 약해 불안을 느끼는 경우, 간열(肝熱)이 치솟아 흥분하는 경우, 비위가 허약해 기운이 바닥난 경우가 모두 다릅니다.

<div class="grid grid-cols-1 gap-4 my-6 not-prose">
${typeCardsHtml}
</div>

따라서 치료 시에는 획일적인 처방이 아닌, 환자 개개인의 맥과 혀, 신체 상태를 종합적으로 진찰하여 **뇌의 과흥분을 가라앉히고 오장육부의 균형을 맞춰주는 1:1 맞춤 한약**을 처방합니다.

---

<div class="section-label">해아림 통합 치료 솔루션 05</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">진료실 자주 묻는 질문 06</div>

## ${standardToc[5]}

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${c.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
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
