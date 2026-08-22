import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { publishToTistory, formatTistoryContent } from './publish-tistory.mjs';
import { rebuildColumnIndex } from './build-all-columns.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 주요 타겟 지역 풀 (12개 핵심 권역 로테이션)
const REGION_POOLS = [
  { short: '인천 부평', full: '부평구(부평동, 산곡동, 삼산동, 부개동, 십정동, 청천동, 갈산동)' },
  { short: '인천 구월동', full: '남동구(구월동, 간석동, 만수동, 서창동, 논현동)' },
  { short: '부천 상동', full: '부천시(상동, 중동, 신중동, 송내동)' },
  { short: '시흥 배곧', full: '시흥시(배곧신도시, 정왕동, 대야동, 은행동)' },
  { short: '인천 청라', full: '인천 서구(청라국제도시, 루원시티, 가정동, 검단)' },
  { short: '인천 송도', full: '인천 연수구(송도국제도시, 동춘동, 연수동)' },
  { short: '인천 계양구', full: '계양구(계산동, 작전동, 효성동)' },
  { short: '부천 중동', full: '부천시(신중동, 중동, 원미동)' },
  { short: '인천 간석동', full: '남동구 및 미추홀구(간석동, 주안동, 만수동)' },
  { short: '시흥 은계', full: '시흥시(은계지구, 대야동, 은행동, 목감)' },
  { short: '김포 검단', full: '김포시(구래동, 풍무동) 및 인천 검단구' },
  { short: '인천 영종도', full: '인천 중구(영종하늘도시, 운서동, 동인천)' }
];

// 2. 6대 진료영역별 카테고리 및 심층 의학 주제 풀
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안 & 강박증',
    categoryClass: 'panic',
    topics: [
      { titleSuffix: '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법', focus: '공황발작 응급 호흡 및 편도체 안정 한약' },
      { titleSuffix: '“또 발작 올까 두려운” 예기불안과 뇌 변연계 안정 한방 치료', focus: '24시간 지속되는 예기불안 차단' },
      { titleSuffix: '지하철·엘리베이터 공포증과 광장공포증, 공간 지각 왜곡 극복법', focus: '밀폐공간 공포증 및 광장공포증' },
      { titleSuffix: '발표할 때 목소리 떨림과 심장 두근거림, 사회공포증 한의학 솔루션', focus: '사회공포증 및 발표불안' },
      { titleSuffix: '문 잠갔을까 끊임없이 의심되는 확인 강박사고의 뇌 회로 안정법', focus: '강박장애 및 CSTC 회로 과열' }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    categoryClass: 'insomnia',
    topics: [
      { titleSuffix: '새벽 3~4시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리', focus: '새벽 중도각성 및 수면유지장애' },
      { titleSuffix: '수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬', focus: '수면유도제 내성 극복 및 자연 수면' },
      { titleSuffix: '잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 DMN 과각성 해소법', focus: '입면장애 및 뇌 과각성 완화' },
      { titleSuffix: '악몽과 가위눌림, 심비양허를 보강하여 깊은 델타파 숙면 유도', focus: '다몽증 및 렘수면 행동장애' }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 & 실신·어지럼증·이명',
    categoryClass: 'autonomic',
    topics: [
      { titleSuffix: '만성피로와 자율신경계 기능 저하의 관계, 한스셀리에 3단계 소진과 한방 치료', focus: '만성피로와 자율신경실조증' },
      { titleSuffix: '출퇴근길 갑자기 핑 돌고 쓰러지는 미주신경성 실신의 전조증상과 한방 치료', focus: '미주신경성 실신 및 기립성 어지럼증' },
      { titleSuffix: '긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방', focus: '수족다한증 및 상열하한' },
      { titleSuffix: '검사상 이상 없는 만성 어지럼증과 멍함, 상부 경추(C1-C2)와 추골동맥의 관계', focus: '경추성 어지럼증 및 브레인포그' },
      { titleSuffix: '피곤하면 더 커지는 귀뚜라미·삐 소리, 신경성 이명과 뇌명증 한방 치료', focus: '신경성 이명 및 내이 혈류장애' }
    ]
  },
  {
    id: 'tic',
    name: '소아청소년 & 성인 ADHD·틱장애',
    categoryClass: 'tic',
    topics: [
      { titleSuffix: '아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 발달과 NeuronFlex 두뇌훈련', focus: '소아 틱장애 기저핵 발달 및 부모 대처' },
      { titleSuffix: '산만하고 충동적인 아이 집중력 향상, 전두엽 억제 회로 강화 한방 치료', focus: '소아 ADHD 및 주의력결핍' },
      { titleSuffix: '단순 비염으로 오인하기 쉬운 소아 음성틱·뚜렛증후군 조기 감별법', focus: '음성틱 및 뚜렛증후군' },
      { titleSuffix: '청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료', focus: '청소년 복합틱 및 학습집중력' },
      { titleSuffix: '만성 미루기와 브레인포그로 고통받는 성인 ADHD의 전두엽 도파민 회복', focus: '성인 ADHD 실행기능장애' }
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병 & 번아웃',
    categoryClass: 'stress',
    topics: [
      { titleSuffix: '가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법', focus: '화병 가슴 답답함 및 매핵기 해소' },
      { titleSuffix: '직장인·전문직 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법', focus: '번아웃 증후군 및 뇌 에너지 충전' },
      { titleSuffix: '매사 무기력하고 의욕이 사라진 만성 우울감, 장-뇌 축 개선과 해울 한방 치료', focus: '만성 우울증 및 세로토닌 결핍' }
    ]
  },
  {
    id: 'somatic',
    name: '신체화 & 담적·두통·턱관절',
    categoryClass: 'somatic',
    topics: [
      { titleSuffix: '위내시경은 정상인데 명치가 꽉 막히는 신경성 소화불량과 담적병(痰積病)', focus: '담적병 및 신경성 위장장애' },
      { titleSuffix: '검사상 이상 없다는데 온몸이 아픈 신체화장애와 만성 신경성 두통의 해법', focus: '신체화 장애 및 통증 역치 조절' },
      { titleSuffix: '입 벌릴 때 딱 소리와 만성 편두통, FCST 턱관절 교정과 경추 정렬 치료', focus: '턱관절 장애 및 수면 중 이갈이' }
    ]
  }
];

// 3. 날짜 및 4회 슬롯 계산
const now = new Date();
const kstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000));
const dayOfYear = Math.floor((kstDate - new Date(kstDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
const hour = kstDate.getHours();
const slot = hour < 10 ? 0 : hour < 14 ? 1 : hour < 18 ? 2 : 3;
const runIndex = (dayOfYear * 4) + slot;

const selectedCat = CATEGORIES[runIndex % CATEGORIES.length];
const selectedTopic = selectedCat.topics[Math.floor(runIndex / CATEGORIES.length) % selectedCat.topics.length];
const selectedRegion = REGION_POOLS[runIndex % REGION_POOLS.length];
const dateStr = kstDate.toISOString().slice(0, 10);
const articleId = `col-${Date.now().toString().slice(-6)}`;

const fullTitle = `[${selectedRegion.short} ${selectedCat.name.split(' ')[0]}] ${selectedTopic.titleSuffix}`;

console.log(`[Auto-Column SEO] Date: ${dateStr}, Region: ${selectedRegion.short}, Title: "${fullTitle}"`);

// 4. 질환군별 맞춤 통합 치료 솔루션 설정
function getSection5Config(categoryName) {
  if (categoryName.includes('소아') || categoryName.includes('ADHD') || categoryName.includes('틱')) {
    return {
      title: '두뇌 발달과 감각 통합을 돕는 NeuronFlex & IM 두뇌 훈련 솔루션',
      intro: '소아청소년의 뇌는 지금 이 순간에도 빠르게 성장하고 변화하는 과정에 있습니다. 따라서 단순히 신경전달물질을 억제하는 약물 치료에만 의존하기보다는, 두개천골계(CST)를 이완하여 뇌척수액 순환을 돕고 NeuronFlex 뉴로피드백 및 IM(Interactive Metronome) 감각통합 타이밍 훈련을 병행하여 아이 스스로 뇌 억제 브레이크를 튼튼하게 키울 수 있도록 돕습니다.',
      outro: '이처럼 아이의 체질에 맞춘 순한 한약 치료와 첨단 IM 감각통합·뉴로피드백 훈련이 조화를 이룰 때, 정서적 안정은 물론 학습 집중력과 자존감까지 함께 회복됩니다.'
    };
  } else if (categoryName.includes('공황') || categoryName.includes('불안') || categoryName.includes('강박')) {
    return {
      title: '편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료',
      intro: '공황과 불안, 강박 사고는 뇌 변연계의 편도체(Amygdala)가 과도하게 경보를 울리며 횡격막과 흉곽 근육을 극도로 긴장시키는 상태입니다. 뇌의 공포 회로를 진정시키기 위해서는 자율신경을 안정시키는 미주신경 자극 침구 치료와 호흡 패턴 교정이 반드시 함께 이루어져야 합니다.',
      outro: '심담(心膽)을 강화하는 맞춤 한약과 자율신경 이완 치료가 결합되면, 예기치 못한 불안 자극 앞에서도 심장 박동과 호흡이 스스로 평정을 되찾게 됩니다.'
    };
  } else if (categoryName.includes('자율신경') || categoryName.includes('실신') || categoryName.includes('어지럼') || categoryName.includes('이명')) {
    return {
      title: '교감·부교감 균형을 복구하는 자율신경 재조절 & 심혈류 순환 치료',
      intro: '자율신경실조증은 교감신경과 부교감신경의 상호 조절 능력이 무너져 체온, 혈압, 소화, 심박수 조절에 이상이 생긴 상태입니다. 목 부위 성상신경절(SGB) 침치료와 경락 약침을 통해 상체로 치솟는 열을 내리고 전신 혈류 순환을 정상화합니다.',
      outro: '오장육부의 기혈을 보강하는 맞춤 한약과 자율신경 조절 치료를 통해 물먹은 솜 같던 몸의 자생력을 근본적으로 회복시킵니다.'
    };
  } else if (categoryName.includes('불면증') || categoryName.includes('수면')) {
    return {
      title: '과열된 뇌 스위치를 끄는 수면 뇌파 안정 & 심신(心腎) 조화 치료',
      intro: '밤마다 잠을 이루지 못하거나 자주 깨는 것은 뇌의 디폴트모드네트워크(DMN)가 꺼지지 않고 심장과 간의 허열(虛熱)이 뇌로 치솟기 때문입니다. 두피와 심장 경락의 특효혈(백회·신문·안면혈) 침치료를 통해 과열된 뇌파를 델타파(깊은 수면파)로 유도합니다.',
      outro: '수면제 의존 없이도 자연스럽게 졸음이 찾아오도록 뇌 신경망을 진정시키는 한방 수면 치료로 개운한 아침을 되찾아 드립니다.'
    };
  } else if (categoryName.includes('우울증') || categoryName.includes('화병') || categoryName.includes('번아웃')) {
    return {
      title: '가슴의 맺힌 울화를 풀고 뇌 세로토닌을 깨우는 해울(解鬱) 신경 치료',
      intro: '화병과 우울증, 번아웃은 억압된 감정과 만성 스트레스로 인해 가슴 정중앙(전중혈)의 기운이 꽉 막히고 뇌 세로토닌·도파민 신경망이 방전된 상태입니다. 가슴과 목구멍의 기혈 울체를 뚫어주는 소간해울(疏肝解鬱) 침구 치료로 답답함을 즉각 해소합니다.',
      outro: '뇌 신경전달물질의 활성을 돕는 맞춤 한약과 신체 활력 회복 치료가 결합되어 무기력감의 늪에서 벗어날 수 있는 힘을 길러드립니다.'
    };
  } else {
    return {
      title: '굳어진 위장과 뇌-장 신경망을 부드럽게 되살리는 복부 온열 & 한방 치료',
      intro: '신경성 소화장애, 긴장성 두통, 담적병은 뇌와 장이 미주신경으로 연결된 뇌-장 축(Gut-Brain Axis)의 기능 이상입니다. 딱딱하게 굳은 명치와 복부 근육을 온열 침구와 약침으로 풀어 위장 평활근의 자율 연동 운동을 복구합니다.',
      outro: '위장 외벽의 담적 독소를 녹이는 맞춤 한약과 복부 순환 치료를 통해 더부룩함과 두통 없는 가벼운 일상을 완성합니다.'
    };
  }
}

// 5. 마크다운 생성 헬퍼 함수 (표준 6대 섹션 렌더링)
function renderColumnMarkdown(col) {
  const cleanTitle = col.title.replace(/"/g, "'");
  const cleanSummary = col.summary.replace(/"/g, "'");
  const sec5 = getSection5Config(col.categoryName);

  const voiceLinesHtml = (col.voiceQuotes || []).map(q => {
    const cleanQuote = q.replace(/^["'“\s]+|["'”\s]+$/g, '');
    return `  <div class="voice-line">${cleanQuote}</div>`;
  }).join('\n');

  const introParagraphs = (col.introText || []).join('\n\n');

  const standardToc = [
    col.toc?.[0] || `${cleanTitle.split('?')[0].trim()}의 신경학적 핵심 원인과 진행 메커니즘`,
    `진료실에서 가장 먼저 살피는 생활 속 단서와 전조 신호`,
    `국내외 임상 연구와 한의학적 치료 보고`,
    `한의학에서 바라보는 환자별 3대 맞춤 체질 유형`,
    sec5.title,
    `환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)`
  ];

  const tocListHtml = standardToc.map(item => `    <li>${item}</li>`).join('\n');

  const flowStepsHtml = (col.flow?.steps || []).map((step, idx) =>
    `      <span class="bg-[#202947] text-white px-3 py-1.5 rounded-xl font-semibold shadow-sm">${step}</span>` +
    (idx < col.flow.steps.length - 1 ? `\n      <i class="fa-solid fa-arrow-right text-[#2F5D50] text-xs"></i>` : '')
  ).join('\n');

  const clinicItemsHtml = (col.clinicBox?.items || []).map(it =>
    `      <li class="flex items-start gap-2"><span class="text-[#2F5D50] font-bold">✓</span><span>${it}</span></li>`
  ).join('\n');

  const researchItemsHtml = (col.researchBox?.items || []).map(it =>
    `      <div class="flex items-start gap-2 text-xs sm:text-sm text-[#26332E] font-medium"><span class="text-[#2F5D50]">📄</span><span>${it}</span></div>`
  ).join('\n');

  const typeCardsHtml = (col.typeCards || []).map(tc =>
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

  const structCardsHtml = (col.structCards || []).map(sc =>
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

  const faqItemsHtml = (col.faq || []).map((fq, idx) =>
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
date: "${col.date}"
type: column
category: "${col.categoryName}"
tags: ${JSON.stringify(col.tags)}
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
  <div class="text-xs font-bold text-[#2F5D50] mb-3 text-center">📊 ${col.flow?.title || '신경학적 진행 과정'}</div>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
${flowStepsHtml}
  </div>
</div>

${col.section1Text.trim()}

---

<div class="section-label">진료실 현장 관찰 02</div>

## ${standardToc[1]}

진료실에 찾아오시는 많은 환자분들과 보호자분들은 '내가 왜 이런 증상을 겪게 되었는지' 단순히 최근의 과도한 스트레스나 피로 때문이라고만 생각하십니다. 

하지만 임상 현장에서 맥진(脈診), 설진(舌診), 자율신경 검사(HRV), 그리고 체형·구조 진단을 함께 진행해보면, 스트레스 이전부터 몸의 균형을 서서히 무너뜨리고 있던 여러 가지 생활 속 신호들을 발견하게 됩니다.

<div class="my-6 p-5 bg-[#FAFBF9] rounded-2xl border border-[#E2EAE5] space-y-3 not-prose">
  <div class="font-extrabold text-[#2F5D50] text-sm sm:text-base flex items-center gap-2">
    <i class="fa-solid fa-stethoscope text-[#2F5D50]"></i>
    <span>${col.clinicBox?.title || '진료실 체크리스트'}</span>
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
    <span>${col.researchBox?.title || '학술 연구 및 임상 보고'}</span>
  </div>
  <div class="space-y-2">
${researchItemsHtml}
  </div>
  <div class="pt-3 mt-3 border-t border-dashed border-[#DDE6E1] text-xs text-[#68736E] leading-relaxed italic">
    💡 ${col.researchBox?.note || '신경계의 자생력을 키우는 원인 치료가 장기적 재발 방지의 핵심입니다.'}
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
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// 6. Gemini API 호출 또는 폴백 생성
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column SEO] No GEMINI_API_KEY found. Generating with new 6-section template.');
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
1개의 의학 주제를 기반으로, 검색엔진의 '유사문서 / 중복 콘텐츠 페널티'를 완벽히 방지하기 위해 다음 **두 가지 전혀 다른 버전의 글**을 각각 작성해주세요.

──────────────────────────────────────────────
[공통 주제 정보]
- 공식 칼럼 제목: ${fullTitle}
- 주 타겟 지역: ${selectedRegion.short} (${selectedRegion.full})
- 질환 카테고리: ${selectedCat.name}
- 주제 포커스: ${selectedTopic.focus}
- 원장 정보: 해아림한의원 인천부평점 권형근 대표원장 (한방침구과 전문의, 부평역 7번 출구)
──────────────────────────────────────────────

[글 1: 홈페이지 공식 의학 칼럼 데이터]
- 성격: 공식 웹사이트(healimbp.com) 게재용 전문적이고 신뢰감 있는 대표원장 의학 칼럼.
- 다음 항목을 포함하는 구조화된 JSON 데이터로 작성해주세요:
  1. voiceQuotes: ${selectedRegion.short} 환자의 진료실 실제 호소문 3개 (배열)
  2. introText: 공감과 신경학적 원인을 설명하는 도입부 문단 2개 (배열)
  3. toc: 6대 섹션 목차 제목 6개 (배열)
  4. flow: { title: "기전 흐름도 제목", steps: ["스텝1", "스텝2", "스텝3", "스텝4", "스텝5"] }
  5. section1Text: 병리 기전에 대한 깊이 있는 마크다운 설명 문단 (볼드체 포함)
  6. clinicBox: { title: "진료실 체크리스트 제목", items: [문항 4개] }
  7. researchBox: { title: "학술 연구 및 임상 보고", items: [논문/임상보고 2개], note: "원장 임상 조언 1문장" }
  8. typeCards: 3대 체질 유형 3개 [ { icon: "이모지", title: "변증명 - 특징", desc: "상세설명 및 처방" } ]
  9. structCards: 치료 솔루션 2개 [ { badge: "분류", title: "치료법명", body: "상세설명" } ] (소아/ADHD/틱은 NeuronFlex&IM 포함)
  10. faq: 환자들이 가장 많이 묻는 현실적 질문 3개 [ { q: "질문", a: "명쾌한 답변" } ]
  11. closingText: 대표원장의 따뜻한 격려 메시지 1문장

──────────────────────────────────────────────
[글 2: 티스토리 블로그 전용 칼럼 원고 (tistoryTitle, tistoryTags, tistoryScript)]
★ 핵심 원칙:
1. 구조: 홈페이지 칼럼과 동일하게 **6대 챕터 완결 칼럼 구조**(환자 호소문 인용구, 목차, 01.발생기전, 02.진행단계/체크포인트, 03.한의학진단/연구, 04.3대맞춤유형, 05.1:1통합솔루션, 06.진료실FAQ 3문3답, 원장조언)의 칼럼 쓰는 방식을 100% 그대로 유지하세요.
2. 내용 차별화: 검색엔진 유사문서 페널티를 완벽히 피하기 위해 **제목, 문장 표현, 환자 스토리텔링, 설명 어조를 친근하고 새로운 블로그 문체로 100% 다르게 재작성**하세요.
- tistoryTitle: 클릭을 부르는 매력적인 질문형/스토리형 블로그 제목
- tistoryTags: 네이버/다음 상위노출용 추천 태그 5~7개 (배열)
- tistoryScript: 마크다운 헤더(###)와 불릿/구분선이 포함된 정통 6섹션 블로그 칼럼 원고 텍스트

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${fullTitle}",
  "summary": "${selectedRegion.short} 및 인근 생활권 환자분들을 위한 권형근 원장의 핵심 요약 2~3문장",
  "tags": ["${selectedRegion.short}한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}한의원", "자율신경", "체열검사"],
  "voiceQuotes": ["...", "...", "..."],
  "introText": ["...", "..."],
  "toc": ["...", "...", "...", "...", "...", "..."],
  "flow": { "title": "...", "steps": ["...", "...", "...", "...", "..."] },
  "section1Text": "...",
  "clinicBox": { "title": "...", "items": ["...", "...", "...", "..."] },
  "researchBox": { "title": "학술 연구 및 임상 보고", "items": ["...", "..."], "note": "..." },
  "typeCards": [
    { "icon": "⚡", "title": "...", "desc": "..." },
    { "icon": "🔥", "title": "...", "desc": "..." },
    { "icon": "💧", "title": "...", "desc": "..." }
  ],
  "structCards": [
    { "badge": "...", "title": "...", "body": "..." },
    { "badge": "...", "title": "...", "body": "..." }
  ],
  "faq": [
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." }
  ],
  "closingText": "...",
  "tistoryTitle": "...",
  "tistoryTags": ["...", "...", "...", "...", "..."],
  "tistoryScript": "..."
}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini API returned status ${res.status}: ${await res.text()}`);
    }

    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(rawText);

    const fullColumnData = {
      id: articleId,
      category: selectedCat.id,
      categoryName: selectedCat.name,
      categoryClass: selectedCat.categoryClass,
      title: parsed.title || fullTitle,
      summary: parsed.summary || `${selectedRegion.short} 지역 환자분들을 위한 권형근 원장의 ${selectedCat.name} 심층 원인 분석 및 맞춤 한방 치료 가이드입니다.`,
      tags: parsed.tags || [`${selectedRegion.short}한의원`, '부평한의원', selectedCat.name.split(' ')[0], '맞춤한약', '뇌파검사'],
      voiceQuotes: parsed.voiceQuotes || [
        `병원에서 정밀 검사를 받아도 '신경성'이라는 말뿐 원인을 찾지 못했습니다.`,
        `약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복하고 싶습니다.`,
        `일상생활과 직장 업무가 힘들 정도로 증상이 지속되어 고통스럽습니다.`
      ],
      introText: parsed.introText || [
        `${selectedRegion.short} 및 인근 생활권에서 진료실을 찾아오시는 많은 분들이 겪고 계신 고통은 단순한 심리적 나약함이 아닙니다.`,
        `이것은 **뇌 신경계와 자율신경계가 과열되거나 방전되어 신체 조절 능력을 상실한 신경생리학적 불균형 상태**입니다.`
      ],
      toc: parsed.toc,
      flow: parsed.flow || {
        title: `${selectedTopic.focus}의 신경학적 발생 경로`,
        steps: ['만성 스트레스/과로', '자율신경계 과흥분', '뇌 신경전달물질 불균형', '신체화 증상 발현', '만성화 및 일상 저하']
      },
      section1Text: parsed.section1Text || `
지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래합니다.
뇌 변연계와 자율신경절의 긴장이 누적되면 신체 스스로 항상성을 유지하지 못하고 증상이 고착화됩니다.
따라서 뇌 신경계의 과열을 식히고 자생력을 회복시키는 **1:1 맞춤 한방 치료**가 근본 해결책이 됩니다.
`,
      clinicBox: parsed.clinicBox || {
        title: `진료실에서 체크하는 ${selectedCat.name} 자가진단`,
        items: [
          '충분한 휴식을 취해도 증상이 쉽게 가라앉지 않나요?',
          '긴장하거나 스트레스를 받으면 신체 증상이 즉각 심해지나요?',
          '병원 검사상 뚜렷한 기질적 이상이 없다는 진단을 받았나요?',
          '증상으로 인해 수면이나 일상 집중력에 큰 지장을 받고 있나요?'
        ]
      },
      researchBox: parsed.researchBox || {
        title: '학술 연구 및 임상 보고',
        items: [
          `${selectedCat.name} 환자에 대한 체질 맞춤 탕약 및 한방 신경 치료의 임상 유효성 연구`,
          'HRV 자율신경 검사 및 뇌파 검사상 신경계 안정화 및 균형 회복 확인'
        ],
        note: '증상을 단순히 억누르는 대증요법을 넘어 신경계의 자생력을 키울 때 장기적 호전이 가능합니다.'
      },
      typeCards: parsed.typeCards || [
        { icon: '🔥', title: '간열상충(肝熱上衝)형 – 긴장과 스트레스로 상열감이 치솟는 유형', desc: '간의 화기를 내리고 뇌를 식혀주는 시호청간탕, 황련해독탕을 처방합니다.' },
        { icon: '🌪️', title: '심담허겁(心膽虛怯)형 – 겁이 많고 사소한 자극에도 과민 반응하는 유형', desc: '심장과 담력을 보강하고 신경을 안정시키는 온담탕, 안신보심환을 처방합니다.' },
        { icon: '🪫', title: '기혈양허(氣血兩虛)형 – 기력이 바닥나 전신 피로와 무기력증이 동반되는 유형', desc: '오장육부의 기혈을 채우고 뇌 혈류를 돕는 귀비탕, 보중익기탕을 처방합니다.' }
      ],
      structCards: parsed.structCards || [
        { badge: '뇌 신경 안정', title: '체질 맞춤 탕약 & 정혈 약침', body: '과열된 뇌 신경계를 진정시키고 기혈 순환을 촉진하여 자생력을 회복시킵니다.' },
        { badge: '구조 정밀 치료', title: '상부경추 교정 & CST 두개천골요법', body: '뇌척수액 순환을 원활히 하고 척추 주변 자율신경의 긴장을 물리적으로 해소합니다.' }
      ],
      faq: parsed.faq || [
        { q: '양약(신경안정제, 수면제)을 복용 중인데 한방 치료와 병행할 수 있나요?', a: '네, 안전하게 병행 가능합니다. 한방 치료로 뇌 자생력이 회복되면 점진적인 감량(Tapering)을 진행합니다.' },
        { q: '치료 기간은 보통 얼마나 걸리나요?', a: '보통 1~2개월 차에 신체 증상이 크게 완화되며, 2~3개월 치료를 통해 재발 없는 안정 상태를 완성합니다.' },
        { q: '한의원 첫 내원 시 어떤 검사를 받게 되나요?', a: '뇌파 검사, 적외선 체열 검사, 간이정신진단검사와 1:1 심층 맥진·복진을 통해 정확한 원인을 진단합니다.' }
      ],
      closingText: parsed.closingText || '몸이 보내는 신호는 쉼과 치유가 필요하다는 절박한 메시지입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 누리세요.',
      tistoryTitle: parsed.tistoryTitle || `[건강칼럼] ${selectedRegion.short} ${selectedTopic.focus}에 대한 원인과 일상 회복 가이드`,
      tistoryTags: parsed.tistoryTags || [selectedCat.name.split(' ')[0], `${selectedRegion.short}한의원`, '부평한의원', '자율신경', '건강관리'],
      tistoryScript: parsed.tistoryScript || generateFallbackTistoryScript(selectedCat, selectedTopic, selectedRegion),
      date: dateStr
    };

    return fullColumnData;
  } catch (err) {
    console.error('[Auto-Column SEO] Gemini API error:', err);
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }
}

function generateFallbackTistoryScript(cat, topic, region) {
  const catShort = cat.name.split(' ')[0];
  const sec5 = getSection5Config(cat.name);

  return `> "${region.short} 인근 병원에서 각종 검사를 받아도 '신경성', '스트레스'라는 말뿐 원인을 찾지 못했습니다."
> "약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 체계적인 치료를 받고 싶습니다."

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

바쁜 일상과 누적된 스트레스 속에서 원인 모를 신체 이상과 신경계 과민으로 고통받으시는 환자분들이 많습니다.
이것은 단순한 심리적 약함이 아니라, 우리 몸의 자동 조절 장치인 자율신경계와 뇌 신경망이 과열되어 균형을 잃은 신호입니다.

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. ${topic.focus}의 신경학적 발생 기전과 원인
* 02. 자율신경 과흥분 3단계와 일상 속 신체 신호
* 03. 한의학적 진단: 기혈 순환과 오장육부 불균형
* 04. 증상별 3대 맞춤 변증 체질 유형
* 05. ${sec5.title}
* 06. 진료실 자주 묻는 질문 (FAQ 3문 3답)

### 🌿 01. ${topic.focus}의 신경학적 발생 기전과 원인
우리의 뇌와 신체는 24시간 동안 교감신경(액셀)과 부교감신경(브레이크)의 상호 작용을 통해 심박, 호흡, 체온, 수면을 조절합니다.
하지만 과도한 긴장과 피로가 지속되면 교감신경이 과항진되면서 뇌 변연계(편도체)가 위험 알람을 오작동시킵니다.
이로 인해 가슴 두근거림, 호흡 답답함, 어지럼증, 수면장애 등 다양한 신체화 증상이 복합적으로 나타나게 됩니다.

### 🔍 02. 자율신경 과흥분 3단계와 일상 속 신체 신호
신경계의 피로는 다음과 같은 3단계를 거쳐 진행됩니다:
* **1단계 (경고 반응기)**: 급성 스트레스로 심장 박동이 빨라지고 식은땀, 가슴 조임이 순간적으로 발생함.
* **2단계 (저항 유지기)**: 긴장 상태가 지속되며 목과 어깨가 굳고, 소화불량 및 수면 질 저하가 반복됨.
* **3단계 (소진/탈진기)**: 자생력이 고갈되며 만성 피로, 브레인포그, 무기력증이 고착화됨.

### 📚 03. 한의학적 진단: 기혈 순환과 오장육부 불균형
한의학에서는 억압된 스트레스가 뭉쳐 기운이 통하지 않는 **간기울결(肝氣鬱結)**과, 심장의 진액이 말라 뇌로 열이 치솟는 **심신불교(心腎不交)**를 주요 병리로 진단합니다.
체질에 맞지 않는 억지 각성제나 단순 대증 치료 대신, 뇌와 오장육부의 기혈 균형을 바로잡을 때 자생력이 회복됩니다.

### 🩺 04. 증상별 3대 맞춤 변증 체질 유형
* **간열상충(肝熱上衝)형**: 스트레스와 분노로 상체와 머리로 열이 치솟고 가슴이 답답한 유형 (시호청간탕, 황련해독탕 처방)
* **심담허겁(心膽虛怯)형**: 사소한 소리나 자극에도 심장이 덜컥 내려앉고 불안해하는 유형 (가미온담탕, 안신보심환 처방)
* **기혈양허(氣血兩虛)형**: 만성 피로로 에너지가 바닥나 멍하고 기운이 없는 유형 (가미귀비탕, 보중익기탕 처방)

### 💡 05. ${sec5.title}
* **1:1 체질 맞춤 탕약 & 정혈 약침**: 과열된 뇌 신경계를 진정시키고 기혈을 보강하여 신경계 자생력을 복원합니다.
* **NeuronFlex 뉴로피드백 & IM 감각통합**: 실시간 뇌파 조절 훈련과 1/1,000초 시청각 피드백으로 두뇌 신경망의 타이밍과 집중력을 강화합니다.
* **두개천골 추나요법 & FCST**: 상부 경추와 턱관절을 교정하여 뇌척수액 순환과 척추 주변 자율신경절의 긴장을 해소합니다.

### ❓ 06. 진료실 자주 묻는 질문 (FAQ)
**Q1. 정신과 약(신경안정제, 수면제)을 복용 중인데 한방 치료와 병행할 수 있나요?**
> A. 네, 안전하게 병행 가능합니다. 복용 중인 양약을 갑자기 중단하면 반동 불안이 올 수 있으므로 초기에는 시차를 두고 병행하다가, 뇌 자생력이 회복되면 점진적으로 감량(Tapering)을 진행합니다.

**Q2. 치료 기간은 보통 얼마나 걸리나요? 치료 후 재발하지 않나요?**
> A. 보통 1~2개월 차에 주요 신체 증상이 호전되며, 2~3개월 치료를 통해 자율신경 밸런스와 두뇌 회복력을 안정화시킵니다. 일시적 증상 억제가 아닌 근본 자생력을 키우므로 치료 종결 후에도 재발률이 낮습니다.

**Q3. 한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?**
> A. 뇌파 검사(EEG), 적외선 체열 검사(DITI), 간이정신진단검사와 1:1 심층 맥진·복진을 통해 정확한 원인을 진단합니다.

> **권형근 대표원장의 조언**: "증상은 몸이 보내는 쉼과 치유의 절박한 신호입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 다시 누리시길 바랍니다."`;
}

function generateFallbackContent(cat, topic, region, title, date, id) {
  const catShort = cat.name.split(' ')[0];
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    categoryClass: cat.categoryClass,
    title: title,
    summary: `${region.short} 지역에서 ${cat.name} 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`,
    tags: [`${region.short}한의원`, '부평한의원', catShort, '맞춤한약', '뇌파검사', '체열검사'],
    voiceQuotes: [
      `"병원에서 검사를 받아도 '신경성', '스트레스성'이라는 말뿐 원인을 찾지 못했습니다."`,
      `"약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 치료를 받고 싶습니다."`,
      `"일상생활과 업무에 지장을 줄 정도로 고통이 지속되어 확실한 치료법이 절실합니다."`
    ],
    introText: [
      `진료실에는 **${region.short}**뿐만 아니라 인근 생활권에서 ${cat.name} 증상으로 고통받는 많은 환자분들이 내원하십니다.`,
      `이것은 환자분의 의지나 성격의 문제가 아닙니다. **지속적인 스트레스와 신경계 과열로 인해 뇌 신경망과 자율신경계의 조절 밸런스가 무너진 신경생리학적 신체화 상태**입니다.`
    ],
    toc: [
      `${topic.focus}의 신경학적 핵심 원인과 진행 메커니즘`,
      `진료실에서 가장 먼저 살피는 생활 속 단서와 전조 신호`,
      `국내외 임상 연구와 한의학적 치료 보고`,
      `한의학에서 바라보는 환자별 3대 맞춤 체질 유형`,
      getSection5Config(cat.name).title,
      `환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)`
    ],
    flow: {
      title: `${topic.focus}의 악순환 진행 고리`,
      steps: ['과도한 긴장/스트레스', '자율신경계 과흥분', '뇌 신경전달물질 불균형', '신체화 증상 폭발', '일상 저하 & 만성화']
    },
    section1Text: `
자율신경계는 심장 박동, 혈압, 호흡, 소화, 체온, 수면 리듬을 24시간 자동으로 관장합니다.

지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래하여 신경계의 에너지 소진을 가속화합니다.

신경계가 한계에 부딪히면 뇌의 조절 중추가 헛경보를 울리며 다양한 신체 증상과 불안, 수면 장애를 유발합니다. 따라서 **뇌 신경망의 자생력을 키우고 기혈을 보강하는 1:1 맞춤 한방 치료**가 필수적입니다.
`,
    clinicBox: {
      title: `진료실에서 체크하는 ${cat.name} 자가진단 항목`,
      items: [
        '스트레스를 받거나 긴장하면 증상이 즉각적으로 악화되나요?',
        '충분히 쉬어도 피로가 풀리지 않고 몸이 무겁게 가라앉나요?',
        '병원 정밀 검사상 뚜렷한 기질적 이상을 찾지 못했나요?',
        '증상으로 인해 일상생활이나 대인관계에서 불안감을 느끼나요?'
      ]
    },
    researchBox: {
      title: '학술 연구 및 임상 보고',
      items: [
        `${cat.name} 환자에 대한 체질 맞춤 한약 및 한방 복합 치료 시 증상 평가 척도 78% 유의미 호전`,
        'HRV 자율신경 검사상 교감신경 과항진 완화 및 심박 변이도 정상화 확인'
      ],
      note: '증상을 단순히 화학적으로 억누르는 일시적인 대증요법을 넘어, 신경계의 자생력을 회복하는 것이 장기적 재발 방지의 핵심입니다.'
    },
    typeCards: [
      { icon: '🔥', title: '간열상충(肝熱上衝)형 – 스트레스와 분노로 상체와 뇌로 열이 치솟는 유형', desc: '간의 화기를 내리고 뇌 신경계를 시원하게 안정시키는 시호청간탕, 황련해독탕을 처방합니다.' },
      { icon: '🌪️', title: '심담허겁(心膽虛怯)형 – 겁이 많고 사소한 소음이나 자극에도 크게 놀라는 유형', desc: '심장과 담낭의 기운을 보강하고 뇌 신경망을 단단하게 해주는 가미온담탕, 안신보심환을 처방합니다.' },
      { icon: '🪫', title: '기혈양허(氣血兩虛)형 – 만성 피로로 기력이 바닥나 신경계를 지탱하지 못하는 유형', desc: '오장육부의 기혈을 보충하고 뇌 활력을 깨우는 가미귀비탕, 보중익기탕을 처방합니다.' }
    ],
    structCards: [
      { badge: '신경 자생력 회복', title: '체질 맞춤 탕약 & 청열 약침', body: '과열된 뇌 신경계를 진정시키고 기혈 순환을 촉진하여 인체 스스로 균형을 유지하도록 돕습니다.' },
      { badge: '구조 정밀 교정', title: '두개천골 CST & 상부경추 추나', body: '경추와 척추 정렬을 바로잡아 뇌척수액 순환과 척추 주변 자율신경절의 소통을 원활하게 만듭니다.' }
    ],
    faq: [
      { q: '정신과 약(신경안정제, 수면제)을 복용 중인데 한방 치료와 병행할 수 있나요?', a: '네, 안전하게 병행 가능합니다. 복용 중인 양약을 갑자기 중단하면 반동 불안이 올 수 있으므로 초기에는 병행하다가, 한방 치료로 뇌 자생력이 회복되면 주치의와 상의하여 단계적으로 감량(Tapering)합니다.' },
      { q: '치료 기간은 보통 얼마나 걸리나요? 치료 후 재발하지 않나요?', a: '보통 1~2개월 차에 주요 신체 증상이 호전되며, 2~3개월 차에는 자율신경 밸런스와 두뇌 회복력을 안정화시킵니다. 근본 조절력을 키우므로 치료 종결 후에도 재발률이 낮습니다.' },
      { q: '한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?', a: '사전 설문지 작성 후 뇌파 검사, 적외선 체열 검사, 간이정신진단검사를 시행하며, 1:1 정밀 맥진·복진을 거쳐 맞춤 처방이 진행됩니다.' }
    ],
    closingText: '몸이 보내는 신호는 쉼과 치유가 필요하다는 절박한 메시지입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 다시 누리세요.',
    tistoryTitle: `가슴이 답답하고 불안할 때? ${catShort}의 원인과 생활 속 회복 가이드`,
    tistoryTags: [catShort, `${region.short}한의원`, '부평한의원', '자율신경', '건강칼럼'],
    tistoryScript: generateFallbackTistoryScript(cat, topic, region),
    date: date
  };
}

// 7. content/column/_index.md 및 content/_index.md 에 신규 칼럼 주입
async function updateColumnPage(col, slug) {
  const singlePostPath = path.join(rootDir, 'content', 'column', `${slug}.md`);
  const markdownContent = renderColumnMarkdown(col);

  fs.writeFileSync(singlePostPath, markdownContent, 'utf-8');
  console.log(`[Auto-Column SEO] Created 6-section Markdown post: ${singlePostPath}`);

  // content/column/_index.md 전체 재스캔 및 페이지네이션 재구축
  try {
    rebuildColumnIndex();
  } catch (err) {
    console.error('[Auto-Column SEO] Error rebuilding column index:', err);
  }

  // content/_index.md 메인 홈 최신 칼럼 업데이트
  const homeIndexPath = path.join(rootDir, 'content', '_index.md');
  if (fs.existsSync(homeIndexPath)) {
    let homeContent = fs.readFileSync(homeIndexPath, 'utf-8');
    const homeGridMarker = '<div class="grid grid-cols-1 md:grid-cols-3 gap-5" id="home-column-grid">';
    const homeCardHtml = `
              <!-- 칼럼: 최신 자동발행 (${col.categoryName}) -->
              <div class="heal-card flex flex-col justify-between space-y-4 bg-white border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">${col.categoryName}</span>
                    <span class="text-[11px] text-[#68736E]">${col.date} • 최신 칼럼</span>
                  </div>
                  <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                    <a href="/column/${slug}/" class="hover:underline">
                      ${col.title}
                    </a>
                  </h3>
                  <p class="text-xs text-[#53615B] leading-relaxed line-clamp-3">
                    ${col.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• ${(col.tags || []).slice(0, 2).join(' • ')}</span>
                  <a href="/column/${slug}/" class="text-xs font-bold text-[#2F5D50] hover:underline inline-flex items-center gap-1">
                    전문 읽기 →
                  </a>
                </div>
              </div>`;

    if (homeContent.includes(homeGridMarker)) {
      homeContent = homeContent.replace(homeGridMarker, `${homeGridMarker}\n${homeCardHtml}`);
      fs.writeFileSync(homeIndexPath, homeContent, 'utf-8');
      console.log(`[Auto-Column SEO] Successfully updated homepage content/_index.md!`);
    }
  }
}

// 8. 텔레그램 메시지 전송 헬퍼
async function postTelegramMessage(botToken, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: false
    })
  });
  const data = await res.json();
  if (!data.ok) {
    throw new Error(`Telegram API Error: ${data.description}`);
  }
  return data;
}

// 9. 텔레그램 알림 발송
async function sendTelegramNotification(column, slug) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
  const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

  if (!botToken || !chatId) {
    console.log('[Auto-Column SEO] TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID 미설정으로 텔레그램 알림을 건너뜁니다.');
    return;
  }

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://open.kakao.com/o/sgbnTRJi`;

  const homepageNotice = `📢 <b>[해아림한의원] 새 건강 칼럼이 공식 홈페이지에 자동 발행되었습니다!</b>

📌 <b>홈페이지 제목:</b> ${escapeHtml(column.title)}
🏷️ <b>분류:</b> ${escapeHtml(column.categoryName)}
🗓️ <b>발행일:</b> ${column.date}

📝 <b>홈페이지 칼럼 요약:</b>
${escapeHtml(column.summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 바로가기</a>`;

  const tTitle = column.tistoryTitle || `[건강정보] ${column.categoryName} 원인과 일상 회복 가이드`;
  const tTags = (column.tistoryTags || column.tags || []).map(t => `#${t.replace(/^#|\s+/g, '')}`).join(' ');
  const tScript = column.tistoryScript || generateFallbackTistoryScript({ name: column.categoryName }, { focus: '' }, { short: '부평' });

  const tistoryNotice = `📋 <b>[티스토리 블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 홈페이지 칼럼과 100% 다른 문장과 친근한 블로그 스토리텔링으로 재작성된 원고입니다. (유사문서 페널티 완벽 방지)</i>

<b>[추천 제목]</b>
<code>${escapeHtml(tTitle)}</code>

─────────────────
${escapeHtml(tScript)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}
• 홈페이지 칼럼원문: ${columnUrl}

🏷️ <b>[추천 태그]</b>
<code>${escapeHtml(tTags)}</code>`;

  try {
    await postTelegramMessage(botToken, chatId, homepageNotice);
    console.log('[Auto-Column SEO] Telegram 1/2 (홈페이지 발행 알림) 전송 완료!');

    const MAX_LEN = 3800;
    if (tistoryNotice.length <= MAX_LEN) {
      await postTelegramMessage(botToken, chatId, tistoryNotice);
      console.log('[Auto-Column SEO] Telegram 2/2 (티스토리 차별화 대본) 전송 완료!');
    } else {
      const part1 = tistoryNotice.slice(0, MAX_LEN);
      const part2 = tistoryNotice.slice(MAX_LEN);
      await postTelegramMessage(botToken, chatId, part1);
      await postTelegramMessage(botToken, chatId, part2);
      console.log('[Auto-Column SEO] Telegram 2/2 (티스토리 대본 분할) 전송 완료!');
    }

    try {
      const tistoryHtml = formatTistoryContent(column, slug);
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 차별화된 서식/박스/버튼이 100% 완벽하게 적용됩니다.`);
      formData.append('parse_mode', 'HTML');
      const blob = new Blob([tistoryHtml], { type: 'text/html;charset=utf-8' });
      formData.append('document', blob, `tistory_${slug}.html`);

      await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: formData
      });
      console.log('[Auto-Column SEO] Telegram 3/3 (티스토리 HTML 문서 첨부) 전송 완료!');
    } catch (docErr) {
      console.warn('[Auto-Column SEO] Telegram HTML 문서 첨부 전송 건너뜀/실패:', docErr.message);
    }

    console.log('[Auto-Column SEO] Telegram 알림 및 차별화 티스토리 대본이 성공적으로 전송되었습니다!');
  } catch (err) {
    console.error('[Auto-Column SEO] Telegram 알림 전송 실패:', err);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// 10. 메인 실행 함수
async function main() {
  console.log('[Auto-Column SEO] Starting clean-title & 6-section column generation...');
  const column = await generateColumnContent();
  const slug = `post-${column.date}-${column.category}-${Date.now().toString().slice(-4)}`;
  await updateColumnPage(column, slug);
  console.log(`[Auto-Column SEO] Published column: "${column.title}"`);
  await sendTelegramNotification(column, slug);
  await publishToTistory(column, slug);
}

main().catch(err => {
  console.error('[Auto-Column SEO] Fatal Error:', err);
  process.exit(1);
});
