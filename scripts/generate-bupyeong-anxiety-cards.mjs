import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-anxiety',
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
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 불안장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="550" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        이유 없는 초조함과 끝없는 걱정 · 가슴 두근거림
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부평 불안장애 원인과 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      과열된 편도체를 진정시키고 자율신경 밸런스를 회복합니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 과흥분 &amp; 교감신경 긴장</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 신경계의 경보 오류 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">가슴 답답 · 근육 뭉침 · 수면장애</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">5대 주요 증상 자가 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 신경 조절 자생력 회복</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 힐링 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">5-4-3-2-1 그라운딩 &amp; 내관혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">일상 속 긴장 완화 루틴</text>
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
        한방침구과 전문의 · 한의학 석사 · 1:1 맞춤 정밀 진료
      </text>
      <text x="145" y="118" font-family="${fontFamilies}" font-size="15" fill="#4b635a">
        "불안은 마음의 나약함이 아닌 뇌신경계의 과열 신호입니다. 근본 치료로 일상을 되찾아드립니다."
      </text>
      <text x="145" y="145" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        📍 부평역 7번 출구 도보 5분 | 월·수·금 야간진료 (저녁 8시까지)
      </text>
    </g>

    <!-- Bottom Hash Tags -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fafcfb" stroke="#e1ece7" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2d6a59" text-anchor="middle" letter-spacing="0.5">
        #부평불안장애 #부평불안장애한의원 #인천불안장애치료 #자율신경실조증 #청뇌안신탕 #해아림한의원부평점
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: 병리 기전 및 원인 분석 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      불안장애, 왜 사소한 일에도 심장이 쿵쾅거릴까?
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      마음의 나약함이 아니라 뇌 신경계의 화재경보기(편도체)가 고장 난 상태입니다
    </text>
  </g>

  <!-- 3 Cause Cards Vertical -->
  <g transform="translate(60, 205)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚨</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 편도체 과열 &amp; 전두엽 제어력 약화 (뇌 경보 오류)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌의 공포·불안 담당 부위인 <tspan font-weight="bold" fill="#0369a1">편도체(Amygdala)</tspan>가 극심한 스트레스로 과열됩니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 이성을 담당하는 전두엽이 이를 억제하지 못해 사소한 자극에도 위기 경보를 울립니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 결과: 실제 위험이 없는데도 "큰일이 날 것 같다"는 극심한 공포와 초조감이 지속됨
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef2f2" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        2. 자율신경계 불균형 &amp; 교감신경의 상시 흥분
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 편도체 흥분 신호가 척수를 타고 내려와 <tspan font-weight="bold" fill="#b91c1c">교감신경(전투 모드)</tspan>을 폭주 시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심박수가 치솟고, 혈관이 수축하며, 호흡이 가빠지고, 온몸의 근육이 굳어집니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 결과: 가슴 두근거림, 목·어깨 결림, 과호흡, 손발 떨림, 식은땀 등 신체화 증상 발현
      </text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        3. 한의학적 병리: 심비양허(心脾兩虛) &amp; 심담허겁(心膽虛怯)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 스트레스로 기운이 뭉치는 <tspan font-weight="bold" fill="#15803d">간기울결</tspan>과 심장 기혈이 고갈되는 <tspan font-weight="bold" fill="#15803d">심담허겁</tspan>이 겹칩니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심신(心神)이 안정되지 못해 조그마한 소리나 환경 변화에도 화들짝 놀라게 됩니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        👉 해결: 심장의 열을 내리고 기혈을 보강하여 뇌 신경계의 자생력을 채워야 완치 가능
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🩺 "원인을 정확히 알면 불안은 반드시 다스려지고 완치될 수 있습니다."
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: 자가진단 체크리스트 카드
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      나도 불안장애일까? 4대 불안 유형 체크
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      3개 이상 해당되고 2주 이상 지속된다면 조기 진단과 치료가 필요합니다
    </text>
  </g>

  <!-- 5 Checklist Items Container -->
  <g transform="translate(60, 185)">
    <rect x="0" y="0" width="960" height="785" rx="26" fill="#ffffff" filter="url(#shadow3)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        1. 사소한 걱정이 꼬리를 물고 하루 종일 머릿속을 떠나지 않는다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • "혹시 사고가 나면 어쩌지?", "일이 잘못되면 어떡하지?" 등 일어나지 않은 일에 대한 과도한 불안
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [만성 걱정형]: 일상 업무와 대인관계 집중력을 급격히 저하시킴
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(40, 180)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        2. 이유 없이 가슴이 두근거리고 숨이 가쁘며 목에 이물감이 든다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 심장내과 검사를 받아도 '이상 없음' 판정이 나오지만, 실제로는 가슴 답답함과 과호흡이 반복됨
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [급성 신체화형]: 교감신경 흥분으로 인한 자율신경실조증 연계
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(40, 325)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        3. 목, 어깨, 턱관절이 돌처럼 굳고 긴장성 두통이 지속된다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 몸이 항상 위험에 대비하느라 긴장 상태를 유지하여 근육이 뭉치고 뇌 혈류가 저하됨
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [근긴장형]: 마사지나 진통제로도 호전되지 않는 만성 피로 유발
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(40, 470)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        4. 잠자리에 들면 잡생각으로 1~2시간 이상 잠들지 못한다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 잠들기 직전 불안 회로가 활성화되어 입면장애가 생기고, 자다가도 가슴이 두근거리며 깸
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [수면장애형]: 불면증으로 이어져 뇌 피로와 불안을 더 악화시키는 악순환
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(40, 615)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        5. 긴장되는 모임이나 낯선 장소, 대중교통을 자꾸 피하게 된다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • "거기서 또 불안해지면 어쩌지?" 하는 공포감으로 인해 활동 반경이 점점 좁아짐
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [회피 반응]: 사회불안 및 공황장애로의 진행 위험 신호
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 3개 이상 해당된다면 참지 마시고 1:1 정밀 진단 검사를 받아보세요.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: 1:1 맞춤 한방 치료 솔루션 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      뇌 자생력을 깨우는 1:1 맞춤 한방 4단계 솔루션
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      약물 의존 없이 스스로 불안을 조절하는 뇌 힘을 길러드립니다
    </text>
  </g>

  <!-- 4 Step Solution Cards Grid (2x2) -->
  <g transform="translate(60, 185)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#e0f2fe" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">STEP 01</text>
      <circle cx="400" cy="50" r="26" fill="#f0f9ff" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📊</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        뇌기능 &amp; 자율신경 정밀 검사
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569" line-height="1.6">
        • 정량 뇌파(QEEG) 검사로 두뇌 활성도 분석
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심박변이도(HRV) 자율신경 스트레스 측정
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 체질 및 심신 상태 1:1 심층 상담
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#f0f9ff" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0369a1">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#0284c7">
        불안의 원인이 뇌파 과흥분인지, 자율신경 실조인지 객관적 데이터를 통해 정밀 타겟팅
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#dcfce7" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">STEP 02</text>
      <circle cx="400" cy="50" r="26" fill="#f0fdf4" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1:1 맞춤 청뇌안신(淸腦安神) 한약
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 편도체 열을 내리는 귀비탕 · 가미소요산
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 신경 이완 작용의 시호가용골모려탕 가감
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 식약처(GMP) 인증 최고급 한약재 조제
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#f0fdf4" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#16a34a">
        가슴 두근거림과 초조함을 가라앉히고 심장과 뇌의 기혈을 보강하여 신경 안정화
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 405)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#fef3c7" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">STEP 03</text>
      <circle cx="400" cy="50" r="26" fill="#fffbeb" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🎧</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        두뇌훈련 (뉴로피드백 &amp; 바이오)
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 과각성된 베타파 억제 &amp; 안정파 알파파 유도
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심박수 및 호흡 바이오피드백 자율 훈련
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 시청각 통합 뇌 자극 힐링 프로그램
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#fffbeb" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#92400e">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#b45309">
        긴장 상황에서도 뇌 스스로 침착함을 유지할 수 있는 신경 가소성 훈련 완성
      </text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(495, 405)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#fce7f3" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9d174d" text-anchor="middle">STEP 04</text>
      <circle cx="400" cy="50" r="26" fill="#fdf2f8" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        두개천골 추나 &amp; 안신 약침
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 경추(목뼈)와 턱관절의 구조적 긴장 해소
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 뇌척수액 순환을 돕는 두개천골요법(CST)
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 신경절 혈자리에 주입하는 청정 한약 약침
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#fdf2f8" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9d174d">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#be185d">
        굳어있는 목·어깨 근육을 이완하고 뇌 혈류를 개선하여 즉각적인 편안함 제공
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌿 1:1 맞춤 진료로 불안의 굴레에서 벗어날 수 있도록 함께합니다.
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: 생활 속 현실적 실천 팁 카드 (그라운딩, 워리타임, 내관혈)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 힐링 실천 팁</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      불안이 엄습할 때 즉각 효과 보는 3가지 뇌 진정법
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      의지에 기대지 않고 뇌와 신경계를 물리적으로 안정시키는 방법
    </text>
  </g>

  <!-- 3 Healing Tips Container -->
  <g transform="translate(60, 205)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">감각 스위칭</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">👀</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">
        1. 5-4-3-2-1 그라운딩 기법 (오감 감각 스위칭)
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 눈에 보이는 것 5가지 말하기 → 만질 수 있는 것 4가지 감촉 느끼기 → 들리는 소리 3가지 집중
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 머릿속 공포 상상에서 오감 감각으로 주의를 돌려 편도체 과열을 즉각 차단합니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#f0f9ff" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 실천: 회의실이나 지하철에서 불안이 치솟을 때 주변 사물을 하나씩 세어보세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef2f2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">인지 조절</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⏰</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">
        2. 하루 15분 '공식 걱정 시간(Worry Time)' 두기
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 하루 종일 걱정과 싸우지 말고, 오후 4시처럼 정해진 15분 동안만 메모장에 몰아서 적습니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 낮 동안 불안이 오면 "이건 4시에 걱정하자"며 서랍에 넣어두는 인지 제어력을 기릅니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fff1f2" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 실천: 불안한 생각을 머리에 담아두지 말고 종이에 써서 객관화하고 찢어버리세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 520)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">경혈 지압</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🖐️</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 손목 안쪽 '내관혈(內關穴)' 지압법
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 손목 주름에서 팔꿈치 쪽으로 손가락 3마디(4~5cm) 올라온 두 힘줄 사이를 지그시 누릅니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심포경의 핵심 혈자리로 가슴 두근거림, 답답함, 목 이물감(매핵기)을 신속히 가라앉힙니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fffbeb" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 실천: 긴장되는 순간마다 엄지손가락으로 3초간 누르고 2초간 떼기를 10회 반복하세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 "작은 실천 루틴이 모여 단단하고 편안한 마음의 방패가 됩니다."
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
  console.log('Regenerating Bupyeong Anxiety blog cards for 100% sync with new manuscript...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards re-rendered and perfectly synchronized!');
}

main().catch(console.error);
