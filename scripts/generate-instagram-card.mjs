import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// 1. 타겟 지역 풀
const REGION_POOLS = [
  { short: '인천 부평', full: '부평구(부평동, 산곡동, 삼산동, 부개동)' },
  { short: '구월동', full: '남동구 구월동 및 간석동' },
  { short: '부천 상동', full: '부천시 상동 및 중동' },
  { short: '청라', full: '인천 서구 청라국제도시 및 루원시티' },
  { short: '송도', full: '인천 연수구 송도국제도시' },
  { short: '시흥 배곧', full: '시흥시 배곧신도시 및 정왕동' },
  { short: '계양구', full: '계양구(계산동, 작전동)' },
  { short: '김포 검단', full: '김포시 및 인천 검단구' }
];

// 2. 질환별 카드뉴스 데이터베이스
const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안장애',
    tag: '공황장애 / 자율신경',
    themeColor: '#0284c7', // Sky Blue
    accentColor: '#38bdf8',
    badgeBg: '#0369a1',
    hookTitle: '갑자기 숨이 턱 막히고\n심장이 터질 것 같나요?',
    subtitle: '단순 스트레스가 아닌 뇌신경계 과흥분 신호입니다',
    checkItems: [
      '엘리베이터나 대중교통 이용 시 식은땀과 답답함',
      '이유 없이 심장이 쿵쾅거리고 어지러움 발생',
      '또 발작이 올까 봐 외출하기 두려운 예기불안',
      '응급실 검사상 심장과 폐에는 이상이 없다는 진단'
    ],
    cause1: {
      title: '편도체 과흥분 및 자율신경 불균형',
      desc: '뇌의 불안 스위치인 편도체가 지나치게 민감해져 교감신경을 급격히 항진시킵니다.'
    },
    cause2: {
      title: '심담허겁(心膽虛怯) 체질적 요인',
      desc: '심장과 담의 기운이 약해져 사소한 자극에도 쉽게 놀라고 불안이 만성화됩니다.'
    },
    solutions: [
      { num: '01', title: '1:1 맞춤 뇌안정 한약', desc: '과열된 편도체 진정 및 심담 기운 보강' },
      { num: '02', title: '자율신경 조절 침구', desc: '교감신경 이완 및 전신 혈액순환 촉진' },
      { num: '03', title: '두뇌 훈련 (뉴로피드백)', desc: '스스로 불안 뇌파를 조절하는 두뇌 훈련' },
      { num: '04', title: '응급 호흡 및 이완 코칭', desc: '예기불안 전조증상 시 신속 대처법 지도' }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    tag: '불면증 / 수면유지장애',
    themeColor: '#7c3aed', // Violet
    accentColor: '#a78bfa',
    badgeBg: '#6d28d9',
    hookTitle: '새벽 2~3시만 되면\n자다 깨서 뒤척이시나요?',
    subtitle: '수면제 의존 없이 스스로 잠드는 자생 리듬을 회복해야 합니다',
    checkItems: [
      '잠자리에 눕고 30분 이상 뒤척이는 입면장애',
      '새벽에 2~3번씩 깨어나 다시 잠들기 어려움',
      '자고 일어나도 개운하지 않고 온몸이 무거움',
      '낮 동안 극심한 뇌피로와 두통, 집중력 저하'
    ],
    cause1: {
      title: '뇌 과각성 상태 및 허열(虛熱)',
      desc: '수면 중에도 뇌의 각성 스위치가 꺼지지 않고 간과 심장에 허열이 뜬 상태입니다.'
    },
    cause2: {
      title: '심비양허(心脾兩虛) 및 멜라토닌 저하',
      desc: '기혈이 쇠약해져 깊은 델타파 숙면 리듬이 깨지고 얕은 잠만 반복됩니다.'
    },
    solutions: [
      { num: '01', title: '자생 수면 리듬 한약', desc: '내성 없이 자연 수면을 유도하는 맞춤 처방' },
      { num: '02', title: '상열감 해소 침구 치료', desc: '머리로 쏠린 열감을 내리고 뇌파 안정' },
      { num: '03', title: '자율신경 밸런스 케어', desc: '부교감신경을 활성화하여 전신 이완 유도' },
      { num: '04', title: '1:1 맞춤 수면위생 코칭', desc: '체질별 맞춤 수면 루틴 및 환경 가이드' }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 · 만성피로',
    tag: '자율신경실조증 / 만성피로',
    themeColor: '#059669', // Emerald
    accentColor: '#34d399',
    badgeBg: '#047857',
    hookTitle: '검사해도 이상 없다는데\n온몸이 아프고 무기력한가요?',
    subtitle: '신경계의 컨트롤 타워, 자율신경계 밸런스가 무너진 신호입니다',
    checkItems: [
      '만성 소화불량, 명치 답답함, 잦은 가스와 트림',
      '앉았다 일어날 때 핑 도는 기립성 어지럼증',
      '손발이 차거나 긴장 시 식은땀이 과도하게 분비',
      '충분히 쉬어도 풀리지 않는 극심한 피로와 무기력'
    ],
    cause1: {
      title: '교감신경 과항진 및 부교감 저하',
      desc: '신체가 24시간 비상 긴장 상태로 유지되어 장기 조절 기능이 소진되었습니다.'
    },
    cause2: {
      title: '기체증(氣滯證) 및 신경 대사 저하',
      desc: '기혈 순환이 정체되어 오장육부 신경 전달과 에너지 대사가 저하된 상태입니다.'
    },
    solutions: [
      { num: '01', title: '자율신경 청뇌단·한약', desc: '자율신경 중추 안정 및 활력 에너지 충전' },
      { num: '02', title: '경추·흉추 교정 및 약침', desc: '자율신경절이 지나는 척추 신경 압박 해소' },
      { num: '03', title: '뇌파·체열·간이정신진단 검사', desc: '두뇌 활성도와 체열 불균형을 과학적으로 분석' },
      { num: '04', title: '부교감 활성 호흡 요법', desc: '일상에서 밸런스를 되찾는 맞춤 코칭' }
    ]
  },
  {
    id: 'tic',
    name: '소아 틱장애 · ADHD',
    tag: '소아 틱장애 / 주의집중',
    themeColor: '#d97706', // Amber
    accentColor: '#fbbf24',
    badgeBg: '#b45309',
    hookTitle: '아이의 잦은 눈 깜빡임,\n단순한 버릇이 아닐 수 있습니다',
    subtitle: '뇌 기저핵의 미성숙으로 인한 조절 장애, 조기 치료가 관건입니다',
    checkItems: [
      '눈 깜빡임, 코 찡긋, 고개 까딱임 등 불수의적 움직임',
      '음음, 킁킁, 헛기침 소리를 반복하는 음성 틱',
      '새 학기, 스트레스, 긴장 시 증상이 더욱 심해짐',
      '가만히 있지 못하고 산만하며 충동적인 행동'
    ],
    cause1: {
      title: '뇌 기저핵(Basal Ganglia) 미성숙',
      desc: '불필요한 근육 신호를 걸러내는 기저핵의 필터 조절 기능이 약해진 상태입니다.'
    },
    cause2: {
      title: '간양상항(肝陽上亢) 및 신경 과민',
      desc: '체내 열기와 신경 과민으로 인해 근육과 두뇌에 과도한 긴장이 발생합니다.'
    },
    solutions: [
      { num: '01', title: '소아 순한 맞춤 총명 한약', desc: '기저핵 성장 촉진 및 신경계 안정' },
      { num: '02', title: '무통(無痛) 스티커 침구', desc: '아프지 않은 두피 및 경혈 이완 요법' },
      { num: '03', title: '시지각·두뇌 통합 훈련', desc: '주의집중력과 충동 억제 뇌 네트워크 강화' },
      { num: '04', title: '부모 양육 스트레스 코칭', desc: '가정 내 올바른 반응과 환경 개선 가이드' }
    ]
  },
  {
    id: 'stress',
    name: '화병 · 우울 · 번아웃',
    tag: '화병 / 울화증 / 번아웃',
    themeColor: '#e11d48', // Rose
    accentColor: '#fb7185',
    badgeBg: '#be123c',
    hookTitle: '가슴이 답답하고 목에 뭔가\n걸린 듯 꽉 막혀있나요?',
    subtitle: '참아온 스트레스가 몸으로 표출되는 화병(火病)과 신체화 증상입니다',
    checkItems: [
      '가슴 한가운데가 뻐근하고 답답해서 한숨을 자주 쉼',
      '목에 이물감이 걸려 뱉어도 안 나오는 매핵기 증상',
      '얼굴로 열이 확 오르고 사소한 일에도 짜증과 분노',
      '만사 의욕이 없고 무기력하며 번아웃된 느낌'
    ],
    cause1: {
      title: '간기울결(肝氣鬱結) 및 울화(鬱火)',
      desc: '억압된 감정 스트레스가 기운을 뭉치게 하여 흉부와 목 부위에 열을 만듭니다.'
    },
    cause2: {
      title: '세로토닌 및 뇌 에너지 고갈',
      desc: '만성 스트레스로 인해 신경전달물질이 소진되어 전신 통증으로 전환됩니다.'
    },
    solutions: [
      { num: '01', title: '해울화담(解鬱化痰) 한약', desc: '뭉친 기운을 풀고 가슴 속 울화와 열감 해소' },
      { num: '02', title: '가슴 소통 침구 치료', desc: '흉골 전중혈 자극으로 답답함 즉각 완화' },
      { num: '03', title: '사향공진단·건뇌단 처방', desc: '지친 뇌 에너지를 신속하게 재충전' },
      { num: '04', title: '마음 이완 & 자율신경 코칭', desc: '감정 다스리기와 스트레스 저항력 향상' }
    ]
  }
];

const FONT_FAMILY = "'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans CJK KR', 'Noto Sans KR', sans-serif";

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTextToLines(str, maxChars = 24) {
  if (!str) return [];
  const rawLines = str.split('\n');
  const result = [];
  for (const rLine of rawLines) {
    const words = rLine.split(' ');
    let current = '';
    for (const w of words) {
      if ((current + ' ' + w).trim().length > maxChars) {
        if (current) result.push(current.trim());
        current = w;
      } else {
        current = (current + ' ' + w).trim();
      }
    }
    if (current) result.push(current.trim());
  }
  return result;
}

function renderTextLines(text, x, startY, lineHeight, fontSize, fill, fontWeight = 'normal', anchor = 'start', maxChars = 24) {
  const lines = wrapTextToLines(text, maxChars);
  return lines.map((line, idx) => {
    const curY = startY + (idx * lineHeight);
    return `<tspan x="${x}" y="${curY}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${fill}" text-anchor="${anchor}">${escapeXml(line)}</tspan>`;
  }).join('');
}

// 1080x1080 SVG 슬라이드 템플릿
function generateSlideSvg(slideNum, data) {
  const { cat, region } = data;
  const width = 1080;
  const height = 1080;

  const commonHeader = `
    <!-- Background Gradient -->
    <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bgGrad)" />
    <!-- Ambient Glow Effects -->
    <circle cx="950" cy="120" r="380" fill="${cat.themeColor}" opacity="0.18" filter="url(#blurEffect)" />
    <circle cx="100" cy="950" r="320" fill="${cat.themeColor}" opacity="0.12" filter="url(#blurEffect)" />

    <!-- Top Header Bar -->
    <g transform="translate(60, 55)">
      <rect x="0" y="0" width="960" height="66" rx="33" fill="rgba(255, 255, 255, 0.07)" stroke="rgba(255, 255, 255, 0.14)" stroke-width="1.5" />
      <circle cx="40" cy="33" r="18" fill="${cat.themeColor}" />
      <text x="40" y="40" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">H</text>
      <text x="75" y="41" font-size="22" font-weight="700" fill="#ffffff" font-family="${FONT_FAMILY}">해아림한의원 인천부평점</text>
      <rect x="850" y="15" width="85" height="36" rx="18" fill="rgba(255, 255, 255, 0.12)" />
      <text x="892" y="40" font-size="17" font-weight="700" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">${slideNum} / 5</text>
    </g>
  `;

  const commonFooter = `
    <!-- Bottom Footer Bar -->
    <g transform="translate(60, 970)">
      <line x1="0" y1="0" x2="960" y2="0" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
      <text x="0" y="38" font-size="19" font-weight="600" fill="#94a3b8" font-family="${FONT_FAMILY}">
        부평대로 24 (부평역 5번 출구) ｜ 032-506-1075
      </text>
      <text x="960" y="38" font-size="19" font-weight="700" fill="${cat.accentColor}" text-anchor="end" font-family="${FONT_FAMILY}">
        ${slideNum < 5 ? '옆으로 넘겨보기 ▶' : '피드 저장 &amp; 공유하기 ★'}
      </text>
    </g>
  `;

  let contentSvg = '';

  if (slideNum === 1) {
    // -------------------------------------------------------------
    // SLIDE 1: 표지 (Cover)
    // -------------------------------------------------------------
    contentSvg = `
      <!-- Category Badge -->
      <g transform="translate(60, 170)">
        <rect x="0" y="0" width="300" height="50" rx="25" fill="${cat.badgeBg}" />
        <text x="150" y="32" font-size="21" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">
          ${escapeXml(cat.tag)}
        </text>
      </g>

      <!-- Main Hook Title -->
      <g transform="translate(60, 280)">
        <text font-family="${FONT_FAMILY}">
          ${renderTextLines(cat.hookTitle, 0, 0, 72, 54, '#ffffff', '800', 'start', 18)}
        </text>
      </g>

      <!-- Subtitle Card -->
      <g transform="translate(60, 500)">
        <rect x="0" y="0" width="960" height="110" rx="22" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.14)" stroke-width="1.5" />
        <rect x="35" y="30" width="48" height="48" rx="24" fill="${cat.themeColor}" fill-opacity="0.3" />
        <text x="59" y="60" font-size="22" font-weight="900" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">TIP</text>
        <text x="105" y="65" font-size="23" font-weight="600" fill="#e2e8f0" font-family="${FONT_FAMILY}">
          ${escapeXml(cat.subtitle)}
        </text>
      </g>

      <!-- 3 Key Topic Pillars -->
      <g transform="translate(60, 650)">
        <!-- Box 1 -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="300" height="245" rx="24" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.5" />
          <rect x="25" y="25" width="60" height="32" rx="16" fill="${cat.badgeBg}" />
          <text x="55" y="47" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">01</text>
          <text x="100" y="49" font-size="22" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">자가진단</text>
          <text font-family="${FONT_FAMILY}">
            ${renderTextLines('내 증상이 질환인지\n30초 만에 체크하기', 25, 115, 34, 20, '#94a3b8', '500', 'start', 13)}
          </text>
        </g>

        <!-- Box 2 -->
        <g transform="translate(330, 0)">
          <rect x="0" y="0" width="300" height="245" rx="24" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.5" />
          <rect x="25" y="25" width="60" height="32" rx="16" fill="${cat.badgeBg}" />
          <text x="55" y="47" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">02</text>
          <text x="100" y="49" font-size="22" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">원인 분석</text>
          <text font-family="${FONT_FAMILY}">
            ${renderTextLines('자율신경과 뇌신경\n핵심 발병 기전 이해', 25, 115, 34, 20, '#94a3b8', '500', 'start', 13)}
          </text>
        </g>

        <!-- Box 3 -->
        <g transform="translate(660, 0)">
          <rect x="0" y="0" width="300" height="245" rx="24" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.5" />
          <rect x="25" y="25" width="60" height="32" rx="16" fill="${cat.badgeBg}" />
          <text x="55" y="47" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">03</text>
          <text x="100" y="49" font-size="22" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">맞춤 치료</text>
          <text font-family="${FONT_FAMILY}">
            ${renderTextLines('내성 없는 1:1\n한의학 솔루션 확인', 25, 115, 34, 20, '#94a3b8', '500', 'start', 13)}
          </text>
        </g>
      </g>
    `;
  } else if (slideNum === 2) {
    // -------------------------------------------------------------
    // SLIDE 2: 자가진단 체크리스트 (Checklist)
    // -------------------------------------------------------------
    contentSvg = `
      <g transform="translate(60, 160)">
        <text x="0" y="0" font-size="20" font-weight="800" fill="${cat.accentColor}" letter-spacing="2" font-family="${FONT_FAMILY}">STEP 01 ｜ SYMPTOMS CHECK</text>
        <text x="0" y="55" font-size="44" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">혹시 이런 증상 겪고 계신가요?</text>
        <text x="0" y="105" font-size="22" font-weight="500" fill="#94a3b8" font-family="${FONT_FAMILY}">아래 항목 중 2개 이상 해당된다면 초기 진단이 필요합니다.</text>
      </g>

      <g transform="translate(60, 310)">
        ${cat.checkItems.map((item, idx) => `
          <g transform="translate(0, ${idx * 135})">
            <rect x="0" y="0" width="960" height="110" rx="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />
            <circle cx="55" cy="55" r="26" fill="${cat.themeColor}" fill-opacity="0.3" />
            <text x="55" y="64" font-size="24" font-weight="900" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">V</text>
            <text x="110" y="64" font-size="24" font-weight="700" fill="#f8fafc" font-family="${FONT_FAMILY}">
              ${escapeXml(item)}
            </text>
          </g>
        `).join('')}
      </g>

      <!-- Warning Banner -->
      <g transform="translate(60, 870)">
        <rect x="0" y="0" width="960" height="70" rx="16" fill="rgba(239, 68, 68, 0.18)" stroke="rgba(239, 68, 68, 0.35)" stroke-width="1.5" />
        <text x="480" y="43" font-size="20" font-weight="700" fill="#fca5a5" text-anchor="middle" font-family="${FONT_FAMILY}">
          [주의] 증상이 만성화되면 자율신경계 피로와 뇌기능 저하로 이어질 수 있습니다
        </text>
      </g>
    `;
  } else if (slideNum === 3) {
    // -------------------------------------------------------------
    // SLIDE 3: 원인 분석 (Root Cause)
    // -------------------------------------------------------------
    contentSvg = `
      <g transform="translate(60, 160)">
        <text x="0" y="0" font-size="20" font-weight="800" fill="${cat.accentColor}" letter-spacing="2" font-family="${FONT_FAMILY}">STEP 02 ｜ ROOT CAUSE</text>
        <text x="0" y="55" font-size="44" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">왜 이런 증상이 나타날까요?</text>
        <text x="0" y="105" font-size="22" font-weight="500" fill="#94a3b8" font-family="${FONT_FAMILY}">단순한 심리 문제가 아닌 신경계 신호 체계의 이상입니다.</text>
      </g>

      <g transform="translate(60, 310)">
        <!-- Cause Box 1 -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="960" height="250" rx="24" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.6" />
          <rect x="40" y="35" width="100" height="38" rx="19" fill="${cat.badgeBg}" />
          <text x="90" y="60" font-size="17" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">원인 01</text>
          
          <text x="160" y="62" font-size="27" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">
            ${escapeXml(cat.cause1.title)}
          </text>
          
          <text font-family="${FONT_FAMILY}">
            ${renderTextLines(cat.cause1.desc, 40, 130, 38, 22, '#cbd5e1', '500', 'start', 34)}
          </text>
        </g>

        <!-- Cause Box 2 -->
        <g transform="translate(0, 280)">
          <rect x="0" y="0" width="960" height="250" rx="24" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.6" />
          <rect x="40" y="35" width="100" height="38" rx="19" fill="${cat.badgeBg}" />
          <text x="90" y="60" font-size="17" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">원인 02</text>
          
          <text x="160" y="62" font-size="27" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">
            ${escapeXml(cat.cause2.title)}
          </text>
          
          <text font-family="${FONT_FAMILY}">
            ${renderTextLines(cat.cause2.desc, 40, 130, 38, 22, '#cbd5e1', '500', 'start', 34)}
          </text>
        </g>
      </g>

      <!-- Key Insight -->
      <g transform="translate(60, 870)">
        <rect x="0" y="0" width="960" height="70" rx="16" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
        <text x="480" y="43" font-size="20" font-weight="700" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">
          핵심 ｜ 증상 억제가 아닌 "자율신경계와 뇌기능의 스스로 조절력"을 키워야 합니다
        </text>
      </g>
    `;
  } else if (slideNum === 4) {
    // -------------------------------------------------------------
    // SLIDE 4: 치료 솔루션 (Treatment & Solution)
    // -------------------------------------------------------------
    contentSvg = `
      <g transform="translate(60, 160)">
        <text x="0" y="0" font-size="20" font-weight="800" fill="${cat.accentColor}" letter-spacing="2" font-family="${FONT_FAMILY}">STEP 03 ｜ TREATMENT</text>
        <text x="0" y="55" font-size="44" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">해아림 1:1 맞춤 치료 솔루션</text>
        <text x="0" y="105" font-size="22" font-weight="500" fill="#94a3b8" font-family="${FONT_FAMILY}">신경계 회복력과 오장육부 밸런스를 동시에 되찾아 드립니다.</text>
      </g>

      <g transform="translate(60, 300)">
        <!-- 4 Grid Solution Cards -->
        ${cat.solutions.map((sol, idx) => {
          const row = Math.floor(idx / 2);
          const col = idx % 2;
          const posX = col * 495;
          const posY = row * 260;
          return `
            <g transform="translate(${posX}, ${posY})">
              <rect x="0" y="0" width="465" height="235" rx="22" fill="rgba(15, 23, 42, 0.88)" stroke="${cat.themeColor}" stroke-width="1.5" stroke-opacity="0.55" />
              <circle cx="50" cy="50" r="22" fill="${cat.badgeBg}" />
              <text x="50" y="57" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">${sol.num}</text>
              <text x="88" y="58" font-size="22" font-weight="700" fill="#ffffff" font-family="${FONT_FAMILY}">${escapeXml(sol.title)}</text>
              <text font-family="${FONT_FAMILY}">
                ${renderTextLines(sol.desc, 30, 115, 32, 19, '#cbd5e1', '500', 'start', 17)}
              </text>
            </g>
          `;
        }).join('')}
      </g>

      <!-- Bottom Principle -->
      <g transform="translate(60, 850)">
        <rect x="0" y="0" width="960" height="85" rx="18" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
        <text x="480" y="52" font-size="21" font-weight="700" fill="#fde047" text-anchor="middle" font-family="${FONT_FAMILY}">
          "재발 없는 건강한 일상으로의 복귀를 약속합니다"
        </text>
      </g>
    `;
  } else if (slideNum === 5) {
    // -------------------------------------------------------------
    // SLIDE 5: 원내 소개 & 의료진 (Clinic & Director Profile)
    // -------------------------------------------------------------
    contentSvg = `
      <g transform="translate(60, 160)">
        <text x="0" y="0" font-size="20" font-weight="800" fill="${cat.accentColor}" letter-spacing="2" font-family="${FONT_FAMILY}">ABOUT US ｜ 해아림한의원 인천부평점</text>
        <text x="0" y="55" font-size="44" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">마음과 두뇌 질환, 함께 치유합니다</text>
        <text x="0" y="105" font-size="22" font-weight="500" fill="#94a3b8" font-family="${FONT_FAMILY}">풍부한 임상과 연구를 바탕으로 정성을 다한 1:1 맞춤 진료를 제공합니다.</text>
      </g>

      <!-- Profile & Location Card -->
      <g transform="translate(60, 300)">
        <rect x="0" y="0" width="960" height="520" rx="28" fill="rgba(15, 23, 42, 0.92)" stroke="${cat.themeColor}" stroke-width="2" stroke-opacity="0.6" />
        
        <!-- Doctor Info Header -->
        <g transform="translate(50, 45)">
          <rect x="0" y="0" width="70" height="70" rx="20" fill="${cat.badgeBg}" />
          <text x="35" y="45" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">원장</text>
          <text x="95" y="38" font-size="30" font-weight="800" fill="#ffffff" font-family="${FONT_FAMILY}">권형근 대표원장</text>
          <text x="95" y="72" font-size="20" font-weight="600" fill="${cat.accentColor}" font-family="${FONT_FAMILY}">한의학 박사 ｜ 뇌신경·자율신경 중점 진료</text>
        </g>

        <!-- Divider -->
        <line x1="50" y1="145" x2="910" y2="145" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" />

        <!-- Key Clinic Features -->
        <g transform="translate(50, 175)">
          <!-- Subject -->
          <g transform="translate(0, 0)">
            <rect x="0" y="0" width="120" height="32" rx="16" fill="rgba(255, 255, 255, 0.08)" />
            <text x="60" y="22" font-size="16" font-weight="700" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">주요 진료과목</text>
            <text x="0" y="65" font-size="21" font-weight="600" fill="#f1f5f9" font-family="${FONT_FAMILY}">공황장애 · 불면증 · 자율신경실조증 · 소아틱장애/ADHD · 우울/화병</text>
          </g>

          <!-- Location -->
          <g transform="translate(0, 110)">
            <rect x="0" y="0" width="95" height="32" rx="16" fill="rgba(255, 255, 255, 0.08)" />
            <text x="47" y="22" font-size="16" font-weight="700" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">오시는 길</text>
            <text x="0" y="65" font-size="21" font-weight="600" fill="#f1f5f9" font-family="${FONT_FAMILY}">인천광역시 부평구 부평대로 24 (부평역 5번 출구 인근)</text>
          </g>

          <!-- Contact -->
          <g transform="translate(0, 220)">
            <rect x="0" y="0" width="145" height="32" rx="16" fill="rgba(255, 255, 255, 0.08)" />
            <text x="72" y="22" font-size="16" font-weight="700" fill="${cat.accentColor}" text-anchor="middle" font-family="${FONT_FAMILY}">예약 및 상담 문의</text>
            <text x="0" y="65" font-size="23" font-weight="800" fill="#4ade80" font-family="${FONT_FAMILY}">전화: 032-506-1075 ｜ 카카오톡: @해아림한의원인천부평점</text>
          </g>
        </g>
      </g>

      <!-- Bottom Save Banner -->
      <g transform="translate(60, 850)">
        <rect x="0" y="0" width="960" height="85" rx="18" fill="${cat.badgeBg}" />
        <text x="480" y="52" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle" font-family="${FONT_FAMILY}">
          이 피드를 저장해 두시고 필요할 때 언제든 다시 확인해보세요!
        </text>
      </g>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#05101d" />
        <stop offset="50%" stop-color="#0b1e36" />
        <stop offset="100%" stop-color="#040b14" />
      </linearGradient>
      <filter id="blurEffect" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="120" />
      </filter>
    </defs>

    ${commonHeader}
    ${contentSvg}
    ${commonFooter}
  </svg>`;
}

// 3. 인스타그램 본문 캡션 및 해시태그 생성기
function generateInstagramCaption(cat, region, dateStr) {
  const shortTitle = cat.hookTitle.replace(/\n/g, ' ');
  return `[${region.short} 한의원] ${shortTitle} 🌿

"${cat.subtitle}"

일상 속에서 불쑥 찾아오는 신체적, 심리적 신호들,
혹시 나도 모르게 그냥 참고 넘기고 계시진 않으셨나요?

━━━━━━━━━━━━━━━━━━━
📋 이런 증상이 있다면 체크해보세요!
${cat.checkItems.map(item => `✔ ${item}`).join('\n')}

💡 왜 이런 증상이 생길까요?
1️⃣ ${cat.cause1.title}
: ${cat.cause1.desc}

2️⃣ ${cat.cause2.title}
: ${cat.cause2.desc}

━━━━━━━━━━━━━━━━━━━
🏥 해아림한의원 인천부평점 1:1 솔루션
${cat.solutions.map(s => `🔹 ${s.title} : ${s.desc}`).join('\n')}

마음과 두뇌 신경계의 균형을 되찾아
편안하고 건강한 일상을 다시 누리실 수 있도록
권형근 대표원장이 1:1 맞춤 진료로 함께합니다.

📍 오시는 길 : 인천 부평구 부평대로 24 (부평역 5번 출구 인근)
📞 진료 예약 및 문의 : 032-506-1075
💬 카카오톡 : @해아림한의원인천부평점

#해아림한의원 #해아림한의원인천부평점 #권형근원장
#인천한의원 #${region.short.replace(/\s+/g, '')}한의원 #부평역한의원
#${cat.name.split(' · ')[0]} #${cat.name.split(' · ')[1] || cat.name.split(' · ')[0]}
#자율신경실조증 #불면증치료 #공황장애치료 #소아틱장애 #화병치료
#건강칼럼 #인스타건강정보 #카드뉴스`;
}

// 4. 메인 실행 함수
async function main() {
  const now = new Date();
  const kstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const dayOfYear = Math.floor((kstDate - new Date(kstDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const hour = kstDate.getHours();
  const slot = hour < 12 ? 0 : 1; // 하루 2회 인스타 주기
  const runIndex = (dayOfYear * 2) + slot;

  const cat = CATEGORIES[runIndex % CATEGORIES.length];
  const region = REGION_POOLS[runIndex % REGION_POOLS.length];
  const dateStr = kstDate.toISOString().slice(0, 10);
  const postId = `insta-${dateStr}-${cat.id}-${runIndex}`;

  console.log(`[Instagram Card News] Generating post for: ${cat.name} (${region.short})`);

  const outputDir = path.join(rootDir, 'static', 'instagram', postId);
  fs.mkdirSync(outputDir, { recursive: true });

  const generatedImages = [];

  // 5장의 슬라이드 렌더링
  for (let i = 1; i <= 5; i++) {
    const svgStr = generateSlideSvg(i, { cat, region, dateStr });
    
    // SVG 파일 저장
    const svgPath = path.join(outputDir, `card-${i}.svg`);
    fs.writeFileSync(svgPath, svgStr, 'utf-8');

    // 1080x1080 고화질 PNG 렌더링
    const resvg = new Resvg(svgStr, {
      fitTo: { mode: 'width', value: 1080 },
      font: {
        loadSystemFonts: true,
        defaultFontFamily: 'Malgun Gothic'
      }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    const pngPath = path.join(outputDir, `card-${i}.png`);
    fs.writeFileSync(pngPath, pngBuffer);

    generatedImages.push({
      slide: i,
      pngFile: `card-${i}.png`,
      svgFile: `card-${i}.svg`,
      sizeBytes: pngBuffer.length
    });

    console.log(`  ✓ Rendered Slide ${i}/5: ${pngPath} (${(pngBuffer.length / 1024).toFixed(1)} KB)`);
  }

  // 캡션 및 메타데이터 저장
  const caption = generateInstagramCaption(cat, region, dateStr);
  fs.writeFileSync(path.join(outputDir, 'caption.txt'), caption, 'utf-8');

  const metadata = {
    postId,
    date: dateStr,
    category: cat.name,
    categoryId: cat.id,
    region: region.short,
    slideCount: 5,
    images: generatedImages.map(img => `static/instagram/${postId}/${img.pngFile}`),
    captionSnippet: caption.slice(0, 150) + '...'
  };

  fs.writeFileSync(path.join(outputDir, 'metadata.json'), JSON.stringify(metadata, null, 2), 'utf-8');

  // 최신 포스트 정보 업데이트 (static/instagram/latest.json)
  const latestMetaPath = path.join(rootDir, 'static', 'instagram', 'latest.json');
  fs.writeFileSync(latestMetaPath, JSON.stringify(metadata, null, 2), 'utf-8');

  console.log(`[Instagram Card News] Successfully created 5 cards and caption in: ${outputDir}`);
}

main().catch(err => {
  console.error('[Instagram Card News Error]:', err);
  process.exit(1);
});
