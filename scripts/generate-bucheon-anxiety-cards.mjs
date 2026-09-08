import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-anxiety',
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 불안장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        이유 없는 극심한 초조함과 두근거림 · 멈추지 않는 걱정
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 불안장애 원인과 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      과열된 뇌 편도체 경보를 끄고 자율신경 밸런스를 회복합니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 과열 &amp; 교감신경 흥분</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 신경계의 경보 오작동 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">가슴 답답 · 근육 긴장 · 불면</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">5대 주요 증상 자가 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 신경 조절 자생력 재건</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 힐링 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">그라운딩 기법 &amp; 내관혈 지압</text>
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
        한방침구과 전문의 · 한의학 석사 · 1:1 맞춤 심층 진료
      </text>
      <text x="145" y="118" font-family="${fontFamilies}" font-size="15" fill="#4b635a">
        "불안은 마음의 나약함이 아닌 뇌신경계의 과열 신호입니다. 근본 원인을 바로잡아 일상을 되찾아드립니다."
      </text>
      <text x="145" y="145" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        📍 부천 인근 부평역 7번 출구 도보 5분 | 월·수·금 야간진료 (저녁 8시까지)
      </text>
    </g>

    <!-- Bottom Hash Tags -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fafcfb" stroke="#e1ece7" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2d6a59" text-anchor="middle" letter-spacing="0.5">
        #부천불안장애 #부천불안장애한의원 #부천신경정신과 #자율신경실조증 #청뇌안신탕 #해아림한의원
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
        • 공포와 위험을 감지하는 <tspan font-weight="bold" fill="#0369a1">편도체(Amygdala)</tspan>가 만성 스트레스로 과열됩니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 이성을 통제하는 전두엽이 이를 억제하지 못해 사소한 자극에도 생존 비상경보를 울립니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 결과: 실제 위험이 없는데도 "무언가 큰일이 날 것 같다"는 파국적 불안과 초조감 지속
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef2f2" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        2. 자율신경계 불균형 &amp; 교감신경의 상시 폭주
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 과열된 편도체 신호가 척수를 통해 전달되어 <tspan font-weight="bold" fill="#b91c1c">교감신경(전투 모드)</tspan>을 과항진시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심박수 급증, 혈관 수축, 호흡 촉박, 근육 수축 등 전신 비상 반응이 멈추지 않습니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 결과: 가슴 답답함, 두근거림, 목·어깨 결림, 과호흡, 손발 떨림, 어지럼증 유발
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
        • 기운이 울체되는 <tspan font-weight="bold" fill="#15803d">간기울결</tspan>과 심장·담의 기운이 약해진 <tspan font-weight="bold" fill="#15803d">심담허겁</tspan>이 원인입니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심신(心神)이 허약해져 작은 자극에도 쉽게 놀라고 가슴이 울렁거리며 불안해집니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        👉 해결: 심장의 화(火)를 내리고 기혈을 보강하여 뇌 신경계의 자생력을 채워야 합니다
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🩺 "원인을 정확히 파악하면 불안은 통제되고 반드시 안정될 수 있습니다."
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
  </defs>

  <rect width="1080" height="1080" fill="#0b2420" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#059669" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      혹시 나도 불안장애? 5대 핵심 체크리스트
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      3개 이상 해당되고 2주 이상 지속된다면 전문 진료와 조기 치료가 필요합니다
    </text>
  </g>

  <!-- 5 Checklist Cards -->
  <g transform="translate(60, 195)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="140" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="70" r="30" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="55" y="78" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">✓</text>
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        1. 멈추지 않는 과도한 걱정과 초조감 (만성 긴장)
      </text>
      <text x="110" y="95" font-family="${fontFamilies}" font-size="16" fill="#4b635a">
        아직 일어나지 않은 일에 대해 끊임없이 비관적인 생각이 꼬리를 물고 마음이 편치 않다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 155)">
      <rect x="0" y="0" width="960" height="140" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="70" r="30" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="55" y="78" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">✓</text>
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        2. 가슴 두근거림 · 답답함 · 숨찬 증상 (신체화 반응)
      </text>
      <text x="110" y="95" font-family="${fontFamilies}" font-size="16" fill="#4b635a">
        내과 검사상 심장·폐에 이상이 없는데도 가슴이 쿵쾅거리고 조여오며 숨쉬기가 답답하다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="960" height="140" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="70" r="30" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="55" y="78" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">✓</text>
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        3. 목·어깨의 극심한 근육 뭉침과 떨림 (자율신경 긴장)
      </text>
      <text x="110" y="95" font-family="${fontFamilies}" font-size="16" fill="#4b635a">
        온몸에 힘이 들어간 채 풀리지 않고, 목덜미가 뻣뻣하며 손발이 떨리거나 식은땀이 난다.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 465)">
      <rect x="0" y="0" width="960" height="140" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="70" r="30" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="55" y="78" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">✓</text>
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        4. 수면장애 (입면 곤란 · 악몽 · 조기 각성)
      </text>
      <text x="110" y="95" font-family="${fontFamilies}" font-size="16" fill="#4b635a">
        잠자리에 누우면 머릿속 생각이 폭주해 쉽게 잠들지 못하고, 자다 깨서 다시 잠들기 힘들다.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 620)">
      <rect x="0" y="0" width="960" height="140" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="70" r="30" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
      <text x="55" y="78" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">✓</text>
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        5. 예기불안과 특정 장소·상황 회피 (행동 제한)
      </text>
      <text x="110" y="95" font-family="${fontFamilies}" font-size="16" fill="#4b635a">
        "또 불안해지면 어쩌지?"라는 공포로 지하철, 버스, 엘리베이터, 회의실 등을 피하게 된다.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 985)">
    <rect x="0" y="0" width="960" height="56" rx="16" fill="#042f2c" stroke="#0d9488" stroke-width="1.5" />
    <text x="480" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      ⚠️ "자가진단 결과 3개 이상이라면 방치하지 마시고 신경계 불균형을 바로잡으세요."
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
      <stop offset="0%" stop-color="#07221e" />
      <stop offset="100%" stop-color="#031412" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      뇌 신경계 자생력을 깨우는 4단계 통합 솔루션
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      단순 증상 완화(마취)가 아닌 스스로 자율신경을 조절할 수 있는 힘을 기릅니다
    </text>
  </g>

  <!-- 4 Step Cards Grid -->
  <g transform="translate(60, 195)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="365" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="34" rx="8" fill="#e0f2fe" />
      <text x="70" y="48" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0369a1" text-anchor="middle">STEP 01</text>
      
      <circle cx="65" cy="115" r="32" fill="#f0f9ff" stroke="#bae6fd" stroke-width="2" />
      <text x="65" y="125" font-family="${fontFamilies}" font-size="30" text-anchor="middle">📊</text>
      
      <text x="115" y="110" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        정밀 뇌기능 &amp; 자율신경 검사
      </text>
      <text x="115" y="135" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        객관적 신경학적 상태 진단
      </text>

      <line x1="25" y1="165" x2="440" y2="165" stroke="#f1f5f9" stroke-width="2" />

      <text x="25" y="200" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 뇌파(EEG) 검사로 과각성 뇌파 영역 측정
      </text>
      <text x="25" y="235" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • HRV(자율신경 균형 검사)로 교감/부교감 분석
      </text>
      <text x="25" y="270" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 심리 평가 및 1:1 심층 문진 설문
      </text>
      <rect x="25" y="300" width="415" height="42" rx="8" fill="#f8fafc" />
      <text x="40" y="327" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0369a1">
        💡 개인별 맞춤 치료 프로토콜 수립
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="365" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="34" rx="8" fill="#fef2f2" />
      <text x="70" y="48" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 02</text>
      
      <circle cx="65" cy="115" r="32" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" />
      <text x="65" y="125" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
      
      <text x="115" y="110" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        청뇌안신(淸腦安神) 맞춤 한약
      </text>
      <text x="115" y="135" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        뇌 편도체 진정 &amp; 심장 기혈 보강
      </text>

      <line x1="25" y1="165" x2="440" y2="165" stroke="#f1f5f9" stroke-width="2" />

      <text x="25" y="200" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 과열된 편도체의 화(火)를 신속 진정
      </text>
      <text x="25" y="235" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 심담허겁(心膽虛怯) 체질 보강 및 심신 안정
      </text>
      <text x="25" y="270" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 신경전달물질(GABA, 세로토닌) 활성화
      </text>
      <rect x="25" y="300" width="415" height="42" rx="8" fill="#fff1f2" />
      <text x="40" y="327" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        💡 양약 복용 중단 없이 안전한 병행 가능
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 390)">
      <rect x="0" y="0" width="465" height="365" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="34" rx="8" fill="#f0fdf4" />
      <text x="70" y="48" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d" text-anchor="middle">STEP 03</text>
      
      <circle cx="65" cy="115" r="32" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2" />
      <text x="65" y="125" font-family="${fontFamilies}" font-size="30" text-anchor="middle">💻</text>
      
      <text x="115" y="110" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        뉴로피드백 &amp; 바이오피드백
      </text>
      <text x="115" y="135" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
        스스로 뇌파와 심박수를 조절하는 훈련
      </text>

      <line x1="25" y1="165" x2="440" y2="165" stroke="#f1f5f9" stroke-width="2" />

      <text x="25" y="200" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 불안을 유발하는 고베타파 억제 훈련
      </text>
      <text x="25" y="235" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 안정 뇌파(SMR, 알파파) 강화 훈련
      </text>
      <text x="25" y="270" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 호흡 연동 바이오피드백으로 자율신경 조절
      </text>
      <rect x="25" y="300" width="415" height="42" rx="8" fill="#f0fdf4" />
      <text x="40" y="327" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
        💡 재발을 막는 근본적인 두뇌 자생력 형성
      </text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(495, 390)">
      <rect x="0" y="0" width="465" height="365" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="34" rx="8" fill="#fef3c7" />
      <text x="70" y="48" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#92400e" text-anchor="middle">STEP 04</text>
      
      <circle cx="65" cy="115" r="32" fill="#fffbeb" stroke="#fde68a" stroke-width="2" />
      <text x="65" y="125" font-family="${fontFamilies}" font-size="30" text-anchor="middle">💆‍♂️</text>
      
      <text x="115" y="110" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        두개천골 추나(CST) &amp; 침구치료
      </text>
      <text x="115" y="135" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#92400e">
        경추 긴장 이완 &amp; 뇌척수액 순환 촉진
      </text>

      <line x1="25" y1="165" x2="440" y2="165" stroke="#f1f5f9" stroke-width="2" />

      <text x="25" y="200" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 경추 1·2번 교정으로 뇌간 압박 해소
      </text>
      <text x="25" y="235" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 뇌척수액 순환을 원활히 하여 뇌 피로 제거
      </text>
      <text x="25" y="270" font-family="${fontFamilies}" font-size="16" fill="#334155">
        • 내관혈·신문혈 침치료로 교감신경 즉각 진정
      </text>
      <rect x="25" y="300" width="415" height="42" rx="8" fill="#fffbeb" />
      <text x="40" y="327" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#92400e">
        💡 신체적 긴장과 가슴 답답함 신속 해소
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="48" rx="14" fill="#042f2c" />
    <text x="480" y="31" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌿 "몸과 뇌를 함께 다스릴 때 불안의 고리는 끊어집니다."
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: 생활 속 힐링 팁 카드
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#051a17" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 힐링 실천</text>
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
        • 머릿속 공포 상상에서 현실의 오감 감각으로 주의를 돌려 편도체 과열을 즉각 차단합니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#f0f9ff" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 실천: 회의실이나 대중교통에서 불안이 치솟을 때 주변 사물을 하나씩 세어보세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef2f2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">인지 조절</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⏰</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">
        2. 하루 15분 '공식 걱정 시간(Worry Time)' 배정하기
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 하루 종일 걱정에 끌려다니지 말고, 오후 4시처럼 정해진 15분 동안만 메모장에 몰아서 적습니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 일상 중 불안이 오면 "이건 걱정 시간에 다루자"며 생각을 서랍에 넣어두는 연습을 합니다.
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
        3. 손목 안쪽 '내관혈(內關穴)' 지압 &amp; 4-7-8 호흡
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 손목 안쪽 주름에서 손가락 3마디(4~5cm) 올라온 두 힘줄 사이(내관혈)를 지그시 누릅니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 4초간 코로 들이마시고, 7초간 숨을 멈춘 뒤, 8초간 입으로 천천히 내쉬며 부교감신경을 깨웁니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fffbeb" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 실천: 가슴이 답답하거나 두근거릴 때 엄지로 내관혈을 누르며 4-7-8 호흡을 5회 반복하세요.
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
  console.log('Generating Bucheon Anxiety blog cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards successfully generated for Bucheon Anxiety!');
}

main().catch(console.error);
