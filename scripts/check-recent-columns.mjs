import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('content/column').filter(f => f.endsWith('.md') && f !== '_index.md');
const reports = [];

for (const f of files) {
  const content = fs.readFileSync(path.join('content/column', f), 'utf8');
  const dateMatch = content.match(/date:\s*['"]?([^'\r\n"]+)/);
  const date = dateMatch ? dateMatch[1] : '';
  const titleMatch = content.match(/title:\s*['"]?([^'\r\n"]+)/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Look for generic FAQ patterns
  const generic1 = content.includes('양약') && (content.includes('병행') || content.includes('중단'));
  const generic2 = content.includes('치료 기간은 얼마나');
  const generic3 = content.includes('첫 내원 시 어떤 검사') || content.includes('어떤 검사를 받나요');
  
  // Extract questions from FAQ
  const faqPart = content.includes('자주 묻는 질문') ? content.slice(content.indexOf('자주 묻는 질문')) : '';
  const questionMatches = [...faqPart.matchAll(/<span>(.*?\?.*?)<\/span>/g)].map(m => m[1].trim());
  const mdQuestionMatches = [...faqPart.matchAll(/###\s*(Q[0-9]?[:\.\s]*[^\n\r]+)/g)].map(m => m[1].trim());
  
  reports.push({
    file: f,
    date,
    title,
    generic: (generic1 || generic2 || generic3),
    genericDetails: { generic1, generic2, generic3 },
    questions: questionMatches.length > 0 ? questionMatches : mdQuestionMatches,
    faqLength: faqPart.length
  });
}

reports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

console.log('=== Total Columns:', reports.length, '===');
console.log('\n--- Top 20 Most Recent Columns (by date in frontmatter) ---');
for (const r of reports.slice(0, 20)) {
  console.log(`\n[${r.date}] ${r.file}`);
  console.log(`Title: ${r.title}`);
  console.log(`Generic Flag: ${r.generic} (${JSON.stringify(r.genericDetails)})`);
  console.log(`Questions (${r.questions.length}):`, r.questions);
}

console.log('\n--- Any Column with Generic Flag ---');
const generics = reports.filter(r => r.generic);
console.log(`Total Generic columns found: ${generics.length}`);
for (const g of generics) {
  console.log(`- ${g.file} (${g.date}): ${g.questions.join(' | ')}`);
}
