import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-depression',
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
      인천 우울증 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      세로토닌 고갈 · 장-뇌 축 붕괴 · 자율신경 실조의 근본 해법
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
          마음이 아닌 '뇌 신경전달물질(세로토닌) 고갈'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          만성 스트레스와 신경 염증으로 전두엽 활성이 떨어지고 행복 호르몬 분비가 멈춘 상태
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          장(腸)과 뇌를 잇는 '장-뇌 축(Gut-Brain Axis)' 복원
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          세로토닌의 90%가 만들어지는 소화기 담음(痰飮)을 제거하여 뇌로 맑은 기혈과 신경물질 공급
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          1:1 체질 해울(解鬱) 한약 &amp; 두개천골 뇌혈류 추나
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          가슴의 울체된 기운을 소통시키고 뇌 자생력을 깨워 약물 의존 없는 온전한 회복 완성
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f172a" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#38bdf8" text-anchor="middle">
        인천 부평역 7번 출구 도보 5분 ｜ 야간진료(월·수·금) ｜ 1:1 맞춤 안심 치료
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
    "마음먹기 달린 문제가 아닙니다, 뇌가 방전된 것입니다"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    신경 염증과 전두엽 활성 저하로 세로토닌·도파민 회로가 멈춘 상태입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧠</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 전두엽 기능 저하 &amp; 세로토닌 고갈
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        만성 스트레스는 전두엽의 혈류량을 떨어뜨려 의욕과 집중력을 마비시킵니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        행복감과 안정감을 주는 세로토닌·도파민이 고갈되어 세상의 모든 일에 흥미를 잃게 됩니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 핵심: 의지박약이 아닌 뇌 신경회로의 생물학적 기능 저하 질환
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef2f2" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🦠</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 장-뇌 축(Gut-Brain Axis) 붕괴와 신경 염증
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        인체 세로토닌의 90%는 장(腸)에서 만들어지며, 장내 환경이 무너지면 염증 독소가 발생합니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        염증 물질이 뇌로 유입되어 미세아교세포를 자극하고 신경세포의 연결망(BDNF)을 파괴합니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c">
        👉 해법: 소화기 담음(痰飮)을 다스려 전신 염증을 끄고 뇌 환경을 정화해야 합니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef3c7" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌪️</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 간기울결(肝氣鬱結)과 흉격 기운의 정체
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        감정을 속으로 삭이고 억누르면 한의학적으로 간(肝)의 소통 기능이 막히고 기운이 뭉칩니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        가슴(전중혈)이 답답하고 한숨이 늘며, 만성 피로와 수면 장애, 신체 통증으로 번집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 치료: 맺힌 기운을 흩어버리는 소간해울(疏肝解鬱) 한방 치료가 필수적입니다.
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 우울증은 나약함이 아닌 '두뇌 신경계의 에너지 방전' 신호이므로 적절한 치료가 필요합니다.
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
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    2주 이상 아래 증상 중 3가지 이상이 지속된다면 전문적인 진단과 치료가 필요합니다
  </text>

  <!-- 6 Checklist Cards (2 Columns x 3 Rows) -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">극심한 흥미 &amp; 즐거움 상실</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        평소 즐기던 취미, TV, 음식에도 아무런
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        감정이나 재미가 느껴지지 않고 무덤덤합니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 뇌 보상회로(도파민) 활성 저하
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">만성 무기력 &amp; 신체 피로감</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        잠을 아무리 자도 몸이 솜에 젖은 듯 무겁고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        침대 밖으로 나오는 것조차 버겁습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 뇌 신경 에너지 및 기혈(氣血) 방전
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">수면 장애 (불면증 또는 과수면)</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        새벽 3~4시에 일찍 깨어 다시 잠들지 못하거나,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        온종일 잠에 취해 멍한 상태가 반복됩니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 멜라토닌 리듬 및 생체시계 교란
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(495, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">04</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">집중력 저하 &amp; 브레인포그</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        머리에 안개가 낀 듯 멍하고 기억력이 떨어져
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        간단한 일상 결정이나 업무 처리가 어렵습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 전두엽 집행기능 및 작업기억 감퇴
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">자책감 &amp; 무가치감</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        "내가 가족에게 짐이 되는 것은 아닐까",
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        "나는 쓸모없는 사람이다"는 부정적 생각 침투.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 우울증 특유의 인지 왜곡 신호
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(495, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">06</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">가슴 답답함 &amp; 신체화 통증</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        가슴 한가운데가 꽉 막혀 한숨이 나오고
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        원인 모를 두통, 소화불량, 어지럼이 동반됩니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 자율신경계 불균형 및 신체화 반응
      </text>
    </g>
  </g>

  <!-- Bottom Result Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      👉 방치할수록 만성화되고 뇌 기능이 저하됩니다. 초기에 1:1 맞춤 진료를 권장합니다.
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
    뇌 자생력을 깨우는 3단계 안심·해울(解鬱) 솔루션
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    감정 둔마나 의존성 없이 뇌와 신경계 본래의 활력을 복원합니다
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
        체질 맞춤 안심·해울(安心·解鬱) 한약 처방
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 간기울결(肝氣鬱結): 뭉친 기운을 풀고 가슴 답답함과 한숨을 해소 (시호소간산, 분심기음)
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심비양허(心脾兩虛): 방전된 뇌수와 기혈을 충전하여 의욕·식욕 회복 (귀비탕, 가미온담탕)
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 장내 담음(痰飮) 배출로 장-뇌 축을 정화하고 천연 세로토닌 합성 정상화
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        전중·신문혈 청열 약침 &amp; 자율신경 조절 침구
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전중혈(가슴 중앙): 꽉 막힌 흉곽 압박감을 해소하고 횡격막 호흡 근육을 즉각 이완
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 백회혈·신문혈: 불안과 우울로 과열된 뇌 신경을 진정시키고 부교감신경 활성화
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 순수 한약 추출 멸균 약침으로 신경 염증 및 만성 뇌 피로 물질 신속 배출
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        두개천골 추나요법(CST) &amp; 뉴로피드백 뇌파 훈련
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 상부경추(C1-C2)와 두개골 경막 긴장을 풀어 뇌로 통하는 혈류와 뇌척수액 순환 복원
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 두뇌 훈련(뉴로피드백)을 통해 우울 뇌파(과도한 델타·세타파)를 안정 SMR파로 전환
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 머리가 맑아지는 브레인포그 개선과 함께 스트레스 저항 탄력성 완성
      </text>
    </g>
  </g>

  <!-- Bottom Notice Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🏥 양약(항우울제·수면제) 복용 중이라도 부작용을 줄이며 병행·감량 치료가 가능합니다.
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
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">우울 극복 생활 속 힐링 케어 팁</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    의지에 기대지 않고 환경을 바꾸는 3가지 실천 루틴
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    작은 루틴의 변화가 뇌 세로토닌을 깨우고 마음의 면역력을 높여줍니다
  </text>

  <!-- 3 Self-Care Boxes -->
  <g transform="translate(60, 230)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0284c7" text-anchor="middle">빛 요법</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☀️</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">
        1. 기상 직후 15분 아침 햇볕 쬐기 &amp; 가벼운 보행
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 아침 햇볕은 눈의 망막을 통해 뇌 송과체와 전두엽에 '세로토닌 합성' 신호를 보냅니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 낮에 합성된 세로토닌은 밤에 천연 수면 호르몬인 멜라토닌으로 전환되어 숙면을 유도합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0f9ff" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: 기상 후 커튼을 활짝 열고 베란다나 집 앞을 15분간 가볍게 걸어보세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef2f2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">신경 이완</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫖</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 카페인·단순당 줄이고 따뜻한 한방차 마시기
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 우울할 때 당기는 단 음식과 카페인은 혈당 롤러코스터와 교감신경 긴장을 유발합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 마음을 안정시키는 대추차, 산조인차, 카모마일 등 따뜻한 음료로 위장을 편안하게 보호하세요.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 저녁 시간 이후 스마트폰과 커피를 멀리하고 따뜻한 차 한 잔의 여유를 가지세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">인지 전환</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">📝</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. '오늘 해낸 아주 작은 일 3가지' 칭찬하기
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 우울증 상태에서는 뇌가 '못한 일'에만 집착하여 자책감을 눈덩이처럼 불립니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • "물 한 잔 마시기", "이불 개기", "세수하기" 등 지극히 사소한 성취를 스스로 인정해주세요.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 거창한 목표 대신 작은 마이크로 액션(Micro-action)으로 도파민 회로를 깨우세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🌸 "당신이 나약해서가 아닙니다. 지친 뇌에 진정한 쉼과 활력을 불어넣어 줄 때입니다."
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
  console.log('Generating Incheon Depression blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
