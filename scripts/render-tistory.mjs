import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function getTistoryThumbnailUrl(content = '', slug = '') {
  const base = 'https://healimbp.com';
  const text = (content + ' ' + slug).toLowerCase();
  
  if (text.includes('panic') || text.includes('공황') || text.includes('불안') || text.includes('과호흡') || text.includes('강박')) {
    return `${base}/blog-images/panic-anxiety/01_naver_main_thumbnail.png`;
  }
  if (text.includes('autonomic') || text.includes('자율신경') || text.includes('실신') || text.includes('어지럼') || text.includes('이명') || text.includes('dizziness')) {
    return `${base}/blog-images/01_bucheon_autonomic_main_thumbnail.png`;
  }
  if (text.includes('insomnia') || text.includes('불면') || text.includes('수면') || text.includes('잠')) {
    return `${base}/blog-images/insomnia-sleep/01_naver_main_thumbnail.png`;
  }
  if (text.includes('tic') || text.includes('틱') || text.includes('adhd') || text.includes('소아') || text.includes('집중력')) {
    return `${base}/blog-images/tic-adhd/01_naver_main_thumbnail.png`;
  }
  if (text.includes('depression') || text.includes('우울') || text.includes('화병') || text.includes('담적') || text.includes('스트레스') || text.includes('somatic')) {
    return `${base}/blog-images/depression-somatic/01_naver_main_thumbnail.png`;
  }
  return `${base}/blog-images/01_naver_main_thumbnail.jpg`;
}

export function convertColumnToTistoryHtml(mdContent, slug = 'column') {
  let content = mdContent.replace(/^---[\s\S]*?---\r?\n/, '').trim();
  const thumbnailUrl = getTistoryThumbnailUrl(content, slug);

  // 물결표 주변 공백 표준화 (취소선 방지)
  content = content.replace(/(\d+)\s*~\s*(\d+)/g, '$1 ~ $2');
  content = content.replace(/(\d+)\s*～\s*(\d+)/g, '$1 ~ $2');

  // 이모지 및 구분선 기반 섹션 헤더를 ### 마크다운 헤더로 정규화
  content = content.replace(/(?:^|\n)\s*─{3,}\s*\n\s*(📌|🌿|🩺|💡|🌸|🔍)\s*([^\n]+)\s*\n\s*─{3,}/g, '\n\n### $1 $2\n');
  content = content.replace(/(?:^|\n)\s*(📌|🌿|🩺|💡|🌸|🔍)\s*(\d+\.?[^\n]+)/g, '\n\n### $1 $2');
  content = content.replace(/\n\s*─{3,}\s*\n/g, '\n\n');

  // 1. 권형근 대표원장의 조언 박스 분리
  let doctorAdvice = '';
  const adviceMatch = content.match(/(?:^|\n)>\s*\*\*권형근\s*대표원장의\s*조언\*\*:\s*[\r\n]+(?:>\s*)?["“]?(.*?)["”]?\s*(?:\n\s*─{3,}|\n\s*###|$)/s) ||
                      content.match(/\*\*권형근\s*대표원장의\s*조언\*\*:\s*["“]?(.*?)["”]?\s*(?:\n\s*─{3,}|\n\s*###|$)/s);
  if (adviceMatch) {
    doctorAdvice = adviceMatch[1].replace(/^>\s*/gm, '').replace(/[*_#`]/g, '').trim();
    content = content.replace(adviceMatch[0], '').trim();
  }

  // 2. 환자 호소문 인용구 분리 (상단 HTML blockquote 또는 마크다운 > "..." / > “...” / > &ldquo;...)
  let quoteHtml = '';
  const htmlQuoteMatch = content.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i);
  if (htmlQuoteMatch) {
    const rawQuotes = htmlQuoteMatch[1]
      .replace(/&ldquo;/g, '“')
      .replace(/&rdquo;/g, '”')
      .split(/<br\s*\/?>/i)
      .map(l => l.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean);
    quoteHtml = `  <!-- 환자 호소문 인용 박스 (정자체 font-style: normal) -->
  <div style="background-color: #F8FAF9; border-left: 4px solid #2F5D50; border-radius: 0 12px 12px 0; padding: 18px 24px; margin: 24px 0 28px 0; color: #2C3E35; font-size: 15px; line-height: 1.85; font-style: normal; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
    ${rawQuotes.join('<br><br>')}
  </div>\n`;
    content = content.replace(htmlQuoteMatch[0], '').trim();
  } else {
    const mdQuoteMatch = content.match(/(?:^|\n)((?:>\s*["“&][^\n]*(?:\r?\n|$))+)/);
    if (mdQuoteMatch) {
      const rawQuotes = mdQuoteMatch[1]
        .trim()
        .split(/\r?\n/)
        .map(l => l.replace(/^>\s*/, '').replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”').trim())
        .filter(Boolean);
      quoteHtml = `  <!-- 환자 호소문 인용 박스 (정자체 font-style: normal) -->
  <div style="background-color: #F8FAF9; border-left: 4px solid #2F5D50; border-radius: 0 12px 12px 0; padding: 18px 24px; margin: 24px 0 28px 0; color: #2C3E35; font-size: 15px; line-height: 1.85; font-style: normal; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
    ${rawQuotes.join('<br><br>')}
  </div>\n`;
      content = content.replace(mdQuoteMatch[0], '\n\n').trim();
    }
  }

  // 3. 섹션 단위 파싱 (### 기준 분할)
  const sections = content.split(/(?=###\s+)/);
  let parsedBodyHtml = '';

  for (let sec of sections) {
    sec = sec.trim();
    if (!sec) continue;

    // 섹션 제목 (### 1. ...)
    if (sec.startsWith('###')) {
      const firstLineEnd = sec.indexOf('\n');
      const headerLine = (firstLineEnd !== -1 ? sec.slice(0, firstLineEnd) : sec).replace(/^###\s*/, '').trim();
      const secBody = firstLineEnd !== -1 ? sec.slice(firstLineEnd).trim() : '';

      parsedBodyHtml += `\n  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">${headerLine}</h3>\n`;

      // Q&A 섹션인 경우
      if (headerLine.includes('자주 묻는 질문') || headerLine.includes('Q&A') || headerLine.includes('FAQ')) {
        const qCards = [];
        const cardRegex = /<span class="bg-\[#2F5D50\][^>]*>(Q\d+)<\/span>\s*<span>(.*?)<\/span>[\s\S]*?<p class="[^"]*">([\s\S]*?)<\/p>/g;
        let match;
        while ((match = cardRegex.exec(secBody)) !== null) {
          const cleanA = match[3].replace(/\*\*권형근\s*대표원장의\s*조언\*\*[\s\S]*/i, '').trim();
          qCards.push({ qNum: match[1], q: match[2].trim(), a: cleanA });
        }

        // 마크다운 Q1. 형식 폴백
        if (qCards.length === 0) {
          const mdQRegex = /\*\*(Q\d+)\.?\s*(.*?)\*\*\s*[\r\n]+(?:>\s*)?(?:\*\*A\.\*\*|A\.)?\s*([\s\S]*?)(?=\n\s*\*\*Q\d+|\n\s*###|$)/g;
          while ((match = mdQRegex.exec(secBody)) !== null) {
            const cleanA = match[3].replace(/^>\s*/gm, '').replace(/\*\*권형근\s*대표원장의\s*조언\*\*[\s\S]*/i, '').trim();
            qCards.push({ qNum: match[1], q: match[2].trim(), a: cleanA });
          }
        }

        if (qCards.length > 0) {
          parsedBodyHtml += `  <div style="margin: 24px 0;">\n`;
          qCards.forEach(c => {
            parsedBodyHtml += `    <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); font-style: normal;">
      <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-style: normal;">
        <span style="background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 6px; display: inline-block; flex-shrink: 0; margin-right: 6px;">${c.qNum}</span>
        <span>${c.q}</span>
      </div>
      <p style="font-size: 14.5px; line-height: 1.85; color: #4E6159; margin: 0; padding-left: 36px; word-break: keep-all; font-style: normal;">
        ${c.a}
      </p>
    </div>\n`;
          });
          parsedBodyHtml += `  </div>\n`;
        }
        continue;
      }

      // 일반 섹션 본문 파싱 (문단, 목록)
      parsedBodyHtml += parseSectionBody(secBody);
    } else {
      // 도입부 문단 (### 이전)
      parsedBodyHtml += parseSectionBody(sec);
    }
  }

  // 4. 원장 조언 박스 추가 (font-style: normal)
  if (doctorAdvice) {
    parsedBodyHtml += `\n  <!-- 원장 조언 박스 -->
  <div style="background: linear-gradient(135deg, #F0F6F3 0%, #E8F1EC 100%); border-left: 5px solid #2F5D50; border-radius: 4px 14px 14px 4px; padding: 22px 26px; margin: 36px 0; color: #2C3E35; box-shadow: 0 2px 6px rgba(47,93,80,0.06); font-style: normal;">
    <p style="margin: 0 0 8px 0; font-size: 15.5px; font-weight: 800; color: #1E4638; font-style: normal;">
      👨‍⚕️ <strong>권형근 대표원장의 진료실 조언</strong>
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.85; color: #33443C; word-break: keep-all; font-style: normal;">
      "${doctorAdvice}"
    </p>
  </div>\n`;
  }

  // 5. 티스토리 최종 레이아웃 감싸기
  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;

  return `
<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.85; color: #333333; max-width: 780px; margin: 0 auto; padding: 10px 0; font-style: normal;">
  
  <!-- 대표 썸네일 이미지 (다음/카카오/네이버 검색 썸네일 자동 연동) -->
  <div style="text-align: center; margin: 0 0 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <img src="${thumbnailUrl}" alt="해아림한의원 인천부평점 건강 칼럼" style="width: 100%; max-width: 780px; height: auto; display: block; border-radius: 12px; margin: 0 auto; object-fit: cover;" />
  </div>

  <!-- 상단 안내 헤더 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 20px 24px; border-radius: 10px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(47,93,80,0.05); font-style: normal;">
    <p style="margin: 0; font-size: 16px; color: #2F5D50; font-weight: 800; letter-spacing: -0.01em; font-style: normal;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 건강 칼럼
    </p>
    <p style="margin: 8px 0 0 0; font-size: 13.5px; color: #556B62; line-height: 1.6; font-style: normal;">
      자율신경실조증 · 공황장애 · 불면증 · 우울증 · 만성피로 · 틱장애 · ADHD 한방 신경정신과 클리닉
    </p>
  </div>

${quoteHtml}
  <!-- 칼럼 본문 -->
  <div style="font-size: 16px; color: #374151; word-break: keep-all; font-style: normal;">
${parsedBodyHtml}
  </div>

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 44px 0 32px 0;" />

  <!-- 원장 소개 및 한의원 안내 카드 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E7E5E4; border-radius: 14px; padding: 26px; margin-top: 32px; box-shadow: 0 2px 6px rgba(0,0,0,0.03); font-style: normal;">
    <h4 style="margin: 0 0 12px 0; color: #1E4638; font-size: 17.5px; font-weight: 800; font-style: normal;">
      🏥 해아림한의원 인천부평점 진료 안내
    </h4>
    <ul style="margin: 0 0 18px 0; padding-left: 20px; font-size: 14.5px; color: #4B5563; line-height: 1.85; font-style: normal;">
      <li style="margin-bottom: 6px;"><strong>대표원장:</strong> 권형근 (한방침구과 전문의 직접 진료)</li>
      <li style="margin-bottom: 6px;"><strong>오시는 길:</strong> 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</li>
      <li style="margin-bottom: 6px;"><strong>상담 및 예약:</strong> 032-719-3472</li>
      <li style="margin-bottom: 6px;"><strong>진료 시간:</strong> 월·수·금 10:00 ~ 20:00 (야간진료) / 화 10:00 ~ 19:00 / 토 09:00 ~ 15:00 / 공휴일 09:00 ~ 13:00</li>
    </ul>

    <!-- 원클릭 바로가기 버튼 그룹 -->
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
      <a href="${bookingUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #03C75A; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(3,199,90,0.2); font-style: normal;">
        📅 네이버 간편 진료예약
      </a>
      <a href="${kakaoUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #FEE500; color: #191919; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.08); font-style: normal;">
        💬 카카오톡 1:1 비밀상담
      </a>
      <a href="${columnUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #2F5D50; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(47,93,80,0.2); font-style: normal;">
        🌐 공식 홈페이지 칼럼 원문 보기
      </a>
    </div>
  </div>

  <!-- 출처 표기 (백링크 SEO) -->
  <p style="text-align: right; font-size: 12px; color: #9CA3AF; margin-top: 16px; font-style: normal;">
    출처: <a href="https://healimbp.com" target="_blank" rel="noopener" style="color: #6B7280; text-decoration: underline;">해아림한의원 인천부평점 공식 홈페이지</a>
  </p>

</div>
  `.trim();
}

function parseSectionBody(text) {
  if (!text) return '';
  let html = '';

  // 볼드체 치환
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1E4638; font-weight: 700;">$1</strong>');

  // 문단 분할
  const paragraphs = text.split(/\r?\n\r?\n+/);

  for (let p of paragraphs) {
    p = p.trim();
    if (!p) continue;

    // 번호 목록 (1. 2. 3.)
    if (/^\d+\.\s+/.test(p)) {
      const items = p.split(/\r?\n/).filter(Boolean);
      html += `  <div style="margin: 18px 0;">\n`;
      items.forEach(li => {
        const cleanLi = li.replace(/^\d+\.\s+/, '').trim();
        html += `    <div style="background-color: #F8FAF9; border: 1px solid #E6ECE8; border-radius: 10px; padding: 14px 18px; margin-bottom: 10px; font-style: normal;">
      <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.8; font-style: normal;">${cleanLi}</p>
    </div>\n`;
      });
      html += `  </div>\n`;
    }
    // 불릿 목록 (* ...)
    else if (/^\*\s+/.test(p)) {
      const items = p.split(/\r?\n/).filter(Boolean);
      html += `  <ul style="list-style-type: none; padding-left: 0; margin: 18px 0; font-style: normal;">\n`;
      items.forEach(li => {
        const cleanLi = li.replace(/^\*\s+/, '').trim();
        html += `    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      ${cleanLi}
    </li>\n`;
      });
      html += `  </ul>\n`;
    }
    // 일반 문단
    else {
      html += `  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">${p.replace(/\r?\n/g, '<br>')}</p>\n`;
    }
  }

  return html;
}
