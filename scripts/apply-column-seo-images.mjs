import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

// 대표 이미지 매칭 로직
function getThumbnailForColumn(filename, title, category) {
  const f = filename.toLowerCase();
  const t = title.toLowerCase();
  const c = category.toLowerCase();

  // 1. 특정 전용 이미지가 존재하는 경우 우선 매칭
  if (f.includes('incheon-seogu-dizziness') || t.includes('서구') && t.includes('어지럼')) {
    return '/blog-images/incheon-seogu-dizziness/01_naver_main_thumbnail.jpg';
  }
  if (f.includes('bupyeong-adult-adhd') || t.includes('성인 adhd') || t.includes('성인adhd')) {
    return '/blog-images/bupyeong-adult-adhd/01_naver_main_thumbnail.jpg';
  }
  if (f.includes('panic-disorder-breathing') || t.includes('과호흡') || t.includes('부평 공황')) {
    return '/blog-images/bupyeong-panic/01_naver_main_thumbnail.jpg';
  }
  if (f.includes('child-tic-disorder') || f.includes('vocal-tic') || (t.includes('틱') && t.includes('부평'))) {
    return '/blog-images/bupyeong-tic/01_naver_main_thumbnail.jpg';
  }
  if (f.includes('bucheon-neuropsychiatry-insomnia') || (t.includes('부천') && t.includes('불면'))) {
    return '/blog-images/bucheon-insomnia/01_main_summary_thumbnail.png';
  }
  if (f.includes('ocd') || t.includes('강박')) {
    return '/blog-images/bucheon-ocd/01_main_summary_thumbnail.png';
  }

  // 2. 카테고리별 고화질 5대 클리닉 썸네일 매칭
  if (c.includes('우울') || c.includes('화병') || c.includes('번아웃') || t.includes('우울') || t.includes('무기력') || t.includes('번아웃') || t.includes('신체화') || t.includes('담적')) {
    return '/blog-images/depression-somatic/01_naver_main_thumbnail.png';
  }
  if (c.includes('불면') || c.includes('수면') || t.includes('불면') || t.includes('수면') || t.includes('수면제') || t.includes('가위눌림') || t.includes('야경증')) {
    return '/blog-images/insomnia-sleep/01_naver_main_thumbnail.png';
  }
  if (c.includes('공황') || c.includes('불안') || c.includes('강박') || t.includes('공황') || t.includes('불안') || t.includes('예기불안') || t.includes('사회불안') || t.includes('폐소공포')) {
    return '/blog-images/panic-anxiety/01_naver_main_thumbnail.png';
  }
  if (c.includes('자율신경') || c.includes('실신') || c.includes('어지럼') || c.includes('이명') || t.includes('자율신경') || t.includes('어지럼') || t.includes('실신') || t.includes('이명') || t.includes('두통') || t.includes('턱관절')) {
    return '/blog-images/autonomic-dizziness/01_naver_main_thumbnail.png';
  }
  if (c.includes('소아') || c.includes('adhd') || c.includes('틱') || t.includes('틱') || t.includes('adhd') || t.includes('집중력')) {
    return '/blog-images/tic-adhd/01_naver_main_thumbnail.png';
  }

  // 기본 fallback
  return '/blog-images/panic-anxiety/01_naver_main_thumbnail.png';
}

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');
let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(columnDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*["']?(.*?)["']?$/m);
  const categoryMatch = content.match(/category:\s*["']?(.*?)["']?$/m);
  const title = titleMatch ? titleMatch[1].trim() : '';
  const category = categoryMatch ? categoryMatch[1].trim() : '';

  const matchedImage = getThumbnailForColumn(file, title, category);

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

console.log(`🎉 총 ${updatedCount}개 칼럼에 네이버 최적화 대표 썸네일(image) 파라미터 적용 완료!`);
