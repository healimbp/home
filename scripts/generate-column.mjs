import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 질환별 카테고리 정의 및 주제 풀(Pool)
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    topics: [
      '지하철·엘리베이터 폐쇄 공간 공포증과 공황발작 완화 호흡 훈련',
      '가슴이 답답하고 숨이 안 쉬어지는 과호흡 증후군, 심폐 기능과 자율신경의 관계',
      '공황장애 재발을 막는 자생적 신경계 안정 한방 치료 프로토콜',
      '심장이 불규칙하게 뛰는 부정맥 의심 증상과 불안신경증의 한방 감별',
      '식은땀과 극심한 공포감, 편도체 과흥분을 가라앉히는 침구 및 한약 요법',
      '대인기피증과 시선공포, 심담허겁(心膽虛怯) 체질 개선으로 극복하기'
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    topics: [
      '잠들기까지 1시간 이상 걸리는 입면장애, 뇌의 상열감(上熱感)을 내리는 법',
      '새벽에 자꾸 깨어 아침이 피곤한 조기각성 불면증의 한의학적 원인',
      '생생한 악몽과 다몽증(多夢症), 심비양허(心脾兩虛)를 보강하는 숙면 처방',
      '수면제 중단 후 겪는 반동성 불면증, 안전하게 이겨내는 단계별 한방 치료',
      '하지불안증후군으로 잠 못 이루는 밤, 다리 혈류와 신경 흥분을 가라앉히는 원리',
      '낮 시간 극심한 졸음과 만성 피로, 수면의 질을 높이는 한방 수면 루틴'
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 실신/어지럼증',
    topics: [
      '기립성 어지럼증과 뇌혈류 저하, 앉았다 일어설 때 핑 도는 증상 치료법',
      '미주신경성 실신의 전조 증상(메스꺼움, 시야흐림) 대처 요령과 혈관 탄력 강화',
      '신경성 위장장애와 과민성대장증후군, 뇌-장 축(Brain-Gut Axis)의 한방 회복',
      '손발이 차갑고 식은땀이 나는 수족냉증과 자율신경실조증의 상관관계',
      '가슴 두근거림과 만성 두통, 교감신경 항진을 다스리는 추나요법과 침 치료',
      '자율신경 균형 검사(HRV)로 확인하는 내 몸의 스트레스 저항도 분석'
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    topics: [
      '눈 깜빡임에서 음성틱으로 번지는 아이 틱장애, 조기 발견과 치료 골든타임',
      '환절기 비염과 혼동하기 쉬운 헛기침·음음 틱 증상의 한방 감별법',
      '산만하고 충동적인 소아 ADHD, 전두엽 억제 기능을 강화하는 총명 한약',
      '새 학기 스트레스로 악화되는 틱 증상, 가정에서 실천하는 부모 양육 가이드',
      '청소년기 뚜렛증후군, 자존감 회복과 두뇌 기저핵 안정 한방 복합 치료',
      '시청지각 훈련과 소뇌기저핵 훈련으로 두뇌 신경망 밸런스 바로잡기'
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병/스트레스',
    topics: [
      '목에 무언가 걸린 듯 뱉어지지 않는 매핵기(梅核氣)와 스트레스 화병 치료',
      '의욕이 없고 매사 무기력한 만성 우울감, 기혈(氣血) 순환을 돕는 한방 해법',
      '직장인 번아웃 증후군, 뇌 신경 피로를 회복하는 공진단·건뇌단 요법',
      '가슴이 뻐근하고 답답한 신체화 장애, 울화(鬱火)를 푸는 한의학적 처방',
      '갱년기 감정 기복과 수면장애를 동반하는 갱년기 우울증의 한방 다스림',
      '만성 스트레스로 인한 부신 피로 증후군과 면역력 회복 가이드'
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

console.log(`[Auto-Column] Date: ${dateStr}, Category: ${selectedCat.name}, Topic: "${selectedTopic}"`);

// 3. Gemini API 호출 또는 폴백 생성
async function generateColumnContent() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log('[Auto-Column] No GEMINI_API_KEY found. Generating with verified high-quality medical template.');
    return generateFallbackContent(selectedCat, selectedTopic, dateStr, articleId);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 권형근 대표원장(한방침구과 전문의)입니다.
홈페이지 방문 환자 및 가족들에게 전하는 신뢰와 위로의 최고급 한방 건강 의학 칼럼을 작성하세요.

- 질환 카테고리: ${selectedCat.name}
- 칼럼 세부 주제: ${selectedTopic}
- 대상 독자: 인천, 부평, 부천 지역에서 해당 질환으로 고통받는 환자 및 보호자
- 원칙 (의료법 준수): 과장된 완치 보장 금지, 원인 분석, 한의학적 치료 기전, 생활 속 자가 관리법 안내.

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "칼럼 제목 (전문적이면서도 환자의 공감을 이끄는 명확한 헤드라인)",
  "summary": "칼럼 핵심 요약 2~3문장 (약 120~150자)",
  "tags": ["키워드1", "키워드2"],
  "content": "칼럼 본문 전체 (서론, 1. 증상의 근본 원인과 신경계 불균형, 2. 해아림의 1:1 맞춤 한방 치료 원리, 3. 일상생활 속 자가 관리 수칙, 결론 및 격려 메시지, 마크다운 형식, 약 800~1000자)"
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
      tags: parsed.tags || ['한방치료', selectedCat.name],
      content: parsed.content,
      date: dateStr
    };
  } catch (err) {
    console.error('[Auto-Column] Gemini API generation error:', err);
    console.log('[Auto-Column] Falling back to structured medical template.');
    return generateFallbackContent(selectedCat, selectedTopic, dateStr, articleId);
  }
}

function generateFallbackContent(cat, topic, date, id) {
  return {
    id: id,
    category: cat.id,
    categoryName: cat.name,
    title: `${topic} - 원인 분석과 1:1 맞춤 한방 치료 솔루션`,
    summary: `${topic}에 대한 한의학적 기전과 뇌 신경계·자율신경 균형을 회복하는 해아림한의원 인천부평점의 단계별 맞춤 치료법을 안내합니다.`,
    tags: [cat.name.split(' ')[0], '맞춤한방치료', '신경안정'],
    content: `안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.\n\n많은 분들이 원인을 알 수 없는 신체 증상과 심리적 불안으로 일상생활에 큰 불편을 겪으시며 내원하십니다.\n\n### 1. 증상의 근본 원인과 신경계 불균형\n우리 몸의 자율신경계와 뇌 신경망은 스트레스, 만성 피로, 환경적 요인에 의해 시소 균형이 무너질 수 있습니다. 교감신경의 과도한 흥분이나 부교감신경의 기능 저하는 신체화 증상으로 이어지게 됩니다.\n\n### 2. 해아림의 1:1 맞춤 한방 치료 프로토콜\n해아림한의원 인천부평점은 세심한 진맥과 정밀 자율신경 검사를 통해 환자 개개인의 체질을 분석하고, 뇌 신경계를 안정시키는 맞춤 한약과 경혈 자극 침구 요법, 두개천골 추나 치료를 병행합니다.\n\n### 3. 일상생활 속 자가 관리 가이드\n규칙적인 수면 리듬 유지와 복식호흡을 통한 이완 훈련은 자율신경 안정에 큰 도움이 됩니다. 증상을 혼자 참지 마시고 조기에 정확한 진단을 받아보시기를 권해드립니다.`,
    date: date
  };
}

// 4. content/column/_index.md 에 신규 칼럼 카드 주입 및 인페이지 리더 지원
async function updateColumnPage(newCol) {
  const columnIndexPath = path.join(rootDir, 'content', 'column', '_index.md');
  let fileContent = fs.readFileSync(columnIndexPath, 'utf-8');

  const encodedContent = encodeURIComponent(newCol.content);
  const encodedSummary = encodeURIComponent(newCol.summary);
  const encodedTitle = encodeURIComponent(newCol.title);

  // 신규 칼럼 카드 HTML (홈페이지 인페이지 뷰어 & 바로읽기 버튼)
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
${newCol.content}
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

${newCol.content}
`;
  fs.writeFileSync(postFile, postFrontmatter, 'utf-8');
  console.log(`[Auto-Column] Saved individual post archive: ${postFile}`);

  fs.writeFileSync(columnIndexPath, fileContent, 'utf-8');
  console.log(`[Auto-Column] Successfully updated content/column/_index.md with direct in-site reader!`);
}

// 실행
async function main() {
  console.log('[Auto-Column] Starting automatic column generation for in-site viewing...');
  const column = await generateColumnContent();
  await updateColumnPage(column);
  console.log(`[Auto-Column] Published column in-site: "${column.title}"`);
}

main().catch(err => {
  console.error('[Auto-Column] Fatal Error:', err);
  process.exit(1);
});
