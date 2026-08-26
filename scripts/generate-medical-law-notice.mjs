import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

function generateMedicalNoticeSvg(width = 1200, height = 540) {
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#021c1a" flood-opacity="0.08" />
    </filter>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e3a34" />
      <stop offset="100%" stop-color="#2F5D50" />
    </linearGradient>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8faf9" />
      <stop offset="100%" stop-color="#f1f5f3" />
    </linearGradient>
  </defs>

  <!-- Outer Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Main Notice Card -->
  <g transform="translate(40, 35)">
    <rect x="0" y="0" width="1120" height="470" rx="24" fill="#ffffff" stroke="#d5e2dc" stroke-width="2" filter="url(#cardShadow)" />
    
    <!-- Top Header Bar -->
    <rect x="0" y="0" width="1120" height="74" rx="24" fill="url(#headerGrad)" />
    <!-- Fix bottom corners of top header bar -->
    <rect x="0" y="50" width="1120" height="24" fill="url(#headerGrad)" />

    <!-- Top Badge & Title -->
    <g transform="translate(36, 20)">
      <!-- Medical Cross Icon -->
      <circle cx="18" cy="17" r="16" fill="#ffffff" fill-opacity="0.15" />
      <rect x="15" y="7" width="6" height="20" rx="3" fill="#68d391" />
      <rect x="8" y="14" width="20" height="6" rx="3" fill="#68d391" />

      <text x="48" y="24" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" letter-spacing="0.5">
        의료법 제56조 제1항 준수 안내 고지
      </text>
    </g>

    <!-- Subtag Pill on Right -->
    <g transform="translate(860, 18)">
      <rect x="0" y="0" width="220" height="38" rx="19" fill="#ffffff" fill-opacity="0.18" />
      <text x="110" y="25" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">
        의료 정보 제공 목적
      </text>
    </g>

    <!-- Content Area -->
    <g transform="translate(40, 110)">
      <!-- Item 1: 목적 고지 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="1040" height="105" rx="14" fill="#f8faf9" stroke="#e2ece7" stroke-width="1.2" />
        
        <rect x="20" y="20" width="34" height="34" rx="8" fill="#2F5D50" />
        <text x="37" y="44" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="68" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e3a34">
          원내 의료진 직접 작성 및 정보 제공
        </text>
        <text x="68" y="68" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#4a5568">
          본 포스팅은 의료법 제56조 1항을 준수하여, 환자분들의 올바른 의학 정보 습득과 건강 관리를 돕기 위해
        </text>
        <text x="68" y="90" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2F5D50">
          [해아림한의원 인천부평점]에서 의료 정보 제공 목적으로 직접 작성하였습니다.
        </text>
      </g>

      <!-- Item 2: 부작용 및 진료 유의사항 고지 -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="1040" height="135" rx="14" fill="#fffaf0" stroke="#feebc8" stroke-width="1.2" />
        
        <rect x="20" y="20" width="34" height="34" rx="8" fill="#dd6b20" />
        <text x="37" y="44" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
        
        <text x="68" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#9c4221">
          개인별 치료 효과 및 부작용 발생 유의사항
        </text>
        <text x="68" y="68" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#744210">
          모든 한방 치료 및 시술은 환자 개개인의 체질, 건강 상태, 발병 기간에 따라 치료 효과의 차이가 있을 수 있으며,
        </text>
        <text x="68" y="92" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#744210">
          체질에 따라 소화장애, 알레르기, 멍, 가려움 등의 부작용이 발생할 수 있으므로
        </text>
        <text x="68" y="116" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#c05621">
          반드시 담당 한의사와 충분한 1:1 상담 및 진찰을 거친 후 치료를 결정하시기 바랍니다.
        </text>
      </g>

      <!-- Footer Info -->
      <g transform="translate(0, 275)">
        <line x1="0" y1="0" x2="1040" y2="0" stroke="#e2ece7" stroke-width="1.5" stroke-dasharray="6 4" />
        <text x="520" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#52665e" text-anchor="middle">
          해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의 직접 진료)
        </text>
      </g>
    </g>
  </g>
</svg>
  `;
}

async function run() {
  const dirs = [
    'c:/Users/PC/Downloads/home/static/blog-images',
    'c:/Users/PC/Downloads/home/static/blog-images/bucheon-insomnia'
  ];

  dirs.forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  const svg = generateMedicalNoticeSvg(1200, 540);
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });

  const pngBuffer = resvg.render().asPng();

  // Save to both locations
  fs.writeFileSync('c:/Users/PC/Downloads/home/static/blog-images/00_medical_law_notice.png', pngBuffer);
  fs.writeFileSync('c:/Users/PC/Downloads/home/static/blog-images/bucheon-insomnia/00_medical_law_notice.png', pngBuffer);

  console.log(`✅ 생성 완료: 00_medical_law_notice.png (${pngBuffer.length} bytes)`);
}

run().catch(console.error);
