import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { publishToTistory, formatTistoryContent } from './publish-tistory.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 간결한 ～개 타겟 지역 풀 (제목 가독성 및 검색 최적화)
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
      { titleSuffix: '새벽 ～시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리', focus: '새벽 중도각성 및 수면유지장애' },
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

// 깔끔한 ～개 지역명 조합 제목
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
1개의 의학 주제를 기반으로, 검색엔진의 '유사문서 / 중복 콘텐츠 페널티'를 완벽히 방지하기 위해 다음 **두 가지 전혀 다른 버전의 글**을 각각 작성해주세요.

──────────────────────────────────────────────
[공통 주제 정보]
- 공식 칼럼 제목: ${fullTitle}
- 주 타겟 지역: ${selectedRegion.short} (${selectedRegion.full})
- 질환 카테고리: ${selectedCat.name}
- 주제 포커스: ${selectedTopic.focus}
- 원장 정보: 해아림한의원 인천부평점 권형근 대표원장 (한방침구과 전문의, 부평역 7번 출구)
──────────────────────────────────────────────

[글 1: 홈페이지 공식 의학 칼럼 (contentHtml)]
- 성격: 공식 웹사이트(healimbp.com) 게재용 전문적이고 신뢰감 있는 대표원장 의학 칼럼.
- 구성:
  1. 도입부: ${selectedRegion.short} 환자의 진료실 실제 호소문 인용구 (“...”) 와 공감 화두
  2. 신경/생리학적 기전: 자율신경계(교감-부교감), 뇌 변연계/기저핵, 한스 셀리에 3단계 스트레스 모델
  3. 객관적 검사: 뇌파 검사, 적외선 체열 검사, 간이정신진단검사, 한의학적 정밀 변증 및 복진
  4. 1:1 맞춤 한방 치료: 체질 맞춤 탕약, 침구/약침, 두개천골 추나요법
  5. 진료실 자주 묻는 질문 (FAQ 5개): 해당 질환 환자들이 가장 많이 묻는 실전 질문(양약 병행 여부, 치료 기간 및 재발 방지, 검사 과정, 한약 안전성/간 부담 여부, 야간/주말 진료 등)을 Q1~Q5 형식으로 깊이 있고 명쾌하게 답변
  6. 일상 관리 및 회복 격려 메시지 (부평역 7번 출구 위치 안내 자연스럽게 포함)
- 포맷: HTML 태그(h3, p, ul, li, strong, blockquote)를 활용한 1,800~2,200자 분량.

──────────────────────────────────────────────
[글 2: 티스토리 블로그 전용 포스팅 대본 (tistoryTitle, tistoryTags, tistoryScript)]
★ 절대 원칙: 홈페이지 칼럼(글 1)과 문장이나 표현이 겹치면 검색엔진(네이버/구글/다음)에서 저품질/유사문서 페널티를 받습니다. 반드시 100% 다른 문장 구조, 다른 어조, 완전히 차별화된 블로그 스토리텔링으로 재작성하세요! ★
- 성격: 티스토리에 복사해 바로 올릴 수 있는 친근하고 술술 읽히는 고품질 블로그 원고.
- 제목 (tistoryTitle): 홈페이지 제목과 달리 클릭을 유도하는 매력적인 질문형/스토리형 블로그 제목 (예: "가슴이 쿵쾅거리고 숨이 턱 막힐 때? 공황발작 응급 대처법과 자율신경 이야기", "밤마다 뒤척이는 불면증, 원인은 '뇌 과열'? 꿀잠을 위한 한방 케어법")
- 어조 및 스타일: 따뜻하고 공감 가득한 친절한 블로그 대화체 (~해요, ~있답니다, ~해볼게요 등).
- 구성:
  1. 🌸 친근한 오프닝 & 공감 인사: 독자에게 말을 건네며 겪기 쉬운 일상 증상/상황으로 시작
  2. 🔍 왜 이런 증상이 생길까요?: 자율신경계 및 뇌의 신호를 쉬운 일상 비유로 설명 (홈페이지 칼럼과 다른 비유 사용)
  3. 🩺 한의학에서는 어떻게 치료할까요?: 체질 한약, 침 치료, 추나 요법 등의 원리를 블로그 독자 눈높이에 맞춰 쉽게 설명
  4. 💡 오늘부터 실천하는 생활 속 힐링 습관 3가지: 누구나 집/직장에서 쉽게 따라할 수 있는 꿀팁
  5. 🌿 따뜻한 맺음말 & 진료 안내: 부평역 7번 출구 해아림한의원 인천부평점 권형근 원장 칼럼 출처 명시
- 포맷: 이모지와 깔끔한 단락 구분이 들어간 텍스트 원고 (약 1,200~1,600자).
- 태그 (tistoryTags): 티스토리 블로그 상위노출용 추천 태그 5~7개 (배열).

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${fullTitle}",
  "summary": "홈페이지 칼럼 핵심 요약 2~3문장 (${selectedRegion.short} 및 ${selectedCat.name.split(' ')[0]} 포함)",
  "tags": ["${selectedRegion.short}한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}치료", "뇌파검사", "체열검사"],
  "contentHtml": "<p>안녕하세요. <strong>부평역 7번 출구에서...</strong></p>...",
  "tistoryTitle": "티스토리용 매력적인 블로그 제목",
  "tistoryTags": ["질환키워드", "증상키워드", "부평한의원", "자율신경", "건강칼럼"],
  "tistoryScript": "안녕하세요, 여러분! 혹시 요즘...\n\n📌 1. 왜 이런 증상이 나타날까요?\n..."
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
      tistoryTitle: parsed.tistoryTitle || `[건강정보] ${selectedTopic.focus}에 대한 원인과 치료 가이드`,
      tistoryTags: parsed.tistoryTags || [selectedCat.name.split(' ')[0], '부평한의원', '자율신경', '한방치료', '건강관리'],
      tistoryScript: parsed.tistoryScript || generateFallbackTistoryScript(selectedCat, selectedTopic, selectedRegion),
      date: dateStr
    };
  } catch (err) {
    console.error('[Auto-Column SEO] Gemini API error:', err);
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }
}

function generateFallbackTistoryScript(cat, topic, region) {
  const catShort = cat.name.split(' ')[0];
  return `안녕하세요! 마음과 몸의 평온을 함께 찾아가는 건강 길잡이입니다.

요즘 들어 부쩍 가슴이 답답하거나 이유 없는 불안, 수면 장애, 피로감으로 하루하루가 버겁다고 느끼신 적 없으신가요?
특히 ${region.short} 인근에서 직장 생활이나 가사, 학업으로 과도한 스트레스를 받다 보면 우리 몸의 신경계가 지치기 쉽습니다.

오늘은 많은 분들이 남몰래 고민하시는 [${catShort}] 증상에 대해, 원인부터 일상 관리법까지 쉽고 편안하게 이야기해보려 합니다.

──────────────────
🌿 1. 왜 이런 불편한 증상이 반복될까요?
──────────────────
우리의 뇌와 몸은 스트레스를 받으면 '자율신경계'라는 자동 조절 장치를 가동합니다.
낮 동안 긴장하고 일할 때는 '교감신경'이 일하고, 쉴 때는 '부교감신경'이 몸을 회복시켜 주어야 하는데요.
휴식 없이 지속적인 긴장이 쌓이면 마치 브레이크가 고장 난 자동차처럼 신경계가 과열되어 가슴 두근거림, 어지럼증, 불면, 긴장감 등의 신체화 증상이 나타나게 됩니다.

──────────────────
🩺 2. 한의학에서는 어떻게 회복을 도울까요?
──────────────────
단순히 일시적인 증상 완화에 그치지 않고, 몸 스스로 안정을 찾을 수 있는 자생력을 키우는 것이 핵심입니다.
• 1:1 맞춤 한약: 과열된 뇌 신경의 흥분을 가라앉히고(청열안신), 부족해진 심장과 간의 기혈을 보충합니다.
• 온화한 침구 및 약침 요법: 긴장된 근육과 경혈을 부드럽게 이완시켜 뇌 혈류 순환을 촉진합니다.
• 두개천골 추나요법: 척추와 경추의 미세한 불균형을 바로잡아 뇌척수액 순환을 원활하게 돕습니다.

──────────────────
💡 3. 오늘부터 시작하는 힐링 자가관리 꿀팁
──────────────────
1) 4-7-8 호흡법: 4초간 코로 숨을 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 천천히 내쉬어보세요. 부교감신경을 깨우는 데 큰 도움이 됩니다.
2) 미온수 족욕: 잠들기 30분 전 따뜻한 물에 발을 담그면 뇌로 쏠린 열감이 내려갑니다.
3) 햇살 산책: 하루 20분 가볍게 걸으며 햇볕을 쬐면 세로토닌과 멜라토닌 분비가 촉진됩니다.

──────────────────
🌸 맺음말
──────────────────
몸이 보내는 신호는 "이제 조금 쉬어가며 나를 돌봐달라"는 소중한 메시지입니다.
오랜 시간 혼자 참거나 방치하지 마시고, 전문가와 함께 내 몸의 리듬을 되찾아보시길 바랍니다.

📍 출처 및 전문 상담:
해아림한의원 인천부평점 권형근 대표원장 (한방침구과 전문의)
(부평역 7번 출구 도보 5분 / 032-719-3472)`;
}

function generateFallbackContent(cat, topic, region, title, date, id) {
  const catShort = cat.name.split(' ')[0];
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    title: title,
    summary: `${region.short} 지역에서 ${cat.name} 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`,
    tags: [`${region.short}한의원`, '부평한의원', catShort, '맞춤한약', '뇌파검사', '체열검사'],
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

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">5. 진료실 자주 묻는 질문 (FAQ)</h3>
<div class="space-y-3.5 my-6 not-prose">
  <div class="p-4 sm:p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-1.5">
    <div class="font-extrabold text-sm sm:text-base text-[#2F5D50] flex items-start gap-2">
      <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 shrink-0">Q1</span>
      <span>정신과 약(신경안정제, 수면제, 항우울제)을 복용 중인데 한방 치료와 병행할 수 있나요?</span>
    </div>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-7">
      네, 충분히 병행 가능합니다. 복용 중인 양약을 갑자기 중단하면 반동 불안이나 불면이 올 수 있으므로 초기에는 약 1~2시간 시간차를 두고 병행합니다. 이후 한방 치료로 뇌 신경계의 자생력이 회복되면 주치의와 상의하여 안전하게 점진적 감량(Tapering)을 진행합니다.
    </p>
  </div>
  <div class="p-4 sm:p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-1.5">
    <div class="font-extrabold text-sm sm:text-base text-[#2F5D50] flex items-start gap-2">
      <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 shrink-0">Q2</span>
      <span>한방 치료 기간은 보통 얼마나 걸리나요? 치료 후 재발하지 않나요?</span>
    </div>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-7">
      증상의 유병 기간과 신경계 피로도에 따라 차이가 있으나, 보통 1~2개월 차에는 두근거림·불면 등 신체 증상을 완화하고, 3~4개월 차에는 자율신경 밸런스와 두뇌 회복력을 안정화시킵니다. 일시적 억제가 아닌 근본 조절력을 키우므로 치료 종결 후에도 재발률이 낮습니다.
    </p>
  </div>
  <div class="p-4 sm:p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-1.5">
    <div class="font-extrabold text-sm sm:text-base text-[#2F5D50] flex items-start gap-2">
      <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 shrink-0">Q3</span>
      <span>한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?</span>
    </div>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-7">
      첫 내원 시 심층 설문지 작성, 뇌파 검사(두뇌 활성도), 적외선 체열 검사(상열하한 분석), 간이정신진단검사를 시행합니다. 이후 원장과의 1:1 심층 문진 및 정밀 변증, 복진을 거쳐 맞춤 처방과 침구 치료가 진행되며 약 1시간~1시간 30분 정도 소요됩니다.
    </p>
  </div>
  <div class="p-4 sm:p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-1.5">
    <div class="font-extrabold text-sm sm:text-base text-[#2F5D50] flex items-start gap-2">
      <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 shrink-0">Q4</span>
      <span>한약을 복용할 때 간이나 신장에 무리가 가지는 않나요?</span>
    </div>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-7">
      해아림한의원의 맞춤 한약은 식품의약품안전처(KFDA)의 엄격한 잔류농약, 중금속, 곰팡이독소 정밀 검사를 통과한 규격품 한약재만을 사용하며, 환자 개개인의 체질과 건강 상태를 고려하여 1:1 맞춤 조제되므로 안심하고 복용하실 수 있습니다.
    </p>
  </div>
  <div class="p-4 sm:p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-1.5">
    <div class="font-extrabold text-sm sm:text-base text-[#2F5D50] flex items-start gap-2">
      <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 shrink-0">Q5</span>
      <span>직장인이라 주간 방문이 어려운데 야간이나 주말 진료가 가능한가요?</span>
    </div>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-7">
      해아림한의원 인천부평점은 월·수·금 저녁 8시까지 야간진료를 시행하며, 토요일(09:00~15:00)과 공휴일(09:00~13:00)에는 점심시간 없이 연속 진료를 진행하므로 바쁜 직장인과 학생분들도 편안하게 통원 치료를 받으실 수 있습니다.
    </p>
  </div>
</div>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">6. 일상생활 속 자가 관리 가이드</h3>
<p>규칙적인 수면 리듬 유지, 4-7-8 복식호흡 훈련, 가벼운 산책을 병행하시면 신경계 안정에 큰 도움이 됩니다. ${region.short} 지역에서 오랜 증상으로 고통받고 계시다면 부평역 7번 출구 도보 5분 거리 해아림한의원에 편안하게 내원하시어 정확한 진단을 받아보시길 권해드립니다.</p>
`,
    tistoryTitle: `가슴이 답답하고 불안할 때? ${catShort}의 원인과 생활 속 회복 가이드`,
    tistoryTags: [catShort, `${region.short}한의원`, '부평한의원', '자율신경', '건강칼럼'],
    tistoryScript: generateFallbackTistoryScript(cat, topic, region),
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

// 텔레그램 단일 메시지 전송 헬퍼
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

  // [메시지 1] 홈페이지 칼럼 자동 발행 완료 알림
  const homepageNotice = `📢 <b>[해아림한의원] 새 건강 칼럼이 공식 홈페이지에 자동 발행되었습니다!</b>

📌 <b>홈페이지 제목:</b> ${escapeHtml(column.title)}
🏷️ <b>분류:</b> ${escapeHtml(column.categoryName)}
🗓️ <b>발행일:</b> ${column.date}

📝 <b>홈페이지 칼럼 요약:</b>
${escapeHtml(column.summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 바로가기</a>`;

  // [메시지 2] 티스토리 블로그 전용 포스팅 대본 (유사문서 방지 100% 차별화 원고)
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
    // 1. 홈페이지 알림 발송
    await postTelegramMessage(botToken, chatId, homepageNotice);
    console.log('[Auto-Column SEO] Telegram 1/2 (홈페이지 발행 알림) 전송 완료!');

    // 2. 티스토리 대본 발송 (텔레그램 길이 제한 대비 분할 지원)
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

    // 3. 티스토리 HTML 서식 파일 첨부 전송 (sendDocument)
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

