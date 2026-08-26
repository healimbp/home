import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-adhd';

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

// 1. MAIN THUMBNAIL (메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1b33" />
      <stop offset="60%" stop-color="#162e4a" />
      <stop offset="100%" stop-color="#091426" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="46" rx="23" fill="#0284c7" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">소아청소년 &amp; 성인 뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="480" height="38" rx="8" fill="#e0f2fe" />
      <text x="18" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        산만함과 깜빡임 "아이의 의지 부족이 아닙니다"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="48" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부평 ADHD 원인과 맞춤 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      전두엽 실행기능 저하 &amp; 도파민 불균형 회복 가이드
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 260)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">전두엽 뇌 사령탑의 실행기능 발달 지연</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">계획 수립과 충동 억제를 담당하는 전두엽 회로의 활성도 저하</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">도파민·노르에피네프린 신경전달 불균형</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">주의집중 유지와 동기 부여를 돕는 신경물질의 분비 불균형</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뉴로피드백 두뇌 훈련</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">두뇌 신경망을 성숙시켜 스스로 집중력을 조절하도록 돕는 통합 솔루션</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f172a" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 ｜ 1:1 맞춤 뇌신경 클리닉 (부평역 19번 출구 앞)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: ADHD 핵심 원인 요약 카드
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0a2342" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#0284c7" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">핵심 01</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">ADHD의 뇌 신경학적 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    성격이나 태도의 문제가 아닙니다!
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    전두엽(뇌 사령탑)의 실행기능 및 조절력 발달 지연
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0f2fe" />
      <circle cx="75" cy="80" r="26" fill="#0284c7" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#0369a1">전두엽 실행기능(뇌 브레이크) 발달 미성숙</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">계획 수립, 우선순위 지정, 충동 억제, 집중 유지를 담당하는</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">전두엽의 신경 회로가 또래보다 2~3년 성장이 늦어 발생합니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7">👉 아이가 '안 하는 것'이 아니라 뇌 기능상 '안 되는 것'입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309">도파민·노르에피네프린 신경전달물질 불균형</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">주의집중 유지와 성취감, 동기부여를 유발하는 뇌 신경물질의</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">수용체 작용이 원활하지 않아 지루함을 견디기 힘들어합니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 즉각적인 자극(게임 등)에는 과몰입하고 일상 공부는 힘들어합니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b91c1c">부모님 주의사항: 다그침과 체벌은 증상을 악화시킵니다</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">"왜 집중을 못 하니"라며 혼내기만 하면 자존감이 급격히 무너지고,</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">2차적인 우울증, 불안장애, 적대적 반항장애로 번질 수 있습니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#be123c">👉 뇌 발달 취약점을 이해하고 전문 치료를 시작하는 것이 먼저입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 ADHD는 뇌의 주의집중 및 충동 억제 조절 회로가 성숙하는 과정의 문제입니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: 소아 vs 성인 ADHD 특징 요약 카드
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#052c24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#10b981" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">유형 02</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">소아 &amp; 성인 ADHD 대표 유형</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    연령과 성향에 따라 다르게 나타납니다
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a7f3d0" letter-spacing="-0.5">
    겉으로 드러나는 과잉행동뿐만 아니라 '조용한 ADHD'도 주의해야 합니다
  </text>

  <!-- 4 Step Process Flow Cards -->
  <g transform="translate(60, 240)">
    <!-- Type 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">유형 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">과잉행동</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">과잉행동·충동형 (소아청소년기 다발)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">수업 시간에 자리를 이탈하거나 몸을 끊임없이 움직이고, 차례를 못 기다림</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 위험한 행동을 생각 없이 저지르거나 감정 조절이 어려워 잦은 마찰 발생</text>
    </g>

    <!-- Type 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">유형 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">조용한형</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">주의력 결핍형 (조용한 ADHD / 여아 다발)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">얌전히 앉아 있지만 멍하니 딴생각을 하고, 지시사항을 자꾸 잊어버림</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 과잉행동이 없어 발견이 늦어지기 쉬우며 성적 저하와 자책으로 이어짐</text>
    </g>

    <!-- Type 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">유형 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">성인형</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">성인 ADHD (실행기능 저하 &amp; 미루기)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">업무 마감일 넘기기, 만성적인 정리정돈 불가, 약속 지각 및 잦은 이직</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 과잉행동은 줄어들지만 내적인 조급함과 만성 피로, 무기력감이 지속됨</text>
    </g>

    <!-- Type 4 (Warning) -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="185" rx="20" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow2)" />
      
      <rect x="25" y="30" width="120" height="125" rx="16" fill="#ffe4e6" />
      <text x="85" y="78" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#e11d48" text-anchor="middle">동반질환</text>
      <text x="85" y="122" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c" text-anchor="middle">주의</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#9f1239">2차 정서 질환 및 틱장애 동반 위험</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#881337">ADHD 환자의 30~50%가 틱장애, 불안장애, 수면장애를 동반합니다!</text>
      <text x="170" y="145" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4c0519">단순 집중력 훈련을 넘어 전반적인 두뇌 자율신경 안정이 필수적입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#064e3b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      ⚠️ 나이가 들면 저절로 낫는 것이 아니므로 정확한 두뇌 기능 평가가 중요합니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: 해아림 3대 통합 치료 솔루션 요약 카드
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#1b1238" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#818cf8" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">치료 03</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c7d2fe">해아림 3대 통합 치료</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    전두엽을 깨우고 뇌 자생력을 키웁니다
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a5b4fc" letter-spacing="-0.5">
    일시적인 화학적 흥분제 대신 스스로 조절하는 두뇌 회로 구축
  </text>

  <!-- 3 Solutions -->
  <g transform="translate(60, 245)">
    <!-- Solution 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e0e7ff" />
      <circle cx="75" cy="80" r="26" fill="#4f46e5" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#3730a3">체질별 1:1 맞춤 한약 처방</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1e1b4b">심비양허형(기혈 보강·기억력 증진), 간기울결형(짜증·충동 완화), 담화요심형(과열 진정)</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">뇌 혈류를 맑게 하고 신경계를 안정시켜 집중력과 차분함을 길러줍니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5">👉 식욕 부진, 수면 장애, 틱 유발 등의 부작용 부담 없이 순하게 치료합니다.</text>
    </g>

    <!-- Solution 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#f0fdf4" />
      <circle cx="75" cy="80" r="26" fill="#16a34a" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#166534">뉴로피드백 &amp; 감각통합 두뇌 훈련</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#14532d">주의집중 뇌파(SMR파/베타파) 활성화 및 타이밍 감각통합 훈련</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">전두엽의 억제 및 몰입 회로를 스스로 훈련하여 작업 기억력을 증진합니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a">👉 학습 수행 능력 향상과 충동성 감소 효과를 동시에 얻을 수 있습니다.</text>
    </g>

    <!-- Solution 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fdf4ff" />
      <circle cx="75" cy="80" r="26" fill="#c026d3" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#86198f">턱관절 밸런스 교정 &amp; 두개천골 뇌순환요법</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#701a75">상부 목뼈(경추 1·2번)와 두개골의 경막 긴장 해소</text>
      <text x="140" y="148" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#475569">뇌척수액 순환을 원활하게 하여 과열된 중추신경계의 피로를 씻어냅니다.</text>
      <text x="140" y="188" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c026d3">👉 만성 두통, 거북목, 수면 장애 등 신체적 긴장까지 함께 해소합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#312e81" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🌱 뇌 신경계 스스로 항상성을 유지하도록 돕는 안전한 근본 치료
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: 가정 내 양육 & 생활 관리 가이드
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#3d1f05" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#f59e0b" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">원칙 04</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">가정 내 양육 &amp; 생활 관리</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    부모님과 본인이 실천하는 4대 관리법
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    구체적인 지시와 즉각적인 칭찬이 전두엽 성장을 돕습니다
  </text>

  <!-- 4 Principles -->
  <g transform="translate(60, 240)">
    <!-- Principle 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">원칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">단순명료</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">한 번에 한 가지씩 짧고 명확하게 지시</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">여러 지시를 한꺼번에 주면 잊어버립니다. 눈을 맞추고 하나씩 완료하게 하세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 시각적인 체크리스트나 타이머를 활용하면 실행력이 크게 올라갑니다.</text>
    </g>

    <!-- Principle 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">원칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">즉각보상</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">즉각적이고 구체적인 칭찬과 보상</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">작은 일이라도 해냈을 때 즉시 칭찬하여 뇌의 도파민 보상 회로를 자극하세요.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 "방금 신발 정리한 모습 정말 멋졌어!"처럼 구체적으로 인정해 주세요.</text>
    </g>

    <!-- Principle 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">원칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">자극조절</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#991b1b">스마트폰 숏폼 &amp; 게임 과몰입 차단</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">초단위로 바뀌는 강한 자극은 전두엽의 지속적 주의력을 심각하게 약화시킵니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 사용 시간을 규칙으로 정하고, 공부 공간에서 스마트폰을 치워두세요.</text>
    </g>

    <!-- Principle 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f3e8ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">원칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">운동수면</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#6b21a8">매일 30분 유산소 운동과 규칙적 수면</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">줄넘기, 달리기 등 땀 흘리는 운동은 뇌신경 성장인자를 분비시켜 뇌를 깨웁니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 충분한 수면은 낮 동안 지친 뇌 신경세포의 독소를 배출하고 회복시킵니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      ❤️ 비난보다는 지지와 체계적인 환경 조성이 최고의 치료 파트너입니다
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
    { name: '03_point2_types_summary.png', svg: generateCard2() },
    { name: '04_point3_treatment_summary.png', svg: generateCard3() },
    { name: '05_point4_parenting_summary.png', svg: generateCard4() }
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
    console.log(`✅ 생성 완료 (부평 ADHD 한글 카드): ${card.name} (${pngBuffer.length} bytes)`);
  }
}

renderCards().catch(console.error);
