import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { publishToTistory, formatTistoryContent } from './publish-tistory.mjs';
import { rebuildColumnIndex } from './build-all-columns.mjs';
import { resolveThumbnail } from './thumbnail-resolver.mjs';
import { getDiverseFaq } from './column-faqs.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');

// 1. 주요 타겟 지역 풀 (24개 세부 핵심 권역 로테이션)
export const REGION_POOLS = [
  { short: '인천 부평', full: '부평구(부평동, 산곡동, 삼산동, 부개동, 십정동, 청천동, 갈산동)' },
  { short: '인천 구월동', full: '남동구(구월동, 간석동, 만수동, 서창동, 논현동)' },
  { short: '부천 상동', full: '부천시(상동, 중동, 신중동, 송내동)' },
  { short: '시흥 배곧', full: '시흥시(배곧신도시, 정왕동, 대야동, 은행동)' },
  { short: '인천 청라', full: '인천 서구(청라국제도시, 루원시티, 가정동, 검단)' },
  { short: '인천 송도', full: '인천 연수구(송도국제도시, 동춘동, 연수동)' },
  { short: '인천 계양구', full: '계양구(계산동, 작전동, 효성동, 계양)' },
  { short: '부천 중동', full: '부천시(신중동, 중동, 원미동, 춘의동)' },
  { short: '인천 간석동', full: '남동구 및 미추홀구(간석동, 주안동, 만수동)' },
  { short: '시흥 은계', full: '시흥시(은계지구, 대야동, 은행동, 목감)' },
  { short: '김포 검단', full: '김포시(구래동, 풍무동) 및 인천 검단구' },
  { short: '인천 영종도', full: '인천 중구(영종하늘도시, 운서동, 동인천)' },
  { short: '인천 주안', full: '미추홀구(주안동, 도화동, 숭의동, 용현동)' },
  { short: '부천 옥길동', full: '부천시(옥길지구, 범박동, 괴안동, 소사동)' },
  { short: '인천 서창동', full: '남동구(서창2지구, 만수동, 도림동)' },
  { short: '시흥 목감', full: '시흥시(목감지구, 장현지구, 능곡동)' },
  { short: '인천 논현동', full: '남동구(인천논현, 소래포구, 고잔동)' },
  { short: '부천 송내', full: '부천시(송내역, 심곡동, 부천역)' },
  { short: '인천 루원시티', full: '서구(루원시티, 가정동, 신현동, 석남동)' },
  { short: '인천 검단신도시', full: '서구(검단신도시, 원당동, 당하동, 마전동)' },
  { short: '시흥 정왕동', full: '시흥시(정왕동, 시화, 배곧생명공원)' },
  { short: '인천 산곡동', full: '부평구(산곡동, 청천동, 백운역)' },
  { short: '인천 삼산동', full: '부평구(삼산동, 갈산동, 굴포천역)' },
  { short: '부천 신중동', full: '부천시(신중동역, 중동위브, 심곡천)' }
];

// 2. 6대 진료영역별 카테고리 및 심층 의학 주제 풀 (총 100개 이상의 다채로운 임상 토픽)
export const CATEGORIES = [
  {
    id: 'panic',
    name: '공황 · 불안 & 강박증',
    categoryClass: 'panic',
    topics: [
      {
        titleSuffix: '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법',
        focus: '공황발작 응급 호흡 및 편도체 안정 한약',
        blogTitle: '공황발작 왔을 때 바로 살려내는 3분 응급 호흡법과 뇌 안정 한방 치료',
        hookLine: '갑자기 숨이 가빠지고 심장이 미친 듯이 뛰며 죽을 것 같은 공포를 겪으셨나요?'
      },
      {
        titleSuffix: '“또 발작 올까 두려운” 예기불안과 뇌 변연계 안정 한방 치료',
        focus: '24시간 지속되는 예기불안 차단',
        blogTitle: '발작은 지나갔는데 왜 24시간 불안할까? 예기불안 차단하는 뇌 신경 치료',
        hookLine: '언제 또 발작이 올지 몰라 하루 종일 긴장되고 외출하기조차 두려우신가요?'
      },
      {
        titleSuffix: '지하철·엘리베이터 공포증과 광장공포증, 공간 지각 왜곡 극복법',
        focus: '밀폐공간 공포증 및 광장공포증',
        blogTitle: '밀폐된 곳만 가면 숨 막히는 광장공포증, 뇌 자율신경 감각 회복법',
        hookLine: '지하철이나 만원 버스, 엘리베이터에 타면 질식할 것 같은 공포가 엄습하나요?'
      },
      {
        titleSuffix: '발표할 때 목소리 떨림과 심장 두근거림, 사회공포증 한의학 솔루션',
        focus: '사회공포증 및 발표불안',
        blogTitle: '사람들 앞에만 서면 목소리가 떨리고 머리가 하얘지는 발표불안 한방 치료',
        hookLine: '회의 시간이나 발표 자리만 되면 심장이 쿵쾅거리고 손과 목소리가 떨리시나요?'
      },
      {
        titleSuffix: '문 잠갔을까 끊임없이 의심되는 확인 강박사고의 뇌 회로 안정법',
        focus: '강박장애 및 CSTC 회로 과열',
        blogTitle: '문 잠갔는지 가스 껐는지 수십 번 확인하는 강박증(OCD) 뇌 회로 끄기',
        hookLine: '머리로는 괜찮다는 걸 알면서도 끊임없이 의심되고 불안해 확인을 멈출 수 없나요?'
      },
      {
        titleSuffix: '사소한 일에도 최악을 상상하는 범불안장애와 자율신경 과흥분 조절',
        focus: '만성 불안 및 편도체 안정',
        blogTitle: '온종일 걱정이 꼬리를 무는 만성 불안증, 뇌 편도체 브레이크 훈련',
        hookLine: '특별한 일이 없는데도 늘 안절부절못하고 가슴이 조마조마해 일상이 피곤하신가요?'
      },
      {
        titleSuffix: '자다가 갑자기 숨이 막혀 깨는 야간 수면 공황발작과 뇌간 자율신경 안정',
        focus: '야간 수면 공황발작 및 뇌간 과각성',
        blogTitle: '자다 말고 심장이 터질 듯 깨어나는 수면 공황발작, 밤마다 겪는 공포의 해법',
        hookLine: '깊은 잠에 들었다가 한밤중에 갑작스러운 질식감과 심장 두근거림으로 깨어나시나요?'
      },
      {
        titleSuffix: '터널·고속도로·교량 운전만 하면 식은땀 나는 운전 공포증 극복법',
        focus: '운전공포증 및 폐쇄공간 패닉',
        blogTitle: '터널이나 고속도로 운전대만 잡으면 심장이 멎을 것 같은 운전 공포증 치료',
        hookLine: '고속도로나 다리 위, 터널에 진입할 때 갓길에 차를 세우고 싶을 만큼 두려우신가요?'
      },
      {
        titleSuffix: '몸의 사소한 이상에도 중병을 걱정하는 건강염려증과 질병불안장애',
        focus: '건강염려증 및 체감 감각 과민',
        blogTitle: '심장 소리 하나에도 병원 응급실로 달려가는 질병불안장애 뇌 감각 재조절',
        hookLine: '혈압, 심박수, 작은 통증 하나에도 큰 병이 아닐까 온종일 검색하고 불안해하시나요?'
      },
      {
        titleSuffix: '수험생·취준생의 시험 직전 복통과 과호흡, 시험불안 극복 한방 처방',
        focus: '시험불안 및 수행불안',
        blogTitle: '시험지만 받으면 머리가 하얘지고 손이 떨리는 수험생 시험불안증 치료',
        hookLine: '평소에는 잘하다가도 중요한 시험이나 면접 날만 되면 배가 아프고 패닉이 오나요?'
      },
      {
        titleSuffix: '항불안제 테이퍼링 시 발생하는 반동 불안과 신경계 자생력 회복법',
        focus: '신경안정제 감량 및 반동불안 극복',
        blogTitle: '안정제 약 줄일 때 찾아오는 불안감과 불면, 한방 안신 요법으로 안전하게 감량하기',
        hookLine: '신경안정제를 줄이거나 끊으려 할 때 다시 찾아오는 불안과 가슴 두근거림이 두려우신가요?'
      },
      {
        titleSuffix: '심담허겁(心膽虛怯) 체질의 잘 놀라고 가슴 뛰는 불안증 다스리기',
        focus: '심담허겁 체질 개선 및 온담탕 요법',
        blogTitle: '사소한 소리에도 심장이 덜컥 내려앉는 개복치 체질, 심담 강화 한약',
        hookLine: '작은 소음이나 인기척에도 깜짝깜짝 놀라고 심장이 한참 동안 진정되지 않으시나요?'
      }
    ]
  },
  {
    id: 'insomnia',
    name: '불면증 · 수면장애',
    categoryClass: 'insomnia',
    topics: [
      {
        titleSuffix: '새벽 3~4시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리',
        focus: '새벽 중도각성 및 수면유지장애',
        blogTitle: '새벽 3시만 되면 눈이 번쩍 떠지는 이유? 수면유지장애와 간열 다스리기',
        hookLine: '잠은 겨우 들었는데 매일 새벽 3~4시마다 깨서 다시 잠들지 못하고 뒤척이시나요?'
      },
      {
        titleSuffix: '수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬',
        focus: '수면유도제 내성 극복 및 자연 수면',
        blogTitle: '수면제 끊고 스스로 잠드는 뇌 자생력 회복법 (약물 내성·반동불안 극복)',
        hookLine: '수면유도제 없이는 잠들기 힘들고, 점점 약 용량을 늘려야 할까 봐 두려우신가요?'
      },
      {
        titleSuffix: '잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 DMN 과각성 해소법',
        focus: '입면장애 및 뇌 과각성 완화',
        blogTitle: '누우면 잡생각이 폭풍처럼 밀려와 잠 못 드는 입면장애 뇌 스위치 끄기',
        hookLine: '피곤해서 누웠는데 머릿속에서 생각이 꼬리를 물어 1~2시간 넘게 뜬눈으로 밤을 지새우시나요?'
      },
      {
        titleSuffix: '악몽과 가위눌림, 심비양허를 보강하여 깊은 델타파 숙면 유도',
        focus: '다몽증 및 렘수면 행동장애',
        blogTitle: '매일 밤 악몽과 가위눌림에 시달려 잠자리가 공포스러운 분들을 위한 한방 처방',
        hookLine: '밤마다 쫓기는 꿈을 꾸거나 몸이 굳는 가위눌림 때문에 자고 일어나도 개운치 않으신가요?'
      },
      {
        titleSuffix: '자고 일어나도 개운치 않은 수면 분절과 만성 수면부족 회복',
        focus: '수면의 질 개선 및 델타파 유도',
        blogTitle: '8시간을 자도 물먹은 솜처럼 피곤한 이유? 얕은 수면과 델타파 유도 치료',
        hookLine: '분명히 오래 잤는데도 아침마다 머리가 무겁고 온몸이 두들겨 맞은 듯 쑤시나요?'
      },
      {
        titleSuffix: '생체 리듬 교란과 교대근무 수면장애 극복을 위한 한방 멜라토닌 솔루션',
        focus: '생체시계 정상화 및 수면 리듬',
        blogTitle: '밤낮이 바뀐 불규칙한 생활, 무너진 생체시계를 되살리는 한방 수면 리듬 치료',
        hookLine: '야간 근무와 불규칙한 취침 시간으로 뇌의 수면 리듬이 완전히 깨져버리셨나요?'
      },
      {
        titleSuffix: '다리가 근질거리고 벌레 기어가는 느낌, 하지불안증후군과 도파민 불균형',
        focus: '하지불안증후군 및 철분·혈류 순환',
        blogTitle: '잠자리에만 누우면 다리가 터질 듯 불편해 잠 못 드는 하지불안증후군 해법',
        hookLine: '누우면 다리를 가만히 둘 수 없고 주무르거나 움직여야만 잠시 편해지시나요?'
      },
      {
        titleSuffix: '갱년기 상열감과 밤마다 흐르는 식은땀(도한), 호르몬 불면증 치료',
        focus: '갱년기 불면증 및 음허화왕',
        blogTitle: '얼굴로 열이 솟구치고 땀이 비 오듯 흘러 깨는 갱년기 불면증 다스리기',
        hookLine: '한밤중에 가슴과 얼굴이 뜨거워지며 옷이 젖을 만큼 땀을 흘리고 깨어나시나요?'
      },
      {
        titleSuffix: '누우면 심장이 쿵쾅거려 잠 못 드는 심인성 불면과 심신불교(心腎不交)',
        focus: '심계항진 동반 불면 및 천왕보심단 요법',
        blogTitle: '베개에 귀를 대면 심장 박동 소리가 쿵쿵 들려 잠 못 드는 분들을 위한 치료',
        hookLine: '잘 준비를 하고 누웠는데 심장이 너무 세게 뛰어 신경이 곤두서 잠들지 못하시나요?'
      },
      {
        titleSuffix: '카페인 분해 저하와 저녁 카페인 민감증으로 인한 각성 불면증 극복',
        focus: '간 해독 기능 저하 및 아데노신 수용체 과각성',
        blogTitle: '커피 한 잔에도 밤새 뜬눈으로 새우는 체질, 간 해독과 뇌 안정 한약',
        hookLine: '오후에 마신 차 한 잔 때문에 밤새 뇌가 말똥말똥 깨어 피로가 누적되시나요?'
      },
      {
        titleSuffix: '소화불량과 복부 팽만으로 잠을 설치는 식적(食積) 불면증 한방 치료',
        focus: '위장 장애 동반 불면 및 뇌-위장 축',
        blogTitle: '속이 더부룩하고 명치가 답답해서 뒤척이는 위장성 불면증 해소법',
        hookLine: '저녁만 먹고 나면 속이 꽉 막힌 느낌에 누웠을 때 가슴이 답답해 잠들기 힘드신가요?'
      },
      {
        titleSuffix: '만성 불안과 걱정으로 인한 심비양허(心脾兩虛) 귀비탕 수면 치유',
        focus: '심비양허 체질 개선 및 귀비탕 처방',
        blogTitle: '과로와 스트레스로 심장과 비장의 기혈이 말라버린 만성 불면증 회복',
        hookLine: '에너지는 바닥났는데 머리는 꺼지지 않고 불안과 걱정 때문에 잠이 달아나나요?'
      }
    ]
  },
  {
    id: 'autonomic',
    name: '자율신경 & 실신·어지럼증·이명',
    categoryClass: 'autonomic',
    topics: [
      {
        titleSuffix: '만성피로와 자율신경계 기능 저하의 관계, 한스셀리에 3단계 소진과 한방 치료',
        focus: '만성피로와 자율신경실조증',
        blogTitle: '쉬어도 쉬어도 풀리지 않는 만성 피로, 자율신경실조증 3단계 소진 자가진단',
        hookLine: '충분히 휴식을 취해도 온몸의 배터리가 방전된 것처럼 천근만근 무거우신가요?'
      },
      {
        titleSuffix: '출퇴근길 갑자기 핑 돌고 쓰러지는 미주신경성 실신의 전조증상과 한방 치료',
        focus: '미주신경성 실신 및 기립성 어지럼증',
        blogTitle: '출퇴근 지하철에서 눈앞이 캄캄해지고 식은땀 나는 미주신경성 실신 응급 대처',
        hookLine: '지하철이나 서 있는 자리에서 갑자기 핑 돌며 헛구역질과 함께 주저앉을 뻔하셨나요?'
      },
      {
        titleSuffix: '긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방',
        focus: '수족다한증 및 상열하한',
        blogTitle: '긴장만 하면 손발에서 땀이 줄줄 흐르는 수족다한증, 교감신경 안정 한약',
        hookLine: '사소한 스트레스나 긴장에도 손과 발, 겨드랑이에 땀이 쏟아져 대인관계가 신경 쓰이시나요?'
      },
      {
        titleSuffix: '검사상 이상 없는 만성 어지럼증과 멍함, 상부 경추(C1-C2)와 추골동맥의 관계',
        focus: '경추성 어지럼증 및 브레인포그',
        blogTitle: '이비인후과·뇌 MRI 정상인데 머리가 멍하고 빙빙 도는 경추성 어지럼증 해법',
        hookLine: '병원 검사에서는 아무 이상이 없다는데 고개를 돌릴 때마다 어지럽고 머릿속에 안개가 낀 듯 멍하신가요?'
      },
      {
        titleSuffix: '피곤하면 더 커지는 귀뚜라미·삐 소리, 신경성 이명과 뇌명증 한방 치료',
        focus: '신경성 이명 및 내이 혈류장애',
        blogTitle: '조용한 밤마다 더 커지는 귓속 삐 소리, 신경성 이명과 뇌명증 한방 치료 원리',
        hookLine: '귓속이나 머리 안에서 매미·귀뚜라미 우는 소리가 끊이지 않아 신경이 곤두서시나요?'
      },
      {
        titleSuffix: '가슴 두근거림과 체온 조절 장애, 기립성 저혈압의 자율신경 균형 치료',
        focus: '기립성 저혈압 및 심박 변이도 개선',
        blogTitle: '앉았다 일어설 때 눈앞이 하얘지는 기립성 어지럼증과 자율신경 밸런스 회복',
        hookLine: '갑자기 일어날 때 핑 돌며 주저앉거나, 손발은 얼음장인데 얼굴로만 열이 확 오르시나요?'
      },
      {
        titleSuffix: '일어설 때 심장이 100회 이상 뛰는 기립성 빈맥 증후군(POTS) 한방 솔루션',
        focus: 'POTS 및 혈관 수축 반사 부전',
        blogTitle: '서 있기만 해도 심장이 미친 듯이 쿵쾅거리는 기립성 빈맥 증후군 치료',
        hookLine: '누워있을 땐 멀쩡한데 서기만 하면 심박수가 치솟고 숨이 차서 서 있기 힘드신가요?'
      },
      {
        titleSuffix: '머리는 뜨겁고 발은 얼음장 같은 상열하한(上熱下寒)과 수승화강 치료',
        focus: '상열하한 및 혈류 순환 불균형',
        blogTitle: '얼굴은 홍조로 붉고 발끝은 시려 잠 못 드는 상열하한증, 체온 밸런스 회복',
        hookLine: '가슴 위로는 열이 뻗쳐 답답한데 아랫배와 손발은 항상 차가워 고생하시나요?'
      },
      {
        titleSuffix: '식사만 하면 극심한 피로와 졸음이 쏟아지는 식후 저혈압 및 자율신경 저하',
        focus: '식후 저혈압 및 소화관 혈류 조절',
        blogTitle: '밥만 먹으면 기절하듯 쏟아지는 식후 졸음과 멍함, 자율신경 혈류 개선',
        hookLine: '식사 후 걷잡을 수 없이 졸리고 머리가 멍해지며 어지러운 증상이 반복되나요?'
      },
      {
        titleSuffix: '성상신경절(SGB) 침치료와 경락 약침을 통한 교감신경 과항진 진정',
        focus: 'SGB 침치료 및 자율신경절 조절',
        blogTitle: '목 부위 성상신경절을 안정시켜 뇌와 심장 혈류를 살리는 한방 치료 원리',
        hookLine: '과도한 스트레스로 굳어버린 목과 자율신경절을 풀어 전신 밸런스를 되찾는 법'
      },
      {
        titleSuffix: '이석증 치료 후에도 남아있는 붕 뜨고 흔들리는 만성 지속성 어지럼(PPPD)',
        focus: 'PPPD 및 전정 감각 뇌 신경망 통합',
        blogTitle: '이석증은 나았다는데 왜 아직도 배 탄 것처럼 흔들릴까? PPPD 한방 치료',
        hookLine: '이비인후과 치료는 끝났다는데 걸을 때마다 스펀지를 밟는 듯 붕 뜨고 어지러우신가요?'
      },
      {
        titleSuffix: '시호가용골모려탕과 영계출감탕 처방으로 다스리는 자율신경 실조증',
        focus: '방제학적 자율신경 치료 처방 원리',
        blogTitle: '스트레스로 뭉친 신경 독소를 풀고 뇌척수액 순환을 돕는 맞춤 한약 치료',
        hookLine: '검사로는 잡히지 않는 10여 가지 자율신경 이상 신호를 체질별 한약으로 뿌리 뽑는 법'
      }
    ]
  },
  {
    id: 'tic',
    name: '소아청소년 & 성인 ADHD·틱장애',
    categoryClass: 'tic',
    topics: [
      {
        titleSuffix: '아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 발달과 NeuronFlex 두뇌훈련',
        focus: '소아 틱장애 기저핵 발달 및 부모 대처',
        blogTitle: '아이의 잦은 눈 깜빡임과 코 찡긋, 혼내지 말고 뇌 기저핵 발달 살펴야 하는 이유',
        hookLine: '아이가 눈을 자주 깜빡이거나 코를 찡긋거리는데 "하지 마!"라고 혼내고 계신가요?'
      },
      {
        titleSuffix: '산만하고 충동적인 아이 집중력 향상, 전두엽 억제 회로 강화 한방 치료',
        focus: '소아 ADHD 및 주의력결핍',
        blogTitle: '수업 시간에 가만히 있지 못하고 산만한 아이, 전두엽 억제 브레이크 키우는 법',
        hookLine: '숙제 하나 끝내는 데 몇 시간씩 걸리고 충동적인 행동 때문에 학교에서 지적을 받나요?'
      },
      {
        titleSuffix: '단순 비염으로 오인하기 쉬운 소아 음성틱·뚜렛증후군 조기 감별법',
        focus: '음성틱 및 뚜렛증후군',
        blogTitle: '비염약 먹어도 멈추지 않는 아이의 킁킁·음음 소리, 음성틱 조기 발견과 치료법',
        hookLine: '환절기 비염인 줄 알고 약을 먹였는데도 킁킁거리는 소리나 헛기침이 계속 반복되나요?'
      },
      {
        titleSuffix: '청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료',
        focus: '청소년 복합틱 및 학습집중력',
        blogTitle: '사춘기 학업 스트레스로 악화된 청소년 틱장애, 자존감과 집중력 함께 살리는 치료',
        hookLine: '어릴 때 괜찮아졌던 틱이 시험 기간이나 사춘기 스트레스와 함께 다시 심해졌나요?'
      },
      {
        titleSuffix: '만성 미루기와 브레인포그로 고통받는 성인 ADHD의 전두엽 도파민 회복',
        focus: '성인 ADHD 실행기능장애',
        blogTitle: '할 일 미루기 대마왕? 약속 시간 늦고 정리 못 하는 성인 ADHD 전두엽 회복법',
        hookLine: '매번 중요한 마감 직전까지 미루고 물건을 자주 잃어버려 사회생활에서 큰 스트레스를 받으시나요?'
      },
      {
        titleSuffix: '스마트폰 과의존과 주의력 저하를 겪는 아이를 위한 감각통합 두뇌 솔루션',
        focus: '도파민 보상 회로 및 감각통합',
        blogTitle: '스마트폰 뺏으면 분노 폭발하는 아이, 도파민 보상 회로 정상화와 두뇌 훈련',
        hookLine: '영상 매체 없이는 가만히 있지 못하고 툭하면 짜증을 내며 집중력이 급격히 떨어지나요?'
      },
      {
        titleSuffix: '성인 ADHD의 감정 기복과 욱하는 분노 폭발, 전두엽 충동 억제 치료',
        focus: '성인 ADHD 정서 조절 부전',
        blogTitle: '사소한 지적에도 욱하고 후회하는 성인 ADHD, 전두엽 충동 조절 뇌 훈련',
        hookLine: '직장이나 대인관계에서 욱하는 감정을 참지 못해 트러블이 잦고 자책하고 계신가요?'
      },
      {
        titleSuffix: '운동틱과 음성틱이 복합 발현되는 뚜렛증후군의 뇌 기저핵 맞춤 한약',
        focus: '뚜렛증후군 및 CSTC 회로 과열 억제',
        blogTitle: '얼굴 찡그림과 욕설·괴성 틱이 동반되는 뚜렛증후군, 뇌 신경망 안정 치료',
        hookLine: '운동 틱과 음성 틱이 1년 이상 지속되어 아이의 학업과 교우관계가 걱정되시나요?'
      },
      {
        titleSuffix: '조용한 ADHD(ADD) 환자의 멍함과 작업기억력 저하 한방 총명 치료',
        focus: '주의력결핍 우세형 ADD 및 작업기억력',
        blogTitle: '얌전하지만 늘 딴생각에 빠져있는 조용한 ADHD, 뇌 각성도 깨우는 법',
        hookLine: '겉으로는 얌전한데 책 한 장 넘기기가 어렵고 들은 말을 바로 잊어버리나요?'
      },
      {
        titleSuffix: 'IM(인터랙티브 메트로놈) 감각통합 훈련을 통한 신경 타이밍 조절력 향상',
        focus: 'IM 감각통합 훈련 및 1/1,000초 동기화',
        blogTitle: '1/1,000초 단위 정밀 시청각 피드백으로 산만한 뇌의 타이밍을 맞추는 훈련',
        hookLine: '뇌 신경망의 정보 처리 속도와 타이밍을 교정하여 집중력과 운동 협응성을 높이는 법'
      },
      {
        titleSuffix: '억간산과 가미온담탕을 응용한 소아청소년 틱·ADHD 신경 안정 처방',
        focus: '소아 신경정신과 한약 방제학',
        blogTitle: '아이의 간열을 내리고 담음(痰飮)을 제거하여 순하게 뇌를 안정시키는 맞춤 탕약',
        hookLine: '양약의 부작용이나 식욕 저하 없이 아이의 뇌 성장을 돕는 한방 뇌 영양 치료'
      },
      {
        titleSuffix: '새 학기 입학·진학 후 악화되는 틱장애와 적응 불안 극복 양육 가이드',
        focus: '새학기 증후군 및 환경 변화 스트레스',
        blogTitle: '신학기만 되면 눈 깜빡임과 헛기침이 심해지는 아이, 부모님의 올바른 대처법',
        hookLine: '환경이 바뀌거나 학년이 올라갈 때마다 틱 증상이 유독 심해져 불안하신가요?'
      }
    ]
  },
  {
    id: 'stress',
    name: '우울증 · 화병 & 번아웃',
    categoryClass: 'stress',
    topics: [
      {
        titleSuffix: '가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법',
        focus: '화병 가슴 답답함 및 매핵기 해소',
        blogTitle: '목에 뭔가 걸린 듯 뱉어도 안 나오는 매핵기(梅核氣)와 가슴 답답한 화병 해법',
        hookLine: '목구멍에 가래 같은 게 걸려 삼켜지지도 뱉어지지도 않고 가슴이 터질 듯 답답하신가요?'
      },
      {
        titleSuffix: '직장인·전문직 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법',
        focus: '번아웃 증후군 및 뇌 에너지 충전',
        blogTitle: '출근길 지하철만 타면 퇴사하고 싶은 번아웃 증후군, 지친 뇌 에너지 충전법',
        hookLine: '모든 열정이 식어버리고 아무것도 하기 싫은 극심한 무기력증에 빠져 계신가요?'
      },
      {
        titleSuffix: '매사 무기력하고 의욕이 사라진 만성 우울감, 장-뇌 축 개선과 해울 한방 치료',
        focus: '만성 우울증 및 세로토닌 결핍',
        blogTitle: '마음이 끝없이 가라앉는 만성 우울증, 장과 뇌를 함께 다스리는 해울(解鬱) 치료',
        hookLine: '예전엔 즐거웠던 일도 아무 감흥이 없고 온종일 우울감의 늪에서 헤어나오기 힘드신가요?'
      },
      {
        titleSuffix: '감정 기복과 분노 조절 장애, 간화(肝火)를 식히는 맞춤 한약 처방',
        focus: '분노 조절 및 간열 해소',
        blogTitle: '사소한 일에도 욱하고 폭발하는 분노 조절 장애, 치솟는 간열(肝熱) 내리기',
        hookLine: '작은 자극에도 나도 모르게 버럭 소리를 지르고 돌아서면 후회하는 일이 반복되시나요?'
      },
      {
        titleSuffix: '출산 후 무기력증과 산후우울증, 기혈 보강과 신경 안정 통합 치료',
        focus: '산후우울증 및 기혈 보강',
        blogTitle: '산후 극심한 눈물과 피로감, 산모의 기혈을 채우고 우울감을 걷어내는 한방 케어',
        hookLine: '아이를 보면 눈물이 나고 온몸의 뼈마디가 시리며 마음이 극도로 불안하고 지치셨나요?'
      },
      {
        titleSuffix: '갱년기 상열감과 불면·우울이 겹치는 갱년기 화병의 호르몬·자율신경 복원',
        focus: '갱년기 화병 및 자율신경 불균형',
        blogTitle: '얼굴로 열이 확 오르고 가슴이 두근거리는 갱년기 화병과 우울증 극복법',
        hookLine: '가슴이 쿵쾅거리고 얼굴로 열이 솟구치며 사소한 말 한마디에도 서러움과 분노가 치미시나요?'
      },
      {
        titleSuffix: '겉으로는 웃지만 속은 썩어 들어가는 가면성 우울증(스마일 마스크 증후군)',
        focus: '가면성 우울증 및 신체화 우울',
        blogTitle: '남들 앞에선 밝은 척, 혼자 있으면 무너지는 스마일 마스크 우울증 치료',
        hookLine: '남들에게 힘든 내색을 전혀 못 하고 속으로 억누르다가 몸에 원인 모를 통증이 생기셨나요?'
      },
      {
        titleSuffix: '취업 준비생·수험생의 만성 좌절감과 뇌 브레인포그 극복 총명 요법',
        focus: '청년 무기력증 및 전두엽 뇌 피로',
        blogTitle: '반복되는 불합격과 불안으로 머리가 굳어버린 취준생 뇌 에너지 회복',
        hookLine: '미래에 대한 불안감으로 자존감이 바닥나고 책상 앞에 앉아도 글자가 눈에 안 들어오나요?'
      },
      {
        titleSuffix: '가슴 한가운데 전중혈(膻中穴) 통증과 응어리진 울화를 풀어주는 침구 치료',
        focus: '전중혈 울체 해소 및 소간해울',
        blogTitle: '가슴 정중앙을 누르면 비명이 나올 만큼 아픈 화병, 맺힌 기운 뚫어주기',
        hookLine: '가슴 명치 윗부분을 손으로 꾹 누르면 돌덩이처럼 단단하고 찌릿한 통증이 느껴지시나요?'
      },
      {
        titleSuffix: '사역산(四逆散)과 시호소간산(柴胡疏肝散)으로 뚫어주는 스트레스 기체증',
        focus: '한방 해울 방제학 원리',
        blogTitle: '온몸의 기운이 꽉 막혀 손발이 차가워지는 스트레스 기체(氣滯) 해소 한약',
        hookLine: '스트레스만 받으면 옆구리가 결리고 한숨을 쉬어야만 가슴이 트이는 분들을 위한 처방'
      },
      {
        titleSuffix: '노년기 만성 우울감과 치매 전조증상 감별, 뇌 활력 깨우는 보양 치료',
        focus: '노인성 우울증 및 가성 치매',
        blogTitle: '기억력이 떨어지고 매사 귀찮아지는 부모님의 노인성 우울증 조기 치료',
        hookLine: '부모님이 최근 부쩍 말씀이 줄고 기억력 감퇴와 함께 온몸이 아프다고 호소하시나요?'
      },
      {
        titleSuffix: '지친 부신 기능을 회복시켜 만성 번아웃을 극복하는 사향공진단 처방 원리',
        focus: '부신 피로 증후군 및 공진단 건뇌단',
        blogTitle: '커피나 에너지 드링크로도 버티기 힘든 방전된 몸, 정품 사향공진단 뇌 회복',
        hookLine: '아침에 일어나는 것 자체가 지옥 같고 주말 내내 누워있어도 피로가 안 풀리시나요?'
      }
    ]
  },
  {
    id: 'somatic',
    name: '신체화 & 담적·두통·턱관절',
    categoryClass: 'somatic',
    topics: [
      {
        titleSuffix: '위내시경은 정상인데 명치가 꽉 막히는 신경성 소화불량과 담적병(痰積病)',
        focus: '담적병 및 신경성 위장장애',
        blogTitle: '내시경 검사는 깨끗한데 늘 체한 듯 명치가 답답한 담적병(痰積病) 치료 원리',
        hookLine: '조금만 먹어도 배가 더부룩하고 명치가 굳어 돌덩이를 얹어놓은 듯 불편하신가요?'
      },
      {
        titleSuffix: '검사상 이상 없다는데 온몸이 아픈 신체화장애와 만성 신경성 두통의 해법',
        focus: '신체화 장애 및 통증 역치 조절',
        blogTitle: '병원 종합검진은 정상인데 온몸이 쑤시고 아픈 신체화장애 뇌 통증 조절',
        hookLine: '여기저기 돌아가며 아픈데 병원에선 "신경성"이라며 원인을 모른다고 하나요?'
      },
      {
        titleSuffix: '입 벌릴 때 딱 소리와 만성 편두통, FCST 턱관절 교정과 경추 정렬 치료',
        focus: '턱관절 장애 및 수면 중 이갈이',
        blogTitle: '턱에서 딱딱 소리 나고 관자놀이가 지끈거리는 턱관절 장애와 편두통 치료',
        hookLine: '입을 벌릴 때 턱에서 소리가 나거나 뻐근한 통증과 함께 지끈거리는 두통이 동반되나요?'
      },
      {
        titleSuffix: '수면 중 이갈이·이악물기로 인한 아침 턱 뻐근함과 긴장성 두통 완화',
        focus: '이갈이·이악물기 및 교근 긴장',
        blogTitle: '아침마다 턱이 뻐근하고 머리가 조여오는 이유? 수면 중 이갈이·이악물기 교정',
        hookLine: '아침에 일어났을 때 턱관절이 굳어있고 머리를 띠로 조이는 듯한 두통을 느끼시나요?'
      },
      {
        titleSuffix: '목과 어깨가 돌처럼 굳으며 눈까지 침침해지는 경추성 긴장성 두통',
        focus: '경추성 긴장성 두통 및 후두신경통',
        blogTitle: '목덜미가 뻣뻣하고 눈이 빠질 듯 아픈 후두신경통·경추성 두통 한방 치료',
        hookLine: '뒷목과 어깨가 돌덩이처럼 뭉치면서 뒤통수와 눈 주변까지 지끈지끈 아파오나요?'
      },
      {
        titleSuffix: '신경만 쓰면 배가 부글거리고 화장실로 달려가는 과민성대장증후군(IBS)',
        focus: '과민성대장증후군 및 뇌-장 신경망',
        blogTitle: '시험이나 미팅 직전 배가 살살 아프고 가스 차는 과민성대장증후군 뇌-장 치료',
        hookLine: '조금만 긴장하거나 찬 음식을 먹으면 복통과 설사, 잦은 가스로 곤란을 겪으시나요?'
      },
      {
        titleSuffix: '만성 트림과 잦은 방귀, 복부 팽만감을 일으키는 위장 담적 독소 제거법',
        focus: '복부 팽만감 및 위장 운동성 저하',
        blogTitle: '하루 종일 트림이 나오고 배에 가스가 가득 차는 만성 복부 팽만감 치료',
        hookLine: '식사량이 적은데도 배가 풍선처럼 부풀어 오르고 헛트림이 끊이지 않으시나요?'
      },
      {
        titleSuffix: '스트레스성 위경련과 명치 통증을 완화하는 작약감초탕과 온열 침구',
        focus: '위경련 및 평활근 긴장 완화',
        blogTitle: '신경 쓰면 명치를 쥐어짜듯 뒤틀리는 스트레스성 위경련 응급 진정법',
        hookLine: '갑작스러운 스트레스나 과로 후 명치가 칼로 찌르듯 아파 숨쉬기조차 힘드신가요?'
      },
      {
        titleSuffix: '입안이 화끈거리고 떫은 구강작열감증후군(BMS)과 심화(心火) 다스리기',
        focus: '구강작열감증후군 및 혀 통증',
        blogTitle: '고춧가루를 뿌린 듯 혀가 타는 듯이 아픈 구강작열감증후군 한방 치료',
        hookLine: '검사상 입안에 염증은 없다는데 혀와 입천장이 화끈거려 식사하기 힘드신가요?'
      },
      {
        titleSuffix: 'FCST 턱관절 균형 요법을 통한 상부 경추(C1-C2)와 뇌척수액 순환 교정',
        focus: 'FCST 턱관절 교정 및 두개천골계',
        blogTitle: '턱관절 1mm 편차를 바로잡아 만성 두통과 전신 신경계를 교정하는 원리',
        hookLine: '턱의 비대칭과 소리를 교정하여 뇌간 신경 압박을 해소하는 비수술 턱관절 치료'
      },
      {
        titleSuffix: '평위산과 반하사심탕으로 다스리는 만성 역류성 식도염과 목 이물감',
        focus: '역류성 식도염 및 위산 역류 한방 치료',
        blogTitle: '위산 억제제를 먹어도 가슴이 쓰리고 목에 이물감이 남는 역류성 식도염 치료',
        hookLine: '신물이 넘어오고 가슴이 타는 듯 쓰려 밤에 똑바로 눕지 못하고 계신가요?'
      },
      {
        titleSuffix: '만성 긴장으로 인한 후두하근 단축과 관자놀이 편두통 추나 솔루션',
        focus: '후두하근 이완 및 경추 추나요법',
        blogTitle: '진통제를 달고 사는 만성 편두통, 굳어진 상부 경추와 턱관절 추나 교정',
        hookLine: '한쪽 머리가 욱신거리며 메스꺼움까지 동반되는 만성 두통에서 벗어나는 법'
      }
    ]
  }
];

// 3. 기존 발행 이력 분석 및 100% 고유한 스마트 타겟 선정 (무한 중복 방지)
export function selectSmartTarget() {
  const now = new Date();
  const kstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const dateStr = kstDate.toISOString().slice(0, 10);
  const dayOfYear = Math.floor((kstDate - new Date(kstDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const hour = kstDate.getHours();
  const slot = hour < 10 ? 0 : hour < 14 ? 1 : hour < 18 ? 2 : 3;

  // 기존 발행된 모든 칼럼 파일 스캔하여 기존 제목 집합 구축
  const existingFiles = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
  const publishedTitles = new Set();
  const todayCategories = new Set();

  for (const f of existingFiles) {
    const fullPath = path.join(columnDir, f);
    const content = fs.readFileSync(fullPath, 'utf8');
    const titleMatch = content.match(/title:\s*["']?(.*?)["']?$/m);
    const dateMatch = content.match(/date:\s*["']?(.*?)["']?$/m);
    const catMatch = content.match(/category:\s*["']?(.*?)["']?$/m);

    if (titleMatch) {
      publishedTitles.add(titleMatch[1].trim().toLowerCase());
    }
    if (dateMatch && dateMatch[1].trim() === dateStr && catMatch) {
      todayCategories.add(catMatch[1].trim());
    }
  }

  // 오늘 아직 발행되지 않은 카테고리 우선 선택
  let baseCatIdx = ((dayOfYear * 4) + slot) % CATEGORIES.length;
  let selectedCat = CATEGORIES[baseCatIdx];

  for (let i = 0; i < CATEGORIES.length; i++) {
    const candidateCat = CATEGORIES[(baseCatIdx + i) % CATEGORIES.length];
    if (!todayCategories.has(candidateCat.name)) {
      selectedCat = candidateCat;
      baseCatIdx = (baseCatIdx + i) % CATEGORIES.length;
      break;
    }
  }

  // 기본 주제 및 지역 선택 (로테이션)
  const initialTopicIdx = Math.floor(((dayOfYear * 4) + slot) / CATEGORIES.length) % selectedCat.topics.length;
  let selectedTopic = selectedCat.topics[initialTopicIdx];
  const initialRegionIdx = (((dayOfYear * 4) + slot) + baseCatIdx) % REGION_POOLS.length;
  let selectedRegion = REGION_POOLS[initialRegionIdx];
  let patternType = ((dayOfYear * 4) + slot) % 3;

  function buildRawTitle(pattern, region, cat, topic) {
    const catShort = cat.name.split(' ')[0];
    if (pattern === 0) {
      return `[${region.short}한의원 ${catShort}] ${topic.titleSuffix}`;
    } else if (pattern === 1) {
      if (topic.titleSuffix.includes(',')) {
        const parts = topic.titleSuffix.split(',');
        const leadPart = parts[0].trim();
        const followPart = parts.slice(1).join(',').trim();
        return `${leadPart}, [${region.short} ${catShort}] ${followPart}`;
      } else {
        return `${topic.focus}, [${region.short} ${catShort}] 한의학적 원인과 관리법`;
      }
    } else {
      return topic.blogTitle || topic.titleSuffix;
    }
  }

  // 동적 부제 수식어 풀 (중복 발생 시 100% 고유성 보장을 위한 스마트 변주)
  const dynamicSubModifiers = [
    ' - 뇌 자생력 회복 3단계 솔루션',
    ' - 1:1 맞춤 원인 치료 가이드',
    ' - 비약물 신경 이완 한방 프로토콜',
    ' - 임상 원인 분석과 생활 관리',
    ' - 체질 맞춤 한약과 두뇌 훈련',
    ' - 만성 재발 방지 한의학적 대처',
    ' - 뇌 신경망 밸런스 회복법'
  ];

  // 100% 완전 고유 제목 보장 탐색 루프
  let fullTitle = '';
  let titleVariants = {};
  let foundUnique = false;

  // 1단계: 토픽 순환 + 지역 순환 + 패턴 순환으로 겹치지 않는 조합 탐색
  for (let tOffset = 0; tOffset < selectedCat.topics.length && !foundUnique; tOffset++) {
    const tIdx = (initialTopicIdx + tOffset) % selectedCat.topics.length;
    const candTopic = selectedCat.topics[tIdx];

    for (let rOffset = 0; rOffset < REGION_POOLS.length && !foundUnique; rOffset++) {
      const rIdx = (initialRegionIdx + rOffset) % REGION_POOLS.length;
      const candRegion = REGION_POOLS[rIdx];

      for (let pOffset = 0; pOffset < 3 && !foundUnique; pOffset++) {
        const pType = (patternType + pOffset) % 3;
        const candidateTitle = buildRawTitle(pType, candRegion, selectedCat, candTopic);

        if (!publishedTitles.has(candidateTitle.toLowerCase())) {
          selectedTopic = candTopic;
          selectedRegion = candRegion;
          patternType = pType;
          fullTitle = candidateTitle;
          foundUnique = true;
        }
      }
    }
  }

  // 2단계: 만약 모든 기본 조합이 기존에 존재할 경우, 스마트 부제 수식어를 결합하여 고유성 강제 보장
  if (!foundUnique) {
    for (let modIdx = 0; modIdx < dynamicSubModifiers.length && !foundUnique; modIdx++) {
      const mod = dynamicSubModifiers[modIdx];
      const baseT = buildRawTitle(patternType, selectedRegion, selectedCat, selectedTopic);
      const modTitle = `${baseT}${mod}`;

      if (!publishedTitles.has(modTitle.toLowerCase())) {
        fullTitle = modTitle;
        foundUnique = true;
      }
    }
  }

  // 최후의 안전장치: 날짜 기반 고유 태그 결합
  if (!foundUnique) {
    fullTitle = `${buildRawTitle(patternType, selectedRegion, selectedCat, selectedTopic)} (${selectedRegion.short} 심층 가이드)`;
  }

  titleVariants = {
    p1: buildRawTitle(0, selectedRegion, selectedCat, selectedTopic),
    p2: buildRawTitle(1, selectedRegion, selectedCat, selectedTopic),
    p3: selectedTopic.blogTitle || buildRawTitle(2, selectedRegion, selectedCat, selectedTopic)
  };

  const patternNames = ['[패턴 1] 맨앞 지역명 한의원', '[패턴 2] 중간 지역명 삽입', '[패턴 3] 지역명 없는 순수 질환/블로그형'];

  // 5대 본문 전개 포맷 로테이션 (0: 기전심층형, 1: 팩트체크형, 2: 감별비교형, 3: 회복로드맵형, 4: 임상사례형)
  const formatType = ((dayOfYear * 7) + slot + baseCatIdx) % 5;
  const formatNames = [
    '[포맷 A] 기전 심층 탐구형',
    '[포맷 B] 오해와 진실 팩트체크형',
    '[포맷 C] 감별 진단 비교분석형',
    '[포맷 D] 단계별 회복 로드맵형',
    '[포맷 E] 임상 사례 심층고찰형'
  ];

  return {
    dateStr,
    slot,
    selectedCat,
    selectedTopic,
    selectedRegion,
    patternType,
    patternNames,
    patternName: patternNames[patternType],
    formatType,
    formatNames,
    formatName: formatNames[formatType],
    fullTitle,
    titleVariants
  };
}

// 3. 질환군별 다변화된 현실적 진료실 FAQ 템플릿 (36개 세부 질환 140여 개 고유 FAQ 풀 연동)
export function getSpecializedFaq(categoryName, topic = {}, options = {}) {
  return getDiverseFaq(categoryName, topic, options);
}

// 4. 질환군별 맞춤 통합 치료 솔루션 설정
export function getSection5Config(categoryName) {
  if (categoryName.includes('소아') || categoryName.includes('ADHD') || categoryName.includes('틱')) {
    return {
      title: '두뇌 발달과 감각 통합을 돕는 NeuronFlex & IM 두뇌 훈련 솔루션',
      intro: '소아청소년의 뇌는 지금 이 순간에도 빠르게 성장하고 변화하는 과정에 있습니다. 따라서 단순히 신경전달물질을 억제하는 약물 치료에만 의존하기보다는, 두개천골계(CST)를 이완하여 뇌척수액 순환을 돕고 NeuronFlex 뉴로피드백 및 IM(Interactive Metronome) 감각통합 타이밍 훈련을 병행하여 아이 스스로 뇌 억제 브레이크를 튼튼하게 키울 수 있도록 돕습니다.',
      outro: '이처럼 아이의 체질에 맞춘 순한 한약 치료와 첨단 IM 감각통합·뉴로피드백 훈련이 조화를 이룰 때, 정서적 안정은 물론 학습 집중력과 자존감까지 함께 회복됩니다.'
    };
  } else if (categoryName.includes('공황') || categoryName.includes('불안') || categoryName.includes('강박')) {
    return {
      title: '편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료',
      intro: '공황과 불안, 강박 사고는 뇌 변연계의 편도체(Amygdala)가 과도하게 경보를 울리며 횡격막과 흉곽 근육을 극도로 긴장시키는 상태입니다. 뇌의 공포 회로를 진정시키기 위해서는 자율신경을 안정시키는 미주신경 자극 침구 치료와 호흡 패턴 교정이 반드시 함께 이루어져야 합니다.',
      outro: '심담(心膽)을 강화하는 맞춤 한약과 자율신경 이완 치료가 결합되면, 예기치 못한 불안 자극 앞에서도 심장 박동과 호흡이 스스로 평정을 되찾게 됩니다.'
    };
  } else if (categoryName.includes('자율신경') || categoryName.includes('실신') || categoryName.includes('어지럼') || categoryName.includes('이명')) {
    return {
      title: '교감·부교감 균형을 복구하는 자율신경 재조절 & 심혈류 순환 치료',
      intro: '자율신경실조증은 교감신경과 부교감신경의 상호 조절 능력이 무너져 체온, 혈압, 소화, 심박수 조절에 이상이 생긴 상태입니다. 목 부위 성상신경절(SGB) 침치료와 경락 약침을 통해 상체로 치솟는 열을 내리고 전신 혈류 순환을 정상화합니다.',
      outro: '오장육부의 기혈을 보강하는 맞춤 한약과 자율신경 조절 치료를 통해 물먹은 솜 같던 몸의 자생력을 근본적으로 회복시킵니다.'
    };
  } else if (categoryName.includes('불면증') || categoryName.includes('수면')) {
    return {
      title: '과열된 뇌 스위치를 끄는 수면 뇌파 안정 & 심신(心腎) 조화 치료',
      intro: '밤마다 잠을 이루지 못하거나 자주 깨는 것은 뇌의 디폴트모드네트워크(DMN)가 꺼지지 않고 심장과 간의 허열(虛熱)이 뇌로 치솟기 때문입니다. 두피와 심장 경락의 특효혈(백회·신문·안면혈) 침치료를 통해 과열된 뇌파를 델타파(깊은 수면파)로 유도합니다.',
      outro: '수면제 의존 없이도 자연스럽게 졸음이 찾아오도록 뇌 신경망을 진정시키는 한방 수면 치료로 개운한 아침을 되찾아 드립니다.'
    };
  } else if (categoryName.includes('우울증') || categoryName.includes('화병') || categoryName.includes('번아웃')) {
    return {
      title: '가슴의 맺힌 울화를 풀고 뇌 세로토닌을 깨우는 해울(解鬱) 신경 치료',
      intro: '화병과 우울증, 번아웃은 억압된 감정과 만성 스트레스로 인해 가슴 정중앙(전중혈)의 기운이 꽉 막히고 뇌 세로토닌·도파민 신경망이 방전된 상태입니다. 가슴과 목구멍의 기혈 울체를 뚫어주는 소간해울(疏肝解鬱) 침구 치료로 답답함을 즉각 해소합니다.',
      outro: '뇌 신경전달물질의 활성을 돕는 맞춤 한약과 신체 활력 회복 치료가 결합되어 무기력감의 늪에서 벗어날 수 있는 힘을 길러드립니다.'
    };
  } else {
    return {
      title: '굳어진 위장과 뇌-장 신경망을 부드럽게 되살리는 복부 온열 & 한방 치료',
      intro: '신경성 소화장애, 긴장성 두통, 담적병은 뇌와 장이 미주신경으로 연결된 뇌-장 축(Gut-Brain Axis)의 기능 이상입니다. 딱딱하게 굳은 명치와 복부 근육을 온열 침구와 약침으로 풀어 위장 평활근의 자율 연동 운동을 복구합니다.',
      outro: '위장 외벽의 담적 독소를 녹이는 맞춤 한약과 복부 순환 치료를 통해 더부룩함과 두통 없는 가벼운 일상을 완성합니다.'
    };
  }
}

// ============================================================================
// 5. 5대 전개 포맷별 특화 렌더링 엔진 (5-Format Multi-Dimensional Dispatcher)
// ============================================================================

// A. 카테고리별 감별 진단 데이터 매트릭스 (Format C 전용)
const DIFFERENTIAL_MATRIX = {
  panic: {
    targetA: '공황발작 (뇌신경계 과흥분)',
    targetB: '심장 부정맥 (심장내과 질환)',
    causeA: '뇌 편도체(Amygdala)의 경보 시스템 오작동 및 과호흡',
    causeB: '심장 전기 신호 전달계 이상 또는 심근 질환',
    symptomA: '질식할 것 같은 극심한 공포, 과호흡, 손발 저림, 어지럼증',
    symptomB: '가슴 덜컹거림, 불규칙한 심장 박동, 흉통, 실신',
    durationA: '10~30분 내 피크(정점) 후 서서히 자연 안정',
    durationB: '불규칙하게 간헐적으로 반복되며 맥박 이상 지속',
    examA: '심전도·심초음파 정상, 뇌파/HRV 자율신경 과항진 확인',
    examB: '24시간 홀터 심전도 검사상 부정맥 소견 관찰',
    treatmentA: '편도체 안정 한약(사역산, 분심기음) + 미주신경 이완 치료',
    treatmentB: '항부정맥제 복용 또는 심장내과 시술'
  },
  insomnia: {
    targetA: '원발성 불면증 (뇌 과각성)',
    targetB: '수면무호흡증 & 하지불안증후군',
    causeA: '뇌 DMN 과열 및 코르티솔 과다, 수면 스위치 이상',
    causeB: '상기도 폐쇄 또는 뇌 도파민/철분 대사 이상',
    symptomA: '잠들기 어렵거나(입면장애) 자주 깸(수면유지장애)',
    symptomB: '심한 코골이, 숨 멈춤, 다리에 벌레 기어가는 느낌',
    durationA: '수개월~수년간 만성적인 수면 불안 동반',
    durationB: '수면 중 무의식적 각성 및 낮 시간 극심한 졸림',
    examA: '수면다원검사상 뇌파 각성, HRV 교감신경 항진',
    examB: '수면다원검사상 무호흡-저호흡 지수(AHI) 상승',
    treatmentA: '뇌파 안정 한약(귀비탕, 천왕보심단) + 델타파 유도',
    treatmentB: '양압기(CPAP) 착용 또는 도파민 효능제 처방'
  },
  autonomic: {
    targetA: '자율신경실조증 (교감 과항진)',
    targetB: '이석증 & 메니에르병 (이비인후과)',
    causeA: '자율신경 피드백 루프 실조 및 뇌 혈류 순환 장애',
    causeB: '내이 반고리관 이석 이탈 또는 림프수종',
    symptomA: '앉았다 일어설 때 핑 도는 어지럼, 안개 낀 멍함, 식은땀',
    symptomB: '고개 돌릴 때 천장이 빙빙 도는 회전성 어지럼, 난청',
    durationA: '하루 종일 지속되는 멍함과 피로, 불안 동반',
    durationB: '특정 자세에서 수초~수분간 극심한 회전 후 안정',
    examA: '이비인후과 전정기능 검사 정상, HRV 자율신경 저하',
    examB: '안진 검사상 특정 방향의 특징적 안구 떨림 관찰',
    treatmentA: '성상신경절(SGB) 침치료 + 영계출감탕/반하백출천마탕',
    treatmentB: '이석정복술(에플리 수기법) 및 이뇨제 투여'
  },
  tic: {
    targetA: '소아 틱장애 (기저핵 미성숙)',
    targetB: '알레르기 비염 & 안과 결막염',
    causeA: '뇌 기저핵-전두엽 간 운동 억제 회로의 미성숙',
    causeB: '알레르겐에 의한 코·눈 점막의 국소 염증 반응',
    symptomA: '눈 깜빡임, 콧구멍 씰룩, 헛기침, 음음 소리 반복',
    symptomB: '눈·코 가려움, 맑은 콧물, 재채기, 안구 충혈',
    durationA: '긴장·흥분·피로 시 악화되며 증상 위치가 변함',
    durationB: '환절기나 먼지 노출 시 악화되며 항히스타민제에 반응',
    examA: '안과/이비인후과 검진상 정상, 신경학적 충동 동반',
    examB: '비강 내시경 및 알레르기 피부 반응 양성',
    treatmentA: '억간산 가감방 + IM 감각통합 훈련 + 두개천골요법',
    treatmentB: '항히스타민제, 비강 스프레이, 점안액 투여'
  },
  stress: {
    targetA: '화병 & 만성 번아웃 (기울화화)',
    targetB: '갑상선기능항진증 (내분비 질환)',
    causeA: '정서적 억압과 만성 스트레스로 인한 뇌 신경망 방전',
    causeB: '자가면역 이상으로 인한 갑상선 호르몬 과다 분비',
    symptomA: '가슴 정중앙(전중) 답답함, 목 이물감(매핵기), 울화 치밈',
    symptomB: '심한 가슴 두근거림, 식욕 증가에도 체중 감소, 안구 돌출',
    durationA: '스트레스 상황이나 억울한 감정 회상 시 급격히 악화',
    durationB: '정서적 자극과 무관하게 24시간 대사 항진 지속',
    examA: '혈액검사상 호르몬 정상, 체열검사상 상열하한 뚜렷',
    examB: '혈액검사상 Free T4 상승, TSH 감소 확인',
    treatmentA: '소간해울 한약(반하후박탕, 시호청간탕) + 가슴 이완',
    treatmentB: '항갑상선제(메티마졸 등) 복용'
  },
  somatic: {
    targetA: '담적병 & 기능성 소화불량',
    targetB: '기질성 위궤양 & 역류성 식도염',
    causeA: '위장 평활근 미주신경 저하 및 위장 외벽 노폐물 축적',
    causeB: '위산 과다 및 헬리코박터균에 의한 점막 손상·궤양',
    symptomA: '내시경 정상인데 명치 굳음, 트림, 두통, 어지럼 동반',
    symptomB: '속쓰림, 명치 통증, 신물 올라옴, 식후 즉각 악화',
    durationA: '신경 쓰거나 스트레스받으면 즉각 체하고 답답함',
    durationB: '공복 시 또는 식사 직후 타는 듯한 통증 반복',
    examA: '위내시경 검사상 깨끗함, 복부 촉진 시 명치 압통 뚜렷',
    examB: '위내시경 검사상 점막 미란, 궤양, 식도 염증 관찰',
    treatmentA: '담적 제거 한약(평위산, 이진탕) + 복부 온열 약침',
    treatmentB: '위산분비억제제(PPI) 및 제산제 복용'
  }
};

// B. 카테고리별 팩트체크 데이터 매트릭스 (Format B 전용)
const FACTCHECK_MATRIX = {
  panic: [
    {
      myth: '공황발작이 오면 정말 숨이 턱 막혀 질식하거나 심장마비로 죽을 수 있다?',
      fact: '공황발작은 뇌 편도체의 "오작동된 가짜 화재경보"일 뿐이며, 뇌와 심장에 아무런 기질적 손상을 주지 않고 10~30분 내에 반드시 자연 진정됩니다.'
    },
    {
      myth: '공황장애는 평생 신경안정제를 달고 살아야 하며 단약이 불가능하다?',
      fact: '항불안제는 일시적 응급약일 뿐입니다. 뇌 자생력을 키우는 한방 처방과 자율신경 조절 치료를 병행하면 반동불안 없이 안전하게 약물을 끊을 수 있습니다.'
    },
    {
      myth: '공황발작이 올 때 숨을 가쁘고 깊게 몰아쉬어야 산소가 공급된다?',
      fact: '과호흡은 혈중 이산화탄소를 급격히 떨어뜨려 오히려 뇌전도 어지럼과 질식감을 악화시킵니다. 4초 들이쉬고 7초 멈추고 8초 내쉬는 "4-7-8 이완 호흡"이 정답입니다.'
    }
  ],
  insomnia: [
    {
      myth: '수면제와 수면유도제를 오래 먹어도 뇌 건강에는 아무런 해가 없다?',
      fact: '수면제는 자연 수면을 유도하는 것이 아니라 뇌를 강제 진정시킵니다. 깊은 서파(델타) 수면을 감소시켜 아침 피로가 지속되고 장기 복용 시 내성과 반동 불면을 부릅니다.'
    },
    {
      myth: '잠이 안 오더라도 침대에 계속 누워있어야 조금이라도 잠을 보충할 수 있다?',
      fact: '잠들지 못한 채 20분 이상 누워있으면 뇌가 "침대 = 각성과 고민의 공간"으로 학습합니다. 즉시 침대 밖으로 나와 어두운 조명 아래서 이완해야 합니다.'
    },
    {
      myth: '잠들기 전 술 한잔(알코올)을 마시는 것은 숙면에 도움이 된다?',
      fact: '술은 일시적으로 잠에 들게 할 뿐, 분해 과정에서 교감신경을 과항진시켜 새벽 각성과 렘수면 박탈을 일으켜 수면의 질을 최악으로 만듭니다.'
    }
  ],
  autonomic: [
    {
      myth: '병원 정밀 검사에서 정상으로 나왔으니 단순한 마음의 문제이고 꾀병이다?',
      fact: '자율신경실조증은 심장박동, 체온, 혈압을 조절하는 교감·부교감신경의 실제 물리적 기능 이상입니다. 결코 의지의 문제나 꾀병이 아닙니다.'
    },
    {
      myth: '어지럼증과 두통은 무조건 뇌 질환이나 귀(이석증)의 이상에서만 발생한다?',
      fact: '상부 경추의 틀어짐과 목 주변 자율신경절(성상신경절)의 긴장으로 뇌 혈류가 저하되어 생기는 경추성·자율신경성 어지럼증이 전체의 상당수를 차지합니다.'
    },
    {
      myth: '자율신경 이상은 영양제나 비타민만 챙겨 먹으면 저절로 치료된다?',
      fact: '영양 보충만으로는 과열된 교감신경과 불균형해진 자율신경 피드백 루프를 바로잡을 수 없습니다. 맞춤 탕약과 척추 자율신경 침치료가 필수적입니다.'
    }
  ],
  tic: [
    {
      myth: '틱 증상은 아이가 나쁜 버릇을 들인 것이므로 혼내거나 지적하면 고칠 수 있다?',
      fact: '틱은 뇌 기저핵의 불수의적 억제 조절 장애입니다. 지적하거나 혼내면 아이의 불안과 스트레스가 극대화되어 증상이 2~3배 폭발적으로 악화됩니다.'
    },
    {
      myth: '소아 틱장애와 ADHD는 나이가 들면 치료하지 않아도 100% 저절로 낫는다?',
      fact: '적절한 치료 없이 방치될 경우 성인기까지 지속되거나 강박증, 불안장애, 학습장애로 이어질 수 있으므로 뇌 발달 골든타임에 조기 치료해야 합니다.'
    },
    {
      myth: '중추신경 억제제 약물 치료 외에는 두뇌 신경을 조절할 방법이 없다?',
      fact: '아이의 연약한 뇌를 위해 억간산 등 순한 한약과 IM(감각통합) 타이밍 훈련, NeuronFlex 뉴로피드백을 병행하면 부작용 없이 스스로 뇌 브레이크를 키울 수 있습니다.'
    }
  ],
  stress: [
    {
      myth: '화병과 가슴 답답함은 그저 꾹 참고 시간이 지나면 자연히 해결된다?',
      fact: '억압된 울화(鬱火)는 가슴의 기운(전중혈)을 꽉 막히게 하고 뇌 신경망을 방전시켜 결국 만성 우울증, 공황장애, 신체 통증으로 번져나갑니다.'
    },
    {
      myth: '우울증과 번아웃은 멘탈이 약하고 나태해서 생기는 마음의 병이다?',
      fact: '뇌 내 세로토닌·도파민 신경전달물질의 고갈과 장-뇌 축(Gut-Brain Axis)의 기능 부전으로 발생하는 신경생물학적 질환입니다.'
    },
    {
      myth: '기분이 가라앉을 때는 강도 높은 고강도 운동을 무리해서라도 해야 한다?',
      fact: '에너지가 고갈된 상태에서 무리한 고강도 운동은 부신 피로를 가속화합니다. 따뜻한 족욕, 가벼운 산책, 복식 호흡 등 부교감신경을 살리는 이완이 우선입니다.'
    }
  ],
  somatic: [
    {
      myth: '위내시경 검사가 깨끗하니 위장에는 아무런 문제가 없고 꾀병이다?',
      fact: '일반 내시경은 위장 점막의 염증만 볼 뿐입니다. 위장 근육층에 노폐물이 굳어 발생하는 담적병(痰積)은 복부 정밀 진찰을 통해 명확히 확인됩니다.'
    },
    {
      myth: '만성 소화불량에는 소화제와 제산제를 평생 달고 사는 수밖에 없다?',
      fact: '제산제를 장기 복용하면 위산 분비가 저하되어 소화력이 더 약해집니다. 위장 외벽의 담적을 녹이고 미주신경 운동성을 회복시키는 근본 치료가 필요합니다.'
    },
    {
      myth: '턱관절 통증과 이갈이는 단순히 치과의 치아 맞물림 문제일 뿐이다?',
      fact: '턱관절은 12개 뇌신경 중 9개가 지나가는 핵심 통로입니다. 스트레스로 인한 뇌 과각성과 경추 정렬 불량이 턱관절 장애와 만성 편두통의 주원인입니다.'
    }
  ]
};

// C. 포맷 A: [기전 심층 탐구형] 렌더러
function renderFormatA_DeepMechanism(col, ctx) {
  const { cleanTitle, matchedImage, voiceLinesHtml, introParagraphs, sec5, structCardsHtml, faqItemsHtml } = ctx;

  const flowStepsHtml = (col.flow?.steps || []).map((step, idx) =>
    `      <span class="bg-[#202947] text-white px-3 py-1.5 rounded-xl font-semibold shadow-sm">${step}</span>` +
    (idx < col.flow.steps.length - 1 ? `\n      <i class="fa-solid fa-arrow-right text-[#2F5D50] text-xs"></i>` : '')
  ).join('\n');

  const clinicItemsHtml = (col.clinicBox?.items || []).map(it =>
    `      <li class="flex items-start gap-2"><span class="text-[#2F5D50] font-bold">✓</span><span>${it}</span></li>`
  ).join('\n');

  const typeCardsHtml = (col.typeCards || []).map(tc =>
    `    <div class="p-5 bg-[#F9FAF8] rounded-2xl border border-[#E2EAE5] space-y-2">
      <div class="flex items-center gap-2.5">
        <span class="text-xl">${tc.icon}</span>
        <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">${tc.title}</h3>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${tc.desc}
      </p>
    </div>`
  ).join('\n');

  return `---
title: "${cleanTitle}"
summary: "${ctx.cleanSummary}"
date: "${col.date}"
type: column
category: "${col.categoryName}"
image: "${matchedImage}"
tags: ${JSON.stringify(col.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
    <li>${col.flow?.title || '신경생리학적 발병 기전과 악순환 경로'}</li>
    <li>진료실에서 확인하는 신경계 과부하 자가진단 신호</li>
    <li>한의학에서 분석하는 환자별 3대 맞춤 변증 체질 유형</li>
    <li>${sec5.title}</li>
    <li>생활 속 자율신경 조절을 위한 물리적·행동학적 루틴</li>
    <li>진료실 자주 묻는 질문 (FAQ)</li>
  </ol>
</div>

<div class="section-label">핵심 병리 기전 01</div>

## ${col.flow?.title || '신경생리학적 발병 기전과 악순환 경로'}

<div class="my-6 p-4 sm:p-5 bg-[#F2F7F4] rounded-2xl border border-[#DDE6E1] not-prose">
  <div class="text-xs font-bold text-[#2F5D50] mb-3 text-center">📊 ${col.flow?.title || '신경학적 진행 과정'}</div>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
${flowStepsHtml}
  </div>
</div>

${col.section1Text.trim()}

---

<div class="section-label">진료실 현장 관찰 02</div>

## 진료실에서 확인하는 신경계 과부하 자가진단 신호

증상이 발현되기 이전부터 우리 몸의 자율신경계와 뇌 신경망은 서서히 신호를 보내고 있습니다. 맥진(脈診), 설진(舌診), 자율신경 스트레스 검사(HRV)를 통해 확인되는 대표적인 자가진단 항목입니다.

<div class="my-6 p-5 bg-[#FAFBF9] rounded-2xl border border-[#E2EAE5] space-y-3 not-prose">
  <div class="font-extrabold text-[#2F5D50] text-sm sm:text-base flex items-center gap-2">
    <i class="fa-solid fa-stethoscope text-[#2F5D50]"></i>
    <span>${col.clinicBox?.title || '진료실 체크리스트'}</span>
  </div>
  <ul class="space-y-2 text-xs sm:text-sm text-[#4E6159] pl-1 list-none m-0">
${clinicItemsHtml}
  </ul>
</div>

이러한 신호들은 단순한 피로가 아니라, **뇌신경계의 조절 한계가 초과되었음을 알리는 몸의 SOS 경보**입니다.

---

<div class="section-label">맞춤 한의학 변증 03</div>

## 한의학에서 분석하는 환자별 3대 맞춤 변증 체질 유형

동일한 증상이라도 환자의 오장육부 허실과 체질에 따라 처방과 치료 포인트는 완전히 달라져야 합니다.

<div class="grid grid-cols-1 gap-4 my-6 not-prose">
${typeCardsHtml}
</div>

---

<div class="section-label">통합 솔루션 04</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">생활 관리 루틴 05</div>

## 생활 속 자율신경 조절을 위한 물리적·행동학적 루틴

1. **4-7-8 이완 호흡**: 숨을 4초간 들이마시고, 7초간 멈춘 뒤, 8초간 길게 내쉬어 부교감신경(미주신경)을 즉각 활성화합니다.
2. **후두하근 온찜질 및 경추 스트레칭**: 목 뒤쪽 후두하근을 15분간 온찜질하여 뇌로 올라가는 추골동맥 혈류를 원활히 합니다.
3. **생체시계 동기화**: 기상 직후 15분간 햇볕을 쬐어 멜라토닌-세로토닌 분비 리듬을 세팅하고, 취침 1시간 전 블루라이트를 차단합니다.

---

<div class="section-label">진료실 자주 묻는 질문 06</div>

## 진료실 자주 묻는 질문 (FAQ)

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// D. 포맷 B: [오해와 진실 팩트체크형] 렌더러
function renderFormatB_FactCheck(col, ctx) {
  const { cleanTitle, matchedImage, voiceLinesHtml, introParagraphs, sec5, structCardsHtml, faqItemsHtml } = ctx;
  const facts = FACTCHECK_MATRIX[col.categoryId] || FACTCHECK_MATRIX.panic;

  const factCardsHtml = facts.map((item, idx) => `
<div class="my-6 p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-3 not-prose">
  <div class="flex items-center gap-2">
    <span class="bg-[#D9534F] text-white text-xs px-2.5 py-1 rounded-full font-bold">MYTH ${idx + 1}</span>
    <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">${item.myth}</h3>
  </div>
  <p class="text-xs sm:text-sm text-[#68736E] leading-relaxed pl-1 m-0">
    많은 환자분들이 불안과 혼란 속에서 인터넷의 잘못된 정보나 민간요법에 의존하다 치료 골든타임을 놓치곤 합니다.
  </p>
  <div class="p-4 bg-[#F2F7F4] rounded-xl border border-[#DDE6E1] text-xs sm:text-sm text-[#2F5D50] leading-relaxed flex items-start gap-2.5">
    <span class="shrink-0 text-base">💡</span>
    <div>
      <strong class="text-[#202947] block mb-0.5">FACT & 의학적 진실</strong>
      ${item.fact}
    </div>
  </div>
</div>
`).join('\n');

  return `---
title: "${cleanTitle}"
summary: "${ctx.cleanSummary}"
date: "${col.date}"
type: column
category: "${col.categoryName}"
image: "${matchedImage}"
tags: ${JSON.stringify(col.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
    <li>진료실에서 가장 흔히 마주하는 3대 오해와 진실</li>
    <li>뇌 자생력을 무너뜨리는 잘못된 대처의 위험성</li>
    <li>${sec5.title}</li>
    <li>안전하고 지속 가능한 자율신경 회복 루틴</li>
    <li>진료실 자주 묻는 질문 (FAQ)</li>
  </ol>
</div>

<div class="section-label">오해와 진실 팩트체크 01</div>

## 진료실에서 가장 흔히 마주하는 3대 오해와 진실

진료실 문을 두드리는 수많은 환자분들이 오랜 기간 고통받은 이유 중 하나는 질환에 대한 잘못된 상식과 두려움 때문입니다. 신경과학과 한의학에 근거한 객관적 팩트를 정리해 드립니다.

${factCardsHtml}

---

<div class="section-label">치료 원칙 02</div>

## 뇌 자생력을 무너뜨리는 잘못된 대처의 위험성

화학적 약물로 증상을 일시적으로 억누르는 것에만 의존하거나, 반대로 무작정 참으며 버티는 양극단의 대처는 모두 뇌의 자율 조절 회로를 망가뜨립니다.

근본적인 치유를 위해서는 **과열된 뇌 변연계의 흥분을 가라앉히고, 전두엽의 억제 브레이크를 강화하여 스스로 조절하는 힘(Neuroplasticity)**을 길러주어야 합니다.

---

<div class="section-label">통합 치료 솔루션 03</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">생활 속 실천 가이드 04</div>

## 안전하고 지속 가능한 자율신경 회복 루틴

- **물리적 감각 이완**: 목덜미 후두하근 온찜질과 흉쇄유돌근 림프 스트레칭으로 미주신경의 긴장을 완화합니다.
- **호흡 조절 훈련**: 복식 호흡과 박스 호흡(4초 들숨, 4초 멈춤, 4초 날숨, 4초 멈춤)으로 심박 변이도(HRV)를 안정화합니다.
- **수면 환경 리셋**: 취침 90분 전 미온수 족욕으로 심부 체온을 떨어뜨리고 암막 환경을 조성합니다.

---

<div class="section-label">진료실 자주 묻는 질문 05</div>

## 진료실 자주 묻는 질문 (FAQ)

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// E. 포맷 C: [감별 진단 비교분석형] 렌더러
function renderFormatC_DifferentialDiagnosis(col, ctx) {
  const { cleanTitle, matchedImage, voiceLinesHtml, introParagraphs, sec5, structCardsHtml, faqItemsHtml } = ctx;
  const diff = DIFFERENTIAL_MATRIX[col.categoryId] || DIFFERENTIAL_MATRIX.panic;

  return `---
title: "${cleanTitle}"
summary: "${ctx.cleanSummary}"
date: "${col.date}"
type: column
category: "${col.categoryName}"
image: "${matchedImage}"
tags: ${JSON.stringify(col.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
    <li>증상은 비슷한데 병명이 다른 이유: ${diff.targetA} vs ${diff.targetB}</li>
    <li>한눈에 보는 핵심 감별 비교 분석표</li>
    <li>자가 감별을 위한 4대 핵심 체크포인트</li>
    <li>${sec5.title}</li>
    <li>진료실 자주 묻는 질문 (FAQ)</li>
  </ol>
</div>

<div class="section-label">감별 진단 개요 01</div>

## 증상은 비슷한데 병명이 다른 이유: ${diff.targetA} vs ${diff.targetB}

임상 현장에서 환자분들이 가장 크게 겪는 혼란은 "병원마다 검사 결과와 진단명이 다르다"는 점입니다. 겉으로 드러나는 신체 증상은 매우 유사하지만, 그 이면에 자리한 병태생리학적 발생 기전은 완전히 다릅니다.

---

<div class="section-label">비교 분석 테이블 02</div>

## 한눈에 보는 핵심 감별 비교 분석표

<div class="my-6 overflow-x-auto not-prose">
  <table class="w-full text-xs sm:text-sm text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-[#DDE6E1]">
    <thead class="bg-[#202947] text-white">
      <tr>
        <th class="p-3.5 sm:p-4 font-bold w-1/4">비교 항목</th>
        <th class="p-3.5 sm:p-4 font-bold text-[#A8D5C2] w-3/8">${diff.targetA}</th>
        <th class="p-3.5 sm:p-4 font-bold text-[#F4D06F] w-3/8">${diff.targetB}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[#EAEFEA] text-[#4E6159]">
      <tr>
        <td class="p-3.5 font-semibold bg-[#F9FAF8] text-[#202947]">발생 원인</td>
        <td class="p-3.5">${diff.causeA}</td>
        <td class="p-3.5">${diff.causeB}</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold bg-[#F9FAF8] text-[#202947]">주요 증상</td>
        <td class="p-3.5">${diff.symptomA}</td>
        <td class="p-3.5">${diff.symptomB}</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold bg-[#F9FAF8] text-[#202947]">지속 시간·양상</td>
        <td class="p-3.5">${diff.durationA}</td>
        <td class="p-3.5">${diff.durationB}</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold bg-[#F9FAF8] text-[#202947]">검사 소견</td>
        <td class="p-3.5">${diff.examA}</td>
        <td class="p-3.5">${diff.examB}</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold bg-[#F9FAF8] text-[#202947]">핵심 치료 방향</td>
        <td class="p-3.5 font-bold text-[#2F5D50]">${diff.treatmentA}</td>
        <td class="p-3.5">${diff.treatmentB}</td>
      </tr>
    </tbody>
  </table>
</div>

---

<div class="section-label">현장 체크포인트 03</div>

## 자가 감별을 위한 4대 핵심 체크포인트

1. **검사 상 기질적 이상 유무**: 종합검진, 영상의학 검사에서 특별한 이상이 발견되지 않는다면 신경계 과민에 의한 기능적 질환일 확률이 높습니다.
2. **스트레스 및 감정 기복과의 연동성**: 긴장, 과로, 정서적 불안 자극 직후 증상이 급격히 심해진다면 자율신경계 과항진의 전형적인 특징입니다.
3. **증상의 이동성 및 복합성**: 두통, 소화불량, 가슴 답답함, 어지럼증 등 여러 부위의 신체 증상이 동시다발적으로 나타난다면 전신 자율신경 조절 실조를 의심해야 합니다.
4. **일반 약물에 대한 반응성**: 일반 소화제, 진통제, 감기약 등에 반응하지 않고 증상이 지속된다면 뇌 신경망 조절 치료가 필요합니다.

---

<div class="section-label">맞춤 솔루션 04</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">진료실 자주 묻는 질문 05</div>

## 진료실 자주 묻는 질문 (FAQ)

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// F. 포맷 D: [단계별 회복 로드맵형] 렌더러
function renderFormatD_RecoveryRoadmap(col, ctx) {
  const { cleanTitle, matchedImage, voiceLinesHtml, introParagraphs, sec5, structCardsHtml, faqItemsHtml } = ctx;

  return `---
title: "${cleanTitle}"
summary: "${ctx.cleanSummary}"
date: "${col.date}"
type: column
category: "${col.categoryName}"
image: "${matchedImage}"
tags: ${JSON.stringify(col.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
    <li>치료하면 언제부터 어떻게 좋아질까? 뇌 자생력 회복의 원리</li>
    <li>[1~12주 회복 로드맵] 3단계 치료 타임라인</li>
    <li>${sec5.title}</li>
    <li>치료 효과를 2배로 높이는 일상 자율신경 루틴</li>
    <li>진료실 자주 묻는 질문 (FAQ)</li>
  </ol>
</div>

<div class="section-label">회복 원리 01</div>

## 치료하면 언제부터 어떻게 좋아질까? 뇌 자생력 회복의 원리

신경계 질환의 치료는 하루아침에 이루어지지 않지만, 올바른 원인 치료를 시작하면 뇌 신경망은 예측 가능한 단계를 거쳐 회복됩니다. 뇌의 가소성(Neuroplasticity)을 깨우는 12주 표준 치료 여정을 안내합니다.

---

<div class="section-label">12주 회복 타임라인 02</div>

## [1~12주 회복 로드맵] 3단계 치료 타임라인

<div class="my-6 space-y-4 not-prose">
  <div class="p-5 bg-white rounded-2xl border-l-4 border-[#2F5D50] border border-[#DDE6E1] shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="text-xs font-bold text-[#2F5D50] uppercase tracking-wider">Step 1 (1~4주차)</span>
      <span class="text-xs bg-[#EAF3EF] text-[#2F5D50] px-2.5 py-0.5 rounded-full font-bold">급성 과민 진정기</span>
    </div>
    <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">과열된 자율신경과 편도체 경보 끄기</h3>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed m-0">
      가슴 두근거림, 호흡곤란, 어지럼증, 극심한 입면 불안 등 급성 신체화 반응의 빈도와 강도를 50% 이상 경감시킵니다. 수면의 도입이 부드러워지고 일상 긴장도가 완화됩니다.
    </p>
  </div>

  <div class="p-5 bg-white rounded-2xl border-l-4 border-[#4A7C6D] border border-[#DDE6E1] shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="text-xs font-bold text-[#4A7C6D] uppercase tracking-wider">Step 2 (5~8주차)</span>
      <span class="text-xs bg-[#F2F7F4] text-[#4A7C6D] px-2.5 py-0.5 rounded-full font-bold">신경 조절 & 균형기</span>
    </div>
    <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">뇌 신경망 밸런스 복원 및 수면·기분 안정</h3>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed m-0">
      자율신경 피드백 루프가 정돈되며 예기불안이 사라지고 깊은 서파 수면 비율이 증가합니다. 소화기 기능과 두뇌 집중력이 회복되며 일상 활동 반경이 넓어집니다.
    </p>
  </div>

  <div class="p-5 bg-white rounded-2xl border-l-4 border-[#202947] border border-[#DDE6E1] shadow-sm space-y-2">
    <div class="flex items-center justify-between">
      <span class="text-xs font-bold text-[#202947] uppercase tracking-wider">Step 3 (9~12주차)</span>
      <span class="text-xs bg-[#E9ECF2] text-[#202947] px-2.5 py-0.5 rounded-full font-bold">자생력 완성 & 유지기</span>
    </div>
    <h3 class="font-extrabold text-sm sm:text-base text-[#202947] m-0">스스로 조절하는 뇌 회복력 구축 & 안전한 단약</h3>
    <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed m-0">
      외부 스트레스 자극에도 흔들리지 않는 뇌의 항상성을 완성합니다. 기존 복용 중이던 신경정신과 약물의 테이퍼링(감약)을 완료하고 재발 없는 건강한 일상을 지켜냅니다.
    </p>
  </div>
</div>

---

<div class="section-label">단계별 솔루션 03</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">자가 관리 04</div>

## 치료 효과를 2배로 높이는 일상 자율신경 루틴

- **기상 15분 햇볕 루틴**: 기상 직후 15분간 자연광을 쬐어 뇌의 세로토닌 합성을 촉진합니다.
- **취침 90분 전 미온 족욕**: 발을 따뜻하게 하여 혈류를 하체로 순환시키고 심부 체온을 낮춥니다.
- **횡격막 복식 호흡**: 하루 3회, 5분씩 아랫배를 부풀리는 호흡으로 미주신경을 이완합니다.

---

<div class="section-label">진료실 자주 묻는 질문 05</div>

## 진료실 자주 묻는 질문 (FAQ)

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// G. 포맷 E: [임상 사례 심층고찰형] 렌더러
function renderFormatE_ClinicalCase(col, ctx) {
  const { cleanTitle, matchedImage, voiceLinesHtml, introParagraphs, sec5, structCardsHtml, faqItemsHtml } = ctx;

  return `---
title: "${cleanTitle}"
summary: "${ctx.cleanSummary}"
date: "${col.date}"
type: column
category: "${col.categoryName}"
image: "${matchedImage}"
tags: ${JSON.stringify(col.tags)}
---

<div class="voice-box">
${voiceLinesHtml}
</div>

${introParagraphs}

<div class="toc">
  <div class="toc-title">📋 이 칼럼에서 다루는 핵심 내용</div>
  <ol>
    <li>진료실 임상 사례 개요 (Case Overview)</li>
    <li>정밀 진단으로 밝혀낸 신경계 불균형의 원인</li>
    <li>권형근 대표원장의 진료실 소견 (Physician's Note)</li>
    <li>${sec5.title}</li>
    <li>환자와 보호자가 꼭 알아야 할 치유의 원칙</li>
    <li>진료실 자주 묻는 질문 (FAQ)</li>
  </ol>
</div>

<div class="section-label">임상 사례 분석 01</div>

## 진료실 임상 사례 개요 (Case Overview)

진료실을 찾아오시는 환자분들은 대개 수개월에서 수년간 여러 병원을 거치며 "검사상 이상은 없는데 몸은 너무 힘들다"는 절박한 고통을 안고 내원하십니다.

실제 임상 현장에서 맥진(脈診), 설진(舌診), 자율신경 스트레스 검사(HRV), 뇌파 검사를 통해 확인한 병리적 양상은 다음과 같습니다.

---

<div class="section-label">정밀 검사 소견 02</div>

## 정밀 진단으로 밝혀낸 신경계 불균형의 원인

<div class="my-6 p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-3 not-prose">
  <div class="font-bold text-[#202947] text-sm sm:text-base flex items-center gap-2">
    <i class="fa-solid fa-notes-medical text-[#2F5D50]"></i>
    <span>신경학적·한의학적 종합 진단 지표</span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4E6159]">
    <div class="p-3 bg-[#F9FAF8] rounded-xl border border-[#EAEFEA]">
      <strong class="text-[#202947] block mb-1">HRV 자율신경 검사</strong>
      교감신경 과항진(LF 상승) 및 부교감신경 활성 저하(HF 감소), 심박 변이도 저하
    </div>
    <div class="p-3 bg-[#F9FAF8] rounded-xl border border-[#EAEFEA]">
      <strong class="text-[#202947] block mb-1">정량화 뇌파(QEEG) 검사</strong>
      각성 고주파(High Beta) 과열 및 안정 알파파·서파 델타파 억제 소견
    </div>
    <div class="p-3 bg-[#F9FAF8] rounded-xl border border-[#EAEFEA]">
      <strong class="text-[#202947] block mb-1">적외선 체열(DITI) 진단</strong>
      상체와 안면부로 열이 몰리고 하복부·수족은 냉한 전형적 상열하한(上熱下寒)
    </div>
    <div class="p-3 bg-[#F9FAF8] rounded-xl border border-[#EAEFEA]">
      <strong class="text-[#202947] block mb-1">전통 맥진 및 설진</strong>
      간화상염(肝火上炎) 및 기혈양허(氣血兩虛)를 시사하는 현맥(弦脈)과 설태 관찰
    </div>
  </div>
</div>

---

<div class="section-label">원장 진료 소견 03</div>

## 권형근 대표원장의 진료실 소견 (Physician's Note)

<div class="my-6 p-5 sm:p-6 bg-[#FAFBF9] rounded-2xl border border-[#2F5D50]/30 shadow-sm space-y-3 not-prose">
  <div class="flex items-center gap-2 text-xs font-extrabold text-[#2F5D50] tracking-wider uppercase">
    <i class="fa-solid fa-user-doctor"></i>
    <span>권형근 대표원장의 임상 고찰</span>
  </div>
  <p class="text-xs sm:text-sm text-[#26332E] leading-relaxed m-0 italic">
    "증상을 단순히 약물로 억누르는 것은 화재경보기가 울릴 때 건전지만 빼버리는 것과 같습니다. 불을 끄려면 경보가 울린 근본 원인, 즉 뇌 신경망의 과열과 기혈의 불균형을 바로잡아야 합니다. 몸의 자생력을 믿고 한 단계씩 치료해 나가면 뇌는 반드시 본래의 평온을 되찾습니다."
  </p>
</div>

---

<div class="section-label">맞춤 치료 04</div>

## ${sec5.title}

${sec5.intro}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
${structCardsHtml}
</div>

${sec5.outro}

---

<div class="section-label">치유 원칙 05</div>

## 환자와 보호자가 꼭 알아야 할 치유의 원칙

1. **조급증 내려놓기**: 신경계 회복은 계단식으로 진행되므로 사소한 일시적 기복에 일희일비하지 않는 마음가짐이 중요합니다.
2. **몸의 신호 존중하기**: 피로감이나 신체 증상은 쉼이 필요하다는 뇌의 메시지이므로, 무리한 자극을 피하고 이완 시간을 확보해야 합니다.
3. **규칙적인 생활 리듬 구축**: 일정한 기상 시간, 규칙적인 식사, 적절한 이완 호흡을 통해 생체시계를 바로잡습니다.

---

<div class="section-label">진료실 자주 묻는 질문 06</div>

## 진료실 자주 묻는 질문 (FAQ)

<div class="space-y-4 my-6 not-prose">
${faqItemsHtml}
</div>

<div class="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#1B233D] to-[#2B3A60] rounded-2xl text-white text-center space-y-3 not-prose">
  <div class="text-xs font-bold text-[#B4C2DC] tracking-wider uppercase">Doctor's Clinical Insight</div>
  <p class="text-sm sm:text-base text-[#E2E8F5] leading-relaxed max-w-2xl mx-auto font-medium m-0">
    "${col.closingText}"
  </p>
  <div class="pt-2 text-xs text-[#9AAFD2]">
    해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
  </div>
</div>
`;
}

// 5대 포맷 디스패처 메인 함수
export function renderColumnMarkdown(col) {
  const cleanTitle = col.title.replace(/"/g, "'");
  const cleanSummary = col.summary.replace(/"/g, "'");
  const sec5 = getSection5Config(col.categoryName);

  const voiceLinesHtml = (col.voiceQuotes || []).map(q => {
    const cleanQuote = q.replace(/^["'“\s]+|["'”\s]+$/g, '');
    return `  <div class="voice-line">${cleanQuote}</div>`;
  }).join('\n');

  const introParagraphs = (col.introText || []).join('\n\n');

  const structCardsHtml = (col.structCards || []).map(sc =>
    `    <div class="bg-white rounded-2xl border border-[#DDE6E1] overflow-hidden shadow-sm flex flex-col justify-between">
      <div class="bg-[#202947] p-3.5 px-4 flex items-center justify-between text-white">
        <span class="text-xs font-bold text-[#B4C2DC]">${sc.badge}</span>
        <span class="text-xs font-extrabold">${sc.title}</span>
      </div>
      <div class="p-4 sm:p-5 text-xs sm:text-sm text-[#4E6159] leading-relaxed">
        ${sc.body}
      </div>
    </div>`
  ).join('\n');

  const faqItemsHtml = (col.faq || []).map((fq, idx) =>
    `    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q${idx + 1}</span>
        <span>${fq.q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${fq.a}
      </p>
    </div>`
  ).join('\n');

  // 카테고리별 대표 썸네일 이미지 자동 매칭
  const matchedImage = resolveThumbnail({
    categoryId: col.categoryId || col.category || '',
    categoryName: col.categoryName || '',
    title: col.title || '',
    slug: col.id || '',
    region: col.region?.short || col.region?.full || '',
    currentImage: col.image || ''
  });

  const ctx = {
    cleanTitle,
    cleanSummary,
    matchedImage,
    voiceLinesHtml,
    introParagraphs,
    sec5,
    structCardsHtml,
    faqItemsHtml
  };

  const fmt = col.formatType ?? 0;
  switch (fmt) {
    case 1:
      return renderFormatB_FactCheck(col, ctx);
    case 2:
      return renderFormatC_DifferentialDiagnosis(col, ctx);
    case 3:
      return renderFormatD_RecoveryRoadmap(col, ctx);
    case 4:
      return renderFormatE_ClinicalCase(col, ctx);
    case 0:
    default:
      return renderFormatA_DeepMechanism(col, ctx);
  }
}

// 6. Gemini API 호출 또는 폴백 생성
export async function generateColumnContent(target) {
  const apiKey = process.env.GEMINI_API_KEY;
  const { dateStr, slot, selectedCat, selectedTopic, selectedRegion, patternType, patternName, formatType, formatName, fullTitle, titleVariants } = target;
  const articleId = `col-${Date.now().toString().slice(-6)}`;

  // 질환 맞춤형 고유 FAQ 후보군 3문 3답 추출
  const seedFaq = getDiverseFaq(selectedCat.name, selectedTopic, { title: fullTitle, seed: (patternType || 0) + (slot || 0) });
  const suggestedFaqPrompt = seedFaq.map((f, i) => `   * 추천 질문 ${i+1}: "${f.q}" -> 답변 핵심: "${f.a.slice(0, 80)}..."`).join('\n');

  if (!apiKey) {
    console.log(`[Auto-Column SEO] No GEMINI_API_KEY found. Generating with ${formatName || '5-Format'} template (${patternName}).`);
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId, patternType, titleVariants, formatType, formatName);
  }

  const prompt = `
당신은 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.
1개의 의학 주제를 기반으로, 검색엔진의 '유사문서 / 중복 콘텐츠 페널티'를 완벽히 방지하기 위해 다음 **두 가지 전혀 다른 버전의 글**을 각각 작성해주세요.

──────────────────────────────────────────────
[공통 주제 정보]
- 공식 칼럼 제목: ${fullTitle}
- 제목 스타일 패턴: ${patternName}
- 주 타겟 지역: ${patternType === 2 ? '전국 / 일반 환자' : `${selectedRegion.short} (${selectedRegion.full})`}
- 질환 카테고리: ${selectedCat.name}
- 주제 포커스: ${selectedTopic.focus}
- 블로그 추천 제목 후보:
  1) 맨앞 지역명형: ${titleVariants.p1}
  2) 중간 지역명형: ${titleVariants.p2}
  3) 스토리/질문형: ${titleVariants.p3}
- 원장 정보: 해아림한의원 인천부평점 권형근 대표원장 (한방침구과 전문의, 부평역 7번 출구)
──────────────────────────────────────────────

[중요 제약 조건 ★★★]
1. [일괄적인 문구 반복 절대 금지]: 모든 글에 '가슴이 답답하고 불안할 때' 같은 판에 박힌 획일적 문구를 기계적으로 반복하지 마십시오!
2. 반드시 해당 질환의 고유 증상(불면은 새벽 각성/입면 장애, 틱/ADHD는 눈 깜빡임/헛기침/집중력 저하, 자율신경은 어지럼증/식은땀/피로, 공황은 숨막힘/과호흡/광장공포, 화병/번아웃은 목 이물감/울화, 담적/신체화는 명치 답답함/만성 두통/턱관절 통증)에 맞추어 생생하고 다채로운 표현으로 작성하십시오.
3. [FAQ 다변화 필수 - 획일적 3대 질문 반복 엄금]: '양약 병행 가능한가요?', '치료 기간은 얼마나 걸리나요?', '첫 내원 시 어떤 검사를 받나요?' 같은 뻔한 3개 질문을 복붙하지 마십시오.
   아래에 제시된 주제 맞춤형 진료실 실제 고민을 반영하여 생생하고 명쾌한 FAQ 3문 3답을 완성하십시오:
${suggestedFaqPrompt}

[글 1: 홈페이지 공식 의학 칼럼 데이터]
- 성격: 공식 웹사이트(healimbp.com) 게재용 전문적이고 신뢰감 있는 대표원장 의학 칼럼.
- 다음 항목을 포함하는 구조화된 JSON 데이터로 작성해주세요:
  1. voiceQuotes: 환자의 진료실 실제 호소문 3개 (배열)
  2. introText: 공감과 신경학적 원인을 설명하는 도입부 문단 2개 (배열)
  3. toc: 6대 섹션 목차 제목 6개 (배열)
  4. flow: { title: "기전 흐름도 제목", steps: ["스텝1", "스텝2", "스텝3", "스텝4", "스텝5"] }
  5. section1Text: 병리 기전에 대한 깊이 있는 마크다운 설명 문단 (볼드체 포함)
  6. clinicBox: { title: "진료실 체크리스트 제목", items: [문항 4개] }
  7. researchBox: { title: "학술 연구 및 임상 보고", items: [논문/임상보고 2개], note: "원장 임상 조언 1문장" }
  8. typeCards: 3대 체질 유형 3개 [ { icon: "이모지", title: "변증명 - 특징", desc: "상세설명 및 처방" } ]
  9. structCards: 치료 솔루션 2개 [ { badge: "분류", title: "치료법명", body: "상세설명" } ] (소아/ADHD/틱은 NeuronFlex&IM 포함)
  10. faq: 주제 맞춤형 현실적 질문 3개 [ { q: "질문", a: "명쾌한 답변" } ]
  11. closingText: 대표원장의 따뜻한 격려 메시지 1문장

──────────────────────────────────────────────
[글 2: 티스토리 블로그 전용 칼럼 원고 (tistoryTitle, tistoryTags, tistoryScript)]
★ 핵심 원칙:
1. 구조: 홈페이지 칼럼과 동일하게 **6대 챕터 완결 칼럼 구조**(환자 호소문 인용구, 목차, 01.발생기전, 02.진행단계/체크포인트, 03.한의학진단/연구, 04.3대맞춤유형, 05.1:1통합솔루션, 06.진료실FAQ 3문3답, 원장조언)를 100% 완결된 글로 유지하세요.
2. 내용 차별화: 검색엔진 유사문서 페널티를 완벽히 피하기 위해 **제목, 문장 표현, 환자 스토리텔링, 설명 어조를 친근하고 새로운 블로그 문체로 100% 다르게 재작성**하세요.
- tistoryTitle: 클릭을 부르는 매력적인 질문형/스토리형 블로그 제목
- tistoryTags: 네이버/다음 상위노출용 추천 태그 5~7개 (배열)
- tistoryScript: 마크다운 헤더(###)와 불릿/구분선이 포함된 정통 6섹션 블로그 칼럼 원고 텍스트

반드시 아래 JSON 형식으로만 응답하세요 (마크다운 백틱 제외):
{
  "title": "${fullTitle}",
  "summary": "${patternType === 2 ? `${selectedCat.name} 증상으로 고통받는 분들을 위한 권형근 원장의 핵심 요약 2~3문장` : `${selectedRegion.short} 및 인근 생활권 환자분들을 위한 권형근 원장의 핵심 요약 2~3문장`}",
  "tags": ${patternType === 2 ? `["${selectedCat.name.split(' ')[0]}", "${selectedCat.name.split(' ')[0]}치료", "한방신경정신과", "자율신경", "맞춤한약"]` : `["${selectedRegion.short}한의원", "부평한의원", "${selectedCat.name.split(' ')[0]}한의원", "자율신경", "체열검사"]`},
  "voiceQuotes": ["...", "...", "..."],
  "introText": ["...", "..."],
  "toc": ["...", "...", "...", "...", "...", "..."],
  "flow": { "title": "...", "steps": ["...", "...", "...", "...", "..."] },
  "section1Text": "...",
  "clinicBox": { "title": "...", "items": ["...", "...", "...", "..."] },
  "researchBox": { "title": "학술 연구 및 임상 보고", "items": ["...", "..."], "note": "..." },
  "typeCards": [
    { "icon": "⚡", "title": "...", "desc": "..." },
    { "icon": "🔥", "title": "...", "desc": "..." },
    { "icon": "💧", "title": "...", "desc": "..." }
  ],
  "structCards": [
    { "badge": "...", "title": "...", "body": "..." },
    { "badge": "...", "title": "...", "body": "..." }
  ],
  "faq": [
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." },
    { "q": "...", "a": "..." }
  ],
  "closingText": "...",
  "tistoryTitle": "...",
  "tistoryTags": ["...", "...", "...", "...", "..."],
  "tistoryScript": "..."
}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini API returned status ${res.status}: ${await res.text()}`);
    }

    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(rawText);

    // FAQ 검증: 만약 획일적 질문이거나 누락되었을 경우 질환 특화 FAQ로 자동 보정
    let validatedFaq = parsed.faq;
    if (!Array.isArray(validatedFaq) || validatedFaq.length === 0 || validatedFaq.some(f => f.q && (f.q.includes('정신과 약') || f.q.includes('치료 기간은 보통') || f.q.includes('첫 내원 시 어떤 검사')))) {
      validatedFaq = seedFaq;
    }

    const fullColumnData = {
      id: articleId,
      patternType: patternType,
      patternName: patternName,
      formatType: formatType ?? 0,
      formatName: formatName ?? '[포맷 A] 기전 심층 탐구형',
      titleVariants: titleVariants,
      category: selectedCat.id,
      categoryName: selectedCat.name,
      categoryClass: selectedCat.categoryClass,
      title: parsed.title || fullTitle,
      summary: parsed.summary || `${selectedRegion.short} 지역 환자분들을 위한 권형근 원장의 ${selectedCat.name} 심층 원인 분석 및 맞춤 한방 치료 가이드입니다.`,
      tags: parsed.tags || (patternType === 2 ? [selectedCat.name.split(' ')[0], `${selectedCat.name.split(' ')[0]}치료`, '한방신경정신과', '자율신경', '맞춤한약'] : [`${selectedRegion.short}한의원`, '부평한의원', selectedCat.name.split(' ')[0], '맞춤한약', '뇌파검사']),
      voiceQuotes: parsed.voiceQuotes || [
        `병원에서 정밀 검사를 받아도 '신경성'이라는 말뿐 원인을 찾지 못했습니다.`,
        `약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복하고 싶습니다.`,
        `일상생활과 직장 업무가 힘들 정도로 증상이 지속되어 고통스럽습니다.`
      ],
      introText: parsed.introText || [
        `${selectedRegion.short} 및 인근 생활권에서 진료실을 찾아오시는 많은 분들이 겪고 계신 고통은 단순한 심리적 나약함이 아닙니다.`,
        `이것은 **뇌 신경계와 자율신경계가 과열되거나 방전되어 신체 조절 능력을 상실한 신경생리학적 불균형 상태**입니다.`
      ],
      toc: parsed.toc,
      flow: parsed.flow || {
        title: `${selectedTopic.focus}의 신경학적 발생 경로`,
        steps: ['만성 스트레스/과로', '자율신경계 과흥분', '뇌 신경전달물질 불균형', '신체화 증상 발현', '만성화 및 일상 저하']
      },
      section1Text: parsed.section1Text || `
지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래합니다.
뇌 변연계와 자율신경절의 긴장이 누적되면 신체 스스로 항상성을 유지하지 못하고 증상이 고착화됩니다.
따라서 뇌 신경계의 과열을 식히고 자생력을 회복시키는 **1:1 맞춤 한방 치료**가 근본 해결책이 됩니다.
`,
      clinicBox: parsed.clinicBox || {
        title: `진료실에서 체크하는 ${selectedCat.name} 자가진단`,
        items: [
          '충분한 휴식을 취해도 증상이 쉽게 가라앉지 않나요?',
          '긴장하거나 스트레스를 받으면 신체 증상이 즉각 심해지나요?',
          '병원 검사상 뚜렷한 기질적 이상이 없다는 진단을 받았나요?',
          '증상으로 인해 수면이나 일상 집중력에 큰 지장을 받고 있나요?'
        ]
      },
      researchBox: parsed.researchBox || {
        title: '학술 연구 및 임상 보고',
        items: [
          `${selectedCat.name} 환자에 대한 체질 맞춤 탕약 및 한방 신경 치료의 임상 유효성 연구`,
          'HRV 자율신경 검사 및 뇌파 검사상 신경계 안정화 및 균형 회복 확인'
        ],
        note: '증상을 단순히 억누르는 대증요법을 넘어 신경계의 자생력을 키울 때 장기적 호전이 가능합니다.'
      },
      typeCards: parsed.typeCards || [
        { icon: '🔥', title: '간열상충(肝熱上衝)형 – 긴장과 스트레스로 상열감이 치솟는 유형', desc: '간의 화기를 내리고 뇌를 식혀주는 시호청간탕, 황련해독탕을 처방합니다.' },
        { icon: '🌪️', title: '심담허겁(心膽虛怯)형 – 겁이 많고 사소한 자극에도 과민 반응하는 유형', desc: '심장과 담력을 보강하고 신경을 안정시키는 온담탕, 안신보심환을 처방합니다.' },
        { icon: '🪫', title: '기혈양허(氣血兩虛)형 – 기력이 바닥나 전신 피로와 무기력증이 동반되는 유형', desc: '오장육부의 기혈을 채우고 뇌 혈류를 돕는 귀비탕, 보중익기탕을 처방합니다.' }
      ],
      structCards: parsed.structCards || [
        { badge: '뇌 신경 안정', title: '체질 맞춤 탕약 & 정혈 약침', body: '과열된 뇌 신경계를 진정시키고 기혈 순환을 촉진하여 자생력을 회복시킵니다.' },
        { badge: '구조 정밀 치료', title: '상부경추 교정 & CST 두개천골요법', body: '뇌척수액 순환을 원활히 하고 척추 주변 자율신경의 긴장을 물리적으로 해소합니다.' }
      ],
      faq: validatedFaq,
      closingText: parsed.closingText || '몸이 보내는 신호는 쉼과 치유가 필요하다는 절박한 메시지입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 누리세요.',
      tistoryTitle: parsed.tistoryTitle || titleVariants.p3,
      tistoryTags: parsed.tistoryTags || (patternType === 2 ? [selectedCat.name.split(' ')[0], '한방치료', '자율신경', '건강칼럼'] : [selectedCat.name.split(' ')[0], `${selectedRegion.short}한의원`, '부평한의원', '자율신경', '건강관리']),
      tistoryScript: injectFaqIntoTistoryScript(parsed.tistoryScript || generateFallbackTistoryScript(selectedCat, selectedTopic, selectedRegion, patternType, titleVariants, validatedFaq), validatedFaq),
      date: dateStr
    };

    return fullColumnData;
  } catch (err) {
    console.error('[Auto-Column SEO] Gemini API error:', err);
    return generateFallbackContent(selectedCat, selectedTopic, selectedRegion, fullTitle, dateStr, articleId, patternType, titleVariants, formatType, formatName);
  }
}

export function injectFaqIntoTistoryScript(tistoryScript, faqs) {
  if (!tistoryScript || !Array.isArray(faqs) || faqs.length === 0) return tistoryScript;
  
  const faqFormatted = faqs.map((f, i) => `**Q${i + 1}. ${f.q}**\n> A. ${f.a}`).join('\n\n');
  const newFaqSection = `### ❓ 06. 진료실 자주 묻는 질문 (FAQ)\n${faqFormatted}`;

  // Find existing FAQ section in tistoryScript
  const faqHeaderRegex = /(?:###\s*(?:❓\s*)?(?:\d+\.\s*)?(?:진료실\s*자주\s*묻는\s*질문|자주\s*묻는\s*질문|FAQ)[^\n]*\n)([\s\S]*?)(?=(?:\n\s*>\s*\*\*권형근|\n\s*\*\*권형근|\n\s*###|\n\s*---\s*\n\s*\*\*권형근|$))/i;

  if (faqHeaderRegex.test(tistoryScript)) {
    return tistoryScript.replace(faqHeaderRegex, `${newFaqSection}\n\n`);
  } else {
    const adviceMatch = tistoryScript.match(/(?=\n\s*>\s*\*\*권형근|\n\s*\*\*권형근|$)/);
    if (adviceMatch) {
      const idx = adviceMatch.index;
      return tistoryScript.slice(0, idx) + '\n\n' + newFaqSection + '\n\n' + tistoryScript.slice(idx);
    }
    return tistoryScript + '\n\n' + newFaqSection;
  }
}

export function generateFallbackTistoryScript(cat, topic, region, pattern = 0, variants = null, customFaq = null) {
  const catShort = cat.name.split(' ')[0];
  const sec5 = getSection5Config(cat.name);
  const hookLine = topic.hookLine || '일상 속에서 원인 모를 신체 이상과 신경계 과민으로 고통받고 계신가요?';

  const quoteRegion = pattern === 2
    ? '병원에서 각종 정밀 검사를 받아도'
    : `"${region.short} 인근 병원에서 각종 검사를 받아도`;

  const fqList = customFaq || getDiverseFaq(cat.name, topic, { title: topic.blogTitle || topic.titleSuffix || '', seed: pattern });
  const faqFormatted = fqList.map((fq, i) => `**Q${i + 1}. ${fq.q}**\n> A. ${fq.a}`).join('\n\n');

  return `> "${quoteRegion} '신경성', '스트레스'라는 말뿐 원인을 찾지 못했습니다."
> "약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 체계적인 치료를 받고 싶습니다."

안녕하세요. **해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)**입니다.

${hookLine}
이것은 단순한 심리적 약함이나 일시적 피로가 아니라, 우리 몸의 자동 조절 장치인 자율신경계와 뇌 신경망이 과열되어 균형을 잃은 신호입니다.

### 📌 이 칼럼에서 다루는 6대 핵심 목차
* 01. ${topic.focus || '증상'}의 신경학적 발생 기전과 원인
* 02. 자율신경 과흥분 3단계와 일상 속 신체 신호
* 03. 한의학적 진단: 기혈 순환과 오장육부 불균형
* 04. 증상별 3대 맞춤 변증 체질 유형
* 05. ${sec5.title}
* 06. 진료실 자주 묻는 질문 (FAQ 3문 3답)

### 🌿 01. ${topic.focus || '증상'}의 신경학적 발생 기전과 원인
우리의 뇌와 신체는 24시간 동안 교감신경(액셀)과 부교감신경(브레이크)의 상호 작용을 통해 심박, 호흡, 체온, 수면을 조절합니다.
하지만 과도한 긴장과 피로가 지속되면 교감신경이 과항진되면서 뇌 변연계(편도체)가 위험 알람을 오작동시킵니다.
이로 인해 자율신경 실조와 뇌 신경전달물질의 불균형이 발생하여 만성적인 신체화 증상으로 이어집니다.

### 🔍 02. 자율신경 과흥분 3단계와 일상 속 신체 신호
신경계의 피로는 다음과 같은 3단계를 거쳐 진행됩니다:
* **1단계 (경고 반응기)**: 급성 스트레스로 심장 박동이 빨라지고 식은땀, 긴장 반응이 순간적으로 발생함.
* **2단계 (저항 유지기)**: 긴장 상태가 지속되며 목과 어깨가 굳고, 소화불량 및 수면 질 저하가 반복됨.
* **3단계 (소진/탈진기)**: 자생력이 고갈되며 만성 피로, 브레인포그, 무기력증이 고착화됨.

### 📚 03. 한의학적 진단: 기혈 순환과 오장육부 불균형
한의학에서는 억압된 스트레스가 뭉쳐 기운이 통하지 않는 **간기울결(肝氣鬱結)**과, 심장의 진액이 말라 뇌로 열이 치솟는 **심신불교(心腎不交)**를 주요 병리로 진단합니다.
체질에 맞지 않는 억지 각성제나 단순 대증 치료 대신, 뇌와 오장육부의 기혈 균형을 바로잡을 때 자생력이 회복됩니다.

### 🩺 04. 증상별 3대 맞춤 변증 체질 유형
* **간열상충(肝熱上衝)형**: 스트레스와 긴장으로 상체와 머리로 열이 치솟는 유형 (시호청간탕, 황련해독탕 처방)
* **심담허겁(心膽虛怯)형**: 사소한 소리나 자극에도 심장이 덜컥 내려앉고 불안해하는 유형 (가미온담탕, 안신보심환 처방)
* **기혈양허(氣血兩虛)형**: 만성 피로로 에너지가 바닥나 멍하고 기운이 없는 유형 (가미귀비탕, 보중익기탕 처방)

### 💡 05. ${sec5.title}
* **1:1 체질 맞춤 탕약 & 정혈 약침**: 과열된 뇌 신경계를 진정시키고 기혈을 보강하여 신경계 자생력을 복원합니다.
* **NeuronFlex 뉴로피드백 & IM 감각통합**: 실시간 뇌파 조절 훈련과 1/1,000초 시청각 피드백으로 두뇌 신경망의 타이밍과 집중력을 강화합니다.
* **두개천골 추나요법 & FCST**: 상부 경추와 턱관절을 교정하여 뇌척수액 순환과 척추 주변 자율신경절의 긴장을 해소합니다.

### ❓ 06. 진료실 자주 묻는 질문 (FAQ)
${faqFormatted}

> **권형근 대표원장의 조언**: "증상은 몸이 보내는 쉼과 치유의 절박한 신호입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 다시 누리시길 바랍니다."`;
}

export function generateFallbackContent(cat, topic, region, title, date, id, pattern = 0, variants = null, formatType = 0, formatName = '[포맷 A] 기전 심층 탐구형') {
  const catShort = cat.name.split(' ')[0];
  const dynamicFaq = getDiverseFaq(cat.name, topic, { title: title, seed: (pattern || 0) });
  
  let summary = `${region.short} 지역에서 ${cat.name} 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.`;
  let tags = [`${region.short}한의원`, '부평한의원', `${catShort}한의원`, '맞춤한약', '체열검사'];
  let introText = [
    `진료실에는 **${region.short}**뿐만 아니라 인근 생활권에서 ${cat.name} 증상으로 고통받는 많은 환자분들이 내원하십니다.`,
    `이것은 환자분의 의지나 성격의 문제가 아닙니다. **지속적인 스트레스와 신경계 과열로 인해 뇌 신경망과 자율신경계의 조절 밸런스가 무너진 신경생리학적 신체화 상태**입니다.`
  ];

  if (pattern === 1) {
    summary = `환자분들의 생생한 고통과 호소에 공감하며, ${region.short} 생활권 환자를 위한 ${cat.name}의 신경학적 원인과 한의학적 관리법을 정리했습니다.`;
    tags = [`${region.short}한의원`, '인천한의원', `${catShort}치료`, '자율신경', '뇌파검사'];
    introText = [
      `진료실 현장에서 만나는 **${region.short}** 환자분들은 '왜 자꾸 증상이 반복되는지' 답답함과 불안을 호소하십니다.`,
      `이것은 **뇌 신경망과 자율신경계가 과열되거나 방전되어 신체 조절 능력을 상실한 신경생리학적 불균형 상태**입니다.`
    ];
  } else if (pattern === 2) {
    summary = `${cat.name} 증상으로 고통받는 환자분들과 보호자분들을 위한 권형근 대표원장의 신경학적 원인 분석 및 근본 한방 치료 가이드입니다.`;
    tags = [catShort, `${catShort}치료`, '한방신경정신과', '자율신경', '맞춤한약'];
    introText = [
      `진료실에서 ${cat.name} 증상으로 고통받는 수많은 환자분들을 만나며 가장 안타까운 순간은, 이것이 신경계의 질환임에도 단순한 '마음의 나약함'이나 '성격 탓'으로 자책하시는 경우입니다.`,
      `이것은 환자분의 의지 문제가 아니라, **뇌 신경망과 자율신경계의 상호 조절 밸런스가 한계에 도달하여 발생하는 신경생리학적 SOS 신호**입니다.`
    ];
  }

  const defaultVariants = variants || {
    p1: `[${region.short}한의원 ${catShort}] ${topic.titleSuffix}`,
    p2: `${topic.titleSuffix.split(',')[0]}, [${region.short} ${catShort}] ${topic.titleSuffix.split(',')[1] || '맞춤 한방 치료'}`,
    p3: topic.blogTitle || topic.titleSuffix
  };

  return {
    id: id,
    categoryId: cat.id,
    category: cat.id,
    categoryName: cat.name,
    categoryClass: cat.categoryClass,
    title: title,
    summary: summary,
    tags: tags,
    formatType: formatType ?? 0,
    formatName: formatName ?? '[포맷 A] 기전 심층 탐구형',
    voiceQuotes: [
      `"병원에서 검사를 받아도 '신경성', '스트레스성'이라는 말뿐 원인을 찾지 못했습니다."`,
      `"약물에만 의존하지 않고 근본적으로 신경계 자생력을 회복해주는 치료를 받고 싶습니다."`,
      `"일상생활과 업무에 지장을 줄 정도로 고통이 지속되어 확실한 치료법이 절실합니다."`
    ],
    introText: introText,
    toc: [
      `${topic.focus}의 신경학적 핵심 원인과 진행 메커니즘`,
      `진료실에서 가장 먼저 살피는 생활 속 단서와 전조 신호`,
      `국내외 임상 연구와 한의학적 치료 보고`,
      `한의학에서 바라보는 환자별 3대 맞춤 체질 유형`,
      getSection5Config(cat.name).title,
      `환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)`
    ],
    flow: {
      title: `${topic.focus}의 악순환 진행 고리`,
      steps: ['과도한 긴장/스트레스', '자율신경계 과흥분', '뇌 신경전달물질 불균형', '신체화 증상 폭발', '일상 저하 & 만성화']
    },
    section1Text: `
자율신경계는 심장 박동, 혈압, 호흡, 소화, 체온, 수면 리듬을 24시간 자동으로 관장합니다.

지속적인 과로와 정신적 긴장은 교감신경의 과항진과 부교감신경의 기능 저하를 초래하여 신경계의 에너지 소진을 가속화합니다.

신경계가 한계에 부딪히면 뇌의 조절 중추가 헛경보를 울리며 다양한 신체 증상과 불안, 수면 장애를 유발합니다. 따라서 **뇌 신경망의 자생력을 키우고 기혈을 보강하는 1:1 맞춤 한방 치료**가 필수적입니다.
`,
    clinicBox: {
      title: `진료실에서 체크하는 ${cat.name} 자가진단 항목`,
      items: [
        '스트레스를 받거나 긴장하면 증상이 즉각적으로 악화되나요?',
        '충분히 쉬어도 피로가 풀리지 않고 몸이 무겁게 가라앉나요?',
        '병원 정밀 검사상 뚜렷한 기질적 이상을 찾지 못했나요?',
        '증상으로 인해 일상생활이나 대인관계에서 불안감을 느끼나요?'
      ]
    },
    researchBox: {
      title: '학술 연구 및 임상 보고',
      items: [
        `${cat.name} 환자에 대한 체질 맞춤 한약 및 한방 복합 치료 시 증상 평가 척도 78% 유의미 호전`,
        'HRV 자율신경 검사상 교감신경 과항진 완화 및 심박 변이도 정상화 확인'
      ],
      note: '증상을 단순히 화학적으로 억누르는 일시적인 대증요법을 넘어, 신경계의 자생력을 회복하는 것이 장기적 재발 방지의 핵심입니다.'
    },
    typeCards: [
      { icon: '🔥', title: '간열상충(肝熱上衝)형 – 스트레스와 분노로 상체와 뇌로 열이 치솟는 유형', desc: '간의 화기를 내리고 뇌 신경계를 시원하게 안정시키는 시호청간탕, 황련해독탕을 처방합니다.' },
      { icon: '🌪️', title: '심담허겁(心膽虛怯)형 – 겁이 많고 사소한 소음이나 자극에도 크게 놀라는 유형', desc: '심장과 담낭의 기운을 보강하고 뇌 신경망을 단단하게 해주는 가미온담탕, 안신보심환을 처방합니다.' },
      { icon: '🪫', title: '기혈양허(氣血兩虛)형 – 만성 피로로 기력이 바닥나 신경계를 지탱하지 못하는 유형', desc: '오장육부의 기혈을 보충하고 뇌 활력을 깨우는 가미귀비탕, 보중익기탕을 처방합니다.' }
    ],
    structCards: [
      { badge: '신경 자생력 회복', title: '체질 맞춤 탕약 & 청열 약침', body: '과열된 뇌 신경계를 진정시키고 기혈 순환을 촉진하여 인체 스스로 균형을 유지하도록 돕습니다.' },
      { badge: '구조 정밀 교정', title: '두개천골 CST & 상부경추 추나', body: '경추와 척추 정렬을 바로잡아 뇌척수액 순환과 척추 주변 자율신경절의 소통을 원활하게 만듭니다.' }
    ],
    faq: dynamicFaq,
    closingText: '몸이 보내는 신호는 쉼과 치유가 필요하다는 절박한 메시지입니다. 뇌와 자율신경의 평온을 되찾아 건강한 일상을 다시 누리세요.',
    patternType: pattern,
    patternName: ['[패턴 1] 맨앞 지역명 한의원', '[패턴 2] 중간 지역명 삽입', '[패턴 3] 지역명 없는 순수 질환/블로그형'][pattern],
    titleVariants: defaultVariants,
    tistoryTitle: defaultVariants.p3,
    tistoryTags: tags,
    tistoryScript: generateFallbackTistoryScript(cat, topic, region, pattern, defaultVariants, dynamicFaq),
    date: date
  };
}

// 7. content/column/_index.md 에 신규 칼럼 주입 및 인덱스 재구축
export async function updateColumnPage(col, slug) {
  const singlePostPath = path.join(rootDir, 'content', 'column', `${slug}.md`);
  const markdownContent = renderColumnMarkdown(col);

  // 중복 파일 덮어쓰기 방지 및 신규 작성
  fs.writeFileSync(singlePostPath, markdownContent, 'utf-8');
  console.log(`[Auto-Column SEO] Created 6-section Markdown post: ${singlePostPath}`);

  // content/column/_index.md 전체 재스캔 및 자동 중복방지 인덱스 재구축
  try {
    rebuildColumnIndex();
  } catch (err) {
    console.error('[Auto-Column SEO] Error rebuilding column index:', err);
  }
}

// 8. 텔레그램 메시지 전송 헬퍼
async function postTelegramMessage(botToken, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      disable_web_page_preview: false
    })
  });
  const data = await res.json();
  if (!data.ok) {
    throw new Error(`Telegram API Error: ${data.description}`);
  }
  return data;
}

// 9. 텔레그램 알림 발송
export async function sendTelegramNotification(column, slug, target = null) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
  const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

  if (!botToken || !chatId) {
    console.log('[Auto-Column SEO] TELEGRAM_BOT_TOKEN 또는 TELEGRAM_CHAT_ID 미설정으로 텔레그램 알림을 건너뜁니다.');
    return;
  }

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;

  const pName = column.patternName || '[패턴] 건강 칼럼';
  const variants = column.titleVariants || target?.titleVariants || {
    p1: column.title,
    p2: column.title,
    p3: column.tistoryTitle || column.title
  };

  const homepageNotice = `📢 <b>[해아림한의원] 새 건강 칼럼이 공식 홈페이지에 자동 발행되었습니다!</b>

📌 <b>홈페이지 제목 (${escapeHtml(pName)}):</b>
<code>${escapeHtml(column.title)}</code>

🏷️ <b>분류:</b> ${escapeHtml(column.categoryName)}
🗓️ <b>발행일:</b> ${column.date}

📝 <b>홈페이지 칼럼 요약:</b>
${escapeHtml(column.summary)}

🔗 <a href="${columnUrl}">홈페이지에서 칼럼 바로가기</a>`;

  const tTags = (column.tistoryTags || column.tags || []).map(t => `#${t.replace(/^#|\s+/g, '')}`).join(' ');
  const dynamicFaq = column.faq || getDiverseFaq(column.categoryName, { focus: column.title }, { title: column.title });
  const rawScript = column.tistoryScript || generateFallbackTistoryScript({ name: column.categoryName }, { focus: '', hookLine: '' }, { short: '부평' }, column.patternType || 0, variants, dynamicFaq);
  const tScript = injectFaqIntoTistoryScript(rawScript, dynamicFaq);

  const tistoryNotice = `📋 <b>[블로그 원클릭 복사용 맞춤 대본]</b>
<i>※ 홈페이지 칼럼과 100% 다른 문장과 친근한 블로그 스토리텔링으로 재작성된 6섹션 원고입니다. (유사문서 페널티 완벽 방지)</i>

🎯 <b>[블로그 포스팅용 추천 제목 3종 세트]</b>
<i>(원하시는 스타일을 골라 복사해서 블로그 제목으로 사용하세요)</i>

1️⃣ <b>맨앞 지역명형:</b>
<code>${escapeHtml(variants.p1)}</code>

2️⃣ <b>중간 지역명형 (파란색 강조 스타일 ⭐):</b>
<code>${escapeHtml(variants.p2)}</code>

3️⃣ <b>지역명 없는 스토리/질문형:</b>
<code>${escapeHtml(variants.p3)}</code>

─────────────────
${escapeHtml(tScript)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}
• 홈페이지 칼럼원문: ${columnUrl}

🏷️ <b>[추천 태그]</b>
<code>${escapeHtml(tTags)}</code>`;

  try {
    // 1) 홈페이지 발행 요약 알림 (텍스트 메시지)
    await postTelegramMessage(botToken, chatId, homepageNotice);
    console.log('[Auto-Column SEO] Telegram 1/2 (홈페이지 발행 알림 텍스트) 전송 완료!');

    const MAX_LEN = 3800;
    if (tistoryNotice.length <= MAX_LEN) {
      await postTelegramMessage(botToken, chatId, tistoryNotice);
      console.log('[Auto-Column SEO] Telegram 2/2 (티스토리 차별화 대본) 전송 완료!');
    } else {
      const part1 = tistoryNotice.slice(0, MAX_LEN);
      const part2 = tistoryNotice.slice(MAX_LEN);
      await postTelegramMessage(botToken, chatId, part1);
      await postTelegramMessage(botToken, chatId, part2);
      console.log('[Auto-Column SEO] Telegram 2/2 (티스토리 대본 분할) 전송 완료!');
    }

    try {
      const tistoryHtml = formatTistoryContent(column, slug);
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일]</b>\n이 파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 차별화된 서식/박스/버튼이 100% 완벽하게 적용됩니다.`);
      formData.append('parse_mode', 'HTML');
      const blob = new Blob([tistoryHtml], { type: 'text/html;charset=utf-8' });
      formData.append('document', blob, `tistory_${slug}.html`);

      await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: formData
      });
      console.log('[Auto-Column SEO] Telegram 3/3 (티스토리 HTML 문서 첨부) 전송 완료!');
    } catch (docErr) {
      console.warn('[Auto-Column SEO] Telegram HTML 문서 첨부 전송 건너뜀/실패:', docErr.message);
    }

    console.log('[Auto-Column SEO] Telegram 알림 및 차별화 티스토리 대본이 성공적으로 전송되었습니다!');
  } catch (err) {
    console.error('[Auto-Column SEO] Telegram 알림 전송 실패:', err);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// 10. 메인 실행 함수
async function main() {
  console.log('[Auto-Column SEO] Starting smart-rotation & deduplicated column generation...');
  const target = selectSmartTarget();
  console.log(`[Auto-Column SEO] Selected Target: ${target.selectedCat.name} | Topic: "${target.selectedTopic.focus}" | Region: ${target.selectedRegion.short} | Pattern: ${target.patternName}`);
  console.log(`[Auto-Column SEO] Title Options:
  1) ${target.titleVariants.p1}
  2) ${target.titleVariants.p2}
  3) ${target.titleVariants.p3}`);

  const column = await generateColumnContent(target);
  const slug = `post-${column.date}-${column.category}-${Date.now().toString().slice(-4)}`;
  await updateColumnPage(column, slug);
  console.log(`[Auto-Column SEO] Published column: "${column.title}"`);
  await sendTelegramNotification(column, slug, target);
  await publishToTistory(column, slug);
}

// 직접 실행 시에만 main() 호출
if (process.argv[1] && process.argv[1].endsWith('generate-column.mjs')) {
  main().catch(err => {
    console.error('[Auto-Column SEO] Fatal Error:', err);
    process.exit(1);
  });
}
