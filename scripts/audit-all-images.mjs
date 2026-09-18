import fs from 'fs';
import path from 'path';

const blogDir = 'static/blog-images';
const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

console.log('=== AVAILABLE IMAGE DIRECTORIES & THUMBNAILS ===');
for (const d of dirs) {
  const subFiles = fs.readdirSync(path.join(blogDir, d));
  const mains = subFiles.filter(f => f.includes('01') || f.includes('main') || f.includes('thumbnail'));
  console.log(`${d} -> [${mains.join(', ')}]`);
}
