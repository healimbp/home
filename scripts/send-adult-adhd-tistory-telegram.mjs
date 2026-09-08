import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatTistoryContent } from './publish-tistory.mjs';

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

async function sendAdultAdhdColumn() {
  console.log('[Telegram Tistory Sender] Preparing Adult ADHD Tistory Column Transmission...');

  const title = '[인천 부평 성인 ADHD] 할 일 미루기와 브레인포그, 도파민 고갈 극복하는 전두엽 실행기능 회복법';
  const category = '소아청소년 & 성인 ADHD·틱장애';
  const date = '2026-09-08';
  const summary = '직장인 만성 업무 미루기, 집중력 저하, 브레인포그와 잦은 번아웃을 유발하는 성인 ADHD의 전두엽 도파민 보상 회로 기전과 3대 질환 특화 FAQ 및 1:1 맞춤 한방 신경 치료 솔루션';
  const columnUrl = 'https://healimbp.com/column/bupyeong-adult-adhd/';
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://pf.kakao.com/_Tcxcxoxj';

  const titleVariants = {
    p1: '인천 부평 성인 ADHD 한의원, 할 일 미루기와 브레인포그 극복하는 전두엽 실행기능 회복법',
    p2: '할 일 미루기와 만성 번아웃, [인천 부평 한의원 성인 ADHD] 도파민 불균형 치료 솔루션 ⭐',
    p3: '자꾸 깜빡하고 마감에 쫓기는 나, 게으른 걸까? 성인 ADHD의 신경학적 원인과 한방 치료'
  };

  const tistoryTags = ['성인ADHD', '성인ADHD치료', '부평한의원', '인천성인ADHD', '브레인포그', '실행기능장애', '도파민회복', '해아림한의원'];

  const tistoryScript = `> "출근해서 컴퓨터를 켜도 어디서부터 시작해야 할지 몰라 멍하니 시간만 흘러갑니다."
> "마감 직전까지 할 일을 미루다 벼락치기로 간신히 해내고, 늘 머릿속에 안개가 낀 것처럼(브레인포그) 멍합니다."
> "어릴 때는 얌전했는데, 왜 성인이 되어서 집중을 못 하고 자꾸 깜빡하는 걸까요?"

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

인천 부평역 인근 진료실에는 부평뿐만 아니라 부천, 청라, 송도, 구월동 등지에서 "남들처럼 평범하게 일하고 집중하고 싶은데 자꾸 실수를 반복하고 지친다"며 찾아오시는 성인 환자분들이 많습니다.

스스로 '내가 게으르고 의지박약인가'라며 자책해 오셨다면 이제 그 짐을 내려놓으셔도 좋습니다. 이것은 성격이나 인성의 문제가 아니라, **뇌 전두엽의 도파민 보상 회로와 실행기능(Executive Function) 조절 시스템의 신경학적 불균형** 때문에 발생하는 신경학적 상태입니다.

---

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. 성인 ADHD의 핵심: 실행기능장애(Executive Dysfunction)와 브레인포그
* 02. 전두엽 도파민 보상 회로의 고갈과 자극 추구의 뇌과학
* 03. 한의학적 진단: 심비양허(心脾兩虛)와 담탁상몽(痰濁上蒙)
* 04. 해아림한의원 1:1 맞춤 뇌 자생력 회복 통합 솔루션
* 05. ❓ 진료실 자주 묻는 질문 (FAQ 3문 3답 - 성인 ADHD 특화)
* 06. 일상에서 전두엽을 돕는 현실적인 실천 팁 3가지

---

### 🌿 01. 성인 ADHD의 핵심: 실행기능장애와 브레인포그
소아 ADHD가 '가만히 있지 못하고 뛰어다니는 과잉행동'으로 나타난다면, 성인 ADHD는 주로 **'머릿속의 보이지 않는 산만함과 실행기능 저하'**로 발현됩니다.

* **시동 저항 (Task Initiation)**: 중요한 일일수록 시작하기가 너무 어렵고 딴짓(SNS, 숏폼)으로 도피하게 됩니다.
* **시간 왜곡 (Time Blindness)**: 시간의 흐름을 직관적으로 가늠하지 못해 약속에 늦거나 마감 시간에 임박해서야 극심한 스트레스 속에 일을 처리합니다.
* **작업 기억력 저하**: 방금 들은 지시사항을 잊어버리거나 물건을 자주 잃어버려 직장 내 대인관계와 업무 평가에서 큰 고통을 겪습니다.

---

### 🔍 02. 전두엽 도파민 보상 회로의 고갈과 자극 추구
우리 뇌의 **전두엽(Prefrontal Cortex)**은 행동의 우선순위를 정하고 불필요한 충동을 억제하는 '오케스트라 지휘자' 역할을 합니다.

성인 ADHD 환자의 뇌는 기저 도파민(Dopamine) 분비량이 부족하여 잔잔한 일상 업무에는 시동이 걸리지 않습니다. 마감 직전의 극심한 공포(아드레날린 분비)나 게임·숏폼 같은 초고자극이 주어져야만 비로소 뇌가 반응하게 되는 악순환에 빠지게 됩니다.

---

### 📚 03. 한의학적 진단: 심비양허(心脾兩虛)와 담탁상몽(痰濁上蒙)
한의학에서는 성인 ADHD와 브레인포그를 다음과 같이 진단합니다:

1. **심비양허(心脾兩虛)형**: 기혈이 부족하여 뇌 신경망을 단단히 붙잡아주지 못해 집중력이 쉽게 흐트러지고 만성 피로와 수면장애가 동반되는 유형 (가미귀비탕 처방)
2. **담탁상몽(痰濁上蒙)형**: 위장과 대사 노폐물(담음)이 상체로 올라와 맑은 뇌 혈류를 가로막아 머리가 멍하고 무거운 유형 (온담탕, 청뇌탕 처방)
3. **간울기체(肝鬱氣滯)형**: 만성 스트레스와 잦은 자책으로 간의 기운이 뭉쳐 감정 기복이 심하고 충동 조절이 어려운 유형 (시호소간산 처방)

---

### 💡 04. 해아림한의원 인천부평점 1:1 맞춤 치료 솔루션
인위적인 각성제 양약에만 의존하지 않고, 뇌가 스스로 도파민과 세로토닌을 원활하게 분비하고 조절할 수 있도록 뇌 자생력을 회복시킵니다.

* **1:1 맞춤 건뇌(健腦) 한약**: 전두엽 혈류를 촉진하고 뇌세포의 산소 공급을 원활하게 하여 맑은 집중력을 회복.
* **두개천골요법(CST) & 정밀 추나요법**: 턱관절과 상부 경추의 구조적 비틀림을 교정하여 뇌척수액 순환을 정상화.
* **NeuronFlex 뉴로피드백 & IM 두뇌 훈련**: 뇌파 조절 훈련과 1/1,000초 단위 감각통합 훈련으로 충동 억제력과 지속 집중력 향상.
* **두부 경혈 침구 & 한약 약침**: 백회혈, 사신총혈, 풍지혈 자극을 통해 뇌 신경망의 브레인포그를 신속하게 배출.

---

### ❓ 05. 진료실 자주 묻는 질문 (FAQ 3문 3답)

**Q1. 성인 ADHD 환자가 잦은 이직과 인간관계 갈등, 번아웃을 함께 겪는 이유가 무엇인가요?**
> A. 전두엽의 억제력 부족으로 사소한 스트레스에도 감정 표출이 일어날 수 있고, 업무 누락과 실수로 인한 부정적 피드백이 누적되면서 "가면성 우울증"과 만성 번아웃이 복합 발현되기 때문입니다. 뇌 피로와 정서적 불안을 함께 다스리는 통합 신경 치료가 필요합니다.

**Q2. 성인 ADHD 진단 후 정신과 약(콘서타)을 먹었을 때 두근거림과 불안이 심한데 한방 치료는 어떤가요?**
> A. 메틸페니데이트 계열 각성제는 교감신경을 자극하여 심장 두근거림, 불면, 식욕 부진을 유발할 수 있습니다. 한방 치료는 심장의 열을 내리면서 전두엽 뇌 순환을 자연스럽게 돕기 때문에 신체적 부담 없이 차분하고 안정된 집중력을 키울 수 있으며, 기존 양약의 점진적 감량(Tapering)에도 큰 도움이 됩니다.

**Q3. 중요한 일을 마감 직전까지 미루고, 물건을 자주 잃어버리며 정리를 못 하는 직장인인데 성인 ADHD인가요?**
> A. 네, 성인 ADHD의 전형적인 "실행기능장애" 패턴입니다. 어릴 때의 겉으로 드러나는 과잉행동은 줄어들었지만 전두엽의 우선순위 설정 및 작업 기억력 조절에 어려움을 겪는 상태입니다. 조기 진단과 신경망 회복 치료를 통해 업무 생산성을 크게 끌어올릴 수 있습니다.

---

### 🌿 06. 일상에서 전두엽을 돕는 현실적인 실천 팁 3가지
1. **머릿속 기억을 외부로 '외주화'하기**: 머리로만 기억하려 하지 말고 포스트잇, 노션, 화이트보드에 해야 할 일을 즉시 시각화하세요.
2. **시동을 거는 '2분 법칙'**: "보고서를 다 써야지" 하면 뇌가 압도당합니다. "파일 열어서 제목만 적고 2분만 보자"라고 단계를 아주 잘게 쪼개어 시동 저항을 줄입니다.
3. **저녁 도파민 디톡스**: 잠들기 1시간 전 숏폼과 스마트폰을 멀리하여 고갈된 도파민 수용체를 휴식시켜야 다음 날 전두엽이 깨어납니다.

---

> **권형근 대표원장의 따뜻한 조언**: "성인 ADHD를 겪는 분들은 그동안 홀로 수많은 자책과 죄책감의 시간을 견뎌오셨습니다. 하지만 당신은 게으른 것이 아니라, 단지 뇌의 시동 장치와 조절 회로가 잠시 피로했을 뿐입니다. 정확한 진단과 따뜻한 1:1 맞춤 치료로 당신 안의 본래 잠재력을 마음껏 발휘하시길 응원합니다."`;

  // 1) 요약 알림 전송
  const summaryMsg = `📢 <b>[해아림한의원] 새 건강 칼럼이 티스토리 / 블로그 발행용으로 준비되었습니다!</b>

📌 <b>추천 메인 제목:</b> ${escapeHtml(title)}
🏷️ <b>분류:</b> ${escapeHtml(category)}
🗓️ <b>일시:</b> ${date}

📝 <b>칼럼 핵심 요약:</b>
${escapeHtml(summary)}

🔗 <a href="${columnUrl}">홈페이지 원본 칼럼 바로가기</a>`;

  const sumRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('1. Summary notification sent! Status:', sumRes.status);

  // 2) 원클릭 복사용 전체 대본 (다변화 FAQ 포함)
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 새로 업그레이드된 3대 성인 ADHD 특화 FAQ와 6대 챕터 정통 의학 원고입니다.</i>

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
    const textRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    console.log('2. Copy text sent! Status:', textRes.status);
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
    console.log('2. Split copy text sent!');
  }

  // 3) 티스토리 HTML 서식 파일 첨부
  const colObj = {
    title: title,
    tags: tistoryTags,
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, 'bupyeong-adult-adhd');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사(`Ctrl+A` ➔ `Ctrl+C`) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 인용 박스/목차/카드/Q&A/버튼 서식이 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, 'tistory_adult_adhd_faq.html');

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('3. HTML document sent! Status:', docRes.status);
  console.log('[Telegram Tistory Sender] All 3 parts sent successfully to Telegram!');
}

sendAdultAdhdColumn().catch(err => {
  console.error('[Telegram Tistory Sender] Error sending to Telegram:', err);
});
