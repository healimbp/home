import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-autonomic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061824" />
      <stop offset="50%" stop-color="#0a2a2e" />
      <stop offset="100%" stop-color="#04141c" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-225" y="0" width="450" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 자율신경 &amp; 뇌신경 밸런스 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        검사해도 "이상 없다"는데 온몸이 시들고 두근거릴 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 자율신경실조증 한의원 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#2d5248" letter-spacing="-0.5">
      교감신경 과열 · 상열하한 · 자율신경 시소 불균형의 근본 해법
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2eee8" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          '신경성·검사 정상'의 실체: 교감·부교감 시소 균형 붕괴
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          개별 장기 고장이 아닌 24시간 생명 유지 조절계의 과부하 및 자율신경 오작동
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          상열하한(上熱下寒)과 전신 다발성 신체화 증상
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          가슴 두근거림, 만성 어지럼증, 식은땀, 소화불량, 불면증이 얽혀 나타나는 전신 부조화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          1:1 청뇌안신(淸腦安心) 한약 &amp; 두개천골 추나·침구
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          교감신경 허열을 내리고 미주신경(부교감)을 깨워 뇌-자율신경 자생력을 복원
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#133d32" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="62" font-family="${fontFamilies}" font-size="14" fill="#a7f3d0" text-anchor="middle">
        부천 상동·중동·송내 인근 ｜ 1호선·7호선 부평역 7번 출구 도보 5분 ｜ 야간진료
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: POINT 01 원인 분석 카드
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#081b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#0d9488" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">자율신경실조증의 원인 분석</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "검사는 정상인데 온몸이 아픈 이유"
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#2dd4bf" letter-spacing="-0.5">
    교감신경(액셀)과 부교감신경(브레이크)의 조화 파탄
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#ccfbf1" />
      <circle cx="75" cy="80" r="26" fill="#0d9488" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#0f766e">교감신경의 만성 과항진 (액셀 고장)</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">지속적인 스트레스와 피로로 투쟁-도피 모드가 24시간 가동</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">심장이 쿵쾅거리고 혈관이 수축하며 온몸이 만성 긴장 상태에 돌입</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">👉 심장·내과 검사에서 구조적 이상이 발견되지 않는 이유입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309">부교감신경(미주신경)의 기능 저하 (브레이크 고장)</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">휴식과 이완, 소화 및 장기 회복을 담당하는 미주신경의 무력화</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">소화액 분비 감소, 위장 무력증, 숙면 불가 및 만성 피로 악순환</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 쉬어도 충전되지 않고 아침마다 천근만근 무거워집니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#ffe4e6" />
      <circle cx="75" cy="80" r="26" fill="#e11d48" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#be123c">한의학적 기전: 심담허겁(心膽虛怯) &amp; 상열하한(上熱下寒)</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">열은 머리와 가슴으로 치밀고(안면홍조, 두통, 두근거림, 눈 뻑뻑함)</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">아래쪽은 차가워지는(손발 차가움, 소화불량, 복부 냉증) 기혈 순환 정체</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#e11d48">⚠️ 단순 대증요법이 아닌 전신 순환과 뇌신경 밸런스 교정이 필수입니다.</text>
    </g>
  </g>

  <!-- Bottom Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f766e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ccfbf1" text-anchor="middle">
      💡 해아림한의원은 원인 모를 신체화 증상의 뿌리인 자율신경계를 정밀 진단합니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: POINT 02 자가진단 체크리스트 카드
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#021c1a" flood-opacity="0.08" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#061c24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#0284c7" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">자가진단 체크리스트</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "혹시 나도 자율신경실조증일까?"
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    3가지 이상 해당된다면 자율신경 정밀 검사가 필요합니다
  </text>

  <!-- Checklist Items (5 items) -->
  <g transform="translate(60, 245)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="128" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="24" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="65" y="73" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="130" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c4a6e">가슴 두근거림 · 답답함 · 이유 없는 불안감</text>
      <text x="130" y="88" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#475569">가만히 있어도 심장이 불규칙하게 뛰거나 조여오고 숨이 깊게 안 쉬어짐</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 142)">
      <rect x="0" y="0" width="960" height="128" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="24" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="65" y="73" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="130" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c4a6e">어지럼증 · 기립성 현훈 · 머리가 멍한 브레인포그</text>
      <text x="130" y="88" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#475569">앉았다 일어날 때 핑 돌거나 구름 위를 걷는 듯 붕 뜬 어지럼증 지속</text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 284)">
      <rect x="0" y="0" width="960" height="128" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="24" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="65" y="73" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="130" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c4a6e">만성 소화불량 · 위장 경련 · 과민대장증후군</text>
      <text x="130" y="88" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#475569">내시경은 깨끗한데 조금만 긴장하면 체하고 잦은 체기, 복통, 변비·설사 반복</text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 426)">
      <rect x="0" y="0" width="960" height="128" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="24" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="65" y="73" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="130" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c4a6e">체온 조절 이상 · 상열하한 (얼굴 열감 vs 수족냉증)</text>
      <text x="130" y="88" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#475569">얼굴로 열이 화끈 오르면서 식은땀이 나지만 손발은 얼음장처럼 차가움</text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 568)">
      <rect x="0" y="0" width="960" height="128" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="24" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="65" y="73" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="130" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c4a6e">수면장애 · 깊은 잠을 못 자고 자도 자도 만성 피로</text>
      <text x="130" y="88" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#475569">잠들기 어렵고 악몽을 자주 꾸며 자고 일어나도 온몸이 두들겨 맞은 듯 쑤심</text>
    </g>
  </g>

  <!-- Bottom Advice Bar -->
  <g transform="translate(60, 985)">
    <rect x="0" y="0" width="960" height="60" rx="16" fill="#0369a1" />
    <text x="480" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
      ⚠️ 복합 신체 증상은 "예민한 성격" 탓이 아닌 자율신경계의 SOS 신호입니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: POINT 03 한방 맞춤 치료 솔루션 카드
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#081e26" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#059669" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">해아림 1:1 맞춤 치료 솔루션</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    자율신경 시소 균형과 뇌 자생력 회복
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#34d399" letter-spacing="-0.5">
    신경 억제제가 아닌 근본적인 자율조절 기능의 복원
  </text>

  <!-- 4 Step Process Grid (2x2) -->
  <g transform="translate(60, 245)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="30" y="30" width="60" height="34" rx="10" fill="#ecfdf5" />
      <text x="60" y="54" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">STEP 1</text>
      
      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#064e3b">HRV 자율신경 &amp; 뇌파 정밀검사</text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 심박변이도(HRV)로 교감/부교감 활성도 측정</text>
      <text x="30" y="180" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 뇌기능 뇌파 검사 및 스트레스 저항도 평가</text>
      <text x="30" y="215" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 사상체질 및 설진·맥진으로 오장육부 불균형 진단</text>
      <rect x="30" y="255" width="405" height="50" rx="10" fill="#f0fdf4" />
      <text x="45" y="286" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">👉 보이지 않는 신경계 불균형을 수치로 시각화</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="30" y="30" width="60" height="34" rx="10" fill="#ecfdf5" />
      <text x="60" y="54" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">STEP 2</text>
      
      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#064e3b">청뇌안신(淸腦安心) 맞춤한약</text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 상초(머리·가슴)로 치미는 허열 진정</text>
      <text x="30" y="180" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 심담(心膽)의 기운을 보하여 신경 안정 유도</text>
      <text x="30" y="215" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 중초(비위)를 따뜻하게 소화 흡수력 및 기혈 정상화</text>
      <rect x="30" y="255" width="405" height="50" rx="10" fill="#f0fdf4" />
      <text x="45" y="286" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">👉 교감신경 흥분을 가라앉히고 미주신경 회복</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="30" y="30" width="60" height="34" rx="10" fill="#ecfdf5" />
      <text x="60" y="54" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">STEP 3</text>
      
      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#064e3b">두개천골 추나(CST) &amp; 약침</text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 경추 1·2번 및 후두골 긴장 해소 (미주신경로 확보)</text>
      <text x="30" y="180" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 뇌척수액 순환 촉진 및 뇌신경 압박 완화</text>
      <text x="30" y="215" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 자율신경 조절 경혈(내관·전중·신문 등) 약침 치료</text>
      <rect x="30" y="255" width="405" height="50" rx="10" fill="#f0fdf4" />
      <text x="45" y="286" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">👉 뇌와 척수 사이의 신경 압박 물리적 해소</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(495, 370)">
      <rect x="0" y="0" width="465" height="340" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="30" y="30" width="60" height="34" rx="10" fill="#ecfdf5" />
      <text x="60" y="54" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">STEP 4</text>
      
      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#064e3b">뉴로피드백 &amp; 자율신경 훈련</text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 과각성된 하이베타파 억제 및 알파/세타파 유도</text>
      <text x="30" y="180" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 호흡 동조 바이오피드백으로 심장박동 변이 최적화</text>
      <text x="30" y="215" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#334155">• 스트레스 상황에서도 스스로 이완하는 두뇌 학습</text>
      <rect x="30" y="255" width="405" height="50" rx="10" fill="#f0fdf4" />
      <text x="45" y="286" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">👉 재발을 막는 뇌 신경가소성(스스로 조절력) 훈련</text>
    </g>
  </g>

  <!-- Bottom Bar -->
  <g transform="translate(60, 985)">
    <rect x="0" y="0" width="960" height="60" rx="16" fill="#047857" />
    <text x="480" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
      🌿 1:1 맞춤 한방 치료는 양약 감량(테이퍼링)과 내성 없는 근본 치유를 돕습니다
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: POINT 04 일상 생활 속 힐링 실천 팁 카드
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#061c28" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#f59e0b" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">생활 속 자율신경 회복 루틴</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "의지에 기대지 않는 자율신경 힐링 팁"
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#fbbf24" letter-spacing="-0.5">
    일상에서 교감신경을 끄고 부교감신경을 깨우는 3가지 실천법
  </text>

  <!-- 3 Big Tips -->
  <g transform="translate(60, 245)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <text x="75" y="87" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">TIP 1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">4·7·8 복식호흡 &amp; 횡격막 이완 (미주신경 자극)</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">4초간 코로 숨을 깊이 마시고, 7초간 멈추고, 8초간 입으로 천천히 내쉽니다.</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">숨을 길게 내쉴 때 미주신경이 자극되어 심박수가 내려가고 긴장이 풀립니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 아침 기상 직후와 잠들기 전 5분씩 매일 실천하세요.</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <text x="75" y="87" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">TIP 2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">취침 전 따뜻한 족욕 / 반신욕 (상열하한 해소)</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">38~40℃ 따뜻한 물에 15~20분간 발이나 몸을 담가 혈류 순환을 촉진합니다.</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">머리와 가슴의 열을 아래로 끌어내려 손발을 덥히고 깊은 숙면을 유도합니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 물 온도가 너무 뜨거우면 교감신경이 흥분되니 미온수가 적당합니다.</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <text x="75" y="87" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">TIP 3</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">카페인 컷오프 &amp; 취침 1시간 전 디지털 디톡스</text>
      <text x="140" y="110" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">오후 2시 이후 커피·에너지음료는 교감신경을 자극해 뇌를 강제 각성시킵니다.</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">잠들기 1시간 전 스마트폰 블루라이트를 차단해 천연 멜라토닌 분비를 돕습니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 미온수 수분 섭취와 은은한 간접 조명으로 수면 환경을 만드세요.</text>
    </g>
  </g>

  <!-- Bottom Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#b45309" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      🌱 작은 생활 습관의 변화가 무너진 자율신경계를 바로세우는 첫걸음입니다
    </text>
  </g>
</svg>
  `;
}

async function renderCards() {
  const cards = [
    {
      naverName: '01_naver_main_thumbnail.jpg',
      namedName: '01_bucheon_autonomic_main_thumbnail.png',
      svg: generateMainThumbnail()
    },
    {
      naverName: '02_point1_cause.jpg',
      namedName: '02_bucheon_autonomic_point1_cause.png',
      svg: generateCard1()
    },
    {
      naverName: '03_point2_checklist.jpg',
      namedName: '03_bucheon_autonomic_point2_checklist.png',
      svg: generateCard2()
    },
    {
      naverName: '04_point3_treatment.jpg',
      namedName: '04_bucheon_autonomic_point3_treatment.png',
      svg: generateCard3()
    },
    {
      naverName: '05_point4_selfcare.jpg',
      namedName: '05_bucheon_autonomic_point4_selfcare.png',
      svg: generateCard4()
    }
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

    // 1) Save to specific subfolder: static/blog-images/bucheon-autonomic/
    const subfolder = 'c:/Users/PC/Downloads/home/static/blog-images/bucheon-autonomic';
    fs.writeFileSync(path.join(subfolder, card.naverName), pngBuffer);
    fs.writeFileSync(path.join(subfolder, card.namedName), pngBuffer);

    // 2) Save to root static/blog-images/
    const rootFolder = 'c:/Users/PC/Downloads/home/static/blog-images';
    fs.writeFileSync(path.join(rootFolder, card.naverName), pngBuffer);
    fs.writeFileSync(path.join(rootFolder, card.namedName), pngBuffer);

    console.log(`✅ 생성 완료: ${card.naverName} & ${card.namedName} (${pngBuffer.length} bytes)`);
  }
}

renderCards().catch(console.error);
