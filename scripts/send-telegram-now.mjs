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
  const tistoryTitle = '주말에 12시간을 자도 피곤한 이유? 자율신경 번아웃 극복 꿀팁';
  const tistoryTags = '#만성피로 #자율신경실조증 #부평한의원 #브레인포그 #피로회복 #해아림한의원';
  const tistoryScript = `안녕하세요, 여러분! 요즘 아침에 눈뜰 때마다 몸이 천근만근 무겁고 머리가 안개 낀 듯 멍(브레인포그)하지 않으신가요?

"병원에서 피검사, 간기능 검사를 다 해봐도 정상이라는데 왜 나는 늘 방전된 배터리처럼 지칠까?"
진료실에서 만성 피로로 찾아오시는 환자분들이 가장 많이 털어놓으시는 고민입니다.

오늘은 몸의 자동 조절 장치인 '자율신경계'가 보내는 구조 신호와, 일상에서 활력을 되찾는 비결을 편안하게 이야기해 드릴게요.

──────────────────
🌿 1. 자고 일어나도 충전이 안 되는 진짜 이유
──────────────────
우리 몸의 '자율신경계'는 낮에 일하는 교감신경(액셀러레이터)과 밤에 쉬는 부교감신경(브레이크)의 조화로 돌아갑니다.
하지만 쉼 없는 과로와 스트레스가 이어지면 브레이크가 고장 난 채 밤낮없이 엔진이 과열됩니다.
이 상태가 오래되면 몸의 에너지가 바닥나면서(한스 셀리에의 소진/탈진 단계), 아무리 오래 자도 뇌와 신경이 깊은 휴식을 취하지 못해 만성 피로와 무기력증이 고착화되는 것이죠.

──────────────────
🩺 2. 한의학에서는 어떻게 신경계 회복을 도울까요?
──────────────────
단순히 카페인이나 피로회복제로 억지 각성을 시키는 것이 아니라, 신경계가 스스로 에너지를 만들 수 있도록 자생력을 키워줍니다.
• 1:1 맞춤 보양·안신 한약: 고갈된 신정(腎精)과 기혈을 보충하고 과열된 뇌 신경의 흥분을 가라앉힙니다.
• 경혈 침구 & 약침 요법: 백회혈, 전중혈 등을 자극하여 뇌 혈류 순환을 촉진하고 긴장을 이완합니다.
• 두개천골 추나요법: 척추와 경추의 미세 틀어짐을 교정하여 뇌척수액 순환과 미주신경 소통을 원활하게 돕습니다.

──────────────────
💡 3. 오늘부터 실천하는 힐링 자가관리 꿀팁 3가지
──────────────────
1) 4-7-8 이완 호흡법: 4초 들이마시고, 7초 멈춘 뒤, 8초간 천천히 내쉬기 (부교감신경 활성화)
2) 취침 30분 전 스마트폰 끄기: 청색광을 차단해 멜라토닌 분비와 델타파 숙면 유도
3) 낮 시간 20분 햇살 산책: 세로토닌 합성 촉진으로 뇌 활력 충전

──────────────────
🌸 맺음말
──────────────────
지속되는 만성 피로는 내 몸이 쉬어가며 스스로를 돌보라는 간절한 신호입니다.
혼자 힘들어하지 마시고 내 몸의 균형을 되찾아보세요!`;

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

