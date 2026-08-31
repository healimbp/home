import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-adult-adhd',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일 카드 1080x1080)
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 전두엽 실행기능 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="540" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        "해야 할 일은 아는데 마감 직전까지 시동이 안 걸려요"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부평 성인 ADHD 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      단순 게으름이 아닌 전두엽 실행기능 저하 &amp; 도파민 불균형
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2eee8" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          전두엽 '실행기능(뇌 사령탑)'의 시동 불능 상태
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          의지 부족이 아닌, 행동의 시동을 걸어주는 기저 도파민 분비 결핍의 신경학적 질환
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          마감 벼락치기와 극심한 방전(번아웃)의 악순환
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          아드레날린으로 간신히 버티는 패턴 반복으로 2차 우울증, 불안장애, 만성피로 동반
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          1:1 맞춤 한약 &amp; 뉴로피드백 두뇌 훈련
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          콘서타 부작용(두근거림·불면) 완화 및 뇌 자생력을 깨워 스스로 집중하는 통합 솔루션
        </text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f2922" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 권형근 대표원장 (부평역 7번 출구)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: 원인 분석 카드 (1080x1080)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#061a1f" />

  <!-- Header Badge & Title -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0f766e" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">성인 ADHD 신경학적 기전</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    성격이나 의지박약의 문제가 아닙니다!
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    뇌 전두엽 실행 기능 저하와 기저 도파민 분비 결핍
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#e6f7f3" />
      <circle cx="75" cy="80" r="26" fill="#0f766e" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">전두엽 '실행기능(뇌 사령탑)'의 시동 키 고장</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" fill="#334155">머리로는 해야 할 일을 절박하게 알지만 행동의 첫 단추를 꿰지 못합니다.</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" fill="#334155">딴짓을 하면서도 자책과 불안으로 가득 차 뇌가 전혀 쉬지 못합니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 단순 게으름(선택적 휴식)과 성인 ADHD(시동 불능)의 결정적 차이</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">기저 도파민 부족과 아드레날린 벼락치기 의존</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" fill="#334155">동기부여 물질인 도파민이 부족해 마감 직전 스트레스 호르몬인</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" fill="#334155">아드레날린이 터져 나와야만 초인적인 힘으로 벼락치기를 끝냅니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b45309">👉 과제가 끝나면 며칠간 시체처럼 방전되는 극심한 번아웃 사이클 반복</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">자책감 누적: 2차 우울증과 불안장애 위험</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" fill="#991b1b">"난 왜 남들처럼 못할까"라며 평생 쌓인 자책감이 자존감을 갉아먹고</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" fill="#991b1b">가면 증후군, 대인기피, 만성 불안과 무기력증으로 깊어지게 됩니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 자책을 멈추고 뇌 전두엽의 기능 회복 치료를 시작해야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 성인 ADHD는 결함이 아닌 두뇌 신경망의 조절력 불균형 문제입니다
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: 자가진단 체크리스트 카드 (1080x1080)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#081e26" />

  <!-- Header Badge & Title -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0f766e" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">성인 ADHD 일상 자가진단</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    나도 혹시 성인 ADHD일까?
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    최근 6개월간 반복된 불편 증상들을 체크해 보세요
  </text>

  <!-- Checklist Card Container -->
  <g transform="translate(60, 245)">
    <rect x="0" y="0" width="960" height="725" rx="28" fill="#ffffff" filter="url(#shadow2)" stroke="#e2ece7" stroke-width="1.5" />
    
    <!-- Item 1 -->
    <g transform="translate(45, 45)">
      <circle cx="25" cy="25" r="22" fill="#e6f7f3" />
      <text x="25" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="65" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">만성 미루기와 마감 벼락치기</text>
      <text x="65" y="52" font-family="${fontFamilies}" font-size="16" fill="#475569">중요한 일일수록 시작하기가 너무 힘들어 딴짓을 하다 마감 직전에야 움직인다.</text>
    </g>
    <line x1="45" y1="130" x2="915" y2="130" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Item 2 -->
    <g transform="translate(45, 150)">
      <circle cx="25" cy="25" r="22" fill="#e6f7f3" />
      <text x="25" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="65" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">시간 감각 상실 (Time Blindness)</text>
      <text x="65" y="52" font-family="${fontFamilies}" font-size="16" fill="#475569">"5분만 쉬어야지" 해놓고 몇 시간이 훌쩍 지나가 약속 시간이나 마감을 자주 어긴다.</text>
    </g>
    <line x1="45" y1="235" x2="915" y2="235" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Item 3 -->
    <g transform="translate(45, 255)">
      <circle cx="25" cy="25" r="22" fill="#e6f7f3" />
      <text x="25" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="65" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">작업 기억력 저하 &amp; 브레인포그</text>
      <text x="65" y="52" font-family="${fontFamilies}" font-size="16" fill="#475569">구두 업무 지시를 듣고 뒤돌아서면 까먹고, 차키·지갑·휴대폰을 끊임없이 찾아 헤맨다.</text>
    </g>
    <line x1="45" y1="340" x2="915" y2="340" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Item 4 -->
    <g transform="translate(45, 360)">
      <circle cx="25" cy="25" r="22" fill="#e6f7f3" />
      <text x="25" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="65" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">과몰입과 지루함의 극단적 대조</text>
      <text x="65" y="52" font-family="${fontFamilies}" font-size="16" fill="#475569">관심 분야(게임, 쇼핑)엔 밤새 몰입하지만, 지루한 일상 서류 작업은 1분도 힘들다.</text>
    </g>
    <line x1="45" y1="445" x2="915" y2="445" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Item 5 -->
    <g transform="translate(45, 465)">
      <circle cx="25" cy="25" r="22" fill="#e6f7f3" />
      <text x="25" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="65" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">다이어리·플래너 3일 초과 실패</text>
      <text x="65" y="52" font-family="${fontFamilies}" font-size="16" fill="#475569">의욕적으로 계획표와 다이어리를 사놓고 며칠 지나면 어디 뒀는지 잊어버린다.</text>
    </g>
    <line x1="45" y1="550" x2="915" y2="550" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Bottom Result Callout -->
    <g transform="translate(45, 575)">
      <rect x="0" y="0" width="870" height="110" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="435" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922" text-anchor="middle">
        위 5가지 중 3개 이상 해당된다면?
      </text>
      <text x="435" y="80" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        👉 의지 문제가 아닌 전두엽 뇌기능 정밀 검진과 1:1 맞춤 치료가 필요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      📋 해아림한의원 인천부평점 ｜ 뇌파(QEEG) 및 종합주의집중력(CAT) 검사
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: 맞춤 한방 치료 카드 (1080x1080)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#081e26" />

  <!-- Header Badge & Title -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0f766e" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림 1:1 맞춤 한방 치료</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 자생력을 깨우는 4단계 통합 솔루션
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    콘서타 부작용(두근거림·불면) 완화 및 안전한 감량(테이퍼링) 병행
  </text>

  <!-- 4 Treatment Step Cards (2x2 Grid) -->
  <g transform="translate(60, 245)">
    <!-- Card 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="345" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="70" height="70" rx="16" fill="#e6f7f3" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#0f766e" text-anchor="middle">01</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">정밀 뇌기능 검사</text>
      <text x="110" y="85" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">QEEG 뇌파 &amp; HRV 검사</text>
      
      <line x1="25" y1="115" x2="440" y2="115" stroke="#f1f5f9" stroke-width="1.5" />
      
      <text x="25" y="155" font-family="${fontFamilies}" font-size="17" fill="#334155">• 전두엽 멍한 세타파와 과열된</text>
      <text x="25" y="185" font-family="${fontFamilies}" font-size="17" fill="#334155">  고주파 베타파 불균형 정밀 측정</text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">• HRV 자율신경계 과부하도 평가</text>
      <text x="25" y="265" font-family="${fontFamilies}" font-size="17" fill="#334155">• 종합주의집중력(CAT) 객관적 분석</text>
      
      <rect x="25" y="295" width="415" height="30" rx="8" fill="#f8fafc" />
      <text x="232" y="316" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">
        두뇌 피로도와 실행 장애 정도를 수치화
      </text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="345" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="70" height="70" rx="16" fill="#e6f7f3" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#0f766e" text-anchor="middle">02</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">1:1 맞춤 뇌신경 한약</text>
      <text x="110" y="85" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">청뇌안신 &amp; 총명가감방</text>
      
      <line x1="25" y1="115" x2="440" y2="115" stroke="#f1f5f9" stroke-width="1.5" />
      
      <text x="25" y="155" font-family="${fontFamilies}" font-size="17" fill="#334155">• 원지, 석창포, 산조인, 백복신 등</text>
      <text x="25" y="185" font-family="${fontFamilies}" font-size="17" fill="#334155">  전두엽 미세혈류 순환 촉진</text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">• 도파민·세로토닌 대사 균형 회복</text>
      <text x="25" y="265" font-family="${fontFamilies}" font-size="17" fill="#334155">• 양약 복용 시 두근거림·불면 억제</text>
      
      <rect x="25" y="295" width="415" height="30" rx="8" fill="#f8fafc" />
      <text x="232" y="316" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">
        강제 각성이 아닌 뇌 자생적 집중력 회복
      </text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(0, 365)">
      <rect x="0" y="0" width="465" height="345" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="70" height="70" rx="16" fill="#e6f7f3" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#0f766e" text-anchor="middle">03</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">두뇌 기능 훈련</text>
      <text x="110" y="85" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">NeuronFlex 뉴로피드백 &amp; IM</text>
      
      <line x1="25" y1="115" x2="440" y2="115" stroke="#f1f5f9" stroke-width="1.5" />
      
      <text x="25" y="155" font-family="${fontFamilies}" font-size="17" fill="#334155">• 주의집중 SMR파 뇌파 바이오피드백</text>
      <text x="25" y="185" font-family="${fontFamilies}" font-size="17" fill="#334155">• 1/1000초 단위 감각통합 IM 훈련</text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">• 시간 감각(타이밍)과 충동 조절력 강화</text>
      <text x="25" y="265" font-family="${fontFamilies}" font-size="17" fill="#334155">• 작업 기억력 및 멀티태스킹 훈련</text>
      
      <rect x="25" y="295" width="415" height="30" rx="8" fill="#f8fafc" />
      <text x="232" y="316" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">
        스스로 뇌파를 조절하는 두뇌 브레이크 형성
      </text>
    </g>

    <!-- Card 4 -->
    <g transform="translate(495, 365)">
      <rect x="0" y="0" width="465" height="345" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="70" height="70" rx="16" fill="#e6f7f3" />
      <text x="60" y="70" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#0f766e" text-anchor="middle">04</text>
      
      <text x="110" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">구조 및 신경 이완</text>
      <text x="110" y="85" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">두개천골(CST) &amp; 경혈 침구</text>
      
      <line x1="25" y1="115" x2="440" y2="115" stroke="#f1f5f9" stroke-width="1.5" />
      
      <text x="25" y="155" font-family="${fontFamilies}" font-size="17" fill="#334155">• 상부 경추(목) 및 턱관절 긴장 이완</text>
      <text x="25" y="185" font-family="${fontFamilies}" font-size="17" fill="#334155">• 뇌척수액(CSF) 순환 및 뇌 피로 배출</text>
      <text x="25" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">• 백회·사신총혈 침구로 브레인포그 개선</text>
      <text x="25" y="265" font-family="${fontFamilies}" font-size="17" fill="#334155">• 자율신경계 과흥분 진정 및 수면 개선</text>
      
      <rect x="25" y="295" width="415" height="30" rx="8" fill="#f8fafc" />
      <text x="232" y="316" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">
        맑은 머리와 안정된 심신으로 일상 복귀
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌿 약물에만 의존하지 않고 내 뇌의 힘을 키우는 1:1 맞춤 치료
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: 생활 속 실천 팁 카드 (1080x1080)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#081e26" />

  <!-- Header Badge & Title -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0f766e" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">전두엽 보조 일상 실천 루틴</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌의 외장 하드를 만드는 현실적 4대 요령
  </text>
  <text x="60" y="205" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    의지에 기대지 말고 '자동으로 돌아가는 환경'을 구축하세요
  </text>

  <!-- 3 Big Action Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e" text-anchor="middle">외주화</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">📝</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. '기록의 시각화' (머리로 기억하지 않기)
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전두엽의 작업 기억 용량은 작습니다. 머릿속으로 기억하려 애쓰지 마세요.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 모니터 테두리 포스트잇, 노션(Notion), 화이트보드에 해야 할 일을 즉시 꺼내 적으세요.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#166534">
        👉 실천: "책상 위에는 지금 당장 할 일 1가지만 올려두기"로 시각적 간섭 차단
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">시동걸기</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⏳</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">
        2. 시동 저항을 제로로 만드는 '2분 법칙'
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • "보고서 완성해야지" 하면 뇌가 거부합니다. "파일 열어서 제목만 쓰기"로 쪼개세요.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 딱 2분만 자리에 앉아 시작하면, 뇌의 작업흥분(Work Excitement)으로 몰입이 이어집니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0f9ff" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: 빨간색 면적이 줄어드는 타임 타이머(Time Timer)로 마감 시각화
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">충전하기</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌙</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 취침 1시간 전 초고자극 도파민 디톡스
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 숏폼, 릴스, 모바일 게임의 강력한 자극은 뇌의 기저 도파민 수용체를 마비시킵니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 밤에는 침실에서 스마트폰을 멀리 두고 뇌가 차분히 쉬어야 다음 날 전두엽이 깨어납니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 스마트폰 충전기를 침대 머리맡이 아닌 거실이나 책상에 두기
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 해아림한의원 인천부평점 ｜ 부평역 7번 출구 (월·수·금 야간진료 오후 8시까지)
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
  console.log('Generating Bupyeong Adult ADHD blog card set (Thumbnail + 4 Images)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
