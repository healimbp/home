import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDiverseFaq, findTopicKey, TOPIC_FAQ_DATABASE } from './column-faqs.mjs';
import { rebuildColumnIndex } from './build-all-columns.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');

console.log('[FAQ Migration] Starting scan of all column files for generic/repetitive FAQ replacement...\n');

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
let updatedCount = 0;
let skippedCount = 0;

// 해시 함수 (일자 및 파일명 기반 결정적 시드)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

for (const file of files) {
  const filePath = path.join(columnDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Generic FAQ 감지 조건
  const isGenericFaq = content.includes('정신과 약(신경안정제, 수면제)을 복용 중인데 한방 치료와 병행할 수 있나요?') ||
                       content.includes('치료 기간은 보통 얼마나 걸리나요? 치료 후 재발하지 않나요?') ||
                       content.includes('한의원 첫 내원 시 어떤 검사와 진료를 받게 되나요?');

  if (!isGenericFaq) {
    skippedCount++;
    continue;
  }

  // frontmatter 추출
  const titleMatch = content.match(/title:\s*["']?(.*?)["']?$/m);
  const categoryMatch = content.match(/category:\s*["']?(.*?)["']?$/m);
  const dateMatch = content.match(/date:\s*["']?(.*?)["']?$/m);

  const title = titleMatch ? titleMatch[1].trim() : '';
  const category = categoryMatch ? categoryMatch[1].trim() : '';
  const date = dateMatch ? dateMatch[1].trim() : '';

  const seed = simpleHash(file + title + date);
  const newFaqs = getDiverseFaq(category, { focus: title, titleSuffix: title }, { title: title, seed });

  // 새 FAQ HTML 블록 생성
  const faqItemsHtml = newFaqs.map((fq, idx) =>
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

  const newFaqBlock = `<div class="space-y-4 my-6 not-prose">\n${faqItemsHtml}\n</div>`;

  // 기존 FAQ 섹션 치환
  // 패턴 1: <div class="space-y-4 my-6 not-prose"> ... </div> 바로 다음 Doctor's Insight 전까지
  const faqRegex = /<div class="space-y-4 my-6 not-prose">[\s\S]*?<\/div>(\s*<div class="my-8 p-6 sm:p-8 bg-gradient-to-br)/;

  if (faqRegex.test(content)) {
    const updatedContent = content.replace(faqRegex, `${newFaqBlock}$1`);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updatedCount++;
    console.log(`✅ [업데이트 완료] ${file} | 주제: [${category}] ${title.slice(0, 30)}...`);
  } else {
    console.warn(`⚠️ [치환 패턴 불일치] ${file}`);
  }
}

console.log(`\n======================================================`);
console.log(`[FAQ Migration Complete]`);
console.log(`- 전체 파일 수: ${files.length}개`);
console.log(`- 업데이트 완료: ${updatedCount}개`);
console.log(`- 기존 유지(이미 고유 FAQ 보유): ${skippedCount}개`);
console.log(`======================================================\n`);

// 칼럼 인덱스 재구축
rebuildColumnIndex();
