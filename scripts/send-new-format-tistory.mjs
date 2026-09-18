import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatTistoryContent } from './publish-tistory.mjs';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendNewFormatTistory() {
  console.log('🚀 [New Format Tistory Sender] Preparing [Format C: Differential Diagnosis] column transmission...');

  const category = '자율신경 & 실신·어지럼증·이명';
  const slug = 'bupyeong-dizziness-differential-guide';
  const date = '2026-09-16';

  const titleVariants = {
    p1: '[인천 부평 어지럼증 한의원] 앉았다 일어설 때 핑 도는 기립성 어지럼 vs 빙빙 도는 이석증 감별과 자율신경 치료법',
    p2: '앉았다 일어설 때 눈앞이 캄캄? [부평 어지럼증 한의원] 이석증과 자율신경실조증 핵심 감별 비교 ⭐',
    p3: '이비인후과 검사는 정상인데 왜 자꾸 핑 돌고 어지러울까? (자율신경 vs 전정신경 감별 가이드)'
  };

  const selectedTitle = titleVariants.p2;
  const summary = '이비인후과나 신경과 검사에서 이상이 없는데도 앉았다 일어설 때 핑 돌거나 머리가 멍한 만성 어지럼증 환자를 위한 자율신경성 어지럼증 vs 이석증/메니에르병 정밀 감별 비교 및 1:1 맞춤 한방 치료 가이드';
  const columnUrl = `https://healimbp.com/column/bupyeong-dizziness/`;
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://pf.kakao.com/_Tcxcxoxj';

  const tistoryTags = ['어지럼증', '부평어지럼증', '기립성저혈압', '이석증', '자율신경실조증', '인천한의원', '해아림한의원'];

  // [포맷 C: 감별 진단 비교분석형] 완결형 블로그 대본
  const tistoryScript = `> "자리에 앉았다가 일어나기만 하면 눈앞이 하얘지고 아찔해서 손잡이를 잡고 한참 서 있어야 합니다."
> "이비인후과에서는 이석증도 아니고 귀에는 아무 문제가 없다는데, 온종일 머리에 안개가 낀 것처럼 멍하고(브레인포그) 붕 뜬 느낌이 듭니다."
> "혈압 검사나 뇌 MRI를 찍어도 정상이라는데, 왜 저는 일상생활이 어려울 정도로 매일 어지러운 걸까요?"

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

진료실에서 어지럼증 환자분들을 진료할 때 가장 흔히 겪는 안타까운 상황은, 귀(이비인후과)나 뇌(신경과)의 기질적 검사에서 '이상 없음' 판정을 받았음에도 매일 어지럼증과 식은땀, 가슴 두근거림으로 극심한 고통을 겪는 분들을 뵐 때입니다.

어지럼증은 모두 같은 질환이 아닙니다. 귀의 전정기관 문제로 발생하는 **회전성 어지럼(이석증/메니에르병)**과, 뇌 혈류 및 자율신경 조절 실조로 발생하는 **비회전성 어지럼(자율신경실조증/기립성 저혈압)**은 발병 기전과 치료 방향이 완전히 다릅니다.

---

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. 감별 진단 개요: 자율신경성 어지럼 vs 이석증·메니에르병
* 02. [핵심 비교표] 한눈에 보는 어지럼증 원인별 감별 분석
* 03. 진료실에서 확인하는 자가 감별 4대 체크포인트
* 04. 해아림한의원 1:1 맞춤 신경계 자생력 회복 솔루션
* 05. ❓ 진료실 자주 묻는 질문 (FAQ 3문 3답 - 어지럼증 특화)
* 06. 일상 속 뇌 혈류를 깨우는 물리적·행동학적 루틴 3가지

---

### 🌿 01. 감별 진단 개요: 증상은 비슷한데 원인이 전혀 다른 이유
어지럼증은 크게 두 가지 축으로 구분됩니다:
1. **말초성 전정 어지럼 (이석증, 전정신경염, 메니에르병)**: 내이(귀 속)의 반고리관이나 림프액에 물리적 이상이 생겨 발생하며, 주로 천장이나 주변 사물이 빙글빙글 도는 '회전성' 양상을 띱니다.
2. **자율신경성·중추성 어지럼 (자율신경실조증, 기립성 저혈압, 경추성 어지럼)**: 교감신경과 부교감신경의 피드백 루프가 무너지면서 자세 변화 시 뇌로 올라가는 혈류량이 순간적으로 떨어져 발생합니다. 사물이 돌기보다는 '아찔함', '붕 뜸', '멍함', '시야 암전'으로 나타납니다.

---

### 📋 02. [핵심 비교표] 한눈에 보는 어지럼증 감별 분석표

| 구분 항목 | 자율신경실조증 / 기립성 어지럼 | 이석증 & 메니에르병 (이비인후과) |
| :--- | :--- | :--- |
| **핵심 발생 원인** | 자율신경 피드백 실조 및 뇌 혈류 순환 저하 | 반고리관 이석 이탈 또는 내림프 수종 |
| **주요 어지럼 양상** | 핑 도는 아찔함, 붕 뜨는 느낌, 멍함, 시야 흐림 | 세상과 천장이 팽이처럼 빙글빙글 도는 회전감 |
| **지속 시간 & 패턴** | 하루 종일 지속되는 멍함과 피로, 자세 변경 시 악화 | 특정 머리 위치에서 수초~수분간 극심 후 완화 |
| **동반 신체 증상** | 식은땀, 가슴 두근거림, 만성 소화불량, 손발 차가움 | 심한 구역·구토, 이명(귀울림), 귀 먹먹함, 난청 |
| **병원 정밀 검사** | 이비인후과 전정 검사 정상, HRV 자율신경 저하 | 안진 검사상 특정 방향의 특징적 안구 떨림 관찰 |
| **근본 치료 방향** | 뇌 혈류 보강 한약 + SGB 약침 + 상부경추 추나 | 이석정복술(에플리 수기법) 및 림프 순환 조절 |

---

### 🔍 03. 진료실에서 확인하는 자가 감별 4대 체크포인트
1. **고개를 가만히 두고 일어설 때만 아찔한가요?** ➔ 자율신경성 기립성 혈류 저하일 가능성이 매우 높습니다.
2. **누워서 고개를 좌우로 돌릴 때 천장이 핑 도나요?** ➔ 반고리관 내부의 이석증을 우선 의심해야 합니다.
3. **어지러울 때 가슴 두근거림, 불안, 식은땀이 함께 오나요?** ➔ 교감신경의 급격한 과항진 반응입니다.
4. **귀에서 삐- 소리가 나면서 한쪽 귀가 먹먹해지나요?** ➔ 메니에르병 또는 내이 림프 순환 이상을 감별해야 합니다.

---

### 💡 04. 해아림한의원 인천부평점 1:1 맞춤 치료 솔루션
* **익기승양(益氣升陽) & 청열안신 1:1 맞춤 한약**: 뇌로 올라가는 맑은 기혈을 끌어올리고 심장과 간의 허열을 내려 뇌 혈류 순환을 정상화합니다. (영계출감탕, 반하백출천마탕, 보중익기탕 처방)
* **SGB 성상신경절 약침 & 경혈 자극**: 목 앞쪽 성상신경절 부위와 풍지혈, 백회혈 자극으로 뇌 혈관의 미세 순환을 즉각 촉진하고 자율신경 밸런스를 복원.
* **두개천골 추나요법(CST) & 상부경추 교정**: 턱관절과 상부 경추(C1-C2)를 정밀 교정하여 뇌척수액 순환로와 추골동맥의 압박을 해소.
* **NeuronFlex 뇌파 바이오피드백**: 불균형해진 전두엽과 자율신경 조절 중추의 자생적 항상성을 강화.

---

### ❓ 05. 진료실 자주 묻는 질문 (FAQ 어지럼증 3문 3답)

**Q1. 이비인후과에서 이석증 치료를 받고 어지럼은 줄었는데, 여전히 머리가 무겁고 멍한 이유는 무엇인가요?**
> A. 이석증 자체는 정복술로 해결되었더라도, 발작 당시 극심한 공포와 스트레스로 인해 뇌의 자율신경계가 과각성되어 '지속성 체위-지각 어지럼증(PPPD)'으로 전환되었기 때문입니다. 이 단계에서는 귀 치료가 아닌 뇌 신경계의 안정과 자율신경 조절 치료가 필요합니다.

**Q2. 기립성 어지럼증이 심할 때 운전이나 외출을 해도 안전한가요?**
> A. 급격한 자세 변화 시 순간적 시야 암전이나 실신 위험이 있으므로, 기상 직후 1분간 침대에 앉아 발목을 까딱이는 준비 운동을 거친 후 천천히 일어나셔야 합니다. 급성기에는 장시간 운전을 피하고 신경계가 안정될 때까지 대중교통 이용을 권장합니다.

**Q3. 한방 치료를 받으면 어지럼증 호전 순서는 어떻게 나타나나요?**
> A. 1단계로 가슴 두근거림과 식은땀, 소화불량 등 자율신경 동반 증상이 먼저 완화되고, 2단계로 일어설 때 핑 도는 강도와 빈도가 줄어들며, 마지막 3단계로 하루 종일 지속되던 머리의 안개(브레인포그)와 만성 피로가 맑게 걷히게 됩니다.

---

### 🌿 06. 오늘부터 실천하는 뇌 혈류 회복 루틴 3가지 (약선차 제외)
1. **기상 전 '발목 펌프 운동'**: 잠자리에서 일어나기 전 누운 상태로 양 발끝을 몸쪽으로 당겼다 펴는 동작을 20회 반복하여 다리에 쏠린 혈액을 심장과 뇌로 밀어 올려줍니다.
2. **후두하근 온찜질**: 목 뒤 머리가 시작되는 움푹 파인 부위(풍지혈)를 따뜻한 온수건으로 15분간 찜질하여 추골동맥 혈류를 열어줍니다.
3. **미지근한 물 300ml 기상 음용**: 아침 공복에 마시는 물 한 잔은 혈액의 점도를 낮추고 혈류 순환 속도를 높여 뇌 허혈을 예방합니다.

---

> **권형근 대표원장의 조언**: "검사상 이상이 없다는 말은 원인이 없다는 뜻이 아니라, 기질적 파괴가 아닌 '신경 기능의 조절 실조' 상태임을 의미합니다. 뇌와 자율신경의 균형을 되찾아주면 어지럼증의 공포에서 반드시 벗어날 수 있습니다."`;

  // 1. 썸네일 경로 정밀 리졸브
  const matchedThumbnailPath = resolveThumbnail({
    categoryId: 'autonomic',
    categoryName: category,
    title: selectedTitle,
    slug: slug,
    region: '부평'
  });

  console.log(`[New Format Tistory Sender] Resolved Thumbnail: ${matchedThumbnailPath}`);

  // 2. 요약 알림 메시지 구성
  const summaryMsg = `📢 <b>[해아림한의원] 새 5대 포맷 [포맷 C: 감별 진단 비교분석형] 칼럼이 준비되었습니다!</b>

📌 <b>추천 메인 제목:</b>
<code>${escapeHtml(selectedTitle)}</code>

🏷️ <b>분류:</b> ${escapeHtml(category)} | <b>포맷:</b> [포맷 C] 감별 진단 비교분석형
🗓️ <b>발행일:</b> ${date}

📝 <b>칼럼 핵심 요약:</b>
${escapeHtml(summary)}

🖼️ <b>매칭 대표 썸네일:</b> <code>${matchedThumbnailPath}</code> (HTML 파일 상단 내장 完)
🔗 <a href="${columnUrl}">홈페이지 칼럼 바로가기</a>`;

  // 3. 텔레그램 요약 알림 (텍스트 메시지)
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('✅ 1. Telegram Summary text sent!');

  // 4. 블로그 복사용 전체 대본 메시지 구성 (마크다운 볼드 기호 ** 일체 배제된 복사용 텍스트)
  const cleanScriptForBlog = tistoryScript
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/###\s*(.*)/g, '■ $1');

  const copyMsg = `📋 <b>[티스토리/네이버 블로그 원클릭 복사용 대본]</b>
<i>※ 새로 정립된 [포맷 C: 감별 진단 비교분석형] 6대 챕터 정통 의학 원고입니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 3종 세트]</b>
1️⃣ <b>맨앞 지역명형:</b>
<code>${escapeHtml(titleVariants.p1)}</code>

2️⃣ <b>중간 지역명형 (추천 ⭐):</b>
<code>${escapeHtml(titleVariants.p2)}</code>

3️⃣ <b>순수 질환/의학형:</b>
<code>${escapeHtml(titleVariants.p3)}</code>

─────────────────
${escapeHtml(cleanScriptForBlog)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 진료 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의 직접 진료)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 야간진료: 월 · 수 · 금 저녁 8시까지
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}

🏷️ <b>[추천 태그]</b>
<code>${escapeHtml(tistoryTags.map(t => `#${t}`).join(' '))}</code>`;

  const MAX_LEN = 3800;
  if (copyMsg.length <= MAX_LEN) {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
  } else {
    const p1 = copyMsg.slice(0, MAX_LEN);
    const p2 = copyMsg.slice(MAX_LEN);
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: p1, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: p2, parse_mode: 'HTML', disable_web_page_preview: true })
    });
  }
  console.log('✅ 2. Full Copy Script sent!');

  // 5. 티스토리 HTML 서식 문서 첨부
  const colObj = {
    title: selectedTitle,
    category: category,
    tags: tistoryTags,
    image: matchedThumbnailPath,
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, slug);

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사(`Ctrl+A` ➔ `Ctrl+C`) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 [포맷 C: 감별 비교표]와 카드/인용박스/FAQ 서식이 100% 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, `tistory_${slug}.html`);

  await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('✅ 3. Tistory HTML Document sent!');
  console.log('🎉 [Success] New format Tistory blog transmission finished completely!');
}

sendNewFormatTistory().catch(err => {
  console.error('Transmission Error:', err);
});
