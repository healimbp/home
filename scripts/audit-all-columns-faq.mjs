import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'content', 'column');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

console.log(`[전체 ${files.length}개 칼럼 FAQ 전수 점검]\n`);

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const titleMatch = content.match(/title:\s*["']?(.*?)["']?$/m);
  const categoryMatch = content.match(/category:\s*["']?(.*?)["']?$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'NO TITLE';
  const category = categoryMatch ? categoryMatch[1].trim() : 'NO CATEGORY';

  // Extract FAQ questions
  const qMatches = [...content.matchAll(/<span>(.*?[\?？])<\/span>/g)].map(m => m[1].trim());

  results.push({
    file,
    category,
    title,
    faqCount: qMatches.length,
    faqs: qMatches
  });
}

console.log(`총 ${results.length}개 칼럼 점검 완료:`);
results.forEach((r, i) => {
  console.log(`\n[${i + 1}/${results.length}] ${r.file} (${r.category})`);
  console.log(`  제목: ${r.title}`);
  console.log(`  FAQ (${r.faqCount}개):`);
  r.faqs.forEach((q, idx) => {
    console.log(`    Q${idx + 1}: ${q}`);
  });
});
