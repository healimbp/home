/**
 * HealimBP Q&A Generator Script
 * Usage: node scripts/generate-qa.mjs --title "질문제목" --category "진료과목" --location "지역명" --patient "질문자정보"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QA_DIR = path.join(__dirname, '..', 'content', 'qa');

if (!fs.existsSync(QA_DIR)) {
  fs.mkdirSync(QA_DIR, { recursive: true });
}

console.log('✅ Q&A directory ready:', QA_DIR);
