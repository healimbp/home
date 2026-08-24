import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const artifactDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/d39330cd-e601-46ea-be8a-8476bf5720ef';
const staticDir = 'c:/Users/PC/Downloads/home/static/blog-images';

function getBase64Image(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/jpeg;base64,${fileBuffer.toString('base64')}`;
}

const fontFamilies = "'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Pretendard', sans-serif";

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 1. MAIN THUMBNAIL SVG (Variant A: Editorial Minimalist)
function generateMainThumbnailSvg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#042f2e" flood-opacity="0.18" />
    </filter>
    <filter id="bottomShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <linearGradient id="topOverlay" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96" />
      <stop offset="38%" stop-color="#ffffff" stop-opacity="0.82" />
      <stop offset="75%" stop-color="#f4f9f8" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#f4f9f8" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="bottomOverlay" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#062320" stop-opacity="0.94" />
      <stop offset="45%" stop-color="#0f3a36" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#0f3a36" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#0d9488" />
    </linearGradient>
  </defs>

  <!-- Base Artwork -->
  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />

  <!-- Top Soft Gradient for Readability -->
  <rect x="0" y="0" width="1080" height="400" fill="url(#topOverlay)" />
  
  <!-- Bottom Gradient -->
  <rect x="0" y="700" width="1080" height="380" fill="url(#bottomOverlay)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 75)">
    <rect x="-160" y="0" width="320" height="44" rx="22" fill="url(#badgeGrad)" filter="url(#subtleShadow)" />
    <text x="0" y="28" font-family="${fontFamilies}" font-size="17" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">🌿 한방신경정신과 건강 칼럼</text>
  </g>

  <!-- Hook Subtitle -->
  <text x="540" y="175" font-family="${fontFamilies}" font-size="28" font-weight="700" fill="#0f766e" text-anchor="middle" letter-spacing="-0.5">
    빙빙 돌고 흔들리는 세상
  </text>

  <!-- Main Title -->
  <text x="540" y="242" font-family="${fontFamilies}" font-size="45" font-weight="900" fill="#042f2e" text-anchor="middle" letter-spacing="-1.5">
    몸의 균형을 되찾는 자생력 회복 솔루션
  </text>

  <!-- Subtitle / Tagline -->
  <text x="540" y="292" font-family="${fontFamilies}" font-size="21" font-weight="600" fill="#475569" text-anchor="middle" letter-spacing="-0.2">
    10년 차 한의사가 전하는 어지럼증 치유 이야기
  </text>

  <!-- Bottom Info Card (Centered & Polished) -->
  <g transform="translate(90, 895)">
    <rect x="0" y="0" width="900" height="110" rx="24" fill="rgba(15, 58, 54, 0.88)" stroke="rgba(255, 255, 255, 0.22)" stroke-width="1.5" filter="url(#bottomShadow)" />
    
    <!-- Clinic Logo Symbol -->
    <circle cx="68" cy="55" r="26" fill="#0d9488" />
    <text x="68" y="63" font-family="${fontFamilies}" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">H</text>
    
    <!-- Clinic Name & Features -->
    <text x="115" y="47" font-family="${fontFamilies}" font-size="22" font-weight="800" fill="#ffffff">해아림한의원 1:1 맞춤 어지럼증 클리닉</text>
    <text x="115" y="78" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#99f6e4">뇌 혈류 순환 개선 ｜ 자율신경 밸런스 ｜ 체질 맞춤 한약</text>
  </g>
</svg>
  `;
}

// 1-B. MAIN THUMBNAIL SVG (Variant B: Frosted Center-Bottom Card)
function generateMainThumbnailCardSvg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="centerCardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#021c1a" flood-opacity="0.35" />
    </filter>
    <linearGradient id="badgeGrad2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f766e" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
  </defs>

  <!-- Base Artwork -->
  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />

  <!-- Top Simple Brand Pill -->
  <g transform="translate(540, 60)">
    <rect x="-140" y="0" width="280" height="42" rx="21" fill="rgba(255, 255, 255, 0.88)" stroke="rgba(15, 118, 110, 0.2)" stroke-width="1" />
    <text x="0" y="27" font-family="${fontFamilies}" font-size="16" font-weight="800" fill="#0f766e" text-anchor="middle">🌿 해아림 건강 칼럼</text>
  </g>

  <!-- Center-Bottom Floating Glassmorphism Hero Card -->
  <g transform="translate(70, 640)">
    <rect x="0" y="0" width="940" height="370" rx="28" fill="rgba(9, 38, 34, 0.92)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5" filter="url(#centerCardShadow)" />
    
    <!-- Subtitle Hook -->
    <text x="60" y="70" font-family="${fontFamilies}" font-size="24" font-weight="700" fill="#5eead4" letter-spacing="-0.5">
      빙빙 돌고 흔들리는 세상
    </text>

    <!-- Main Title -->
    <text x="60" y="140" font-family="${fontFamilies}" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-1.5">
      몸의 균형을 되찾는 자생력 회복 솔루션
    </text>

    <!-- Description -->
    <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#cbd5e1" letter-spacing="-0.2">
      10년 차 한의사가 전하는 어지럼증 치유 이야기
    </text>

    <line x1="60" y1="235" x2="880" y2="235" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1" />

    <!-- Bottom Features & Clinic Info -->
    <g transform="translate(60, 270)">
      <circle cx="24" cy="24" r="22" fill="#14b8a6" />
      <text x="24" y="32" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle">H</text>
      
      <text x="60" y="24" font-family="${fontFamilies}" font-size="20" font-weight="800" fill="#ffffff">해아림한의원</text>
      <text x="60" y="47" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#99f6e4">뇌 혈류 개선 ｜ 자율신경 밸런스 ｜ 비회전성 어지럼증 클리닉</text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: 원인에 대한 새로운 시각
function generateCard1Svg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow1" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0f2f2c" flood-opacity="0.25" />
    </filter>
    <linearGradient id="c1Top" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.88" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="c1Bottom" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#092622" stop-opacity="0.94" />
      <stop offset="50%" stop-color="#0f3a36" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0f3a36" stop-opacity="0" />
    </linearGradient>
  </defs>

  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />
  <rect x="0" y="0" width="1080" height="380" fill="url(#c1Top)" />
  <rect x="0" y="650" width="1080" height="430" fill="url(#c1Bottom)" />

  <!-- Step Badge -->
  <g transform="translate(80, 70)">
    <rect x="0" y="0" width="120" height="38" rx="19" fill="#0f766e" />
    <text x="60" y="25" font-family="${fontFamilies}" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">CARD 01</text>
  </g>

  <!-- Title Area -->
  <text x="80" y="160" font-family="${fontFamilies}" font-size="24" font-weight="700" fill="#0d9488">01. 원인에 대한 새로운 시각</text>
  <text x="80" y="225" font-family="${fontFamilies}" font-size="38" font-weight="900" fill="#042f2e" letter-spacing="-1">
    “검사는 정상인데 왜 자꾸 흔들릴까요?”
  </text>

  <!-- Bottom Key Message Box -->
  <g transform="translate(80, 740)">
    <rect x="0" y="0" width="920" height="260" rx="24" fill="rgba(15, 58, 54, 0.85)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" filter="url(#cardShadow1)" />
    
    <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="700" fill="#5eead4">💡 흔들림의 숨겨진 원인</text>
    <text x="50" y="115" font-family="${fontFamilies}" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      뇌 혈류 저하와 자율신경계 과부하의 신호!
    </text>
    <text x="50" y="165" font-family="${fontFamilies}" font-size="19" font-weight="500" fill="#e2e8f0" line-height="1.6">
      만성 피로와 스트레스로 교감신경이 과도하게 항진되면 목과 어깨가 굳어
    </text>
    <text x="50" y="198" font-family="${fontFamilies}" font-size="19" font-weight="500" fill="#e2e8f0">
      뇌로 가는 혈관을 압박해 중심을 잡지 못하는 감각 이상이 생깁니다.
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: 한의학적 전신 원인 진단
function generateCard2Svg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="c2Shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#000000" flood-opacity="0.3" />
    </filter>
    <linearGradient id="c2Top" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="c2Bottom" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#042f2e" stop-opacity="0.95" />
      <stop offset="50%" stop-color="#0f3a36" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0f3a36" stop-opacity="0" />
    </linearGradient>
  </defs>

  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />
  <rect x="0" y="0" width="1080" height="340" fill="url(#c2Top)" />
  <rect x="0" y="600" width="1080" height="480" fill="url(#c2Bottom)" />

  <!-- Step Badge -->
  <g transform="translate(80, 65)">
    <rect x="0" y="0" width="120" height="38" rx="19" fill="#0f766e" />
    <text x="60" y="25" font-family="${fontFamilies}" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">CARD 02</text>
  </g>

  <!-- Title Area -->
  <text x="80" y="150" font-family="${fontFamilies}" font-size="24" font-weight="700" fill="#0d9488">02. 한의학적 전신 원인 진단</text>
  <text x="80" y="210" font-family="${fontFamilies}" font-size="36" font-weight="900" fill="#042f2e" letter-spacing="-1">
    뇌와 귀의 문제로만 국한하지 않습니다!
  </text>

  <!-- 3 Types Grid Box at Bottom -->
  <g transform="translate(80, 650)">
    <rect x="0" y="0" width="920" height="360" rx="24" fill="rgba(15, 58, 54, 0.9)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" filter="url(#c2Shadow)" />
    
    <text x="50" y="55" font-family="${fontFamilies}" font-size="22" font-weight="800" fill="#5eead4">🔍 3가지 핵심 신체 불균형 유형</text>
    
    <!-- Item 1: 담훈 -->
    <g transform="translate(50, 85)">
      <rect x="0" y="0" width="820" height="68" rx="14" fill="rgba(255, 255, 255, 0.08)" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="19" font-weight="800" fill="#fde047">담훈(痰暈)</text>
      <text x="145" y="42" font-family="${fontFamilies}" font-size="17" font-weight="500" fill="#ffffff">위장 기능 저하로 노폐물(담음) 정체 ➔ 속 메스꺼움, 머리 무거움</text>
    </g>

    <!-- Item 2: 기혈양허 -->
    <g transform="translate(50, 165)">
      <rect x="0" y="0" width="820" height="68" rx="14" fill="rgba(255, 255, 255, 0.08)" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="19" font-weight="800" fill="#fde047">기혈양허(氣血兩虛)</text>
      <text x="200" y="42" font-family="${fontFamilies}" font-size="17" font-weight="500" fill="#ffffff">만성 피로·영양 부족 ➔ 뇌 영양 결핍, 기립 시 아찔함</text>
    </g>

    <!-- Item 3: 간양상항 -->
    <g transform="translate(50, 245)">
      <rect x="0" y="0" width="820" height="68" rx="14" fill="rgba(255, 255, 255, 0.08)" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="19" font-weight="800" fill="#fde047">간양상항(肝陽上亢)</text>
      <text x="200" y="42" font-family="${fontFamilies}" font-size="17" font-weight="500" fill="#ffffff">스트레스로 간의 화기 상승 ➔ 열감, 두통, 이명 동반 어지럼</text>
    </g>

    <!-- Bottom summary banner -->
    <text x="460" y="340" font-family="${fontFamilies}" font-size="18" font-weight="800" fill="#99f6e4" text-anchor="middle">
      ✨ 몸과 뇌를 하나로 잇는 전신 순환 치료로 근본을 다스립니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: 한방 치료의 뛰어난 우수성
function generateCard3Svg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="c3Shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <linearGradient id="c3Top" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.88" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="c3Bottom" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#042f2e" stop-opacity="0.94" />
      <stop offset="50%" stop-color="#0f3a36" stop-opacity="0.82" />
      <stop offset="100%" stop-color="#0f3a36" stop-opacity="0" />
    </linearGradient>
  </defs>

  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />
  <rect x="0" y="0" width="1080" height="380" fill="url(#c3Top)" />
  <rect x="0" y="640" width="1080" height="440" fill="url(#c3Bottom)" />

  <!-- Step Badge -->
  <g transform="translate(80, 65)">
    <rect x="0" y="0" width="120" height="38" rx="19" fill="#0f766e" />
    <text x="60" y="25" font-family="${fontFamilies}" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">CARD 03</text>
  </g>

  <!-- Title Area -->
  <text x="80" y="155" font-family="${fontFamilies}" font-size="24" font-weight="700" fill="#0d9488">03. 한방 치료의 뛰어난 우수성</text>
  <text x="80" y="215" font-family="${fontFamilies}" font-size="34" font-weight="900" fill="#042f2e" letter-spacing="-1">
    억지로 감각을 둔화시키는 진정이 아닙니다
  </text>
  <text x="80" y="260" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
    신경계를 억누르지 않고, 스스로 균형을 잡는 힘을 길러줍니다.
  </text>

  <!-- Bottom Treatment Point Box -->
  <g transform="translate(80, 700)">
    <rect x="0" y="0" width="920" height="300" rx="24" fill="rgba(15, 58, 54, 0.88)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5" filter="url(#c3Shadow)" />
    
    <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="800" fill="#5eead4">🌿 해아림 자생력 회복 솔루션</text>
    <text x="50" y="115" font-family="${fontFamilies}" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      뇌신경계 자생력을 길러 약물 의존성 없는 일상 복귀
    </text>

    <!-- 3 Pillars -->
    <g transform="translate(50, 150)">
      <rect x="0" y="0" width="260" height="110" rx="16" fill="rgba(255, 255, 255, 0.1)" />
      <text x="130" y="42" font-family="${fontFamilies}" font-size="18" font-weight="800" fill="#fde047" text-anchor="middle">체질 맞춤 청뇌 한약</text>
      <text x="130" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ffffff" text-anchor="middle">노폐물 담음 배출</text>
      <text x="130" y="95" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ccfbf1" text-anchor="middle">뇌 혈류 순환 개선</text>
    </g>

    <g transform="translate(330, 150)">
      <rect x="0" y="0" width="260" height="110" rx="16" fill="rgba(255, 255, 255, 0.1)" />
      <text x="130" y="42" font-family="${fontFamilies}" font-size="18" font-weight="800" fill="#fde047" text-anchor="middle">경추 이완 침구 요법</text>
      <text x="130" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ffffff" text-anchor="middle">뒷목·어깨 긴장 해소</text>
      <text x="130" y="95" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ccfbf1" text-anchor="middle">척추 신경 압박 완화</text>
    </g>

    <g transform="translate(610, 150)">
      <rect x="0" y="0" width="260" height="110" rx="16" fill="rgba(255, 255, 255, 0.1)" />
      <text x="130" y="42" font-family="${fontFamilies}" font-size="18" font-weight="800" fill="#fde047" text-anchor="middle">자율신경 밸런스</text>
      <text x="130" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ffffff" text-anchor="middle">교감신경 안정화</text>
      <text x="130" y="95" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#ccfbf1" text-anchor="middle">회복 탄력성 강화</text>
    </g>
  </g>
</svg>
  `;
}

// 5. CARD 4: 회복을 향한 희망 메시지
function generateCard4Svg(base64Bg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="c4Shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.3" />
    </filter>
    <linearGradient id="c4Top" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="c4Bottom" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#042f2e" stop-opacity="0.95" />
      <stop offset="50%" stop-color="#0f3a36" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#0f3a36" stop-opacity="0" />
    </linearGradient>
  </defs>

  <image href="${base64Bg}" x="0" y="0" width="1080" height="1080" preserveAspectRatio="xMidYMid slice" />
  <rect x="0" y="0" width="1080" height="340" fill="url(#c4Top)" />
  <rect x="0" y="620" width="1080" height="460" fill="url(#c4Bottom)" />

  <!-- Step Badge -->
  <g transform="translate(80, 65)">
    <rect x="0" y="0" width="120" height="38" rx="19" fill="#0f766e" />
    <text x="60" y="25" font-family="${fontFamilies}" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">CARD 04</text>
  </g>

  <!-- Title Area -->
  <text x="80" y="150" font-family="${fontFamilies}" font-size="24" font-weight="700" fill="#0d9488">04. 회복을 향한 희망 메시지</text>
  <text x="80" y="210" font-family="${fontFamilies}" font-size="36" font-weight="900" fill="#042f2e" letter-spacing="-1">
    무너진 몸의 조화를 맞추면 맑은 머리를 되찾습니다
  </text>

  <!-- Bottom Message Box -->
  <g transform="translate(80, 670)">
    <rect x="0" y="0" width="920" height="330" rx="24" fill="rgba(15, 58, 54, 0.9)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5" filter="url(#c4Shadow)" />
    
    <text x="460" y="65" font-family="${fontFamilies}" font-size="22" font-weight="700" fill="#5eead4" text-anchor="middle">✨ 흔들림 없는 내일을 약속합니다</text>
    <text x="460" y="125" font-family="${fontFamilies}" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="-1" text-anchor="middle">
      다시 평온하고 안정된 일상으로 돌아갈 수 있습니다.
    </text>

    <text x="460" y="180" font-family="${fontFamilies}" font-size="18" font-weight="500" fill="#e2e8f0" text-anchor="middle">
      세상이 흔들리고 머릿속이 뿌옇게 흐려질 때 혼자 불안해하지 마세요.
    </text>
    <text x="460" y="212" font-family="${fontFamilies}" font-size="18" font-weight="500" fill="#e2e8f0" text-anchor="middle">
      몸이 보내는 신호에 귀 기울이면 우리 몸은 본래의 맑은 균형을 회복합니다.
    </text>

    <line x1="160" y1="245" x2="760" y2="245" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" />
    
    <text x="460" y="285" font-family="${fontFamilies}" font-size="20" font-weight="800" fill="#fde047" text-anchor="middle">
      10년 임상 신경정신과 전문 ｜ 해아림한의원
    </text>
  </g>
</svg>
  `;
}

// MAIN EXECUTION
async function main() {
  const images = [
    {
      name: '01_dizziness_main_thumbnail',
      bgFile: `${artifactDir}/dizziness_thumbnail_art_1787538752256.jpg`,
      svgFn: generateMainThumbnailSvg
    },
    {
      name: '01_dizziness_main_thumbnail_card',
      bgFile: `${artifactDir}/dizziness_thumbnail_art_1787538752256.jpg`,
      svgFn: generateMainThumbnailCardSvg
    },
    {
      name: '02_dizziness_point1_cause',
      bgFile: `${artifactDir}/dizziness_card1_cause_1787538801029.jpg`,
      svgFn: generateCard1Svg
    },
    {
      name: '03_dizziness_point2_pattern',
      bgFile: `${artifactDir}/dizziness_card2_holistic_1787538819372.jpg`,
      svgFn: generateCard2Svg
    },
    {
      name: '04_dizziness_point3_treatment',
      bgFile: `${artifactDir}/dizziness_card3_balance_1787538834828.jpg`,
      svgFn: generateCard3Svg
    },
    {
      name: '05_dizziness_point4_recovery',
      bgFile: `${artifactDir}/dizziness_card4_hope_1787538850321.jpg`,
      svgFn: generateCard4Svg
    }
  ];

  for (const item of images) {
    console.log(`Rendering ${item.name}...`);
    const base64Bg = getBase64Image(item.bgFile);
    const svg = item.svgFn(base64Bg);

    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1080 },
      font: {
        loadSystemFonts: true,
        defaultFontFamily: 'Malgun Gothic'
      }
    });
    const pngData = resvg.render().asPng();

    // Save to artifact directory
    const artifactOut = path.join(artifactDir, `${item.name}.png`);
    fs.writeFileSync(artifactOut, pngData);

    // Save to static/blog-images
    const staticOut = path.join(staticDir, `${item.name}.png`);
    fs.writeFileSync(staticOut, pngData);

    console.log(`Saved: ${artifactOut} & ${staticOut} (${pngData.length} bytes)`);
  }
  console.log('All images rendered successfully!');
}

main().catch(console.error);
