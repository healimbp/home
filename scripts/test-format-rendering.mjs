import { selectSmartTarget, generateFallbackContent, renderColumnMarkdown } from './generate-column.mjs';

const target = selectSmartTarget();
console.log('🎯 Target Selected:', {
  cat: target.selectedCat.name,
  topic: target.selectedTopic.focus,
  region: target.selectedRegion.short,
  format: target.formatName,
  pattern: target.patternName
});

for (let fmt = 0; fmt < 5; fmt++) {
  const col = generateFallbackContent(
    target.selectedCat,
    target.selectedTopic,
    target.selectedRegion,
    target.fullTitle,
    '2026-09-16',
    'test-col',
    0,
    null,
    fmt,
    target.formatNames[fmt]
  );
  const md = renderColumnMarkdown(col);
  console.log(`\n================== FORMAT ${fmt}: ${target.formatNames[fmt]} ==================`);
  const lines = md.split('\n');
  console.log('Title:', lines[1]);
  console.log('Sections & Headers:');
  lines
    .filter(l => l.startsWith('## ') || l.includes('section-label') || l.includes('table class=') || l.includes('MYTH') || l.includes('Step 1'))
    .slice(0, 15)
    .forEach(l => console.log('  ', l.trim()));
}
