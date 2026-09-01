/**
 * HealimBP Daily Q&A Auto-Publisher (Naver Kin-style Real Patient Cases)
 * Usage: node scripts/generate-qa.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const qaDir = path.join(rootDir, 'content', 'qa');

if (!fs.existsSync(qaDir)) {
  fs.mkdirSync(qaDir, { recursive: true });
}

// 1. 지역 풀
const REGION_POOLS = [
  '인천 부평구', '경기 부천시', '인천 서구 청라', '인천 연수구 송도', 
  '인천 남동구 구월동', '경기 시흥시', '인천 계양구', '인천 미추홀구', '인천 서구 검단'
];

// 2. 네이버 지식iN 기반 24대 핵심 질문 마스터 풀 (6개 카테고리별 각 4개 주제)
const QA_MASTER_TOPICS = [
  // 1) 소아청소년 & 성인 ADHD·틱
  {
    category: '소아청소년 & 성인 ADHD·틱',
    categoryKey: 'tic',
    patientRole: '초등학생 학부모',
    titleTpl: '아이가 긴장하면 눈 깜빡임과 헛기침 틱을 하는데 스트레스 때문인가요? ({region})',
    question: '아이가 초등학교에 입학한 후 눈을 심하게 깜빡이고 목에서 켁켁거리는 소리를 냅니다. 혼내면 참으려다 나중에 더 심하게 하는데 어떻게 대처해야 할까요?',
    p1: '틱장애는 기저핵(Basal Ganglia)과 전두엽을 잇는 운동 조절 신경회로의 미성숙이 근본 원인이며, 스트레스와 긴장은 증상을 촉발하고 증폭시키는 방아쇠 역할을 합니다.',
    p2: ['눈을 깜빡이거나 코를 찡긋거린다', '헛기침이나 킁킁거리는 소리를 낸다', '긴장하거나 피로할 때 증상이 심해진다', '지적을 받으면 일시적으로 참다가 폭발한다'],
    p3: ['절대 지적하거나 야단치지 말고 모른 척 넘어가기', '스마트폰과 영상 매체 노출 시간 제한하기', '줄넘기나 수영 등 리듬감 있는 유산소 운동 권장'],
    p4: '해아림한의원 인천부평점은 뇌파 검사 및 기저핵의 흥분을 가라앉히는 맞춤 한약, 무통 소아침, NeuronFlex 훈련으로 두뇌 자생력을 키웁니다.',
    tags: ['소아틱장애', '눈깜빡임', '음성틱', '틱치료']
  },
  {
    category: '소아청소년 & 성인 ADHD·틱',
    categoryKey: 'tic',
    patientRole: '20대 대학원생 / 직장인',
    titleTpl: '물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? ({region})',
    question: '사소한 실수가 잦고 중요한 약속이나 소지품을 자주 잊어버립니다. 집중하려 해도 잡생각이 많아 일을 마감 직전까지 미루는데 게으름인지 성인 ADHD인지 궁금합니다.',
    p1: '성인 ADHD는 의지박약이나 성격의 문제가 아니라 뇌 전두엽의 실행기능(Executive Function)과 도파민 조절 회로의 불균형에서 비롯되는 신경학적 질환입니다.',
    p2: ['일을 마감 직전 벼락치기하기 전까지 시작하기 어렵다', '좋아하는 게임에는 과몰입하나 서류 작업엔 5분도 집중 못한다', '지갑, 열쇠, 휴대폰 등 소지품 분실이 잦다', '상대방 대화에 끝까지 집중하기 어렵다'],
    p3: ['할 일을 15분 단위로 작게 쪼개어 시각화하기', '중요 소지품의 지정된 위치를 정해두기', '집중 전 5분간 호흡 명상으로 뇌 각성도 정돈'],
    p4: '전두엽 혈류를 촉진하는 총명보뇌 맞춤 한약과 뉴로피드백 훈련을 통해 약물 부작용 없이 스스로 주의력을 유지하는 힘을 길러드립니다.',
    tags: ['성인ADHD', '집중력저하', '만성미루기', '전두엽훈련']
  },

  // 2) 불면증 & 수면장애
  {
    category: '불면증 & 수면장애',
    categoryKey: 'insomnia',
    patientRole: '40대 직장인 / 주부',
    titleTpl: '스틸녹스(수면제)를 1년 넘게 먹었는데 한방으로 줄여서 끊을 수 있나요? ({region})',
    question: '수면유도제를 먹지 않으면 가슴이 뛰고 밤을 꼬박 새웁니다. 약에 의존하게 된 것 같아 무서운데 한의원 치료로 양약을 서서히 줄여 끊는 것이 가능한가요?',
    p1: '수면제를 갑자기 끊으면 뇌가 과각성되는 반동성 불면이 발생합니다. 뇌가 스스로 멜라토닌을 분비하고 깊은 델타파를 형성할 수 있도록 돕는 단계적 감약(Tapering)이 필수적입니다.',
    p2: ['수면제 없이는 잠들기 어렵다', '자고 일어나도 개운하지 않고 머리가 무겁다', '새벽 2~3시에 자주 깨어 다시 잠들지 못한다', '낮 동안 멍하고 집중력이 떨어진다'],
    p3: ['정해진 시간에 기상하여 20분간 햇볕 쬐기', '오후 2시 이후 카페인 음료 완전 차단', '취침 1시간 전 스마트폰 사용을 멈추고 복식호흡'],
    p4: '수면 뇌파를 안정시키는 청열안신 맞춤 한약과 경추 약침 요법으로 뇌의 자생력을 키우며 주치의 지도 하에 안전하게 양약을 줄여나갑니다.',
    tags: ['불면증', '수면제감약', '졸피뎀', '수면장애한의원']
  },
  {
    category: '불면증 & 수면장애',
    categoryKey: 'insomnia',
    patientRole: '50대 갱년기 여성',
    titleTpl: '새벽 3~4시만 되면 눈이 번쩍 떠지고 다시 잠들지 못하는데 왜 그럴까요? ({region})',
    question: '잠은 쉽게 드는데 매일 새벽 3시나 4시만 되면 가슴이 두근거리거나 식은땀이 나며 깹니다. 다시 자려고 해도 생각이 꼬리를 물어 뜬눈으로 아침을 맞이합니다.',
    p1: '새벽 중도각성(수면유지장애)은 한의학에서 간열(肝熱)과 심비양허(心脾兩虛)로 봅니다. 갱년기 호르몬 변화와 자율신경 불균형으로 새벽 시간대 교감신경이 비정상적으로 흥분하기 때문입니다.',
    p2: ['자다가 2회 이상 깨어 화장실을 가거나 시계를 본다', '새벽에 깨면 가슴이 답답하거나 열감이 느껴진다', '아침에 일어났을 때 전신 피로감이 극심하다', '낮 동안 감정 기복이 심하고 짜증이 잘 난다'],
    p3: ['새벽에 깨더라도 시계를 확인하지 않기', '침실 온도를 20~22도로 서늘하게 유지하기', '취침 전 따뜻한 대추차나 영지버섯차 마시기'],
    p4: '상열하한 체열 불균형을 교정하는 수승화강 한약과 자율신경 조절 침구 치료로 새벽 시간대 깊은 수면을 유지하도록 만듭니다.',
    tags: ['수면유지장애', '새벽각성', '갱년기불면', '간열치료']
  },

  // 3) 공황 · 불안 & 강박증
  {
    category: '공황 · 불안 & 강박증',
    categoryKey: 'panic',
    patientRole: '30대 직장인',
    titleTpl: '출근길 지하철에서 숨이 턱 막히고 쓰러질 것 같은데 공황장애인가요? ({region})',
    question: '만원 지하철 안에서 갑자기 숨이 안 쉬어지고 심장이 150회 넘게 뛰어 응급실에 갔지만 심장 검사는 정상이라고 합니다. 또 그럴까 봐 대중교통 타기가 두렵습니다.',
    p1: '공황발작은 뇌의 공포 중추인 편도체가 잘못된 비상경보를 울려 교감신경과 과호흡을 촉발하는 현상입니다. 신체적 위험이 아니라 뇌 신경계의 오작동입니다.',
    p2: ['갑작스러운 호흡곤란과 질식감', '심장 두근거림과 흉부 압박감', '손발 저림, 어지럼증, 식은땀', '죽을 것 같거나 미칠 것 같은 극심한 공포'],
    p3: ['4-7-8 복식호흡으로 이산화탄소 농도 안정화', '"이 증상으로 절대 죽지 않는다"는 뇌 신호 인지', '주변 사물 5가지를 소리 내어 관찰하는 그라운딩 기법'],
    p4: '편도체 과열을 내리는 청간안신 한약과 경추 긴장 완화 약침으로 예기불안을 차단하고 일상생활을 빠르게 회복시켜 드립니다.',
    tags: ['공황장애', '공황발작', '과호흡', '예기불안']
  },
  {
    category: '공황 · 불안 & 강박증',
    categoryKey: 'panic',
    patientRole: '20대 취업준비생 / 직장인',
    titleTpl: '발표나 회의 때 목소리와 손이 심하게 떨리는 발표불안증 한방 치료 ({region})',
    question: '회의 때 자기소개를 하거나 발표를 할 때 목소리가 염소처럼 떨리고 머릿속이 하얘집니다. 사람들 시선이 두려워 사회생활이 힘든데 치료할 수 있나요?',
    p1: '발표불안(사회공포증)은 평가받는 상황에서 교감신경이 급격히 과항진되어 성대 및 후두 근육이 경련하고 뇌 혈류가 일시 저하되는 신체 반응입니다.',
    p2: ['남들 앞에서 말할 때 목소리가 떨리거나 갈라진다', '발표 며칠 전부터 불안해 잠을 이루지 못한다', '시선이 집중되면 얼굴이 빨개지고 식은땀이 난다', '마이크를 잡은 손이 덜덜 떨린다'],
    p3: ['발표 전 내쉬는 호흡을 2배 길게 하기', '발바닥이 바닥에 닿는 감각에 의식 집중하기', '청중의 이마나 어깨 너머 벽면으로 시선 분산'],
    p4: '심장의 화를 내리고 담력을 보강하는 온담안신 탕약과 자율신경 조절 두뇌 훈련으로 무대 위 긴장을 편안하게 가라앉힙니다.',
    tags: ['발표불안', '사회공포증', '목소리떨림', '무대공포']
  },

  // 4) 자율신경 & 실신·어지럼증·이명
  {
    category: '자율신경 & 실신·어지럼증·이명',
    categoryKey: 'autonomic',
    patientRole: '30대 직장인 / 여성',
    titleTpl: '귀·뇌 검사는 다 정상인데 머리가 붕 뜨고 어지러운 이유는 무엇인가요? ({region})',
    question: '일어설 때 눈앞이 아찔하고 평소에도 머릿속에 안개가 낀 것처럼 멍합니다(브레인포그). 이비인후과와 신경과 뇌 MRI 검사는 다 정상인데 왜 이럴까요?',
    p1: '귀와 뇌에 구조적 이상이 없더라도, 혈관 수축과 뇌 혈류량을 조절하는 자율신경계에 불균형이 생기면 뇌로 가는 혈액과 산소가 부족해져 만성 어지럼증과 브레인포그가 발생합니다.',
    p2: ['앉았다 일어설 때 핑 돌거나 아찔하다', '머리가 맑지 않고 안개 낀 듯 멍하다', '특별한 이유 없이 가슴이 두근거리거나 답답하다', '손발이 차갑고 소화가 자주 안 된다'],
    p3: ['기립 시 천천히 3단계로 일어나기', '충분한 수분 섭취와 하체 근력 운동', '경추 스트레칭으로 뇌 혈류 통로 이완'],
    p4: '수승화강 탕약으로 상체의 열을 내리고 뇌 혈류를 복원하며, 상부경추 추나요법으로 뇌간 자율신경 중추의 압박을 해소합니다.',
    tags: ['어지럼증', '자율신경실조증', '브레인포그', '기립성어지럼']
  },
  {
    category: '자율신경 & 실신·어지럼증·이명',
    categoryKey: 'autonomic',
    patientRole: '20대 학생 / 여성',
    titleTpl: '지하철이나 더운 곳에 서 있으면 눈앞이 하얘지며 쓰러지는 미주신경성 실신 ({region})',
    question: '피를 보거나 사람이 많은 지하철에 오래 서 있으면 속이 메스껍고 식은땀이 나다가 털썩 쓰러집니다. 병원에서는 미주신경성 실신이라는데 한방 치료가 되나요?',
    p1: '미주신경성 실신은 극심한 피로나 긴장, 장시간 기립 시 부교감신경(미주신경)이 과도하게 반응하여 심박수와 혈압이 급격히 떨어져 뇌 혈류가 일시 차단되는 질환입니다.',
    p2: ['쓰러지기 직전 시야가 좁아지거나 하얘진다', '속이 울렁거리고 식은땀과 하품이 난다', '지하철이나 백화점 등 밀폐된 공간에서 자주 발생한다', '실신 후 깨어나면 극심한 피로감을 느낀다'],
    p3: ['전조증상 발생 즉시 그 자리에 주저앉거나 눕기', '다리를 꼬고 엉덩이에 힘을 주는 혈압 상승 자세', '기상 직후 미온수 1~2잔 천천히 마시기'],
    p4: '심장과 기혈을 보강하는 승양익기(升陽益氣) 탕약과 자율신경 밸런스 약침으로 혈압 조절 능력을 튼튼하게 재건합니다.',
    tags: ['미주신경성실신', '실신전조증상', '기립성저혈압', '자율신경치료']
  },

  // 5) 우울증 · 화병 & 번아웃
  {
    category: '우울증 · 화병 & 번아웃',
    categoryKey: 'stress',
    patientRole: '50대 주부',
    titleTpl: '가슴이 터질 듯 답답하고 목에 뭔가 걸려 안 넘어가는 화병과 매핵기 ({region})',
    question: '목구멍에 가래 같은 이물질이 걸려 뱉어도 안 나오고 삼켜도 안 넘어갑니다. 가슴 한가운데가 꽉 막힌 듯 답답하고 얼굴로 열이 치미는데 화병인가요?',
    p1: '목 이물감은 억울한 감정과 스트레스로 기운이 뭉친 한의학의 매핵기(梅核氣) 증상입니다. 울체된 심화(心火)가 상체로 치솟으며 상열감, 가슴 답답함, 불면이 동반됩니다.',
    p2: ['목에 이물질이 걸린 느낌이 들지만 내시경은 정상이다', '가슴 한가운데(전중혈)를 누르면 심한 통증이 있다', '얼굴이나 머리로 뜨거운 열이 훅 치밀어 오른다', '억울하고 분한 생각이 자주 떠오르며 한숨을 쉰다'],
    p3: ['가슴 한가운데를 손바닥으로 아래로 쓸어내리기', '속마음을 일기나 글로 솔직하게 털어내기', '반신욕이나 족욕으로 상체의 열을 하체로 순환'],
    p4: '뭉친 기운을 풀어주는 반하후박탕 및 가미소요산 처방과 가슴 혈자리 침구 치료로 목의 이물감과 가슴의 응어리를 시원하게 비워냅니다.',
    tags: ['화병', '매핵기', '목이물감', '가슴답답함']
  },

  // 6) 신체화 & 담적·두통·턱관절
  {
    category: '신체화 & 담적·두통·턱관절',
    categoryKey: 'somatic',
    patientRole: '40대 자영업자 / 직장인',
    titleTpl: '식사만 하면 명치가 돌처럼 굳고 트림이 끊이지 않는 담적병 치료 ({region})',
    question: '위내시경 검사는 정상인데 밥만 먹으면 명치가 꽉 막히고 배에 가스가 차며 숨쉬기까지 답답합니다. 만성 소화불량 담적병 한방 치료법이 궁금합니다.',
    p1: '위장 점막 외벽 근육층에 소화되지 않은 독소(담음)가 쌓여 위장이 굳어지는 질환이 담적병입니다. 위장 연동운동이 멈추면 명치 통증과 가스 팽만, 역류성 식도염이 발생합니다.',
    p2: ['명치 끝이 답답하고 돌처럼 딱딱하게 만져진다', '조금만 먹어도 배가 부르고 헛트림이 자주 나온다', '머리가 자주 띵하고 어지러우며 피로하다', '소화제를 먹어도 효과가 일시적이다'],
    p3: ['식사 시 30번 이상 천천히 꼭꼭 씹기', '식후 30분 가벼운 평지 산책하기', '식사 중 차가운 물이나 탄산음료 섭취 피하기'],
    p4: '위장 외벽의 담적을 삭혀 배출하는 온비소적 탕약과 복부 온열 뜸 요법으로 굳어진 위장관을 따뜻하게 풀어냅니다.',
    tags: ['담적병', '신경성소화불량', '명치답답', '위장한의원']
  }
];

// 3. Q&A 마크다운 생성 함수
export async function generateDailyQA() {
  const existingFiles = fs.readdirSync(qaDir).filter(f => f.endsWith('.md') && f !== '_index.md');
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const dateFull = now.toISOString();

  // 순환 인덱스 선택
  const topicIndex = existingFiles.length % QA_MASTER_TOPICS.length;
  const regionIndex = existingFiles.length % REGION_POOLS.length;

  const topic = QA_MASTER_TOPICS[topicIndex];
  const region = REGION_POOLS[regionIndex];

  const title = topic.titleTpl.replace('{region}', region);
  const fileName = `qa-${dateStr}-${topic.categoryKey}-${Math.floor(1000 + Math.random() * 9000)}.md`;
  const filePath = path.join(qaDir, fileName);

  const checklistMd = topic.p2.map(item => `1. [ ] ${item}`).join('\n');
  const tipsMd = topic.p3.map(item => `* ${item}`).join('\n');

  const content = `---
title: "${title}"
linkTitle: "${title.slice(0, 30)}..."
date: ${dateFull}
category: "${topic.category}"
location: "${region}"
patient_info: "질문자: ${region} 거주 OO님 (${topic.patientRole})"
summary: "${topic.summary || topic.question.slice(0, 100)}..."
question: |
  ${topic.question.replace(/\n/g, '\n  ')}
type: qa
---

## 1. ${topic.p1_title || '질환의 원인 및 신경학적 발생 기전'}

${topic.p1}

---

## 2. 자가진단 체크리스트

${checklistMd}

---

## 3. 가정 내 생활 관리 및 실천 팁 3가지

${tipsMd}

---

## 4. 해아림한의원 인천부평점의 1:1 맞춤 치료 솔루션

${topic.p4}

<div class="qa-highlight-card">
  <strong>💡 권형근 대표원장의 조언:</strong><br>
  ${topic.advice || '혼자 끙끙 앓거나 참으려 하지 마시고, 뇌 신경계의 불균형을 정확히 파악하여 근본 치료를 시작하면 건강한 일상을 되찾을 수 있습니다.'}
</div>
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ [Q&A 생성 완료] ${fileName} (${title})`);

  // 텔레그램 알림 전송 (옵션)
  await sendTelegramNotification(title, region, topic.category);

  return { fileName, title, category: topic.category, region };
}

async function sendTelegramNotification(title, region, category) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
  const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

  const message = `🔔 <b>[해아림한의원 Q&A 상담사례 자동 발행]</b>\n\n` +
                  `📌 <b>제목:</b> ${title}\n` +
                  `🏷️ <b>카테고리:</b> ${category}\n` +
                  `📍 <b>지역:</b> ${region}\n` +
                  `⏰ <b>발행일시:</b> ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
    });
    if (res.ok) console.log('📲 Telegram notification sent successfully!');
  } catch (err) {
    console.warn('⚠️ Telegram notification failed:', err.message);
  }
}

// 스크립트 단독 실행 시
generateDailyQA();
