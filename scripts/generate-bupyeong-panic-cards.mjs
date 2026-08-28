import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-panic',
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
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        숨이 턱 막히고 심장이 터질 것 같은 공포
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부평 공황장애 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      편도체 과열 · 과호흡 역설 · 교감신경 폭발의 근본 해법
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
          심장 문제가 아닌 '뇌 편도체(경보기) 오작동'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          위험이 없는데도 울리는 화재경보기처럼 교감신경이 한순간 폭발하는 신경계 장애
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          숨을 헐떡일수록 더 막히는 '과호흡의 역설' 차단
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          이산화탄소 급감으로 뇌혈관이 수축되는 악순환을 막는 4-7-8 이완 호흡 솔루션
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          1:1 체질 안심(安心) 한약 &amp; 두개천골 자율신경 추나
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          화기(火氣)를 내리고 심담(心膽)을 보강하여 신경계 스스로 불안 역치를 높이는 치료
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#133d32" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#a7f3d0" text-anchor="middle">
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

  <rect width="1080" height="1080" fill="#091b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">공황발작의 신경학적 핵심 기전</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "심장과 폐는 멀쩡한데 왜 숨이 턱 막힐까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    뇌 위험경보기(편도체)의 오작동과 과호흡 혈류 저하 때문입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#e6f7f3" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🚨</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">
        1. 편도체(Amygdala)의 거짓 화재경보
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        스트레스와 만성 피로로 불안 역치가 낮아지면, 실제 생명의 위협이 전혀 없는데도
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        뇌 편도체가 비상벨을 울려 척수 교감신경을 한순간에 100% 폭발시킵니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#047857">
        👉 원인: 심장·폐의 기질적 이상이 아닌 "자율신경계 자동 조절 장치의 혼선"
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fee2e2" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💨</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 과호흡과 뇌 혈류 감소의 역설 (호흡성 알칼리증)
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        숨이 부족하다고 느껴 가쁘게 몰아쉬면 체내 이산화탄소(CO₂) 농도가 급감합니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        혈관이 수축되어 오히려 뇌로 가는 혈류와 산소가 줄어들어 어지럼·질식감이 심해집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c">
        👉 주의: 숨을 더 들이마시려 하지 말고, "길게 내쉬는 호흡"으로 CO₂를 유지해야 합니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef3c7" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔁</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 예기불안(Anticipatory Anxiety)과 회피의 악순환
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        한 번 발작을 겪은 뇌는 "또 오면 어쩌지?" 하는 두려움으로 계속 긴장 상태를 유지합니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        지하철, 터널, 마트 등 탈출하기 어려운 장소를 기피하며 일상 반경이 점점 좁아집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 해법: 뇌의 불안 감작(Sensitization)을 가라앉히는 체질 맞춤 뇌신경 치료 필요
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 공황발작은 절대 심장마비를 일으키지 않는 인체의 '생리적 과반응'일 뿐입니다.
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

  <rect width="1080" height="1080" fill="#091b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">공황장애 자가진단 체크리스트</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "혹시 나도 공황장애일까?" 핵심 증상 6가지
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    갑작스러운 공포와 함께 아래 중 4가지 이상이 10분 내 최고조에 달한다면 점검이 필요합니다
  </text>

  <!-- 6 Checklist Cards (2 Columns x 3 Rows) -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">01</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">극심한 심계항진 (가슴 뜀)</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        가만히 있어도 심장이 밖으로 튀어나올
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        것처럼 격렬하게 뛰고 쿵쾅거립니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 부정맥·심전도 검사상 정상 소견
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">02</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">호흡곤란 &amp; 질식감</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        목구멍이 꽉 막혀 숨을 들이마실 수 없고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        공기가 전혀 통하지 않는 느낌이 듭니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 과호흡 및 흉곽 근육 극심한 경직
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">03</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">어지럼증 &amp; 실신할 것 같은 느낌</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        머리가 핑 돌고 바닥이 울렁거리며,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        곧 의식을 잃고 쓰러질 것 같습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 뇌 혈관 급격한 수축에 의한 일시적 허혈
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(495, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">04</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">손발 저림 &amp; 전신 떨림/식은땀</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        손가락 끝과 입술 주변이 찌릿찌릿 저리고
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        식은땀이 비 오듯 쏟아지며 온몸이 떨립니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 말초 혈관 수축 및 자율신경 쇼크 반응
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">'죽을 것 같다'는 극도의 공포</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        "내가 심장마비로 지금 당장 죽거나
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        미쳐버릴지도 모른다"는 통제 불능 공포감.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 공황발작의 핵심적 인지 왜곡 신호
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(495, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">06</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">예기불안 &amp; 특정 장소 회피</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        지하철, 버스, 엘리베이터, 고속도로 등
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        즉시 탈출할 수 없는 장소를 피하게 됩니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 광장공포증(Agoraphobia) 동반 징후
      </text>
    </g>
  </g>

  <!-- Bottom Result Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      👉 방치할수록 만성화되고 우울·불면으로 번집니다. 초기에 정확한 진료를 권장합니다.
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

  <rect width="1080" height="1080" fill="#091b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림한의원 1:1 맞춤 치료 시스템</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    억누르지 않고 스스로 회복하는 3단계 안심(安心) 솔루션
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    신경안정제 의존 없이 뇌 신경계 본래의 조절 능력을 복원합니다
  </text>

  <!-- 3 Step Solution Cards -->
  <g transform="translate(60, 230)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f766e" text-anchor="middle">01</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        체질 맞춤 안심(安心) 한약 처방 (편도체 안정화)
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심담허겁(心膽虛怯): 심포와 담력을 강화하여 사소한 자극에 놀라지 않게 보호 (온담탕, 귀비탕)
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 간화상염(肝火上炎): 머리로 치솟는 화기(火氣)를 시원하게 식히고 혈류 안정 (시호가용골모려탕)
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 수기능심(水氣凌心): 위장 담음(痰飮)을 배출하여 명치 답답함과 울렁거림 개선 (영계출감탕)
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f766e" text-anchor="middle">02</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        전중·신문혈 청열 약침 &amp; 미주신경 침구 치료
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 전중혈(가슴 중앙): 꽉 막힌 흉곽 압박감을 해소하고 횡격막 호흡 근육을 즉각 이완
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 신문혈·내관혈: 심장 박동을 조절하는 미주신경(부교감신경)을 자극해 교감신경 진정
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 순수 한약 추출 멸균 약침으로 염증 및 신경 긴장을 안전하고 신속하게 해소
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">STEP</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f766e" text-anchor="middle">03</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        두개천골 추나요법(CST) &amp; 상부경추 뇌 혈류 교정
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 상부경추(C1-C2) 비틀림 교정을 통해 뇌로 올라가는 추골동맥 혈류를 즉시 확보
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 두개골 경막의 긴장을 풀어 뇌척수액 순환을 정상화하고 뇌간 뇌신경 압박 완화
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 만성 두통, 뒷목 뻣뻣함, 어지럼증 및 멍한 브레인포그 증상을 동시 개선
      </text>
    </g>
  </g>

  <!-- Bottom Notice Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🏥 양약(자낙스·항우울제) 복용 중이라도 병행 치료를 통해 안전하게 줄여갈 수 있습니다.
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

  <rect width="1080" height="1080" fill="#091b24" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">공황 극복 생활 속 힐링 케어 팁</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    발작 신호가 올 때 즉시 써먹는 3가지 자가 대처법
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    작은 생활 습관의 변화가 교감신경의 폭주를 막는 든든한 방패가 됩니다
  </text>

  <!-- 3 Self-Care Boxes -->
  <g transform="translate(60, 230)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e" text-anchor="middle">호흡법</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 미주신경 자극 '4-7-8 응급 이완 호흡법'
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 4초간 코로 숨을 들이마시고, 7초간 숨을 멈춘 후, 8초간 입으로 천천히 길게 내쉽니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 긴 날숨이 횡격막 미주신경을 자극하여 심장 박동을 강제 안정시키고 뇌혈류를 복원합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 핵심: 들이마시려 애쓰지 말고, 내쉬는 숨을 길게 가져가는 것이 과호흡 예방의 열쇠!
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fee2e2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">식이조절</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☕</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 카페인과 알코올의 철저한 차단
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 커피, 에너지 음료의 카페인은 심장 박동을 강제 촉진해 편도체에 '위험 경보'를 촉발합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 술은 일시적으로 긴장을 풀지만, 분해 과정에서 혈관을 수축시켜 다음 날 극심한 반동성 발작을 유발합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 치료 기간 동안 커피 대신 대추차, 산조인차, 따뜻한 보리차를 음용하세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">생체리듬</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☀️</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 아침 15분 햇볕 쬐기와 규칙적 수면 리듬
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 아침 기상 후 15분간 햇볕을 쬐면 뇌 세로토닌이 활성화되어 불안 역치가 획기적으로 상승합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 밤에는 천연 수면 호르몬인 멜라토닌 분비가 원활해져 깊은 수면을 통해 신경 독소를 배출합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 주말 몰아자기 대신, 매일 일정한 시간에 기상하여 뇌 생체시계를 리셋하세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 "공황발작은 반드시 10~20분 내에 가라앉으며, 이 신호로 죽지 않습니다."
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
  console.log('Generating Bupyeong Panic Disorder blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
