import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatTistoryContent } from './publish-tistory.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const botToken = '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
const chatId = '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendNow() {
  const title = '[부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정';
  const category = '자율신경 · 실신/어지럼증';
  const date = '2026-08-21';
  const summary = '병원 검사에서 이상 없는 만성 피로와 무기력증, 자율신경계 조절 기능 저하와 한스 셀리에 3단계 소진 모델, 뇌파·체열·간이정신진단 검사 및 맞춤 한방 치료 가이드';
  const columnUrl = 'https://healimbp.com/column/autonomic-fatigue/';
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://open.kakao.com/o/sgbnTRJi';

  // 티스토리 차별화 제목 및 본문
  const tistoryTitle = '[부평 자율신경실조증 한의원] 주말에 12시간을 자도 피곤한 이유? 만성피로와 자율신경 번아웃 극복 가이드';
  const tistoryTags = '#만성피로 #자율신경실조증 #부평한의원 #브레인포그 #피로회복 #해아림한의원 #체질한약';
  const tistoryScript = `안녕하세요. 부평역 7번 출구에서 만성피로와 자율신경 질환을 1:1 맞춤 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.

> “종합병원 검진에서 간수치도 정상이고 이상이 없다는데 매일 아침 몸이 천근만근 무겁습니다.”
> “주말에 12시간씩 잠을 자도 피로가 안 풀리고 머리가 안개 낀 듯 멍해서(브레인포그) 일하기가 너무 힘듭니다.”

진료실에서 만성 피로로 내원하시는 환자분들의 대다수는 단순한 피로를 넘어 신경계의 조절 기능이 방전된 상태입니다.

### 1. 자율신경계 기능 저하와 만성 피로의 신경학적 기전

자율신경계는 활동을 촉진하는 교감신경과 휴식을 유도하는 부교감신경의 정교한 밸런스로 작동합니다. 그러나 지속적인 과로와 스트레스가 누적되면 교감신경 과항진으로 인해 밤에도 신경계가 이완되지 못하고, 결국 '자고 일어나도 충전되지 않는 악순환'에 갇히게 됩니다.

### 2. 긴장에서 소진(Burnout)으로 이어지는 3단계 모델

내분비학의 한스 셀리에 일반적응증후군(GAS)에 따르면 신체는 다음 단계를 거쳐 소진됩니다:
* **1단계 (경고 반응기)**: 급성 스트레스로 가슴 두근거림, 상열감, 소화불량 발생.
* **2단계 (저항기)**: 코르티솔과 에너지를 지속 소모하며 겉으로 일상을 버텨내는 단계.
* **3단계 (소진기 / 탈진)**: 회복력이 바닥나며 만성 피로, 브레인포그, 무기력증이 고착화되는 단계.

### 3. 해아림한의원 인천부평점의 객관적 검사 시스템

단순 피로회복제나 카페인은 방전된 배터리에 무리한 과전압을 주는 것과 같아 신경계를 더욱 지치게 만듭니다:
* **뇌파 검사**: 두뇌 피로도 및 과각성 스트레스 뇌파를 정밀 수치화.
* **적외선 체열 검사 (DITI)**: 자율신경 불균형으로 인한 상열하한 체열 분포 측정.
* **간이정신진단검사**: 심리적 피로도 및 무기력 척도 객관적 평가.
* **정밀 변증 및 복진**: 오장육부의 기혈 허실을 정밀하게 진단.

### 4. 1:1 맞춤 한방 치료 솔루션: 신경계 자생력 회복

* **체질 맞춤 보양·안신 탕약**: 고갈된 신정(腎精)과 기혈을 채우고 뇌 신경의 과열된 열을 식혀 자연스러운 에너지 생성을 돕습니다.
* **경혈 침구 및 약침 요법**: 뇌 혈류 순환을 촉진하고 자율신경절의 긴장을 이완합니다.
* **두개천골 추나요법**: 경추와 척추 정렬을 교정하여 뇌척수액 순환과 미주신경 소통을 원활하게 돕습니다.

### 5. 진료실 자주 묻는 질문 (FAQ)

**Q1. 병원 종합검진에서는 정상이라는데 한방 치료로 피로가 회복될까요?**
> **A.** 일반 검사는 장기의 기질적 이상을 보지만, 만성 피로는 교감-부교감신경의 기능적 불균형에서 비롯됩니다. 정밀 변증과 한방 치료를 통해 신경계 기능이 정상화되면 피로가 근본적으로 개선됩니다.

**Q2. 자율신경성 만성 피로의 치료 기간은 얼마나 걸리나요?**
> **A.** 보통 1 ~ 2개월 차에 아침 기상 곤란과 브레인포그 등 신체 증상이 호전되며, 3 ~ 4개월 차에는 자생적 항상성을 확립하여 재발을 방지합니다.

**Q3. 첫 내원 시 어떤 검사를 받게 되나요?**
> **A.** 뇌파 검사, 적외선 체열 검사, 간이정신진단검사와 1:1 심층 문진 및 복진을 거쳐 맞춤 처방이 이루어집니다.

**Q4. 한약 복용 시 간에 부담이 가지는 않나요?**
> **A.** 식약처(KFDA)의 정밀 품질 검사를 통과한 규격품 한약재만을 사용하며, 환자 체질에 맞춤 조제되므로 안전합니다.

**Q5. 직장인 야간진료나 주말 진료가 가능한가요?**
> **A.** 월·수·금 저녁 8시까지 야간진료를 시행하며, 토요일(09:00 ~ 15:00)과 공휴일(09:00 ~ 13:00)에는 점심시간 없이 연속 진료합니다.

### 6. 일상생활 속 자가 관리 가이드

4-7-8 이완 호흡법, 취침 30분 전 스마트폰 끄기, 낮 시간 20분 햇살 산책을 실천하시면 신경계 안정에 큰 도움이 됩니다.

> **권형근 대표원장의 조언**:
> "만성 피로는 몸이 쉬어가며 나를 돌보라는 간절한 SOS 신호입니다. 정확한 자율신경 진단으로 삶의 활력을 되찾으시길 바랍니다."`;

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
  console.log('1. Summary sent! Status:', sumRes.status);

  // 2) 텍스트 전문 (차별화 대본)
  const copyMsg = `📋 <b>[티스토리 블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 홈페이지 칼럼과 100% 다른 문장과 친근한 블로그 스토리텔링으로 재작성된 원고입니다. (유사문서 페널티 완벽 방지)</i>

<b>[추천 제목]</b>
<code>${escapeHtml(tistoryTitle)}</code>

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
<code>${escapeHtml(tistoryTags)}</code>`;

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
    title: tistoryTitle,
    tags: ['만성피로', '자율신경실조증', '부평한의원', '브레인포그', '피로회복', '해아림한의원'],
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, 'autonomic-fatigue');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 차별화된 서식/박스/버튼이 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, 'tistory_autonomic_fatigue.html');

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('3. HTML document sent! Status:', docRes.status);
}

sendNow().catch(console.error);

