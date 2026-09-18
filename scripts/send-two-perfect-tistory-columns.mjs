import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const staticDir = path.join(rootDir, 'static', 'blog-images');

if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const fontFamilies = "'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Pretendard', sans-serif";

/**
 * 1080x1080 전용 1:1 완벽 맞춤형 카드 썸네일 SVG 생성 함수 (무결점 벡터 그래픽 & 완벽 폰트 렌더링)
 */
function createExactCardThumbnailSvg({
  badge = '자율신경 · 실신 & 어지럼증 클리닉',
  hook = '지하철·엘리베이터에서 눈앞이 캄캄해지고 식은땀이 날 때',
  title = '미주신경성 실신 · 뇌 혈류 저하 한방 치료',
  subTitle = '뇌로 가는 혈류를 지키고 무너진 자율신경 반사를 회복하는 1:1 맞춤 치료',
  point1 = { title: 'POINT 01. 기전 분석', desc1: '미주신경 과항진 & 급격한 혈압 저하', desc2: '뇌 혈류 일시 차단 허혈 기전' },
  point2 = { title: 'POINT 02. 감별 진단', desc1: '미주신경성 실신 vs 공황발작 비교', desc2: '식은땀·시야암전·하품 전조 체크' },
  point3 = { title: 'POINT 03. 한방 치료', desc1: '익기승양(益氣升陽) 탕약 & SGB 약침', desc2: '자율신경 조절 자생력 복원' },
  point4 = { title: 'POINT 04. 응급 대처', desc1: '하체 꼬기 텐싱 & 풍지혈 지압', desc2: '약선차 배제 실전 행동 루틴' },
  colorTheme = 'teal' // 'teal' | 'indigo'
}) {
  const bgGradStart = colorTheme === 'teal' ? '#072421' : '#111827';
  const bgGradMid = colorTheme === 'teal' ? '#0d3832' : '#1e1b4b';
  const bgGradEnd = colorTheme === 'teal' ? '#051917' : '#0f172a';

  const badgeGradStart = colorTheme === 'teal' ? '#0d9488' : '#6366f1';
  const badgeGradEnd = colorTheme === 'teal' ? '#059669' : '#4f46e5';

  const hookColor = colorTheme === 'teal' ? '#0f766e' : '#4338ca';
  const hookBg = colorTheme === 'teal' ? '#f0fdf4' : '#eef2ff';
  const hookBorder = colorTheme === 'teal' ? '#dcfce7' : '#e0e7ff';
  
  const titleColor = colorTheme === 'teal' ? '#0f2922' : '#0f172a';
  const subTitleColor = colorTheme === 'teal' ? '#2d6a59' : '#334155';
  
  const iconCircleBg = colorTheme === 'teal' ? '#e0f2ed' : '#e0e7ff';
  const iconCircleText = colorTheme === 'teal' ? '#0f766e' : '#4338ca';
  const highlightPoint = colorTheme === 'teal' ? '#0d9488' : '#4f46e5';

  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgGradStart}" />
      <stop offset="50%" stop-color="${bgGradMid}" />
      <stop offset="100%" stop-color="${bgGradEnd}" />
    </linearGradient>
    <linearGradient id="badgeGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${badgeGradStart}" />
      <stop offset="100%" stop-color="${badgeGradEnd}" />
    </linearGradient>
  </defs>

  <!-- 배경 그라데이션 -->
  <rect width="1080" height="1080" fill="url(#bgGradient)" />

  <!-- 상단 카테고리 뱃지 -->
  <g transform="translate(540, 68)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGradient)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${escapeXml(badge)}</text>
  </g>

  <!-- 메인 화이트 카드 컨테이너 -->
  <g transform="translate(55, 140)">
    <rect x="0" y="0" width="970" height="880" rx="32" fill="#ffffff" filter="url(#cardShadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- 서브타이틀 공감 훅 -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="720" height="42" rx="10" fill="${hookBg}" stroke="${hookBorder}" stroke-width="1.5" />
      <text x="24" y="27" font-family="${fontFamilies}" font-size="18.5" font-weight="bold" fill="${hookColor}">
        ${escapeXml(hook)}
      </text>
    </g>

    <!-- 메인 타이틀 -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="${titleColor}" letter-spacing="-1.5">
      ${escapeXml(title)}
    </text>
    
    <!-- 부제목 설명 -->
    <text x="55" y="194" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="${subTitleColor}" letter-spacing="-0.5">
      ${escapeXml(subTitle)}
    </text>

    <!-- 4대 핵심 포인트 2x2 그리드 -->
    <g transform="translate(55, 235)">
      <!-- Point 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="${iconCircleBg}" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="${iconCircleText}" text-anchor="middle">01</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">${escapeXml(point1.title)}</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">${escapeXml(point1.desc1)}</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="${highlightPoint}">${escapeXml(point1.desc2)}</text>
      </g>

      <!-- Point 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="${iconCircleBg}" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="${iconCircleText}" text-anchor="middle">02</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">${escapeXml(point2.title)}</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">${escapeXml(point2.desc1)}</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="${highlightPoint}">${escapeXml(point2.desc2)}</text>
      </g>

      <!-- Point 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="${iconCircleBg}" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="${iconCircleText}" text-anchor="middle">03</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">${escapeXml(point3.title)}</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">${escapeXml(point3.desc1)}</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="${highlightPoint}">${escapeXml(point3.desc2)}</text>
      </g>

      <!-- Point 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="122" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="61" r="26" fill="${iconCircleBg}" />
        <text x="50" y="69" font-family="${fontFamilies}" font-size="18" font-weight="900" fill="${iconCircleText}" text-anchor="middle">04</text>
        <text x="92" y="47" font-family="${fontFamilies}" font-size="17.5" font-weight="bold" fill="#0f2922">${escapeXml(point4.title)}</text>
        <text x="92" y="75" font-family="${fontFamilies}" font-size="14" font-weight="500" fill="#4a5f57">${escapeXml(point4.desc1)}</text>
        <text x="92" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="${highlightPoint}">${escapeXml(point4.desc2)}</text>
      </g>
    </g>

    <!-- 하단 진료정보 및 한의원 푸터 바 -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="280" rx="20" fill="#f0f6f3" stroke="#d1e3da" stroke-width="1.5" />
      
      <!-- 원장 프로필 박스 -->
      <g transform="translate(35, 30)">
        <circle cx="35" cy="35" r="32" fill="#2F5D50" />
        <text x="35" y="43" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">權</text>
        <text x="85" y="32" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1E4638">해아림한의원 인천부평점 · 대표원장 권형근</text>
        <text x="85" y="58" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#4E6159">한방침구과 전문의 직접 진료 ｜ 1:1 맞춤 신경계 자생력 회복</text>
      </g>

      <!-- 위치 및 진료시간 -->
      <g transform="translate(35, 125)">
        <rect x="0" y="0" width="790" height="120" rx="14" fill="#ffffff" stroke="#e2eae5" />
        <text x="25" y="38" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 오시는 길 ]</text>
        <text x="135" y="38" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</text>
        
        <text x="25" y="72" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 진료 시간 ]</text>
        <text x="135" y="72" font-family="${fontFamilies}" font-size="15" font-weight="600" fill="#334155">월 · 수 · 금 20시 야간진료 ｜ 화 19시 ｜ 토 15시</text>

        <text x="25" y="102" font-family="${fontFamilies}" font-size="15.5" font-weight="bold" fill="#2F5D50">[ 예약 문의 ]</text>
        <text x="135" y="102" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">032-719-3472 ｜ 네이버 예약 &amp; 카카오톡 1:1 상담 가능</text>
      </g>
    </g>
  </g>
</svg>
  `;
}

/**
 * SVG를 고해상도 PNG 파일로 렌더링
 */
function renderSvgToPng(svgString, outputPath) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  return pngBuffer;
}

/**
 * 2개의 완전 신규 티스토리 칼럼 데이터
 */
const newArticles = [
  // ==========================================
  // ARTICLE 1: 미주신경성 실신 (포맷 C: 감별 진단 & 비교 분석형)
  // ==========================================
  {
    slug: 'vasovagal-syncope-differential-guide',
    category: '자율신경 & 실신·어지럼증·이명',
    formatName: '[포맷 C] 감별 진단 & 비교 분석형',
    titles: {
      p1: '[인천 부평 미주신경성 실신] 지하철에서 눈앞이 캄캄해지고 털썩 쓰러질 때, 공황발작과 감별법 및 한방 치료',
      p2: '서 있거나 피곤하면 핑 돌고 털썩? [부평 미주신경성 실신 한의원] 뇌 혈류 저하와 자율신경 회복법 ⭐',
      p3: '검사엔 이상 없는데 왜 갑자기 기절할까? 미주신경성 실신의 자율신경 기전과 예방법'
    },
    tags: ['미주신경성실신', '부평실신한의원', '기립성저혈압', '어지럼증', '공황발작감별', '자율신경실조증', '해아림한의원'],
    thumbnailMeta: {
      badge: '자율신경 · 실신 & 어지럼증 클리닉',
      hook: '지하철·엘리베이터에서 눈앞이 캄캄해지고 식은땀이 날 때',
      title: '미주신경성 실신 · 뇌 혈류 저하 한방 치료',
      subTitle: '뇌로 가는 혈류를 지키고 무너진 자율신경 반사를 회복하는 1:1 맞춤 치료',
      point1: { title: 'POINT 01. 기전 분석', desc1: '미주신경 과항진 & 급격한 혈압 저하', desc2: '뇌 혈류 일시 차단 허혈 기전' },
      point2: { title: 'POINT 02. 감별 진단', desc1: '미주신경성 실신 vs 공황발작 비교', desc2: '식은땀·시야암전·하품 전조 체크' },
      point3: { title: 'POINT 03. 한방 치료', desc1: '익기승양(益氣升陽) 탕약 & SGB 약침', desc2: '자율신경 조절 자생력 복원' },
      point4: { title: 'POINT 04. 응급 대처', desc1: '하체 꼬기 텐싱 & 풍지혈 지압', desc2: '뇌 혈류 공급 즉각 회복 루틴' },
      colorTheme: 'teal'
    },
    cleanScriptText: `> "출퇴근 만원 지하철에서 서 있는데 갑자기 속이 메스껍고 식은땀이 나더니 눈앞이 하얘지면서 바닥에 털썩 주저앉았습니다."
> "피를 뽑거나 치과 치료를 받을 때, 혹은 화장실에서 대변을 볼 때 핑 돌며 기절할 뻔한 적이 몇 번 있어요."
> "신경과와 심장내과에서 뇌파, 심전도, 뇌 MRI 검사를 다 해봐도 '이상 없음'이라는데 언제 또 쓰러질지 몰라 외출이 너무 불안합니다."

안녕하세요. 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.

진료실에서 실신 환자분들을 상담할 때 가장 흔히 마주하는 고민은, 병원 검사상 심장이나 뇌에 아무런 기질적 이상이 없음에도 불구하고 지하철, 백화점, 사우나, 화장실 등 일상적인 공간에서 반복적으로 정신을 잃거나 주저앉는 경험 때문에 극심한 불안을 겪으시는 경우입니다.

이러한 급격한 의식 소실과 아찔함은 심각한 뇌 질환이나 심장병이 아니라, 자율신경계의 조절 이상으로 뇌로 가는 혈류가 순간적으로 뚝 떨어져 발생하는 '미주신경성 실신(Vasovagal Syncope)'인 경우가 대부분입니다.

특히 공황발작이나 단순 어지럼증과 증상이 비슷하여 잘못 대처하기 쉬우므로, 정확한 원인 기전과 감별 진단이 무엇보다 중요합니다.

─────────────────
■ 01. 미주신경성 실신은 왜 일어날까? (자율신경 브레이크의 과작동)
─────────────────
우리 몸의 자율신경계는 혈관을 수축시켜 혈압을 유지하는 '교감신경'과, 심장을 천천히 뛰게 하고 몸을 이완시키는 '부교감신경(미주신경)'이 시소처럼 균형을 이룹니다.

장시간 서 있거나 극심한 피로, 스트레스, 통증, 밀폐된 공간의 더운 공기에 노출되면, 하지(다리)로 피가 쏠리면서 심장으로 돌아오는 혈액량이 줄어듭니다.
이때 우리 몸의 자율신경계가 과민하게 반응하여 순간적으로 '미주신경(브레이크)'을 너무 세게 밟아버립니다.

그 결과 심장 박동수가 급격히 느려지고(서맥), 말초 혈관이 비정상적으로 확장되면서 혈압이 뚝 떨어집니다. 이로 인해 뇌로 올라가는 산소와 혈류 공급이 수초간 차단되면서 뇌가 '비상 전원 끄기(강제 셧다운)' 모드에 들어가 의식을 잃고 쓰러지는 것입니다.

─────────────────
■ 02. [핵심 비교표] 미주신경성 실신 vs 공황발작 완벽 감별 가이드
─────────────────
두 질환 모두 가슴 답답함과 어지럼, 공포감을 동반하지만, 자율신경의 작동 방향과 신체 변화는 정반대입니다:

[구분 항목]
• 미주신경성 실신 (자율신경 실조)
  - 핵심 발생 기전 : 부교감신경(미주신경) 과항진으로 인한 혈압·맥박 급격 저하
  - 심장 박동 양상 : 맥박이 급격히 느려짐 (서맥)
  - 안면 및 체온 변화 : 얼굴이 창백해지고 차가운 식은땀이 비 오듯 쏟아짐
  - 주요 시각 증상 : 시야가 좁아지거나(터널 시야) 하얗게/까맣게 암전됨
  - 자세 변화 영향 : 누우면 뇌 혈류가 즉시 복원되어 수분 내 의식 회복
  - 주된 발생 상황 : 만원 대중교통, 장시간 기립, 피 뽑을 때, 배변 중

• 공황장애 / 공황발작 (뇌신경 과각성)
  - 핵심 발생 기전 : 교감신경의 폭발적 항진으로 인한 가짜 위험 경보
  - 심장 박동 양상 : 심장이 터질 듯 쿵쾅거림 (빈맥, 120회 이상)
  - 안면 및 체온 변화 : 상체와 얼굴로 열이 치솟고 질식할 것 같은 공포
  - 주요 시각 증상 : 시야 흐림, 주변이 비현실적으로 느껴짐(이인증)
  - 자세 변화 영향 : 누워도 발작이 20~30분간 지속되며 과호흡 발생
  - 주된 발생 상황 : 터널, 비행기, 엘리베이터 등 갇힌 공간

─────────────────
■ 03. 쓰러지기 직전 나타나는 4대 전조증상 (골든타임 1분)
─────────────────
미주신경성 실신은 아무런 경고 없이 쓰러지는 심인성 실신과 달리, 의식을 잃기 30초~1분 전에 뚜렷한 전조증상이 나타납니다:
1. 잦은 하품과 함께 목이 마르고 메스꺼움(오심)이 올라옴
2. 얼굴에서 핏기가 싹 가시며 이마와 손발에 차가운 식은땀이 흐름
3. 귀가 먹먹해지면서 소리가 아득하게 멀리서 들림
4. 눈앞이 깜깜해지며(Blackout) 다리에 힘이 풀려 주저앉게 됨

이 전조증상이 느껴지는 순간 서 있으려고 버티지 말고 즉시 자리에 쪼그려 앉거나 바닥에 누워 다리를 높여야 실신으로 인한 2차 머리 외상을 방지할 수 있습니다.

─────────────────
■ 04. 해아림한의원 인천부평점 1:1 맞춤 자율신경 회복 솔루션
─────────────────
해아림한의원에서는 뇌와 심장의 자율신경 반사 루프를 정상화하여 쓰러지지 않는 몸의 자생력을 구축합니다:

• 익기승양(益氣升陽) & 청열안신 맞춤 탕약:
  - 뇌로 기혈을 힘차게 끌어올리고 심장의 기운을 돋우는 청정 규격 한약 처방 (사역산, 보중익기탕, 영계출감탕, 온담탕 가감방).
  - 혈관 탄력성을 강화하고 하지 정맥에 피가 고이지 않도록 혈류 순환을 촉진합니다.
• SGB 성상신경절 약침 & 경혈 자극:
  - 목 앞쪽 성상신경절 부위와 백회혈, 풍지혈, 족삼리혈을 정밀 자극하여 과민해진 미주신경의 피드백 장애를 즉각 리셋.
• 두개천골 추나요법 (CST):
  - 후두골과 상부 경추(C1-C2)를 부드럽게 교정하여 뇌척수액 순환로를 확보하고 뇌간의 미주신경 주행로 압박을 해소.
• NeuronFlex 뇌파 바이오피드백 & HRV 훈련:
  - 스트레스 상황에서도 교감-부교감신경이 급격히 무너지지 않도록 자율신경 항상성 훈련을 병행.

─────────────────
■ 05. ❓ 진료실 자주 묻는 질문 (FAQ 미주신경성 실신 3선)
─────────────────
Q1. 실신할 때 혀를 깨물거나 뇌세포가 손상되지는 않나요?
답변: 뇌전증(간질)과 달리 미주신경성 실신은 뇌세포 손상이나 발작 후유증을 남기지 않습니다. 누워서 뇌 혈류가 돌아오면 금방 깨어납니다. 다만 넘어지면서 머리나 얼굴을 부딪히는 2차 외상이 위험하므로 전조증상 발생 시 즉시 자세를 낮추는 것이 가장 중요합니다.

Q2. 병원에서는 '물을 많이 마시고 짜게 먹으라'고만 하는데, 한방 치료로 완치될 수 있나요?
답변: 수분과 염분 섭취는 혈액량을 늘리는 보조요법입니다. 근본적인 원인은 혈관 긴장도를 조절하는 자율신경 중추의 피로와 심장 기혈의 부족에 있습니다. 한방 치료를 통해 자율신경의 조절 탄력성을 복원하면 장시간 서 있거나 스트레스를 받아도 혈압이 급락하지 않는 튼튼한 체질로 개선됩니다.

Q3. 실신 전조증상이 느껴질 때 바로 할 수 있는 응급 물리 대처법이 있나요?
답변: 네, '하체 크로스 텐싱(Physical Counter-pressure Maneuver)'을 실행하세요. 양 다리를 X자로 꼬고 허벅지와 종아리, 엉덩이 근육에 힘을 꽉 주면 다리에 쏠려 있던 혈액 300~500ml가 심장과 뇌로 즉시 펌핑되어 실신을 효과적으로 차단할 수 있습니다.

─────────────────
■ 06. 오늘부터 실천하는 뇌 혈류 강화 생활 루틴 3가지
─────────────────
1. 기상 직후 '발목 펌프 & 종아리 스트레칭': 아침에 일어나기 전 누운 상태에서 발끝을 당겼다 펴는 동작을 20회 반복하여 하지 정맥 혈류를 깨워줍니다.
2. 미온수 500ml와 천일염 한 꼬집 섭취: 아침 공복에 마시는 미온수는 순환 혈액량을 늘려 기립 시 혈압 강하를 예방합니다.
3. 취침 90분 전 40도 온수 족욕 15분: 말초 혈관을 이완시키고 자율신경의 일주기 리듬을 안정시켜 수면 중 뇌 혈류 회복을 돕습니다.

─────────────────
👨‍⚕️ 권형근 대표원장의 진료실 조언:
"검사상 이상이 없다는 것은 혈관과 신경의 물리적 손상이 없다는 기쁜 소식입니다. 자율신경의 오작동된 브레이크를 바로잡아주면 다시는 지하철이나 일상 속에서 쓰러질까 두려워할 필요가 없습니다."`
  },

  // ==========================================
  // ARTICLE 2: 예기불안 & 범불안장애 (포맷 B: 오해와 진실 & 팩트체크형)
  // ==========================================
  {
    slug: 'anticipatory-anxiety-factcheck-guide',
    category: '공황 · 불안 & 강박증',
    formatName: '[포맷 B] 오해와 진실 & 팩트체크형',
    titles: {
      p1: '[인천 부평 불안장애] "또 그러면 어쩌지?" 일상을 갉아먹는 예기불안과 범불안장애 한방 극복법',
      p2: '아직 일어나지 않은 일에 심장이 쿵쾅? [부평 불안장애 한의원] 예기불안의 뇌신경 기전과 팩트체크 ⭐',
      p3: '걱정의 꼬리를 무는 예기불안, 의지의 문제가 아닌 "편도체 과각성"을 다스리는 1:1 맞춤 치료'
    },
    tags: ['예기불안', '불안장애', '부평불안장애한의원', '범불안장애', '공황장애치료', '편도체과각성', '해아림한의원'],
    thumbnailMeta: {
      badge: '공황 · 불안 & 신경정신과 클리닉',
      hook: '"또 발작이 오면 어쩌지?" 꼬리를 무는 통제 불능의 두려움',
      title: '예기불안 · 범불안장애 한방 심신안정 치료',
      subTitle: '과열된 편도체 알람을 끄고 자율신경계 평정을 되찾는 1:1 맞춤 솔루션',
      point1: { title: 'POINT 01. 기전 분석', desc1: '편도체 과각성 & 위험 예측 오류', desc2: '스마트폰 백그라운드 앱 과열 비유' },
      point2: { title: 'POINT 02. 팩트체크', desc1: '마음의 나약함 vs 뇌 신경전달 불균형', desc2: '항불안제 의존 탈피 진실 확인' },
      point3: { title: 'POINT 03. 한방 치료', desc1: '청뇌안신(淸腦安神) 한약 & 약침', desc2: '뇌 신경 조절 자생력 복원' },
      point4: { title: 'POINT 04. 감각 접지', desc1: '5-4-3-2-1 그라운딩 & 4-7-8 호흡', desc2: '자율신경 즉각 이완 행동 루틴' },
      colorTheme: 'indigo'
    },
    cleanScriptText: `> "내일 중요한 미팅이 있는데 '갑자기 공황발작이 오면 어쩌지?'라는 생각에 전날 밤부터 심장이 터질 듯 뛰고 잠을 한숨도 못 잡니다."
> "지하철이나 엘리베이터를 탈 때마다 '문이 닫히고 갇혀서 숨이 막히면 어쩌나' 하는 두려움 때문에 약속 장소에 가기조차 힘듭니다."
> "주변에서는 '마음을 편하게 먹어라', '쓸데없는 걱정 좀 그만하라'고 하지만 제 의지로는 이 공포와 불안의 생각을 도저히 멈출 수가 없습니다."

안녕하세요. 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.

진료실에서 불안장애와 공황장애 환자분들을 뵐 때 가장 마음이 아픈 순간은, 과거에 겪었던 단 한 번의 공황발작이나 극심한 신체 증상 때문에 "또 발작이 오면 어쩌지?", "사람들 앞에서 쓰러지면 어쩌지?"라는 공포에 사로잡혀 일상생활의 반경이 점점 좁아지는 분들을 만날 때입니다.

아직 일어나지도 않은 최악의 상황을 끊임없이 상상하며 심장을 쿵쾅거리게 만드는 이 증상을 의학적으로 '예기불안(Anticipatory Anxiety)'이라고 부릅니다.

예기불안은 성격이 소심하거나 의지가 약해서 생기는 병이 결코 아닙니다. 잘못된 오해를 과학적으로 바로잡고 뇌 속 과열된 경보장치를 꺼주어야만 불안의 사슬을 끊어낼 수 있습니다.

─────────────────
■ 01. 뇌과학으로 푸는 예기불안 기전: 스마트폰 백그라운드 앱 100개가 켜진 상태
─────────────────
우리 뇌의 변연계에는 공포와 위험을 감지하는 화재경보기인 '편도체(Amygdala)'와, 기억을 저장하는 '해마(Hippocampus)'가 있습니다.

과거에 지하철이나 시험장 등에서 숨이 막히거나 극심한 불안을 겪었던 경험이 해마에 트라우마로 각인되면, 편도체는 위험이 전혀 없는 안전한 일상에서도 "여기는 위험해! 곧 발작이 올 거야!"라며 24시간 가짜 비상 사이렌을 울려댑니다.

마치 스마트폰의 백그라운드에 무거운 앱 100개가 동시에 켜져 있어 기기가 뜨겁게 달아오르고 배터리가 순식간에 닳아버리는 것과 같습니다.
몸은 쉬고 싶어도 뇌가 끊임없이 위험을 방어하느라 과부하가 걸려 있으니 심장이 두근거리고, 근육이 굳으며, 불면증과 만성 피로가 끊이지 않는 것입니다.

─────────────────
■ 02. [오해와 진실] 예기불안 & 불안장애 3대 팩트체크
─────────────────
진료실에서 환자분들이 가장 많이 질문하시는 3가지 잘못된 상식을 팩트체크합니다:

[팩트체크 01]
• ❌ 오해 (MYTH) : "불안은 마음을 강하게 먹고 의지로 참아내면 극복할 수 있다?"
• ⭕ 진실 (FACT) : 불안은 의지의 문제가 아니라 뇌 속 신경전달물질(GABA, 세로토닌, 노르에피네프린)의 불균형과 편도체 과각성으로 인한 신경생리학적 기능 이상입니다. 의지로 억누르려 할수록 편도체는 더 큰 위협으로 인지하여 불안이 폭발(반동 불안)하게 됩니다.

[팩트체크 02]
• ❌ 오해 (MYTH) : "항불안제(신경안정제)를 계속 먹어야만 일상생활이 가능하다?"
• ⭕ 진실 (FACT) : 신경안정제는 급성기 불안을 화학적으로 억제하는 응급 소화기일 뿐, 뇌 스스로 불안을 조절하는 자생력을 만들어주지 못합니다. 장기 복용 시 내성과 의존성이 생길 수 있으므로, 한방 치료로 뇌 신경망의 자생력을 키우며 서서히 테이퍼링(감량)하는 것이 근본 치료입니다.

[팩트체크 03]
• ❌ 오해 (MYTH) : "불안이 극에 달하면 미쳐버리거나 심장마비로 사망할 수 있다?"
• ⭕ 진실 (FACT) : 예기불안으로 아무리 심장이 빨리 뛰고 숨이 가빠져도 신체는 자율신경 보호 기전에 의해 일정 시간 후 반드시 정상으로 돌아옵니다. 예기불안으로 인해 뇌 손상이 오거나 심장이 멎는 일은 의학적으로 절대 일어나지 않습니다.

─────────────────
■ 03. 한의학적 병리 진단: 심담허겁(心膽虛怯)과 간기울결(肝氣鬱結)
─────────────────
한의학에서는 예기불안과 범불안장애를 다음과 같은 체질적 병리로 분석합니다:
• 심담허겁(心膽虛怯): 심장과 쓸개의 기운이 허약해져 사소한 자극이나 소리에도 가슴이 철렁 내려앉고 혼자 있는 것을 두려워하는 유형 (가미온담탕, 안신보심환 처방)
• 간기울결(肝氣鬱結) 및 간화상충: 억압된 스트레스와 완벽주의 성향으로 간의 기운이 뭉쳐 상체로 열이 뻗치고 사소한 일에도 안절부절못하는 유형 (시호가용골모려탕, 시호청간탕 처방)
• 심비양허(心脾兩虛): 만성적인 소화불량과 무기력증이 동반되며 꼬리에 꼬리를 무는 잡생각으로 밤마다 잠을 못 이루는 유형 (가미귀비탕 처방)

─────────────────
■ 04. 해아림한의원 인천부평점 1:1 맞춤 불안 해소 솔루션
─────────────────
해아림한의원에서는 과열된 뇌 알람을 끄고 편안한 자생력을 길러주는 1:1 맞춤 프로그램을 진행합니다:

• 청뇌안신(淸腦安神) 맞춤 탕약:
  - 뇌 신경세포의 과흥분을 가라앉히고 자연스러운 억제성 신경전달물질(GABA)의 분비를 유도하는 청정 규격 한약 처방.
  - 심장의 허열을 내리고 기혈을 보강하여 가슴 두근거림과 조바심을 다스립니다.
• SGB 성상신경절 약침 & 경혈 자극:
  - 전중혈(가슴 정중앙), 내관혈(손목 안쪽), 신문혈 자극으로 과항진된 교감신경을 즉각 이완하고 가슴 답답함을 해소.
• NeuronFlex 뉴로피드백 훈련:
  - 실시간 두뇌 훈련을 통해 과도하게 치솟는 고베타파(불안 뇌파)를 억제하고 안정적인 SMR파와 알파파를 강화.
• 상부경추 추나요법 (FCST):
  - 거북목과 턱관절의 틀어짐을 교정하여 뇌척수액 순환과 미주신경 소통을 원활하게 유도.

─────────────────
■ 05. ❓ 진료실 자주 묻는 질문 (FAQ 예기불안 3선)
─────────────────
Q1. 정신과 신경안정제를 복용 중인데 한방 치료를 병행하면서 끊을 수 있나요?
답변: 네, 안전하게 병행 가능합니다. 복용 중인 양약을 갑자기 중단하면 극심한 금단 불안이 나타날 수 있으므로, 초기에는 한방 치료와 병행하여 뇌 신경망이 스스로 안정을 찾도록 유도한 뒤 주치의와 상의하여 단계적으로 안전하게 감량(Tapering)을 진행합니다.

Q2. 중요한 시험이나 발표, 미팅 직전에 불안이 엄습할 때 즉각 마음을 가라앉히는 비법이 있나요?
답변: '5-4-3-2-1 감각 그라운딩(Grounding)' 기법을 사용하세요.
눈에 보이는 것 5가지 ➔ 만질 수 있는 촉감 4가지 ➔ 들리는 소리 3가지 ➔ 맡을 수 있는 냄새 2가지 ➔ 입안의 맛 1가지에 차례로 집중하면, 미래의 불안에 갇혀 있던 뇌의 전두엽이 즉시 '현재의 감각'으로 돌아오며 편도체 알람이 꺼집니다.

Q3. 치료 기간은 보통 얼마나 걸리나요?
답변: 대개 1~2개월 차에는 가슴 두근거림, 식은땀, 소화불량 등 신체적 긴장이 현저히 줄어들고, 3~4개월 차에는 과거에 회피하던 장소(지하철, 터널, 엘리베이터)에 불안 없이 편안하게 머무를 수 있는 뇌 자생력이 완성됩니다.

─────────────────
■ 06. 오늘부터 실천하는 두뇌 이완 골든 루틴 3가지
─────────────────
1. 4-7-8 이완 복식호흡: 4초간 코로 숨을 들이마시고, 7초간 숨을 멈춘 뒤, 8초간 입으로 길게 내쉬는 호흡을 하루 3회(1회당 4세트) 실천하여 부교감신경을 능동적으로 활성화합니다.
2. 기상 직후 15분 햇볕 산책: 아침 햇살을 쬐면 뇌에서 천연 항불안 물질인 세로토닌이 분비되어 주간의 불안도를 낮추고 야간 수면의 질을 높여줍니다.
3. 후두하근(목 뒤 풍지혈) 15분 온찜질: 긴장으로 딱딱하게 굳은 목 뒤 근육을 따뜻하게 풀어주면 뇌로 가는 혈류가 개선되어 불안 증상이 진정됩니다.

─────────────────
👨‍⚕️ 권형근 대표원장의 진료실 조언:
"불안은 여러분이 나약해서 생기는 감정이 아니라, 지친 뇌가 쉬어가자고 보내는 간절한 신호입니다. 뇌 신경망의 균형을 되찾으면 편안하고 당당한 일상으로 반드시 돌아갈 수 있습니다."`
  }
];

/**
 * 전송 메인 실행 루틴
 */
async function run() {
  console.log(`🚀 [One-Stop Protocol] 2개 신규 칼럼 1:1 완벽 맞춤 카드 썸네일 재생성 및 텔레그램 전송 시작...\n`);

  for (let i = 0; i < newArticles.length; i++) {
    const article = newArticles[i];
    console.log(`[${i + 1}/${newArticles.length}] 처리 중: ${article.slug}`);

    // 1. 1080x1080 1:1 맞춤형 고해상도 카드 썸네일 SVG 생성 및 렌더링
    const svg = createExactCardThumbnailSvg(article.thumbnailMeta);
    const pngFileName = `01_${article.slug}_main_thumbnail.png`;
    const pngFilePath = path.join(staticDir, pngFileName);
    const pngBuffer = renderSvgToPng(svg, pngFilePath);
    console.log(`   ✅ 1080x1080 1:1 완벽 맞춤 썸네일 이미지 생성 완료: ${pngFileName}`);

    // Base64 인코딩
    const base64Thumbnail = `data:image/png;base64,${pngBuffer.toString('base64')}`;

    // 2. 완벽한 티스토리 46번 규격 프리미엄 HTML 조립
    const bookingUrl = 'https://booking.naver.com/booking/13/bizes/934695';
    const kakaoUrl = 'https://pf.kakao.com/_Tcxcxoxj';
    const columnUrl = `https://healimbp.com/column/${article.slug}/`;

    // HTML 본문 생성 (마크다운 파싱)
    const formattedHtmlSections = article.cleanScriptText
      .split(/(?=■\s+)/)
      .map(sec => {
        sec = sec.trim();
        if (sec.startsWith('■')) {
          const lines = sec.split('\n');
          const header = lines[0].replace(/^■\s*/, '').trim();
          const body = lines.slice(1).join('\n').trim();

          let bodyHtml = body
            .replace(/\n\n/g, '</p><p style="margin-bottom: 14px; line-height: 1.85; color: #374151;">')
            .replace(/\n/g, '<br>');

          return `
  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">
    ${header}
  </h3>
  <div style="font-size: 15.5px; line-height: 1.85; color: #374151; word-break: keep-all; font-style: normal;">
    <p style="margin-bottom: 14px; line-height: 1.85; color: #374151;">${bodyHtml}</p>
  </div>`;
        } else {
          // 인트로 문단
          let introHtml = sec
            .replace(/^>\s*"(.*?)"/gm, '<div style="background-color: #F8FAF9; border-left: 4px solid #2F5D50; border-radius: 0 12px 12px 0; padding: 14px 20px; margin-bottom: 12px; color: #2C3E35; font-size: 15px; line-height: 1.8; font-style: normal;">“$1”</div>')
            .replace(/\n\n/g, '</p><p style="margin-bottom: 14px; line-height: 1.85; color: #374151;">')
            .replace(/\n/g, '<br>');

          return `
  <div style="font-size: 15.5px; line-height: 1.85; color: #374151; word-break: keep-all; font-style: normal;">
    <p style="margin-bottom: 14px; line-height: 1.85; color: #374151;">${introHtml}</p>
  </div>`;
        }
      })
      .join('\n');

    const fullTistoryHtml = `
<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.85; color: #333333; max-width: 780px; margin: 0 auto; padding: 10px 0; font-style: normal;">
  
  <!-- 대표 썸네일 이미지 (오프라인 100% 임베디드 Base64 & 카카오/다음 썸네일 완벽 연동) -->
  <div style="text-align: center; margin: 0 0 28px 0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <img src="${base64Thumbnail}" alt="${escapeXml(article.titles.p2)} - 해아림한의원 인천부평점" style="width: 100%; max-width: 780px; height: auto; display: block; border-radius: 16px; margin: 0 auto; object-fit: cover;" />
  </div>

  <!-- 상단 공식 안내 헤더 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 20px 24px; border-radius: 12px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(47,93,80,0.05); font-style: normal;">
    <p style="margin: 0; font-size: 16.5px; color: #2F5D50; font-weight: 800; letter-spacing: -0.01em; font-style: normal;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 의학 칼럼
    </p>
    <p style="margin: 8px 0 0 0; font-size: 14px; color: #556B62; line-height: 1.6; font-style: normal;">
      자율신경실조증 · 미주신경성 실신 · 공황장애 · 예기불안 · 불면증 · 우울증 한방 신경정신과 클리닉
    </p>
  </div>

  <!-- 본문 컨텐츠 -->
${formattedHtmlSections}

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 44px 0 32px 0;" />

  <!-- 원장 소개 및 한의원 진료 안내 카드 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E7E5E4; border-radius: 16px; padding: 26px 28px; margin-top: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); font-style: normal;">
    <h4 style="margin: 0 0 14px 0; color: #1E4638; font-size: 18px; font-weight: 800; font-style: normal;">
      🏥 해아림한의원 인천부평점 진료 안내
    </h4>
    <ul style="margin: 0 0 20px 0; padding-left: 20px; font-size: 14.5px; color: #4B5563; line-height: 1.9; font-style: normal;">
      <li style="margin-bottom: 6px;"><strong>대표원장:</strong> 권형근 (한방침구과 전문의 직접 진료)</li>
      <li style="margin-bottom: 6px;"><strong>오시는 길:</strong> 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</li>
      <li style="margin-bottom: 6px;"><strong>상담 및 예약:</strong> 032-719-3472</li>
      <li style="margin-bottom: 6px;"><strong>진료 시간:</strong> 월·수·금 10:00 ~ 20:00 (야간진료) / 화 10:00 ~ 19:00 / 토 09:00 ~ 15:00</li>
    </ul>

    <!-- 3대 CTA 바로가기 버튼 그룹 -->
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
      <a href="${bookingUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #03C75A; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(3,199,90,0.2); font-style: normal;">
        📅 네이버 간편 진료예약
      </a>
      <a href="${kakaoUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #FEE500; color: #191919; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.08); font-style: normal;">
        💬 카카오톡 1:1 비밀상담
      </a>
      <a href="${columnUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #2F5D50; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(47,93,80,0.2); font-style: normal;">
        🌐 공식 사이트 칼럼 보기
      </a>
    </div>
  </div>
</div>
`;

    // 3. 텔레그램 발송 (3단계)
    try {
      // Step 1: Send Photo with Rich Caption
      const photoCaption = `🖼️ <b>[대표 썸네일 1:1 완벽 일치] #${i + 1}</b>\n\n` +
        `📝 <b>추천 제목:</b> <code>${escapeHtml(article.titles.p2)}</code>\n` +
        `📂 <b>분류:</b> ${escapeHtml(article.category)}\n` +
        `🏛️ <b>전개 포맷:</b> ${escapeHtml(article.formatName)}\n` +
        `🏷️ <b>태그:</b> <code>${escapeHtml(article.tags.map(t => `#${t}`).join(' '))}</code>`;

      const photoFormData = new FormData();
      photoFormData.append('chat_id', chatId);
      photoFormData.append('caption', photoCaption);
      photoFormData.append('parse_mode', 'HTML');
      const photoBlob = new Blob([pngBuffer], { type: 'image/png' });
      photoFormData.append('photo', photoBlob, pngFileName);

      const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: 'POST',
        body: photoFormData
      });
      const photoJson = await photoRes.json();
      if (!photoJson.ok) throw new Error(`Photo send failed: ${JSON.stringify(photoJson)}`);
      console.log(`   ✅ 1단계: 1:1 매칭 대표 썸네일 고화질 사진 전송 완료!`);

      await new Promise(r => setTimeout(r, 1000));

      // Step 2: Send Full Clean Copy Text Script (No ** bold markers)
      const copyMsg = `📋 <b>[티스토리/네이버 블로그 원클릭 복사용 대본] #${i + 1}</b>
<i>※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 3종 세트]</b>
1️⃣ <b>맨앞 지역명형:</b>
<code>${escapeHtml(article.titles.p1)}</code>

2️⃣ <b>중간 지역명형 (추천 ⭐):</b>
<code>${escapeHtml(article.titles.p2)}</code>

3️⃣ <b>순수 질환/의학형:</b>
<code>${escapeHtml(article.titles.p3)}</code>

─────────────────
${escapeHtml(article.cleanScriptText)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 진료 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의 직접 진료)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 야간진료: 월 · 수 · 금 저녁 8시까지
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}

🏷️ <b>[추천 태그]</b>
<code>${escapeHtml(article.tags.map(t => `#${t}`).join(' '))}</code>`;

      const MAX_LEN = 3800;
      if (copyMsg.length <= MAX_LEN) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
        });
      } else {
        const part1 = copyMsg.slice(0, MAX_LEN);
        const part2 = copyMsg.slice(MAX_LEN);
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: part1, parse_mode: 'HTML', disable_web_page_preview: true })
        });
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: part2, parse_mode: 'HTML', disable_web_page_preview: true })
        });
      }
      console.log(`   ✅ 2단계: 깔끔한 원클릭 복사용 대본 메시지 전송 완료!`);

      await new Promise(r => setTimeout(r, 1000));

      // Step 3: Send Tistory HTML Document File
      const docFormData = new FormData();
      docFormData.append('chat_id', chatId);
      docFormData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일 #${i + 1}]</b>\n파일을 열어 전체 복사(Ctrl+A ➔ Ctrl+C) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 상단 맞춤 썸네일과 모든 박스/비교표 서식이 100% 완벽하게 적용됩니다.`);
      docFormData.append('parse_mode', 'HTML');
      const docBlob = new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' });
      docFormData.append('document', docBlob, `tistory_${article.slug}.html`);

      const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: docFormData
      });
      const docJson = await docRes.json();
      if (!docJson.ok) throw new Error(`Document send failed: ${JSON.stringify(docJson)}`);
      console.log(`   ✅ 3단계: 썸네일 내장 완결형 티스토리 HTML 파일 전송 완료!`);

      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.error(`   ❌ 전송 중 오류 발생 (${article.slug}):`, err);
    }
  }

  console.log(`\n🎉 2개 신규 칼럼의 1:1 완벽 맞춤 썸네일 및 대본 전송이 성공적으로 완료되었습니다!`);
}

run().catch(err => {
  console.error('Fatal Error:', err);
});
