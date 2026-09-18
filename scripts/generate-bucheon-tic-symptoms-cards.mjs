import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-tic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081b2e" />
      <stop offset="50%" stop-color="#0d2b27" />
      <stop offset="100%" stop-color="#05171e" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 소아청소년 &amp; 두뇌신경 틱장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        눈 깜빡임 · 킁킁 소리 "혼내거나 참게 하지 마세요"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 틱장애 증상과 원인별 맞춤 치료법
    </text>
    <text x="55" y="200" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 기저핵의 흥분 조절 불균형을 바로잡는 1:1 두뇌 자생력 솔루션
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2ece7" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">기저핵의 운동 조절 필터(브레이크) 미성숙</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">아이가 일부러 하는 나쁜 버릇이 아닌 뇌신경계의 생리적 조절 장애</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">얼굴 ➡️ 목 ➡️ 어깨 ➡️ 음성틱 하행성 진행</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">눈 깜빡임에서 몸통으로 내려가고 소리가 동반되기 전 조기 진단이 핵심</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#f5f3ff" />
        <circle cx="67" cy="67" r="26" fill="#7c3aed" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뉴로피드백 두뇌 자생력 치료</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">단순 화학적 억제가 아닌 뇌 스스로 조절하는 힘을 키워 재발 방지</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f2922" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 1:1 맞춤 두뇌신경 클리닉 (부평역 7번 출구 도보 5분)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: POINT 01 틱장애 신경학적 발병 원인 요약 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091b2e" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">틱장애의 신경생리학적 원인</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "버릇이나 성격 문제가 아닙니다, 뇌의 신호 필터 미성숙"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    불필요한 동작을 걸러내지 못하는 뇌 기저핵(Basal Ganglia)의 과흥분
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0f2fe" />
      <circle cx="75" cy="80" r="26" fill="#0284c7" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#0369a1">기저핵의 운동 조절 필터(브레이크) 기능 미숙</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">우리 뇌에서 불필요한 근육 신호와 소리를 걸러주는 '정수기 필터'가</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">아직 덜 발달해 의지와 무관하게 신호가 밖으로 새어 나오는 생리적 현상입니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7">👉 아이가 일부러 하는 행동이 아니므로 다그치거나 자책하지 마세요.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#b45309">도파민 불균형 및 교감신경계 과부하</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">새 학기 적응, 긴장, 시험 스트레스, 스마트폰 과몰입 등으로 교감신경이</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">과흥분될 때 기저핵의 신경 조절 여력이 급격히 떨어지며 증상이 악화됩니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 과도한 시각적 자극과 스트레스 유발 환경을 차단하는 것이 필수적입니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#b91c1c">부모님 주의사항: 절대 혼내거나 억지로 참게 하지 마세요</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#991b1b">억지로 참으라고 훈육하면 뇌 기저핵에 극심한 압력과 긴장이 누적되어,</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#991b1b">긴장이 풀리는 순간 2~3배 더 격렬한 틱으로 폭발하게 됩니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#be123c">👉 '모른 척하기'와 '부드러운 관심 전환'이 가장 훌륭한 초기 대처법입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 틱은 아이의 고집이 아닌 뇌 기저핵의 생리적 신호 전달 불균형입니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: POINT 02 틱 증상 4단계 진행 패턴 & 체크리스트 카드
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#04261f" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#10b981" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">틱 증상 진행 단계 &amp; 자가진단</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "눈에서 시작해 아래로 번지는 4단계 진행 패턴"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#a7f3d0" letter-spacing="-0.5">
    하행성(얼굴 ➡️ 몸통)으로 진행되고 소리가 겹치기 전 조기 대처가 핵심입니다
  </text>

  <!-- 4 Step Process Flow Cards -->
  <g transform="translate(60, 235)">
    <!-- Stage 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">초기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#065f46">얼굴 부위 단순 근육틱 (초기 신호)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">눈 깜빡임 ｜ 눈동자 굴리기 ｜ 코 찡긋거리기 ｜ 입 씰룩거리기</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 안과나 이비인후과 진료 후 이상이 없다면 틱 전조 증상을 의심해야 합니다.</text>
    </g>

    <!-- Stage 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">중기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#1e40af">목·어깨로 내려가는 근육틱 (중기 확장)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">고개 꺾기 ｜ 목 돌리기 ｜ 어깨 들썩이기 ｜ 팔다리 털기 ｜ 배 꿀렁임</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 상부 목뼈 및 대근육으로 긴장이 번지는 단계로 빠른 한방 개입이 필요합니다.</text>
    </g>

    <!-- Stage 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">동반</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400e">음성틱(소리 틱)의 동반 출현</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">"음, 음" 헛기침 ｜ 코 킁킁거리기 ｜ 켁켁 소리 ｜ 특정 단어나 말 반복</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 감기나 비염으로 오인하기 쉬우며, 운동틱과 겹치면 집중 치료 대상입니다.</text>
    </g>

    <!-- Stage 4 (Warning) -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="185" rx="20" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow2)" />
      
      <rect x="25" y="30" width="120" height="125" rx="16" fill="#ffe4e6" />
      <text x="85" y="78" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#e11d48" text-anchor="middle">위험신호</text>
      <text x="85" y="122" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c" text-anchor="middle">주의</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#9f1239">만성화 및 복합 틱(뚜렛) 전환 주의</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#881337">운동틱과 음성틱이 함께 나타나며 1년 이상 지속될 경우 만성화 위험 급증!</text>
      <text x="170" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4c0519">증상이 3~4주 이상 지속되거나 번진다면 조기에 신경계 균형을 잡아야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#064e3b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      ⚠️ 얼굴에서 목·어깨로 내려가거나 음성틱이 시작되면 즉각적인 한방 진단이 필요합니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: POINT 03 해아림 4단계 맞춤 한방 치료 솔루션 요약 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#141033" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#818cf8" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c7d2fe">해아림 4단계 통합 틱 치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "뇌 스스로 조절하는 힘(자생력)을 키웁니다"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#a5b4fc" letter-spacing="-0.5">
    단순 화학적 억제가 아닌 뇌 신경망 성숙과 체질 개선 맞춤 솔루션
  </text>

  <!-- 4 Step Solution Cards -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eef2ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#4f46e5" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#4338ca" text-anchor="middle">맞춤한약</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#312e81">체질별 1:1 맞춤 청뇌진경(淸腦鎭驚) 탕전</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">간풍내동(억간산·시호가용골모려탕)·심담허겁(온담탕)·간기울결(사역산) 맞춤 처방</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5">👉 뇌 허열을 내리고 기저핵의 흥분을 진정시켜 불필요한 신호 발생을 억제</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f0fdf4" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#16a34a" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#15803d" text-anchor="middle">두뇌훈련</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#14532d">뉴로피드백 &amp; 감각통합 두뇌 훈련</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">밀리초(1/1000초) 단위 감각통합 훈련과 실시간 뇌파 바이오피드백</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#16a34a">👉 전두엽과 기저핵의 자율 억제 회로를 강화해 전조 충동을 스스로 조절</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">침구약침</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#065f46">백회·풍지·태충 경혈 자극 &amp; 청열 안신 약침</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">두부 백회혈과 풍지혈, 간경락 태충혈을 자극해 뇌혈류 개선 및 근육 긴장 완화</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 안면 및 목·어깨 부위의 국소적 근육 경련과 신경 압박을 신속히 이완</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#faf5ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">4단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">구조교정</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#6b21a8">턱관절 밸런스 교정 &amp; 두개천골요법(CST)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">턱관절과 상부 경추(1·2번)의 긴장을 풀어 뇌척수액 순환을 촉진</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 중추신경계의 물리적 압박을 해소하여 신경 흥분 신호의 반복을 차단</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#312e81" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🌱 졸림·무기력 부작용 없이 치료 종료 후에도 스스로 안정 상태를 유지하도록 돕습니다
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: POINT 04 가정 내 부모 양육 & 환경 관리 가이드 요약 카드 (약선차 제외!)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#331405" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#f59e0b" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">가정 내 양육 &amp; 환경 관리 4수칙</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "부모님의 지혜로운 대처가 최고의 치유 환경입니다"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    의지에 의존하지 않고 두뇌 안정 환경을 만드는 4가지 실천 루틴
  </text>

  <!-- 4 Principles -->
  <g transform="translate(60, 235)">
    <!-- Principle 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">무관심</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400e">모른 척하기 (무관심의 원칙)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">틱 동작을 지적하거나 빤히 보지 마세요. 지적은 아이의 불안과 틱을 2배로 키웁니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 "눈 똑바로 떠", "그 소리 내지 마"라는 훈육은 절대 금물입니다.</text>
    </g>

    <!-- Principle 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">수칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">주의환기</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#065f46">자연스러운 관심 전환 유도</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">틱을 심하게 할 때는 "시원한 물 한잔 마실까?", "책 같이 보자"며 부드럽게 말을 건네세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 가벼운 신체 활동이나 정서적 대화로 신경의 긴장 초점을 자연스럽게 분산시킵니다.</text>
    </g>

    <!-- Principle 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">수칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">자극제한</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#991b1b">스마트폰 &amp; 게임 도파민 자극 엄격 제한</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">현란한 쇼츠 영상과 빠른 게임은 도파민을 과도하게 분비시켜 뇌 기저핵을 과흥분시킵니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 취침 2시간 전 전자기기 사용을 멈추고 은은한 간접 조명 환경을 만들어주세요.</text>
    </g>

    <!-- Principle 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f3e8ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">수칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">이완수면</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#6b21a8">이완 호흡 루틴과 낮 햇볕 쬐기</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">취침 전 4-7-8 복식 호흡으로 긴장을 풀고, 낮 20분 햇볕을 쬐며 야외 산책을 시켜주세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 세로토닌과 멜라토닌 분비가 원활해져 두뇌 신경 안정에 탁월한 도움을 줍니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      ❤️ 부모님의 따뜻한 기다림과 공감이 가장 강력한 치유의 시작입니다
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
  console.log('Generating Bucheon Tic Symptoms blog cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 high-res cards rendered successfully in both directories!');
}

main().catch(console.error);
