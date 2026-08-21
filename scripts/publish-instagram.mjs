import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Helper: Sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log('====================================================');
  console.log('  Instagram Auto-Publisher (Meta Graph API v22.0)  ');
  console.log('====================================================');

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;
  const githubRepo = process.env.GITHUB_REPOSITORY; // e.g. "healimbp/home" or owner/repo
  const customBaseUrl = process.env.PUBLIC_BASE_URL; // e.g. "https://healimbp.com"

  // 1. 최신 인스타그램 포스트 메타데이터 로드
  const latestMetaPath = path.join(rootDir, 'static', 'instagram', 'latest.json');
  if (!fs.existsSync(latestMetaPath)) {
    console.error('[Instagram Publish] No generated post found in static/instagram/latest.json.');
    console.log('Please run `node scripts/generate-instagram-card.mjs` first.');
    process.exit(0);
  }

  const metadata = JSON.parse(fs.readFileSync(latestMetaPath, 'utf-8'));
  const postDir = path.join(rootDir, 'static', 'instagram', metadata.postId);
  const captionPath = path.join(postDir, 'caption.txt');
  const caption = fs.existsSync(captionPath) ? fs.readFileSync(captionPath, 'utf-8') : metadata.captionSnippet;

  console.log(`[Post Info] ID: ${metadata.postId} | Category: ${metadata.category} | Region: ${metadata.region}`);
  console.log(`[Post Info] Total Slides: ${metadata.slideCount || metadata.images.length}`);

  // 2. API 자격 증명(Secrets) 확인
  if (!accessToken || !accountId) {
    console.warn('\n⚠️ [Instagram Publish] Meta API Credentials not configured:');
    if (!accessToken) console.warn('  - INSTAGRAM_ACCESS_TOKEN is missing');
    if (!accountId) console.warn('  - INSTAGRAM_ACCOUNT_ID is missing');
    console.log('\nCard news images and caption are generated and saved locally.');
    console.log('To enable auto-posting, set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_ACCOUNT_ID in GitHub Repository Secrets.');
    console.log('Refer to docs/INSTAGRAM_SETUP_GUIDE.md for step-by-step instructions.\n');
    process.exit(0);
  }

  // 3. 공용 HTTPS 이미지 Base URL 설정
  // Instagram Graph API는 인터넷에서 접근 가능한 HTTPS URL로 이미지를 다운로드합니다.
  let baseUrl = customBaseUrl;
  if (!baseUrl && githubRepo) {
    baseUrl = `https://raw.githubusercontent.com/${githubRepo}/main`;
  }
  if (!baseUrl) {
    baseUrl = 'https://healimbp.com';
  }
  baseUrl = baseUrl.replace(/\/$/, '');

  console.log(`[Image Source Base URL] ${baseUrl}`);

  // 4. 개별 슬라이드 이미지 컨테이너 등록 (Carousel Item Containers)
  const itemContainerIds = [];

  for (let i = 0; i < metadata.images.length; i++) {
    const relativeImagePath = metadata.images[i].replace(/\\/g, '/');
    const fullImageUrl = `${baseUrl}/${relativeImagePath}`;
    console.log(`\n[Step 1/3] Uploading slide ${i + 1}/${metadata.images.length}...`);
    console.log(`  Target URL: ${fullImageUrl}`);

    const uploadUrl = `https://graph.facebook.com/v22.0/${accountId}/media`;
    const params = new URLSearchParams({
      image_url: fullImageUrl,
      is_carousel_item: 'true',
      access_token: accessToken
    });

    const res = await fetch(`${uploadUrl}?${params.toString()}`, {
      method: 'POST'
    });
    const data = await res.json();

    if (!res.ok || data.error) {
      console.error(`❌ Failed to create container for slide ${i + 1}:`, data.error || data);
      throw new Error(`Instagram Graph API Error: ${data.error?.message || 'Unknown error'}`);
    }

    console.log(`  ✓ Container ID: ${data.id}`);
    itemContainerIds.push(data.id);
    await sleep(1200); // Meta Rate-Limit 안전 딜레이
  }

  // 5. 캐러셀 묶음 컨테이너 생성 (Carousel Parent Container)
  console.log(`\n[Step 2/3] Creating Carousel Container with ${itemContainerIds.length} slides...`);
  const carouselUrl = `https://graph.facebook.com/v22.0/${accountId}/media`;
  const carouselParams = new URLSearchParams({
    media_type: 'CAROUSEL',
    children: itemContainerIds.join(','),
    caption: caption,
    access_token: accessToken
  });

  const carouselRes = await fetch(`${carouselUrl}?${carouselParams.toString()}`, {
    method: 'POST'
  });
  const carouselData = await carouselRes.json();

  if (!carouselRes.ok || carouselData.error) {
    console.error('❌ Failed to create Carousel Container:', carouselData.error || carouselData);
    throw new Error(`Carousel Creation Error: ${carouselData.error?.message || 'Unknown error'}`);
  }

  const creationId = carouselData.id;
  console.log(`  ✓ Carousel Creation ID: ${creationId}`);

  // 6. 컨테이너 처리 상태 확인 (Status Polling)
  console.log('\nChecking container processing status...');
  let isReady = false;
  for (let attempt = 1; attempt <= 10; attempt++) {
    const statusUrl = `https://graph.facebook.com/v22.0/${creationId}?fields=status_code&access_token=${accessToken}`;
    const statusRes = await fetch(statusUrl);
    const statusData = await statusRes.json();

    console.log(`  - Attempt ${attempt}: Status = ${statusData.status_code || 'IN_PROGRESS'}`);
    if (statusData.status_code === 'FINISHED' || statusData.status_code === 'READY') {
      isReady = true;
      break;
    }
    if (statusData.status_code === 'ERROR') {
      throw new Error(`Container processing failed with ERROR status.`);
    }
    await sleep(2500);
  }

  // 7. 인스타그램 피드 최종 발행 (Publish Media)
  console.log('\n[Step 3/3] Publishing Carousel Post to Instagram Feed...');
  const publishUrl = `https://graph.facebook.com/v22.0/${accountId}/media_publish`;
  const publishParams = new URLSearchParams({
    creation_id: creationId,
    access_token: accessToken
  });

  const publishRes = await fetch(`${publishUrl}?${publishParams.toString()}`, {
    method: 'POST'
  });
  const publishData = await publishRes.json();

  if (!publishRes.ok || publishData.error) {
    console.error('❌ Failed to publish post:', publishData.error || publishData);
    throw new Error(`Publish Error: ${publishData.error?.message || 'Unknown error'}`);
  }

  const publishedPostId = publishData.id;
  console.log(`\n🎉 SUCCESS! Published to Instagram!`);
  console.log(`   Post ID: ${publishedPostId}`);
  console.log(`   Time: ${new Date().toISOString()}`);

  // 발행 결과 기록
  const statusLog = {
    postId: metadata.postId,
    publishedPostId,
    publishedAt: new Date().toISOString(),
    status: 'SUCCESS',
    slideCount: itemContainerIds.length
  };
  fs.writeFileSync(path.join(postDir, 'publish_status.json'), JSON.stringify(statusLog, null, 2), 'utf-8');
}

main().catch(err => {
  console.error('\n[Instagram Auto-Publisher Failed]:', err.message);
  process.exit(1);
});
