import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-panic',
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
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 인천 신경정신과 · 뇌신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="570" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        갑작스러운 호흡곤란 · 심장 두근거림 · 질식할 것 같은 공포
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 신경정신과 공황장애 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      과열된 편도체 경보를 끄고 자율신경 밸런스를 바로잡습니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 오작동 &amp; 교감신경 폭주</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌의 가짜 화재경보기 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">과호흡 · 어지럼 · 예기불안</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">5대 주요 공황 증상 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 신경 조절 자생력 회복</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 힐링 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 복식호흡 &amp; 전중혈 지압</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">발작 시 즉각 진정 루틴</text>
      </g>
    </g>

    <!-- Clinic Doctor Profile Bar -->
    <g transform="translate(55, 530)">
      <rect x="0" y="0" width="860" height="175" rx="20" fill="#f3f8f6" stroke="#cde3db" stroke-width="1.5" />
      <circle cx="75" cy="88" r="48" fill="#2d6a59" />
      <text x="75" y="100" font-family="${fontFamilies}" font-size="46" text-anchor="middle">👨‍⚕️</text>
      <text x="145" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 권형근 대표원장
      </text>
      <text x="145" y="88" font-family="${fontFamilies}" font-size="16" font-weight="600" fill="#0d9488">
        한방침구과 전문의 · 한의학 석사 · 1:1 맞춤 정밀 진료
      </text>
      <text x="145" y="118" font-family="${fontFamilies}" font-size="15" fill="#4b635a">
        "공황발작은 죽는 병이 아니며 뇌의 오경보일 뿐입니다. 근본 치료로 공포에서 해방시켜 드립니다."
      </text>
      <text x="145" y="145" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        📍 인천 부평역 7번 출구 도보 5분 | 월·수·금 야간진료 (저녁 8시까지)
      </text>
    </g>

    <!-- Bottom Hash Tags -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fafcfb" stroke="#e1ece7" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2d6a59" text-anchor="middle" letter-spacing="0.5">
        #인천신경정신과 #인천공황장애 #인천공황장애한의원 #부평공황장애 #공황발작대처법 #해아림한의원인천부평점
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: 병리 기전 및 원인 분석 카드
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 원인 분석</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      공황장애, 왜 멀쩡하다가 갑자기 죽을 것 같을까?
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      심장병이 아니라 뇌의 화재경보기(편도체)가 고장 나 울리는 가짜 비상경보입니다
    </text>
  </g>

  <!-- 3 Cause Cards Vertical -->
  <g transform="translate(60, 205)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚨</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1. 편도체 오작동 &amp; 뇌간 청반핵 과흥분 (가짜 위기 경보)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 공포 반응의 중추인 <tspan font-weight="bold" fill="#0369a1">편도체</tspan>와 노르에피네프린 분비처인 <tspan font-weight="bold" fill="#0369a1">청반핵</tspan>이 극도로 예민해집니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 실제 생명의 위협이 전혀 없는데도 뇌가 "지금 죽을 위기다"라며 최대 레벨 경보를 발령합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 결과: 아무런 이유 없이 급작스럽게 치솟는 극도의 공포와 질식감 유발
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 255)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef2f2" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        2. 과호흡 증후군 &amp; 혈중 이산화탄소 저하의 악순환
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 불안으로 얕고 빠른 숨을 쉬면 <tspan font-weight="bold" fill="#b91c1c">이산화탄소(CO2)</tspan>가 과다 배출되어 혈액이 알칼리화됩니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 뇌혈관이 수축하여 어지럼증, 손발 저림, 흉통이 발생하고 환자는 이를 '죽을병'으로 오인합니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 결과: 신체 증상이 공포를 부르고, 공포가 다시 증상을 악화시키는 파국적 악순환
      </text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 510)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="90" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        3. 한의학적 병리: 심담허겁(心膽虛怯) &amp; 상열하한(上熱下寒)
      </text>
      <text x="140" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 과로와 스트레스로 심장과 담의 기운이 약해진 <tspan font-weight="bold" fill="#15803d">심담허겁</tspan> 상태에서 허열이 상체로 뜹니다.
      </text>
      <text x="140" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 심신이 불안정하여 사소한 신체 감각에도 놀라고 가슴이 조여오며 식은땀을 흘리게 됩니다.
      </text>
      <rect x="140" y="160" width="780" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="183" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        👉 해결: 심장의 화(火)를 끄고 담력을 보강하여 뇌 신경의 안정성과 자생력을 회복해야 완치
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🩺 "공황은 뇌의 오경보일 뿐 실제 생명에는 지장이 없으며 치료하면 완치됩니다."
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: 자가진단 체크리스트 카드
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 자가진단</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      나도 공황장애일까? 5대 핵심 증상 체크리스트
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      급작스럽게 증상이 치솟고 10~30분간 지속된다면 공황발작을 의심해야 합니다
    </text>
  </g>

  <!-- 5 Checklist Items Container -->
  <g transform="translate(60, 185)">
    <rect x="0" y="0" width="960" height="785" rx="26" fill="#ffffff" filter="url(#shadow3)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        1. 갑자기 심장이 터질 듯 뛰고 가슴이 조여오며 숨이 차다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 가만히 쉬고 있거나 운전 중 특별한 이유 없이 급격히 심박수가 120~150회 이상 치솟음
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [급성 심혈관 반응]: 응급실을 찾게 되는 가장 대표적인 공황 초기 발작 증상
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(40, 180)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        2. "이러다 죽을 것 같다" 또는 "미쳐버릴 것 같다"는 공포
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 자신이 스스로를 통제할 수 없을 것 같다는 극심한 비현실감과 파국적 공포가 엄습함
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [파국적 인지 왜곡]: 편도체의 공포 회로가 이성적 전두엽을 마비시킨 상태
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(40, 325)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        3. 어지럽고 손발이 저리며 식은땀과 한기(오한)가 든다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 과호흡으로 인해 뇌 혈류가 일시적으로 줄어 세상이 붕 뜬 것 같고 감각이 둔해짐
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [말초 신경 증상]: 자율신경실조증에 의한 혈류 재분배 이상 반응
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(40, 470)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        4. "또 발작이 오면 어쩌지?" 하는 예기불안(豫期不安) 지속
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 발작이 가라앉은 후에도 다음 발작에 대한 두려움 때문에 하루 종일 신경이 곤두서 있음
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [예기불안 악순환]: 만성적인 두뇌 과각성을 유발해 일상생활을 갉아먹음
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(40, 615)">
      <rect x="0" y="0" width="880" height="125" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <rect x="25" y="25" width="45" height="45" rx="10" fill="#0d9488" />
      <text x="47" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="90" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        5. 지하철, 터널, 엘리베이터, 고속도로 운전을 피한다
      </text>
      <text x="90" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 즉시 탈출하기 어려운 장소나 도움을 받기 힘든 상황을 회피하는 광장공포증 동반
      </text>
      <text x="90" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">
        ▶ [광장공포증 연계]: 출퇴근, 외출, 사회활동이 제한되는 중증 진행 신호
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 발작 경험 후 예기불안이 지속된다면 방치하지 말고 조기 치료를 시작하세요.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: 1:1 맞춤 한방 치료 솔루션 카드
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 한방 치료</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      뇌 자생력을 깨우는 1:1 맞춤 한방 4단계 솔루션
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      약물 의존 없이 스스로 공황을 조절하고 이겨내는 뇌 힘을 길러드립니다
    </text>
  </g>

  <!-- 4 Step Solution Cards Grid (2x2) -->
  <g transform="translate(60, 185)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#e0f2fe" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">STEP 01</text>
      <circle cx="400" cy="50" r="26" fill="#f0f9ff" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📊</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        뇌기능 &amp; 자율신경 정밀 검사
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 정량 뇌파(QEEG) 검사로 두뇌 활성도 분석
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심박변이도(HRV) 자율신경 스트레스 측정
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 체질 및 심신 상태 1:1 심층 상담
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#f0f9ff" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0369a1">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#0284c7">
        발작을 유발하는 뇌파 과각성과 교감신경 항진 정도를 객관적 수치로 확인
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(495, 0)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#dcfce7" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">STEP 02</text>
      <circle cx="400" cy="50" r="26" fill="#f0fdf4" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        1:1 맞춤 청뇌안신(淸腦安神) 한약
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심장의 화(火)를 끄는 시호가용골모려탕
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 담력을 기르고 기혈을 보하는 온담탕·귀비탕
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 식약처(GMP) 인증 최고급 청정 규격 한약재
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#f0fdf4" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#16a34a">
        편도체 과열을 진정시키고 심장 두근거림, 흉통, 과호흡 등 신체 발작 차단
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 405)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#fef3c7" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">STEP 03</text>
      <circle cx="400" cy="50" r="26" fill="#fffbeb" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🎧</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        두뇌훈련 (뉴로피드백 &amp; 바이오)
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 공포 상태의 뇌파를 안정파(Alpha)로 전환
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심박수 및 호흡 자율신경 바이오피드백
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 공포 상황 노출 인지행동 치료 연계
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#fffbeb" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#92400e">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#b45309">
        밀폐 공간이나 위기 상황에서도 뇌 스스로 침착성을 유지하는 신경 가소성 확보
      </text>
    </g>

    <!-- Step 4 -->
    <g transform="translate(495, 405)">
      <rect x="0" y="0" width="465" height="380" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="30" y="30" width="90" height="36" rx="8" fill="#fce7f3" />
      <text x="75" y="55" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#9d174d" text-anchor="middle">STEP 04</text>
      <circle cx="400" cy="50" r="26" fill="#fdf2f8" />
      <text x="400" y="58" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>

      <text x="30" y="105" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f2922">
        두개천골 추나 &amp; 안신 약침
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 경추 1·2번 및 턱관절의 구조적 긴장 완화
      </text>
      <text x="30" y="175" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 뇌척수액 순환을 돕는 두개천골요법(CST)
      </text>
      <text x="30" y="205" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 전중혈·내관혈 자율신경 조절 약침
      </text>
      <rect x="30" y="240" width="405" height="105" rx="14" fill="#fdf2f8" />
      <text x="45" y="270" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9d174d">
        🎯 치료 목표
      </text>
      <text x="45" y="300" font-family="${fontFamilies}" font-size="14" fill="#be185d">
        가슴 답답함과 호흡곤란을 즉각 완화하고 뇌 혈류를 원활하게 개선
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌿 1:1 맞춤 진료로 공황의 공포에서 벗어나 안전한 일상을 되찾아드립니다.
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: 생활 속 현실적 실천 팁 카드
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#051f1a" flood-opacity="0.12" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2922" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="220" height="42" rx="21" fill="#0d9488" />
    <text x="110" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 힐링 실천 팁</text>
    <text x="0" y="90" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff">
      공황발작이 올 때 즉각 진정시키는 3가지 응급 대처법
    </text>
    <text x="0" y="125" font-family="${fontFamilies}" font-size="20" fill="#a7f3d0">
      발작의 공포를 이겨내고 부교감신경을 강제로 깨우는 현실적 루틴
    </text>
  </g>

  <!-- 3 Healing Tips Container -->
  <g transform="translate(60, 205)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#e0f2fe" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">호흡 조절</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">
        1. 4-7-8 복식 호흡법 (과호흡 즉각 차단)
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 코로 4초간 천천히 숨 들이마시기 → 7초간 숨 멈추기 → 입으로 8초간 길게 내쉬기
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 혈중 이산화탄소 농도를 정상화하고 미주신경을 자극하여 심박수를 빠르게 떨어뜨립니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#f0f9ff" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        👉 실천: 숨이 가빠질 때 억지로 들이마시지 말고 "길게 내쉬는 것"에만 집중하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef2f2" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">인지 대화</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💬</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">
        2. 인지 재구조화 자기 확신 대화 ("죽지 않는다, 지나간다")
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • "이건 위험한 게 아니라 뇌의 가짜 경보다. 10분 뒤면 반드시 가라앉는다"고 되뇝니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 공황발작의 정점(피크)은 10분이며, 신체 에너지가 고갈되어 20~30분 내에 저절로 끝납니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fff1f2" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        👉 실천: 스마트폰 메모장에 안심 문구를 적어두고 발작 조짐 시 소리 내어 읽으세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 520)">
      <rect x="0" y="0" width="960" height="235" rx="22" fill="#ffffff" filter="url(#shadow5)" />
      <rect x="25" y="25" width="100" height="185" rx="16" fill="#fef3c7" />
      <text x="75" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#92400e" text-anchor="middle">응급 혈자리</text>
      <text x="75" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🖐️</text>
      
      <text x="150" y="65" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#92400e">
        3. 가슴 정중앙 '전중혈(膻中穴)' &amp; 손목 '내관혈' 지압
      </text>
      <text x="150" y="105" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 양 젖가슴 사이 정중앙(전중혈)을 손바닥으로 둥글게 문지르며 막힌 가슴 기운을 풉니다.
      </text>
      <text x="150" y="137" font-family="${fontFamilies}" font-size="17" fill="#475569">
        • 손목 안쪽 4~5cm 위 내관혈을 지그시 눌러 심장 박동을 안정시키고 오심을 가라앉힙니다.
      </text>
      <rect x="150" y="162" width="780" height="36" rx="6" fill="#fffbeb" />
      <text x="165" y="186" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b45309">
        👉 실천: 답답함이 느껴질 때마다 전중혈을 마사지하며 길게 한숨을 쉬듯 내뱉으세요.
      </text>
    </g>
  </g>

  <!-- Bottom Message Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      🌸 "공황발작은 반드시 지나가며, 훈련을 통해 완전히 다스릴 수 있습니다."
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
  console.log('Generating Incheon Neuropsychiatry Panic Disorder blog cards...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 panic disorder cards successfully generated!');
}

main().catch(console.error);
