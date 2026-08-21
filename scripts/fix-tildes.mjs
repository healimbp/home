import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

console.log('[Fix-Tildes] Scanning and fixing all column markdown files...');

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md'));
let totalReplaced = 0;

files.forEach(f => {
  const filePath = path.join(columnDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // 프론트매터 분리
  const match = content.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  if (match) {
    let fm = match[1];
    let body = match[2];

    const tildeInFm = (fm.match(/~/g) || []).length;
    const tildeInBody = (body.match(/~/g) || []).length;

    if (tildeInFm + tildeInBody > 0) {
      // 프론트매터와 본문 내의 ~ 를 안전한 전각 물결표(～)로 치환
      fm = fm.replace(/~/g, '～');
      body = body.replace(/~/g, '～');

      const newContent = `---\n${fm.trim()}\n---\n\n${body.trim()}\n`;
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ [${f}] Replaced ${tildeInFm + tildeInBody} tildes (FM: ${tildeInFm}, Body: ${tildeInBody})`);
      totalReplaced += (tildeInFm + tildeInBody);
    } else {
      console.log(`✨ [${f}] Clean (0 tildes)`);
    }
  }
});

console.log(`\n[Fix-Tildes] 🎉 Total ${totalReplaced} tildes successfully replaced across all column files!`);
