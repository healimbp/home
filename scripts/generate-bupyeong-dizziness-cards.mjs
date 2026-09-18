import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-dizziness',
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
      <stop offset="0%" stop-color="#081E1B" />
      <stop offset="50%" stop-color="#113A33" />
      <stop offset="100%" stop-color="#0A2420" />
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
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌀 어지럼증 · 이명 · 자율신경 클리닉</text>
  </g>

  <!-- 메인 화이트 카드 컨테이너 -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- 서브 후킹 뱃지 -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="560" height="40" rx="10" fill="#E6F7F4" stroke="#A7E3D8" stroke-width="1.5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0D766E">
        MRI·이비인후과 정상인데 붕 뜨고 핑 돌 때
      </text>
    </g>

    <!-- 메인 타이틀 -->
    <text x="55" y="140" font-family="${fontFamilies}" font-size="46" font-weight="bold" fill="#0F172A" letter-spacing="-1.5">
      부평 어지럼증 한의원 치료법
    </text>
    <text x="55" y="195" font-family="${fontFamilies}" font-size="27" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      뇌 혈류 저하 · 경추 비틀림 · 자율신경 실조의 근본 해법
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
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">검사상 안 나오는 '경추성·자율신경성 어지럼' 감별</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">귀·뇌 검사는 정상이지만 지속되는 부유감, 머리 무거움, 만성 어지럼 집중 진단</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#FEF3C7" />
        <circle cx="67" cy="67" r="26" fill="#D97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">상부 경추(C1-C2) 정렬 &amp; 뇌 혈류 개통 추나</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">추골동맥 압박을 해소하고 전정신경핵 고유감각 신호 왜곡을 바로잡는 비수술 교정</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#E0F2FE" />
        <circle cx="67" cy="67" r="26" fill="#0284C7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="52" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0F172A">1:1 맞춤 청간건비탕 &amp; 신경 약침 &amp; 바이오피드백</text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">소화기 담음(痰飮)을 제거하고 전정기능 자생력을 깨우는 4단계 통합 치료</text>
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
      <stop offset="0%" stop-color="#081E1B" />
      <stop offset="50%" stop-color="#113A33" />
      <stop offset="100%" stop-color="#0A2420" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#DC2626" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔍 POINT 01. 어지럼증 원인 분석</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      MRI·귀 검사는 정상인데 왜 자꾸 어지러울까?
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      기질적 이상이 아닌 뇌 신경 기능과 혈류 조절의 불균형 때문입니다.
    </text>

    <!-- 원인 카드 3개 -->
    <g transform="translate(55, 160)">
      <!-- 원인 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#FEF2F2" stroke="#FECACA" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#991B1B">① 지속성 체위지각 어지럼(PPPD) &amp; 전정 신경 왜곡</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          이석증이나 전정신경염을 앓은 뒤, 뇌의 공간인지 중추가 과민해져
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          가만히 서 있어도 스펀지 위를 걷는 듯 붕 뜨는 만성 부유감이 지속됩니다.
        </text>
      </g>

      <!-- 원인 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#92400E">② 상부 경추 비틀림 &amp; 추골동맥 뇌 혈류 저하 (경추성)</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          일자목·거북목으로 1·2번 목뼈가 틀어지면 뇌로 가는 혈관(추골동맥)이 좁아져
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          소뇌와 전정신경핵에 산소 공급이 저하되어 핑 도는 어지럼이 유발됩니다.
        </text>
      </g>

      <!-- 원인 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#1E40AF">③ 한의학적 담훈(痰暈) &amp; 자율신경 실조</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          위장의 노폐물인 담음(痰飮)이 기혈 순환을 막고 미주신경을 자극하여
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          식후에 속이 울렁거리고 메스꺼우며 머리가 무겁고 멍해지는 어지럼이 생깁니다.
        </text>
      </g>
    </g>

    <!-- 하단 메시지 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#0D9488" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        💡 어지럼의 숨은 신경학적 연결고리를 풀면 맑은 머리를 되찾을 수 있습니다.
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
      <stop offset="0%" stop-color="#081E1B" />
      <stop offset="50%" stop-color="#113A33" />
      <stop offset="100%" stop-color="#0A2420" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#D97706" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 어지럼증 자가진단</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      진료실에서 체크하는 어지럼증 5대 핵심 신호
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      3개 이상 해당된다면 신경계와 혈류 조절 이상을 점검해야 합니다.
    </text>

    <!-- 체크 항목 5개 -->
    <g transform="translate(55, 160)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">만성 부유감 &amp; 붕 뜸</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">구름 위나 흔들리는 배 위에 서 있는 것처럼 몸이 붕 뜨고 중심잡기 어렵다.</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">체위 변화 시 핑 도는 어지럼</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">누웠다 일어나거나 고개를 돌릴 때 순간적으로 시야가 캄캄해지고 핑 돈다.</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 240)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">목·어깨 결림 &amp; 긴장성 두통</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">뒷목과 어깨가 돌처럼 굳어 있고, 후두부 두통이나 눈 피로감이 동반된다.</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">식후 메스꺼움 &amp; 소화불량 (담훈)</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">식사 후 명치가 답답하고 헛구역질이나 메스꺼움과 함께 어지럼이 심해진다.</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 480)">
        <rect x="0" y="0" width="860" height="105" rx="16" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <circle cx="50" cy="52" r="22" fill="#0D9488" />
        <text x="50" y="60" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0F172A">시각 자극 민감 &amp; 불안감</text>
        <text x="95" y="78" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">대형마트, 복잡한 거리, 엘리베이터 등 시각 자극이 많은 곳에서 어지럽다.</text>
      </g>
    </g>

    <!-- 하단 CTA -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#13332B" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        정밀한 뇌파·자율신경·체열·경추 정렬 검사로 정확한 원인을 찾습니다.
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
      <stop offset="0%" stop-color="#081E1B" />
      <stop offset="50%" stop-color="#113A33" />
      <stop offset="100%" stop-color="#0A2420" />
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
      뇌 혈류와 전정 자생력을 깨우는 4단계 통합 치료
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      임시적인 진정제가 아닌 뇌와 전정신경의 평형 조절 능력을 복원합니다.
    </text>

    <!-- 4단계 그리드 -->
    <g transform="translate(55, 160)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 01</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">체질 맞춤 청간건비탕</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">소화기 담음(痰飮)을 없애고</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">기혈을 뇌로 원활히 공급하여</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">어지럼과 메스꺼움을 치료합니다.</text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 02</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">경추 교정 추나 &amp; CST</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">비틀린 상부 경추를 정렬하여</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">추골동맥 혈류 순환을 트고</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">전정신경핵 압박을 해소합니다.</text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 03</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">전정 안정 침구 &amp; 약침</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">풍지, 예풍, 백회, 족삼리 등</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">전정 및 신경 특효혈을 자극해</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">이명과 어지럼을 신속히 진정합니다.</text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(445, 310)">
        <rect x="0" y="0" width="415" height="280" rx="20" fill="#F8FAF9" stroke="#CFDFD8" stroke-width="1.5" />
        <rect x="25" y="25" width="100" height="36" rx="8" fill="#E6F7F4" />
        <text x="75" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0D9488" text-anchor="middle">STEP 04</text>
        <text x="25" y="95" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0F172A">뇌파 바이오피드백</text>
        <text x="25" y="135" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">어지럼으로 과민해진 뇌 신경망과</text>
        <text x="25" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">불안 신호를 안정화하여</text>
        <text x="25" y="195" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#526B63">재발 없는 완전한 회복을 완성합니다.</text>
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
      <stop offset="0%" stop-color="#081E1B" />
      <stop offset="50%" stop-color="#113A33" />
      <stop offset="100%" stop-color="#0A2420" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 60)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="#059669" />
    <text x="0" y="32" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 04. 생활 속 어지럼 예방 루틴</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="80" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
      어지럼을 줄여주는 3가지 생활 실천법
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4B5563">
      일상의 작은 습관 교정으로 뇌 혈류와 신경 안정을 도울 수 있습니다.
    </text>

    <!-- 팁 카드 3개 -->
    <g transform="translate(55, 160)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">① 기립 시 3단계 동작 &amp; 발목 까딱이기</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          누워 있다가 벌떡 일어나지 마시고, 30초 걸터앉아 발목을 위아래로 움직인 뒤
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          천천히 일어나면 하체에 몰린 혈액이 뇌로 빠르게 공급되어 핑 도는 증상을 막습니다.
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">② 후두하근 온찜질 &amp; 턱 당기기 스트레칭</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          뒷머리와 목이 만나는 부위를 따뜻하게 찜질하고, 턱을 가슴 쪽으로 당겨주는
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          자세 교정 운동으로 추골동맥 압박을 해소하고 뇌 혈류를 원활히 합니다.
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="180" rx="20" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="1.5" />
        <text x="40" y="55" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#166534">③ 과식·밀가루·카페인 줄이고 소화기 관리</text>
        <text x="40" y="100" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          위장 담음(痰飮)은 어지럼의 주요 원인입니다. 소화에 부담을 주는 음식과
        </text>
        <text x="40" y="135" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4B5563">
          자율신경을 자극하는 카페인을 줄이고 따뜻한 미온수를 자주 섭취하세요.
        </text>
      </g>
    </g>

    <!-- 하단 메시지 -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="65" rx="16" fill="#13332B" />
      <text x="430" y="41" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        균형 잡힌 신경계가 편안하고 흔들림 없는 하루를 만듭니다.
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
  console.log('[Bupyeong Dizziness Cards] Generating 5 visual cards...');
  renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  renderAndSave(generateCauseCard(), '02_point1_cause.jpg');
  renderAndSave(generateChecklistCard(), '03_point2_checklist.jpg');
  renderAndSave(generateTreatmentCard(), '04_point3_treatment.jpg');
  renderAndSave(generateSelfcareCard(), '05_point4_selfcare.jpg');
  console.log('[Bupyeong Dizziness Cards] All 5 cards generated successfully!');
}

main().catch(console.error);
