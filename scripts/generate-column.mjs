import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 질환별 카테고리 정의 및 전문 주제 풀(Pool)
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    topics: [
      '공황발작과 자율신경계 과흥분, 교감신경 긴장을 푸는 4-7-8 호흡과 한방 치료 원리',
      '“또 발작이 오면 어쩌지?” 예기불안이 만성화되는 신경학적 기전과 편도체 안정법',
      '지하철·엘리베이터 폐쇄 공간 공포증과 광장공포증, 심담허겁(心膽虛怯) 체질 극복기',
      '가슴 답답함과 과호흡 증후군, 심장과 폐의 기질적 이상 없는 불안신경증 감별법',
      '발표할 때 목소리가 떨리고 심장이 쿵쾅거리는 사회공포증과 무대불안의 한방 솔루션',
      '공황장애 재발을 방지하는 자생적 뇌 신경계 조절력 회복 3단계 프로토콜'
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    topics: [
      '새벽 2~3시에 자다 깨는 수면유지장애(중도각성), 간(肝)과 심(心)의 허열(虛熱)을 다스리는 법',
      '잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌의 상열감(上熱感) 해소 치료',
      '수면제 장기 복용과 내성 걱정, 반동성 불면 없이 자연 수면 리듬을 되찾는 한방 감량법',
      '악몽과 다몽증(多夢症), 심비양허(心脾兩虛)를 보강하여 깊은 델타파 숙면을 유도하는 원리',
      '밤마다 다리가 저리고 벌레가 기어가는 듯한 하지불안증후군과 자율신경계 순환 장애',
      '낮 시간 극심한 졸음과 만성 뇌 피로, 수면의 질을 높이는 한방 수면 위생 루틴'
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 실신/어지럼증',
    topics: [
      '만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정',
      '출퇴근길 갑자기 핑 돌고 쓰러지는 미주신경성 실신의 전조증상과 혈관 탄력 강화 한방 치료',
      '검사상 이상 없는 만성 소화불량, 가슴 답답함, 상열하한을 유발하는 자율신경실조증 총정리',
      '앉았다 일어설 때 눈앞이 캄캄해지는 기립성 어지럼증과 뇌 혈류 순환 장애의 한의학적 해법',
      '긴장하면 손발에 땀이 쏟아지는 수족다한증, 교감신경 항진을 가라앉히는 체질 처방',
      '심박변이도(HRV) 자율신경 검사로 알아보는 내 몸의 스트레스 저항력과 신경 밸런스'
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    topics: [
      '아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 뇌 기저핵 원인과 부모 양육법',
      '환절기 비염이나 결막염으로 오인하기 쉬운 소아 음성틱·운동틱의 조기 감별 포인트',
      '산만하고 충동적인 소아 ADHD, 전두엽 억제 회로를 강화하는 안전한 천연 총명 한약',
      '새 학기 입학과 환경 변화로 악화되는 틱 증상, 가정에서 실천하는 스트레스 완화 가이드',
      '청소년기 뚜렛증후군과 자존감 회복, 두뇌 신경망 밸런스를 맞추는 1:1 복합 치료',
      '시청지각 훈련과 소뇌기저핵 훈련을 병행하는 소아 두뇌 발달 한방 치료 시스템'
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병/스트레스',
    topics: [
      '가슴에 큰 돌을 얹은 듯 답답하고 목에 무언가 걸린 화병(火病)과 매핵기(梅核氣) 치료법',
      '매사 무기력하고 의욕이 사라진 만성 우울감, 간기울결(肝氣鬱結)을 풀고 기혈을 돋우는 법',
      '직장인과 수험생의 번아웃 증후군, 뇌 에너지를 급속 충전하는 사향 공진단과 건뇌단 요법',
      '가슴 뻐근함과 두통 등 검사상 원인 없는 신체화 장애(Somatization)의 한의학적 진단',
      '갱년기 감정 기복과 가슴 두근거림, 상열감을 다스리는 갱년기 신경정신과 한방 처방',
      '만성 스트레스로 인한 부신 피로 증후군과 인체 자생 면역력 회복 프로토콜'
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
const selectedTopic = selectedCat.topics[Math.floor(runIndex / CATEGORIES.length) % selectedCat.topics.length];
const dateStr = kstDate.toISOString().slice(0, 10);
const articleId = `col-${Date.now().toString().slice(-6)}`;

console.log(`[Auto-Column] Generating In-Depth Medical Column: ${dateStr}, Category: ${selectedCat.name}, Topic: "${selectedTopic}"`);

// 3. Gemini API 호출 또는 폴백 장문 생성
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column] No GEMINI_API_KEY found. Generating with verified in-depth medical template.');
    return generateFallbackContent(selectedCat, selectedTopic, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
'부산대연 리아한의원' 칼럼 스타일처럼, 환자의 마음에 깊이 공감하고 병리학적/신경학적 메커니즘을 상세히 설명하며 한의학적 치료 원리와 일상 가이드를 제시하는 **깊이 있는 장문형 전문 의학 칼럼 (2,000자 내외)**을 작성하세요.

- 질환 카테고리: ${selectedCat.name}
- 칼럼 세부 주제: ${selectedTopic}
- 대상 독자: 인천, 부평, 부천 지역에서 해당 질환으로 고통받는 환자 및 보호자
- 필수 구조 (의료법 준수, 과장 광고 금지):
  1. 도입부: 환자가 진료실에서 흔히 토로하는 호소문 인용구 (“...”) 와 공감 화두
  2. 병리/기전: 자율신경계(교감-부교감), 뇌 신경망, 한스 셀리에의 스트레스 반응 3단계(경고기-저항기-소진기) 등 구체적 원인 설명
  3. 체크리스트: 환자들이 겪는 신체화 및 정신적 동반 증상들
  4. 진단 및 감별: 심박변이도(HRV) 자율신경 검사, 맥진/복진 등 한의학적 진찰
  5. 해아림 맞춤 치료: 단순 대증치료가 아닌 뇌-신경계 자생력 회복 맞춤 한약(탕약), 침구, 두개천골 추나요법
  6. 일상 자가 관리 및 회복 격려 메시지

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "칼럼 제목 (질문형 또는 깊이 있는 통찰형 헤드라인)",
  "summary": "칼럼 핵심 요약 (약 150~180자)",
  "tags": ["키워드1", "키워드2", "키워드3"],
  "contentHtml": "<p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p><blockquote>&ldquo;검사에서는 이상이 없다는데 왜 매일 몸이 천근만근 무겁고 불안할까요?&rdquo;</blockquote>... (전체 본문을 HTML 태그 h3, p, ul, li, strong, blockquote 등을 활용하여 1,800~2,200자 분량으로 풍부하게 작성)"
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
      title: parsed.title,
      summary: parsed.summary,
      tags: parsed.tags || ['자율신경', '맞춤한방치료', selectedCat.name],
      contentHtml: parsed.contentHtml,
      date: dateStr
    };
  } catch (err) {
    console.error('[Auto-Column] Gemini API generation error:', err);
    console.log('[Auto-Column] Falling back to structured in-depth medical template.');
    return generateFallbackContent(selectedCat, selectedTopic, dateStr, articleId);
  }
}

function generateFallbackContent(cat, topic, date, id) {
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    title: `${topic}은 어떤 관계일까요?`,
    summary: `${topic}에 대한 신경학적 원인과 한스 셀리에의 스트레스 적응 단계, 뇌 신경계 균형을 회복하는 해아림한의원 인천부평점의 1:1 맞춤 한방 치료 솔루션을 설명합니다.`,
    tags: [cat.name.split(' ')[0], '자율신경검사', '체질맞춤한약', '신경안정'],
    contentHtml: `
<p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

<blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
  &ldquo;병원 검사에서는 아무런 이상이 없다는데, 왜 자고 일어나도 개운하지 않고 매일 기운이 없을까요?&rdquo;<br>
  &ldquo;가슴이 두근거리고 머리가 멍해서 예전처럼 일에 집중하기가 어렵습니다.&rdquo;
</blockquote>

<p>진료실에서 환자분들을 뵐 때 가장 안타까운 순간 중 하나는, 내과나 신경과 등에서 각종 정밀 검사를 받아보아도 &ldquo;수치는 정상입니다, 신경성/스트레스성입니다&rdquo;라는 설명만 듣고 명확한 해결책을 찾지 못해 오랜 기간 불안과 피로 속에 방치되어 오신 경우입니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 기능 저하가 만성 증상으로 이어지는 메커니즘</h3>
<p>자율신경계는 우리의 의지와 상관없이 심장 박동, 혈관 수축·이완, 호흡, 소화, 체온 조절, 수면 주기 등을 24시간 쉬지 않고 조절하는 인체의 자동 제어 시스템입니다.</p>
<p>낮에는 교감신경이 적절히 활성화되어 활력을 내고, 밤에는 부교감신경이 우세해져 심신을 이완하고 충전해야 건강한 생체 리듬이 유지됩니다. 그러나 지속적인 과로와 정신적 스트레스가 누적되면 이 시소 균형이 붕괴됩니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 긴장 상태에서 소진(Burnout)으로 가는 3단계 과정</h3>
<p>캐나다의 생리학자 한스 셀리에(Hans Selye)가 제시한 일반적응증후군(GAS) 이론은 몸이 스트레스에 의해 무너지는 과정을 잘 설명해 줍니다.</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>1단계 (경고 반응기)</strong>: 급성 스트레스에 직면하여 교감신경이 급격히 흥분합니다. 가슴 두근거림, 혈압 상승, 근육 긴장, 식은땀 등이 나타납니다.</li>
  <li><strong>2단계 (저항기)</strong>: 스트레스가 지속되면서 겉으로는 일상을 유지하지만, 내부적으로는 긴장 상태를 버티기 위해 코르티솔과 에너지가 지속 고갈됩니다.</li>
  <li><strong>3단계 (소진기 / 탈진)</strong>: 신체 저항력과 자율신경 조절 능력이 바닥납니다. 이때는 심한 가슴 두근거림보다는 <em>&ldquo;극심한 만성 피로, 무기력증, 브레인포그(머리 멍함), 수면장애, 소화불량&rdquo;</em>이 주된 증상으로 고착됩니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 객관적 검사와 한의학적 진단</h3>
<p>해아림한의원 인천부평점에서는 눈대중으로 증상을 짐작하지 않습니다.</p>
<ul class="list-disc pl-5 space-y-1.5 text-sm text-[#4E6159] my-3">
  <li><strong>심박변이도(HRV) 자율신경 검사</strong>: 교감·부교감신경 활성도와 신경계 피로도, 스트레스 저항력을 객관적 수치로 측정합니다.</li>
  <li><strong>한의학적 맥진(脈診) 및 복진(腹診)</strong>: 오장육부의 기혈 허실(氣血虛實)과 담음(痰飮), 어혈, 화기(火氣)의 울체를 정밀 평가합니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">4. 1:1 맞춤 한방 치료: 자생력(自生力) 회복 솔루션</h3>
<p>단순히 몸을 억지로 각성시키는 카페인이나 임시 진정제에 의존해서는 신경계 회복이 불가능합니다.</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>체질 맞춤 탕약 처방</strong>: 뇌 신경계의 과열된 열을 내리고(청열안신), 고갈된 진액과 원기를 보강(보중익기, 사향공진단·건뇌단)하여 자연 수면과 활력을 되찾아줍니다.</li>
  <li><strong>경혈 자극 침구 및 약침 치료</strong>: 뇌 혈류 순환을 촉진하고 자율신경절의 긴장을 이완합니다.</li>
  <li><strong>두개천골 추나요법</strong>: 경추와 척추의 정렬을 바로잡아 뇌척수액 순환과 미주신경 경로를 원활하게 소통시킵니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">5. 일상생활 속 자가 회복 가이드</h3>
<p>치료와 함께 규칙적인 기상 시간 유지, 햇볕 쬐기, 격렬한 유산소 운동보다는 가벼운 산책과 복식호흡 훈련을 병행하시면 신경계 안정에 큰 시너지를 낼 수 있습니다.</p>
<p class="font-bold text-[#2F5D50] mt-4">오래된 증상일수록 혼자 참지 마시고 내 몸의 자율신경 균형 상태를 정확히 진단받아 회복의 길을 찾으시기를 바랍니다.</p>
`,
    date: date
  };
}

// 4. content/column/_index.md 에 신규 장문 칼럼 카드 주입
async function updateColumnPage(newCol) {
  const columnIndexPath = path.join(rootDir, 'content', 'column', '_index.md');
  let fileContent = fs.readFileSync(columnIndexPath, 'utf-8');

  // 신규 칼럼 카드 HTML (홈페이지 인페이지 장문 뷰어 & 바로읽기 버튼)
  const newCardHtml = `
              <!-- [자동발행: ${newCol.categoryName} - ${newCol.date}] -->
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

  // 개별 아카이브 마크다운 파일 저장 (content/column/posts/)
  const postsDir = path.join(rootDir, 'content', 'column', 'posts');
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  const slug = `${newCol.date}-${newCol.category}-${Date.now().toString().slice(-4)}`;
  const postFile = path.join(postsDir, `${slug}.md`);
  const postFrontmatter = `---
title: "${newCol.title.replace(/"/g, '\\"')}"
date: "${newCol.date}"
category: "${newCol.categoryName}"
tags: [${newCol.tags.map(t => `"${t}"`).join(', ')}]
author: "권형근 대표원장"
summary: "${newCol.summary.replace(/"/g, '\\"')}"
---

${newCol.contentHtml}
`;
  fs.writeFileSync(postFile, postFrontmatter, 'utf-8');
  console.log(`[Auto-Column] Saved individual post archive: ${postFile}`);

  fs.writeFileSync(columnIndexPath, fileContent, 'utf-8');
  console.log(`[Auto-Column] Successfully updated content/column/_index.md with in-depth long-form column!`);
}

// 실행
async function main() {
  console.log('[Auto-Column] Starting in-depth column generation...');
  const column = await generateColumnContent();
  await updateColumnPage(column);
  console.log(`[Auto-Column] Published in-depth column: "${column.title}"`);
}

main().catch(err => {
  console.error('[Auto-Column] Fatal Error:', err);
  process.exit(1);
});
