import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-tic',
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
      <stop offset="0%" stop-color="#091b2b" />
      <stop offset="50%" stop-color="#0c2e35" />
      <stop offset="100%" stop-color="#061820" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0ea5e9" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 &amp; 성인 뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
        눈 깜빡임 · 킁킁 소리 "혼내거나 참게 하지 마세요"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0c2340" letter-spacing="-1.5">
      부평 틱장애 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334e68" letter-spacing="-0.5">
      뇌 기저핵 운동 조절 필터 미성숙과 신경 회로 안정 솔루션
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
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">
          버릇이 아닌 '뇌 기저핵 운동 조절 필터의 미성숙'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          불필요한 동작과 음성을 걸러내지 못해 의지와 상관없이 새어 나오는 생리적 현상
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">
          눈 ➡️ 목·어깨 ➡️ 음성틱으로 번지는 하행성 진행
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          단순 눈 깜빡임에서 소리 틱으로 번지거나 만성화(뚜렛)되기 전 골든타임 조기 치료
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#faf5ff" />
        <circle cx="67" cy="67" r="26" fill="#9333ea" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">
          1:1 체질 한약 &amp; 뉴로피드백 두뇌 조절 훈련
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          단순 강제 억제가 아닌 뇌 신경망 스스로 억제 회로를 성숙시키는 근본적 자생 치료
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
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091b2b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">틱장애의 신경학적 핵심 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "아이가 일부러 그러는 걸까요? 왜 못 참을까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    뇌 기저핵의 '운동 억제 필터' 미성숙과 신경계 과부하 때문입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#e0f2fe" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧠</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">
        1. 기저핵(Basal Ganglia)의 운동 조절 필터 미성숙
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        우리 뇌는 수많은 움직임 중 필요한 동작만 선택하고 불필요한 신호는 기저핵이 걸러냅니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        이 필터링 브레이크가 덜 발달해 무의식적으로 근육 경련과 음성이 밖으로 튀어나옵니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 생리적 신호: 아이의 나쁜 버릇이나 고집이 아닌, 스스로 조절할 수 없는 뇌신경 문제입니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef3c7" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">
        2. 스트레스·긴장 및 도파민 신경전달물질 과부하
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        새 학기 적응, 학업 부담, 긴장, 피로, 스마트폰 과몰입 등으로 교감신경이 과흥분되면
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        도파민 신경망의 불균형이 심화되어 틱을 억제하는 두뇌 여력이 급격히 떨어집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#d97706">
        👉 촉발 요인: 시각적 흥분(유튜브/게임), 신체적 피로, 긴장 환경이 증상을 폭발시킵니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fee2e2" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚠️</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">
        3. 강제로 참을 때 발생하는 '반동성 폭발'의 위험
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334155">
        틱이 나오기 전 몸속에 근질거리고 답답한 감각인 '전조 충동(Premonitory Urge)'이 생깁니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334155">
        강제로 참게 하거나 혼내면 내적 압박감이 급증하여 혼자 있을 때 훨씬 더 크게 폭발합니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 주의: 억지로 참으라고 훈육하지 말고, 모른 척하며 뇌가 스스로 안정되도록 도와야 합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 틱은 아이의 의지로 조절할 수 없는 뇌신경계 생리 신호입니다
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: CHECKLIST CARD (자가진단 체크리스트 & 진행단계)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091b2b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">틱장애 자가진단 체크리스트</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "단순 버릇일까, 틱일까?" 핵심 증상 6가지
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    아래 증상 중 1가지 이상이 3~4주 이상 지속되거나 번진다면 조기 점검이 필요합니다
  </text>

  <!-- 6 Checklist Cards (2 Columns x 3 Rows) -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">눈 깜빡임 &amp; 눈동자 굴림</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        눈을 유난히 자주 깜빡거리거나,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        눈동자를 위나 옆으로 치켜뜨는 증상.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 초기 가장 흔하게 시작되는 단순 근육틱
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">코 찡긋 &amp; 입 씰룩거림</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        코를 찡그리거나 입술을 삐죽이고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        턱을 앞으로 내밀며 얼굴을 찡그림.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 알레르기 비염이나 결막염으로 오인 빈번
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e0f2fe" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">목 꺾기 &amp; 어깨 들썩임</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        고개를 뒤로 젖히거나 한쪽으로 꺾고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        어깨를 으쓱거리며 온몸을 털어댐.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        ✓ 얼굴에서 목·어깨로 내려오는 하행성 신호
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(495, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fef3c7" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">04</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">음음·킁킁 반복 소리 (음성틱)</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        목에 가래 낀 듯 '음, 음' 헛기침하거나,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        코를 킁킁대고 켁켁거리는 소리 틱.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fffbeb" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        ✓ 이비인후과 치료에도 낫지 않는 단순 음성틱
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">긴장 시 악화 &amp; 수면 시 소실</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        낯선 환경이나 긴장할 때 심해지고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        밤에 깊이 잠들면 증상이 완전히 사라짐.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 뇌신경계 긴장과 직접 연동되는 핵심 증거
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(495, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">06</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2340">지적하면 억제 후 더 심해짐</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        "하지 마"라고 하면 잠깐 멈추지만,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        곧이어 더 크고 격렬한 동작으로 나타남.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 전조 충동과 반동성 폭발의 전형적 양상
      </text>
    </g>
  </g>

  <!-- Bottom Result Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      👉 근육틱과 음성틱이 복합되거나 1년 이상 지속되기 전, 조기 진단이 완치율을 높입니다.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: TREATMENT CARD (맞춤 한방 치료 솔루션)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091b2b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">해아림한의원 1:1 맞춤 치료 시스템</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 스스로 조절하는 힘을 키우는 3단계 통합 솔루션
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    단순한 화학적 억제가 아닌 뇌 신경망 성숙과 체질적 자생력 복원
  </text>

  <!-- 3 Step Solution Cards -->
  <g transform="translate(60, 230)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0c2340">
        체질별 1:1 맞춤 청뇌(淸腦) 한약 처방
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 간풍내동형(肝風內動): 과열된 뇌 신경의 흥분을 진정시키고 열감을 내려 근육 경련 해소
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심담허겁형(心膽虛怯): 심신 불안과 깜짝 놀람을 안정시키고 깊은 숙면 유도
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 비위허약형(脾胃虛弱): 소화 흡수를 돕고 기혈을 보강하여 신경계 피로 저항력 증진
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#ecfdf5" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#059669" text-anchor="middle">02</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0c2340">
        뉴로피드백 &amp; 감각통합 두뇌 훈련 시스템
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 실시간 뇌파 바이오피드백으로 기저핵과 전두엽의 자율 억제 회로를 직접 단련
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 밀리초(1/1000초) 단위 감각통합 훈련(IM)으로 두뇌 신호 전달의 시간적 정확성 강화
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 아이 스스로 '전조 충동'을 인지하고 조절하는 힘을 키워 재발 위험 차단
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#faf5ff" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9333ea" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#9333ea" text-anchor="middle">03</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0c2340">
        두개천골(CST) 뇌순환 추나 &amp; 청열 혈자리 침구
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 경추 1·2번과 두개골 미세 불균형을 교정하여 뇌척수액 순환과 뇌간 긴장 이완
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 백회, 풍지, 태충 등 뇌 혈류를 맑게 하는 경혈 자극으로 과도한 근육 연축 차단
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 통증 없는 무통 자침 및 순수 천연 한약재 약침으로 안전하고 부드러운 치료
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🌱 졸림이나 처짐 없이 두뇌 자생력을 길러 치료 종료 후에도 안정 상태를 유지합니다.
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: SELFCARE CARD (가정 내 부모 양육 & 생활 힐링 팁)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091b2b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">가정 내 양육 가이드 &amp; 생활 팁</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    부모님이 가정에서 꼭 실천해야 할 3대 치유 원칙
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#bae6fd" letter-spacing="-0.5">
    부모님의 불안을 거두고 편안한 가정 환경을 조성할 때 틱 증상은 빠르게 완화됩니다
  </text>

  <!-- 3 Healing Tips -->
  <g transform="translate(60, 230)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">원칙 1</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">무관심</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        1. 모른 척하기 (무관심의 원칙)와 관심 전환
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • "눈 똑바로 떠", "그 소리 내지 마" 등 지적이나 빤히 쳐다보는 행동은 절대 금물입니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 증상이 심할 때는 "물 한잔 마실까?", "책 같이 읽을까?"라며 자연스럽게 주의를 돌려주세요.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 지적하면 뇌가 긴장하여 증상이 2배로 커집니다. 부드러운 관심 전환이 핵심입니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fee2e2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b" text-anchor="middle">원칙 2</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">자극차단</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 스마트폰·유튜브·게임 등 시각적 과자극 차단
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 빠른 화면 전환과 자극적인 게임은 도파민을 폭발시켜 뇌 기저핵을 과열시킵니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전자기기 사용 시간을 정하고, 특히 잠들기 2시간 전에는 전자기기를 완전히 멀리합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 스마트폰 대신 손을 쓰는 보드게임, 레고, 그림 그리기 등 정적인 놀이를 권장합니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#ecfdf5" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46" text-anchor="middle">원칙 3</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">수면이완</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#065f46">
        3. 밤 10시 이전 충분한 숙면과 햇볕 야외 산책
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌 신경망이 쉬고 회복되는 시간은 밤 수면 시간입니다. 규칙적으로 일찍 잠들게 해주세요.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 낮 동안 30분 이상 햇볕을 쬐며 산책하면 천연 세로토닌이 충전되어 마음이 안정됩니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 실천: 과도한 학원 일정을 조정해 아이에게 심리적 '숨 쉴 틈(여유)'을 선물해주세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      🌸 "부모님의 불안하지 않은 눈빛과 따뜻한 기다림이 가장 강력한 치유제입니다."
    </text>
  </g>
</svg>
  `;
}

async function renderCard(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
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
  console.log('Generating Bupyeong Tic Disorder blog card set (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
