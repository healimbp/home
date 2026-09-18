import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-autonomic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const fontFamilies = "'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Pretendard', sans-serif";

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 1. MAIN THUMBNAIL (01_naver_main_thumbnail.jpg)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000000" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" />
      <stop offset="50%" stop-color="#0d3832" />
      <stop offset="100%" stop-color="#051917" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 68)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">부천 자율신경 &amp; 만성피로·어지럼 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="650" height="42" rx="10" fill="#f0fdf4" stroke="#dcfce7" stroke-width="1.5" />
      <text x="24" y="27" font-family="${fontFamilies}" font-size="18.5" font-weight="bold" fill="#0f766e">
        검사는 정상인데 온몸이 아픈 이유 "자율신경 불균형입니다"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 자율신경실조증 원인과 한방 치료
    </text>
    <text x="55" y="196" font-family="${fontFamilies}" font-size="23" font-weight="600" fill="#2d6a59" letter-spacing="-0.5">
      과열된 교감신경을 끄고 무너진 자생력을 복원하는 맞춤 솔루션
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#e0f2ed" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#0f766e" text-anchor="middle">01</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">교감신경 과항진 &amp; 부교감신경 고갈</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">자동차 냉각수 고갈(상열하한) 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#e0f2ed" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#0f766e" text-anchor="middle">02</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">두근거림 · 어지럼 · 만성소화불량</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">자율신경 이상 5대 핵심 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#e0f2ed" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#0f766e" text-anchor="middle">03</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">수승화강 맞춤한약 &amp; SGB 약침</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌척수액 순환 &amp; 신경계 항상성 회복</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="#e0f2ed" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="#0f766e" text-anchor="middle">04</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">POINT 04. 생활 루틴</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">4-7-8 호흡 &amp; 취침 전 40도 족욕</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">물리적 미주신경 활성화 생활 요법</text>
      </g>
    </g>

    <!-- Bottom Footer Box -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="280" rx="20" fill="#f0f6f3" stroke="#d1e3da" stroke-width="1.5" />
      
      <!-- Doctor Profile Box -->
      <g transform="translate(35, 30)">
        <circle cx="35" cy="35" r="32" fill="#2F5D50" />
        <text x="35" y="43" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">權</text>
        <text x="85" y="32" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1E4638">해아림한의원 인천부평점 · 대표원장 권형근</text>
        <text x="85" y="58" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#4E6159">한방침구과 전문의 직접 진료 ｜ 1:1 맞춤 자율신경계 균형 회복</text>
      </g>

      <!-- Location and Hours -->
      <g transform="translate(35, 125)">
        <rect x="0" y="0" width="790" height="120" rx="14" fill="#ffffff" stroke="#e2eae5" />
        <text x="25" y="38" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 오시는 길 ]</text>
        <text x="135" y="38" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분 / 부천 상동 인접)</text>
        
        <text x="25" y="72" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 진료 시간 ]</text>
        <text x="135" y="72" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">월 · 수 · 금 20시 야간진료 ｜ 화 19시 ｜ 토 15시</text>

        <text x="25" y="102" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 예약 문의 ]</text>
        <text x="135" y="102" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">032-719-3472 ｜ 네이버 간편 예약 &amp; 카카오톡 1:1 비밀상담 가능</text>
      </g>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01 CAUSE CARD (02_point1_cause.jpg)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" />
      <stop offset="60%" stop-color="#0d3832" />
      <stop offset="100%" stop-color="#051917" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#0d9488" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
      신경생리학으로 밝혀낸 자율신경실조증 발병 기전
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      24시간 밟히는 엑셀(교감) &amp; 고장 난 브레이크(부교감)
    </text>

    <!-- 3 Key Mechanism Cards -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">만성 스트레스와 교감신경의 폭주</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">과로, 번아웃, 수면 부족이 누적되면 뇌가 24시간 비상사태로 인식하여 혈관을 수축시킵니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0d9488">➔ 심장 두근거림, 가슴 답답함, 근육 긴장, 식은땀, 안면 열감 발생</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">부교감신경(미주신경)의 기능 고갈</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">휴식과 소화, 재생을 담당하는 브레이크가 마모되어 몸이 스스로 이완하지 못합니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0d9488">➔ 위장 운동 정지(신경성 소화불량, 담적) 및 얕은 잠, 극심한 만성 피로</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">한의학적 핵심 병리: 수승화강(水昇火降) 실조</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">차가운 물 기운은 위로, 따뜻한 불 기운은 아래로 순환해야 하는데 상열하한으로 역전됨</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0d9488">➔ 머리와 가슴은 불타듯 뜨겁고 손발과 아랫배는 얼음처럼 차가운 악순환</text>
      </g>
    </g>

    <!-- Bottom Message Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        "검사에 안 나오는 원인, 신경의 기질적 파괴가 아닌 '조절 기능의 실조'입니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

// 3. POINT 02 CHECKLIST CARD (03_point2_checklist.jpg)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" />
      <stop offset="60%" stop-color="#0d3832" />
      <stop offset="100%" stop-color="#051917" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#0d9488" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
      진료실에서 확인하는 자율신경 이상 신호
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      자율신경실조증 자가진단 체크리스트 5선
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#dcfce7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 특별한 이유 없이 가슴이 두근거리고 숨이 깊게 안 쉬어짐</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#4a5f57">심장내과 검사는 정상인데 조이거나 답답한 느낌이 지속되는 경우</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#dcfce7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 자리에 앉았다 일어설 때 핑 돌거나 머리가 멍함(브레인포그)</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#4a5f57">뇌 혈류가 일시적으로 저하되어 시야가 흐려지거나 아찔한 기립성 어지럼</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#dcfce7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 내시경은 깨끗한데 만성 소화불량, 가스 참, 잦은 체기</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#4a5f57">자율신경 조절 이상으로 위장 외벽이 굳어 운동성이 멈추는 담적 현상</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#dcfce7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">4. 얼굴과 상체로 열이 치솟는데 손발은 얼음처럼 차가움</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#4a5f57">체온 조절 중추의 오작동으로 식은땀과 상열하한(수승화강 실조) 발생</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="98" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="19" width="60" height="60" rx="12" fill="#dcfce7" />
        <text x="50" y="57" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="100" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">5. 잠을 8시간 이상 자도 멍하고 목 뒤가 항상 뻐근한 만성 피로</text>
        <text x="100" y="75" font-family="${fontFamilies}" font-size="15" font-weight="500" fill="#4a5f57">자면서도 뇌가 각성 상태를 유지하여 깊은 델타파 수면에 들지 못함</text>
      </g>
    </g>

    <!-- Bottom Guide -->
    <g transform="translate(55, 745)">
      <rect x="0" y="0" width="860" height="95" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="18.5" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 위 증상 중 3가지 이상이 복합적으로 나타난다면
      </text>
      <text x="430" y="72" font-family="${fontFamilies}" font-size="16" font-weight="600" fill="#166534" text-anchor="middle">
        개별 증상 치료가 아닌 자율신경계(HRV) 정밀 검사를 받아보셔야 합니다.
      </text>
    </g>
  </g>
</svg>
  `;
}

// 4. POINT 03 TREATMENT CARD (04_point3_treatment.jpg) - 3 Spacious Horizontal Cards
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" />
      <stop offset="60%" stop-color="#0d3832" />
      <stop offset="100%" stop-color="#051917" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#059669" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      과열된 교감신경을 내리고 무너진 생체 항상성을 복원
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      해아림 부평점 1:1 맞춤 자율신경 회복 솔루션
    </text>

    <!-- 3 Key Treatment Pillar Cards (Spacious 860px Horizontal Layout) -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#d1fae5" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#059669" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#065f46">수승화강(水昇火降) 1:1 맞춤 탕약</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">사역산 · 시호가용골모려탕 · 천왕보심단 가감방으로 상체 허열 진정</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">➔ 심장 박동 안정, 위장 소화 흡수력 촉진 및 전신 기혈 순환 복원</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#dcfce7" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#16a34a" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#14532d">SGB 성상신경절 약침 &amp; 경혈 침구</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">목 앞쪽 성상신경절과 전중·내관·풍지혈 자극으로 과민 신경망 리셋</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">➔ 뇌 혈관의 미세 순환을 즉각 촉진하고 급격한 혈압·맥박 긴장 해소</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2fe" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0284c7" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">두개천골 추나요법 (CST) &amp; 뉴로피드백</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#334155">상부 경추와 두개골 교정으로 뇌척수액 순환로 확보 &amp; 뇌파 안정 훈련</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">➔ 미주신경 압박을 풀고 자율신경 항상성(Homeostasis) 자생력 완성</text>
      </g>
    </g>

    <!-- Bottom Tag -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        "신경안정제에 의존하지 않고 스스로 균형을 잡는 자생력을 길러줍니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

// 5. POINT 04 SELFCARE CARD (05_point4_selfcare.jpg) - 3 Spacious Horizontal Cards (NO TEA, NO '(약선차 제외)' text!)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" />
      <stop offset="60%" stop-color="#0d3832" />
      <stop offset="100%" stop-color="#051917" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 68)">
    <rect x="-180" y="0" width="360" height="46" rx="23" fill="#0f766e" />
    <text x="0" y="30" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 생활 관리</text>
  </g>

  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
      손상된 미주신경(브레이크)을 깨우는 물리적·행동학적 루틴
    </text>
    <text x="55" y="115" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      자율신경을 안정시키는 데일리 힐링 루틴 3가지
    </text>

    <!-- 3 Lifestyle Routine Cards -->
    <g transform="translate(55, 160)">
      <!-- 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">01</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">4-7-8 이완 복식호흡법 (부교감신경 강제 활성화)</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">4초간 코로 숨을 들이마시고 7초간 멈춘 뒤 8초간 입으로 길게 내쉽니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">➔ 횡격막을 자극하여 과열된 심장 박동을 완만하게 진정시킵니다.</text>
      </g>

      <!-- 2 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">02</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">취침 90분 전 40도 온수 족욕 15분 &amp; 후두하근 찜질</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">하체의 말초 혈관을 확장시켜 상체로 치솟은 열을 아래로 유도합니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">➔ 수승화강을 촉진하여 수면 중 깊은 델타파 진입을 돕습니다.</text>
      </g>

      <!-- 3 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="175" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="125" height="125" rx="16" fill="#e0f2ed" />
        <text x="87" y="100" font-family="${fontFamilies}" font-size="52" font-weight="900" fill="#0f766e" text-anchor="middle">03</text>
        <text x="175" y="65" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">기상 직후 15분 햇볕 쬐기 &amp; 카페인·찬물 제한</text>
        <text x="175" y="100" font-family="${fontFamilies}" font-size="16" font-weight="500" fill="#4a5f57">아침 햇살은 세로토닌을 분비시키고 일주기 생체시계를 리셋합니다.</text>
        <text x="175" y="130" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">➔ 교감신경을 자극하는 커피 대신 따뜻한 미온수를 마십니다.</text>
      </g>
    </g>

    <!-- Bottom Message Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#0f172a" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#f8fafc" text-anchor="middle">
        "몸의 리듬을 되찾으면 지쳐있던 자율신경계는 반드시 회복됩니다."
      </text>
    </g>
  </g>
</svg>
  `;
}

function renderAndSave(svg, fileName) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render().asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, pngData);
  }
  console.log(`✅ 생성 완료: ${fileName}`);
}

console.log('🎨 [부천 자율신경실조증] 고화질 5종 카드뉴스 이미지 렌더링 시작...\n');

renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
renderAndSave(generatePoint1Cause(), '02_point1_cause.jpg');
renderAndSave(generatePoint2Checklist(), '03_point2_checklist.jpg');
renderAndSave(generatePoint3Treatment(), '04_point3_treatment.jpg');
renderAndSave(generatePoint4Selfcare(), '05_point4_selfcare.jpg');

console.log('\n🎉 부천 자율신경실조증 5종 카드뉴스 생성이 성공적으로 완료되었습니다!');
