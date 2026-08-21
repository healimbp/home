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

  // 1) 요약 알림
  const summaryMsg = `📢 <b>[해아림한의원] 티스토리 등록용 건강 칼럼이 도착했습니다!</b>

📌 <b>제목:</b> ${escapeHtml(title)}
🏷️ <b>분류:</b> ${escapeHtml(category)}
🗓️ <b>일시:</b> ${date}

📝 <b>핵심 요약:</b>
${escapeHtml(summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 보기</a>`;

  const sumRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('1. Summary sent! Status:', sumRes.status);

  // 2) 텍스트 전문
  const bodyText = `안녕하세요. 부평역 7번 출구에서 자율신경 및 신경정신과 질환을 1:1 맞춤 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.

💬 "인천, 부평 내과 종합검진에서는 간수치도 정상이고 아무 이상이 없다는데 왜 매일 아침 몸이 물에 젖은 솜처럼 무거울까요?"
💬 "주말에 12시간씩 잠을 자도 피로가 전혀 풀리지 않고, 머리가 안개 낀 것처럼 멍해서(브레인포그) 일에 집중하기가 어렵습니다."

진료실에서 만성 피로와 무기력감으로 내원하시는 환자분들을 뵐 때 가장 많이 듣는 하소연입니다. 몸은 너무 힘든데 혈액 검사나 뇌 MRI에서는 "아무 이상이 없으니 푹 쉬시라"는 말만 듣고 답답해하시는 분들이 많습니다.

자율신경계 기능 저하는 초기에는 흔히 가슴 두근거림, 불안, 불면처럼 몸이 과도하게 긴장된 상태로 시작됩니다. 그러나 이러한 상태가 오래 지속되고 만성화되면 몸의 에너지가 완전히 고갈되며 만성 피로, 무기력증, 전신 통증, 브레인포그가 주된 증상으로 자리잡게 됩니다.

──────────────────────────

📌 1. 자율신경계 기능이 떨어지면 왜 피곤할까요?
자율신경계는 심장 박동, 혈압 조절, 호흡, 소화, 체온 조절, 수면처럼 우리가 의식하지 않아도 체내 모든 생명 활동을 24시간 자동으로 관리하는 신경망입니다.

• 교감신경: 낮 동안 활성화되어 심장 박동을 높이고 혈액을 뇌와 근육에 보내 활동할 수 있게 만듭니다.
• 부교감신경: 밤 동안 활성화되어 심장을 안정시키고 깊은 잠을 통해 손상된 세포를 복구하고 에너지를 충전합니다.

그러나 자율신경 조절 기능이 저하되면 낮에는 필요한 만큼 각성되지 않아 머리가 멍하고 기운이 없으며, 밤에는 긴장이 충분히 풀리지 않아 깊은 잠을 자지 못합니다. 결국 '자고 일어나도 충전되지 않는 악순환'에 갇히게 되는 것입니다.

──────────────────────────

📌 2. 긴장에서 소진으로 이어지는 3단계 (한스 셀리에 스트레스 모델)
1. 1단계 (경고 반응기): 급성 스트레스를 받으면 교감신경이 과도하게 흥분합니다. 가슴이 뛰고, 잠이 얕아지며, 쉽게 긴장하고 소화가 안 됩니다.
2. 2단계 (저항기): 스트레스가 계속되어도 겉으로는 일상을 버텨냅니다. 그러나 몸 내부에서는 코르티솔과 에너지가 지속 소모되며 진액이 마릅니다.
3. 3단계 (소진기 / 탈진): 버티는 힘이 한계에 도달하면 신체 회복력이 완전히 바닥납니다. 만성 피로, 아침 기상 곤란, 기억력 감퇴(브레인포그), 어지럼증, 전신 근육통, 무기력감이 한꺼번에 쏟아져 나옵니다.

──────────────────────────

📌 3. 해아림한의원 인천부평점의 객관적 검사 시스템
• 뇌파 검사 & 적외선 체열 검사: 뇌 신경계 활성도와 스트레스 뇌파, 전신 체열 불균형(상열하한)을 객관적 데이터로 정밀 측정합니다.
• 간이정신진단검사 & 한의학적 정밀 변증: 불안·우울·피로 척도 평가와 복진(腹診)을 통해 심리 상태와 오장육부 기혈 허실(虛實)을 정확히 진단합니다.

──────────────────────────

📌 4. 1:1 맞춤 한방 치료 솔루션: 뇌 신경계 자생력 회복
• 체질 맞춤 보양·안신 탕약: 고갈된 신정(腎精)과 기혈을 채워주고(사향공진단, 보중익기탕 가감방), 뇌 신경계의 열을 식혀 자연스러운 에너지 생성을 돕습니다.
• 경혈 침구 및 약침 치료: 전중혈, 신문혈, 백회혈을 자극하여 뇌 혈류 순환을 촉진하고 자율신경절 긴장을 이완합니다.
• 두개천골 추나요법: 경추와 척추 정렬을 바로잡아 뇌척수액 순환을 정상화하고 미주신경 소통을 원활하게 만듭니다.

──────────────────────────

📌 5. 진료실 자주 묻는 질문 (FAQ & Q&A)

Q1. 병원 종합검진에서는 다 정상이라는데 왜 매일 아침 몸이 무겁고 어지러운가요?
A. 혈액 검사나 뇌 영상(MRI) 검사는 장기의 '구조적 파괴나 염증'을 확인하는 검사입니다. 반면 만성 피로와 브레인포그, 어지럼증은 교감신경과 부교감신경의 '기능적 조절 불균형'에서 비롯되므로 뇌파·체열 검사와 정밀 변증을 통해 기능 상태를 확인해야 원인을 밝힐 수 있습니다.

Q2. 자율신경계 기능 저하와 만성 피로 치료 기간은 보통 얼마나 걸리나요?
A. 보통 ～개월 차에는 아침 기상 피로감과 두통, 어지럼증 등 두드러진 신체 증상이 호전되며, ～개월 차에는 자율신경계의 자생적 항상성을 확립하여 치료를 중단해도 피로가 쉽게 재발하지 않도록 완성합니다.

Q3. 뇌파 검사와 적외선 체열 검사는 어떤 원리로 신경계를 진단하나요?
A. 뇌파 검사는 두뇌의 과각성 상태, 스트레스 저항력, 피로 뇌파의 분포를 측정하며, 적외선 체열 검사는 자율신경이 조절하는 전신 미세 혈류 순환과 상열하한 불균형을 시각적 데이터로 정밀 분석합니다.

Q4. 피로할 때마다 고카페인 음료나 비타민 링거를 맞았는데 한약 복용 시 끊어야 하나요?
A. 카페인 음료는 방전된 신경계에 무리한 채찍질을 가해 자율신경 소진을 악화시킵니다. 인위적 각성제는 서서히 줄이시고, 몸 스스로 에너지를 생성하도록 돕는 맞춤 한약과 침구 치료에 집중하는 것을 권장합니다.

Q5. 직장인이라 낮에 시간 내기 어려운데 통원 치료가 가능한가요?
A. 해아림한의원 인천부평점은 월·수·금 저녁 8시까지 야간진료를 시행하며, 토요일(09:0～5:00)과 공휴일(09:0～3:00)에는 점심시간 없이 연속 진료를 진행하므로 편안하게 치료받으실 수 있습니다.

──────────────────────────

🏥 [해아림한의원 인천부평점 안내]
• 대표원장: 권형근 (한방침구과 전문의)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 상담 및 예약: 032-719-3472
• 네이버 간편예약: ${bookingUrl}
• 카카오톡 1:1 상담: ${kakaoUrl}
• 홈페이지 원문: ${columnUrl}`;

  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 전문]</b>

<b>[제목]</b>
<code>${escapeHtml(title)}</code>

─────────────────
${escapeHtml(bodyText)}
─────────────────

🏷️ <b>[태그]</b>
<code>#인천자율신경실조증 #부평한의원 #만성피로 #뇌파검사 #체열검사 #간이정신진단검사 #브레인포그 #체질맞춤한약 #해아림한의원</code>`;

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
  const mdContent = fs.readFileSync(path.join(rootDir, 'content', 'column', 'autonomic-fatigue.md'), 'utf8');
  const rawBody = mdContent.replace(/---[\s\S]*?---/, '').trim();
  const colObj = {
    title: title,
    tags: ['인천자율신경실조증', '부평한의원', '만성피로', '뇌파검사', '체열검사', '간이정신진단검사', '브레인포그', '체질맞춤한약'],
    contentHtml: rawBody
  };
  const tHtml = formatTistoryContent(colObj, 'autonomic-fatigue');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 서식/박스/버튼이 완벽하게 적용됩니다.');
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
