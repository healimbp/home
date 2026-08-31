import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-autonomic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일 카드)
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
    <rect x="-225" y="0" width="450" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 자율신경 &amp; 뇌신경 밸런스 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        검사해도 "이상 없다"는데 온몸이 시들고 두근거릴 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부평 자율신경실조증 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      교감신경 과열 · 상열하한 · 자율신경 시소 불균형의 근본 해법
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
          '신경성·검사 정상'의 실체: 교감·부교감 시소 균형 붕괴
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          신체 기관 문제가 아니라 24시간 멈추지 않는 자율신경 조절계의 과부하 상태
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          상열하한(上熱下寒)과 전신 다발성 신체화 증상
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          가슴 두근거림, 만성 어지럼증, 식은땀, 소화불량, 불면증이 얽혀 나타나는 전신 부조화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          1:1 청뇌안신(淸腦安心) 한약 &amp; 두개천골 자율신경 추나
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          교감신경의 허열을 내리고 미주신경(부교감)을 깨워 뇌-자율신경 자생력을 복원
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
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">자율신경실조증의 신경학적 핵심 기전</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "정밀검사는 정상인데 온몸이 왜 아플까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    내 몸의 자동조절 시소(교감·부교감)가 만성 과열로 고장났기 때문입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 245)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#e6f7f3" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚖️</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">
        1. 교감신경(액셀) 폭주와 부교감신경(브레이크) 마비
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        지속된 스트레스와 수면 부족으로 인해 교감신경이 꺼지지 않고 24시간 가동됩니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        혈관 수축, 심박 급증, 근육 긴장이 고착화되고 이완 브레이크(미주신경)가 작동하지 않습니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#047857">
        👉 핵심: 장기 자체의 병이 아닌 "24시간 생명 유지 신호망의 과부하 및 혼선"
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fee2e2" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 상열하한(上熱下寒)과 미세 혈류 조절 붕괴
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        말초 혈관이 비정상적으로 수축하면서 피가 전신으로 고르게 돌지 못합니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        머리와 가슴으로는 가짜 열(虛熱)이 솟구치고, 아랫배와 손발은 얼음처럼 차가워집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c">
        👉 동반 증상: 안면홍조, 두통, 어지럼증, 손발냉증, 저림, 원인 모를 식은땀
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="960" height="215" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="30" y="28" width="80" height="80" rx="16" fill="#fef3c7" />
      <text x="70" y="78" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧠</text>
      
      <text x="135" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 뇌 시상하부(Hypothalamus) 과부하와 호르몬 불균형
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        자율신경의 최고 관제탑인 뇌 시상하부가 탈진하여 스트레스 호르몬(코르티솔)이 요동칩니다.
      </text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="18" fill="#334e45">
        수면 리듬이 깨지고 위장 운동이 멈추며, 작은 일에도 심장이 뛰고 불안이 커집니다.
      </text>
      <rect x="135" y="155" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="150" y="178" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 해결책: 신경을 억누르지 않고, 뇌 시상하부와 자율신경 중추의 회복력을 키워야 합니다
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 자율신경실조증은 "꾀병"이 아니며, 신경계 시소 밸런스를 복원하면 반드시 치유됩니다.
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
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">자율신경실조증 자가진단 체크리스트</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "혹시 내 자율신경계도?" 핵심 경보 신호 6가지
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    원인 모를 증상 중 3가지 이상이 1개월 넘게 지속된다면 자율신경 기능 점검이 시급합니다
  </text>

  <!-- 6 Checklist Cards (2 Columns x 3 Rows) -->
  <g transform="translate(60, 225)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">01</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">가슴 두근거림 &amp; 답답한 호흡</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        가만히 쉬고 있어도 심장이 불규칙하게
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        쿵쾅거리고, 깊은 한숨을 자주 쉽니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 심전도 정상이나 교감신경 긴장 과다
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">02</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">만성 어지럼증 &amp; 머리 무거움</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        일어설 때 눈앞이 핑 돌거나 아찔하고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        머릿속에 안개가 낀 듯 멍합니다(브레인포그).
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 뇌 미세 혈류 조절 반사 지연
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">03</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">상열하한 &amp; 이상 발한(식은땀)</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        얼굴과 상체는 화끈거리고 땀이 나는데,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        손발과 아랫배는 얼음장처럼 차갑습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 체온 조절 신경망 및 말초혈관 수축
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(495, 245)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#e6f7f3" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">04</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">신경성 소화장애 &amp; 목 이물감</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        위내시경상 깨끗한데 늘 체한 듯 답답하고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        목에 무언가 걸린 느낌(매핵기)이 듭니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#f1f5f9" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0f766e">
        ✓ 미주신경 저하로 인한 위장관 연동 마비
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">수면장애 &amp; 풀리지 않는 만성 피로</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        몸은 파김치인데 잠들기 어렵고 자주 깨며,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        아침에 일어나도 잔 것 같지 않고 무겁습니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 야간 멜라토닌 결핍 및 뇌 휴식 불가
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(495, 490)">
      <rect x="0" y="0" width="465" height="225" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      <circle cx="50" cy="48" r="24" fill="#fee2e2" />
      <text x="50" y="56" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">06</text>
      <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">예민함 &amp; 사소한 자극에 깜짝 놀람</text>
      <text x="30" y="105" font-family="${fontFamilies}" font-size="16" fill="#475569">
        작은 소리나 불빛에도 신경이 곤두서고,
      </text>
      <text x="30" y="135" font-family="${fontFamilies}" font-size="16" fill="#475569">
        특별한 이유 없이 불안하고 초조해집니다.
      </text>
      <rect x="25" y="165" width="415" height="36" rx="8" fill="#fef2f2" />
      <text x="35" y="188" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
        ✓ 뇌 편도체 과열 및 신경계 방어기제 오작동
      </text>
    </g>
  </g>

  <!-- Bottom Result Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      👉 방치할수록 신경계 감작이 심해집니다. 정확한 자율신경 검사(HRV)로 진단하세요.
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
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림한의원 1:1 맞춤 치료 솔루션</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    신경을 억누르지 않고 조절력을 깨우는 3단계 치료
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    신경안정제 의존 없이 뇌와 자율신경 스스로 항상성을 되찾도록 처방합니다
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
        1:1 체질 맞춤 청뇌안신(淸腦安心) 한약 처방
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 간기울결(肝氣鬱結): 억눌린 울화와 흉협고만을 풀어 교감신경 긴장 완화 (시호가용골모려탕)
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심비양허(心脾兩虛): 지친 기혈을 보강해 심장 두근거림과 불면·피로 치유 (귀비탕, 온담탕)
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 수기능심(水氣凌心): 위장 담음(痰飮)을 제거해 어지럼증과 소화기 울렁거림 해소 (영계출감탕)
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
        • 전중혈(가슴 중앙): 흉곽의 화기(火氣)를 사하고 호흡을 깊고 편안하게 개방
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 신문혈·내관혈: 심장 리듬을 안정시키고 부교감신경(미주신경) 활성을 촉진
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 순수 한약 추출 멸균 약침으로 척추 신경근 주변의 만성 긴장과 염증을 신속 진정
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
        • 상부경추(C1-C2) 아탈구 교정: 뇌간(Brainstem)으로 들어가는 추골동맥 혈류 정상화
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 후두하근 및 경막 긴장 이완: 뇌척수액(CSF) 순환을 촉진하여 뇌 신경 피로 배출
      </text>
      <text x="150" y="166" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 턱관절 및 경추-흉추 축 정렬을 통해 흉부 교감신경절의 과도한 기계적 자극 차단
      </text>
    </g>
  </g>

  <!-- Bottom Notice Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🏥 기존 복용 중인 양약(신경안정제·항우울제)과 병행하며 단계적으로 감량할 수 있습니다.
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
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">자율신경 밸런스 생활 힐링 실천법</text>
  </g>

  <text x="60" y="148" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    교감신경의 폭주를 잠재우는 3가지 일상 리셋 루틴
  </text>
  <text x="60" y="190" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    의지에만 기대지 않고 환경과 호흡을 바꾸어 부교감신경을 자연스럽게 깨웁니다
  </text>

  <!-- 3 Self-Care Boxes -->
  <g transform="translate(60, 230)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#e6f7f3" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e" text-anchor="middle">호흡이완</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 미주신경을 깨우는 '4-6 복식 이완 호흡법'
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 코로 4초간 아랫배를 부풀리며 숨을 들이마시고, 입으로 6초간 가늘고 길게 내쉽니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 날숨이 들숨보다 길어질 때 횡격막의 미주신경이 자극되어 심박수와 혈압이 안정됩니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 실천: 하루 3회(기상 직후, 식후 1시간, 취침 전), 5분씩 편안한 자세로 진행하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fee2e2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">신경보호</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☕</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#991b1b">
        2. 교감신경 자극제(카페인·알코올·야식)의 철저한 차단
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 커피, 에너지음료 속 카페인은 지친 자율신경에 채찍질을 가해 가슴 두근거림을 촉발합니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 늦은 밤 야식은 소화기를 밤새 일하게 만들어 수면 중 자율신경계 회복을 방해합니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fef2f2" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 커피 대신 따뜻한 대추차나 메밀차를 마시고, 취침 3시간 전 식사를 마치세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="100" height="175" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">생체리듬</text>
      <text x="75" y="135" font-family="${fontFamilies}" font-size="34" text-anchor="middle">☀️</text>
      
      <text x="150" y="62" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 아침 햇볕 15분 &amp; 두한족열(頭寒足熱) 족욕
      </text>
      <text x="150" y="102" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 기상 후 15분간 햇볕을 쬐면 뇌 시상하부 시계가 리셋되어 주야 자율신경 리듬이 정렬됩니다.
      </text>
      <text x="150" y="134" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 저녁 40~42도 따뜻한 물로 15분간 족욕을 하면 상열하한의 불균형이 풀리고 숙면을 돕습니다.
      </text>
      <rect x="150" y="156" width="780" height="34" rx="6" fill="#fffbeb" />
      <text x="165" y="179" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 머리는 시원하게, 발은 따뜻하게 유지하여 말초 혈관 순환을 촉진하세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 "지친 신경계에 휴식을 줄 때, 몸은 반드시 본래의 평온과 활력을 되찾습니다."
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
  console.log('Generating Bupyeong Autonomic Disorder blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in both target directories!');
}

main().catch(console.error);
