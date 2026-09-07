import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-depression',
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
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 우울증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        의지의 문제가 아닌 '뇌 신경염증과 호르몬 방전'
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부평 우울증 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      세로토닌 고갈 · 장-뇌 축 붕괴 · 무기력의 1:1 맞춤 근본 해법
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          마음이 아닌 '뇌 신경전달물질(세로토닌·도파민) 방전'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          만성 스트레스와 신경 염증으로 전두엽 활성이 저하되고 의욕·감정 조절 기능이 멈춘 상태
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          신체화 증상 동반 (만성 피로 · 불면증 · 두통 · 가슴 답답함)
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          기질적 이상 없는 신체 불쾌감과 수면장애, 브레인포그를 동반하는 자율신경 불균형 질환
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          1:1 체질 활뇌(活腦) 한약 &amp; 두개천골 뇌혈류 추나요법
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          심비(心脾) 기혈을 보하고 울체된 간기(肝氣)를 소통시켜 뇌신경 자생력과 활력을 복원
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f172a" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#93c5fd" text-anchor="middle">
        인천 부평역 7번 출구 도보 5분 ｜ 야간진료(월·수·금) ｜ 1:1 맞춤 예약 진료
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: CAUSE ANALYSIS CARD (원인 분석 카드)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c192c" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">우울증의 신경학적 핵심 기전</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "마음먹기 달린 게 아니라 뇌 에너지가 방전된 것입니다"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    신경전달물질 고갈과 만성 코르티솔 과다로 전두엽 기능이 저하된 상태입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧠</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 신경전달물질(세로토닌·도파민·노르에피네프린) 고갈
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        행복감과 안정감을 주는 세로토닌과 의욕을 일으키는 도파민 분비가 급격히 줄어들어
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        전두엽의 인지 조절 능력이 떨어지고 깊은 무기력과 흥미 상실에 빠지게 됩니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0369a1">
        👉 원인: 단순 심리적 슬픔이 아닌 "뇌 신경세포 간 시냅스 신호 전달 체계의 방전"
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fee2e2" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 스트레스 호르몬(코르티솔) 과다와 뇌 신경 염증
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        지속적인 과로와 정신적 충격으로 HPA축(시상하부-뇌하수체-부신)이 과열되면,
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        뇌 해마 신경세포가 위축되고 신경 염증이 지속되어 뇌 피로가 누적됩니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c">
        👉 주의: 억지로 힘을 내려고 채찍질할수록 뇌 신경계의 탈진(Burn-out)이 가속화됩니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef3c7" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌿</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 한의학적 간기울결(肝氣鬱結) &amp; 심비양허(心脾兩虛)
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        스트레스로 기운 소통이 막혀 가슴이 답답하고 울화(鬱火)가 치밀거나(간기울결),
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        오랜 생각과 걱정으로 심장과 비위의 기혈이 고갈되어 몸이 무거워집니다(심비양허).
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 해법: 막힌 기운을 뚫고(소간해울) 마른 기혈을 채우는(보익심비) 한방 원인 치료
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 우울증은 당신의 나약함 때문이 아닌, 신경계의 회복과 충전이 필요한 질환입니다.
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: CHECKLIST CARD (자가진단 체크리스트 카드)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c192c" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">우울증 자가진단 체크리스트</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "혹시 나도 우울증일까?" 핵심 증상 6가지
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    아래 항목 중 3가지 이상이 2주 이상 지속된다면 전문 진료와 상담이 필요합니다
  </text>

  <!-- 6 Checklist Cards (2 Columns x 3 Rows) -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">의욕 상실 &amp; 깊은 무기력증</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        평소 즐겁던 일에 흥미가 전혀 없고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        간단한 일상 활동조차 버겁고 귀찮습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 도파민 보상 시스템 저하 징후
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">수면장애 (불면 / 과수면)</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        잠들기 힘들고 새벽에 자주 깨거나(조기 각성),
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        하루 종일 누워있어도 피로가 안 풀립니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 멜라토닌-생체리듬 불균형 동반
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">브레인포그 &amp; 집중력 저하</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        머릿속에 안개가 낀 듯 멍하고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        기억력이 떨어져 사소한 결정도 어렵습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 전두엽 집행 기능 저하 상태
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(495, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">04</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">원인 불명의 신체화 증상</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        가슴 답답함, 만성 두통, 소화불량, 목 이물감 등
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        병원 검사상 이상 없는 신체 불쾌감이 지속됩니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 자율신경계 기능 실조 연계
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">극심한 자책감 &amp; 무가치감</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        "모든 게 내 잘못이다", "나는 쓸모없다"는
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        부정적 생각에 갇혀 자존감이 바닥을 칩니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 우울증의 왜곡된 인지 필터 작동
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(495, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">06</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">감정 기복 &amp; 식욕 급변</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        사소한 일에 눈물이 왈칵 쏟아지거나 예민해지고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        입맛이 아예 없거나 폭식을 반복합니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 변연계 감정 뇌 과민 반응
      </text>
    </g>
  </g>

  <!-- Bottom Result Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      👉 방치할수록 만성화되고 대인기피·신체 질환으로 이어집니다. 조기 진료를 권장합니다.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: TREATMENT CARD (맞춤 한방 치료 카드)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c192c" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">해아림한의원 1:1 맞춤 치료 시스템</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 자생력을 깨우는 3단계 활뇌(活腦) 한방 솔루션
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    약물 의존 없이 뇌 신경계 스스로 행복 호르몬을 만들어내도록 돕습니다
  </text>

  <!-- 3 Step Solution Cards -->
  <g transform="translate(60, 230)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        체질 맞춤 활뇌(活腦) 한약 처방 (세로토닌 자생력 복원)
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심비양허(心脾兩虛): 심장과 비위를 보해 뇌로 맑은 기혈 공급, 무기력·피로 해소 (귀비탕·온담탕 가감)
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 간기울결(肝氣鬱結): 꽉 막힌 울화(鬱火)와 답답한 가슴을 시원하게 소통 (시호소간산·소요산 가감)
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌 신경 염증을 억제하고 세로토닌·도파민 수용체 감수성을 정상화하여 활력 증진
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        백회·전중·신문혈 청열 약침 &amp; 미주신경 자극 침구
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 백회·풍지혈: 전두엽 혈류를 촉진하여 멍한 브레인포그를 걷어내고 집중력 회복
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전중혈(가슴 중앙): 억압된 감정과 가슴 뭉침을 즉각 이완시켜 숨길을 터줌
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 순수 한약재 멸균 추출 청열(淸熱) 약침으로 뇌신경 흥분을 가라앉히고 심신 안정
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        두개천골 추나요법(CST) &amp; 상부경추 뇌 혈류 교정
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 상부경추(C1-C2)와 후두골의 긴장을 풀어 뇌로 통하는 추골동맥 혈류량을 극대화
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 두개골 경막 긴장 해소를 통해 뇌척수액(CSF) 순환을 돕고 뇌 속 노폐물(신경독소) 배출
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 만성 어깨 결림, 두통, 불면증을 동시에 해소하여 몸과 마음의 긴장을 동시 리셋
      </text>
    </g>
  </g>

  <!-- Bottom Notice Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🏥 항우울제·수면제 복용 중이라도 병행 치료를 통해 뇌 자생력을 키우며 안전하게 감량 가능합니다.
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: SELF-CARE CARD (생활 속 힐링 팁 카드)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c192c" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">우울증 극복 생활 속 힐링 케어 팁</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    의지에 의존하지 않고 뇌를 깨우는 3가지 일상 루틴
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    작은 환경과 습관의 변화가 뇌 신경전달물질 분비의 건강한 방아쇠가 됩니다
  </text>

  <!-- 3 Self-Care Boxes -->
  <g transform="translate(60, 230)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0284c7" text-anchor="middle">햇볕·보행</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☀️</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 아침 20분 햇볕 쬐며 산책하기 (세로토닌 스위치 ON)
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 기상 직후 쬐는 햇빛은 망막을 통해 시상하부를 자극하여 천연 세로토닌 합성을 급증시킵니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 가벼운 리듬감 있는 보행은 뇌 신경망을 깨우고 15시간 뒤 밤 시간 멜라토닌 분비를 촉진합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0369a1">
        👉 실천: 의욕이 안 날 때는 '집 앞 편의점 다녀오기'처럼 아주 작은 목표부터 시작하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fee2e2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">장뇌축식이</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🥗</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 트립토판 풍부 식품 &amp; 장(腸) 건강 관리
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 인체 세로토닌의 약 90%는 소화기 장에서 만들어지므로 장내 미생물 환경이 매우 중요합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 바나나, 달걀, 두부, 견과류 등 세로토닌 원료인 트립토판이 풍부한 자연식을 섭취하세요.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 주의: 혈당을 급격히 흔드는 단순당(밀가루, 액상과당)과 뇌신경을 흥분시키는 카페인을 줄이세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">마음챙김</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌱</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. '초미세 실천(Micro-Step)'과 자기 비난 멈추기
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 무기력할 때는 거창한 목표 대신 "물 한 컵 마시기", "창문 열기" 등 1분 행동에 집중합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 작은 행동 하나마다 "해냈다"고 스스로를 인정하고, "지금은 쉬어가는 때"라는 자기 연민을 갖습니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: "오늘 아무것도 못했다"는 자책 대신, "오늘 하루도 잘 버텼다"고 나를 토닥여주세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🌸 "우울증은 마음의 감기가 아니라, 충분히 쉬고 에너지를 채워달라는 뇌의 간절한 신호입니다."
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
  console.log('Generating Bupyeong Depression blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
