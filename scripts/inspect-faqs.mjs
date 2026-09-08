import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'content', 'column');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

const faqCountMap = new Map();
let totalQuestions = 0;
let fileWithGenericCount = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  if (content.includes('정신과 약(신경안정제, 수면제)을 복용 중인데 한방 치료와 병행할 수 있나요?')) {
    fileWithGenericCount++;
  }
  const matches = [...content.matchAll(/<span>(.*?\?)<\/span>/g)];
  for (const m of matches) {
    const q = m[1].trim();
    faqCountMap.set(q, (faqCountMap.get(q) || 0) + 1);
    totalQuestions++;
  }
}

console.log('======================================================');
console.log(`[FAQ 다양성 정밀 분석 보고서]`);
console.log(`- 분석 대상 칼럼 수: ${files.length}개`);
console.log(`- 총 질문 카드 수: ${totalQuestions}개`);
console.log(`- 고유 고품질 질문 수: ${faqCountMap.size}종류`);
console.log(`- 구형 획일적 질문 잔여 파일 수: ${fileWithGenericCount}개 (0개여야 완벽)`);
console.log('======================================================\n');

const sorted = [...faqCountMap.entries()].sort((a, b) => b[1] - a[1]);
console.log('[질문별 분포 현황 (상위 15개)]:');
sorted.slice(0, 15).forEach(([q, count], i) => {
  console.log(`${i + 1}. [${count}회 노출] ${q}`);
});
