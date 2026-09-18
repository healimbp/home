/**
 * 썸네일 이미지 단일 소스 리졸버 (Hierarchical Multi-Tier Single Source of Truth)
 * 해아림한의원 인천부평점 - 질환 세부 주제 + 대상 지역 100% 일치 정밀 매칭
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const staticDir = path.join(rootDir, 'static');

/**
 * static 디렉터리 내에 해당 이미지 파일이 실제 존재하는지 확인
 */
export function verifyStaticImage(webPath) {
  if (!webPath) return false;
  const cleanPath = webPath.replace(/^\//, '');
  const absPath = path.join(staticDir, cleanPath);
  return fs.existsSync(absPath);
}

/**
 * 카테고리 ID 정규화 (1차 상위 질환군 확정)
 */
export function detectCategoryId(categoryId = '', categoryName = '', title = '', slug = '') {
  const cId = (categoryId || '').toLowerCase();
  const cName = (categoryName || '').toLowerCase();
  const t = (title + ' ' + slug).toLowerCase();

  if (cId === 'tic' || cName.includes('소아') || cName.includes('틱') || cName.includes('adhd')) return 'tic';
  if (cId === 'insomnia' || cName.includes('불면') || cName.includes('수면')) return 'insomnia';
  if (cId === 'autonomic' || cName.includes('자율신경') || cName.includes('어지럼') || cName.includes('이명') || cName.includes('실신')) return 'autonomic';
  if (cId === 'panic' || cName.includes('공황') || cName.includes('불안') || cName.includes('강박')) return 'panic';
  if (cId === 'stress' || cName.includes('우울') || cName.includes('화병') || cName.includes('번아웃')) return 'stress';
  if (cId === 'somatic' || cName.includes('신체화') || cName.includes('담적') || cName.includes('두통') || cName.includes('턱관절')) return 'somatic';

  // 제목/슬러그 기반 카테고리 추론
  if (t.includes('tic') || t.includes('adhd') || t.includes('틱') || t.includes('뚜렛') || t.includes('소아')) return 'tic';
  if (t.includes('insomnia') || t.includes('sleep') || t.includes('불면') || t.includes('입면') || t.includes('중도각성') || t.includes('다몽')) return 'insomnia';
  if (t.includes('autonomic') || t.includes('dizziness') || t.includes('syncope') || t.includes('tinnitus') || t.includes('자율신경') || t.includes('실신') || t.includes('어지럼') || t.includes('이명') || t.includes('미주신경')) return 'autonomic';
  if (t.includes('panic') || t.includes('anxiety') || t.includes('ocd') || t.includes('phobia') || t.includes('공황') || t.includes('과호흡') || t.includes('광장공포') || t.includes('강박') || t.includes('사회공포') || t.includes('발표불안') || t.includes('예기불안')) return 'panic';
  if (t.includes('depression') || t.includes('stress') || t.includes('우울') || t.includes('화병') || t.includes('번아웃') || t.includes('매핵기')) return 'stress';
  if (t.includes('somatic') || t.includes('신체화') || t.includes('담적') || t.includes('두통') || t.includes('턱관절') || t.includes('이갈이')) return 'somatic';

  return 'panic';
}

/**
 * 주어진 칼럼 메타데이터로부터 최적의 로컬/웹 썸네일 경로를 안전하고 정밀하게 결정
 */
export function resolveThumbnail({ categoryId = '', categoryName = '', title = '', slug = '', region = '', currentImage = '' }) {
  const mainCat = detectCategoryId(categoryId, categoryName, title, slug);
  const t = (title + ' ' + slug).toLowerCase();
  const r = (region + ' ' + title).toLowerCase();

  // 1. 소아청소년 & 성인 ADHD · 틱장애
  if (mainCat === 'tic') {
    // (1) 성인 ADHD
    if (t.includes('성인 adhd') || t.includes('성인adhd') || t.includes('adult-adhd') || t.includes('미루기') || t.includes('실행기능')) {
      if (verifyStaticImage('/blog-images/bupyeong-adult-adhd/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bupyeong-adult-adhd/01_naver_main_thumbnail.jpg';
      }
    }
    // (2) 소아 ADHD / 주의력결핍 / 산만함
    if (t.includes('adhd') || t.includes('산만') || t.includes('주의력') || t.includes('집중력') || t.includes('child-adhd') || t.includes('스마트폰')) {
      if (verifyStaticImage('/blog-images/bupyeong-adhd/01_main_summary_thumbnail.png')) {
        return '/blog-images/bupyeong-adhd/01_main_summary_thumbnail.png';
      }
    }
    // (3) 청소년 틱장애 (중고등학생)
    if (t.includes('청소년') || t.includes('중고등') || t.includes('teen')) {
      if (verifyStaticImage('/blog-images/bucheon-teen-tic/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bucheon-teen-tic/01_naver_main_thumbnail.jpg';
      }
    }
    // (4) 부천 틱장애
    if (r.includes('부천') && (t.includes('틱') || t.includes('뚜렛') || t.includes('tic'))) {
      if (verifyStaticImage('/blog-images/bucheon-tic/01_bucheon_tic_thumbnail_3d.jpg')) {
        return '/blog-images/bucheon-tic/01_bucheon_tic_thumbnail_3d.jpg';
      }
    }
    // (5) 인천 틱장애
    if (r.includes('인천') && !r.includes('부평') && (t.includes('틱') || t.includes('뚜렛') || t.includes('tic'))) {
      if (verifyStaticImage('/blog-images/incheon-tic/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/incheon-tic/01_naver_main_thumbnail.jpg';
      }
    }
    // (6) 부평 및 일반 소아 틱장애
    if (verifyStaticImage('/blog-images/bupyeong-tic/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-tic/01_naver_main_thumbnail.jpg';
    }
    return '/blog-images/tic-adhd/01_naver_main_thumbnail.png';
  }

  // 2. 불면증 · 수면장애
  if (mainCat === 'insomnia') {
    if (r.includes('부천') && verifyStaticImage('/blog-images/bucheon-insomnia/01_main_summary_thumbnail.png')) {
      return '/blog-images/bucheon-insomnia/01_main_summary_thumbnail.png';
    }
    if (r.includes('노원') && verifyStaticImage('/blog-images/nowon-insomnia/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/nowon-insomnia/01_naver_main_thumbnail.jpg';
    }
    if (r.includes('인천') && !r.includes('부평') && verifyStaticImage('/blog-images/incheon-insomnia/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/incheon-insomnia/01_naver_main_thumbnail.jpg';
    }
    if (verifyStaticImage('/blog-images/bupyeong-insomnia/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-insomnia/01_naver_main_thumbnail.jpg';
    }
    return '/blog-images/insomnia-sleep/01_naver_main_thumbnail.png';
  }

  // 3. 자율신경 & 실신 · 어지럼증 · 이명
  if (mainCat === 'autonomic') {
    // (1) 어지럼증 / 이명 / 실신
    if (t.includes('어지럼') || t.includes('이명') || t.includes('실신') || t.includes('dizziness') || t.includes('tinnitus') || t.includes('syncope')) {
      if ((r.includes('서구') || r.includes('청라') || r.includes('검단') || t.includes('seogu')) && verifyStaticImage('/blog-images/incheon-seogu-dizziness/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/incheon-seogu-dizziness/01_naver_main_thumbnail.jpg';
      }
      if (r.includes('부천') && verifyStaticImage('/blog-images/bucheon-dizziness/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bucheon-dizziness/01_naver_main_thumbnail.jpg';
      }
      if (verifyStaticImage('/blog-images/bupyeong-dizziness/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bupyeong-dizziness/01_naver_main_thumbnail.jpg';
      }
    }
    // (2) 자율신경실조증 / 만성피로 / 다한증
    if (r.includes('부천') && verifyStaticImage('/blog-images/bucheon-autonomic/01_bucheon_autonomic_main_thumbnail.png')) {
      return '/blog-images/bucheon-autonomic/01_bucheon_autonomic_main_thumbnail.png';
    }
    if (verifyStaticImage('/blog-images/bupyeong-autonomic/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-autonomic/01_naver_main_thumbnail.jpg';
    }
    return '/blog-images/autonomic-dizziness/01_naver_main_thumbnail.png';
  }

  // 4. 공황 · 불안 & 강박증
  if (mainCat === 'panic') {
    // (1) 강박증
    if (t.includes('강박') || t.includes('ocd') || t.includes('확인')) {
      if (verifyStaticImage('/blog-images/bucheon-ocd/01_main_summary_thumbnail.png')) {
        return '/blog-images/bucheon-ocd/01_main_summary_thumbnail.png';
      }
    }
    // (2) 불안장애 / 사회공포증 / 발표불안 / 예기불안 / 범불안 (공황발작 단어가 없는 경우 우선 매칭)
    const isAnxietySpecific = t.includes('사회공포') || t.includes('발표') || t.includes('목소리') || t.includes('예기불안') || t.includes('범불안') || (t.includes('불안') && !t.includes('공황발작') && !t.includes('공황장애'));
    if (isAnxietySpecific) {
      if ((r.includes('청라') || r.includes('서구')) && verifyStaticImage('/blog-images/cheongna-anxiety/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/cheongna-anxiety/01_naver_main_thumbnail.jpg';
      }
      if (r.includes('부천') && verifyStaticImage('/blog-images/bucheon-anxiety/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bucheon-anxiety/01_naver_main_thumbnail.jpg';
      }
      if (r.includes('인천') && !r.includes('부평') && verifyStaticImage('/blog-images/incheon-anxiety/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/incheon-anxiety/01_naver_main_thumbnail.jpg';
      }
      if (verifyStaticImage('/blog-images/bupyeong-anxiety/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bupyeong-anxiety/01_naver_main_thumbnail.jpg';
      }
    }
    // (3) 공황장애 / 공황발작 / 과호흡 / 광장공포증
    if (r.includes('상동') || (r.includes('부천') && t.includes('공황'))) {
      if (verifyStaticImage('/blog-images/bucheon-sangdong-panic/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/bucheon-sangdong-panic/01_naver_main_thumbnail.jpg';
      }
    }
    if (r.includes('남동') || r.includes('구월')) {
      if (verifyStaticImage('/blog-images/incheon-namdong-panic/01_naver_main_thumbnail.jpg')) {
        return '/blog-images/incheon-namdong-panic/01_naver_main_thumbnail.jpg';
      }
    }
    if (r.includes('인천') && !r.includes('부평') && verifyStaticImage('/blog-images/incheon-panic/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/incheon-panic/01_naver_main_thumbnail.jpg';
    }
    if (verifyStaticImage('/blog-images/bupyeong-panic/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-panic/01_naver_main_thumbnail.jpg';
    }
    return '/blog-images/panic-anxiety/01_naver_main_thumbnail.png';
  }

  // 5. 우울증 · 화병 & 번아웃
  if (mainCat === 'stress') {
    if ((r.includes('서구') || r.includes('청라') || r.includes('검단')) && verifyStaticImage('/blog-images/incheon-seogu-depression/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/incheon-seogu-depression/01_naver_main_thumbnail.jpg';
    }
    if (r.includes('부천') && verifyStaticImage('/blog-images/bucheon-depression/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bucheon-depression/01_naver_main_thumbnail.jpg';
    }
    if (r.includes('인천') && !r.includes('부평') && verifyStaticImage('/blog-images/incheon-depression/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/incheon-depression/01_naver_main_thumbnail.jpg';
    }
    if (verifyStaticImage('/blog-images/bupyeong-depression/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-depression/01_naver_main_thumbnail.jpg';
    }
    return '/blog-images/depression-somatic/01_naver_main_thumbnail.png';
  }

  // 6. 신체화 & 담적 · 두통 · 턱관절
  if (mainCat === 'somatic') {
    if ((t.includes('두통') || t.includes('턱관절')) && verifyStaticImage('/blog-images/bupyeong-dizziness/01_naver_main_thumbnail.jpg')) {
      return '/blog-images/bupyeong-dizziness/01_naver_main_thumbnail.jpg';
    }
    if (verifyStaticImage('/blog-images/depression-somatic/01_naver_main_thumbnail.png')) {
      return '/blog-images/depression-somatic/01_naver_main_thumbnail.png';
    }
    return '/blog-images/depression-somatic/01_naver_main_thumbnail.png';
  }

  // 7. 기존 이미지 검증
  if (currentImage && verifyStaticImage(currentImage)) {
    return currentImage.startsWith('/') ? currentImage : `/${currentImage}`;
  }

  return '/blog-images/01_naver_main_thumbnail.jpg';
}

/**
 * 웹 절대 URL 썸네일 반환 (외부 플랫폼용)
 */
export function getAbsoluteThumbnailUrl(params) {
  const base = 'https://healimbp.com';
  const relPath = resolveThumbnail(params);
  return `${base}${relPath.startsWith('/') ? relPath : `/${relPath}`}`;
}

