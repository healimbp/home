const res = await fetch('https://healimbp.com/column/tinnitus-autonomic-dizziness/');
const html = await res.text();
const regex = /<script type=["']?application\/ld\+json["']?>([\s\S]*?)<\/script>/gi;
let match;
console.log('--- JSON-LD SCRIPTS FOUND ---');
while ((match = regex.exec(html)) !== null) {
  console.log(match[1]);
}
