import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatTistoryContent } from './publish-tistory.mjs';
import { getDiverseFaq, findTopicKey } from './column-faqs.mjs';
import { injectFaqIntoTistoryScript } from './generate-column.mjs';

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

async function sendVerifiedTistory(slug = 'bucheon-neuropsychiatry-insomnia') {
  console.log(`[Telegram Tistory Sender] Preparing verified Tistory transmission for: ${slug}...`);

  const mdPath = path.join(rootDir, 'content', 'column', `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    throw new Error(`Column markdown file not found: ${mdPath}`);
  }

  const rawMd = fs.readFileSync(mdPath, 'utf8');
  const titleMatch = rawMd.match(/title:\s*['"]?([^'\r\n"]+)/);
  const title = titleMatch ? titleMatch[1] : slug;
  const catMatch = rawMd.match(/category:\s*['"]?([^'\r\n"]+)/) || rawMd.match(/categories:\s*\[(.*?)\]/);
  const category = catMatch ? catMatch[1].replace(/['"]/g, '').trim() : '';
  const dateMatch = rawMd.match(/date:\s*['"]?([^'\r\n"]+)/);
  const date = dateMatch ? dateMatch[1] : '2026-09-08';
  const summaryMatch = rawMd.match(/summary:\s*['"]?([^'\r\n"]+)/);
  const summary = summaryMatch ? summaryMatch[1] : '';

  // Extract the 3 diverse FAQs from the updated markdown file
  const faqPart = rawMd.includes('자주 묻는 질문') ? rawMd.slice(rawMd.indexOf('자주 묻는 질문')) : '';
  const qMatches = [...faqPart.matchAll(/Q[1-3]<\/span>\s*<span>(.*?)<\/span>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => ({
    q: m[1].trim(),
    a: m[2].replace(/<[^>]+>/g, '').trim()
  }));

  // If not found in HTML format, get directly from column-faqs
  const faqs = qMatches.length === 3 ? qMatches : getDiverseFaq(category, { focus: title }, { title });

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://pf.kakao.com/_Tcxcxoxj';

  const titleVariants = {
    p1: `[부천 불면증 한의원] 수면제 의존 없이 깊은 잠(통잠)을 되찾는 한방 치료법`,
    p2: `새벽 3시에 눈이 번쩍? [부천 중동 불면증 한의원] 수면 뇌파 회복 솔루션 ⭐`,
    p3: `수면제를 먹어도 자꾸 깨는 불면증, 약물 내성을 끊는 뇌 자생력 회복법`
  };

  const tistoryTags = ['불면증', '불면증치료', '부천한의원', '부평한의원', '수면장애', '수면제단약', '해아림한의원'];

  const tistoryScript = `> "수면제를 3년째 먹고 있는데 이제는 2알을 먹어도 새벽 3시만 되면 눈이 번쩍 떠집니다."
> "수면유도제를 먹고 자면 다음 날 아침까지 머리가 멍하고 안개가 낀 것 같아(브레인포그) 일상생활이 어렵습니다."
> "약에 내성이 생겨 평생 수면제 없이는 못 잘까 봐 너무 두렵습니다."

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

진료실에서 불면증 환자분들을 뵐 때 가장 안타까운 순간은, 수면제나 수면유도제를 복용하면서도 깊은 잠을 자지 못하고 만성 피로와 약물 의존성의 공포에 갇혀 계신 분들을 만날 때입니다.

수면제는 뇌의 중추신경을 인위적으로 '마취'시키는 약물일 뿐, 자연스러운 수면 뇌파(델타파)와 뇌척수액 순환을 통한 뇌세포 회복을 만들어내지 못합니다. 불면증의 근본 치료는 약물을 강제로 늘리는 것이 아니라, **과열된 뇌 스위치를 스스로 끄는 두뇌 자생력을 복원하는 것**입니다.

---

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. 수면제와 자연 수면의 결정적 차이: 델타파와 뇌 해독 시스템
* 02. 불면증의 3단계 진행 과정: 입면장애에서 조기각성까지
* 03. 한의학적 진단: 심신불교(心腎不交)와 간화상충(肝火上衝)
* 04. 해아림한의원 1:1 맞춤 수면 뇌파 정상화 솔루션
* 05. ❓ 진료실 자주 묻는 질문 (FAQ 3문 3답 - 불면증/단약 특화)
* 06. 오늘 밤부터 실천하는 수면 위생 골든 룰 3가지

---

### 🌿 01. 수면제와 자연 수면의 결정적 차이
우리가 잠을 잘 때 뇌는 깊은 **'델타파(Slow-wave Sleep)'** 구간에 진입하여 낮 동안 쌓인 베타 아밀로이드 등 뇌 독소를 뇌척수액을 통해 씻어냅니다.

하지만 졸피뎀, 스틸녹스 등 수면제는 뇌를 강제로 기절시킬 뿐 깊은 델타파 수면 단계로 들어가지 못하게 만듭니다. 따라서 8시간을 누워 있어도 아침에 머리가 무겁고 피로가 풀리지 않는 것입니다.

---

### 🔍 02. 불면증의 3단계 진행 과정
1. **1단계 (입면 장애)**: 잠자리에 누워 30분~1시간 이상 잡생각(DMN 과활성)으로 뒤척임.
2. **2단계 (수면 유지 장애)**: 잠은 들지만 새벽 2~4시에 2~3회 이상 깨며 다시 잠들기 어려움.
3. **3단계 (조기 각성 및 주간 피로)**: 새벽 4~5시에 완전히 깨어버리고 만성 두통, 어지럼증, 불안, 우울감이 동반됨.

---

### 📚 03. 한의학적 진단: 심신불교(心腎不交)와 간음부족(肝陰不足)
한의학에서는 불면증을 오장육부의 열 순환과 진액 고갈로 진단합니다:

* **심신불교(心腎不交)형**: 가슴의 화(火)는 치솟고 신장의 수(水)는 차가워 상열하한과 가슴 두근거림이 심한 유형 (교태환, 황련아교탕 처방)
* **간음부족(肝陰不足)형**: 간의 진액이 말라 새벽 1~3시 간 해독 시간에 허열이 치솟아 눈이 떠지는 유형 (보간탕 처방)
* **심비양허(心脾兩虛)형**: 만성 소화불량과 기혈 부족으로 작은 소리에도 놀라 깨는 유형 (가미귀비탕 처방)

---

### 💡 04. 해아림한의원 인천부평점 1:1 맞춤 치료 솔루션
* **보혈안신(補血安神) 1:1 맞춤 한약**: 간과 심장의 허열을 내리고 뇌파를 안정시켜 자연스러운 델타파 수면을 유도.
* **수면 특효혈 침구 & 성상신경절 약침**: 백회혈, 신문혈, 안면혈, 삼음교혈 자극으로 야간 교감신경의 과각성을 즉각 억제.
* **두개천골 추나요법(CST)**: 턱관절과 상부 경추의 긴장을 풀어 뇌척수액의 순환로를 시원하게 개방.
* **NeuronFlex 뇌파 바이오피드백**: 잠들 때 필요한 세타파·델타파를 스스로 활성화하는 두뇌 자생력 훈련.

---

### ❓ 05. 진료실 자주 묻는 질문 (FAQ 3문 3답)

**Q1. ${faqs[0].q}**
> A. ${faqs[0].a}

**Q2. ${faqs[1].q}**
> A. ${faqs[1].a}

**Q3. ${faqs[2].q}**
> A. ${faqs[2].a}

---

### 🌿 06. 오늘 밤부터 실천하는 수면 위생 골든 룰 3가지
1. **새벽에 깨도 시계 절대 보지 않기**: 시계를 보는 순간 뇌는 시간 계산과 불안을 시작하여 각성 호르몬(코르티솔)을 뿜어냅니다.
2. **침대는 오직 '잠자는 공간'으로만 제한하기**: 침대 위에서 스마트폰, TV 시청, 업무를 하지 마세요.
3. **아침 기상 후 15분 햇볕 쬐기**: 아침 햇살을 받아야 14~15시간 뒤 밤에 천연 수면 호르몬인 멜라토닌이 폭발적으로 분비됩니다.

---

> **권형근 대표원장의 조언**: "수면제는 급한 불을 끄는 소화기일 뿐, 집을 수리하는 재료가 아닙니다. 뇌 신경망의 자생력을 키우면 누구나 약 없이 아침까지 깊은 통잠을 잘 수 있습니다."`;

  // 1) 요약 알림
  const summaryMsg = `📢 <b>[해아림한의원] 새 건강 칼럼이 티스토리 / 블로그 발행용으로 준비되었습니다!</b>

📌 <b>추천 메인 제목:</b> ${escapeHtml(title)}
🏷️ <b>분류:</b> ${escapeHtml(category)}
🗓️ <b>일시:</b> ${date}

📝 <b>칼럼 핵심 요약:</b>
${escapeHtml(summary)}

🔗 <a href="${columnUrl}">홈페이지 원본 칼럼 바로가기</a>`;

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('1. Summary sent!');

  // 2) 본문 복사 메시지
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 새로 업그레이드된 3대 질환 특화 FAQ와 6대 챕터 정통 의학 원고입니다.</i>

🎯 <b>[포스팅용 추천 제목 3종 세트]</b>
1️⃣ <b>맨앞 지역명형:</b>
<code>${escapeHtml(titleVariants.p1)}</code>

2️⃣ <b>중간 지역명형 (추천 ⭐):</b>
<code>${escapeHtml(titleVariants.p2)}</code>

3️⃣ <b>순수 질환/의학형:</b>
<code>${escapeHtml(titleVariants.p3)}</code>

─────────────────
${escapeHtml(tistoryScript)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 진료 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의)
• 위치: 인천 부평구 부평대로 24, 부평역 7번 출구 앞
• 문의: 032-330-7588
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
  console.log('2. Copy script sent!');

  // 3) HTML 문서 첨부
  const colObj = {
    title: title,
    tags: tistoryTags,
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, slug);

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사(`Ctrl+A` ➔ `Ctrl+C`) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 인용 박스/목차/카드/Q&A/버튼 서식이 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, `tistory_${slug}.html`);

  await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('3. HTML document sent!');
  console.log('✅ Transmission complete!');
}

sendVerifiedTistory('bucheon-neuropsychiatry-insomnia').catch(err => {
  console.error('Error:', err);
});
