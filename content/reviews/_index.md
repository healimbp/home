---
title: "치료 후기"
linkTitle: "치료 후기"
summary: "해아림한의원 인천부평점 실제 환자 치료 경험담 및 네이버 예약 정성 리뷰 18선 (의료법 준수)"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Patient Reviews & Recovery Stories</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              해아림과 함께 찾은 평온한 일상
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              단순한 한 줄 평이 아닌, 질환의 고통 속에서 권형근 원장님과 함께 몸과 마음의 균형을 되찾으신 환자분들의 <strong>진정성 있는 18편의 실제 회복 이야기</strong>입니다.
            </p>
          </div>

          <!-- 3. 네이버 플레이스 실시간 영수증 리뷰 공식 바로가기 배너 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-[#F0F8F4] border border-[#CDE5D8] text-[#1E4638] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div class="space-y-1 text-center sm:text-left">
              <div class="flex items-center justify-center sm:justify-start gap-2 font-extrabold text-sm sm:text-base text-[#1E4638]">
                <span class="w-2.5 h-2.5 rounded-full bg-[#03C75A]"></span>
                <span>네이버 지도에 등록된 실제 100% 방문자 영수증 리뷰</span>
              </div>
              <p class="text-xs sm:text-sm text-[#4E6159]">
                해아림한의원 인천부평점에 직접 내원하신 환자분들이 네이버 플레이스에 남겨주신 실시간 원본 후기를 네이버에서 투명하게 확인하실 수 있습니다.
              </p>
            </div>
            <a href="https://map.naver.com/p/entry/place/1162489675/review/visitor" target="_blank" rel="noopener" class="shrink-0 px-5 py-3 rounded-xl bg-[#03C75A] text-white font-extrabold text-xs sm:text-sm hover:bg-[#02B150] transition flex items-center gap-2 shadow">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span>네이버 실시간 리뷰 전체보기</span>
            </a>
          </div>


          <!-- 4-A. [탭 1] 네이버 정성 리뷰 목록 (naver-section) -->
          <div id="naver-section" class="space-y-6">

            <!-- 질환별 카테고리 필터 버튼 그룹 -->
            <div class="bg-white p-4 rounded-2xl border border-[#E2EAE5] shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-[#556B62] flex items-center gap-1.5">
                  <i class="fa-solid fa-sliders text-[#2F5D50]"></i> 질환별 맞춤 후기 필터
                </span>
                <span class="text-[11px] text-[#8B9891]">원하시는 질환을 클릭하시면 해당 후기만 정렬됩니다</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <button onclick="filterReviews('all')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white" data-cat="all">전체 (6편)</button>
                <button onclick="filterReviews('child')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="child">소아 틱·ADHD·집중력 (3)</button>
                <button onclick="filterReviews('panic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="panic">심리안정·공황·불안 (2)</button>
                <button onclick="filterReviews('autonomic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="autonomic">경추교정·추나·두통 (2)</button>
                <button onclick="filterReviews('depression')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="depression">마음치유·심층상담 (2)</button>
              </div>

            </div>

            <!-- 리뷰 그리드 (2열 반응형 카드) -->
            <div id="reviews-grid" class="grid grid-cols-1 md:grid-cols-2 gap-5">

              <!-- [실제 네이버 인증 리뷰 1] 민흠 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#지인추천 #구체적설명 #한약침추나 #심리적안정</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;제 병에 대해서 구체적으로 설명해 주셔서 이해하기 너무 좋았어요. 완전 강추합니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">민흠 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 37 · 사진 32</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    지인한테 추천받아서 부평점 생기자마자 갔어요!! 다들 너무 친절하시고 특히 제 병에 대해서 설명을 구체적으로 해주셔서 병에 대해서 이해를 하고 받아들이기에 너무 좋았어요,,!! 한약도 열심히 먹고 침치료 추나 병행해서 빨리 좋아졌음 좋겠네요 ~~<br><br>
                    완전 강추합니다 심리적으로 너무 편안해져요👍👍
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 한약 처방 + 침치료 + 추나요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 2] 서윤40 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic depression">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#블로그검색내원 #전문병원 #맞춤응대 #마음치료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;치료도 치료지만 마음까지 헤아려 주는 것 같아 좋았습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">서윤40 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 20 · 사진 14</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    네이버 블로그 보다가 제가 겪은 증상들이랑 똑같아서 이왕이면 전문적인 병원에서 치료 받을려고 방문 하였는데 너무 좋은거에요<br><br>
                    실장님도 친절하게 제가 처한 상황에 맞춰 응대해주시고 원장님도 너무 좋으세요.<br>
                    치료도 치료지만 마음까지 헤아려 주는것 같아 좋았습니다. 다음에 또뵐게요!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 1:1 맞춤 진료 및 마음 치유</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 3] 네미와의하루 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아틱장애 #눈깜빡임 #지인소개 #편안한진료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;원장님께서 편안하게 진료를 봐주시니 아이도 부담 없이 잘 따릅니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">네미와의하루 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 11 · 사진 3</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    저희 애가 눈 깜빡거리는 틱 증상이 보여 이곳저곳 많이 다녀보다가 소개 받고 해아림으로 방문하게 됐네요<br><br>
                    우선 괜히 긴장했다 싶을 정도로 원장님께서 편안하게 진료를 봐주시니 아이도 부담없이 잘 따라준 것 같아요. 자주 가야하니 앞으로 잘 부탁드릴게요~~^^
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 틱장애 1:1 맞춤 안심 진료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 4] 한촬스 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic depression">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#경추교정 #턱틀어짐 #추나치료 #두통개선</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;제가 가본 한의원 중에 최고예요! 매일 있던 두통도 많이 나아졌습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">한촬스 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 10 · 사진 11</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    제가 가본 한의원 중에 최고예요!<br>
                    경추가 안좋아서 턱이 틀어져있었는데 유일하게 여기만 알아주고 교정 치료랑 추나 치료하고있어요!<br><br>
                    진짜 매일 두통있던것도 많이 나아지고 너무 좋아요. 쌤들도 다 너무 친절하고 시설도 다 너무 깨끗해요!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 경추·턱관절 교정 추나 + 두통 치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 5] 꽃날43 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아집중력 #짜증완화 #소아체질개선 #배변기능개선</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;예상 치료 기간보다 아이가 좋아지는 게 일찍 보였어요.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">꽃날43 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 14 · 사진 13</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    아이가 집중력이 너무 약하고 짜증이 많아서 진료 받았는데, 예상 치료기간보다 아이가 좋아지는게 일찍 보였어요.<br><br>
                    진료볼때 아이가 어릴때부터 대변을 너무 힘들게 보는게 좋아져야 한다고 하셨는데, 치료하면서 대변을 편하게 보기 시작하니깐 정말 그 영향인지 아이가 좋아지는게 확 보이더라구요. 아직 더 치료해야겠지만 이대로면 아이가 정말 편해지면서 좋아질거라는 생각이 드네요.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 체질개선 탕약 + 장내 자율신경 조절</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 6] 스즈나2858 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#운동틱 #음성틱 #틱호전 #친절한편안함 #믿고받는치료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;아이가 치료받는 걸 좋아하고 틱이 눈에 띄게 줄었어요. 믿고 상담 받아보세요^^&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">스즈나2858 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 7 · 사진 3</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    아이가 운동틱 음성틱이 심하게 생겨 알아보고 방문하고 상담받고 치료받고 있어요~<br><br>
                    원장님, 선생님 모두 친절하고 아이 상태를 잘 살펴주십니다~<br>
                    장기간 봐야하는 거라 아직 완치는 멀었지만 아이가 치료받는걸 좋아하고 틱이 눈에 띄게 줄었어요~ 믿고 상담 받아보셔요^^
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 복합 틱장애 1:1 맞춤 한방 치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

            </div>

          </div>

          <!-- 4-B. [탭 2] 자필 수기 후기 영역 (handwritten-section: 초기 숨김) -->
          <div id="handwritten-section" class="hidden space-y-6">
            <div class="border-b border-[#E2EAE5] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <span>✍️ 환자분들의 정성 어린 자필 수기 후기</span>
                <span class="text-xs sm:text-sm font-normal text-[#B88A3B] bg-[#FFF9E6] px-2.5 py-1 rounded-full font-bold">스캔본 준비중</span>
              </h2>
              <p class="text-xs sm:text-sm text-[#68736E] mt-1">치료 종결 후 원내에 직접 손글씨로 남겨주신 소중한 자필 종이 수기 원본 게시판입니다.</p>
            </div>

            <!-- 수기 후기 업로드 준비 안내 카드 -->
            <div class="p-8 sm:p-12 rounded-2xl bg-[#F8FAF9] border-2 border-dashed border-[#CCD8D2] text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-[#EAF2ED] text-[#2F5D50] flex items-center justify-center mx-auto text-2xl">
                <i class="fa-solid fa-file-pen"></i>
              </div>
              <div class="space-y-2 max-w-md mx-auto">
                <h3 class="text-lg font-extrabold text-[#1E4638]">자필 치료 수기 원본 스캔 작업 중입니다</h3>
                <p class="text-xs sm:text-sm text-[#556B62] leading-relaxed">
                  환자분들께서 직접 손글씨로 작성해 주신 소중한 종이 수기는 개인정보 비식별 조치 및 고화질 스캔 완료 후 순차적으로 본 게시판에 투명하게 공개됩니다.
                </p>
              </div>
              <div class="pt-2">
                <button onclick="showTab('naver')" class="px-5 py-2.5 rounded-xl bg-[#2F5D50] text-white font-bold text-xs sm:text-sm shadow hover:bg-[#244A40] transition">
                  ⭐ 네이버 정성 리뷰 먼저 보러가기
                </button>
              </div>
            </div>
          </div>

          <!-- 5. 하단 진료 예약 CTA 배너 -->
          <div class="heal-card-primary text-center space-y-4 p-8 rounded-2xl bg-gradient-to-r from-[#1E4638] to-[#2F5D50] text-white">
            <h2 class="text-xl sm:text-2xl font-extrabold text-white">나에게 맞는 1:1 맞춤 치료 상담이 필요하신가요?</h2>
            <p class="text-xs sm:text-sm text-[#DCE7E2] max-w-xl mx-auto leading-relaxed">
              해아림한의원 인천부평점 권형근 대표원장이 뇌파 검사, 체열 검사, 심층 문진을 통해 근본 원인을 정확히 찾아드립니다.
            </p>
            <div class="pt-2 flex flex-wrap justify-center gap-3">
              <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver text-sm font-bold px-5 py-3 rounded-xl bg-[#03C75A] text-white hover:bg-[#02B150] transition flex items-center gap-2">
                <i class="fa-solid fa-calendar-check"></i>
                <span>네이버 간편 진료예약</span>
              </a>
              <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao text-sm font-bold px-5 py-3 rounded-xl bg-[#FEE500] text-[#191919] hover:bg-[#FDD835] transition flex items-center gap-2">
                <i class="fa-solid fa-comment"></i>
                <span>카카오톡 1:1 비밀상담</span>
              </a>
              <a href="tel:032-719-3472" class="heal-btn text-sm font-bold px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-2 border border-white/20">
                <i class="fa-solid fa-phone"></i>
                <span>032-719-3472 전화상담</span>
              </a>
            </div>
          </div>

        </div>

        <!-- 탭 및 카테고리 필터 스크립트 -->
        <script>
          function showTab(tabName) {
            const naverSec = document.getElementById('naver-section');
            const handSec = document.getElementById('handwritten-section');
            const tabNaver = document.getElementById('tab-naver');
            const tabHand = document.getElementById('tab-handwritten');

            if (tabName === 'naver') {
              naverSec.classList.remove('hidden');
              handSec.classList.add('hidden');
              tabNaver.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#2F5D50] text-white shadow-md flex items-center gap-2";
              tabHand.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#F4F7F5] text-[#556B62] hover:bg-[#E8EFEA] flex items-center gap-2 border border-[#DDE6E1]";
            } else {
              naverSec.classList.add('hidden');
              handSec.classList.remove('hidden');
              tabHand.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#2F5D50] text-white shadow-md flex items-center gap-2";
              tabNaver.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#F4F7F5] text-[#556B62] hover:bg-[#E8EFEA] flex items-center gap-2 border border-[#DDE6E1]";
            }
          }

          function filterReviews(category) {
            const items = document.querySelectorAll('.review-item');
            const buttons = document.querySelectorAll('.filter-btn');

            buttons.forEach(btn => {
              if (btn.getAttribute('data-cat') === category) {
                btn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white";
              } else {
                btn.className = "filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]";
              }
            });

            items.forEach(item => {
              if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
              } else {
                item.style.display = 'none';
              }
            });
          }
        </script>
---

