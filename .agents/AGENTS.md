# Workspace Rules for HealimBP (해아림한의원 인천부평점)

## 📌 주요 행동 지침 및 상시 적용 규칙

### 1. 블로그 작성 요청 시 (One-Stop All-in-One Protocol)
사용자가 **"[질환/지역] 블로그 써줘/만들어줘"**라고 요청하면, 묻거나 확인하지 않고 즉시 다음을 원스톱으로 일괄 실행합니다:
1. **고화질 5종 카드뉴스/썸네일 이미지 자동 생성 (1080x1080)**:
   - `01_naver_main_thumbnail.jpg`
   - `02_point1_cause.jpg`
   - `03_point2_checklist.jpg`
   - `04_point3_treatment.jpg`
   - `05_point4_selfcare.jpg`
   - 저장 경로: `static/blog-images/` 및 `static/blog-images/[주제명]/`
2. **정립된 4단 구조 블로그 완성형 원고 생성**:
   - 3대 패턴 제목 옵션 (1개 추천 + 2개 대안)
   - 환자 생생 독백 인트로
   - POINT 01 (원인 분석 기전)
   - POINT 02 (자가진단 체크리스트)
   - POINT 03 (1:1 맞춤 한방 치료 솔루션)
   - POINT 04 (생활 속 힐링 실천 팁 3가지)
   - 이미지 삽입 위치 가이드 마커
   - 권형근 대표원장 위로 메시지 & 부평점 진료 안내
   - 네이버 검색 상위노출 해시태그 8~10개
3. **클릭 가능한 이미지 파일 링크(`file:///...`) 및 폴더 링크 제공**
- 상세 규칙: [.agents/rules/blog_generation_rules.md](file:///c:/Users/PC/Downloads/home/.agents/rules/blog_generation_rules.md)

### 2. 홈페이지 칼럼 작성 시
- 3대 제목 작성 패턴(맨 앞 지역명 / 중간 지역명 삽입 / 순수 질환형) 1:1:1 균등 순환
- 상세 규칙: [.agents/rules/column_generation_rules.md](file:///c:/Users/PC/Downloads/home/.agents/rules/column_generation_rules.md)

### 3. Q&A 상담사례 작성 시 (네이버 지식iN 기반)
- 네이버 지식iN 실제 환자 질문 페르소나 기반 생생한 고민(Q) + 권형근 대표원장의 4단 전문 답변(A)
- FAQPage Schema 및 원클릭 예약 CTA 연동
- 상세 규칙: [.agents/rules/qa_generation_rules.md](file:///c:/Users/PC/Downloads/home/.agents/rules/qa_generation_rules.md)
