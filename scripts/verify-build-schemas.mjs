import fs from 'fs';

console.log('=== VERIFYING PUBLIC/INDEX.HTML ===');
const indexHtml = fs.readFileSync('public/index.html', 'utf8');
const regex = /<script type=["']?application\/ld\+json["']?>([\s\S]*?)<\/script>/gi;
let match;
let i = 1;
while ((match = regex.exec(indexHtml)) !== null) {
  console.log(`\n--- JSON-LD #${i++} in index.html ---`);
  try {
    const parsed = JSON.parse(match[1]);
    console.log(JSON.stringify(parsed, null, 2));
  } catch (e) {
    console.log('Raw text (JSON parse error):', match[1]);
  }
}

console.log('\n=== VERIFYING COLUMN ARTICLE SCHEMA ===');
const colHtml = fs.readFileSync('public/column/tinnitus-autonomic-dizziness/index.html', 'utf8');
i = 1;
regex.lastIndex = 0;
while ((match = regex.exec(colHtml)) !== null) {
  console.log(`\n--- JSON-LD #${i++} in column page ---`);
  try {
    const parsed = JSON.parse(match[1]);
    console.log(JSON.stringify(parsed, null, 2));
  } catch (e) {
    console.log('Raw text (JSON parse error):', match[1]);
  }
}

console.log('\n=== VERIFYING STATIC FILES IN PUBLIC/ ===');
console.log('llms.txt exists:', fs.existsSync('public/llms.txt'));
console.log('llms-full.txt exists:', fs.existsSync('public/llms-full.txt'));
console.log('robots.txt exists:', fs.existsSync('public/robots.txt'));
if (fs.existsSync('public/robots.txt')) {
  console.log('\n--- robots.txt content ---');
  console.log(fs.readFileSync('public/robots.txt', 'utf8'));
}
