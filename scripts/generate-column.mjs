import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { publishToTistory, formatTistoryContent } from './publish-tistory.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 간결한 1~2개 타겟 지역 풀 (제목 가독성 및 검색 최적화)
const REGION_POOLS = [
  { short: '인천 부평', full: '부평구(부평동, 산곡동, 삼산동, 부개동)' },
  { short: '구월동', full: '남동구 구월동 및 간석동' },
  { short: '부천 상동', full: '부천시 상동 및 중동' },
  { short: '시흥 배곧', full: '시흥시 배곧신도시 및 정왕동' },
  { short: '청라', full: '인천 서구 청라국제도시 및 루원시티' },
  { short: '계양구', full: '계양구(계산동, 작전동)' },
  { short: '부천 중동', full: '부천시 신중동 및 중동' },
  { short: '간석동', full: '남동구 간석동 및 만수동' },
  { short: '시흥 은계', full: '시흥시 은계지구 및 은행동' },
  { short: '김포 검단', full: '김포시 및 인천 검단구' },
  { short: '영종도', full: '인천 영종하늘도시 및 운서동' },
  { short: '논현동', full: '남동구 논현동 및 서창동' }
];

// 2. 질환별 카테고리 및 간결한 의학 주제 풀
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    topics: [
      { titleSuffix: '공황발작과 자율신경계 과흥분, 응급 호흡과 맞춤 치료법', focus: '공황발작 응급대처 및 편도체 안정 한약' },
      { titleSuffix: '“또 발작 올까 두려운” 예기불안과 뇌 변연계 안정 한방 치료', focus: '24시간 지속되는 예기불안 차단' },
      { titleSuffix: '지하철·엘리베이터 공포증과 광장공포증, 심담허겁 체질 극복법', focus: '밀폐공간 공포증 및 광장공포증' },
      { titleSuffix: '발표할 때 목소리 떨림과 심장 두근거림, 사회공포증 한의학 솔루션', focus: '사회공포증 및 발표불안' }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    topics: [
      { titleSuffix: '새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리', focus: '새벽 중도각성 및 수면유지장애' },
      { titleSuffix: '수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬', focus: '수면유도제 내성 극복 및 자연 수면' },
      { titleSuffix: '잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 상열감 해소법', focus: '입면장애 및 뇌 과각성 완화' },
      { titleSuffix: '악몽과 가위눌림, 심비양허를 보강하여 깊은 델타파 숙면 유도', focus: '다몽증 및 얕은 수면 개선' }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 실신/어지럼증',
    topics: [
      { titleSuffix: '만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 뇌파·체열검사와 한방 치료', focus: '만성피로와 한스셀리에 3단계 소진' },
      { titleSuffix: '출퇴근길 갑자기 핑 돌고 쓰러지는 미주신경성 실신의 전조증상과 한방 치료', focus: '미주신경성 실신 및 기립성 어지럼증' },
      { titleSuffix: '검사상 이상 없는 만성 소화불량, 가슴 답답함, 자율신경실조증 총정리', focus: '신경성 위장장애 및 신체화 증상' },
      { titleSuffix: '긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방', focus: '수족다한증 및 상열감' }
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    topics: [
      { titleSuffix: '아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭', focus: '소아 틱장애 기저핵 발달 및 부모 대처' },
      { titleSuffix: '산만하고 충동적인 아이 집중력 향상, 전두엽 기능 강화 총명 한약', focus: '소아 ADHD 및 주의력결핍' },
      { titleSuffix: '환절기 비염으로 오인하기 쉬운 소아 음성틱·운동틱 조기 감별법', focus: '틱장애 조기 진단 및 골든타임' },
      { titleSuffix: '청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료', focus: '뚜렛증후군 및 청소년 두뇌 훈련' }
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병/스트레스',
    topics: [
      { titleSuffix: '가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법', focus: '화병 가슴 답답함 및 매핵기 해소' },
      { titleSuffix: '직장인·수험생 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법', focus: '번아웃 증후군 및 뇌 에너지 충전' },
      { titleSuffix: '매사 무기력하고 의욕이 사라진 만성 우울감, 간기울결을 푸는 법', focus: '만성 우울증 및 무기력증 극복' },
      { titleSuffix: '검사상 원인 없는 가슴 뻐근함, 신경성 두통 등 신체화장애의 해법', focus: '신체화 장애 및 자율신경 조절' }
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

// 깔끔한 1~2개 지역명 조합 제목
const fullTitle = `[${selectedRegion.short} ${selectedCat.name.split(' ')[0]} 한의원] ${selectedTopic.titleSuffix}`;

console.log(`[Auto-Column SEO] Date: ${dateStr}, Region: ${selectedRegion.short}, Title: "${fullTitle}"`);

// 4. Gemini API 호출 또는 폴백 생성
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column SEO] No GEMINI_API_KEY found. Generating with concise regional template.');
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
네이버 및 구글 검색엔진 최적화(SEO)를 고려하여, 제목에는 깔끔하게 1~2개의 타겟 지역명만 배치하고, 본문에는 환자의 마음에 깊이 공감하는 심층 2,000자급 의학 칼럼을 작성하세요.

- 제목: ${fullTitle}
- 주 타겟 지역: ${selectedRegion.short} (${selectedRegion.full})
- 질환 카테고리: ${selectedCat.name}
- 주제 포커스: ${selectedTopic.focus}
- 원칙 (의료법 준수, 과장 금지):
  1. 제목: 간결하게 [${selectedRegion.short} ${selectedCat.name.split(' ')[0]} 한의원] 구조 유지
  2. 도입부: ${selectedRegion.short} 환자의 진료실 실제 호소문 인용구 (“...”) 와 공감 화두
  3. 신경/생리학적 기전: 자율신경계(교감-부교감), 뇌 변연계/기저핵, 한스 셀리에 3단계 스트레스 모델
  4. 객관적 검사: 뇌파 검사, 적외선 체열 검사, 간이정신진단검사, 한의학적 정밀 변증 및 복진
  5. 1:1 맞춤 한방 치료: 체질 맞춤 탕약, 침구/약침, 두개천골 추나요법
  6. 진료실 자주 묻는 질문 (FAQ & Q&A 4~5개): 해당 질환 환자들이 가장 많이 묻는 실전 질문(양약 병행 여부, 치료 기간 및 재발 방지, 검사 과정, 한약 안전성/간 부담 여부, 일상 통원 등)을 Q1~Q5 형식으로 깊이 있고 명쾌하게 답변
  7. 일상 관리 및 회복 격려 메시지 (부평역 7번 출구 위치 안내 자연스럽게 포함)

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${fullTitle}",
  "summary": "칼럼 핵심 요약 2~3문장 (약 150~180자, ${selectedRegion.short} 및 ${selectedCat.name.split(' ')[0]} 키워드 포함)",
  "tags": ["${selectedRegion.short}한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}치료", "뇌파검사", "체열검사"],
  "contentHtml": "<p>안녕하세요. <strong>부평역 7번 출구에서 ${selectedRegion.short} 환자분들의 자율신경·신경정신과 질환을 1:1 맞춤 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p><blockquote>&ldquo;...&rdquo;</blockquote>... (전체 본문을 HTML 태그 h3, p, ul, li, strong, blockquote 등을 활용하여 1,800~2,200자 분량으로 풍부하게 작성)"
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
    return {
      id: articleId,
      category: selectedCat.id,
      categoryName: selectedCat.name,
      title: parsed.title || fullTitle,
      summary: parsed.summary,
      tags: parsed.tags || [`${selectedRegion.short}한의원`, '부평한의원', selectedCat.name, '뇌파검사', '체열검사'],
      contentHtml: parsed.contentHtml,
      date: dateStr
    };
  } catch (err) {
    console.error('[Auto-Column SEO] Gemini API error:', err);
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }
}

function generateFallbackContent(cat, topic, region, title, date, id) {
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    title: title,
    summary: `${region.short} 지역에서 ${cat.name} 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`,
    tags: [`${region.short}한의원`, '부평한의원', cat.name.split(' ')[0], '맞춤한약', '뇌파검사', '체열검사'],
    contentHtml: `
<p>안녕하세요. <strong>부평역 7번 출구에서 ${region.short} 환자분들의 자율신경 및 두뇌 질환을 1:1 맞춤 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

<blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
  &ldquo;${region.short} 인근 병원에서 각종 정밀 검사를 받아도 '신경성', '스트레스성'이라는 말뿐 원인을 찾지 못했습니다.&rdquo;<br>
  &ldquo;약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 전문 한의원 치료를 받고 싶습니다.&rdquo;
</blockquote>

<p>부평역 인근 진료실에는 ${region.short}뿐만 아니라 인근 생활권에서 많은 환자분들이 내원하십니다. 몸이 보내는 절박한 신호를 단순한 스트레스로 치부하지 않고 체계적인 신경학적 원인을 진단하는 것이 치료의 첫걸음입니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 불균형과 만성 질환의 신경학적 기전</h3>
<p>자율신경계는 심장 박동, 혈압 조절, 호흡, 소화, 체온, 수면 리듬을 24시간 자동으로 관장합니다. 지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래하여 만성 피로, 공황발작, 불면증, 어지럼증, 소화장애 등 다양한 신체화 증상을 유발합니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 긴장 상태에서 소진(Burnout)으로 이어지는 3단계 모델</h3>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>1단계 (경고 반응기)</strong>: 급성 스트레스로 심박수 증가, 혈압 상승, 식은땀, 가슴 두근거림 발생.</li>
  <li><strong>2단계 (저항기)</strong>: 몸이 긴장 상태를 유지하기 위해 코르티솔과 에너지를 지속 소모하는 단계.</li>
  <li><strong>3단계 (소진기 / 탈진)</strong>: 신체 회복력이 바닥나며 만성 피로, 브레인포그, 무기력증, 수면장애가 고착화됨.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림한의원 인천부평점의 객관적 검사 시스템</h3>
<p>인천 부평 해아림한의원에서는 <strong>뇌파 검사, 적외선 체열 검사, 간이정신진단검사</strong>를 통해 두뇌 신경계 활성도와 전신 체열 불균형, 심리 척도를 객관적으로 정밀 평가하고, 전통 한의학의 <strong>정밀 변증과 복진(腹診)</strong>으로 오장육부의 기혈 허실을 정밀 진단합니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">4. 1:1 맞춤 한방 치료: 뇌 신경계 자생력 회복</h3>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>체질별 맞춤 탕약 처방</strong>: 뇌 신경계의 과열된 열을 식히고(청열안신), 고갈된 원기를 보강하는 맞춤 한약.</li>
  <li><strong>경혈 침구 및 약침 요법</strong>: 뇌 혈류를 개선하고 자율신경절의 긴장을 완화.</li>
  <li><strong>두개천골 추나요법</strong>: 경추와 척추 정렬을 바로잡아 뇌척수액 순환과 미주신경 소통을 원활화.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">5. 진료실 자주 묻는 질문 (FAQ & Q&A)</h3>
<div class="space-y-4 my-4">
  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#E2EAE5]">
    <p class="font-bold text-[#2F5D50] text-sm mb-1">Q1. 정신과 약(신경안정제, 수면제, 항우울제)을 복용 중인데 한방 치료와 병행할 수 있나요?</p>
    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">네, 충분히 병행 가능합니다. 복용 중인 양약을 갑자기 중단하면 반동 불안이나 불면이 올 수 있으므로 초기에는 약 1~2시간 시간차를 두고 병행합니다. 이후 한방 치료로 뇌 신경계의 자생력이 회복되면 주치의와 상의하여 안전하게 점진적 감량(Tapering)을 진행합니다.</p>
  </div>
  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#E2EAE5]">
    <p class="font-bold text-[#2F5D50] text-sm mb-1">Q2. 한방 치료 기간은 보통 얼마나 걸리나요? 치료 후 재발하지 않나요?</p>
    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">증상의 유병 기간과 신경계 피로도에 따라 차이가 있으나, 보통 1~2개월 차에는 두근거림·불면 등 신체 증상을 완화하고, 3~4개월 차에는 자율신경 밸런스와 두뇌 회복력을 안정화시킵니다. 일시적 억제가 아닌 근본 조절력을 키우므로 치료 종결 후에도 재발률이 낮습니다.</p>
  </div>
  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#E2EAE5]">
    <p class="font-bold text-[#2F5D50] text-sm mb-1">Q3. 한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?</p>
    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">첫 내원 시 심층 설문지 작성, 뇌파 검사(두뇌 활성도), 적외선 체열 검사(상열하한 분석), 간이정신진단검사를 시행합니다. 이후 원장과의 1:1 심층 문진 및 정밀 변증, 복진을 거쳐 맞춤 처방과 침구 치료가 진행되며 약 1시간~1시간 30분 정도 소요됩니다.</p>
  </div>
  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#E2EAE5]">
    <p class="font-bold text-[#2F5D50] text-sm mb-1">Q4. 한약을 복용할 때 간이나 신장에 무리가 가지는 않나요?</p>
    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">해아림한의원의 맞춤 한약은 식품의약품안전처(KFDA)의 엄격한 잔류농약, 중금속, 곰팡이독소 정밀 검사를 통과한 규격품 한약재만을 사용하며, 환자 개개인의 체질과 건강 상태를 고려하여 1:1 맞춤 조제되므로 안심하고 복용하실 수 있습니다.</p>
  </div>
  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#E2EAE5]">
    <p class="font-bold text-[#2F5D50] text-sm mb-1">Q5. 직장인이라 주간 방문이 어려운데 야간이나 주말 진료가 가능한가요?</p>
    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">해아림한의원 인천부평점은 월·수·금 저녁 8시까지 야간진료를 시행하며, 토요일(09:00~15:00)과 공휴일(09:00~13:00)에는 점심시간 없이 연속 진료를 진행하므로 바쁜 직장인과 학생분들도 편안하게 통원 치료를 받으실 수 있습니다.</p>
  </div>
</div>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">6. 일상생활 속 자가 관리 가이드</h3>
<p>규칙적인 수면 리듬 유지, 4-7-8 복식호흡 훈련, 가벼운 산책을 병행하시면 신경계 안정에 큰 도움이 됩니다. ${region.short} 지역에서 오랜 증상으로 고통받고 계시다면 부평역 7번 출구 도보 5분 거리 해아림한의원에 편안하게 내원하시어 정확한 진단을 받아보시길 권해드립니다.</p>
`,
    date: date
  };
}

// 5. content/column/_index.md 에 신규 칼럼 주입
async function updateColumnPage(newCol, slug) {
  const columnIndexPath = path.join(rootDir, 'content', 'column', '_index.md');
  const singlePostPath = path.join(rootDir, 'content', 'column', `${slug}.md`);

  const singlePostContent = `---
title: "${newCol.title.replace(/"/g, '\\"')}"
summary: "${newCol.summary.replace(/"/g, '\\"')}"
date: "${newCol.date}"
type: column
category: "${newCol.categoryName}"
tags: [${newCol.tags.map(t => `"${t}"`).join(', ')}]
---

${newCol.contentHtml}
`;
  fs.writeFileSync(singlePostPath, singlePostContent, 'utf-8');
  console.log(`[Auto-Column SEO] Created full-page post: ${singlePostPath}`);

  // 신규 칼럼 카드 HTML (직접 링크)
  const newCardHtml = `
              <!-- [SEO 자동발행: ${newCol.categoryName} - ${newCol.date}] -->
              <article class="column-item ${newCol.category} heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">${newCol.categoryName}</span>
                    <span class="text-xs text-[#68736E]">${newCol.date} • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/${slug}/" class="hover:underline">${newCol.title}</a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    ${newCol.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• ${newCol.tags.join(' • ')}</span>
                  <a href="/column/${slug}/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>
`;

  let fileContent = fs.readFileSync(columnIndexPath, 'utf-8');
  // grid 내 첫 번째 요소 앞에 주입
  const gridMarker = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">';
  if (fileContent.includes(gridMarker)) {
    fileContent = fileContent.replace(gridMarker, `${gridMarker}\n${newCardHtml}`);
  }

  // update content/column/_index.md
  fs.writeFileSync(columnIndexPath, fileContent, 'utf-8');
  console.log(`[Auto-Column SEO] Successfully updated content/column/_index.md with direct links!`);

  // 5-2. content/_index.md (메인 홈 최신 칼럼 3개 그리드 업데이트)
  const homeIndexPath = path.join(rootDir, 'content', '_index.md');
  if (fs.existsSync(homeIndexPath)) {
    let homeContent = fs.readFileSync(homeIndexPath, 'utf-8');
    const homeGridMarker = '<div class="grid grid-cols-1 md:grid-cols-3 gap-5" id="home-column-grid">';
    const homeCardHtml = `
              <!-- 칼럼 1: 최신 발행 칼럼 (${newCol.categoryName}) -->
              <div class="heal-card flex flex-col justify-between space-y-4 bg-white border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">${newCol.categoryName}</span>
                    <span class="text-[11px] text-[#68736E]">${newCol.date} • 최신 칼럼</span>
                  </div>
                  <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                    <a href="/column/${slug}/" class="hover:underline">
                      ${newCol.title}
                    </a>
                  </h3>
                  <p class="text-xs text-[#53615B] leading-relaxed line-clamp-3">
                    ${newCol.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• ${newCol.tags.slice(0, 2).join(' • ')}</span>
                  <a href="/column/${slug}/" class="text-xs font-bold text-[#2F5D50] hover:underline inline-flex items-center gap-1">
                    전문 읽기 →
                  </a>
                </div>
              </div>
`;
    if (homeContent.includes(homeGridMarker)) {
      homeContent = homeContent.replace(homeGridMarker, `${homeGridMarker}\n${homeCardHtml}`);
      fs.writeFileSync(homeIndexPath, homeContent, 'utf-8');
      console.log(`[Auto-Column SEO] Successfully updated homepage content/_index.md!`);
    }
  }
}

// 6. 텔레그램 알림 및 블로그 복사용 전문 발송
async function sendTelegramNotification(column, slug) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.log('[Auto-Column SEO] TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID 미설정으로 텔레그램 알림을 건너뜁니다.');
    return;
  }

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://open.kakao.com/o/sgbnTRJi`;

  // 1) 요약 알림 메시지
  const summaryMessage = `📢 <b>[해아림한의원] 새 건강 칼럼이 발행되었습니다!</b>

📌 <b>제목:</b> ${escapeHtml(column.title)}
🏷️ <b>분류:</b> ${escapeHtml(column.categoryName)}
🗓️ <b>일시:</b> ${column.date}

📝 <b>핵심 요약:</b>
${escapeHtml(column.summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 보기</a>`;

  // 2) 블로그(티스토리/네이버) 원클릭 복사용 본문 메시지
  let bodyText = column.contentHtml
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n\n📌 $1\n')
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, (m, p1) => `\n💬 "${p1.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim()}"\n`)
    .replace(/<li><strong>(.*?)<\/strong>:\s*(.*?)<\/li>/gi, '• $1: $2\n')
    .replace(/<li>(.*?)<\/li>/gi, '• $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<strong>(.*?)<\/strong>/gi, '$1')
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const hashtags = (column.tags || []).map(t => `#${t.replace(/\s+/g, '')}`).join(' ');

  const blogCopyMessage = `📋 <b>[티스토리/블로그 원클릭 복사용 전문]</b>

<b>[제목]</b>
<code>${escapeHtml(column.title)}</code>

─────────────────
${escapeHtml(bodyText)}
─────────────────

🏥 <b>[해아림한의원 인천부평점]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 예약: ${bookingUrl}
• 카톡상담: ${kakaoUrl}
• 원문출처: ${columnUrl}

🏷️ <b>[태그]</b>
<code>${escapeHtml(hashtags)}</code>`;

  try {
    // 요약 알림 전송
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: summaryMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: false
      })
    });

    // 블로그 복사용 전문 전송 (길이 초과 방지)
    const MAX_LEN = 3900;
    if (blogCopyMessage.length <= MAX_LEN) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: blogCopyMessage,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      });
    } else {
      // 4000자 초과 시 2개로 분할 전송
      const part1 = blogCopyMessage.slice(0, MAX_LEN);
      const part2 = blogCopyMessage.slice(MAX_LEN);
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: part1, parse_mode: 'HTML', disable_web_page_preview: true })
      });
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: part2, parse_mode: 'HTML', disable_web_page_preview: true })
      });
    }

    // 3) 티스토리 HTML 서식 파일 첨부 전송 (sendDocument)
    try {
      const tistoryHtml = formatTistoryContent(column, slug);
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 서식이 100% 완벽하게 적용됩니다.`);
      formData.append('parse_mode', 'HTML');
      const blob = new Blob([tistoryHtml], { type: 'text/html;charset=utf-8' });
      formData.append('document', blob, `tistory_${slug}.html`);

      await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: formData
      });
    } catch (docErr) {
      console.warn('[Auto-Column SEO] Telegram HTML 문서 첨부 전송 건너뜀/실패:', docErr.message);
    }

    console.log('[Auto-Column SEO] Telegram 알림 및 블로그 복사용 전문이 성공적으로 전송되었습니다!');
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

// 실행
async function main() {
  console.log('[Auto-Column SEO] Starting clean-title column generation...');
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

