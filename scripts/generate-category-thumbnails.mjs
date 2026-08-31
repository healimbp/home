import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.resolve(__dirname, '..', 'static', 'blog-images');

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

const CATEGORIES_CONFIG = [
  {
    folder: 'depression-somatic',
    badge: '🌿 우울증 · 화병 & 번아웃 클리닉',
    sub: '의욕 저하와 가슴 답답함, 신체화 증상의 악순환',
    mainTitle: '우울증 · 화병 · 번아웃 한방 치료',
    points: [
      { num: '01', title: '뇌 신경망 방전 & 부신 피로', desc: '세로토닌 고갈과 전두엽 기능 저하 정밀 진단' },
      { num: '02', title: '가슴 울화 해소 & 기혈 순환', desc: '전중혈·간기울결을 뚫어주는 소간해울 침구' },
      { num: '03', title: '1:1 맞춤 건뇌단 · 해울 한약', desc: '무기력증을 깨우고 마음의 자생력을 북돋는 처방' }
    ],
    accent: '#B88A3B',
    accentLight: '#F7F0DF'
  },
  {
    folder: 'insomnia-sleep',
    badge: '🌙 불면증 & 수면장애 클리닉',
    sub: '밤마다 잠 못 이루고 새벽에 자주 깨는 고통',
    mainTitle: '불면증 단계별 맞춤 한방 치료법',
    points: [
      { num: '01', title: '과열된 뇌 스위치 & DMN 오작동', desc: '수면 유도 호르몬과 뇌파의 불균형 분석' },
      { num: '02', title: '수면제 의존 없는 자연 수면', desc: '심신(心腎) 조화 및 안면혈 특효 침치료' },
      { num: '03', title: '개운한 아침 맞춤 귀비탕 처방', desc: '수면 유지 장애와 조기 각성을 근본 해결' }
    ],
    accent: '#2F5D50',
    accentLight: '#EAF3EF'
  },
  {
    folder: 'panic-anxiety',
    badge: '⚡ 공황장애 & 불안·강박 클리닉',
    sub: '갑작스러운 숨 막힘, 심장 두근거림과 공포',
    mainTitle: '공황장애 · 불안증 신경 안정 솔루션',
    points: [
      { num: '01', title: '뇌 편도체(공포회로) 과열 진정', desc: '호흡 곤란과 과호흡의 신경학적 기전 교정' },
      { num: '02', title: '미주신경 자극 & 자율신경 안정', desc: '교감신경 항진을 가라앉히는 정밀 침구 치료' },
      { num: '03', title: '심담(心膽) 강화 시호제 맞춤 처방', desc: '예기불안과 발작 재발을 막는 한방 치료' }
    ],
    accent: '#0d9488',
    accentLight: '#e6f7f3'
  },
  {
    folder: 'autonomic-dizziness',
    badge: '🌀 자율신경실조증 & 어지럼증 클리닉',
    sub: '검사상 이상 없는 만성 어지럼증과 자율신경 불균형',
    mainTitle: '자율신경실조증 & 만성 어지럼증 치료',
    points: [
      { num: '01', title: '교감 · 부교감 신경 밸런스 회복', desc: '기립성 저혈압, 식은땀, 가슴 두근거림 완화' },
      { num: '02', title: '상부 경추 정렬 & 뇌혈류 촉진', desc: '경추성 어지럼증 및 이석증 후유증(PPPD) 치료' },
      { num: '03', title: '뇌혈류 순환 촉진 맞춤 한약', desc: '몸의 자생력을 키워 맑은 머리를 되찾는 솔루션' }
    ],
    accent: '#1e3a8a',
    accentLight: '#eff6ff'
  },
  {
    folder: 'tic-adhd',
    badge: '🌱 소아청소년 & 성인 ADHD·틱장애 클리닉',
    sub: '눈 깜빡임, 킁킁거림, 산만함과 충동성',
    mainTitle: 'ADHD · 틱장애 두뇌 훈련 & 한방 치료',
    points: [
      { num: '01', title: '뇌 기저핵 필터 기능 미성숙 개선', desc: '운동 틱 및 음성 틱의 신경학적 진행 예방' },
      { num: '02', title: 'NeuronFlex & IM 감각통합 훈련', desc: '뇌 억제 브레이크를 키우는 첨단 두뇌 훈련' },
      { num: '03', title: '순한 체질 맞춤 억간산 처방', desc: '두뇌 성장과 집중력, 자존감을 함께 회복' }
    ],
    accent: '#059669',
    accentLight: '#ecfdf5'
  }
];

function generateThumbnailSvg(cfg) {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${cfg.accent}" />
      <stop offset="100%" stop-color="#2F5D50" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="52" rx="26" fill="url(#badgeGrad)" />
    <text x="0" y="34" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${cfg.badge.replace(/&/g, '&amp;')}</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="875" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#E2E8F0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="600" height="42" rx="10" fill="${cfg.accentLight}" />
      <text x="20" y="28" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="${cfg.accent}">
        ${cfg.sub.replace(/&/g, '&amp;')}
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      ${cfg.mainTitle.replace(/&/g, '&amp;')}
    </text>

    <!-- Doctor Info Row -->
    <g transform="translate(55, 175)">
      <rect x="0" y="0" width="860" height="70" rx="16" fill="#F8FAFC" stroke="#E2E8F0" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1E293B">
        해아림한의원 인천부평점 · 권형근 대표원장 (한방침구과 전문의)
      </text>
    </g>

    <!-- 3 Key Diagnosis & Treatment Points -->
    ${cfg.points.map((p, idx) => `
    <g transform="translate(55, ${275 + idx * 165})">
      <rect x="0" y="0" width="860" height="142" rx="20" fill="#FAF8F3" stroke="#DDE6E1" stroke-width="1.5" />
      <rect x="25" y="28" width="85" height="85" rx="18" fill="${cfg.accent}" />
      <text x="67" y="80" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#ffffff" text-anchor="middle">${p.num}</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#26332E">
        ${p.title.replace(/&/g, '&amp;')}
      </text>
      <text x="135" y="98" font-family="${fontFamilies}" font-size="19" fill="#53615B" font-weight="500">
        ${p.desc.replace(/&/g, '&amp;')}
      </text>
    </g>
    `).join('')}

    <!-- Bottom Footer Brand Bar -->
    <g transform="translate(55, 790)">
      <rect x="0" y="0" width="860" height="52" rx="14" fill="#2F5D50" />
      <text x="430" y="33" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        📍 인천 부평역 7번 출구 | 야간진료 (월·수·금 20시) | 📞 032-719-3472
      </text>
    </g>
  </g>
</svg>
`;
}

async function run() {
  for (const cfg of CATEGORIES_CONFIG) {
    const dir = path.join(baseDir, cfg.folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const svg = generateThumbnailSvg(cfg);
    const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1080 } });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    const destPath = path.join(dir, '01_naver_main_thumbnail.png');
    fs.writeFileSync(destPath, pngBuffer);
    console.log(`✅ 생성 완료: ${destPath}`);
  }
  console.log('🎉 5대 핵심 클리닉 대표 썸네일 생성 완료!');
}

run();
