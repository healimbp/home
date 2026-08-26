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

async function sendNow() {
  console.log('[Telegram Tistory Sender] Preparing 6-section structured Tistory column transmission...');

  const title = '[인천 부평 공황장애] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법';
  const category = '공황 · 불안 & 강박증';
  const date = '2026-08-22';
  const summary = '인천 부평, 부천, 구월동, 청라 지역에서 지하철, 운전 중 갑자기 숨이 막히고 심장이 터질 듯 뛰는 공황발작의 편도체 신경학적 원인과 4-7-8 응급 호흡 및 1:1 맞춤 한방 치료 원리';
  const columnUrl = 'https://healimbp.com/column/panic-disorder-breathing/';
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://open.kakao.com/o/sgbnTRJi';

  // 티스토리 전용 6대 챕터 정통 칼럼 원고 (홈페이지와 100% 다른 문장으로 재작성된 완결 칼럼)
  const tistoryTitle = '지하철·터널에서 갑자기 숨이 턱 막히고 심장이 쿵쾅거릴 때? 공황발작 신경학적 원인과 1:1 맞춤 치료법';
  const tistoryTags = ['공황장애', '공황발작', '부평한의원', '인천공황장애', '자율신경실조증', '과호흡치료', '해아림한의원'];

  const tistoryScript = `> "지하철이나 엘리베이터만 타면 갑자기 숨이 안 쉬어지고 심장이 터질 것 같아 미치겠어요."
> "응급실에 가도 심장과 뇌는 정상이라는데, 또 발작이 올까 봐 외출조차 두렵습니다."

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

인천 부평역 인근 진료실에는 부평뿐만 아니라 부천, 구월동, 청라, 송도 등지에서 극심한 공황발작과 예기불안으로 일상을 잃어버린 환자분들이 많이 찾아오십니다.

공황발작은 마음이 약해서 생기는 병이 아니라, **뇌 속 위험 감지 중추인 '편도체'와 자율신경계가 과열되어 잘못된 화재 경보를 울리는 신경생리학적 불균형 상태**입니다.

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. 공황발작의 편도체 신경학적 오작동 기전
* 02. 자율신경 과흥분 3단계와 예기불안의 악순환
* 03. 한의학적 진단: 심담허겁(心膽虛怯)과 간화상충(肝火上衝)
* 04. 공황장애 환자별 3대 맞춤 변증 체질 유형
* 05. 해아림한의원 1:1 맞춤 신경계 자생력 회복 솔루션
* 06. 진료실 자주 묻는 질문 (FAQ 3문 3답)

### 🌿 01. 공황발작의 편도체 신경학적 오작동 기전
우리 뇌의 변연계에 위치한 **편도체(Amygdala)**는 본래 맹수를 만났을 때 심장을 빨리 뛰게 하여 도망칠 수 있도록 돕는 생존 알람 장치입니다.
하지만 만성 스트레스, 수면 부족, 번아웃이 누적되면 아무런 위협이 없는 평범한 지하철, 영화관, 자동차 안에서도 편도체가 "지금 당장 죽을 위험이다!"라며 비상 사이렌을 울립니다.
이로 인해 교감신경이 폭발적으로 항진되면서 심계항진(가슴 뜀), 과호흡, 질식감, 극심한 공포가 나타나는 것입니다.

### 🔍 02. 자율신경 과흥분 3단계와 예기불안의 악순환
공황장애는 다음과 같은 3단계를 거치며 만성화됩니다:
* **1단계 (급성 발작기)**: 예고 없이 심장이 쿵쾅거리고 숨이 막히며 식은땀과 어지럼증이 동반됨.
* **2단계 (예기불안기)**: '또 발작이 오면 어쩌지?'라는 두려움 때문에 특정 장소(대중교통, 터널, 갇힌 공간)를 회피함.
* **3단계 (자율신경 소진기)**: 만성적인 불안으로 뇌의 에너지가 고갈되어 불면증, 만성피로, 우울감, 신체화 증상이 복합 발현됨.

### 📚 03. 한의학적 진단: 심담허겁(心膽虛怯)과 간화상충(肝火上衝)
한의학에서는 공황장애를 **심장과 담의 기운이 약해져 사소한 자극에도 과민하게 놀라는 심담허겁(心膽虛怯)**과, **억압된 스트레스가 화(火)로 변해 머리로 치솟는 간화상충(肝火上衝)**으로 진단합니다.
단순히 중추신경을 화학적으로 억제하는 일시적 진정제 복용에 머무르지 않고, 심장의 기혈을 보강하고 뇌 신경망의 자생력을 키우는 것이 재발 방지의 핵심입니다.

### 🩺 04. 공황장애 환자별 3대 맞춤 변증 체질 유형
* **간열상충(肝熱上衝)형**: 분노와 스트레스로 가슴이 답답하고 얼굴로 열이 치솟으며 폭발적인 발작이 오는 유형 (시호청간탕, 황련해독탕 처방)
* **심담허겁(心膽虛怯)형**: 사소한 소음이나 자극에도 심장이 덜컥 내려앉고 혼자 있는 것을 두려워하는 유형 (가미온담탕, 안신보심환 처방)
* **심비양허(心脾兩虛)형**: 만성적인 소화불량, 어지럼증, 기력 저하와 함께 은은한 불안과 불면이 지속되는 유형 (가미귀비탕 처방)

### 💡 05. 해아림한의원 1:1 맞춤 신경계 자생력 회복 솔루션
* **청심안신(淸心安神) 1:1 맞춤 탕약**: 과열된 심장의 허열을 내리고 뇌 신경전달물질의 균형을 복원하는 청정 규격 한약.
* **SGB 성상신경절 약침 & 경혈 자극**: 전중혈, 내관혈, 신문혈 자극으로 과항진된 교감신경을 즉각 이완하고 뇌 혈류를 개선.
* **NeuronFlex 뉴로피드백 & IM 감각통합**: 실시간 뇌파 훈련으로 불안 뇌파를 억제하고 1/1,000초 신경 동기화로 전두엽 조절력 강화.
* **두개천골 추나요법 & FCST**: 턱관절과 상부 경추의 틀어짐을 바로잡아 뇌척수액 순환과 미주신경 소통을 원활하게 촉진.

### ❓ 06. 진료실 자주 묻는 질문 (FAQ)
**Q1. 정신과 약(신경안정제, 항불안제)을 복용 중인데 한방 치료와 병행할 수 있나요?**
> A. 네, 안전하게 병행 가능합니다. 복용 중인 양약을 갑자기 끊으면 반동 불안이 올 수 있으므로 초기에는 병행 치료를 진행하며, 한방 치료로 뇌 신경망이 스스로 안정을 찾게 되면 주치의와 상의하여 서서히 감량(Tapering)합니다.

**Q2. 공황발작이 왔을 때 즉시 진정시킬 수 있는 응급 대처법이 있나요?**
> A. 4초간 코로 숨을 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 길게 내쉬는 '4-7-8 이완 호흡'을 3회 이상 반복하세요. 부교감신경이 활성화되어 급격한 심장 박동이 완만해집니다.

**Q3. 한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?**
> A. 뇌파 검사(EEG), 적외선 체열 검사(DITI), HRV 자율신경 균형 검사, 간이정신진단검사와 1:1 심층 맥진·복진을 통해 공황장애의 근본 원인을 정밀 진단합니다.

> **권형근 대표원장의 조언**: "공황발작으로 심장이 멎거나 숨이 막혀 죽는 일은 의학적으로 결코 일어나지 않습니다. 내 몸의 오작동된 알람을 바로잡으면 반드시 평온한 일상으로 되돌아갈 수 있습니다."`;

  // 1) 요약 알림
  const summaryMsg = `📢 <b>[해아림한의원] 새 건강 칼럼이 공식 홈페이지에 자동 발행되었습니다!</b>

📌 <b>홈페이지 제목:</b> ${escapeHtml(title)}
🏷️ <b>분류:</b> ${escapeHtml(category)}
🗓️ <b>일시:</b> ${date}

📝 <b>홈페이지 칼럼 요약:</b>
${escapeHtml(summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 보기</a>`;

  const sumRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('1. Summary notification sent! Status:', sumRes.status);

  const titleVariants = {
    p1: '인천 부평 한의원 공황장애, 갑자기 숨이 턱 막히고 죽을 것 같은 공포와 응급 대처법',
    p2: '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 인천 부평 공황장애의 원인과 한방 치료법',
    p3: '공황발작은 지나갔는데 왜 숨이 차고 불안은 계속될까요?'
  };

  // 2) 블로그 원클릭 복사용 6섹션 칼럼 대본 (3가지 추천 제목 옵션 포함)
  const copyMsg = `📋 <b>[블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 포털 유사문서 페널티 방지를 위해 홈페이지 칼럼과 100% 다른 문장으로 재작성된 6섹션 원고입니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 3종 세트]</b>
<i>(원하시는 스타일을 골라 복사해서 블로그 제목으로 사용하세요)</i>

1️⃣ <b>맨앞 지역명형:</b>
<code>${escapeHtml(titleVariants.p1)}</code>

2️⃣ <b>중간 지역명형 (파란색 강조 스타일 ⭐):</b>
<code>${escapeHtml(titleVariants.p2)}</code>

3️⃣ <b>지역명 없는 순수 질환형:</b>
<code>${escapeHtml(titleVariants.p3)}</code>

─────────────────
${escapeHtml(tistoryScript)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}
• 홈페이지 원문: ${columnUrl}

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

  // 3) 티스토리 HTML 서식 파일 첨부 (6섹션 박스, 배지, 카드, 버튼 완벽 렌더링)
  const colObj = {
    title: tistoryTitle,
    tags: tistoryTags,
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, 'panic-disorder-breathing');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사(`Ctrl+A` ➔ `Ctrl+C`) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 6대 섹션 인용 박스/목차/카드/Q&A/버튼 서식이 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, 'tistory_panic_disorder_breathing.html');

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('3. HTML document sent! Status:', docRes.status);
  console.log('[Telegram Tistory Sender] All 3 parts sent successfully to Telegram!');
}

sendNow().catch(err => {
  console.error('[Telegram Tistory Sender] Error sending to Telegram:', err);
});
