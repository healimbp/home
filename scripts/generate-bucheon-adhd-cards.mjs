import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-adhd',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const fontFamilies = "'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Pretendard', sans-serif";

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 1. MAIN THUMBNAIL (01_naver_main_thumbnail.jpg)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000000" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e36" />
      <stop offset="50%" stop-color="#112d52" />
      <stop offset="100%" stop-color="#081526" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 68)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">부천 소아청소년 &amp; 성인 ADHD 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="620" height="42" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      <text x="24" y="27" font-family="${fontFamilies}" font-size="18.5" font-weight="bold" fill="#0369a1">
        산만함과 충동성 "아이의 의지 부족이나 게으름이 아닙니다"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 ADHD 한의원 원인과 맞춤 치료법
    </text>
    <text x="55" y="196" font-family="${fontFamilies}" font-size="23" font-weight="600" fill="#334155" letter-spacing="-0.5">
      전두엽 조절 브레이크 회복 &amp; 도파민 자생력 강화 가이드
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#e0f2fe" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#0284c7" text-anchor="middle">01</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f172a">POINT 01. 원인 분석</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#475569">전두엽 실행기능 저하 &amp; 도파민 결핍</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">뇌 속 지휘자의 조절 브레이크 미성숙</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#fef3c7" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#d97706" text-anchor="middle">02</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f172a">POINT 02. 자가진단</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#475569">주의력 결핍 · 과잉행동 · 충동성</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#d97706">연령별 5대 핵심 증상 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#ecfdf5" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#059669" text-anchor="middle">03</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f172a">POINT 03. 한방 치료</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#475569">청뇌총명 탕약 &amp; 뉴로피드백 훈련</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">두뇌 조절력과 스스로 집중하는 자생력</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#f5f3ff" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#7c3aed" text-anchor="middle">04</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f172a">POINT 04. 생활 코칭</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#475569">20분 뽀모도로 &amp; 행동 시각화 루틴</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#7c3aed">환경 구조화 및 자존감 지지 코칭</text>
      </g>
    </g>

    <!-- Bottom Footer Box -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="280" rx="20" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
      
      <!-- Doctor Profile Box -->
      <g transform="translate(35, 30)">
        <circle cx="35" cy="35" r="32" fill="#0284c7" />
        <text x="35" y="43" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">權</text>
        <text x="85" y="32" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">해아림한의원 인천부평점 · 대표원장 권형근</text>
        <text x="85" y="58" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#475569">한방침구과 전문의 직접 진료 ｜ 소아청소년 &amp; 성인 ADHD 1:1 맞춤 치료</text>
      </g>

      <!-- Location and Hours -->
      <g transform="translate(35, 125)">
        <rect x="0" y="0" width="790" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <text x="25" y="38" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#0284c7">[ 오시는 길 ]</text>
        <text x="135" y="38" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분 / 부천 인접)</text>
        
        <text x="25" y="72" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#0284c7">[ 진료 시간 ]</text>
        <text x="135" y="72" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">월 · 수 · 금 20시 야간진료 ｜ 화 19시 ｜ 토 15시</text>

        <text x="25" y="102" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#0284c7">[ 예약 문의 ]</text>
        <text x="135" y="102" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0369a1">032-719-3472 ｜ 네이버 간편 예약 &amp; 카카오톡 1:1 비밀상담 가능</text>
      </g>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01 CAUSE CARD (02_point1_cause.jpg)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e36" />
      <stop offset="60%" stop-color="#112d52" />
      <stop offset="100%" stop-color="#081526" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#0284c7" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
      신경과학으로 밝혀낸 ADHD 발생 메커니즘
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      전두엽 브레이크 패드 마모 &amp; 도파민 신호 저하
    </text>

    <!-- 3 Key Mechanism Cards -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2fe" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0284c7" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">전두엽 실행기능(Executive Function) 미성숙</text>
        <text x="175" y="105" font-family="${fontFamilies}" font-size="16.5" font-weight="500" fill="#475569">계획 세우기, 우선순위 결정, 불필요한 자극을 걸러내는 뇌의 필터 기능 저하</text>
        <text x="175" y="135" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">➔ 뇌 속 오케스트라 지휘자가 자리를 비운 것과 같은 조절 실조 상태</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#fef3c7" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#d97706" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">도파민 &amp; 노르에피네프린 신경전달물질 결핍</text>
        <text x="175" y="105" font-family="${fontFamilies}" font-size="16.5" font-weight="500" fill="#475569">동기를 부여하고 집중력을 유지하게 만드는 신경물질 수신 감도의 저하</text>
        <text x="175" y="135" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#d97706">➔ 지루한 과제를 견디지 못하고 새로운 자극만을 충동적으로 탐색</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#ecfdf5" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#059669" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">한의학적 원인: 심신불교(心腎不交) &amp; 담화상충</text>
        <text x="175" y="105" font-family="${fontFamilies}" font-size="16.5" font-weight="500" fill="#475569">심장의 열이 머리로 치솟고 신장의 정기가 부족하여 정신이 안정을 잃음</text>
        <text x="175" y="135" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">➔ 머리를 맑게 식혀주고(청열안신) 뇌 기혈 순환을 돕는 치료가 핵심</text>
      </g>
    </g>

    <!-- Bottom Message Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        "아이를 다그치기보다 뇌 신경망의 조절 브레이크를 키워주는 치료가 필요합니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

// 3. POINT 02 CHECKLIST CARD (03_point2_checklist.jpg)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e36" />
      <stop offset="60%" stop-color="#112d52" />
      <stop offset="100%" stop-color="#081526" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#d97706" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706">
      진료실에서 확인하는 ADHD 5대 핵심 증상
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      우리 아이 / 나의 집중력 체크리스트 5선
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#fef3c7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">1. 세부적인 사항에 주의를 기울이지 못하고 실수가 잦음</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#64748b">문제를 끝까지 읽지 않고 풀거나, 아는 문제도 덜렁거리다 틀리는 경우</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#fef3c7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">2. 과제나 놀이를 할 때 지속적으로 주의를 집중하기 어려움</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#64748b">10분 이상 자리에 가만히 앉아있지 못하고 딴생각을 하거나 멍하니 있음</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#fef3c7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">3. 다른 사람이 말할 때 귀 기울여 듣지 않는 것처럼 보임</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#64748b">부모나 교사가 여러 번 불러도 반응이 늦거나 지시 사항을 금방 잊어버림</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#fef3c7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">4. 일상 활동에서 필요한 물건을 자주 잃어버리고 정리정돈 불가</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#64748b">준비물, 지갑, 스마트폰, 숙제장을 매일 잃어버리고 가방 안이 난잡함</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#fef3c7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#d97706" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">5. 손발을 꼼지락거리거나 질문이 끝나기도 전에 불쑥 대답함</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#64748b">차례를 기다리지 못하고 남의 대화나 게임에 끼어들며 충동을 참지 못함</text>
      </g>
    </g>

    <!-- Bottom Guide -->
    <g transform="translate(55, 745)">
      <rect x="0" y="0" width="860" height="95" rx="18" fill="#fef3c7" stroke="#fde68a" stroke-width="1.5" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="18.5" font-weight="bold" fill="#92400e" text-anchor="middle">
        💡 위 항목 중 3가지 이상이 6개월 이상 지속된다면
      </text>
      <text x="430" y="72" font-family="${fontFamilies}" font-size="16" font-weight="600" fill="#b45309" text-anchor="middle">
        단순한 성격으로 치부하지 말고 전두엽 뇌기능 정밀 검사를 받아보셔야 합니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 4. POINT 03 TREATMENT CARD (04_point3_treatment.jpg)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e36" />
      <stop offset="60%" stop-color="#112d52" />
      <stop offset="100%" stop-color="#081526" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#059669" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      스스로 집중하고 충동을 억제하는 두뇌 자생력 회복
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 부평점 1:1 맞춤 ADHD 통합 솔루션
    </text>

    <!-- 3 Key Treatment Pillar Cards (Spacious & Clean Horizontal Layout) -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#d1fae5" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#059669" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#065f46">청뇌총명(淸腦聰明) 맞춤 한약 처방</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">귀비탕 · 억간산 · 총명탕 가감방으로 심장 허열 진정 &amp; 전두엽 기혈 공급</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">➔ 도파민 신경전달물질 활성화 및 충동성·산만함 조절 자생력 복원</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2fe" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0284c7" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">NeuronFlex 뉴로피드백 &amp; IM 감각통합</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">산만한 세타파를 억제하고 고도의 몰입을 돕는 SMR파 · 저베타파 스스로 강화</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">➔ 1/1,000초 신경 동기화로 전두엽의 자기조절(Self-regulation) 완성</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#f3e8ff" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#7c3aed" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#6b21a8">두개천골 추나요법 (CST) &amp; 경혈 침구 치료</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">상부 경추와 두개골 정밀 교정으로 뇌척수액 순환 촉진 및 백회·사신총 자극</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#7c3aed">➔ 뇌의 피로 독소 배출 및 신체 안절부절감·과잉행동 신속 진정</text>
      </g>
    </g>

    <!-- Bottom Tag -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        "약물 의존 없이 스스로 집중하는 뇌의 힘을 키워줍니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

// 5. POINT 04 SELFCARE CARD (05_point4_selfcare.jpg)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e36" />
      <stop offset="60%" stop-color="#112d52" />
      <stop offset="100%" stop-color="#081526" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#7c3aed" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 생활 코칭</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#7c3aed">
      의지에 기대지 않고 환경을 바꾸는 현실적 솔루션
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      가정에서 실천하는 집중력 강화 코칭 루틴 3가지
    </text>

    <!-- 3 Lifestyle Routine Cards -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#f3e8ff" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#7c3aed" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f172a">'20분 몰입 + 5분 휴식' 시각 타이머(Visual Timer) 활용</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#475569">남은 시간이 빨간색으로 줄어드는 타이머를 사용하여 시간 감각을 시각화합니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#7c3aed">➔ 전두엽의 시간 인지 부담을 덜어주어 과제 착수 거부감을 줄여줍니다.</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#f3e8ff" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#7c3aed" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f172a">행동 순서를 잘게 쪼갠 '1장 체크리스트' 책상 부착</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#475569">"숙제해라" 대신 "1. 알림장 펴기 ➔ 2. 수학책 꺼내기 ➔ 3. 3문제 풀기"로 구체화합니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#7c3aed">➔ 하나씩 체크할 때마다 뇌에서 도파민이 분비되어 성취감을 느낍니다.</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#f3e8ff" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#7c3aed" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f172a">하루 30분 유산소 운동 &amp; 기상 직후 15분 햇볕 쬐기</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#475569">줄넘기, 수영, 가벼운 러닝은 뇌유래신경영양인자(BDNF)를 분비시켜 전두엽을 깨웁니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#7c3aed">➔ 잉여 에너지를 건전하게 발산하고 밤시간 숙면을 유도합니다.</text>
      </g>
    </g>

    <!-- Bottom Message Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        "비난 대신 작은 성공의 경험을 누적해 주는 것이 최고의 치료 환경입니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

function renderAndSave(svg, fileName) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render().asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, pngData);
  }
  console.log(`✅ 생성 완료: ${fileName}`);
}

console.log('🎨 [부천 ADHD] 고화질 5종 카드뉴스 이미지 렌더링 시작...\n');

renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
renderAndSave(generatePoint1Cause(), '02_point1_cause.jpg');
renderAndSave(generatePoint2Checklist(), '03_point2_checklist.jpg');
renderAndSave(generatePoint3Treatment(), '04_point3_treatment.jpg');
renderAndSave(generatePoint4Selfcare(), '05_point4_selfcare.jpg');

console.log('\n🎉 부천 ADHD 5종 카드뉴스 생성이 성공적으로 완료되었습니다!');
