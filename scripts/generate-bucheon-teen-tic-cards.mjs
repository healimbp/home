import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-teen-tic',
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
      <stop offset="0%" stop-color="#0c1e3d" />
      <stop offset="50%" stop-color="#112d4e" />
      <stop offset="100%" stop-color="#07172b" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 소아청소년 &amp; 수험생 뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        "사춘기인데 틱이 안 없어져요" · 시험 때마다 심해지는 증상
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 청소년 틱장애 원인과 한방 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 기저핵 신경조절력 회복 &amp; 학업 스트레스 완화 1:1 솔루션
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 255)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="18" fill="#eff6ff" />
        <circle cx="72" cy="72" r="28" fill="#2563eb" />
        <text x="72" y="82" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="145" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">사춘기 급성장 &amp; 학업 뇌 신경 과부하</text>
        <text x="145" y="92" font-family="${fontFamilies}" font-size="17" fill="#475569">뇌 기저핵 운동 억제 필터 미성숙에 학업 시험·수면 부족 스트레스 결합</text>
        <text x="145" y="118" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2563eb">👉 단순한 습관이나 고집이 아닌 신경생리학적 신호입니다.</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="18" fill="#fef2f2" />
        <circle cx="72" cy="72" r="28" fill="#dc2626" />
        <text x="72" y="82" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="145" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">학교에서 참다 집에 와서 터지는 '전조 충동'</text>
        <text x="145" y="92" font-family="${fontFamilies}" font-size="17" fill="#475569">주변 시선 때문에 억지로 참으려다 누적된 뇌 피로가 귀가 후 폭발적 증가</text>
        <text x="145" y="118" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">👉 억지로 참게 하거나 다그치는 것은 증상을 2배로 악화시킵니다.</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="18" fill="#f0fdf4" />
        <circle cx="72" cy="72" r="28" fill="#16a34a" />
        <text x="72" y="82" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="145" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 청뇌한약 &amp; 두뇌 뉴로피드백</text>
        <text x="145" y="92" font-family="${fontFamilies}" font-size="17" fill="#475569">기저핵 억제 회로 성숙 + 경추 이완 뇌순환요법으로 자생적 조절력 회복</text>
        <text x="145" y="118" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">👉 졸림·집중력 저하 없는 수험생 맞춤 처방으로 학업과 치료 병행</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f172a" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 1:1 맞춤 뇌신경 클리닉 (부평역 7번 출구)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: 청소년 틱장애 원인 요약 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0a0f1d" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#2563eb" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      청소년 틱장애, 왜 사춘기에도 멈추지 않을까요?
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#93c5fd">
      의지력 부족이나 나쁜 버릇이 아닌, 뇌 기저핵 운동 억제 필터의 불균형입니다
    </text>
  </g>

  <!-- 3 Cause Cards Vertical -->
  <g transform="translate(60, 205)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#eff6ff" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧠</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 기저핵(Basal Ganglia)의 운동 브레이크 기능 약화
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌 깊은 곳 <tspan font-weight="bold" fill="#1d4ed8">기저핵</tspan>은 불필요한 근육 신호와 음성을 걸러주는 '필터' 역할을 합니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 이 필터가 과도하게 민감해지거나 억제력이 떨어져 무의식적인 동작과 소리가 방출됩니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#eff6ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#1d4ed8">
        👉 결과: 눈 깜빡임, 고개 꺾기, 킁킁거림 등 본인의 의지와 상관없이 튀어나오는 신호 발생
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef2f2" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        2. 사춘기 호르몬 급변 &amp; 학업 스트레스·수면 부족
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 신체 급성장과 성호르몬 분비, 중고교 시험 및 대인관계 긴장이 <tspan font-weight="bold" fill="#dc2626">교감신경을 과항진</tspan>시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 수면 부족과 스마트폰 영상 과몰입은 뇌 도파민 시스템에 불균형을 가중시킵니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c">
        👉 결과: 초등 때 사라졌던 틱이 중·고등학교 진학 후 재발하거나 더욱 격렬해지는 주요 원인
      </text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#16a34a" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        3. 한의학적 병리: 간풍내동(肝風內動) &amp; 심신불교(心腎不交)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 스트레스로 간의 기운이 뭉치고 열이 뇌로 치솟는 <tspan font-weight="bold" fill="#16a34a">간열(肝熱)</tspan>과 풍(風)이 근육을 떨리게 합니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심장의 화(火)와 신장의 수(水) 균형이 깨져 정서적 불안정과 틱이 복합적으로 나타납니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
        👉 해결: 상체와 두뇌로 솟구친 열을 내리고 신경계 자생력을 보강해야 근본 치료가 가능합니다
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#021427" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#93c5fd" text-anchor="middle">
      🩺 "틱은 참는다고 낫지 않습니다. 뇌 신경계의 과흥분을 가라앉히는 치료가 핵심입니다."
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: 청소년 틱장애 자가진단 체크리스트 카드
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062826" />
      <stop offset="50%" stop-color="#0d3f3b" />
      <stop offset="100%" stop-color="#041b1a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#059669" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      청소년 틱장애 핵심 자가진단 5가지
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      2가지 이상 반복된다면 단순 습관이 아니므로 신경학적 점검이 필요합니다
    </text>
  </g>

  <!-- 5 Check Items -->
  <g transform="translate(60, 195)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="135" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="67" r="28" fill="#ecfdf5" />
      <text x="55" y="76" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
      <text x="105" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        1. 긴장하거나 시험 기간, 피로할 때 특정 동작이 심해진다
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        눈 깜빡임, 고개 까딱이기, 어깨 으쓱하기, 코 찡긋거림 등이 스트레스 상황에서 빈번해짐
      </text>
      <text x="105" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        👉 자율신경계 과흥분으로 인한 전형적인 근육틱(운동틱) 양상입니다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 150)">
      <rect x="0" y="0" width="960" height="135" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="67" r="28" fill="#ecfdf5" />
      <text x="55" y="76" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
      <text x="105" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        2. 헛기침(음음), 코 킁킁거림, 켁켁 소리가 1달 이상 지속된다
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        이비인후과·소아과에서 비염/천식 치료를 받아도 호전되지 않고 소리가 계속 반복됨
      </text>
      <text x="105" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        👉 호흡기 질환이 아닌 뇌 기저핵 신호 이상에 의한 음성틱 가능성이 매우 높습니다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 300)">
      <rect x="0" y="0" width="960" height="135" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="67" r="28" fill="#fee2e2" />
      <text x="55" y="76" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✓</text>
      <text x="105" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        3. 학교·학원에서는 억지로 참다가 귀가 후 방에서 폭발한다
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        친구들 시선 때문에 온 힘을 다해 억누르다가 안전한 집이나 방에 오면 몰아서 증상이 분출됨
      </text>
      <text x="105" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 청소년기 틱의 대표적 특징으로 뇌의 피로도가 극에 달해 있음을 뜻합니다.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 450)">
      <rect x="0" y="0" width="960" height="135" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="67" r="28" fill="#ecfdf5" />
      <text x="55" y="76" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
      <text x="105" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        4. 틱을 하기 전 '목이나 눈이 답답하고 뻐근한 느낌'을 호소한다
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        해당 동작이나 소리를 내야만 그 찝찝함과 불쾌감이 일시적으로 풀린다고 표현함
      </text>
      <text x="105" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        👉 '전조감각충동(Premonitory Urge)'으로 청소년기 틱 환자의 80% 이상이 경험합니다.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 600)">
      <rect x="0" y="0" width="960" height="135" rx="18" fill="#ffffff" filter="url(#shadow3)" />
      <circle cx="55" cy="67" r="28" fill="#ecfdf5" />
      <text x="55" y="76" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
      <text x="105" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        5. 틱 증상으로 대인관계가 위축되고 학업 집중력이 떨어진다
      </text>
      <text x="105" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
        남들의 시선을 지나치게 의식하며 불안감, 우울감, 자존감 저하, 성적 하락이 동반됨
      </text>
      <text x="105" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        👉 2차 정서장애로 번지기 전 뇌신경계 안정 치료가 시급합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#02211e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      📋 "체크 항목이 2개 이상 지속된다면 조기 진단으로 만성화를 예방해야 합니다."
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: 1:1 맞춤 치료 솔루션 요약 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f0e26" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#6366f1" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      뇌 스스로 조절하는 힘을 깨우는 3단계 치료
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#c7d2fe">
      신경 억제제 의존 없이 뇌 신경망의 자생적 균형과 성숙을 돕습니다
    </text>
  </g>

  <!-- 3 Treatment Steps Vertical -->
  <g transform="translate(60, 205)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0e7ff" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#4338ca" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e1b4b">
        1. 1:1 맞춤 청뇌(淸腦) 한약処방 (뇌 풍열 진정 &amp; 집중력 강화)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 스트레스로 상체에 몰린 <tspan font-weight="bold" fill="#4338ca">간화(肝火)와 풍열</tspan>을 내려 뇌 기저핵의 흥분을 진정시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 졸리거나 멍해지는 부작용 없이, 수험생의 뇌혈류와 두뇌 집중력을 맑게 유지합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#eef2ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#4f46e5">
        👉 목표: 기저핵 신경전달물질 밸런스 회복 &amp; 틱 충동 빈도·강도 1차 경감
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💻</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e1b4b">
        2. 감각통합 뉴로피드백 &amp; 두뇌 조절 훈련
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 실시간 뇌파 바이오피드백을 통해 전두엽의 <tspan font-weight="bold" fill="#15803d">자율적 억제 회로</tspan>를 직접 훈련합니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전조감각충동이 느껴질 때 뇌 스스로 흥분을 누르고 제어하는 자기조절력을 확립합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        👉 목표: 뇌 신경망 자기통제력 강화 &amp; 전조감각충동 조절력 향상
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fdf4ff" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a21caf" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💆</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e1b4b">
        3. 두개천골요법(CST) &amp; 경추·턱관절 추나 교정
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 장시간 공부로 굳어진 <tspan font-weight="bold" fill="#a21caf">상부 경추(1·2번)와 턱관절</tspan>의 신경 압박을 이완합니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌척수액 순환을 원활하게 하여 중추신경계의 구조적 긴장과 피로를 해소합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fdf4ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#c026d3">
        👉 목표: 신체 구조적 긴장 차단 &amp; 자율신경 안정화로 재발 방지
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f0c29" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🌱 "뇌 신경계의 자생력을 키우면 치료가 끝난 후에도 안정 상태가 유지됩니다."
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: 가정 내 실천 팁 요약 카드
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b1700" />
      <stop offset="50%" stop-color="#4d2204" />
      <stop offset="100%" stop-color="#230e00" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#f59e0b" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 생활 관리</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      청소년 틱 완화를 위한 부모님의 3대 실천 팁
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#fde68a">
      가정의 편안한 지지와 올바른 환경 관리가 최고의 두뇌 보약입니다
    </text>
  </g>

  <!-- 3 Self-Care Cards Vertical -->
  <g transform="translate(60, 205)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b45309" text-anchor="middle">원칙 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤫</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#3b1700">
        1. 틱 증상에 대해 절대 지적하거나 참으라 하지 않기 (모른 척하기)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • "소리 좀 그만 내", "눈 똑바로 떠"라는 지적은 아이의 뇌를 극도로 긴장시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 참으려 애쓸수록 기저핵 압력이 높아져 나중에 더 큰 틱으로 폭발하게 됩니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 실천: 증상을 보더라도 무덤덤하게 넘어가고, 자연스럽게 물 한 잔이나 대화로 관심 전환
      </text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">원칙 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📱</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#3b1700">
        2. 심야 스마트폰·쇼츠·게임 제한 &amp; 수면 골든타임 사수
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 짧고 자극적인 숏폼 영상과 게임은 뇌 도파민을 요동치게 하여 기저핵을 과열시킵니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 취침 1시간 전 스마트폰을 멀리하고 밤 11시 전 깊은 숙면에 들도록 지도해 주세요.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 실천: 침실을 전자기기 없는 암막 환경으로 조성하고 규칙적인 수면 리듬 유지
      </text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#ecfdf5" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">원칙 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🏃</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#3b1700">
        3. 시험·성적 압박 줄이기 &amp; 하루 30분 햇볕 유산소 산책
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 과도한 학업 부담과 완벽주의는 청소년기 뇌의 신경 가소성과 회복력을 떨어뜨립니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 햇볕을 쬐며 걷는 유산소 운동은 천연 세로토닌을 분비시켜 뇌 신경을 편안히 이완합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#ecfdf5" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        👉 실천: 주말에는 가벼운 산책이나 배드민턴 등 신체 활동으로 쌓인 뇌 피로 해소
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#200c00" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fde68a" text-anchor="middle">
      ❤️ "부모님의 묵묵한 믿음과 편안한 가정 환경이 최고의 치료제입니다."
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
  console.log('Generating Bucheon Teen Tic blog cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards successfully generated for Bucheon Teen Tic!');
}

main().catch(console.error);
