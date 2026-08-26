import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/bucheon-tic';

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

// 1. MAIN THUMBNAIL (메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1b30" />
      <stop offset="60%" stop-color="#0d2826" />
      <stop offset="100%" stop-color="#071520" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="46" rx="23" fill="#059669" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">소아청소년 &amp; 성인 뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="460" height="38" rx="8" fill="#ecfdf5" />
      <text x="18" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        눈 깜빡임 · 킁킁 소리 "혼내거나 참게 하지 마세요"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="48" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 틱장애 원인과 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 기저핵 불균형에서 시작되는 신호 &amp; 완화 솔루션
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 260)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">뇌 기저핵의 운동 조절 필터 미성숙</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">아이의 나쁜 버릇이 아닌 불필요한 신호를 거르지 못하는 생리적 현상</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">눈 ➡️ 목 ➡️ 어깨 ➡️ 음성틱 하행성 진행</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">얼굴에서 몸통으로 내려가고 음성틱이 동반되기 전 조기 진단이 핵심</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#faf5ff" />
        <circle cx="67" cy="67" r="26" fill="#9333ea" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뉴로피드백 두뇌 훈련</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">뇌 스스로 조절하는 억제 회로를 키워 재발 위험을 낮추는 통합 치료</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f172a" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 ｜ 1:1 맞춤 뇌신경 클리닉 (부평역 19번 출구 앞)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: 틱장애 핵심 원인 요약 카드
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#0c1f38" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#0284c7" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">핵심 01</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">틱장애의 핵심 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    단순한 버릇이나 심리적 문제만 아닙니다!
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    '뇌 기저핵 운동 조절 필터'의 발달 미성숙
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0f2fe" />
      <circle cx="75" cy="80" r="26" fill="#0284c7" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#0369a1">기저핵(뇌 운동 필터)의 브레이크 기능 저하</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">우리 뇌에서 불필요한 근육 신호와 음성을 걸러주는 '필터'가 아직</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">성숙하지 못해 의지와 상관없이 밖으로 튀어나오는 생리적 현상입니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7">👉 아이가 일부러 하는 행동이 아니므로 자책하거나 다그치지 마세요.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309">도파민 신경전달물질 및 자율신경계 과부하</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">새 학기 적응, 긴장, 피로, 스마트폰 과몰입 등으로 교감신경이</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">과흥분될 때 기저핵의 신경 조절 여력이 급격히 떨어집니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 과도한 시각적 자극과 스트레스 환경 차단이 중요합니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b91c1c">부모님 주의사항: 절대 혼내거나 참게 하지 마세요</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">억지로 참으라고 강요하면 뇌 기저핵에 극심한 압력이 쌓여,</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">나중에 2~3배 더 크고 격렬한 틱으로 폭발하게 됩니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#be123c">👉 '모른 척하기'와 '부드러운 관심 전환'이 가장 훌륭한 대처입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 틱은 아이가 일부러 하는 장난이나 고집이 아닌 뇌신경계 생리 신호입니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: 틱 증상 4단계 진행 패턴 요약 카드
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#04261f" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#10b981" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">단계 02</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">틱 증상의 진행 단계</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    눈에서 시작해 아래로 내려가는 4단계
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a7f3d0" letter-spacing="-0.5">
    하행성(아래로 번짐)으로 진행되기 전 조기 대처가 핵심입니다
  </text>

  <!-- 4 Step Process Flow Cards -->
  <g transform="translate(60, 240)">
    <!-- Stage 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#047857" text-anchor="middle">초기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">얼굴 부위 단순 근육틱 (초기)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">눈 깜빡임 ｜ 눈동자 굴리기 ｜ 코 찡긋거리기 ｜ 입 씰룩거리기</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 안과나 이비인후과 진료 후 이상이 없다면 틱 전조 증상을 의심해야 합니다.</text>
    </g>

    <!-- Stage 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1d4ed8" text-anchor="middle">중기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">목·어깨로 내려가는 근육틱 (중기)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">고개 꺾기 ｜ 목 돌리기 ｜ 어깨 들썩이기 ｜ 팔다리 털기 ｜ 배 꿀렁임</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 상부 목뼈 및 대근육으로 긴장이 확장되는 신호로 빠른 개입이 필요합니다.</text>
    </g>

    <!-- Stage 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309" text-anchor="middle">동반</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">음성틱(소리 틱)의 동반 출현</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">"음, 음" 헛기침 ｜ 코 킁킁거리기 ｜ 켁켁 소리 ｜ 특정 단어나 말 반복</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 비염이나 감기로 오인하기 쉬우며, 운동틱과 겹치면 집중 치료 대상입니다.</text>
    </g>

    <!-- Stage 4 (Warning) -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="185" rx="20" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow2)" />
      
      <rect x="25" y="30" width="120" height="125" rx="16" fill="#ffe4e6" />
      <text x="85" y="78" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#e11d48" text-anchor="middle">위험신호</text>
      <text x="85" y="122" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#be123c" text-anchor="middle">주의</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#9f1239">만성화 및 복합 틱(뚜렛) 전환 주의</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#881337">근육틱과 음성틱이 함께 나타나며 1년 이상 지속될 경우 만성화 위험 급증!</text>
      <text x="170" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4c0519">증상이 3~4주 이상 지속되거나 번진다면 조기에 신경계 균형을 잡아야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#064e3b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      ⚠️ 얼굴에서 목·어깨로 내려가거나 음성틱이 시작되면 즉각적인 진단이 필요합니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: 해아림 3대 통합 치료 솔루션 요약 카드
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#171238" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#818cf8" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">치료 03</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c7d2fe">해아림 3대 통합 치료</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 스스로 조절하는 힘을 키웁니다
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a5b4fc" letter-spacing="-0.5">
    단순 화학적 억제가 아닌 뇌 신경망 성숙과 체질 치료
  </text>

  <!-- 3 Solutions -->
  <g transform="translate(60, 245)">
    <!-- Solution 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0e7ff" />
      <circle cx="75" cy="80" r="26" fill="#4f46e5" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#3730a3">체질별 1:1 맞춤 한약 처방</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1e1b4b">간풍내동형(간열 진정), 심담허겁형(수면·심신안정), 비위허약형(기혈 보강)</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">뇌의 과흥분을 가라앉히고 오장육부 신경계의 자생적 회복력을 높여줍니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5">👉 졸림이나 무기력감 등의 부작용 없이 순하게 두뇌 안정을 돕습니다.</text>
    </g>

    <!-- Solution 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#f0fdf4" />
      <circle cx="75" cy="80" r="26" fill="#16a34a" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#166534">뉴로피드백 &amp; 감각통합 두뇌 훈련</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#14532d">밀리초(천분의 일초) 단위 감각통합 훈련과 실시간 뇌파 바이오피드백</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">기저핵과 전두엽의 자율 억제 회로를 강화해 전조 충동을 스스로 조절합니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a">👉 집중력 향상과 충동 조절력, 정서적 안정감이 함께 개선됩니다.</text>
    </g>

    <!-- Solution 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fdf4ff" />
      <circle cx="75" cy="80" r="26" fill="#c026d3" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#86198f">턱관절 밸런스 교정 &amp; 두개천골 뇌순환요법</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#701a75">상부 목뼈(경추 1·2번)와 턱관절 주변의 신경 압박 이완</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">뇌척수액 순환을 촉진하고 과열된 중추신경계의 구조적 긴장을 풀어줍니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c026d3">👉 신체 구조적 긴장을 해소하여 신경 흥분 신호의 반복을 차단합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#312e81" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🌱 치료 종료 후에도 스스로 안정 상태를 유지하는 자생적 두뇌 발달 유도
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: 가정 내 부모 양육 가이드 요약 카드
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#361704" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#f59e0b" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">원칙 04</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">가정 내 양육 가이드</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    부모님이 지켜야 할 4대 완화 원칙
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    가정의 따뜻한 지지와 편안한 환경이 최고의 치유약입니다
  </text>

  <!-- 4 Principles -->
  <g transform="translate(60, 240)">
    <!-- Principle 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">원칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">무관심</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">모른 척하기 (무관심의 원칙)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">틱 동작을 지적하거나 빤히 보지 마세요. 지적은 불안과 증상을 2배로 키웁니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 "눈 똑바로 떠", "그 소리 내지 마"라는 훈육은 절대 금물입니다.</text>
    </g>

    <!-- Principle 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">원칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">주의환기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">자연스러운 관심 전환 유도</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">아이가 틱을 심하게 할 때는 "물 한잔 마실까?", "책 같이 보자"며 부드럽게 유도하세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 신체 활동이나 가벼운 대화로 신경의 긴장 초점을 분산시켜 줍니다.</text>
    </g>

    <!-- Principle 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">원칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">자극제한</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#991b1b">스마트폰 &amp; 게임 시간 엄격 제한</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">현란한 영상과 빠른 게임은 도파민을 과도하게 분비시켜 뇌 기저핵을 과흥분시킵니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 취침 2시간 전 전자기기 사용을 멈추고 정적인 환경을 만들어주세요.</text>
    </g>

    <!-- Principle 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f3e8ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">원칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">수면이완</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#6b21a8">규칙적인 수면과 가벼운 야외 운동</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">밤 10시 이전 충분한 숙면과 낮 시간 햇볕을 쬐며 산책해 신경 피로를 풀어주세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 멜라토닌과 세로토닌 분비가 원활해져 두뇌 신경 안정에 큰 도움이 됩니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      ❤️ 부모님의 따뜻한 기다림과 공감이 가장 강력한 치료의 시작입니다
    </text>
  </g>
</svg>
  `;
}

async function renderCards() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const cards = [
    { name: '01_main_summary_thumbnail.png', svg: generateMainThumbnail() },
    { name: '02_point1_cause_summary.png', svg: generateCard1() },
    { name: '03_point2_stages_summary.png', svg: generateCard2() },
    { name: '04_point3_treatment_summary.png', svg: generateCard3() },
    { name: '05_point4_parenting_summary.png', svg: generateCard4() }
  ];

  for (const card of cards) {
    const resvg = new Resvg(card.svg, {
      fitTo: { mode: 'width', value: 1080 },
      font: {
        loadSystemFonts: true,
        defaultFontFamily: 'Malgun Gothic'
      }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    const outputPath = path.join(outputDir, card.name);
    fs.writeFileSync(outputPath, pngBuffer);
    console.log(`✅ 생성 완료 (100% 한국어 요약 카드): ${card.name} (${pngBuffer.length} bytes)`);
  }
}

renderCards().catch(console.error);
