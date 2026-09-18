import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-insomnia',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

// 1. 메인 썸네일 (01_naver_main_thumbnail.jpg)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071815" />
      <stop offset="50%" stop-color="#12332A" />
      <stop offset="100%" stop-color="#091F1A" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
  </defs>

  <!-- 전체 배경 -->
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- 상단 카테고리 뱃지 -->
  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 불면증 · 수면장애 · 자율신경 클리닉</text>
  </g>

  <!-- 메인 화이트 카드 컨테이너 -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- 서브 후킹 뱃지 -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="560" height="40" rx="10" fill="#E6F7F4" stroke="#A7E3D8" stroke-width="1.5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0D766E">
        누우면 2시간 뒤척임 · 새벽 3시 눈 번쩍 각성 · 수면 불안
      </text>
    </g>

    <!-- 메인 타이틀 -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="46" font-weight="bold" fill="#0F172A" letter-spacing="-1.5">
      인천 불면증 한의원 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="27" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      과열된 뇌 스위치를 끄고 수면제 없이 스스로 잠드는 법
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3대 핵심 요약 카드 리스트 -->
    <g transform="translate(55, 255)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#E6F7F4" />
        <circle cx="67" cy="67" r="26" fill="#0D9488" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">뇌 DMN 과각성 &amp; 교감신경 과항진</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">불 끄면 켜지는 잡생각 스위치와 수면 불안의 신경학적 원인 분석</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#FEF3C7" />
        <circle cx="67" cy="67" r="26" fill="#D97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">수면제 의존 탈출 &amp; 뇌 자생력 복원</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">강제 마취가 아닌 뇌 스스로 멜라토닌 분비 리듬을 되찾는 근본 치료</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#E0F2FE" />
        <circle cx="67" cy="67" r="26" fill="#0284C7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">1:1 맞춤 안신탕약 &amp; 뇌파안정 침구 &amp; CST</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">과열된 뇌파를 진정시키고 깊은 델타 숙면파로 유도하는 4단계 통합 솔루션</text>
      </g>
    </g>

    <!-- 하단 푸터 바 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#13332B" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (부평역 7번 출구)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: 원인 분석 카드 (02_point1_cause.jpg)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071815" />
      <stop offset="50%" stop-color="#12332A" />
      <stop offset="100%" stop-color="#091F1A" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#DC2626" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔍 POINT 01. 신경학적 원인 분석</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      불 끄면 켜지는 생각 스위치, 왜 잠들지 못할까?
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      단순한 피로 문제가 아닌, 뇌 신경계의 3대 과열 기전 때문입니다.
    </text>

    <!-- 원인 카드 3개 -->
    <g transform="translate(55, 160)">
      <!-- 원인 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#991B1B">① 뇌 DMN(디폴트모드네트워크) 과각성</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          잠자리에 들면 뇌가 휴식 모드로 전환되어야 하지만, 낮 동안의 긴장과
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          스트레스로 인해 잡생각 회로가 꺼지지 않고 각성 신호를 계속 보냅니다.
        </text>
      </g>

      <!-- 원인 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400E">② 교감신경 항진 &amp; 멜라토닌 분비 리듬 교란</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          자율신경의 균형이 깨져 심장이 두근거리고 심부 체온이 떨어지지 않으며,
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          수면 호르몬인 멜라토닌 분비 타이밍이 밀려 깊은 수면(델타파)에 도달하지 못합니다.
        </text>
      </g>

      <!-- 원인 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#1E40AF">③ 한의학적 심비양허(心脾兩虛) &amp; 간양상항(肝陽上亢)</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          심장과 비위의 기혈이 소진되거나 간의 허열(虛熱)이 머리로 치솟아
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          정신을 담는 심신(心神)이 안정되지 못해 가슴이 답답하고 밤마다 불안해집니다.
        </text>
      </g>
    </g>

    <!-- 하단 메시지 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0D9488" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        💡 뇌 신경망의 자생력을 회복하면 자연스러운 수면 리듬이 되살아납니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 3. POINT 02: 자가진단 체크리스트 카드 (03_point2_checklist.jpg)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071815" />
      <stop offset="50%" stop-color="#12332A" />
      <stop offset="100%" stop-color="#091F1A" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#D97706" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 불면증 자가진단</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      진료실에서 체크하는 불면증 5대 위험 신호
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      3개 이상 해당된다면 신경계 과열 상태를 의심해야 합니다.
    </text>

    <!-- 체크 항목 5개 -->
    <g transform="translate(55, 160)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">입면 장애 (잠들기 어려움)</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">잠자리에 누워 30분~1시간 이상 잡생각으로 뒤척이며 잠들지 못한다.</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">수면 유지 장애 (새벽 각성)</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">새벽 2~4시경 자주 깨어나며, 한번 깨면 머리가 맑아져 다시 잠들기 어렵다.</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 240)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">조기 각성 &amp; 다몽증 (얕은 잠)</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">밤새 복잡한 꿈을 많이 꾸고, 설정한 알람보다 1~2시간 일찍 눈이 떠진다.</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">주간 기능 저하 &amp; 만성 피로</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">아침에 일어나도 머리가 멍하고 무거우며, 오후 내내 뇌 피로감이 심하다.</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 480)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">수면 불안 &amp; 시계 강박</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">'오늘 밤도 못 자면 내일 어떡하지'라는 예기불안과 시계 확인 습관이 있다.</text>
      </g>
    </g>

    <!-- 하단 CTA -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#13332B" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        정확한 뇌파·자율신경·체열 검사로 신경계의 긴장도를 정밀 측정합니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 4. POINT 03: 1:1 맞춤 한방 치료 솔루션 카드 (04_point3_treatment.jpg)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071815" />
      <stop offset="50%" stop-color="#12332A" />
      <stop offset="100%" stop-color="#091F1A" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#0D9488" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 POINT 03. 1:1 맞춤 한방 솔루션</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      뇌 자생력을 깨우는 해아림 4단계 통합 치료
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      약에 의존하지 않고 자연스럽게 졸음이 찾아오는 몸의 리듬을 만듭니다.
    </text>

    <!-- 4단계 그리드 -->
    <g transform="translate(55, 160)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 01</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">체질 맞춤 안신탕약</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">과열된 심포·간열을 내리고</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">기혈을 보충하여 뇌 신경망의</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">자생적 회복력을 강화합니다.</text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 02</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">청열 약침 &amp; 침구 치료</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">백회, 신문, 안면혈 등</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">수면 특효혈을 자극하여</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">상체로 치솟는 열을 내립니다.</text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 03</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">뇌파 바이오피드백</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">과각성된 고베타파를 진정시키고</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">안정적인 알파파와 델타 숙면파를</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">스스로 유도하도록 훈련합니다.</text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(445, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 04</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">두개천골 CST &amp; 추나</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">상부 경추와 두개골 긴장을 풀어</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">뇌척수액 순환을 원활히 하고</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">미주신경(부교감)을 활성화합니다.</text>
      </g>
    </g>

    <!-- 하단 바 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0D9488" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        환자 1:1 맞춤 진단을 통해 가장 효과적인 복합 치료를 설계합니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 5. POINT 04: 생활 속 실천 팁 카드 (05_point4_selfcare.jpg)
function generateSelfcareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071815" />
      <stop offset="50%" stop-color="#12332A" />
      <stop offset="100%" stop-color="#091F1A" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#059669" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 04. 생활 속 숙면 루틴</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      의지에 의존하지 않는 3가지 숙면 실천법
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      환경과 습관을 바꾸면 뇌가 저절로 잠잘 준비를 시작합니다.
    </text>

    <!-- 팁 카드 3개 -->
    <g transform="translate(55, 160)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">① 새벽에 깨더라도 절대 시계를 보지 마세요</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          시계를 보는 순간 뇌는 '몇 시간 못 잤네'라는 계산과 불안을 시작합니다.
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          눈을 감고 편안히 누워 있는 것만으로도 뇌 휴식의 80%가 이루어집니다.
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">② 기상 후 30분 이내 아침 햇볕 20분 쬐기</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          아침 햇빛은 세로토닌을 생성하고 뇌의 생체 시계를 리셋합니다.
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          햇볕을 쬐고 14~15시간 뒤 밤에 멜라토닌이 풍부하게 분비됩니다.
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">③ 잠들기 전 4-7-8 이완 복식호흡법</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          4초간 코로 숨을 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 길게 내쉽니다.
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          부교감신경을 즉각 활성화하여 심장 박동을 안정시키고 졸음을 유도합니다.
        </text>
      </g>
    </g>

    <!-- 하단 메시지 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#13332B" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        작은 수면 습관의 변화가 건강한 아침을 만듭니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 렌더링 및 파일 저장 함수
function renderAndSave(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const fullPath = path.join(dir, fileName);
    fs.writeFileSync(fullPath, pngBuffer);
    console.log(`[Card Rendered] Saved: ${fullPath}`);
  }
}

async function main() {
  console.log('[Incheon Insomnia Cards] Generating 5 visual cards...');
  renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  renderAndSave(generateCauseCard(), '02_point1_cause.jpg');
  renderAndSave(generateChecklistCard(), '03_point2_checklist.jpg');
  renderAndSave(generateTreatmentCard(), '04_point3_treatment.jpg');
  renderAndSave(generateSelfcareCard(), '05_point4_selfcare.jpg');
  console.log('[Incheon Insomnia Cards] All 5 cards generated successfully!');
}

main().catch(console.error);
