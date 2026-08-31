import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
const urls = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  urls.push(`https://healimbp.com/column/${slug}/`);
}

// 기본 주요 랜딩페이지도 포함
const priorityPages = [
  'https://healimbp.com/',
  'https://healimbp.com/column/',
  'https://healimbp.com/about/',
  'https://healimbp.com/treatments/',
  'https://healimbp.com/location/',
  'https://healimbp.com/reviews/',
  'https://healimbp.com/consultation/'
];

const allUrls = [...priorityPages, ...urls];
const outputPath = path.resolve(__dirname, '..', 'naver_urls_to_submit.txt');
fs.writeFileSync(outputPath, allUrls.join('\n'), 'utf8');

console.log(`✅ 총 ${allUrls.length}개의 정규 URL이 naver_urls_to_submit.txt에 저장되었습니다!`);
