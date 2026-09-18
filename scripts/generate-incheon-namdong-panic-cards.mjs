import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-namdong-panic',
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
      <stop offset="0%" stop-color="#09182b" />
      <stop offset="50%" stop-color="#0d2830" />
      <stop offset="100%" stop-color="#06131c" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0d9488" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#f0fdfa" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        숨이 턱 막히고 심장이 쿵쾅거리는 공포 "죽지 않습니다"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 남동구 공황장애 원인과 한방 치료
    </text>
    <text x="55" y="200" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 편도체 오경보를 끄고 자율신경 균형을 되찾는 1:1 자생력 솔루션
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2ece7" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">심장·폐 이상이 아닌 뇌 편도체의 '가짜 화재경보'</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">위험하지 않은 일상 상황에서 교감신경이 급발진하여 나타나는 생리 반응</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">공황발작 ➡️ 예기불안 ➡️ 광장공포증 악순환</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">지하철, 터널, 마트 등 회피 행동이 굳어지기 전 조기에 뇌 흥분을 가라앉혀야</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f172a">1:1 맞춤 한약 &amp; 뇌파 훈련 &amp; CST 두개천골요법</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#475569">신경안정제 의존 없이 스스로 심신을 진정시키는 뇌 자생력 통합 치료</text>
      </g>
    </g>

    <!-- Footer Banner -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0f2922" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 1:1 맞춤 두뇌신경 클리닉 (부평역 7번 출구 도보 5분)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CARD 1: POINT 01 공황장애 신경학적 발병 원인 요약 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#0a192f" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">공황장애의 신경생리학적 원인</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "심장마비가 아닙니다, 뇌 편도체의 오경보 오작동"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38bdf8" letter-spacing="-0.5">
    위험을 감지하는 편도체(Amygdala)의 과열과 교감신경계 급발진
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fee2e2" />
      <circle cx="75" cy="80" r="26" fill="#dc2626" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#b91c1c">편도체의 고장 난 화재경보기 (가짜 위험 신호)</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">실제 생명의 위협이 전혀 없는데도 뇌의 공포 중추인 편도체가</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">"비상사태! 지금 당장 죽을 것 같다!"며 가짜 경보를 사방에 울립니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626">👉 심장과 폐의 기질적 이상이 아닌 뇌 신경 감지 시스템의 에러입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#fef3c7" />
      <circle cx="75" cy="80" r="26" fill="#d97706" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#b45309">교감신경의 급발진 (투쟁-도피 반응 폭주)</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">아드레날린이 과다 분비되며 심장이 분당 120~150회로 요동치고,</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#334155">혈관 수축으로 인한 어지럼증, 손발 저림, 과호흡 증상이 몰아칩니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#d97706">👉 만성 과로, 수면 부족, 번아웃이 자율신경 조절력을 무너뜨립니다.</text>
    </g>

    <!-- Box 3 (Warning) -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="235" rx="24" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2" filter="url(#shadow1)" />
      
      <rect x="35" y="40" width="80" height="80" rx="20" fill="#dcfce7" />
      <circle cx="75" cy="80" r="26" fill="#16a34a" />
      <text x="75" y="90" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#15803d">안심하세요: 공황발작으로 절대 죽거나 기절하지 않습니다</text>
      <text x="140" y="108" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#166534">공황발작은 대개 10~20분에 정점을 찍고 자연스럽게 가라앉습니다.</text>
      <text x="140" y="145" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#166534">혈압과 심박수가 치솟는 것은 몸을 지키려는 방어 기전일 뿐입니다.</text>
      <text x="140" y="185" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#15803d">👉 뇌에게 "이것은 가짜 신호일 뿐 안전하다"는 것을 학습시켜야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1000)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 공황장애는 뇌의 브레이크 기능과 자율신경 밸런스를 바로잡으면 충분히 완치됩니다
    </text>
  </g>
</svg>
  `;
}

// 3. CARD 2: POINT 02 공황발작 자가진단 & 3단계 진행 패턴 카드
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#042326" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0d9488" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">공황장애 자가진단 &amp; 3단계 진행</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "순간의 공포에서 일상 마비로 이어지는 3단계"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    회피 행동(광장공포증)이 고착화되기 전 초기 개입이 예후를 좌우합니다
  </text>

  <!-- 4 Step Flow Cards -->
  <g transform="translate(60, 235)">
    <!-- Stage 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">공황발작</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#991b1b">급성 공황발작 (심계항진 · 질식감 · 극심한 공포)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">심장이 미친 듯이 뛰고 숨이 턱 막히며 '곧 미치거나 죽을 것 같다'는 공포</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 응급실에서 심전도·피검사를 받아도 '아무 이상 없다'는 판정을 받음</text>
    </g>

    <!-- Stage 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">예기불안</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400e">예기불안 (Anticipatory Anxiety, 끝없는 걱정)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">"또 그때처럼 숨이 막히면 어쩌지?" 24시간 내내 신체 감각에 극도로 예민</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 사소한 심장 두근거림이나 어지럼증에도 뇌가 즉각 과민 반응을 일으킴</text>
    </g>

    <!-- Stage 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">광장공포</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#1e40af">광장공포증 &amp; 회피 행동 (활동 반경 축소)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">지하철, 만원 버스, 터널 운전, 마트 계산대, 엘리베이터 등 밀폐 공간 기피</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 도움을 받기 어렵거나 즉각 탈출하기 힘든 장소를 피하며 외출을 꺼림</text>
    </g>

    <!-- Stage 4 (Warning) -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="185" rx="20" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" filter="url(#shadow2)" />
      
      <rect x="25" y="30" width="120" height="125" rx="16" fill="#ffe4e6" />
      <text x="85" y="78" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#e11d48" text-anchor="middle">만성화</text>
      <text x="85" y="122" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c" text-anchor="middle">주의</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#9f1239">2차 우울증 및 자율신경 실조증으로 발전</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#881337">사회생활이 단절되고 무기력감, 만성 불면증, 위장장애, 우울증이 동반됨</text>
      <text x="170" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4c0519">증상이 나타난 지 1~3개월 이내에 자율신경 균형을 바로잡아야 완치율이 높습니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#5eead4" text-anchor="middle">
      ⚠️ 위 증상 중 4가지 이상이 급격히 나타난다면 지체 없이 전문 진료를 받으셔야 합니다
    </text>
  </g>
</svg>
  `;
}

// 4. CARD 3: POINT 03 해아림 4단계 맞춤 한방 치료 솔루션 요약 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#111633" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#6366f1" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c7d2fe">해아림 4단계 통합 공황 치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "신경안정제 의존 없이 뇌 자생력을 회복합니다"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#a5b4fc" letter-spacing="-0.5">
    과열된 편도체를 진정시키고 자율신경계 회복력을 극대화하는 1:1 솔루션
  </text>

  <!-- 4 Step Solution Cards -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eef2ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#4f46e5" text-anchor="middle">1단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#4338ca" text-anchor="middle">맞춤한약</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#312e81">체질별 1:1 청심안신(淸心安神) 탕전</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">심담허겁(천왕보심단·온담탕)·간기울결(사역산)·수기능심(영계출감탕) 처방</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5">👉 심장 열을 내리고 뇌 편도체의 과흥분을 진정시켜 가슴 두근거림과 답답함 완화</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#f0fdf4" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#16a34a" text-anchor="middle">2단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#15803d" text-anchor="middle">두뇌훈련</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#14532d">뇌파 바이오피드백 &amp; 자율신경 이완 훈련</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">과각성된 고주파 하이베타파를 억제하고 안정적인 SMR파와 알파파 유도</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#16a34a">👉 전두엽의 제어력을 키워 공황 신호가 올 때 스스로 호흡과 심박을 안정화</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">3단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">침구약침</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#065f46">내관·신문·단중 경혈 자극 &amp; 안신 약침</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">심포경의 내관혈과 심경의 신문혈, 가슴 중앙 단중혈을 자극해 기체(氣滯) 해소</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 가슴 옥죄임, 숨찬 느낌, 명치 답답함, 상열감을 신속하게 진정</text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#faf5ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#9333ea" text-anchor="middle">4단계</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#7e22ce" text-anchor="middle">구조이완</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#6b21a8">두개천골요법(CST) &amp; 상부 경추·흉곽 추나요법</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">굳어진 흉곽과 횡격막, 상부 경추(1·2번) 긴장을 풀어 뇌척수액 순환 촉진</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9333ea">👉 미주신경(부교감신경) 경로의 압박을 해소하여 깊은 호흡과 전신 이완 유도</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#1e1b4b" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#c7d2fe" text-anchor="middle">
      🩺 양약 복용 중에도 안전하게 병행하며 단계적 감량(테이퍼링)을 안전하게 돕습니다
    </text>
  </g>
</svg>
  `;
}

// 5. CARD 4: POINT 04 공황발작 시 응급 대처 & 생활 4수칙 요약 카드 (약선차 제외!)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#2d1706" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#f59e0b" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fde68a">공황발작 응급 대처 &amp; 생활 4수칙</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "불안이 밀려올 때 몸과 뇌를 즉각 진정시키는 법"
  </text>
  <text x="60" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#fef3c7" letter-spacing="-0.5">
    의지에 의존하지 않고 신체 반응을 다스리는 현실적 실천 프로토콜
  </text>

  <!-- 4 Principles -->
  <g transform="translate(60, 235)">
    <!-- Principle 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#ecfdf5" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#059669" text-anchor="middle">수칙 1</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#047857" text-anchor="middle">이완호흡</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#065f46">4-7-8 횡격막 이완 호흡법 (과호흡 방지)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">숨을 4초간 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 길게 내쉽니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">👉 과호흡으로 인한 이산화탄소 저하를 막고 부교감신경을 즉각 활성화합니다.</text>
    </g>

    <!-- Principle 2 -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#eff6ff" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">수칙 2</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1d4ed8" text-anchor="middle">감각접지</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#1e40af">5-4-3-2-1 그라운딩 기법 (현재로 돌아오기)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">눈에 보이는 5가지 사물, 만져지는 4가지 감각, 들리는 3가지 소리에 집중합니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">👉 머릿속 공포 상상에서 벗어나 오감을 통해 현실의 안전 감각을 깨웁니다.</text>
    </g>

    <!-- Principle 3 -->
    <g transform="translate(0, 370)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fee2e2" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">수칙 3</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c" text-anchor="middle">자극차단</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#991b1b">카페인 &amp; 알코올 철저 차단 (교감신경 안정)</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">커피, 에너지음료는 심박수를 높여 발작을 유발하고 술은 반동 불안을 키웁니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 치료 기간 중에는 디카페인이나 미온수 음용을 습관화하세요.</text>
    </g>

    <!-- Principle 4 -->
    <g transform="translate(0, 555)">
      <rect x="0" y="0" width="960" height="165" rx="20" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="25" y="25" width="120" height="115" rx="16" fill="#fef3c7" />
      <text x="85" y="68" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 4</text>
      <text x="85" y="110" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309" text-anchor="middle">혈류이완</text>
      
      <text x="170" y="65" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400e">내관혈 지압 &amp; 취침 90분 전 미온수 족욕</text>
      <text x="170" y="105" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">손목 안쪽 내관혈을 지그시 누르고 40도 미온수에 15분간 족욕을 합니다.</text>
      <text x="170" y="138" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 상체로 쏠린 열(상열하한)을 아래로 내려 심신을 편안한 이완 상태로 유도합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 1005)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#78350f" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#fef3c7" text-anchor="middle">
      ❤️ 공황 신호는 지나가는 파도일 뿐입니다. 몸을 이완하고 파도가 지나가길 기다리세요
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
  console.log('Generating Incheon Namdong Panic Disorder blog cards (1080x1080)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 high-res cards rendered successfully in both directories!');
}

main().catch(console.error);
