import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 질환별 카테고리 정의 및 고빈도 검색 키워드 결합 주제 풀 (SEO Optimized)
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    topics: [
      {
        title: '[인천부평 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 4-7-8 호흡과 1:1 맞춤 치료법',
        keyword: '인천 공황장애 한의원, 부평 공황장애 병원, 공황발작 치료'
      },
      {
        title: '[부평 불안장애 한의원] “또 발작 올까 두려운” 예기불안과 공황장애 뇌 변연계 안정 한방 치료',
        keyword: '부평 불안장애 한의원, 인천 예기불안 치료 병원, 공황장애 완치'
      },
      {
        title: '[인천 부천 광장공포증 한의원] 지하철·엘리베이터 공포증과 폐쇄공포증 한방 치료 솔루션',
        keyword: '인천 광장공포증 한의원, 부천 폐쇄공포증 병원, 자율신경 안정'
      },
      {
        title: '[부평구 사회공포증 한의원] 발표불안과 무대공포증, 목소리 떨림과 가슴 두근거림 체질 치료',
        keyword: '부평 사회공포증 한의원, 인천 발표불안 병원, 무대공포증 한약'
      }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    topics: [
      {
        title: '[인천부평 불면증 한의원/병원] 새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리',
        keyword: '인천 불면증 한의원, 부평 불면증 병원, 자다깨는불면증 치료'
      },
      {
        title: '[부평 수면장애 한의원] 수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬 회복',
        keyword: '부평 수면장애 한의원, 인천 수면유도제 단약, 불면증 한약 추천'
      },
      {
        title: '[인천 부천 입면장애 한의원] 잠들기까지 1시간 이상 뒤척이는 원인과 뇌 상열감 해소법',
        keyword: '인천 입면장애 한의원, 부천 수면장애 병원, 불면증 극복'
      }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 실신/어지럼증',
    topics: [
      {
        title: '[인천 부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하, 검사 방법과 한방 치료',
        keyword: '인천 자율신경실조증 한의원, 부평 자율신경실조증 병원, 만성피로 검사'
      },
      {
        title: '[인천 미주신경성 실신 한의원] 출퇴근길 지하철 어지럼증과 식은땀, 혈관 탄력 강화 한방 치료',
        keyword: '인천 미주신경성실신 한의원, 부평 어지럼증 병원, 실신 전조증상'
      },
      {
        title: '[부평구 어지럼증/이명 한의원] 기립성 어지럼증과 앉았다 일어설 때 핑 도는 증상 한의학적 해법',
        keyword: '부평 어지럼증 한의원, 인천 기립성저혈압 병원, 뇌혈류 개선 한약'
      },
      {
        title: '[인천 부천 수족다한증 한의원] 긴장하면 손발에 땀 쏟아지는 원인과 교감신경 긴장 완화 처방',
        keyword: '인천 다한증 한의원, 부평 수족다한증 병원, 손발땀 치료'
      }
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    topics: [
      {
        title: '[인천 부평 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭',
        keyword: '인천 틱장애 한의원, 부평 틱장애 병원, 소아 음성틱 치료'
      },
      {
        title: '[부평 소아 ADHD 한의원/병원] 산만하고 충동적인 아이 집중력 향상, 전두엽 기능 강화 총명 한약',
        keyword: '부평 ADHD 한의원, 인천 소아ADHD 병원, 주의력결핍 치료'
      },
      {
        title: '[인천 부천 뚜렛증후군 한의원] 청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료',
        keyword: '인천 뚜렛증후군 한의원, 부천 틱장애 치료, 소아두뇌클리닉'
      }
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병/스트레스',
    topics: [
      {
        title: '[인천부평 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학적 치료법',
        keyword: '인천 화병 한의원, 부평 우울증 병원, 매핵기 치료 한약'
      },
      {
        title: '[부평 직장인 번아웃 증후군 한의원] 만성 무기력증과 뇌 피로 회복, 사향공진단·건뇌단 처방',
        keyword: '부평 번아웃 한의원, 인천 만성피로 병원, 공진단 효과'
      },
      {
        title: '[인천 부천 신경성 신체화장애 한의원] 검사상 원인 없는 가슴 뻐근함, 두통, 소화불량 치료',
        keyword: '인천 신체화장애 한의원, 부평 신경성위염 병원, 자율신경 치료'
      }
    ]
  }
];

// 2. 실행 시점에 맞춘 카테고리 & 주제 선정 (순환 방식)
const now = new Date();
const kstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000));
const dayOfYear = Math.floor((kstDate - new Date(kstDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
const hour = kstDate.getHours();
const runIndex = (dayOfYear * 2) + (hour >= 12 ? 1 : 0);

const selectedCat = CATEGORIES[runIndex % CATEGORIES.length];
const selectedItem = selectedCat.topics[Math.floor(runIndex / CATEGORIES.length) % selectedCat.topics.length];
const dateStr = kstDate.toISOString().slice(0, 10);
const articleId = `col-${Date.now().toString().slice(-6)}`;

console.log(`[Auto-Column SEO] Date: ${dateStr}, Category: ${selectedCat.name}, Title: "${selectedItem.title}"`);

// 3. Gemini API 호출 또는 폴백 장문 생성 (SEO 키워드 강화)
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column SEO] No GEMINI_API_KEY found. Generating with verified SEO in-depth template.');
    return generateFallbackContent(selectedCat, selectedItem, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
네이버 및 구글 검색엔진 최적화(SEO)를 고려하여, 지역명(인천, 부평, 부천, 삼산동, 부평역 등), 질환명, 한의원, 병원, 치료, 검사 등 검색량이 많은 키워드를 본문과 제목에 자연스럽고 풍부하게 녹여낸 **2,000자급 심층 전문 의학 칼럼**을 작성하세요.

- 제목: ${selectedItem.title}
- 주요 타겟 키워드: ${selectedItem.keyword}, 인천 부평 한의원, 해아림한의원 인천부평점
- 질환 카테고리: ${selectedCat.name}
- 대상 독자: 인천, 부평, 부천, 삼산동 등지에서 관련 증상으로 한의원 및 병원 치료를 찾는 환자 및 보호자
- 필수 구조 (의료법 준수, 과장/완치 보장 금지, 전문적 기전 분석):
  1. 제목: [지역명 + 질환명 + 한의원/병원] 포함된 질문형/통찰형 헤드라인
  2. 도입부: 환자의 실제 진료실 호소문 인용구 (“...”) 와 지역 주민 공감대 형성
  3. 신경/생리학적 기전: 자율신경계(교감-부교감), 뇌 변연계/기저핵, 한스 셀리에 3단계 스트레스 모델
  4. 객관적 검사: 심박변이도(HRV) 자율신경 검사, 한의학 맥진·복진
  5. 1:1 맞춤 한방 치료: 체질 맞춤 탕약, 침구/약침, 두개천골 추나요법
  6. 일상 관리 및 회복 격려 메시지

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${selectedItem.title}",
  "summary": "칼럼 핵심 요약 2~3문장 (약 150~180자, 주요 키워드 포함)",
  "tags": ["인천한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}치료", "자율신경검사"],
  "contentHtml": "<p>안녕하세요. <strong>인천 부평 자율신경·신경정신과 특화 클리닉 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p><blockquote>&ldquo;...&rdquo;</blockquote>... (전체 본문을 HTML 태그 h3, p, ul, li, strong, blockquote 등을 활용하여 1,800~2,200자 분량으로 풍부하게 작성)"
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
      title: parsed.title || selectedItem.title,
      summary: parsed.summary,
      tags: parsed.tags || ['인천한의원', '부평한의원', selectedCat.name],
      contentHtml: parsed.contentHtml,
      date: dateStr
    };
  } catch (err) {
    console.error('[Auto-Column SEO] Gemini API error:', err);
    return generateFallbackContent(selectedCat, selectedItem, dateStr, articleId);
  }
}

function generateFallbackContent(cat, item, date, id) {
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    title: item.title,
    summary: `인천, 부평, 부천 지역에서 ${cat.name} 증상으로 한의원 및 병원을 찾는 분들을 위한 권형근 원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`,
    tags: ['인천한의원', '부평한의원', '부천한의원', cat.name.split(' ')[0], '맞춤한약'],
    contentHtml: `
<p>안녕하세요. <strong>인천 · 부평 · 부천 자율신경 및 두뇌 질환 클리닉, 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

<blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
  &ldquo;인천, 부평 인근 내과와 신경과 병원에서 각종 정밀 검사를 받아도 '신경성', '스트레스성'이라는 말뿐 원인을 찾지 못했습니다.&rdquo;<br>
  &ldquo;약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 한의원 치료를 받고 싶습니다.&rdquo;
</blockquote>

<p>부평역 인근 진료실에서 인천, 부평, 부천, 삼산동 등지에서 찾아오시는 환자분들을 뵐 때, 공통적으로 호소하시는 고민입니다. 몸이 보내는 절박한 신호를 단순한 스트레스로 치부하지 않고 체계적인 신경학적 원인을 진단하는 것이 치료의 첫걸음입니다.</p>

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
<p>규칙적인 수면 리듬 유지, 4-7-8 복식호흡 훈련, 가벼운 산책을 병행하시면 신경계 안정에 큰 도움이 됩니다. 인천, 부평 지역에서 오랜 증상으로 고통받고 계시다면 편안하게 내원하시어 정확한 진단을 받아보시길 권해드립니다.</p>
`,
    date: date
  };
}

// 4. content/column/_index.md 에 신규 SEO 칼럼 카드 주입
async function updateColumnPage(newCol) {
  const columnIndexPath = path.join(rootDir, 'content', 'column', '_index.md');
  let fileContent = fs.readFileSync(columnIndexPath, 'utf-8');

  // 신규 칼럼 카드 HTML
  const newCardHtml = `
              <!-- [SEO 자동발행: ${newCol.categoryName} - ${newCol.date}] -->
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
  console.log(`[Auto-Column SEO] Successfully updated content/column/_index.md with high-intent keywords!`);
}

// 실행
async function main() {
  console.log('[Auto-Column SEO] Starting keyword-optimized in-depth column generation...');
  const column = await generateColumnContent();
  await updateColumnPage(column);
  console.log(`[Auto-Column SEO] Published column: "${column.title}"`);
}

main().catch(err => {
  console.error('[Auto-Column SEO] Fatal Error:', err);
  process.exit(1);
});
