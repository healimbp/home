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

async function sendAutonomicColumn() {
  console.log('[Telegram Tistory Sender] Preparing Autonomic Nervous System Column Transmission...');

  const title = '검사상 이상 없는 어지럼증과 가슴 두근거림, 인천 부평 자율신경실조증 한방 치료와 극복법';
  const category = '자율신경실조증 & 어지럼증';
  const date = '2026-09-04';
  const summary = '내과, 신경과 검사에서 이상이 없는데도 어지럼증, 가슴 두근거림, 만성피로가 지속되는 자율신경실조증의 교감/부교감신경 불균형 기전과 5대 테마 다변화 FAQ 4문항 및 1:1 맞춤 한방 치료 솔루션';
  const columnUrl = 'https://healimbp.com/column/autonomic-fatigue/';
  const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
  const kakaoUrl = 'https://pf.kakao.com/_Tcxcxoxj';

  const titleVariants = {
    p1: '부평 한의원 자율신경실조증 치료, 만성 피로와 원인 모를 신체화 장애를 다스리는 맞춤 한방 요법',
    p2: '검사상 이상 없는 어지럼증과 가슴 두근거림, 인천 부평 자율신경실조증 한방 치료와 극복법 ⭐',
    p3: '병원 검사로 안 나오는 전신 이상 증상의 비밀, 자율신경실조증의 원인과 뇌신경 회복 솔루션'
  };

  const tistoryTags = ['자율신경실조증', '어지럼증치료', '부평한의원', '인천자율신경한의원', '가슴두근거림', '만성피로', '해아림한의원'];

  const tistoryScript = `> "머리가 붕 뜬 것처럼 어지럽고 가슴이 불규칙하게 두근거려 내과, 신경과 검사를 다 받았는데 '스트레스성 신경성'이라는 말뿐입니다."
> "검사상 이상이 없다는데 저는 일상생활이 힘들 정도로 온몸이 아프고 무기력합니다."

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

인천 부평, 부천, 송도, 청라 등지에서 원인 모를 신체 증상과 전신 피로감으로 진료실을 찾는 환자분들이 많습니다.
신체 곳곳에서 동시다발적으로 비정상적인 신호가 나타나지만 기질적 정밀 검사에서 병변이 발견되지 않는 것은 우리 몸의 항상성을 유지하는 **'자율신경계(Autonomic Nervous System)'의 조절 기능이 무너졌기 때문**입니다.

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. 머리는 멍하고 심장은 뛰는데 검사는 정상인 이유
* 02. 자율신경실조증 핵심 기전: 교감신경 과항진 vs 부교감신경 저하
* 03. 한의학적 진단: 수승화강(水昇火降) 실조와 담음(痰飮)
* 04. 자율신경 기능 회복을 위한 1:1 맞춤 한방 통합 솔루션
* 05. ❓ 진료실 자주 묻는 질문 (FAQ 4문 4답 - 5대 테마 다변화)
* 06. 일상 속 교감신경 이완을 위한 호흡 & 생활 가이드

### 🌿 01. 머리는 멍하고 심장은 뛰는데 검사는 정상인 이유
MRI, CT, 내시경, 혈액검사는 장기 자체의 기질적 손상(염증, 종양, 궤양 등)을 확인하는 검사입니다. 반면 자율신경실조증은 장기를 지휘하는 '신경 조절 신호 체계의 불균형'이 원인이므로 일반 영상 검사에서는 정상으로 나타납니다.

### 🔍 02. 자율신경실조증 핵심 기전: 교감신경 과항진 vs 부교감신경 저하
* **교감신경 폭주 (액셀 과열)**: 스트레스와 뇌 피로로 인해 심박 급증, 혈관 수축, 상열감, 식은땀, 안구 건조, 두통 유발.
* **부교감신경 저하 (브레이크 고장)**: 소화관 혈류 차단으로 만성 소화불량, 담적, 명치 답답함, 불면증 지속.
* **뇌간 피로와 혈류 저하**: 비회전성 멍한 어지럼증(브레인 포그), 기립성 불균형 발생.

### 📚 03. 한의학적 진단: 수승화강(水昇火降) 실조와 담음(痰飮)
* **수승화강 실조 & 상열하한**: 차가운 신장 수기는 머리로 올라가고 따뜻한 심장 화기는 복부로 내려가야 하나, 이 순환이 막혀 머리는 어지럽고 가슴은 답답하며 손발은 차가워집니다.
* **심담허겁 & 심비양허**: 신경계 쇠약으로 사소한 자극에도 심장이 쿵쾅거리고 불안감이 엄습합니다.
* **담음(痰飮) 정체**: 소화기 노폐물이 흉격과 경락을 막아 메스꺼움과 어지럼증이 반복됩니다.

### 💡 04. 해아림한의원 인천부평점 1:1 맞춤 치료 솔루션
* **1:1 체질 맞춤 한약**: 과항진된 교감신경을 안정시키고 뇌 혈류를 개선하는 시호, 황련, 산조인, 복신 등 엄선된 천연 한약재 처방.
* **성상신경절 약침 & 침구 치료**: 자율신경 중추 경혈(내관, 신문, 풍지, 백회)을 자극하여 신경절 긴장 즉각 이완.
* **경추 교정 & 두개천골요법(CST)**: 미주신경(부교감신경)이 주행하는 후두골과 상부 경추의 구조적 압박 해소.
* **뇌기능 바이오피드백 훈련**: 심박변이도 및 뇌파 안정을 통해 스스로 자율신경을 조절하는 두뇌 자생력 강화.

### ❓ 05. 진료실 자주 묻는 질문 (FAQ 4문 4답)
**Q1. [증상 감별] 가슴이 심하게 뛰고 숨이 찬데, 공황장애와 자율신경실조증은 어떻게 구별하나요?**
> A. 공황장애는 "지금 당장 죽을 것 같다"는 극심한 공포와 함께 10~30분간 치솟는 발작 증상이 특징입니다. 반면 자율신경실조증은 발작 순간 외에도 평상시에 만성적인 어지럼증, 소화불량, 피로감, 체온 조절 이상 등이 잔잔하게 지속되는 특징이 있습니다.

**Q2. [병원 검사] 종합병원 검사에서 모두 정상이라는데 왜 제 몸은 계속 아픈 걸까요?**
> A. MRI나 내시경은 장기의 '구조적 파괴'를 보는 검사이며, 자율신경실조증은 신경 신호 전달의 '기능적 이상'이기 때문입니다. HRV(심박변이도) 검사를 통해 자율신경 균형 상태를 진단해야 합니다.

**Q3. [약물 감량] 신경안정제를 복용 중인데 한방 치료와 병행하며 약을 줄일 수 있나요?**
> A. 네, 안전하게 병행 가능합니다. 초기에는 복용 중인 양약을 유지하며 한방 치료로 뇌신경 자생력을 올린 뒤, 주치의 상의 하에 금단 증상 없이 단계적으로 감량(Tapering)해 나갑니다.

**Q4. [일상 대처] 일상에서 교감신경이 과열되어 심장이 두근거릴 때 즉각 완화하는 팁이 있나요?**
> A. '4-7-8 복식호흡법'(4초 들이마시고 7초 멈춘 뒤 8초간 길게 내쉬기)을 5회 반복하세요. 날숨을 길게 유지하면 부교감신경(미주신경)이 활성화되어 심박수가 즉각 안정됩니다.

---
**권형근 대표원장의 조언**: "자율신경실조증은 신경계의 일시적 조절 장애일 뿐 불치병이 아닙니다. 과열된 교감신경을 달래고 뇌의 회복력을 키우면 반드시 평온한 일상을 되찾을 수 있습니다."`;

  // 1) 요약 알림 전송
  const summaryMsg = `📢 <b>[해아림한의원] 새 건강 칼럼이 공식 홈페이지/티스토리에 발행 준비되었습니다!</b>

📌 <b>추천 메인 제목:</b> ${escapeHtml(title)}
🏷️ <b>분류:</b> ${escapeHtml(category)}
🗓️ <b>일시:</b> ${date}

📝 <b>칼럼 핵심 요약:</b>
${escapeHtml(summary)}

🔗 <a href="${columnUrl}">홈페이지 칼럼 바로가기</a>`;

  const sumRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summaryMsg, parse_mode: 'HTML' })
  });
  console.log('1. Summary notification sent! Status:', sumRes.status);

  // 2) 원클릭 복사용 전체 대본 (다변화 FAQ 포함)
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 다변화된 4대 질환 특화 FAQ와 6대 챕터 정통 의학 원고입니다.</i>

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
  const tHtml = formatTistoryContent(colObj, 'autonomic-fatigue');

  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', '📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사(`Ctrl+A` ➔ `Ctrl+C`) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 인용 박스/목차/카드/Q&A/버튼 서식이 완벽하게 적용됩니다.');
  formData.append('parse_mode', 'HTML');
  const blob = new Blob([tHtml], { type: 'text/html;charset=utf-8' });
  formData.append('document', blob, 'tistory_autonomic_fatigue_faq.html');

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: formData
  });
  console.log('3. HTML document sent! Status:', docRes.status);
  console.log('[Telegram Tistory Sender] All 3 parts sent successfully to Telegram!');
}

sendAutonomicColumn().catch(err => {
  console.error('[Telegram Tistory Sender] Error sending to Telegram:', err);
});
