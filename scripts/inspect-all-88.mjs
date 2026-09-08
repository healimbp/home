import fs from 'fs';
import path from 'path';
import { detectTopic, getDiverseFaq } from './column-faqs.mjs';

const files = fs.readdirSync('content/column').filter(f => f.endsWith('.md') && f !== '_index.md');
const results = [];

for (const f of files) {
  const raw = fs.readFileSync(path.join('content/column', f), 'utf8');
  const titleMatch = raw.match(/title:\s*['"]?([^'\r\n"]+)/);
  const title = titleMatch ? titleMatch[1] : '';
  const dateMatch = raw.match(/date:\s*['"]?([^'\r\n"]+)/);
  const date = dateMatch ? dateMatch[1] : '';
  
  const detectedTopic = detectTopic(title, raw);
  const qMatches = [...raw.matchAll(/Q[1-3]<\/span>\s*<span>(.*?)<\/span>/g)].map(m => m[1]);
  
  const hasGenericTime = raw.includes('치료 기간은 보통 얼마나') || raw.includes('치료 기간은 얼마나');
  const hasGenericExam = raw.includes('첫 내원 시 어떤 검사') || raw.includes('어떤 검사를 받나요');
  
  results.push({
    file: f,
    date,
    title,
    detectedTopic,
    questions: qMatches,
    hasGenericTime,
    hasGenericExam,
    qCount: qMatches.length
  });
}

console.log('=== Checked all', results.length, 'columns ===\n');
const needsUpdate = results.filter(r => r.hasGenericTime || r.hasGenericExam || r.qCount < 3);
console.log('Columns with generic questions or <3 questions:', needsUpdate.length);
needsUpdate.forEach(n => {
  console.log(`- [${n.date}] ${n.file} (Topic: ${n.detectedTopic})`);
  console.log(`  Title: ${n.title}`);
  console.log(`  Current Questions:`, n.questions);
});
