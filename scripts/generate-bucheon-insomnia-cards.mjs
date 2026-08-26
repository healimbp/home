import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/bucheon-insomnia';
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
      <stop offset="0%" stop-color="#0c162c" />
      <stop offset="50%" stop-color="#14283b" />
      <stop offset="100%" stop-color="#091322" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="46" rx="23" fill="#3b82f6" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">수면장애 &amp; 자율신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="480" height="38" rx="8" fill="#eff6ff" />
      <text x="18" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        누우면 2시간 뒤척임 "수면제 없이 자연 수면 회복"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="46" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 신경정신과 불면증 치료
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 과각성 스위치를 끄고 스스로 잠드는 자생력 회복법
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 260)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">뇌 DMN 과각성 &amp; 교감신경 과항진</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">불 끄면 켜지는 잡생각 스위치와 수면 불안의 신경학적 악순환</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">수면제 의존 탈출 &amp; 안전한 감량(테이퍼링)</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">화학적 마취가 아닌 뇌 천연 GABA 수용체 활성화로 숙면 유도</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뇌파 바이오피드백 &amp; CST</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">과열된 뇌파를 델타 숙면파로 유도하고 심신 균형을 맞추는 통합 치료</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f172a" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 ｜ 1:1 맞춤 수면신경 클리닉 (부평역 7번 출구 인근)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: POINT 01 불면증 핵심 원인 요약 카드
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c1e36" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#3b82f6" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd">불면증의 신경생리학적 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "생각을 끄고 싶은데 뇌가 멈추질 않아요"
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#60a5fa" letter-spacing="-0.5">
    뇌 DMN 과각성과 자율신경계(교감신경) 조절 실패
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#eff6ff" />
      <circle cx="75" cy="80" r="26" fill="#2563eb" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">뇌 디폴트모드네트워크(DMN)의 과열</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">잠자리에 누워 자극이 사라지면 꺼져야 할 뇌 휴식 스위치가</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">오히려 폭발적으로 활성화되어 온갖 걱정과 생각이 재생됩니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb">👉 의지의 문제가 아니라 뇌 신경망의 각성 조절 장애입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b45309">교감신경 과항진 &amp; 스트레스 호르몬 지속</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">밤이 되어도 코르티솔과 아드레날린 분비가 줄어들지 않아</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#334155">심장이 뛰고 체온 조절이 안 되어 몸이 '비상 전투 태세'를 유지합니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 "오늘도 못 자면 어쩌지" 하는 수면 예측 불안이 편도체를 자극합니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#b91c1c">수면제 장기 복용 주의: 강제 마취와 자연 숙면의 차이</text>
      <text x="140" y="112" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">양약 수면제(졸피뎀 등)는 뇌를 일시적으로 잠재우지만</text>
      <text x="140" y="152" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">깊은 서파 수면을 방해하고 내성과 반동성 불면을 유발합니다.</text>
      <text x="140" y="190" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#be123c">👉 뇌 스스로 수면 리듬을 조절하는 자생력을 회복해야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f2942" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#93c5fd" text-anchor="middle">
      💡 불면증은 뇌의 과열된 각성 신호를 꺼주고 자율신경을 안정시켜야 치료됩니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: POINT 02 자가진단 체크리스트 카드
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#082b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#10b981" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6ee7b7">불면증 4대 유형 &amp; 자가진단</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    나의 불면증은 어떤 유형일까요?
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#a7f3d0" letter-spacing="-0.5">
    2가지 이상 해당되고 1개월 이상 지속 시 조기 진단이 필요합니다
  </text>

  <!-- 4 Step Process Flow Cards -->
  <g transform="translate(60, 240)">
    <!-- Type 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">유형 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">입면장애</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">입면장애 (잠들기까지 30분~2시간 이상 소요)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">몸은 천근만근 피곤한데 누우면 눈이 말똥말똥해지고 생각이 꼬리를 묾</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 시계를 보며 "내일 어쩌지" 초조해져 심장이 두근거리는 증상 동반</text>
    </g>

    <!-- Type 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">유형 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">수면유지</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">수면유지장애 (새벽에 2~3회 이상 깸)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">사소한 소리나 빛에도 깜짝 놀라 깨며, 한번 깨면 다시 잠들지 못함</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 주로 새벽 2~4시 사이에 깨어 시계를 보며 뒤척이다 아침을 맞이함</text>
    </g>

    <!-- Type 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">유형 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">조기각성</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">조기각성장애 (알람보다 2시간 일찍 깸)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">총 수면 시간이 4~5시간에 불과하며, 이른 새벽에 눈이 떠져 재취침 불가</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 만성 우울감, 무기력감, 노화에 따른 진액 부족이 주요 원인</text>
    </g>

    <!-- Type 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#faf5ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">유형 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">다몽숙면</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#6b21a8">다몽증 &amp; 숙면장애 (자도 잔 것 같지 않음)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">밤새 꿈을 생생하게 꾸거나 가위에 눌려 아침에 극심한 피로와 두통 발생</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 깊은 서파 수면(3단계 델타파)에 진입하지 못하는 얕은 수면 상태</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#044e3f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      📋 불면증 유형에 따라 뇌 신경계의 불균형 부위와 처방이 완전히 달라집니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: POINT 03 1:1 맞춤 한방 치료 솔루션 요약 카드
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#1b1c3a" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#8b5cf6" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c4b5fd">해아림 4단계 통합 불면 치료</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    약물 의존 없이 스스로 잠드는 힘 복원
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ddd6fe" letter-spacing="-0.5">
    뇌파 안정 · 심신 조화 · 구조 이완의 1:1 맞춤 한방 솔루션
  </text>

  <!-- 4 Step Solution Cards -->
  <g transform="translate(60, 240)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f5f3ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#7c3aed" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#6d28d9" text-anchor="middle">맞춤한약</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#5b21b6">1:1 체질 맞춤 청뇌안신(淸腦安神) 탕전</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">심장·간의 열기를 내리고 뇌 천연 GABA 및 세로토닌 합성 촉진</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed">👉 산조인탕·귀비탕·온담탕 등 개인별 원인에 맞춘 1:1 정밀 처방</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">뇌파훈련</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">NeuronFlex 수면 뇌파 바이오피드백</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">과열된 고주파 각성 베타파를 억제하고 안정적인 수면 델타파 유도</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 뇌 스스로 휴식 모드로 전환할 수 있는 자율 조절력을 강화합니다</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">경혈약침</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">안면혈(安眠穴) &amp; 백회혈 침구 및 청열 약침</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">귀 뒤 안면혈과 두부 백회혈을 자극하여 뇌혈류 개선 및 신경 안정</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 가슴 두근거림과 상체 열감을 즉각적으로 진정시키는 효과</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">4단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">구조이완</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">두개천골요법(CST) &amp; 상부 경추 추나요법</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">턱관절과 목 뒤 후두골의 긴장을 풀어 뇌척수액 순환 촉진</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 뇌간 망상체의 각성 신호를 차단하여 깊은 이완 상태로 유도</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#2e1065" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ddd6fe" text-anchor="middle">
      🩺 수면제 테이퍼링(Tapering): 기존 약물과 안전하게 병행하며 단계적으로 감량합니다
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: POINT 04 숙면을 부르는 생활 속 힐링 팁 카드
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#2d1b08" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="120" height="42" rx="21" fill="#f59e0b" />
    <text x="60" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="140" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">생활 속 숙면 자가관리 꿀팁</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    오늘 밤부터 바로 실천하는 4가지 수칙
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    뇌에게 "지금은 자는 시간"이라는 신호를 보내주세요
  </text>

  <!-- 4 Process Cards -->
  <g transform="translate(60, 240)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">수칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">자극조절</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#991b1b">20분 이상 잠 안 오면 즉시 침대 밖으로 나오기</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">침대에서 뒤척이면 뇌는 '침대 = 괴로운 곳'으로 조건화됩니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 어두운 조명 아래서 편안한 책을 읽다 졸릴 때 다시 누우세요.</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">수칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">시계금지</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#1e40af">침실에서 시계와 스마트폰 치워두기</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">"벌써 새벽 2시네, 내일 어쩌지" 하는 시간 확인이 불안을 폭발시킵니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 시계를 시야 밖으로 돌려놓고 블루라이트를 원천 차단하세요.</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">수칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">체온조절</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#065f46">취침 90분 전 따뜻한 물로 족욕 또는 반신욕</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">체온이 일시적으로 올랐다가 서서히 떨어질 때 졸음이 쏟아집니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 손발을 따뜻하게 해주면 심부 체온이 내려가 델타 수면에 도움 됩니다.</text>
    </g>

    <!-- Tip 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">478호흡</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#92400e">누워서 4·7·8 이완 호흡법 반복하기</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">4초 들이마시고 7초 숨 멈추고 8초 동안 천천히 내쉬는 복식 호흡</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 부교감신경을 즉시 활성화하여 심박수를 낮추고 긴장을 풉니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      🌙 술과 야식은 피하고, 아침에 일어나 15분간 햇볕을 쬐어 수면 시계를 맞추세요
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
    console.log(`✅ 생성 완료 (부천 불면증 한글 카드): ${card.name} (${pngBuffer.length} bytes)`);
  }
}

renderCards().catch(console.error);
