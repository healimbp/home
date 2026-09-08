import fs from 'fs';
import path from 'path';
import { findTopicKey, getDiverseFaq } from './column-faqs.mjs';

const columnDir = 'content/column';
const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');

console.log(`=== Processing all ${files.length} columns with robust section locator ===\n`);

let updatedCount = 0;
let unchangedCount = 0;

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = path.join(columnDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*['"]?([^'\r\n"]+)/);
  const title = titleMatch ? titleMatch[1] : file;
  const catMatch = content.match(/categories:\s*\[(.*?)\]/) || content.match(/category:\s*['"]?([^'\r\n"]+)/);
  const category = catMatch ? catMatch[1].replace(/['"]/g, '').trim() : '';

  // Deterministic seed
  let hash = 0;
  for (let j = 0; j < file.length; j++) {
    hash = (hash * 31 + file.charCodeAt(j)) >>> 0;
  }
  const seed = (hash + i) % 10;

  const topicKey = findTopicKey(title, title, category);
  const faqs = getDiverseFaq(category, { focus: title, titleSuffix: title }, { title, seed });

  const newFaqHtml = `<div class="space-y-4 my-6 not-prose">
    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q1</span>
        <span>${faqs[0].q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${faqs[0].a}
      </p>
    </div>
    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q2</span>
        <span>${faqs[1].q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${faqs[1].a}
      </p>
    </div>
    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q3</span>
        <span>${faqs[2].q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${faqs[2].a}
      </p>
    </div>
</div>`;

  // Find FAQ section in content
  // Look for header: ## ... (FAQ) or ## 자주 묻는 질문
  const headerMatch = content.match(/(##\s*(?:환자분들이\s*진료실에서\s*가장\s*많이\s*묻는\s*현실적\s*질문|자주\s*묻는\s*질문)[^\n]*\n+)/i);
  
  if (headerMatch) {
    const headerStart = headerMatch.index;
    const headerEnd = headerStart + headerMatch[0].length;
    
    // Find the end of FAQ container - usually marked by Doctor's Clinical Insight box or next section or EOF
    const afterHeader = content.slice(headerEnd);
    
    // Check where the next block starts
    let nextBlockMatch = afterHeader.match(/\n*(<div class="my-8 p-6|<div class="my-8\s+p-6|---\s*\n+<div class="my-8|\n##\s+|\n---\s*\n\s*##|$)/);
    
    if (nextBlockMatch) {
      const faqBlockLength = nextBlockMatch.index;
      const beforeHeader = content.slice(0, headerEnd);
      const afterBlock = afterHeader.slice(faqBlockLength);
      
      content = beforeHeader + newFaqHtml + '\n\n' + afterBlock.replace(/^\n+/, '');
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
      console.log(`[UPDATED] ${file} (Topic: ${topicKey})`);
    } else {
      console.log(`[CANNOT FIND END] ${file}`);
    }
  } else {
    console.log(`[NO HEADER] ${file}`);
  }
}

console.log(`\n=== Total Updated Files: ${updatedCount} / ${files.length} ===`);
