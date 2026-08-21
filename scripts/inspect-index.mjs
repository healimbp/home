import fs from 'fs';

const indexContent = fs.readFileSync('content/column/_index.md', 'utf8');
const articles = indexContent.match(/<article[\s\S]*?<\/article>/g) || [];

console.log(`Total articles in content/column/_index.md: ${articles.length}\n`);

const seen = new Set();
articles.forEach((a, i) => {
  const titleMatch = a.match(/<h3[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
  const hrefMatch = a.match(/href="([^"]+)"/);
  const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : 'No title';
  const href = hrefMatch ? hrefMatch[1] : 'No href';
  const isDuplicate = seen.has(title) || seen.has(href);
  seen.add(title);
  seen.add(href);

  console.log(`#${i+1} ${isDuplicate ? '🚨 DUPLICATE' : '✅ UNIQUE'} | ${href.padEnd(42)} | ${title}`);
});
