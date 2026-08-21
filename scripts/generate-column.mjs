import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 상세 타겟 지역 풀 (부평구 중심 + 남동구, 부천, 시흥, 서구/청라/검단, 계양구, 영종도, 김포 등)
const REGION_POOLS = [
  { main: '부평구', sub: '부평역·삼산동·산곡동·부개동', phrase: '부평구(부평동, 산곡동, 삼산동, 부개동, 십정동)' },
  { main: '남동구', sub: '구월동·간석동·논현동·만수동', phrase: '남동구(구월동, 간석동, 논현동, 만수동, 서창동)' },
  { main: '부천시', sub: '상동·중동·신중동', phrase: '부천시(상동, 중동, 신중동, 원미동, 소사동)' },
  { main: '시흥시', sub: '배곧·은계·은행동·정왕동', phrase: '시흥시(배곧신도시, 은계지구, 은행동, 정왕동, 대야동)' },
  { main: '인천 서구', sub: '청라·가정동·가좌동·검단', phrase: '인천 서구(청라국제도시, 가정동, 루원시티, 가좌동, 검단구)' },
  { main: '계양구', sub: '계산동·작전동·효성동', phrase: '계양구(계산동, 작전동, 효성동, 계양역)' },
  { main: '인천 중구·동구', sub: '영종도·동인천', phrase: '인천 중구·동구 및 영종도(영종하늘도시, 운서동, 송월동)' },
  { main: '김포시·검단', sub: '김포·검단신도시', phrase: '김포시(풍무동, 사우동, 장기동) 및 검단구' },
  { main: '강화군·옹진군', sub: '강화·옹진', phrase: '인천 강화군 및 옹진군 일대' }
];

// 2. 질환별 카테고리 및 고빈도 의학 주제 풀
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    topics: [
      { titleSuffix: '공황발작과 자율신경계 과흥분, 응급 4-7-8 호흡과 1:1 맞춤 치료법', focus: '공황발작 응급대처 및 편도체 안정 한약' },
      { titleSuffix: '“또 발작 올까 두려운” 예기불안과 공황장애 뇌 변연계 안정 한방 치료', focus: '24시간 지속되는 예기불안 차단' },
      { titleSuffix: '지하철·엘리베이터 공포증과 광장공포증, 심담허겁(心膽虛怯) 체질 극복법', focus: '밀폐공간 공포증 및 광장공포증' },
      { titleSuffix: '발표할 때 목소리 떨림과 심장 두근거림, 사회공포증·무대불안 한의학 솔루션', focus: '사회공포증 및 발표불안' }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    topics: [
      { titleSuffix: '새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열(虛熱) 치료 원리', focus: '새벽 중도각성 및 수면유지장애' },
      { titleSuffix: '수면제 의존 없이 자연스러운 입면, 뇌파 안정과 자생적 수면 리듬 회복', focus: '수면유도제 내성 극복 및 자연 수면' },
      { titleSuffix: '잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 상열감(上熱感) 해소법', focus: '입면장애 및 뇌 과각성 완화' },
      { titleSuffix: '악몽과 가위눌림, 심비양허(心脾兩虛)를 보강하여 깊은 델타파 숙면 유도', focus: '다몽증 및 얕은 수면 개선' }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 실신/어지럼증',
    topics: [
      { titleSuffix: '만성피로와 자율신경계 기능 저하는 어떤 관계일까요? HRV 검사와 한방 치료', focus: '만성피로와 한스셀리에 3단계 소진' },
      { titleSuffix: '출퇴근길 갑자기 핑 돌고 쓰러지는 미주신경성 실신의 전조증상과 혈관 탄력 강화', focus: '미주신경성 실신 및 기립성 어지럼증' },
      { titleSuffix: '검사상 이상 없는 만성 소화불량, 가슴 답답함, 상열하한 자율신경실조증 총정리', focus: '신경성 위장장애 및 신체화 증상' },
      { titleSuffix: '긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 항진을 가라앉히는 체질 처방', focus: '수족다한증 및 상열감' }
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    topics: [
      { titleSuffix: '아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭 가이드', focus: '소아 틱장애 기저핵 발달 및 부모 대처' },
      { titleSuffix: '산만하고 충동적인 아이 집중력 향상, 전두엽 기능 강화 총명 한약 치료', focus: '소아 ADHD 및 주의력결핍' },
      { titleSuffix: '환절기 비염이나 결막염으로 오인하기 쉬운 소아 음성틱·운동틱 조기 감별법', focus: '틱장애 조기 진단 및 골든타임' },
      { titleSuffix: '청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료 시스템', focus: '뚜렛증후군 및 청소년 두뇌 훈련' }
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병/스트레스',
    topics: [
      { titleSuffix: '가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법', focus: '화병 가슴 답답함 및 매핵기 해소' },
      { titleSuffix: '직장인·수험생 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법', focus: '번아웃 증후군 및 뇌 에너지 충전' },
      { titleSuffix: '매사 무기력하고 의욕이 사라진 만성 우울감, 간기울결을 풀고 기혈을 보하는 법', focus: '만성 우울증 및 무기력증 극복' },
      { titleSuffix: '검사상 원인 없는 가슴 뻐근함, 신경성 두통 등 신체화장애의 한의학적 해법', focus: '신체화 장애 및 자율신경 조절' }
    ]
  }
];

// 3. 날짜 및 순환 카운터 계산
const now = new Date();
const kstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000));
const dayOfYear = Math.floor((kstDate - new Date(kstDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
// 하루 4회 슬롯 계산 (08시, 12시, 16시, 20시)
const slot = hour < 10 ? 0 : hour < 14 ? 1 : hour < 18 ? 2 : 3;
const runIndex = (dayOfYear * 4) + slot;

const selectedCat = CATEGORIES[runIndex % CATEGORIES.length];
const selectedTopic = selectedCat.topics[Math.floor(runIndex / CATEGORIES.length) % selectedCat.topics.length];
const selectedRegion = REGION_POOLS[runIndex % REGION_POOLS.length];
const dateStr = kstDate.toISOString().slice(0, 10);
const articleId = `col-${Date.now().toString().slice(-6)}`;

// 조합된 SEO 제목
const fullTitle = `[${selectedRegion.main} ${selectedRegion.sub} ${selectedCat.name.split(' ')[0]} 한의원/병원] ${selectedTopic.titleSuffix}`;

console.log(`[Auto-Column SEO] Date: ${dateStr}, Region: ${selectedRegion.main}, Title: "${fullTitle}"`);

// 4. Gemini API 호출 또는 폴백 장문 생성 (상세 지역명 & 키워드 강화)
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column SEO] No GEMINI_API_KEY found. Generating with verified regional SEO template.');
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
네이버 및 구글 검색엔진 최적화(SEO)를 고려하여, 지정된 타겟 지역명과 주변 생활권, 질환명, 한의원, 병원, 치료, 검사 등 검색량이 많은 키워드를 본문과 제목에 자연스럽게 녹여낸 **2,000자급 심층 전문 의학 칼럼**을 작성하세요.

- 칼럼 제목: ${fullTitle}
- 주 타겟 지역: ${selectedRegion.phrase}
- 주변 진료 권역: 부평구를 중심으로 남동구(구월동, 간석동, 논현동, 만수동), 계양구, 부천시(상동, 중동, 신중동), 시흥시(배곧, 은계, 은행동, 정왕동), 서구(청라, 가정동, 가좌동, 검단), 동구, 중구, 영종도, 김포시, 강화·옹진군
- 질환 카테고리: ${selectedCat.name}
- 주제 포커스: ${selectedTopic.focus}
- 필수 구조 (의료법 준수, 과장/완치 보장 금지, 전문적 기전 분석):
  1. 제목: [타겟지역 + 세부동네 + 질환명 + 한의원/병원] 포함된 질문형/통찰형 헤드라인
  2. 도입부: ${selectedRegion.main} 및 ${selectedRegion.sub} 환자의 실제 진료실 호소문 인용구 (“...”) 와 공감 화두
  3. 신경/생리학적 기전: 자율신경계(교감-부교감), 뇌 변연계/기저핵, 한스 셀리에 3단계 스트레스 모델
  4. 객관적 검사: 심박변이도(HRV) 자율신경 검사, 한의학 맥진·복진
  5. 1:1 맞춤 한방 치료: 체질 맞춤 탕약, 침구/약침, 두개천골 추나요법
  6. 일상 관리 및 회복 격려 메시지 (부평역 7번 출구 위치 안내 자연스럽게 포함)

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${fullTitle}",
  "summary": "칼럼 핵심 요약 2~3문장 (약 150~180자, ${selectedRegion.main}, ${selectedCat.name.split(' ')[0]} 키워드 포함)",
  "tags": ["${selectedRegion.main}한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}치료", "자율신경검사", "${selectedRegion.sub.split('·')[0]}"],
  "contentHtml": "<p>안녕하세요. <strong>부평역 7번 출구에서 ${selectedRegion.phrase} 환자분들의 자율신경·신경정신과 질환을 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p><blockquote>&ldquo;...&rdquo;</blockquote>... (전체 본문을 HTML 태그 h3, p, ul, li, strong, blockquote 등을 활용하여 1,800~2,200자 분량으로 풍부하게 작성)"
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
      tags: parsed.tags || [`${selectedRegion.main}한의원`, '부평한의원', selectedCat.name],
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
    summary: `${region.phrase} 지역에서 ${cat.name} 증상으로 한의원 및 병원을 찾는 분들을 위한 권형근 원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`,
    tags: [`${region.main}한의원`, '부평한의원', '인천한의원', cat.name.split(' ')[0], '맞춤한약'],
    contentHtml: `
<p>안녕하세요. <strong>부평역 7번 출구에서 ${region.phrase} 환자분들의 자율신경 및 두뇌 질환을 1:1 진맥 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

<blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
  &ldquo;${region.main}과 부평 인근 내과, 이비인후과, 신경과 병원에서 각종 정밀 검사를 받아도 '신경성', '스트레스성'이라는 말뿐 원인을 찾지 못했습니다.&rdquo;<br>
  &ldquo;약물에만 의존하지 않고 근본적으로 자율신경계 자생력을 회복해주는 전문 한의원 치료를 받고 싶습니다.&rdquo;
</blockquote>

<p>부평역 인근 진료실에는 부평구(부평동, 산곡동, 삼산동, 부개동)뿐 아니라 남동구(구월동, 간석동, 논현동, 만수동), 부천시(상동, 중동, 신중동), 시흥시(배곧, 은계, 정왕동), 서구(청라, 가정동, 검단), 계양구, 영종도, 김포 등지에서 많은 환자분들이 내원하십니다. 몸이 보내는 절박한 신호를 단순한 스트레스로 치부하지 않고 체계적인 신경학적 원인을 진단하는 것이 치료의 첫걸음입니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 불균형과 만성 질환의 신경학적 기전</h3>
<p>자율신경계는 심장 박동, 혈압 조절, 호흡, 소화, 체온, 수면 리듬을 24시간 자동으로 관장합니다. 지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래하여 만성 피로, 공황발작, 불면증, 어지럼증, 소화장애 등 다양한 신체화 증상을 유발합니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 긴장 상태에서 소진(Burnout)으로 이어지는 3단계 모델</h3>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>1단계 (경고 반응기)</strong>: 급성 스트레스로 심박수 증가, 혈압 상승, 식은땀, 가슴 두근거림 발생.</li>
  <li><strong>2단계 (저항기)</strong>: 몸이 긴장 상태를 유지하기 위해 코르티솔과 에너지를 지속 소모하는 단계.</li>
  <li><strong>3단계 (소진기 / 탈진)</strong>: 신체 회복력이 바닥나며 만성 피로, 브레인포그, 무기력증, 수면장애가 고착화됨.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림한의원 인천부평점의 객관적 검사 시스템</h3>
<p>인천 부평 해아림한의원에서는 <strong>심박변이도(HRV) 자율신경 검사</strong>를 통해 신경계 활성도와 스트레스 저항력을 객관적으로 평가하고, 전통 한의학의 <strong>맥진(脈診)과 복진(腹診)</strong>으로 오장육부의 기혈 허실을 정밀 진단합니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">4. 1:1 맞춤 한방 치료: 뇌 신경계 자생력 회복</h3>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>체질별 맞춤 탕약 처방</strong>: 뇌 신경계의 과열된 열을 식히고(청열안신), 고갈된 원기를 보강하는 맞춤 한약.</li>
  <li><strong>경혈 침구 및 약침 요법</strong>: 뇌 혈류를 개선하고 자율신경절의 긴장을 완화.</li>
  <li><strong>두개천골 추나요법</strong>: 경추와 척추 정렬을 바로잡아 뇌척수액 순환과 미주신경 소통을 원활화.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">5. 일상생활 속 자가 관리 가이드</h3>
<p>규칙적인 수면 리듬 유지, 4-7-8 복식호흡 훈련, 가벼운 산책을 병행하시면 신경계 안정에 큰 도움이 됩니다. ${region.main} 지역에서 오랜 증상으로 고통받고 계시다면 부평역 7번 출구 도보 5분 거리 해아림한의원에 편안하게 내원하시어 정확한 진단을 받아보시길 권해드립니다.</p>
`,
    date: date
  };
}

// 5. content/column/_index.md 에 신규 지역 타겟 칼럼 카드 주입
async function updateColumnPage(newCol) {
  const columnIndexPath = path.join(rootDir, 'content', 'column', '_index.md');
  let fileContent = fs.readFileSync(columnIndexPath, 'utf-8');

  // 신규 칼럼 카드 HTML
  const newCardHtml = `
              <!-- [지역 타겟 SEO 자동발행: ${newCol.categoryName} - ${newCol.date}] -->
              <article class="column-item ${newCol.category} heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">${newCol.categoryName}</span>
                    <span class="text-xs text-[#68736E]">${newCol.date} • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('${newCol.id}')">
                    ${newCol.title}
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    ${newCol.summary}
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• ${newCol.tags.join(' • ')}</span>
                  <button type="button" onclick="openColumnModal('${newCol.id}')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>

                <!-- 숨겨진 칼럼 전체 본문 데이터 (인페이지 모달용) -->
                <div id="data-${newCol.id}" style="display:none;" 
                     data-title="${newCol.title.replace(/"/g, '&quot;')}" 
                     data-category="${newCol.categoryName}" 
                     data-date="${newCol.date}" 
                     data-summary="${newCol.summary.replace(/"/g, '&quot;')}" 
                     data-tags="${newCol.tags.join(', ')}">
${newCol.contentHtml}
                </div>
              </article>
`;

  // grid 내 첫 번째 요소 앞에 주입
  const gridMarker = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">';
  if (fileContent.includes(gridMarker)) {
    fileContent = fileContent.replace(gridMarker, `${gridMarker}\n${newCardHtml}`);
  }

  // update content/column/_index.md
  fs.writeFileSync(columnIndexPath, fileContent, 'utf-8');
  console.log(`[Auto-Column SEO] Successfully updated content/column/_index.md with targeted regional keywords!`);
}

// 실행
async function main() {
  console.log('[Auto-Column SEO] Starting targeted regional column generation...');
  const column = await generateColumnContent();
  await updateColumnPage(column);
  console.log(`[Auto-Column SEO] Published regional column: "${column.title}"`);
}

main().catch(err => {
  console.error('[Auto-Column SEO] Fatal Error:', err);
  process.exit(1);
});
