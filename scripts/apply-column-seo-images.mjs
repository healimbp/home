import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(columnDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*["']?(.*?)["']?$/m);
  const categoryMatch = content.match(/category:\s*["']?(.*?)["']?$/m);
  const regionMatch = content.match(/region:\s*["']?(.*?)["']?$/m);
  const currentImageMatch = content.match(/^image:\s*["']?(.*?)["']?$/m);

  const title = titleMatch ? titleMatch[1].trim() : '';
  const category = categoryMatch ? categoryMatch[1].trim() : '';
  const region = regionMatch ? regionMatch[1].trim() : '';
  const currentImage = currentImageMatch ? currentImageMatch[1].trim() : '';
  const slug = file.replace(/\.md$/, '');

  const matchedImage = resolveThumbnail({
    categoryId: category,
    categoryName: category,
    title,
    slug,
    region,
    currentImage
  });

  // front matter에 image 필드 확인 및 갱신
  if (/^image:\s*.*$/m.test(content)) {
    content = content.replace(/^image:\s*.*$/m, `image: "${matchedImage}"`);
  } else {
    // tags: 또는 category: 바로 아래에 image: 추가
    if (/^category:\s*.*$/m.test(content)) {
      content = content.replace(/^(category:\s*.*)$/m, `$1\nimage: "${matchedImage}"`);
    } else if (/^tags:\s*.*$/m.test(content)) {
      content = content.replace(/^(tags:\s*.*)$/m, `image: "${matchedImage}"\n$1`);
    } else {
      content = content.replace(/^---/m, `---\nimage: "${matchedImage}"`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
}

console.log(`🎉 총 ${updatedCount}개 칼럼에 정밀 매칭 대표 썸네일(image) 파라미터 적용 완료!`);

