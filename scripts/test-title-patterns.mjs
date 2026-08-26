import fs from 'fs';
import path from 'path';

// 1. 주요 타겟 지역 풀
const REGION_POOLS = [
  { short: '인천 부평', full: '부평구' },
  { short: '부천 상동', full: '부천시' },
  { short: '인천 구월동', full: '남동구' },
  { short: '시흥 배곧', full: '시흥시' },
  { short: '인천 청라', full: '인천 서구' },
  { short: '인천 송도', full: '인천 연수구' }
];

// 2. 카테고리 풀
const CATEGORIES = [
  {
    name: '공황 · 불안 & 강박증',
    topics: [
      { titleSuffix: '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법', focus: '공황발작 응급 호흡 및 편도체 안정 한약' },
      { titleSuffix: '문 잠갔을까 끊임없이 의심되는 확인 강박사고의 뇌 회로 안정법', focus: '강박장애 및 CSTC 회로 과열' }
    ]
  },
  {
    name: '불면증 · 수면장애',
    topics: [
      { titleSuffix: '새벽 3~4시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리', focus: '새벽 중도각성 및 수면유지장애' },
      { titleSuffix: '수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬', focus: '수면유도제 내성 극복 및 자연 수면' }
    ]
  },
  {
    name: '자율신경 & 실신·어지럼증·이명',
    topics: [
      { titleSuffix: '만성피로와 자율신경계 기능 저하의 관계, 한스셀리에 3단계 소진과 한방 치료', focus: '만성피로와 자율신경실조증' },
      { titleSuffix: '검사상 이상 없는 만성 어지럼증과 멍함, 상부 경추(C1-C2)와 추골동맥의 관계', focus: '경추성 어지럼증 및 브레인포그' },
      { titleSuffix: '긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방', focus: '수족다한증 및 상열하한' }
    ]
  }
];

function generateColumnTitle(pattern, region, cat, topic) {
  const catShort = cat.name.split(' ')[0];
  if (pattern === 0) {
    // 1. 맨앞에 지역명 한의원으로 쓰기
    return `${region.short} 한의원 ${catShort}, ${topic.titleSuffix}`;
  } else if (pattern === 1) {
    // 2. 중간에 지역명 넣기 (사용자가 파란색 강조한 스타일)
    if (topic.titleSuffix.includes(',')) {
      const parts = topic.titleSuffix.split(',');
      const leadPart = parts[0].trim();
      const followPart = parts.slice(1).join(',').trim();
      return `${leadPart}, ${region.short} ${catShort}의 ${followPart}`;
    } else {
      return `${topic.focus}, ${region.short} ${catShort}의 한의학적 원인과 관리법`;
    }
  } else {
    // 3. 지역명 없이 쓰는 순수 질환/의학 칼럼형
    return topic.titleSuffix;
  }
}

console.log('=== 3가지 패턴 시뮬레이션 결과 ===\n');
let runIndex = 0;
for (let day = 1; day <= 3; day++) {
  for (let slot = 0; slot < 3; slot++) {
    const patternType = runIndex % 3;
    const cat = CATEGORIES[runIndex % CATEGORIES.length];
    const topic = cat.topics[runIndex % cat.topics.length];
    const region = REGION_POOLS[runIndex % REGION_POOLS.length];
    const title = generateColumnTitle(patternType, region, cat, topic);
    const patternLabel = ['[1. 맨앞 지역명 한의원]', '[2. 중간 지역명 삽입  ]', '[3. 지역명 미포함(순수)]'][patternType];
    console.log(`${patternLabel} -> ${title}`);
    runIndex++;
  }
}
