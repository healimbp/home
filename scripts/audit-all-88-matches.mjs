import fs from 'fs';
import path from 'path';

const columnDir = 'content/column';
const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');

console.log(`=== Auditing FAQ Relevance for ALL ${files.length} Columns ===\n`);

const mismatches = [];

for (const file of files) {
  const filePath = path.join(columnDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');

  const titleMatch = raw.match(/title:\s*['"]?([^'\r\n"]+)/);
  const title = titleMatch ? titleMatch[1] : file;

  const qMatches = [...raw.matchAll(/Q[1-3]<\/span>\s*<span>(.*?)<\/span>/g)].map(m => m[1]);

  console.log(`[FILE] ${file}`);
  console.log(`  Title: ${title}`);
  console.log(`  FAQs (${qMatches.length}):`);
  qMatches.forEach((q, i) => console.log(`    ${i + 1}. ${q}`));
  console.log('');
}
