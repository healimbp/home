# 📸 인스타그램 완전 무인 자동 포스팅 연동 가이드 (Meta Graph API)

해아림한의원 인천부평점 인스타그램 계정에 카드뉴스를 **GitHub Actions를 통해 완전 자동으로 게시**하기 위한 Meta(Facebook) Graph API 설정 가이드입니다.

---

## 📌 전체 설정 요약 (5단계)

```
1. 인스타 계정을 [프로페셔널(비즈니스/크리에이터)]로 전환
   ↓
2. [페이스북 페이지] 생성 및 인스타그램 계정 연결
   ↓
3. [Meta for Developers] 개발자 앱 생성 & 권한 설정
   ↓
4. [Graph API 탐색기]에서 토큰 및 계정 ID 발급
   ↓
5. [GitHub Repository Secrets]에 2가지 키 등록
   - INSTAGRAM_ACCESS_TOKEN
   - INSTAGRAM_ACCOUNT_ID
```

---

## STEP 1. 인스타그램 프로페셔널 계정 전환

1. 인스타그램 앱 실행 ➔ 프로필 ➔ 우측 상단 `[메뉴 ☰]` ➔ `[설정 및 개인정보]`
2. `[계정 유형 및 도구]` ➔ `[프로페셔널 계정으로 전환]` 선택
3. 카테고리: `한의원` 또는 `의사/의료기관` 선택 ➔ `비즈니스` 또는 `크리에이터` 선택

---

## STEP 2. 페이스북 페이지 생성 및 인스타 연결

1. [Facebook](https://www.facebook.com/)에 접속하여 병원용 페이스북 페이지를 하나 생성합니다. (예: `해아림한의원 인천부평점`)
2. 생성된 페이스북 페이지의 `[설정]` ➔ `[연결된 계정]` ➔ `[Instagram]` 클릭
3. `[계정 연결]` 버튼을 눌러 인스타그램 계정에 로그인하여 연결을 완료합니다.

---

## STEP 3. Meta for Developers 개발자 앱 만들기

1. [Meta for Developers (developers.facebook.com)](https://developers.facebook.com/)에 접속하여 로그인합니다.
2. 우측 상단 `[내 앱]` ➔ `[앱 만들기]` 클릭
3. 사용 사례(Use case) 선택: **`비즈니스(Business)`** 또는 **`기타(Other)`** 선택
4. 앱 유형: **`비즈니스`** 선택 ➔ 앱 이름 입력 (예: `Healim Instagram Auto Post`) ➔ `앱 만들기` 완료

---

## STEP 4. API 권한 부여 및 토큰/ID 발급

1. Meta 개발자 상단 메뉴에서 `[도구(Tools)]` ➔ **`[Graph API 탐색기(Graph API Explorer)]`**로 이동합니다.
2. 우측 `Meta 앱` 드롭다운에서 방금 만든 앱을 선택합니다.
3. **`권한 추가(Add a Permission)`**를 클릭하여 아래 권한들을 검색해 추가합니다:
   * `instagram_basic`
   * `instagram_content_publish`
   * `pages_show_list`
   * `pages_read_engagement`
   * `business_management`
4. **`[Generate Access Token (토큰 생성)]`** 버튼을 클릭하고 Facebook 계정으로 로그인하여 페이지와 인스타 계정 권한을 승인합니다.
5. **Instagram Account ID 확인하기:**
   * 탐색기 URL 창에 `me/accounts?fields=name,instagram_business_account` 입력 후 `[제출(Submit)]` 클릭
   * 결과 JSON에서 `instagram_business_account.id` 값(숫자)을 복사해 둡니다. ➔ 이것이 **`INSTAGRAM_ACCOUNT_ID`** 입니다.
6. **영구/장기 액세스 토큰(Long-lived Token)으로 변환:**
   * [액세스 토큰 디버거](https://developers.facebook.com/tools/debug/accesstoken/)에 방금 발급한 토큰을 붙여넣고 `[확인]` 클릭
   * 하단의 `[액세스 토큰 확장(Extend Access Token)]`을 누르면 **60일 이상 유지되는 장기 토큰**이 발급됩니다. ➔ 이것이 **`INSTAGRAM_ACCESS_TOKEN`** 입니다.

---

## STEP 5. GitHub Repository Secrets 등록

1. GitHub 저장소 (`healimbp/home`) 웹페이지로 이동합니다.
2. 상단 탭에서 **`Settings`** ➔ 좌측 사이드바 **`Secrets and variables`** ➔ **`Actions`** 클릭
3. **`[New repository secret]`** 초록색 버튼을 눌러 아래 2개의 Secret을 추가합니다:

| Secret 이름 | 값 (Value) |
| :--- | :--- |
| **`INSTAGRAM_ACCESS_TOKEN`** | STEP 4에서 발급받은 Meta Access Token |
| **`INSTAGRAM_ACCOUNT_ID`** | STEP 4에서 확인한 인스타그램 비즈니스 계정 ID (숫자) |

---

## 🚀 자동 발행 및 수동 테스트 방법

### 1. GitHub Actions 수동 즉시 테스트
1. GitHub 저장소의 **`Actions`** 탭으로 이동합니다.
2. 좌측 워크플로우 목록에서 **`Daily 2x Instagram Card News Auto-Publisher`**를 선택합니다.
3. 우측 **`[Run workflow]`** 버튼을 누르면 즉시 카드뉴스가 생성되고 인스타 피드로 자동 포스팅됩니다.

### 2. 자동 예약 발행
* 매일 **점심 12:30 KST** 및 **저녁 19:30 KST**에 인스타그램 황금 시간대에 맞춰 5장의 카드뉴스와 최적화된 해시태그 본문이 자동으로 게시됩니다.
* 생성된 카드뉴스 이미지 파일들은 저장소의 `static/instagram/` 폴더에 차곡차곡 영구 보관됩니다.
