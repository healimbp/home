import { selectSmartTarget, generateFallbackContent, CATEGORIES } from './generate-column.mjs';

console.log('=== FAQ Dynamic Generation Test for 3 Random Topics ===\n');

for (let i = 0; i < 3; i++) {
  const cat = CATEGORIES[i * 2];
  const topic = cat.topics[0];
  const col = generateFallbackContent(cat, topic, { short: '인천 부평' }, topic.titleSuffix, '2026-09-08', 'test-id', i);
  console.log(`[카테고리: ${cat.name} | 주제: ${topic.focus}]`);
  console.log(`제목: ${col.title}`);
  col.faq.forEach((f, idx) => {
    console.log(`  Q${idx + 1}: ${f.q}`);
    console.log(`     A: ${f.a.slice(0, 60)}...`);
  });
  console.log('--------------------------------------------------\n');
}
