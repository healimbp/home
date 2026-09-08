import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sangdong-panic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 대표 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-230" y="0" width="460" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        지하철·운전 중 갑작스러운 숨막힘과 극심한 심장 두근거림
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 상동 공황장애 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      편도체 과열 · 과호흡 역설 · 교감신경 폭발의 근본 해법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 오작동 &amp; 과호흡 역설</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">두뇌 경보 장치 과열 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">질식감 · 흉통 · 예기불안</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">5대 핵심 증상 자가 점검</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 두뇌훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 자생력 및 신경망 재건</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 힐링 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 이완호흡 &amp; 내관혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">일상 응급 대처 자가 루틴</text>
      </g>
    </g>

    <!-- Clinic Doctor Profile Bar -->
    <g transform="translate(55, 530)">
      <rect x="0" y="0" width="860" height="175" rx="20" fill="#f3f8f6" stroke="#cde3db" stroke-width="1.5" />
      <circle cx="75" cy="88" r="48" fill="#2d6a59" />
      <text x="75" y="100" font-family="${fontFamilies}" font-size="46" text-anchor="middle">👨‍⚕️</text>
      <text x="145" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 권형근 대표원장
      </text>
      <text x="145" y="88" font-family="${fontFamilies}" font-size="16" font-weight="600" fill="#0d9488">
        한방침구과 전문의 · 한의학 석사 · 1:1 맞춤 심층 진료
      </text>
      <text x="145" y="118" font-family="${fontFamilies}" font-size="15" fill="#4b635a">
        "공황발작은 결코 심장마비나 질식이 아닌, 뇌의 잘못된 경보 신호입니다. 두뇌 조절력을 키우면 반드시 완치됩니다."
      </text>
      <text x="145" y="145" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        📍 부평역 7번 출구 (상동·중동 7호선/1호선 인접 5~10분) ｜ 🌙 월·수·금 야간진료 ｜ 📞 032-719-3472
      </text>
    </g>

    <!-- Footer Trust Badges -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="270" height="90" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1" />
      <text x="135" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f2922" text-anchor="middle">🔬 객관적 뇌기능 검사</text>
      <text x="135" y="66" font-family="${fontFamilies}" font-size="13" fill="#64748b" text-anchor="middle">뇌파·HRV 자율신경 정밀측정</text>

      <rect x="295" y="0" width="270" height="90" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1" />
      <text x="430" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f2922" text-anchor="middle">💊 1:1 맞춤 청뇌안신탕</text>
      <text x="430" y="66" font-family="${fontFamilies}" font-size="13" fill="#64748b" text-anchor="middle">편도체 안정 &amp; 신경전달물질 조절</text>

      <rect x="590" y="0" width="270" height="90" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1" />
      <text x="725" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f2922" text-anchor="middle">🧘 두뇌훈련 &amp; 자생력 강화</text>
      <text x="725" y="66" font-family="${fontFamilies}" font-size="13" fill="#64748b" text-anchor="middle">뉴로피드백 &amp; 두개천골 추나요법</text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 1 CARD (원인 분석 카드)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0c3530" />
      <stop offset="100%" stop-color="#061919" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="300" height="42" rx="21" fill="#0d9488" />
    <text x="150" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 및 발병 기전</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    공황장애, 왜 심장이 터질 듯 답답할까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    심장 질환이 아닌 뇌 편도체 오작동과 과호흡의 악순환 기전
  </text>

  <!-- 3 Cause Detailed Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚨</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 공포 경보기 '편도체(Amygdala)'의 과열 및 오작동
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 실제 생명의 위협이 전혀 없는데도 화재경보기의 센서가 고장 난 것처럼 오작동합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌의 이성 통제 센터인 '전전두엽'의 기능이 저하되어 공포 사이렌을 제어하지 못합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 결과: 아무런 이유 없이 온몸에 비상 사이렌(교감신경 폭주)이 울려 퍼집니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 숨을 가쁘게 쉴수록 더 질식할 것 같은 '과호흡의 역설'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 산소가 부족하다고 착각하여 가슴으로 헐떡이며 숨을 몰아쉬는 순간 발생합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 혈중 이산화탄소 농도가 급격히 떨어져 뇌혈관이 수축되고 어지럼·질식감이 극대화됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 핵심: 산소가 부족한 것이 아니라, 이산화탄소가 너무 빠져나가 질식감을 느끼는 역설입니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 뇌간 청반핵의 노르에피네프린 폭발 분비
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌간의 자율신경 중추에서 스트레스 호르몬이 한순간에 쏟아져 나옵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심장 박동 급상승, 식은땀, 손발 떨림, 이인증(몸이 붕 뜨는 비현실감)을 유발합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 한의학적 진단: 심담허겁(心膽虛怯) 및 간기울결(肝氣鬱結)로 인한 담화(痰火) 상역
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "공황발작은 결코 심장마비나 질식사를 일으키지 않으며, 10~20분 내에 반드시 자연 소퇴합니다."
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 2 CARD (자가진단 체크리스트 카드)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0c3530" />
      <stop offset="100%" stop-color="#061919" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="300" height="42" rx="21" fill="#0d9488" />
    <text x="150" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단 체크리스트</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    나도 공황장애일까? 5대 핵심 증상 체크
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    예기치 못한 신체 증상과 공포감이 반복된다면 점검해보세요
  </text>

  <!-- 5 Checklist Cards -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="120" rx="18" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="55" cy="60" r="26" fill="#e6f7f3" />
      <text x="55" y="70" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="105" y="48" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        1. 갑작스러운 심장 두근거림과 흉부 압박감
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        심장이 밖으로 튀어나올 듯이 빠르고 강하게 뛰며 가슴이 조여오는 통증이 느껴진다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 138)">
      <rect x="0" y="0" width="960" height="120" rx="18" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="55" cy="60" r="26" fill="#e6f7f3" />
      <text x="55" y="70" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="105" y="48" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        2. 호흡 곤란 및 목구멍이 막힌 듯한 질식감
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        숨이 턱 막혀 공기가 폐로 들어오지 않는 것 같고 목 안쪽에 무언가 꽉 막힌 느낌이 든다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 276)">
      <rect x="0" y="0" width="960" height="120" rx="18" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="55" cy="60" r="26" fill="#e6f7f3" />
      <text x="55" y="70" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="105" y="48" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        3. 어지럼증 · 손발 저림 · 몸이 붕 뜨는 비현실감
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        머리가 멍하고 세상이 아득해지며, 내 몸이 내가 아닌 것 같은 이인증(비현실감)이 엄습한다.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 414)">
      <rect x="0" y="0" width="960" height="120" rx="18" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="55" cy="60" r="26" fill="#e6f7f3" />
      <text x="55" y="70" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="105" y="48" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        4. 죽음에 대한 공포 또는 통제력 상실의 두려움
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        '이러다 심장마비로 죽는 건 아닐까', '미쳐서 발작을 일으키면 어쩌지'라는 극심한 공포가 든다.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 552)">
      <rect x="0" y="0" width="960" height="120" rx="18" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="55" cy="60" r="26" fill="#fee2e2" />
      <text x="55" y="70" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">⚠️</text>
      <text x="105" y="48" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
        5. '또 발작이 올까 봐' 두려운 예기불안과 회피 행동
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        지하철, 터널, 엘리베이터, 혼잡한 백화점 등 빠져나오기 힘든 장소를 피하게 된다.
      </text>
    </g>
  </g>

  <!-- Evaluation Result Box -->
  <g transform="translate(60, 930)">
    <rect x="0" y="0" width="960" height="110" rx="18" fill="#042f2c" stroke="#14b8a6" stroke-width="1.5" />
    <text x="480" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      📋 [자가진단 판정] 3개 이상 해당 시 '공황발작 및 예기불안' 단계
    </text>
    <text x="480" y="80" font-family="${fontFamilies}" font-size="16" fill="#e6f7f3" text-anchor="middle">
      시간이 지날수록 회피 장소가 늘어나 광장공포증으로 악화될 수 있으므로 조기 치료가 필수적입니다.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 3 CARD (1:1 맞춤 한방 치료 솔루션)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0c3530" />
      <stop offset="100%" stop-color="#061919" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="300" height="42" rx="21" fill="#0d9488" />
    <text x="150" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 1:1 맞춤 한방 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 자생력을 깨우는 4단계 통합 치유 솔루션
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    단순 신경 억제가 아닌 뇌신경계 조절력과 자율신경 항상성을 재건합니다
  </text>

  <!-- 4 Step Treatment Cards Grid -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="38" rx="8" fill="#e6f7f3" />
      <text x="75" y="50" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP 01</text>
      
      <text x="25" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        🔬 뇌기능 정밀 검사
      </text>
      <text x="25" y="140" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        원인과 신경계 상태의 객관적 파악
      </text>
      
      <line x1="25" y1="160" x2="440" y2="160" stroke="#e2ece7" stroke-width="1.5" />
      
      <text x="25" y="195" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 뇌파(QEEG) 분석: 두뇌 활성도 &amp; 불안파 측정
      </text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 자율신경계(HRV) 검사: 교감·부교감 밸런스 점검
      </text>
      <text x="25" y="255" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 사상체질 및 설진·맥진을 통한 오장육부 허실 감별
      </text>
      <text x="25" y="295" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 환자 맞춤형 치료 로드맵 수립
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="38" rx="8" fill="#e6f7f3" />
      <text x="75" y="50" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP 02</text>
      
      <text x="25" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        💊 맞춤 청뇌안신탕 처방
      </text>
      <text x="25" y="140" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        편도체 안정 &amp; 신경전달물질 조절
      </text>
      
      <line x1="25" y1="160" x2="440" y2="160" stroke="#e2ece7" stroke-width="1.5" />
      
      <text x="25" y="195" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 심담허겁(心膽虛怯)·간기울결(肝氣鬱結) 해소
      </text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 가바(GABA) 및 세로토닌 활성화로 불안 역치 강화
      </text>
      <text x="25" y="255" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 상열감과 흉부 답답함을 내려주는 청열안신 약재 구성
      </text>
      <text x="25" y="295" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 의존성·졸림 없는 안전한 자생 치료
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 365)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="38" rx="8" fill="#e6f7f3" />
      <text x="75" y="50" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP 03</text>
      
      <text x="25" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        🧘 첨단 두뇌훈련 훈련
      </text>
      <text x="25" y="140" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        뉴로피드백 &amp; 바이오피드백
      </text>
      
      <line x1="25" y1="160" x2="440" y2="160" stroke="#e2ece7" stroke-width="1.5" />
      
      <text x="25" y="195" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 과흥분된 고베타파를 낮추고 안정된 알파파 강화
      </text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 심박변이도 조절로 호흡과 심장 박동 동조화
      </text>
      <text x="25" y="255" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위기 상황에서도 뇌 스스로 침착성을 유지하는 힘 육성
      </text>
      <text x="25" y="295" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 뇌 신경가소성을 통한 재발 방지
      </text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(495, 365)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="38" rx="8" fill="#e6f7f3" />
      <text x="75" y="50" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP 04</text>
      
      <text x="25" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        💆 두개천골 추나 &amp; 침구
      </text>
      <text x="25" y="140" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        신체 긴장 해소 &amp; 미주신경 활성
      </text>
      
      <line x1="25" y1="160" x2="440" y2="160" stroke="#e2ece7" stroke-width="1.5" />
      
      <text x="25" y="195" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 경추 1·2번 및 두개골 정렬로 뇌척수액 순환 촉진
      </text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 목·어깨·횡격막 근육 이완으로 호흡근 가동성 회복
      </text>
      <text x="25" y="255" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 내관혈·전중혈·백회혈 침구 치료로 울체된 화기 해소
      </text>
      <text x="25" y="295" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 즉각적인 신체 이완 및 전신 안정
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 955)">
    <rect x="0" y="0" width="960" height="70" rx="18" fill="#042f2c" stroke="#14b8a6" stroke-width="1.5" />
    <text x="480" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌿 해아림의 치료 목표는 평생 약에 의존하지 않는 '두뇌 신경계의 완전한 독립'입니다.
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 4 CARD (생활 속 힐링 실천 가이드)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0c3530" />
      <stop offset="100%" stop-color="#061919" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="300" height="42" rx="21" fill="#0d9488" />
    <text x="150" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 생활 속 힐링 실천</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    공황 신호가 올 때 즉시 써먹는 3가지 자가 대처법
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    신경계를 안정시키고 발작의 파도를 넘기는 현실적 실천 루틴
  </text>

  <!-- 3 Self-Care Boxes -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="180" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e" text-anchor="middle">호흡법</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
      
      <text x="150" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 미주신경 자극 '4-7-8 응급 이완 호흡법'
      </text>
      <text x="150" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 4초간 코로 천천히 들이마시고, 7초간 숨을 멈춘 후, 8초간 입으로 길게 내쉽니다.
      </text>
      <text x="150" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 긴 날숨이 횡격막 미주신경을 자극하여 심장 박동을 강제 안정시키고 과호흡을 막습니다.
      </text>
      <rect x="150" y="152" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 핵심: 들이마시려 애쓰지 말고, 내쉬는 숨을 천천히 길게 뱉는 것이 질식감을 끊는 열쇠!
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="180" rx="16" fill="#fee2e2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">접지법</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="34" text-anchor="middle">👁️</text>
      
      <text x="150" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 불안 분산 감각 접지 '5-4-3-2-1 그라운딩 기법'
      </text>
      <text x="150" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 눈에 보이는 사물 5개, 만져지는 감각 4개, 들리는 소리 3개, 냄새 2개, 입안의 맛 1개 찾기
      </text>
      <text x="150" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 신체 내부의 공포 생각에 갇힌 주의를 외부의 오감 감각으로 강제 전환하여 편도체를 진정시킵니다.
      </text>
      <rect x="150" y="152" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 지하철이나 엘리베이터에서 증상이 올라올 때 주변 물건의 색상과 질감에 집중하세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="180" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">혈자리</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🖐️</text>
      
      <text x="150" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 카페인·알코올 차단 &amp; 내관혈(內關穴) 지압
      </text>
      <text x="150" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 커피, 에너지 음료의 카페인은 심장을 인위적으로 자극해 편도체 경보를 촉발하므로 금기입니다.
      </text>
      <text x="150" y="128" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 손목 안쪽 주름에서 손가락 세 마디 위 두 힘줄 사이(내관혈)를 5초간 지그시 10회 지압합니다.
      </text>
      <rect x="150" y="152" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 효능: 심포경(心包經)의 기운을 다스려 가슴 답답함과 메스꺼움, 두근거림을 가라앉힙니다.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 "공황발작은 결코 나를 해치지 않으며, 시간이 지나면 파도처럼 반드시 지나갑니다."
    </text>
  </g>
</svg>
  `;
}

async function renderCard(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  
  for (const dir of targetDirs) {
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath} (${pngBuffer.length} bytes)`);
  }
}

async function main() {
  console.log('Generating Bucheon Sangdong Panic Disorder blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
