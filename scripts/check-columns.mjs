import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'content', 'column');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

console.log(`[Column Audit] Checking ${files.length} columns in ${dir}...\n`);

let allGood = true;

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const match = content.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  if (!match) {
    console.error(`❌ [${f}] Frontmatter missing or invalid`);
    allGood = false;
    return;
  }
  const fm = match[1];
  const body = match[2];
  const hasStrayDivider = /\r?\n\s*---\s*\r?\n/.test(body);
  const brokenCount = (content.match(/\uFFFD/g) || []).length;
  const qMatches = body.match(/<span class="bg-\[#2F5D50\] text-white text-xs px-2 py-0\.5 rounded-md font-bold mt-0\.5 shrink-0">Q\d+<\/span>/g) || [];
  const cardCount = qMatches.length;
  
  const titleMatch = fm.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : 'NO TITLE';
  const categoryMatch = fm.match(/category:\s*"([^"]+)"/);
  const category = categoryMatch ? categoryMatch[1] : 'NO CATEGORY';

  const status = (!hasStrayDivider && brokenCount === 0 && cardCount >= 4) ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} | ${f.padEnd(34)} | Cards: ${cardCount} | Dividers: ${hasStrayDivider ? 'YES' : 'NO '} | Broken: ${brokenCount} | Cat: ${category.padEnd(16)} | Title: ${title}`);
  
  if (hasStrayDivider || brokenCount > 0 || cardCount < 4) {
    allGood = false;
  }
});

console.log(`\n======================================================`);
console.log(`[Column Audit Result] ${allGood ? '🎉 ALL COLUMNS ARE 100% CLEAN & VERIFIED!' : '⚠️ SOME ISSUES FOUND'}`);
console.log(`======================================================\n`);
