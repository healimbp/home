import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const indexContent = fs.readFileSync(path.join(rootDir, 'content', 'column', '_index.md'), 'utf8');
const regex = /href="\/column\/([^"\/]+)\/"/g;
const links = new Set();
let match;
while ((match = regex.exec(indexContent)) !== null) {
  links.add(match[1]);
}

console.log(`[Verify] Found ${links.size} unique column links in _index.md`);

let missing = 0;
for (const slug of links) {
  const filePath = path.join(rootDir, 'content', 'column', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: content/column/${slug}.md`);
    missing++;
  } else {
    console.log(`✅ Verified: content/column/${slug}.md`);
  }
}

if (missing === 0) {
  console.log(`\n🎉 PERFECT: All ${links.size} column links in _index.md point to valid existing markdown files!`);
} else {
  console.error(`\n⚠️ ERROR: ${missing} missing files found!`);
}
