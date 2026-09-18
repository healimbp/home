import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'content', 'column');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

const titles = new Map();

for (const f of files) {
  const filePath = path.join(dir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/title:\s*["']?(.*?)["']?$/m);
  const title = m ? m[1].trim() : '';
  
  if (!titles.has(title)) {
    titles.set(title, [f]);
  } else {
    titles.get(title).push(f);
  }
}

const subSuffixes = [
  ' - 뇌 자생력 회복 솔루션',
  ' - 단계별 1:1 맞춤 치료 가이드',
  ' - 신경계 과흥분 차단 프로토콜',
  ' - 비약물 한방 원인 치료법',
  ' - 체질 맞춤 한약과 두뇌 훈련',
  ' - 임상 심층 분석과 생활 관리',
  ' - 만성 재발 방지 한의학적 대처'
];

const regionsAlt = [
  '인천 주안', '부천 옥길동', '시흥 목감', '인천 루원시티', '부천 송내',
  '인천 논현동', '인천 검단신도시', '시흥 장현', '인천 삼산동', '인천 산곡동'
];

let fixedCount = 0;
const allAssignedTitles = new Set();

// 먼저 단일 건들 등록
for (const [t, list] of titles.entries()) {
  if (list.length === 1) {
    allAssignedTitles.add(t);
  }
}

for (const [title, fileList] of titles.entries()) {
  if (fileList.length > 1) {
    // 0번(첫 파일)은 원래 제목 유지
    allAssignedTitles.add(title);

    for (let i = 1; i < fileList.length; i++) {
      const targetFile = fileList[i];
      const filePath = path.join(dir, targetFile);
      let content = fs.readFileSync(filePath, 'utf8');
      
      const altRegion = regionsAlt[(fixedCount + i) % regionsAlt.length];
      const altSub = subSuffixes[(fixedCount + i) % subSuffixes.length];
      
      let newTitle = title;
      if (newTitle.startsWith('[')) {
        newTitle = newTitle.replace(/^\[.*?\]/, `[${altRegion}한의원]`);
      } else if (newTitle.includes('[')) {
        newTitle = newTitle.replace(/\[.*?\]/, `[${altRegion}]`);
      } else {
        newTitle = `${newTitle} (${altRegion} 치료 가이드)`;
      }
      
      // 만약 이미 할당된 제목과 겹치면 부제 추가
      while (allAssignedTitles.has(newTitle)) {
        const extraSub = subSuffixes[Math.floor(Math.random() * subSuffixes.length)];
        newTitle = `${newTitle}${extraSub}`;
      }
      
      allAssignedTitles.add(newTitle);
      
      // 파일 내용 치환
      content = content.replace(/^title:\s*["']?.*?["']?$/m, `title: "${newTitle}"`);
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`[Fixed #${fixedCount}] ${targetFile}: "${title}" -> "${newTitle}"`);
    }
  }
}

console.log(`\n총 ${fixedCount}개의 중복 칼럼 파일 제목이 고유화되었습니다.`);
