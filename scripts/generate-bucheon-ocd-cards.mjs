import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/bucheon-ocd';
const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

// 1. MAIN THUMBNAIL (메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061824" />
      <stop offset="50%" stop-color="#0c2c38" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="46" rx="23" fill="#0d9488" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">두뇌신경 &amp; 자율신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="490" height="38" rx="8" fill="#f0fdfa" />
      <text x="18" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        문 잠갔나 5번씩 확인 "불안의 악순환 끊는 법"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="46" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 신경정신과 강박증 치료
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 과열 오경보를 끄고 스스로 통제하는 뇌 자생력 회복
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 260)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#f0fdfa" />
        <circle cx="67" cy="67" r="26" fill="#0d9488" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">뇌 전대상피질(ACC) 오경보 &amp; CSTC 회로 과열</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">확인해도 꺼지지 않는 가짜 에러 신호와 불길한 침투사고의 신경 루프</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">성격·의지 문제가 아닌 '종결 스위치 고장'</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">알면서도 멈추지 못하는 고통, 자책 대신 과학적 원인 규명이 우선</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뇌파 바이오피드백 &amp; 추나·CST</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">뇌 허열을 내리고 세로토닌 밸런스를 바로잡아 스스로 조절하는 힘 회복</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f172a" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 ｜ 1:1 맞춤 두뇌신경 클리닉 (부평역 7번 출구 인근)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: POINT 01 강박증 핵심 신경학적 원인 요약 카드
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c192c" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#0284c7" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">강박증의 신경생리학적 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "알면서도 멈추지 못하는 고통, 내 탓이 아닙니다"
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    뇌 전대상피질(ACC) 과열과 CSTC 신경 회로의 오작동
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0f2fe" />
      <circle cx="75" cy="80" r="26" fill="#0284c7" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#0369a1">전대상피질(ACC)의 가짜 에러 신호 폭주</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">손을 씻거나 문을 잠가도 뇌의 에러 점검 센터가 꺼지지 않고</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">"삐-! 뭔가 잘못됐어, 다시 확인해!"라는 가짜 위험 신호를 폭출합니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7">👉 의지의 문제가 아닌 오류 감지 스위치의 신경학적 고장입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309">기저핵(생각 필터)의 여과 기능 약화</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">불필요한 생각과 잡념을 걸러주는 뇌의 브레이크가 헐거워져</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">사소한 불길한 생각이 끊임없이 침투하며 꼬리를 물고 이어집니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 만성 스트레스와 교감신경 항진 시 여과 기능이 급격히 저하됩니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b91c1c">강박행동의 덫: 일시적 안도와 악순환의 강화</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">확인하거나 손을 씻으면 순간 불안은 가라앉지만,</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">뇌는 이 행동을 생존 규칙으로 학습해 다음번에 더 큰 불안을 부릅니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#be123c">👉 뇌 스스로 안전을 인지하는 자생력을 회복해야 악순환이 끊깁니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0c2a4d" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 강박증은 안전 종결 신호를 인지하지 못하는 뇌 신경망의 과열 질환입니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: POINT 02 강박증 4대 대표 유형 요약 카드
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#042621" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#10b981" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">강박증 4대 유형 &amp; 자가진단</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    나의 강박증은 어떤 유형일까요?
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a7f3d0" letter-spacing="-0.5">
    1가지 이상으로 하루 1시간 이상 소비 시 조기 진단이 필요합니다
  </text>

  <!-- 4 Step Process Flow Cards -->
  <g transform="translate(60, 240)">
    <!-- Type 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">유형 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">확인강박</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">확인 강박형 (가스 밸브, 문 잠금, 스위치 등)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">도어락 흔들기, 플러그 뽑기, 사진 촬영 등으로 외출 준비에 수십 분 지연</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 "불이 나거나 도둑이 들면 어쩌지" 하는 파국화 예측 불안 동반</text>
    </g>

    <!-- Type 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">유형 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">오염청결</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">오염 및 청결 강박형 (손 씻기, 샤워 루틴, 소독)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">공공 손잡이를 못 만지고 손등이 짓무르고 피가 날 때까지 비누칠 반복</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 정해진 순서가 조금만 어긋나도 처음부터 다시 씻는 극단적 결벽 양상</text>
    </g>

    <!-- Type 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">유형 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">대칭정렬</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">대칭·정렬 및 숫자 강박형 (줄 맞추기, 순서 집착)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">물건의 각도나 좌우 대칭이 완벽해야 하며 보도블록 선을 피하며 걸음</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 짝수나 특정 숫자에 맞춰 행동해야 마음속 불편감이 해소됨</text>
    </g>

    <!-- Type 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#faf5ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">유형 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">침투사고</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#6b21a8">침투적 사고 &amp; 금기 강박형 (불길한 상상, 죄책감)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">가족을 해치는 끔찍한 상상이나 도덕적·성적으로 불경한 생각이 떠오름</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 스스로를 죄인 취급하며 극심한 자기혐오와 수치심에 시달림</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#064e3b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      📋 강박 유형에 따라 과열된 뇌 영역과 장부의 불균형 처방이 완전히 달라집니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: POINT 03 해아림 4단계 맞춤 한방 치료 솔루션 요약 카드
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#131a38" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#6366f1" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#a5b4fc">해아림 4단계 통합 강박 치료</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    불안의 굴레를 끊고 뇌 자생력을 회복합니다
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#c7d2fe" letter-spacing="-0.5">
    신경안정제 부작용 걱정 없는 1:1 맞춤 한방 두뇌 치료 솔루션
  </text>

  <!-- 4 Step Solution Cards -->
  <g transform="translate(60, 240)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eef2ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#4f46e5" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#4338ca" text-anchor="middle">맞춤한약</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#312e81">1:1 체질 맞춤 청뇌안신(淸腦安神) 탕전</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">간화상염(시호청간탕)·심비양허(귀비탕)·심담허겁(온담탕) 맞춤 처방</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5">👉 뇌 허열을 내리고 세로토닌 대사를 도와 잡념 필터링 기능을 정상화</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">뇌파훈련</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">NeuronFlex 두뇌 뇌파 바이오피드백</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">과열된 고주파 각성 베타파를 낮추고 안정적인 알파파·세타파 유도</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 뇌 스스로 충동을 억제하고 불안을 가라앉히는 자율 조절력을 강화</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">침구약침</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">백회혈·신문혈 침구 및 청열 안신 약침</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">두부 백회혈과 심경락 신문혈을 자극해 뇌혈류 개선 및 신경 안정</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 가슴 두근거림, 숨찬 느낌, 상열감을 즉각 진정시키는 효과</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">4단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">구조이완</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">두개천골요법(CST) &amp; 상부 경추 추나요법</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">턱관절과 상부 경추(1·2번)의 긴장을 풀어 뇌척수액 순환 촉진</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 중추신경계의 물리적 압박을 해소해 뇌간의 과각성 신호를 차단</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#1e1b4b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🩺 항불안제·SSRI 복용 중에도 안전하게 병행하며 단계적 감량(테이퍼링)을 돕습니다
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: POINT 04 일상 속 강박 루프 탈출 꿀팁 카드
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#2d1908" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#f59e0b" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">생활 속 강박 루프 탈출 꿀팁</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    오늘부터 바로 실천하는 인지행동 4수칙
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    뇌에게 "지금 안전하니 행동하지 않아도 돼"라고 알려주세요
  </text>

  <!-- 4 Process Cards -->
  <g transform="translate(60, 240)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">수칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">라벨링</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#991b1b">생각에 꼬리표 붙이기 (생각과 나를 분리)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">"큰일 났다" 대신 "아, 뇌의 경보기가 또 가짜 오작동을 하네"로 관찰</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 생각과 나를 동일시하지 않고 제3자처럼 한 걸음 물러서서 흘려보내기</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">수칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">10분지연</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">10분의 지연 법칙 (충동 뒤로 미루기)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">확인이나 손 씻기 충동이 들 때 즉시 하지 않고 딱 10분만 기다려보기</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 10분을 버티는 동안 뇌는 '안 해도 안전하다'는 새 회로를 학습합니다</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">수칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">80점수용</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">80점짜리 찜찜함 수용하기 (불확실성 연습)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">세상에 100% 완전한 안전은 없습니다. "80%만 확실해도 충분해"</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 약간의 불안과 찜찜함을 안고 일상 생활을 지속하는 유연한 태도</text>
    </g>

    <!-- Tip 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">복식호흡</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">횡격막 이완 4·6 복식 호흡법</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">숨을 4초간 들이마시고 6초간 천천히 내쉬며 횡격막 긴장을 이완</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 과열된 교감신경을 즉각 가라앉히고 심박수를 안정시킵니다</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      🌱 강박사고는 억누르려 할수록 거세집니다. 가짜 신호를 인정하고 흘려보내세요
    </text>
  </g>
</svg>
  `;
}

async function renderCards() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const cards = [
    { name: '01_main_summary_thumbnail.png', svg: generateMainThumbnail() },
    { name: '02_point1_cause_summary.png', svg: generateCard1() },
    { name: '03_point2_checklist_summary.png', svg: generateCard2() },
    { name: '04_point3_treatment_summary.png', svg: generateCard3() },
    { name: '05_point4_selfcare_summary.png', svg: generateCard4() }
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
    const outputPath = path.join(outputDir, card.name);
    fs.writeFileSync(outputPath, pngBuffer);
    console.log(`✅ 생성 완료 (부천 강박증 한글 카드): ${card.name} (${pngBuffer.length} bytes)`);
  }
}

renderCards().catch(console.error);
