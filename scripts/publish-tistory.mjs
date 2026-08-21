/**
 * 티스토리 블로그 자동 발행 모듈 (Tistory Auto-Publisher)
 * 해아림한의원 인천부평점 공식 홈페이지 칼럼 -> 티스토리 블로그 고품격 디자인 서식 변환
 */

import { convertColumnToTistoryHtml } from './render-tistory.mjs';

export function formatTistoryContent(column, slug) {
  const content = column.contentHtml || '';
  return convertColumnToTistoryHtml(content, slug);
}

export async function publishToTistory(column, slug) {
  const accessToken = process.env.TISTORY_ACCESS_TOKEN;
  const blogName = process.env.TISTORY_BLOG_NAME;
  const categoryId = process.env.TISTORY_CATEGORY_ID || '0';
  const visibility = process.env.TISTORY_VISIBILITY || '3'; // 0: 비공개, 3: 공개

  if (!accessToken || !blogName) {
    console.log('[Tistory Auto-Publish] TISTORY_ACCESS_TOKEN 또는 TISTORY_BLOG_NAME 환경변수가 설정되지 않아 티스토리 발행을 건너뜁니다.');
    return null;
  }

  const title = column.title;
  const content = formatTistoryContent(column, slug);
  const tag = (column.tags || []).join(',');

  console.log(`[Tistory Auto-Publish] Publishing to blog "${blogName}": "${title}"...`);

  const params = new URLSearchParams({
    access_token: accessToken,
    output: 'json',
    blogName: blogName,
    title: title,
    content: content,
    visibility: visibility,
    category: categoryId,
    tag: tag,
    acceptComment: '1'
  });

  try {
    const res = await fetch('https://www.tistory.com/apis/post/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: params.toString()
    });

    const data = await res.json();

    if (data.tistory && data.tistory.status === '200') {
      const postId = data.tistory.postId;
      const postUrl = data.tistory.url;
      console.log(`[Tistory Auto-Publish] 🎉 Successfully published to Tistory! Post ID: ${postId}, URL: ${postUrl}`);
      return { postId, postUrl };
    } else {
      console.error('[Tistory Auto-Publish] ❌ Tistory API Error:', JSON.stringify(data));
      return null;
    }
  } catch (err) {
    console.error('[Tistory Auto-Publish] ❌ Network/Execution Error:', err);
    return null;
  }
}
