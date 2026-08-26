import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'content', 'column');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');
const titles = {};

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const m = content.match(/title:\s*["']?(.*?)["']?$/m);
  const t = m ? m[1].trim() : '';
  if (!titles[t]) titles[t] = [];
  titles[t].push(f);
}

console.log(`Total column files: ${files.length}`);
let dupCount = 0;
for (const [t, list] of Object.entries(titles)) {
  if (list.length > 1) {
    dupCount++;
    console.log(`[DUPLICATE #${dupCount}] Title: "${t}"`);
    console.log(`  Files:`, list);
  }
}
if (dupCount === 0) {
  console.log('No duplicate titles found!');
}
