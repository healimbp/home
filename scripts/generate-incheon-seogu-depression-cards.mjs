import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-seogu-depression',
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
      <stop offset="0%" stop-color="#0c192c" />
      <stop offset="50%" stop-color="#0e2a38" />
      <stop offset="100%" stop-color="#081820" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0d9488" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-230" y="0" width="460" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 우울증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        의지의 문제가 아닌 '뇌 에너지 방전과 신경전달물질 불균형'
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      인천 서구 우울증 원인과 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      무기력·우울감의 고리를 끊고 뇌 자생력과 활력을 깨웁니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">세로토닌 고갈 &amp; 전두엽 기능 저하</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">뇌 배터리 방전과 신경 전달 이상</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">만성 무기력 · 흥미 상실 · 불면</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">우울증 5대 핵심 증상 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">보심해울 한약 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">뇌 신경망 활성화 &amp; 기혈 순환</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 04. 힐링 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">아침 햇볕 루틴 · 마이크로 산책</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">몸을 깨우는 현실적 행동 루틴</text>
      </g>
    </g>

    <!-- Bottom Highlights Box -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="295" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <g transform="translate(35, 30)">
        <rect x="0" y="0" width="170" height="34" rx="6" fill="#16a34a" />
        <text x="85" y="23" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">해아림 통합 케어</text>
        <text x="190" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#14532d">
          "몸의 활력을 채우고 뇌의 생체 리듬을 복원합니다"
        </text>
        <text x="0" y="70" font-family="${fontFamilies}" font-size="16" fill="#166534" line-height="1.6">
          • 정밀 뇌파(EEG) 및 자율신경 균형(HRV) 검사로 객관적 뇌 피로도 분석
        </text>
        <text x="0" y="105" font-family="${fontFamilies}" font-size="16" fill="#166534">
          • 귀비탕·시호소간산 등 체질 맞춤 한약으로 울체된 기운을 풀고 뇌혈류 개선
        </text>
        <text x="0" y="140" font-family="${fontFamilies}" font-size="16" fill="#166534">
          • 뇌파 뉴로피드백 &amp; 두개천골 추나요법으로 신경계 항상성 회복
        </text>
        <text x="0" y="175" font-family="${fontFamilies}" font-size="16" fill="#166534">
          • 백회혈·태충혈 침구치료로 머리를 맑게 하고 자율신경 긴장 이완
        </text>
        <text x="0" y="215" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
          📍 해아림한의원 인천부평점 (부평역 7번 출구 / 청라·루원시티·가좌·검단 인접)
        </text>
      </g>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: 원인 분석 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0c192c" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="200" height="42" rx="21" fill="#0284c7" />
    <text x="100" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      우울증은 마음의 나약함이 아닌 '뇌 배터리 방전'입니다
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#93c5fd">
      신경전달물질 고갈과 전두엽 기능 저하, 한의학적 기울(氣鬱)의 신경학적 기전
    </text>
  </g>

  <!-- 3 Cause Cards -->
  <g transform="translate(60, 200)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="185" rx="14" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">세로토닌</text>
      <text x="70" y="135" font-family="${fontFamilies}" font-size="32" text-anchor="middle">⚡</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 신경전달물질(세로토닌·도파민) 에너지 고갈
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 만성 스트레스와 신경 염증으로 행복 호르몬인 세로토닌과 동기부여 호르몬인 도파민이 바닥납니다.
      </text>
      <text x="140" y="138" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 스마트폰 배터리가 1%로 떨어지면 절전 모드로 바뀌듯, 뇌가 모든 의욕과 감정을 닫아버리는 상태입니다.
      </text>
      <rect x="140" y="165" width="790" height="36" rx="6" fill="#f0f9ff" />
      <text x="155" y="189" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        💡 비유: 자동차에 연료가 바닥났는데 액셀을 밟으라고 다그치는 것과 같습니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="960" height="235" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="185" rx="14" fill="#fef2f2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">전두엽 저하</text>
      <text x="70" y="135" font-family="${fontFamilies}" font-size="32" text-anchor="middle">📉</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        2. 좌측 전두엽 활성 저하 &amp; 부정 편향 회로 고착
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 긍정적 정서와 동기를 만드는 좌측 전두엽 기능이 떨어지고 편도체의 부정적 경보만 과열됩니다.
      </text>
      <text x="140" y="138" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 사소한 실수에도 극심한 자책감과 비관적 생각에 빠져 헤어 나오지 못하는 뇌 신경망의 오류입니다.
      </text>
      <rect x="140" y="165" width="790" height="36" rx="6" fill="#fef2f2" />
      <text x="155" y="189" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        💡 기전: 뇌 신경 시냅스 연결성이 약화되어 부정적 기억과 사고만 무한 반복 재생됩니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 520)">
      <rect x="0" y="0" width="960" height="235" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="185" rx="14" fill="#f0fdf4" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">기울·양허</text>
      <text x="70" y="135" font-family="${fontFamilies}" font-size="32" text-anchor="middle">🌿</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        3. 한의학적 기혈울체(氣血鬱滯)와 심비양허(心脾兩虛)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 억눌린 정서 스트레스로 간기(肝氣)가 뭉치고(간기울결), 심장과 비장의 영양 공급이 고갈됩니다.
      </text>
      <text x="140" y="138" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 가슴 답답함, 소화불량, 만성 피로, 전신 근육통 같은 신체화 증상이 함께 나타나는 이유입니다.
      </text>
      <rect x="140" y="165" width="790" height="36" rx="6" fill="#f0fdf4" />
      <text x="155" y="189" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        💡 해법: 울체된 기운을 소통시키고 심비(心脾)의 기혈을 보강해야 뇌와 몸이 함께 살아납니다.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="48" rx="14" fill="#082f49" />
    <text x="480" y="31" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#bae6fd" text-anchor="middle">
      🌿 "방전된 배터리는 충전해야 하듯, 지친 뇌에는 에너지와 기혈 공급이 필요합니다."
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
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0c192c" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="200" height="42" rx="21" fill="#0284c7" />
    <text x="100" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      나의 마음과 뇌 상태는? 우울증 5대 핵심 체크
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#93c5fd">
      2주 이상 지속되는 무기력과 흥미 상실은 뇌가 보내는 긴급 구조 신호입니다
    </text>
  </g>

  <!-- 5 Checklist Items Container -->
  <g transform="translate(60, 195)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="120" rx="16" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="20" y="20" width="80" height="80" rx="14" fill="#fee2e2" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🥀</text>
      <text x="120" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        1. 모든 일에 흥미와 즐거움이 사라지고 의욕이 없다
      </text>
      <text x="120" y="82" font-family="${fontFamilies}" font-size="16" fill="#64748b">
        좋아하던 취미나 사람 만나는 일조차 귀찮고 감정이 메마른 느낌이 든다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 135)">
      <rect x="0" y="0" width="960" height="120" rx="16" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="20" y="20" width="80" height="80" rx="14" fill="#fef3c7" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🪫</text>
      <text x="120" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        2. 몸이 물에 젖은 솜처럼 무겁고 아침에 눈뜨기 괴롭다
      </text>
      <text x="120" y="82" font-family="${fontFamilies}" font-size="16" fill="#64748b">
        충분히 누워 있어도 피로가 풀리지 않고 몸을 일으키는 것 자체가 버겁다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 270)">
      <rect x="0" y="0" width="960" height="120" rx="16" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="20" y="20" width="80" height="80" rx="14" fill="#e0f2fe" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌙</text>
      <text x="120" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        3. 잠들기 어렵거나, 새벽에 자주 깨고 다시 잠들지 못한다
      </text>
      <text x="120" y="82" font-family="${fontFamilies}" font-size="16" fill="#64748b">
        수면 패턴이 무너져 불면증에 시달리거나 반대로 하루 종일 누워만 있는 과수면 상태.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 405)">
      <rect x="0" y="0" width="960" height="120" rx="16" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="20" y="20" width="80" height="80" rx="14" fill="#f3e8ff" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💭</text>
      <text x="120" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        4. "모두 내 탓이다"라는 지나친 자책감과 비관적 생각
      </text>
      <text x="120" y="82" font-family="${fontFamilies}" font-size="16" fill="#64748b">
        자신에 대한 가치감이 급격히 떨어지고 미래에 대한 희망이 보이지 않는다.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 540)">
      <rect x="0" y="0" width="960" height="120" rx="16" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="20" y="20" width="80" height="80" rx="14" fill="#dcfce7" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🩹</text>
      <text x="120" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        5. 원인 모를 소화불량, 가슴 답답함, 두통, 전신 근육통
      </text>
      <text x="120" y="82" font-family="${fontFamilies}" font-size="16" fill="#64748b">
        내과 검사상 이상이 없는데도 지속적인 신체 통증과 식욕 감퇴/폭식이 반복된다.
      </text>
    </g>
  </g>

  <!-- Bottom Alert Bar -->
  <g transform="translate(60, 895)">
    <rect x="0" y="0" width="960" height="135" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#38bdf8">
      ⚠️ 3가지 이상 해당된다면 단순 번아웃을 넘어선 '치료가 필요한 우울 상태'입니다
    </text>
    <text x="40" y="85" font-family="${fontFamilies}" font-size="16" fill="#cbd5e1">
      시간이 지나면 나아지겠지 방치할수록 뇌 신경 시냅스 회로가 약화되어 만성화될 수 있습니다.
    </text>
    <text x="40" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#a7f3d0">
      전문적인 두뇌·자율신경 정밀 검사를 통해 정확한 원인을 진단받으세요.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: 한방 치료 솔루션 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0c192c" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="200" height="42" rx="21" fill="#0284c7" />
    <text x="100" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      뇌 스스로 활력을 되찾는 1:1 맞춤 한방 치료 솔루션
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#93c5fd">
      강제 억제가 아닌 뇌 신경 기능과 전신 생체 에너지를 동시에 재건합니다
    </text>
  </g>

  <!-- 4 Treatment Step Grid -->
  <g transform="translate(60, 195)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="375" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="70" height="70" rx="14" fill="#e0f2fe" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🩺</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        1. 정밀 뇌기능 검사
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="14" fill="#64748b">
        객관적인 뇌 신경·자율신경 평가
      </text>
      
      <line x1="25" y1="110" x2="440" y2="110" stroke="#f1f5f9" stroke-width="2" />
      
      <text x="25" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
        • 뇌파 검사(EEG) &amp; HRV 자율신경 검사
      </text>
      <text x="25" y="178" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 좌·우뇌 활성 비대칭도 정밀 분석
      </text>
      <text x="25" y="210" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 자율신경 스트레스 저항도 객관화
      </text>
      <text x="25" y="242" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 체질별 맥진·설진으로 장부 불균형 진단
      </text>
      <rect x="25" y="275" width="415" height="42" rx="8" fill="#f0f9ff" />
      <text x="40" y="302" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        💡 뇌 피로도와 신체 방전 상태를 정확히 측정
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="375" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="70" height="70" rx="14" fill="#f0fdf4" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🌿</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">
        2. 체질 맞춤 한약 처방
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="14" fill="#64748b">
        기울 해소 &amp; 뇌신경 영양 공급
      </text>
      
      <line x1="25" y1="110" x2="440" y2="110" stroke="#f1f5f9" stroke-width="2" />
      
      <text x="25" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
        • 귀비탕(歸脾湯) &amp; 시호소간산(柴胡疎肝散)
      </text>
      <text x="25" y="178" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 울체된 간기(肝氣)를 풀고 뇌혈류 촉진
      </text>
      <text x="25" y="210" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 심비(心脾) 기혈을 보강하여 무기력 개선
      </text>
      <text x="25" y="242" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 천왕보심단으로 가슴 불안과 수면장애 안정
      </text>
      <rect x="25" y="275" width="415" height="42" rx="8" fill="#f0fdf4" />
      <text x="40" y="302" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#16a34a">
        💡 뇌 신경전달물질 분비 환경을 자연 복원
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 395)">
      <rect x="0" y="0" width="465" height="375" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="70" height="70" rx="14" fill="#f3e8ff" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">💻</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#7e22ce">
        3. 두뇌 뉴로피드백
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="14" fill="#64748b">
        좌측 전두엽 뇌파 조절 훈련
      </text>
      
      <line x1="25" y1="110" x2="440" y2="110" stroke="#f1f5f9" stroke-width="2" />
      
      <text x="25" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
        • 뇌 신경망 자율 조절 훈련
      </text>
      <text x="25" y="178" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 전두엽 활성도를 높이는 SMR/알파파 강화
      </text>
      <text x="25" y="210" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 우울·무기력을 유발하는 느린 뇌파 억제
      </text>
      <text x="25" y="242" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 스트레스 저항력과 긍정 회복 탄력성 증진
      </text>
      <rect x="25" y="275" width="415" height="42" rx="8" fill="#faf5ff" />
      <text x="40" y="302" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
        💡 뇌 스스로 긍정 에너지를 깨우는 훈련
      </text>
    </g>

    <!-- Box 4 -->
    <g transform="translate(495, 395)">
      <rect x="0" y="0" width="465" height="375" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="70" height="70" rx="14" fill="#fef3c7" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">💆</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b45309">
        4. 침구치료 &amp; 두개천골 추나
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="14" fill="#64748b">
        경혈 자극 &amp; 뇌척수액 순환
      </text>
      
      <line x1="25" y1="110" x2="440" y2="110" stroke="#f1f5f9" stroke-width="2" />
      
      <text x="25" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
        • 백회·신문·태충혈 집중 자극
      </text>
      <text x="25" y="178" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 뇌 혈류 순환 개선 및 중초(소화기) 소통
      </text>
      <text x="25" y="210" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 두개천골(CST) 요법으로 경추·뇌막 긴장 이완
      </text>
      <text x="25" y="242" font-family="${fontFamilies}" font-size="15" fill="#334155">
        • 뇌척수액 순환 촉진으로 뇌 피로물질 배출
      </text>
      <rect x="25" y="275" width="415" height="42" rx="8" fill="#fffbeb" />
      <text x="40" y="302" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        💡 굳어진 몸을 풀고 깊은 신경 이완 유도
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="48" rx="14" fill="#082f49" />
    <text x="480" y="31" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#bae6fd" text-anchor="middle">
      🌿 "몸과 뇌를 함께 보살필 때 무기력의 늪에서 온전히 빠져나올 수 있습니다."
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
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0c192c" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="200" height="42" rx="21" fill="#0284c7" />
    <text x="100" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 힐링 실천</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      무기력한 몸과 뇌를 깨우는 3가지 현실적 행동 루틴
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#93c5fd">
      의지에 기대지 않고 뇌의 생체 시계와 신경계를 물리적으로 자극하는 법
    </text>
  </g>

  <!-- 3 Healing Tips Container -->
  <g transform="translate(60, 205)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b45309" text-anchor="middle">햇볕 쬐기</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">☀️</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">
        1. 기상 직후 15분 '아침 자연광(햇볕) 쬐기'
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 눈의 망막으로 들어온 아침 햇빛은 시신경을 통해 뇌 시교차상핵을 자극하고 세로토닌 합성을 시작합니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 아침에 생성된 세로토닌은 14~15시간 뒤 수면 호르몬인 멜라토닌으로 전환되어 밤의 숙면을 돕습니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fffbeb" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#d97706">
        👉 실천: 일어나자마자 창문을 활짝 열고 15분간 햇볕을 바라보며 가볍게 기지개를 켜세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">미세 행동</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚶</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">
        2. '5분 마이크로 산책'과 점진적 근육 이완
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 거창한 운동 대신 "딱 5분만 현관문 밖으로 나가 걷기"처럼 뇌에 부담 없는 초미세 행동부터 시작합니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 발바닥이 땅에 닿는 감각에 집중하면 뇌의 부정적 반추(Rumination) 회로가 차단됩니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#f0f9ff" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 실천: 움직이기 싫을 때는 어깨를 으쓱 올렸다가 '툭' 떨어뜨리는 3회 이완부터 시작해보세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 520)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#f0fdf4" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">온열 족욕</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">♨️</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#15803d">
        3. 취침 90분 전 '40도 온열 족욕' &amp; 침실 암막 조성
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 따뜻한 물(40~42도)에 15분간 발을 담그면 머리로 쏠린 상열(上熱)이 아래로 내려옵니다(수승화강).
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 족욕 후 체온이 서서히 떨어지는 90분 뒤 시점에 뇌가 자연스러운 깊은 수면 모드로 진입합니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#f0fdf4" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        👉 실천: 취침 1시간 전 스마트폰 블루라이트를 끄고 침실을 어둡고 서늘하게 유지하세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#bae6fd" text-anchor="middle">
      🌸 "작은 생활의 온기와 리듬이 모여 뇌의 활력과 평온을 되찾아줍니다."
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
  console.log('Generating Incheon Seo-gu Depression blog cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards successfully generated for Incheon Seo-gu Depression!');
}

main().catch(console.error);
