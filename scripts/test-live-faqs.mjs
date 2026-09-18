import fs from 'fs';

async function sampleCheck() {
  const samples = [
    { name: '미주신경성 실신', url: 'https://healimbp.com/column/vasovagal-syncope/' },
    { name: '성인 ADHD', url: 'https://healimbp.com/column/bupyeong-adult-adhd/' },
    { name: '공황장애 호흡곤란', url: 'https://healimbp.com/column/panic-disorder-breathing/' },
    { name: '부천 불면증 (신경정신과)', url: 'https://healimbp.com/column/bucheon-neuropsychiatry-insomnia/' },
    { name: '턱관절 & 이갈이', url: 'https://healimbp.com/column/tmj-bruxism-stress/' },
    { name: '최신 9월 8일 자율신경', url: 'https://healimbp.com/column/post-2026-09-08-autonomic-8741/' },
    { name: '최신 9월 8일 틱장애', url: 'https://healimbp.com/column/post-2026-09-08-tic-1115/' }
  ];

  for (const s of samples) {
    const res = await fetch(s.url + '?t=' + Date.now(), { headers: { 'Cache-Control': 'no-cache' } });
    const html = await res.text();
    console.log('\n==============================');
    console.log('📌 [' + s.name + '] ' + s.url);
    const regex = /<span class="bg-\[#2F5D50\][^>]*>(Q\d)<\/span>\s*<span>([^<]+)<\/span>/g;
    let match;
    let count = 0;
    while ((match = regex.exec(html)) !== null) {
      console.log(` - ${match[1]}: ${match[2]}`);
      count++;
    }
    if (count === 0) {
      console.log(' [!] regex not matched, checking for FAQ block...');
      const idx = html.indexOf('진료실 자주 묻는 질문');
      if (idx !== -1) {
        console.log(html.slice(idx, idx + 400));
      }
    }
  }
}
sampleCheck();
