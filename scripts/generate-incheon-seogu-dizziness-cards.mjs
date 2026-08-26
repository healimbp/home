import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/incheon-seogu-dizziness';
const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. MAIN THUMBNAIL CARD (1080x1080)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c2620" />
      <stop offset="50%" stop-color="#114238" />
      <stop offset="100%" stop-color="#081c17" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 어지럼증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e6f0ec" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        MRI·이비인후과 정상인데 땅이 꺼지고 붕 뜰 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 서구 한의원 어지럼증 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      뇌 혈류 저하·상부경추 비틀림·자율신경 불균형의 근본 해법
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
          검사상 안 나오는 '경추성·자율신경성 어지럼' 감별
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          귀·뇌 검사 이상 없는 만성 멍함, 브레인포그, 이석증 후유증(PPPD) 집중 진단
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          상부경추(C1-C2) 정렬 &amp; 뇌 혈류 개통 추나요법
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          추골동맥 압박을 풀고 전정신경핵 고유수용감각 신경 왜곡을 바로잡는 비수술 교정
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          체질 맞춤 청뇌 한약 &amp; 뇌신경 밸런스 약침 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          담음(痰飮)·간열(肝熱) 제거, 뇌 혈류 공급 촉진 및 자율신경 과흥분 안정 솔루션
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
        인천 서구(청라·검단·루원시티) 인접 ｜ 부평역 7번 출구 ｜ 1:1 예약진료
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

  <rect width="1080" height="1080" fill="#0c2620" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">검사상 안 나오는 어지럼증의 핵심 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "귀·뇌 검사는 정상인데 왜 자꾸 흔들릴까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    구조적 파열이 아닌 '상부경추 비틀림'과 '자율신경 혈류 장애' 때문입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">상부경추(C1-C2) 아탈구 &amp; 추골동맥 혈류 저하</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">스마트폰·거북목으로 1·2번 목뼈가 틀어지면 뇌로 가는 혈관이 눌리고</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">전정신경핵에 왜곡된 위치 신호를 보내 땅이 꺼지는 듯한 멍함을 유발합니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 목·어깨 통증, 후두부 뻐근함, 브레인포그가 함께 나타납니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">자율신경 불균형 &amp; 기립성 뇌혈류 조절 지연</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">만성 피로와 스트레스로 교감신경이 과열되면 기립 시 혈압 조절이 늦어져</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">일어설 때 눈앞이 캄캄해지고 가슴 두근거림과 식은땀이 동반됩니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 미주신경성 실신 전조증 및 만성 피로와 직결됩니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#dcfce7" />
      <circle cx="72" cy="75" r="24" fill="#16a34a" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#166534">소화기 담음(痰飮) 정체 &amp; 이석증 후유증(PPPD)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#14532d">위장 기능 저하로 노폐물이 쌓이면(담탁상몽) 속이 울렁거리고 맑지 않으며,</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#14532d">이석 정복 후에도 뇌 신경계가 과민해져 마트나 복잡한 곳에서 흔들립니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d">👉 담음 제거와 뇌신경 안정 치료를 병행해야 재발하지 않습니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#081c17" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 어지럼증 약은 일시적 마비일 뿐, 경추 정렬과 뇌 혈류를 뚫어주는 근본 치료가 필요합니다.
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: SELF-CHECKLIST CARD (자가진단 체크리스트 카드)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c2620" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">어지럼증 자가진단 6가지 체크리스트</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "나의 어지럼증, 자율신경·경추 문제일까요?"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    3가지 이상 해당된다면 상부경추 정밀 검진과 체질 맞춤 치료가 필요합니다.
  </text>

  <!-- Checklist List Box Container -->
  <g transform="translate(60, 230)">
    <rect x="0" y="0" width="960" height="690" rx="24" fill="#ffffff" filter="url(#shadow2)" />
    
    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        머리가 맑지 않고 안개가 낀 듯 멍하며, 스펀지 위를 걷는 듯한 붕 뜬 느낌이 든다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        비회전성 어지럼증과 브레인포그의 대표적인 신경학적 전조 신호입니다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        이비인후과·뇌 MRI 검사를 받았으나 "이상 없다"는 진단만 받고 고통이 지속된다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        구조적 손상이 아닌 기능적 뇌 혈류 저하 및 자율신경계 과민 상태입니다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        목과 어깨 뒤쪽(풍지혈 부근)이 항상 굳어있고 고개를 돌릴 때 두통·어지럼이 심하다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        상부 경추 1·2번 아탈구로 인한 추골동맥 압박(경추성 어지럼증) 의심.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        누웠다 일어설 때 눈앞이 핑 돌거나 아찔한 암전감(기립성 어지럼)을 느낀다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        자율신경 혈관 수축 반사 지연 및 뇌 혈류 일시적 공급 부족 현상.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        피로하거나 스트레스를 받으면 가슴 두근거림, 메스꺼움, 귀울림(이명)이 동반된다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        교감신경 과열로 인한 내이 허혈 및 위장 소화 기능 저하(담음) 연계.
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(40, 535)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e6f7f3" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
        대형 마트, 지하철, 형광등 아래 등 복잡하고 빛나는 곳에 가면 불안과 어지럼이 커진다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        시각-전정 감각 처리 과부하로 인한 만성 지속성 체위-지각 어지럼(PPPD).
      </text>
    </g>

    <!-- Warning inside Checklist -->
    <g transform="translate(40, 630)">
      <text x="440" y="30" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e" text-anchor="middle">
        ※ 위 증상들은 단순 빈혈이 아닌 신경계 자생력 저하 신호이므로 빠른 치료가 중요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#081c17" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 해아림한의원은 맥진·설진·자율신경 HRV 검사 및 체형 분석으로 정확한 원인을 찾습니다.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: TREATMENT STEP CARD (맞춤 한방 치료 카드)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0c2620" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림 3단계 뇌·경추·자율신경 통합 치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "증상 억제가 아닌, 뇌의 자생력을 회복합니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    체질 맞춤 한약 처방 + 상부경추 정밀 추나 + 자율신경 약침 요법
  </text>

  <!-- 3 Treatment Step Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">체질 맞춤 청뇌(淸腦) 한약 1:1 개별 처방</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 담음 제거 &amp; 뇌 혈류 개통: 반하백출천마탕, 영계출감탕 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 간양상항(스트레스 열감) 진정 &amp; 심신 안정: 청간식풍탕, 시호가용골모려탕</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 기혈 보강 &amp; 기립성 저혈압 개선: 자음건비탕, 보중익기탕 가감</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">상부경추(C1-C2) 정렬 추나 &amp; FCST 턱관절 교정</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 비틀린 환축관절(C1-C2)을 부드럽게 바로잡아 추골동맥 혈류 통로 개통</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 턱관절-경추-골반 축을 정렬하여 뇌간 전정신경핵 신경 압박 해소</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 일자목·거북목 체형 교정으로 재발 방지 및 만성 두통·어깨결림 완화</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">자율신경 조절 약침 &amp; 뇌파 바이오피드백 훈련</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 풍지·견정·백회혈 순수 한약재 정제 약침으로 후두하근 긴장 즉각 이완</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 과흥분된 교감신경을 진정시키고 부교감신경 활성도를 높이는 침구 요법</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 뇌파 및 심신 이완 훈련으로 시각·전정 과민증과 불안감 안정</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#081c17" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 1:1 맞춤 근본 치료
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

  <rect width="1080" height="1080" fill="#0c2620" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">어지럼증을 줄이는 생활 속 자가관리 꿀팁</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "치료와 함께 실천하면 회복 속도가 2배 빨라집니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    매일 5분 투자로 뇌 혈류를 맑게 하고 자율신경을 안정시키는 3가지 습관
  </text>

  <!-- 3 Tip Boxes -->
  <g transform="translate(60, 235)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌬️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">1. 4-7-8 자율신경 안정 복식호흡</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">코로 4초 들이마시고 ｜ 7초 숨을 멈추고 ｜ 입으로 8초 천천히 내뱉기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">갑작스러운 어지럼이나 불안, 가슴 두근거림이 올라올 때 즉시 교감신경을 낮추고</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">부교감신경을 깨워 뇌로 가는 산소 공급과 혈류를 안정시켜 줍니다.</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💆</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">2. 후두하근(풍지혈) 온찜질 &amp; 지압 스트레칭</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">뒷머리와 목이 만나는 양쪽 오목한 곳을 엄지로 5초간 지그시 누르기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">스마트폰이나 모니터 작업 후 굳은 상부 경추 주변 미세 근육을 풀어주어</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">추골동맥 압박을 해소하고 머리의 무거운 안개(브레인포그)를 걷어냅니다.</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💧</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#133d32">3. 기립 시 3단계 천천히 일어나기 &amp; 미온수 섭취</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">누운 상태에서 바로 일어나지 말고 '앉아서 10초' 머문 뒤 기립하기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">기립성 어지럼 환자는 혈관 수축 반응이 느리므로 단계적 기립이 필수적입니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">아침 기상 직후 미온수 1~2잔을 섭취해 순환 혈액량을 충분히 채워주세요.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#081c17" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 부평역 7번 출구
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
  
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, pngBuffer);
  console.log(`Saved: ${filePath}`);
}

async function main() {
  console.log('Generating Incheon Seo-gu Dizziness blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in:', outputDir);
}

main().catch(console.error);
