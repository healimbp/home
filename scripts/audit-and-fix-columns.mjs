/**
 * 칼럼 파일 썸네일 및 카테고리 전수 감사 및 일괄 교정 스크립트
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail, verifyStaticImage } from './thumbnail-resolver.mjs';
import { rebuildColumnIndex } from './build-all-columns.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');

async function auditAndFixColumns() {
  console.log('🔍 [Column Audit] Scanning all column markdown files in content/column/ ...\n');

  const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
  let fixedCount = 0;
  let validCount = 0;
  const auditReport = [];

  for (const filename of files) {
    const filePath = path.join(columnDir, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const slug = filename.replace(/\.md$/, '');

    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatterMatch) {
      console.warn(`⚠️ [Skip] No frontmatter found in ${filename}`);
      continue;
    }

    const fmRaw = frontmatterMatch[1];
    const titleMatch = fmRaw.match(/title:\s*["']?(.*?)["']?$/m);
    const catMatch = fmRaw.match(/category:\s*["']?(.*?)["']?$/m);
    const imgMatch = fmRaw.match(/image:\s*["']?(.*?)["']?$/m);

    const title = titleMatch ? titleMatch[1].trim() : '';
    const category = catMatch ? catMatch[1].trim() : '';
    const currentImage = imgMatch ? imgMatch[1].trim() : '';

    // 정확한 썸네일 산출
    const expectedImage = resolveThumbnail({
      categoryName: category,
      title: title,
      slug: slug,
      currentImage: currentImage
    });

    const isImageValid = verifyStaticImage(currentImage);
    const needsFix = currentImage !== expectedImage || !isImageValid;

    if (needsFix) {
      let newFm = fmRaw;
      if (imgMatch) {
        newFm = newFm.replace(/image:\s*["']?.*?["']?$/m, `image: "${expectedImage}"`);
      } else {
        newFm = newFm + `\nimage: "${expectedImage}"`;
      }

      const newContent = content.replace(frontmatterMatch[0], `---\n${newFm.trim()}\n---`);
      fs.writeFileSync(filePath, newContent, 'utf-8');

      auditReport.push({
        file: filename,
        title: title.slice(0, 40) + '...',
        category,
        oldImage: currentImage,
        newImage: expectedImage,
        status: 'FIXED 🛠️'
      });
      fixedCount++;
    } else {
      validCount++;
    }
  }

  console.table(auditReport);
  console.log(`\n✅ [Column Audit Complete] Total: ${files.length} | Valid: ${validCount} | Fixed: ${fixedCount}\n`);

  // 인덱스 재구축
  console.log('🔄 Rebuilding content/column/_index.md...');
  await rebuildColumnIndex();
  console.log('🎉 Index rebuild complete!');
}

auditAndFixColumns().catch(err => {
  console.error('❌ Audit Error:', err);
  process.exit(1);
});
