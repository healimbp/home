/**
 * 칼럼 데이터 및 썸네일 무결성 자동 검증 스크립트 (CI/CD Validator)
 * Usage: node scripts/validate-columns.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail, verifyStaticImage, detectCategoryId } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');

export function validateAllColumns() {
  console.log('🔍 [Column Validator] Starting column integrity and thumbnail audit...\n');

  const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
  let errors = [];
  let passed = 0;

  for (const filename of files) {
    const filePath = path.join(columnDir, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    const slug = filename.replace(/\.md$/, '');

    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
      errors.push({ file: filename, issue: 'No frontmatter found' });
      continue;
    }

    const fm = fmMatch[1];
    const title = (fm.match(/title:\s*["']?(.*?)["']?$/m) || [])[1]?.trim() || '';
    const category = (fm.match(/category:\s*["']?(.*?)["']?$/m) || [])[1]?.trim() || '';
    const image = (fm.match(/image:\s*["']?(.*?)["']?$/m) || [])[1]?.trim() || '';

    // 1. 필수 필드 검증
    if (!title) errors.push({ file: filename, issue: 'Missing title' });
    if (!category) errors.push({ file: filename, issue: 'Missing category' });
    if (!image) errors.push({ file: filename, issue: 'Missing image' });

    // 2. 썸네일 파일 실재 여부 검증
    if (image && !verifyStaticImage(image)) {
      errors.push({
        file: filename,
        issue: `Thumbnail file not found in static: ${image}`
      });
    }

    // 3. 카테고리와 썸네일 일치성 정밀 검증
    const expectedImage = resolveThumbnail({
      categoryName: category,
      title: title,
      slug: slug,
      currentImage: image
    });

    if (image !== expectedImage) {
      errors.push({
        file: filename,
        issue: `Thumbnail mismatch! Current: ${image} | Expected: ${expectedImage}`
      });
    } else {
      passed++;
    }
  }

  if (errors.length > 0) {
    console.error(`❌ [Validation FAILED] Found ${errors.length} issue(s) out of ${files.length} columns:\n`);
    console.table(errors);
    return false;
  }

  console.log(`✅ [Validation PASSED] All ${files.length} columns verified successfully! 100% thumbnail and category consistency.\n`);
  return true;
}

// 스크립트 직접 실행 시
const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isDirectRun) {
  const ok = validateAllColumns();
  if (!ok) process.exit(1);
}
