/**
 * 티스토리 블로그 자동 발행 모듈 (Tistory Auto-Publisher)
 * 해아림한의원 인천부평점 공식 홈페이지 칼럼 -> 티스토리 블로그 자동 포스팅
 */

import fs from 'fs';
import path from 'path';

/**
 * 티스토리 포스팅용 HTML 본문 생성 (SEO 최적화 & 디자인 스타일 적용)
 */
export function formatTistoryContent(column, slug) {
  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://open.kakao.com/o/sgbnTRJi`;

  return `
<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.8; color: #333333; max-width: 780px; margin: 0 auto;">
  
  <!-- 상단 안내 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 18px 22px; border-radius: 8px; margin-bottom: 30px;">
    <p style="margin: 0; font-size: 15px; color: #2F5D50; font-weight: bold;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 건강 칼럼
    </p>
    <p style="margin: 6px 0 0 0; font-size: 13px; color: #666666;">
      자율신경실조증 · 공황장애 · 불면증 · 우울증 · 만성피로 · 틱장애 · ADHD 한방 신경정신과 클리닉
    </p>
  </div>

  <!-- 칼럼 본문 -->
  <div style="font-size: 16px; color: #374151;">
    ${column.contentHtml}
  </div>

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 40px 0 30px 0;" />

  <!-- 원장 소개 및 한의원 안내 카드 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E7E5E4; border-radius: 12px; padding: 24px; margin-top: 30px;">
    <h4 style="margin: 0 0 10px 0; color: #2F5D50; font-size: 17px; font-weight: bold;">
      🏥 해아림한의원 인천부평점 안내
    </h4>
    <ul style="margin: 0 0 16px 0; padding-left: 20px; font-size: 14px; color: #4B5563; line-height: 1.8;">
      <li><strong>대표원장:</strong> 권형근 (한방침구과 전문의)</li>
      <li><strong>위치:</strong> 인천광역시 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</li>
      <li><strong>전화 상담:</strong> 032-719-3472</li>
      <li><strong>진료 시간:</strong> 월·수·금 10:00~20:00 (야간진료) / 화 10:00~19:00 / 토 09:00~15:00</li>
    </ul>

    <!-- 버튼 링크 그룹 -->
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
      <a href="${bookingUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #03C75A; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: bold;">
        📅 네이버 간편 진료예약
      </a>
      <a href="${kakaoUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #FEE500; color: #191919; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: bold;">
        💬 카카오톡 1:1 비밀상담
      </a>
      <a href="${columnUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #2F5D50; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: bold;">
        🌐 공식 홈페이지 칼럼 원문 보기
      </a>
    </div>
  </div>

  <!-- 출처 표기 (백링크 SEO) -->
  <p style="text-align: right; font-size: 12px; color: #9CA3AF; margin-top: 15px;">
    출처: <a href="https://healimbp.com" target="_blank" rel="noopener" style="color: #6B7280; text-decoration: underline;">해아림한의원 인천부평점 공식 홈페이지</a>
  </p>

</div>
  `.trim();
}

/**
 * 티스토리 API를 통한 글 자동 발행
 */
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

// 직접 스크립트로 실행될 때 (테스트용)
if (process.argv[1] && process.argv[1].endsWith('publish-tistory.mjs')) {
  console.log('[Tistory Auto-Publish] Standalone test runner');
  const sampleColumn = {
    title: '[테스트] 해아림한의원 인천부평점 티스토리 자동 발행 연동 테스트',
    contentHtml: '<p>안녕하세요. 해아림한의원 인천부평점 권형근 대표원장입니다. 티스토리 블로그 자동 발행 테스트 글입니다.</p>',
    tags: ['인천한의원', '부평한의원', '자율신경치료', '티스토리자동발행'],
    categoryName: '공지사항',
    date: new Date().toISOString().split('T')[0]
  };
  publishToTistory(sampleColumn, 'test-slug').then(res => {
    console.log('[Tistory Auto-Publish] Result:', res);
  });
}
