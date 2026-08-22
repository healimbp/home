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
  console.log('[Telegram Tistory Sender] Preparing high-quality Tistory column transmission...');

  const title = '[인천 부평 공황장애] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법';
  const category = '공황 · 불안 & 강박증';
  const date = '2026-08-22';
  const summary = '인천 부평, 부천, 구월동, 청라 지역에서 지하철, 운전 중 갑자기 숨이 막히고 심장이 터질 듯 뛰는 공황발작의 편도체 신경학적 원인과 4-7-8 응급 호흡 및 1:1 맞춤 한방 치료 원리';
  const columnUrl = 'https://healimbp.com/column/panic-disorder-breathing/';
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://open.kakao.com/o/sgbnTRJi';

  // 티스토리 차별화 제목 및 스토리텔링 블로그 본문 (홈페이지 마크다운과 100% 다른 문장)
  const tistoryTitle = '지하철이나 차 안에서 갑자기 숨이 턱 막히고 심장이 쿵쾅거릴 때? 공황발작 응급 대처 3단계';
  const tistoryTags = '#공황장애 #공황발작 #부평한의원 #인천공황장애 #자율신경실조증 #과호흡 #해아림한의원';
  const tistoryScript = `안녕하세요, 여러분! 해아림한의원 인천부평점 권형근 대표원장입니다.

만원 지하철 안이나 터널을 지나가는 고속도로 위에서, 갑자기 심장이 터질 듯 뛰고 숨이 끝까지 안 쉬어져 "이러다 내가 죽는 건 아닐까?" 하는 극심한 공포를 느껴보신 적이 있으신가요?

응급실로 달려가 심전도와 뇌 CT를 찍어봐도 "심장과 뇌는 모두 정상입니다. 신경성 스트레스입니다"라는 말만 듣고 돌아오셨다면, 내 몸의 '화재 경보기'가 잘못 울린 것은 아닌지 확인해 볼 때입니다.

오늘은 진료실에서 수많은 환자분들의 일상을 되찾아드린 공황발작의 신경학적 원인과, 갑작스러운 발작 순간 즉시 진정시킬 수 있는 3단계 응급 대처법을 알기 쉽게 정리해 드리겠습니다.

──────────────────
🌿 1. 내 몸의 화재 경보기, '편도체'가 오작동하는 이유
──────────────────
우리 뇌 속 깊은 곳에는 위험을 감지하는 **편도체(Amygdala)**라는 부위가 있습니다.
진짜 호랑이를 만났을 때 심장을 빨리 뛰게 만들어 도망치게 하는 생존 반응 장치인데요.

만성 스트레스, 수면 부족, 번아웃 등으로 자율신경계가 지치면, 아무런 위험이 없는 평범한 지하철이나 엘리베이터 안에서도 편도체가 "지금 당장 죽을 위험이다!"라며 사이렌을 울려버립니다.
이것이 바로 교감신경의 급격한 과흥분으로 인한 **공황발작(Panic Attack)**입니다.

※ 기억하세요: 공황발작으로 심장이 멎거나 질식해 사망하는 일은 의학적으로 절대 일어나지 않습니다. 몸의 자연스러운 알람 오작동일 뿐입니다.

──────────────────
💡 2. 발작이 찾아왔을 때 즉시 실천하는 3단계 응급 대처법
──────────────────
① 4-7-8 이완 호흡으로 산소 포화도 안정시키기
과호흡으로 혈중 이산화탄소가 떨어지면 어지럼증과 손발 저림이 더 심해집니다.
• 4초간 코로 천천히 들이마시고
• 7초간 숨을 편안하게 멈추고
• 8초간 입으로 길게 '후-' 내쉽니다.
(단 3회만 반복해도 부교감신경이 깨어나며 심장박동이 완만해집니다.)

② 5-4-3-2-1 그라운딩(Grounding) 감각 전환
머릿속의 공포 생각에서 빠져나와 오감으로 시선을 돌립니다.
• 눈에 보이는 5가지 사물 찾기
• 손으로 만질 수 있는 4가지 촉감 느끼기
• 귀에 들리는 3가지 소리 집중하기
• 맡을 수 있는 2가지 냄새 찾기
• 입안의 1가지 맛 느끼기

③ 10분 타이머 법칙 기억하기
공황발작은 호르몬 방출 기전상 10분경에 정점에 도달한 뒤 반드시 서서히 가라앉습니다. "지금 파도가 지나가고 있으며, 곧 평온해진다"고 스스로에게 읊조려주세요.

──────────────────
🩺 3. 한의학에서는 공황장애를 어떻게 근본 치료할까요?
──────────────────
단순히 일시적으로 신경을 억제하는 진정제 복용에만 의존하면 약효가 떨어졌을 때 재발 불안(예기불안)이 더 커질 수 있습니다. 해아림한의원에서는 뇌 신경계 스스로 흥분을 조절할 수 있도록 자생력을 회복합니다.

1) 청심안신(淸心安神) 1:1 맞춤 한약: 과열된 심장과 간장의 허열(虛熱)을 식히고 뇌 신경전달물질의 균형을 복원합니다.
2) SGB 성상신경절 약침 & 경혈 자극: 내관혈, 신문혈 등을 자극하여 항진된 교감신경을 즉각 이완합니다.
3) NeuronFlex 뉴로피드백 & IM 감각통합: 뇌파를 실시간 모니터링하여 불안 뇌파를 억제하고 안정적인 알파파를 강화합니다.
4) 두개천골 추나요법: 경추 1~2번과 턱관절을 바로잡아 뇌간 및 미주신경의 혈류 순환을 원활하게 틔워줍니다.

──────────────────
🌸 맺음말
──────────────────
공황장애는 마음이 나약해서 생기는 병이 아니라, 신경계가 너무 오래 버티다 과부하가 걸린 신호입니다.
정확한 원인을 찾고 체계적으로 다스리면 얼마든지 이전의 평온한 일상으로 돌아갈 수 있습니다.
용기 내어 첫걸음을 내딛어보세요!`;

  // 1) 홈페이지 발행 알림 메시지
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

  // 2) 티스토리 원클릭 복사용 맞춤 대본
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
    tags: ['공황장애', '공황발작', '부평한의원', '인천공황장애', '자율신경실조증', '과호흡', '해아림한의원'],
    tistoryScript: tistoryScript
  };
  const tHtml = formatTistoryContent(colObj, 'panic-disorder-breathing');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 고급 서식/강조 박스/버튼이 완벽하게 적용됩니다.');
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
