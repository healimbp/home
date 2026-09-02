import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-dizziness',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일 카드 1080x1080)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081822" />
      <stop offset="50%" stop-color="#0c2d28" />
      <stop offset="100%" stop-color="#051614" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="pointGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#115e59" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌀 자율신경 &amp; 만성 어지럼증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        MRI·이비인후과 검사 정상인데 머리가 빙빙 도나요?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 어지럼증 원인과 1:1 맞춤 한방 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#527065">
      자율신경실조증 · 경추성 어지럼 · 심인성 뇌 혈류 장애 완벽 정복
    </text>

    <!-- 3 Key Insight Boxes -->
    <g transform="translate(55, 240)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="270" height="235" rx="20" fill="#f4faf7" stroke="#d0e6dc" stroke-width="1.5" />
        <circle cx="45" cy="45" r="22" fill="#0d9488" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">01</text>
        <text x="80" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#133e35">원인 분석</text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e">자율신경 &amp; 뇌간 과열</text>
        <text x="25" y="140" font-family="${fontFamilies}" font-size="15" fill="#556e64" line-height="1.6">
          <tspan x="25" dy="0">• 전정신경계 감각 불일치</tspan>
          <tspan x="25" dy="25">• 상부 경추 추골동맥 압박</tspan>
          <tspan x="25" dy="25">• 교감신경 과항진 혈관수축</tspan>
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(295, 0)">
        <rect x="0" y="0" width="270" height="235" rx="20" fill="#f4faf7" stroke="#d0e6dc" stroke-width="1.5" />
        <circle cx="45" cy="45" r="22" fill="#0d9488" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">02</text>
        <text x="80" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#133e35">자가진단</text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e">5대 전조 증상 체크</text>
        <text x="25" y="140" font-family="${fontFamilies}" font-size="15" fill="#556e64">
          <tspan x="25" dy="0">• 일어설 때 눈앞 캄캄</tspan>
          <tspan x="25" dy="25">• 구름 위 걷는 듯 붕 뜸</tspan>
          <tspan x="25" dy="25">• 두통·이명·메스꺼움 동반</tspan>
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(590, 0)">
        <rect x="0" y="0" width="270" height="235" rx="20" fill="#f4faf7" stroke="#d0e6dc" stroke-width="1.5" />
        <circle cx="45" cy="45" r="22" fill="#0d9488" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">03</text>
        <text x="80" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#133e35">치료 솔루션</text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e">1:1 맞춤 한방 치료</text>
        <text x="25" y="140" font-family="${fontFamilies}" font-size="15" fill="#556e64">
          <tspan x="25" dy="0">• 청뇌안신 맞춤 탕약</tspan>
          <tspan x="25" dy="25">• SGB 약침 &amp; 경추 추나</tspan>
          <tspan x="25" dy="25">• NeuronFlex 전정재활</tspan>
        </text>
      </g>
    </g>

    <!-- Clinic Summary Banner -->
    <g transform="translate(55, 510)">
      <rect x="0" y="0" width="860" height="175" rx="20" fill="url(#pointGrad)" />
      
      <text x="40" y="48" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff">
        👨‍⚕️ "단순 어지럼증 억제제가 아닌, 뇌 혈류와 평형 신경 자생력을 되살립니다"
      </text>
      <text x="40" y="88" font-family="${fontFamilies}" font-size="16" fill="#cbeae1" line-height="1.6">
        <tspan x="40" dy="0">부천(상동·중동·신중동·송내동) 및 인천 생활권에서 이비인후과·신경과 검사상 원인을 찾지 못해</tspan>
        <tspan x="40" dy="26">만성 어지럼증과 불안감으로 일상을 잃어버린 분들을 위한 과학적 한방 신경 솔루션입니다.</tspan>
      </text>
      <g transform="translate(40, 130)">
        <rect x="0" y="0" width="310" height="30" rx="6" fill="#ffffff" opacity="0.15" />
        <text x="12" y="20" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff">
          ✓ 한방침구과 전문의 권형근 대표원장 1:1 진료
        </text>
      </g>
    </g>

    <!-- Footer Brand Strip -->
    <g transform="translate(55, 725)">
      <rect x="0" y="0" width="860" height="110" rx="16" fill="#f8faf9" stroke="#e6eee9" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점
      </text>
      <text x="35" y="78" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#4d695e">
        📍 부평역 7번 출구 도보 5분 (경원대로 1412, 2층) | 📞 032-719-3472
      </text>
      <g transform="translate(620, 32)">
        <rect x="0" y="0" width="205" height="46" rx="23" fill="#0d9488" />
        <text x="102" y="29" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">
          월·수·금 야간진료
        </text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 분석 카드 1080x1080)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081822" />
      <stop offset="50%" stop-color="#0c2d28" />
      <stop offset="100%" stop-color="#051614" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 65)">
    <rect x="-180" y="0" width="360" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔍 POINT 01. 병리 기전</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="70" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      검사상 이상 없는 어지럼증, 왜 발생할까요?
    </text>
    <text x="55" y="110" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#527065">
      뇌간 전정신경핵 불균형과 자율신경계 과흥분이 만들어내는 복합 신호
    </text>

    <!-- 3 Step Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="95" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          전정감각과 시각·체성감각의 3차원 불일치
        </text>
        <text x="95" y="95" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">귀(전정기관), 눈(시각), 목·발바닥(고유수용감각) 3곳의 신호가 뇌간에서</tspan>
          <tspan x="95" dy="26">하나로 통합되지 못해 뇌가 공간을 왜곡 인식하며 붕 뜨는 어지럼증 유발</tspan>
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="95" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          상부 경추(C1-C2) 긴장과 추골동맥 뇌혈류 저하
        </text>
        <text x="95" y="95" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">일자목, 거북목, 턱관절 불균형으로 인해 뒷목을 지나 뇌로 들어가는</tspan>
          <tspan x="95" dy="26">추골동맥 혈류량이 급감하여 소뇌와 전정신경계에 산소 공급 부족 초래</tspan>
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="95" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          자율신경실조증과 심인성 과호흡 악순환
        </text>
        <text x="95" y="95" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">만성 스트레스와 피로로 교감신경이 과열되면 혈관이 수축되고,</tspan>
          <tspan x="95" dy="26">'또 쓰러질까 봐' 생기는 불안감이 어지럼증을 24시간 만성화시킴</tspan>
        </text>
      </g>
    </g>

    <!-- Bottom Advice -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef7f4" />
      <text x="30" y="44" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        💡 이비인후과에서 '이상 없다'는 진단을 받아도 자율신경과 경추 혈류를 바로잡으면 완치 가능합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (체크리스트 카드 1080x1080)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081822" />
      <stop offset="50%" stop-color="#0c2d28" />
      <stop offset="100%" stop-color="#051614" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 자가진단</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="70" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      진료실 만성 어지럼증 5대 자가진단 체크리스트
    </text>
    <text x="55" y="110" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#527065">
      3개 이상 해당된다면 신경계 자생력 회복 치료가 시급합니다
    </text>

    <!-- Checklist 5 Items -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="28" width="48" height="48" rx="12" fill="#0d9488" />
        <text x="49" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">앉았다 일어서거나 고개를 돌릴 때 핑 돌고 아찔하다</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="15" fill="#5c786d">기립성 저혈압 및 경추성 전정 혈류 저하 의심</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 125)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="28" width="48" height="48" rx="12" fill="#0d9488" />
        <text x="49" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">구름 위를 걷는 듯 몸이 붕 뜨고 중심을 잡기 어렵다</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="15" fill="#5c786d">체성감각 불일치 및 뇌간 평형 기능 저하</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 250)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="28" width="48" height="48" rx="12" fill="#0d9488" />
        <text x="49" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">어지러울 때 메스꺼움, 식은땀, 가슴 두근거림이 동반된다</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="15" fill="#5c786d">미주신경성 자율신경 과흥분 반응</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 375)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="28" width="48" height="48" rx="12" fill="#0d9488" />
        <text x="49" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">조용한 곳이나 피곤할 때 귀에서 삐- 소리나 매미 소리가 난다</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="15" fill="#5c786d">신경성 이명 및 내이 림프액 순환 장애</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 500)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="28" width="48" height="48" rx="12" fill="#0d9488" />
        <text x="49" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">사람 많은 대형마트나 복잡한 곳에 가면 증상이 더 심해진다</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="15" fill="#5c786d">시각성 어지럼 및 심인성 공황 예기불안 동반</text>
      </g>
    </g>

    <!-- Bottom Result Info -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="14" fill="#0c2d28" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        🏥 방치 시 공황장애나 만성 우울감으로 악화되므로 조기 1:1 맞춤 치료가 필수입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (치료 솔루션 카드 1080x1080)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081822" />
      <stop offset="50%" stop-color="#0c2d28" />
      <stop offset="100%" stop-color="#051614" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 POINT 03. 한방 치료법</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="70" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      해아림한의원 1:1 맞춤 뇌신경·자율신경 솔루션
    </text>
    <text x="55" y="110" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#527065">
      근본적인 뇌 혈류 회복과 자율신경 조절력 강화 4단계 프로그램
    </text>

    <!-- 4 Step Solution Grid -->
    <g transform="translate(55, 150)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="32" rx="16" fill="#0d9488" />
        <text x="67" y="47" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 01</text>
        <text x="25" y="90" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">청뇌안신 맞춤 탕약</text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="15" fill="#4d695e">
          <tspan x="25" dy="0">• 간열(肝熱)과 심화(心火) 진정</tspan>
          <tspan x="25" dy="24">• 전정신경계 염증 및 부종 완화</tspan>
          <tspan x="25" dy="24">• 뇌 미세혈관 혈류 공급 촉진</tspan>
          <tspan x="25" dy="24">• 식약처 GMP 인증 최고급 한약재</tspan>
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="32" rx="16" fill="#0d9488" />
        <text x="67" y="47" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 02</text>
        <text x="25" y="90" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">SGB 성상신경절 약침</text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="15" fill="#4d695e">
          <tspan x="25" dy="0">• 경추 부위 자율신경절 직접 자극</tspan>
          <tspan x="25" dy="24">• 과항진된 교감신경 즉각 이완</tspan>
          <tspan x="25" dy="24">• 뇌혈류 150% 개선 특효 경혈</tspan>
          <tspan x="25" dy="24">• 순수 생약 성분 청열 약침액</tspan>
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="32" rx="16" fill="#0d9488" />
        <text x="67" y="47" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 03</text>
        <text x="25" y="90" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">두개천골 CST &amp; 추나</text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="15" fill="#4d695e">
          <tspan x="25" dy="0">• 상부 경추(C1-C2) 정렬 교정</tspan>
          <tspan x="25" dy="24">• 턱관절 FCST 균형 치료</tspan>
          <tspan x="25" dy="24">• 뇌척수액 순환 및 미주신경 소통</tspan>
          <tspan x="25" dy="24">• 추골동맥 물리적 압박 완전 해소</tspan>
        </text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(445, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="32" rx="16" fill="#0d9488" />
        <text x="67" y="47" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 04</text>
        <text x="25" y="90" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">NeuronFlex 전정재활</text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="15" fill="#4d695e">
          <tspan x="25" dy="0">• 1/1,000초 정밀 감각통합 훈련</tspan>
          <tspan x="25" dy="24">• 시각-전정 반사(VOR) 신경 강화</tspan>
          <tspan x="25" dy="24">• 실시간 뉴로피드백 뇌파 안정</tspan>
          <tspan x="25" dy="24">• 치료 후 재발 방지 두뇌 훈련</tspan>
        </text>
      </g>
    </g>

    <!-- Bottom Badge -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="70" rx="14" fill="#f0f9f6" stroke="#cde4da" stroke-width="1.5" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        ✨ 신경안정제 의존 없이 인체 스스로 균형을 유지하는 자생력을 완성합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 관리 카드 1080x1080)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081822" />
      <stop offset="50%" stop-color="#0c2d28" />
      <stop offset="100%" stop-color="#051614" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 04. 생활 실천 팁</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="70" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      진료실에서 권하는 일상 어지럼증 완화 루틴 3가지
    </text>
    <text x="55" y="110" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#527065">
      오늘부터 바로 시작할 수 있는 신경계 안정 생활 습관
    </text>

    <!-- 3 Lifestyle Tips -->
    <g transform="translate(55, 150)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="185" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="95" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          상체 일으킬 때 '3초 멈춤' 기립 습관
        </text>
        <text x="95" y="92" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">아침에 눈을 뜨거나 누웠다 일어날 때 바로 벌떡 일어나지 마세요.</tspan>
          <tspan x="95" dy="26">침대에 3초간 걸터앉아 심호흡을 한 뒤 천천히 일어서면 뇌혈류 급감</tspan>
          <tspan x="95" dy="26">및 기립성 어지럼증을 80% 이상 예방할 수 있습니다.</tspan>
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 210)">
        <rect x="0" y="0" width="860" height="185" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="95" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          후두하근(뒷목 관절) 온찜질 및 턱 당기기 스트레칭
        </text>
        <text x="95" y="92" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">머리와 목이 만나는 뒷머리 아래 움푹 들어간 곳을 따뜻한 수건으로</tspan>
          <tspan x="95" dy="26">10분간 찜질하고, 턱을 가슴 쪽으로 당겨주는 친턱(Chin-tuck) 운동으로</tspan>
          <tspan x="95" dy="26">추골동맥을 누르는 경추 긴장을 부드럽게 이완하세요.</tspan>
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 420)">
        <rect x="0" y="0" width="860" height="185" rx="20" fill="#f8faf9" stroke="#d5e8df" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#0d9488" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="95" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          미온수 1.5L 수분 충전 &amp; 고카페인 음료 차단
        </text>
        <text x="95" y="92" font-family="${fontFamilies}" font-size="16" fill="#4d695e">
          <tspan x="95" dy="0">혈류량 부족은 어지럼증의 직격탄입니다. 하루 1.5L 이상의 미온수를</tspan>
          <tspan x="95" dy="26">자주 나누어 마시고, 뇌혈관을 과도하게 수축시키는 카페인(커피·에너지음료)</tspan>
          <tspan x="95" dy="26">섭취를 오후 이후에는 철저히 피해주세요.</tspan>
        </text>
      </g>
    </g>

    <!-- Bottom Quote -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="14" fill="#eef7f4" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e" text-anchor="middle">
        🌿 일상 속 작은 루틴과 정밀 한방 치료가 만나면 흔들리던 세상이 다시 고요해집니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, fileName) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const destPath = path.join(dir, fileName);
    fs.writeFileSync(destPath, pngBuffer);
    console.log(`✅ [Rendered] ${destPath}`);
  }
}

async function main() {
  console.log('🚀 Generating Bucheon Dizziness 5 Visual Cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('🎉 All 5 cards generated successfully!');
}

main().catch(err => {
  console.error('❌ Error generating cards:', err);
  process.exit(1);
});
