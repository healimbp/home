import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.resolve(__dirname, '..', 'content', 'column');

// 25개 칼럼 데이터 정의 모듈을 임포트하거나 정의
// 전체 25개 칼럼 데이터를 파트별로 나누어 관리
