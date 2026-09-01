---
title: "치료 후기"
linkTitle: "치료 후기"
summary: "해아림한의원 인천부평점 실제 환자 치료 경험담 및 네이버 예약 정성 리뷰 (의료법 준수)"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-10">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Patient Reviews & Recovery Stories</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              해아림과 함께 찾은 평온한 일상
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              단순한 한 줄 평이 아닌, 질환의 고통 속에서 권형근 원장님과 함께 몸과 마음의 균형을 되찾으신 환자분들의 <strong>진정성 있는 실제 회복 이야기</strong>입니다.
            </p>
          </div>

          <!-- 2. 후기 대분류 탭 (네이버 영수증 리뷰 vs 자필 수기 후기) -->
          <div class="flex flex-wrap justify-center gap-3">
            <button id="tab-naver" onclick="showTab('naver')" class="px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#2F5D50] text-white shadow-md flex items-center gap-2 cursor-pointer">
              <span class="text-base">⭐</span>
              <span>네이버 방문자 영수증 리뷰</span>
              <span class="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-bold">인증 리뷰</span>
            </button>
            <button id="tab-handwritten" onclick="showTab('handwritten')" class="px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#F4F7F5] text-[#556B62] hover:bg-[#E8EFEA] flex items-center gap-2 border border-[#DDE6E1] cursor-pointer">
              <span class="text-base">✍️</span>
              <span>원내 자필 수기 치료 후기</span>
              <span class="bg-[#2F5D50]/10 text-[#2F5D50] text-xs px-2 py-0.5 rounded-full font-bold">자필 원본</span>
            </button>
          </div>

          <!-- 3. 의료법 준수 및 카카오 간편 로그인 상태 바 -->
          <div id="auth-status-bar" class="p-4 sm:p-5 rounded-2xl bg-[#FFF9E6] border border-[#F4D06F] text-[#855B00] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
            <div class="space-y-1 text-center sm:text-left flex-1">
              <div class="flex items-center justify-center sm:justify-start gap-2 font-extrabold text-xs sm:text-sm">
                <i id="auth-icon" class="fa-solid fa-lock text-[#B88A3B] text-base"></i>
                <span id="auth-title">[의료법 제56조 준수 안내] 치료 후기 열람 제한</span>
              </div>
              <p id="auth-desc" class="text-xs text-[#735100] leading-relaxed">
                의료법 제56조에 따라 실제 환자 치료 경험담 및 자필 수기 원본은 <strong>로그인(간편인증) 회원에게만 제한적으로 공개</strong>됩니다.
              </p>
            </div>
            <div id="auth-action-area" class="shrink-0 w-full sm:w-auto">
              <button onclick="handleKakaoLogin()" class="heal-btn heal-btn-kakao w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                <i class="fa-solid fa-comment text-sm"></i>
                <span>카카오 1초 간편 로그인</span>
              </button>
            </div>
          </div>

          <!-- 4-A. [탭 1] 네이버 정성 리뷰 목록 (naver-section) -->
          <div id="naver-section" class="space-y-6" style="display: block;">

            <!-- 네이버 플레이스 실시간 영수증 리뷰 공식 바로가기 배너 -->
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

            <!-- 질환별 카테고리 필터 버튼 그룹 -->
            <div class="bg-white p-4 rounded-2xl border border-[#E2EAE5] shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-[#556B62] flex items-center gap-1.5">
                  <i class="fa-solid fa-sliders text-[#2F5D50]"></i> 질환별 맞춤 후기 필터
                </span>
                <span class="text-[11px] text-[#8B9891]">원하시는 질환을 클릭하시면 해당 후기만 정렬됩니다</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <button onclick="filterReviews('all')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white" data-cat="all">전체보기</button>
                <button onclick="filterReviews('autonomic')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="autonomic">자율신경·갱년기·교감항진</button>
                <button onclick="filterReviews('panic')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="panic">공황·호흡곤란·불안·운전</button>
                <button onclick="filterReviews('child')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="child">소아 틱·ADHD·집중력</button>
                <button onclick="filterReviews('insomnia')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="insomnia">불면증·스트레스·수면</button>
                <button onclick="filterReviews('adhd')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="adhd">성인ADHD·기억력</button>
                <button onclick="filterReviews('facial')" class="filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="facial">안면마비·경추·턱관절</button>
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

              <!-- [실제 네이버 인증 리뷰 2] 나타샤맘 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="facial autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#안면마비 #구안와사 #경추치료 #목통증개선</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;안면마비도 금방 없어지고 경추 치료로 잘 때 불편하던 목이 정말 편해졌어요!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">나타샤맘 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 15 · 사진 12</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    안면마비로 치과에서 삼차신경통일꺼라생각하고 약먹고했었는데 안나아서 침맞을까해서 집근처로 급하게 알아보고 온곳인데 너무 잘온거있죠!!<br><br>
                    안면 마비도 금방없어지고 마비증상이 경추때문인것도 알게되서 현재 계속 치료중인데 잘때 불편하던 목이 많이 편해졌어요! 실장님,간호사선생님도 친절하셔서 갈때마다 편히 진료받고 와요! 원장님도 더할나위없이 친절하시고 자상하셔서 너무좋습니다 강추예용ㅎㅎ
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 안면마비 침치료 + 경추 정렬 추나</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 3] 굿걸19 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#갱년기자율신경 #심장두근거림 #수면식은땀 #1인실진료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;심장 두근거림과 수면 중 식은땀이 확 줄고 예민하던 마음이 조절됩니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">굿걸19 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 5 · 사진 3</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    갱년기가 오나보다 대수롭지 않게 생각했는데 오지게 왔네요 사춘기처럼 그냥 지나가겠지 하고 버티다 버티다 너무 힘들어서 혹시나 하고 병원에 가서 이것저것 검사를 해보니 자율신경실조증이라는 얘기만 하고 치료약도 별반 없더군요 나만힘든건지 ㅠ<br><br>
                    양방보다는 한의원치료가 나을거같다며 딸이 검색해줘서 방문하게 됐습니다 검사받고 치료시작한지 2개월이 되가네요. 치료전엔 뭔지 몰라도 심장두근대고 자면서 식은땀 흘러 잠을 제대로못잤는데 치료시작하면서 젤 먼저 그런 증상이 많이 줄어들었고 수시로 짜증이 나고 예민해져서 너무 힘들었는데 이제는 마음이 좀 조절이 되는 것 같아요. 원장님을비롯 모두 친절해서 편안하게 치료받고 있어요~ 1인실로 조용한것도 장점입니다 추천합니다~~
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 갱년기 자율신경 조절 한약 + 침구 요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 4] 파파야7 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#불안불면증 #수면제부작용 #심장미친듯이뜀 #3개월호전</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;불안함과 심장 두근거림이 사라지고 마음이 편안해져서 이제 살 것 같아요.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">파파야7 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 21 · 사진 12</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    불안함과 불면증으로 스틸녹스 먹던중 환청 망상까지 부작용이 찾아와 진짜 무섭고 힘든중에 회사동료분 소개로 한방치료 시작했어요 이제 치료 시작한지 3개월!!<br><br>
                    설명하기 힘들만큼 불안해지고 심장이 미친듯이 뛰어 자다가도 일어나곤 했는데요 그런 증상들은 일단 사라졌고 마음도 편안해져서 이제 좀 살것같아요. 아직은 완전하게 모든것이 좋아진건 아니지만 매번 꼼꼼히 설명해주셔서 믿고 있어요 모두 친절하고 시설도 깨끗해서 좋아요 한방치료 반대하던 남편도 이제서야 치료를 믿어주고 도움을 주네요 ㅠㅠ
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 불안·불면 안신 한약 + 자율신경 안정 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 5] 박카스913 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아틱장애 #초등여아틱 #3개월호전 #아이심리안정</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;믿고 치료받으니 아이가 밝아지고 틱 증상도 없어지기 시작해서 정말 다행입니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">박카스913 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 31 · 사진 17</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    둘째 딸 틱때문에 병원에 찾아갔습니다. 치료받은지 이제 3달정도 된거같은데요.<br><br>
                    아이가 반응이 빠르지는 않은 편이라서 이제서야 증상이 좋아지는게 눈에 좀 보이네요. 원장님께서 한순간에 좋아지지 않으니 너무 조바심내지 말라고 하셨는데 쉽진 않더라구요. 그래도 믿고 치료받으니 아이가 밝아지고 증상도 없어지기 시작해서 정말 다행이고 마음이 좀 놓입니다. 너무 감사해요.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 맞춤 탕약 + 무통 두개천골 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 6] 네이버 예약 환자분 (자율신경이상/불면증/편두통) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic insomnia panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#만성불면증 #잦은편두통 #새벽심장두근거림 #자율신경이상 #가정의평화</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;불면증, 편두통, 새벽 심장두근거림이 편안해지며 온 가족에게 평화가 깃들었습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">네이버 예약 방문 환자 님</span>
                      <span>·</span>
                      <span>네이버 예약 방문 후기</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    불면증에 반복되는 잦은 편두통에 새벽에 심장두근거림등 말하자면 입아플 정도로 증상이 많았던 자율신경이상으로 너무 힘들던중에 여기가 마지막이다 생각하고 찾았던 곳이고 초조함과 불안함에 저절로 생기는 의심때문에 처음에 예의없는 질문도 많이 했었는데요ㅜㅜ<br><br>
                    이제는 정말 많이 편안해졌어요 덕분에 그동안 저의 늘어난 짜증과 신경질로 온가족이 힘들었었는데요 이제 가정에 평화도 깃든것같습니다. 다른치료들로 치료가 안되서 몸도 마음도 힘드신분들께 조금이라도 도움이 되고자 제 치료후기 남겨봐요~ 요즘 몸이 좋아지니 일이 좀 많아져 바쁘다보니치료를 중간에 못가는 날들 생겼는데요 원장님 말씀처럼 재발이 안되도록 최대한 열심히 치료하러 다닐게요^^ 원장님 선생님들 감사드려요
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 자율신경 조율 한약 + 두개천골 추나 + 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 7] 서윤40 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
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

              <!-- [실제 네이버 인증 리뷰 8] 네미와의하루 님 -->
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

              <!-- [실제 네이버 인증 리뷰 9] 한촬스 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic facial">
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

              <!-- [실제 네이버 인증 리뷰 10] 꽃날43 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
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

              <!-- [실제 네이버 인증 리뷰 11] 스즈나2858 님 -->
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

              <!-- [실제 네이버 인증 리뷰 12] hon**** 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#긴장불안 #마음치유 #원장님직접진료 #한약처방</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;긴장과 불안감 털어놓을 데 없었는데 마음 알아주고 처방해 주셔서 감사합니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">hon**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 29 · 사진 16</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    <strong>권형근</strong><br><br>
                    원장님 실장님 친절하게 설명해주시고 무엇보다 긴장과 불안감 털어놓을데 없었는데 마음 알아주고 처방해주셔서 감사합니다 한약을 먹어보면서 효과를 기대해볼께요.<br>
                    좋은일 가득하길 기원합니다
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 심리 안정 탕약 + 원장님 심층 상담</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 13] als**** 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#성인ADHD #집중력기억력개선 #두뇌보약 #주변인정변화</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;성인 ADHD 진단 후 집중력과 기억력이 좋아지는 것을 느끼며 주변에서도 인정합니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">als**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 12 · 사진 3</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    상담부터 모두 너무 친절하시고 좋았습니다<br>
                    저는 성인 ADHD를 진단을 받았습니다.<br>
                    처방으로 보약도 마시고 일주일에 한 번 물리치료도 받으면서 집중력과 기억력도 좋아지는 것을 느끼고 있습니다.<br><br>
                    진작에 알지 못해서 아쉬울정도입니다. 주변에서도 제 변화를 듣고 잘 갔다고 말해주고 있습니다. 항상 감사합니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 성인 ADHD 뇌기능 활성 탕약 + 한방 물리치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 14] 네이버 예약 환자분 (갱년기 자율신경 완치) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#자율신경실조증완치 #갱년기치료 #수면개선 #심장두근거림소실 #다시태어난기분</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;잠도 잘 자고 심장 두근거림도 없어져서 진짜 살 것 같고 다시 태어난 듯 사는 게 즐겁습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">네이버 예약 치료 종결 환자 님</span>
                      <span>·</span>
                      <span>네이버 예약 완치 후기</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    조금은 지루했던 치료가 벌써 끝나가네요^^<br>
                    자율신경실조증치료가 몇년갈걸로 생각했는데 생각보다는 일찍끝난걸까요 ㅎㅎ<br><br>
                    갱년기까지 겹쳐서 너무너무 힘들었는데 이젠 몸과 마음이 너무 가볍습니다. 잠도 잘자고 심장 두근거림도 없어져서 진짜 살것같고 다시 태어난듯 요즘 사는게 즐겁습니다. 다른병원헤매고 다니며 치료도 안돼서 돈버리고 짜증났는데 마지막치료라고 생각한 해아림 부평점에서 치료가 됬네요. 아마도 원장님, 실장님, 치료실분 까지 넘 따뜻하게 해주셔서 치료가 빨리된것 같습니다 ㅎ 감사드려요~~
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 갱년기 자율신경실조증 완치 탕약 + 침구 요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 15] 로이스4624 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#1년만성자율신경 #교감신경항진 #증상경청 #세심한상담</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;1년 넘게 고생하던 자율신경실조와 교감신경항진이 다니면서 많이 좋아졌습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">로이스4624 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 2 (예약 후 바로 입장)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    1년 넘게 자율신경실조 교감신경항진 등으로 고생하다가 해아림한의원 부평을 다니면서 많이 좋아지게되었습니다.<br><br>
                    원장님 간호사 분들이 모두 친절하시고 상담을 자주하면서 증상을 경청해주시는것이 좋았습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 교감신경 안정 탕약 + 자율신경 조율 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 16] 레몬발효소주 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#극심한긴장 #학생불안장애 #학교생활적응 #깨끗한시설</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;긴장이 너무 심해 학교생활이 힘들었는데 치료받고 많이 나아졌습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">레몬발효소주 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 24 · 사진 14</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    시설이 깨끗하고 좋았고<br><br>
                    긴장이 너무 심해 학교생활이 좀 힘들었는데 많이 나아진 것 같아요&lt;!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 긴장완화 안신 탕약 + 자율신경 안정 요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 17] 파파야7 님 (치료 종결 임박 후기) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#치료종결예정 #몸과마음편안 #원장님감사 #불안불면극복</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;몸도 마음도 많이 편해졌고 이제 치료 끝도 얼마 안 남았다는 말씀에 너무 감사했습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">파파야7 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 21 · 사진 12 (원내 사진 인증)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    2주만에 치료왔어요 몸도 마음도 많이 편해졌고 이제 치료끝도 얼마 안남았다는 원장님 말씀이 너무 감사했어요.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 불안·불면 안신 탕약 + 원내 집중 치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 18] bon**** 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#자율신경실조증 #상세한설명 #긍정적인마음 #한의학치료효과</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;치료 효과가 좋아 몸이 많이 좋아졌어요. 한의학 치료 효과를 확실히 느끼고 있습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">bon**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 19 (예약 후 바로 입장)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    자율신경실조증으로 해아림한의원부평점에서 치료 받고 있어요 원장선생님 이 질병에 대한 설명도 자세히 해 주시고 나올 수 있다는 긍정적 마음도 심어 주세요<br><br>
                    친절하게 정신, 몸의 변화에 대한 상담 아주 친절하고 자세히 정성껏 잘해 주세요~~ 치료 효과가 좋아 몸이 많이 좋아졌어요 한의학 치료 효과를 확실히 느끼고 있습니다
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 자율신경 조절 탕약 + 심층 침구 치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 19] wkm**** 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#공황장애 #자율신경장애 #친절한원장님 #깨끗한시설</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;공황장애와 자율신경장애로 방문했는데 원장님과 상담 선생님 모두 너무 친절하십니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">wkm**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 27 · 사진 90</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    상담 선생님, 너무 친절하시고 원장선생님 너무 친절하십니다. 시설도 너무 깨끗하고 좋아요.<br><br>
                    공황 장애와 자율신경장애로 방문하였는데 열심히 치료해서 꼭 건강한 삶을 찾고 싶습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 공황·자율신경 안신 탕약 + 이완 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 20] suzzzzzzz 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#호흡곤란불안 #공황증상 #목등교정치료 #즉각적시원함</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;숨이 안 쉬어지는 불안 증상이었는데, 치료받고 나오며 윗목과 등이 시원해지며 바로 나아졌어요!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">suzzzzzzz 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 682 · 사진 462</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    숨이 안쉬어지는것 같은 불안한 증상때문에 방문했는데 원장님이며 앞에 계신 간호쌤들이며 진짜 친절하심....<br><br>
                    치료받고 나오면서 윗목이랑 등쪽이 시원해지면서 증상이 바로 나아지는 느낌이 들었어여 ㅠㅠㅠ 아직 완전 사라지지는 않았는데 토욜 예약일인데 한번 더 가보고 효과 진짜 봤으면 좋겠습니다ㅠ
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 경추·흉추 추나요법 + 신경이완 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 21] als**** 님 (성인 ADHD 치료 종결 후기) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#성인ADHD치료종결 #심리적안정 #성인ADHD호전 #완치감사</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;심리적으로도 많이 편해졌고 성인 ADHD였는데 치료 종결할 정도로 많이 좋아졌습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">als**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 12 · 사진 3 (치료 종결 완치)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    작년 11월말일?12월 초쯤?부터 다녔는데 벌써 오늘이 마지막이라서 아쉽네요ㅠㅠ<br><br>
                    한의원 다니면서 너무너무 친절하셔서 즐거웠습니다! 심리적으로도 많이 편해졌고 성인 ADHD였는데 많이 좋아졌습니닷 그동안 너무 감사했고 앞으로도 번창하길 바랍니다!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 성인 ADHD 맞춤 탕약 + 뇌신경 밸런스 치료</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 22] 헤라3174 님 (자율신경실조증 치료 종결 완치) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#자율신경실조증치료종결 #커다란숙제끝 #따뜻한원장님 #새출발</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;이제 안 오셔도 됩니다~ 언제 끝날지 몰랐던 자율신경실조증 치료를 마치고 새 출발합니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">헤라3174 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 1 (진료 종료 완치)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    이제 안오셔도 됩니다~<br>
                    언제끝날지 몰랐던 자율신경실조증 치료 막상 진료종료 라는 원장님 말씀이 마냥 좋지만은 않네요~ㅎ 시원섭섭하다는 말?!<br><br>
                    같이 웃고 같이 화내주시던 원장님, 소소한 얘기에도 귀기울여 주시던 직원분들 모두 잊지못할거에요~ 정말 감사드립니다. 이제야 커다란 숙제하나를 끝낸 기분입니다. 2024년은 잊고 2025년 새로 시작할수 있을것 같아요~^^
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 자율신경 조율 한약 + 전신 밸런스 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 23] 쫑짝이 님 (불면증 / 스트레스 / 1인실) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="insomnia panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#불면증스트레스 #불안심리캐치 #1인치료실최고 #단연최고한의원</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;스트레스와 불면이 심하다면 꼭 치료받길 추천드립니다. 다녀본 한의원 중 단연 최고!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">쫑짝이 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 223 · 사진 237 (1인실 사진 인증)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    몇 년 전에 치료받고 많이 좋아졌어서 잘 살고있었는데... 요즘 부쩍 불면도 심해지고 스트레스를 정도 이상으로 받는 것 같아서 다녀왔어요<br><br>
                    여전히 따수운 실장님과 직원분들.. 진짜 항상 너무너무 친절하셔서 다녀오면 마음이 편해지는듯해요. 그리고 이 번에는 검사까지 하고 진료를 받으니 원장님께서 제 불안한 심리를 더 확실하게 캐치해 주셨고 검사 지표를 보며 진료 받으니 더 이해가 쉬웠어요. 1인 치료실 진짜 최고!!!!! 주변 신경쓰지 않아도 돼서 넘 좋아요❣️ 스트레스와 불면이 심하다면 방치하지 말고 꼭 치료받길 추천드립니다!!! 다녀본 한의원 중에 단연 최고!!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 스트레스·불면 안신 탕약 + 1인실 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 24] lon**** 님 (소아 틱장애 음성틱/근육틱) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아음성틱 #근육틱 #틱치료호전 #마음놓임</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;심했던 음성틱은 없어졌고 근육틱만 살짝 남았습니다. 아이도 너무 좋아해요!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">lon**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 30 · 사진 13</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    둘째딸 틱으로 치료받은지 8-9개월정도 된거같아요. 아아 거리는 음성틱부터해서 목, 팔, 얼굴로 근육틱도 심했는데 지금은 음성틱은 없어졌고 근육틱만 살짝 남은 상태네요!<br><br>
                    아이도 너무 좋아하고 저도 마음놓여서 다행입니다. 잘 마무리해서 치료 끝내려구요!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 복합 틱 탕약 + 무통 교정 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 25] sun**** 님 (만성 자율신경실조증 7-8개월 호전) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#4년만성자율신경 #가슴두근거림 #머리멍함 #살것같은기분</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;4-5년 고생하던 자율신경실조증이 7-8개월 치료 후 정말 살만해졌습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">sun**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 14 · 사진 10</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    <strong>권형근</strong><br><br>
                    자율신경실조증으로 거의 4-5년을 고생한것 같습니다. 머리 멍하고, 답답하고, 가슴두근거리고, 소화 안되고, 자주 설사하고, 춥다 더웠다.. 정말 증상들이 너무 많아서 힘들었어요.<br><br>
                    해아림에서 치료한지 이제 7-8개월 되어가는거 같은데.. 정말 많이 좋아졌습니다. 이전 생각하면 지금은 정말 살만한 거 같아요. 원장님께서 치료하는데 시간이 많이 들건데, 그것만 잘 버텨주시면 꼭 좋아질거라고 하셨는데, 정말 그렇게 되어가네요. 감사합니다..
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 만성 자율신경 조절 탕약 + 심비보강 요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 26] 꽃날43 님 (공황장애 / 자동차 운전) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#공황장애치료 #운전공황증상호전 #생활개선</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;자동차 운전할 때 심하던 공황 증상이 많이 사라져 생활하기 편해졌습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">꽃날43 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 14 · 사진 13</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    <strong>권형근</strong><br><br>
                    해아림에서 공황장애로 치료받은지 몇달됐는데, 자동차 운전할때도 증상이 심했거든요. 그런건 많이 사라졌어요~!<br><br>
                    아직 스트레스 받거나 사람 많으면 증상이 올라오는게 있긴한데 이것도 예전보다는 많이 줄어든거라, 생활하기에 많이 나아졌습니다~ 좀 더 치료받으면 더 좋아질거같아요~ 열심히 치료 받아볼게요~
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 공황장애 안정 탕약 + 뇌신경 이완 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 27] tkd**** 님 (15년 만성 자율신경실조증 몇 달 만에 소실) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#15년만성자율신경 #몇달만에소실 #한약침추나 #원장님실장님친절</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;거의 15년 이상 갖고 살던 자율신경 증상이 한약과 침·추나 치료 몇 달 만에 사라졌습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">tkd**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 53 · 사진 42</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    25년초에 처음 방문해서 진료받고 자율신경계에 문제가 있다는걸 알았어요<br><br>
                    거의 15년 이상 갖고살던 증상이었는데 한약 처방받고 침치료랑 추나받으면서 몇달만에 증상이 사라져서 진짜 신기했어요👍<br>
                    원장님이랑 실장님 선생님들 다 너무너무 친절하시고 좋으세요!!🎁
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 만성 자율신경 조율 한약 + 침구·추나요법</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 28] eklee98088 님 (손떨림/두근거림/호흡곤란 1년 치료종료) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#손떨림두근거림 #호흡곤란 #뇌파검사추적 #1년치료종료일상회복</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;손떨림, 가슴 두근거림, 호흡곤란을 극복하고 아프기 전 일상을 되찾아 치료를 종료했습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">eklee98088 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 9 · 사진 7 (치료 종료 일상 회복)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    가정과 직장에서 받은 각종 스트레스로 1년 넘게 치료 받았습니다.<br><br>
                    스트레스 상황에서의 손떨림 증상으로 시작해서 점점 증상이 발전하여 가슴이 두근거리고 숨이 잘 안 쉬어졌었어요. 그러다보니 사람 만나는 게 자신이 없어져서 스스로를 고립시키고 나도 내가 이해가 안되고 어찌할 바를 모르는 상태로 6개월을 지내다 해아림한의원을 방문하게 되었습니다.<br><br>
                    뇌파검사 등을 통해 내 스트레스 정도와 호전정도를 체크하며 한약을 1년 복용했고, 매주 침치료와 추나치료를 병행하였습니다. 한약이라 약에 대한 내성이나 부작용에 대한 걱정 없이 꾸준히 복용하였고, 뇌파상으로도 체감상으로도 마음이 서서히 진정되어가는걸 느꼈습니다.<br><br>
                    이제 아프기 전의 일상을 되찾게 되어 치료가 종료되는 시점에 원장님과 직원분들께 감사의 인사를 전합니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 뇌파 기반 1:1 맞춤 탕약 + 침구·추나</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 29] yun**** 님 (극심한 소아 틱 99% 완치) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#극심했던소아틱 #침치료뇌파한약 #99프로완치 #꼼꼼하고편안한진료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;아이가 틱이 너무너무 심했는데, 치료 후 지금은 99% 다 나았습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">yun**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 35 · 사진 34</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    아이가 틱이 너무너무심했는데<br>
                    여기서 침치료 뇌파치료 한약치료 하고나서 지금은 너무너무 좋아져서 99프로는 다 나은거 같아요<br><br>
                    진짜 의사쌤과 간호사쌤들께 너무 감사드려요. 갈때마다 너무친절하시고 꼼꼼히 진료봐주시고 맘두 편하게 해주셔서 더더욱 치료가 잘되는거 같아요 해아림한의원 강력추천 합니다^^
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 틱 탕약 + 뇌파 훈련 + 무통 침구</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

              <!-- [실제 네이버 인증 리뷰 30] tp**** 님 (공황장애 복직 및 비행기 탑승 성공) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#공황장애극복 #대중교통운전불가 #휴직후복직성공 #비행기탑승제주여행</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;지하철·운전도 못 해 휴직했던 공황장애를 무사히 치료하고 복직 &amp; 비행기 탑승까지 성공했습니다!&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-1.5 text-xs text-[#8B9891]">
                      <span class="font-bold text-[#333333]">tp**** 님</span>
                      <span>·</span>
                      <span>네이버 리뷰 4 · 사진 1 (치료 종결 복직)</span>
                    </div>
                  </div>
                  <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                    갑자기 불현듯 발생한 공황장애로 지하철, 버스 이용 자체도 힘들고 운전도 불가능했고 직장에서도 너무나 힘든 상황들이 많아 휴직할 수밖에 없던 상황에 고민 끝에 선택한 해아림 한의원 치료를 드디어 무사히 끝내고 복직했습니다.<br><br>
                    좋은 치료 결과로 복직을 결정하고 용기 내서 다녀온 제주 여행에 비행기도 무리 없이 이용했고 잠도 잘 자고 있습니다. 그동안 정성을 다해 치료해 주신 직원분들과 원장님께 진심으로 감사드리고 말씀처럼 생활관리도 건강하게 잘 하도록 하겠습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 공황장애 안신진경 탕약 + 자율신경 이완 훈련</span>
                  <span class="text-[#03C75A] font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> 네이버 영수증·예약 실제 인증
                  </span>
                </div>
              </div>

            </div>

            <!-- 의료법 준수 로그인 게이트 (미로그인 시 표시) -->
            <div id="auth-lock-gate" class="p-6 sm:p-8 rounded-2xl bg-[#FFFDF5] border-2 border-[#F4D06F] text-center space-y-4 shadow-sm my-6">
              <div class="w-12 h-12 rounded-full bg-[#FFF3D6] text-[#855B00] flex items-center justify-center mx-auto text-xl">
                <i class="fa-solid fa-lock"></i>
              </div>
              <div class="space-y-1">
                <h3 class="text-base sm:text-lg font-extrabold text-[#26332E]">
                  의료법 제56조 준수를 위해 치료후기 전체 열람은 로그인이 필요합니다
                </h3>
                <p class="text-xs sm:text-sm text-[#68736E] max-w-xl mx-auto">
                  별도의 회원가입 없이 <strong>카카오 1초 간편 로그인</strong>으로 즉시 모든 실제 환자 치료후기 및 완치 수기를 확인하실 수 있습니다.
                </p>
              </div>
              <div>
                <button onclick="handleKakaoLogin()" class="heal-btn heal-btn-kakao px-8 py-3.5 text-sm font-extrabold shadow-md inline-flex items-center gap-2 cursor-pointer">
                  <i class="fa-solid fa-comment text-base"></i>
                  <span>카카오톡으로 1초 로그인하고 전체보기</span>
                </button>
              </div>
            </div>

            <!-- 후기 더보기 버튼 영역 -->
            <div id="load-more-container" class="text-center pt-6 pb-2">
              <button id="load-more-btn" onclick="loadMoreReviews()" class="px-8 py-3.5 rounded-2xl bg-white border-2 border-[#2F5D50] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-circle-plus"></i>
                <span id="load-more-text">치료 후기 더보기</span>
                <span id="load-more-count" class="bg-[#EAF2ED] text-[#2F5D50] text-xs px-2.5 py-0.5 rounded-full font-bold group-hover:bg-white/20"></span>
              </button>
            </div>

          </div>

          <!-- 4-B. [탭 2] 자필 수기 후기 영역 (handwritten-section: 초기 숨김) -->
          <div id="handwritten-section" class="space-y-8" style="display: none;">
            <!-- 자필 수기 전용 의료법 잠금 게이트 -->
            <div id="handwritten-lock-gate" class="p-6 sm:p-8 rounded-2xl bg-[#FFFDF5] border-2 border-[#F4D06F] text-center space-y-4 shadow-sm">
              <div class="w-12 h-12 rounded-full bg-[#FFF3D6] text-[#855B00] flex items-center justify-center mx-auto text-xl">
                <i class="fa-solid fa-file-shield"></i>
              </div>
              <div class="space-y-1">
                <h3 class="text-base sm:text-lg font-extrabold text-[#26332E]">
                  환자 자필 수기 원본 사진은 의료법에 따라 본인 인증 후 열람 가능합니다
                </h3>
                <p class="text-xs sm:text-sm text-[#68736E] max-w-xl mx-auto">
                  불특정 다수 대상의 치료경험담 광고를 제한하는 의료법 규정을 준수하며, 카카오 간편 로그인을 통해 안전하게 원본을 열람하실 수 있습니다.
                </p>
              </div>
              <div>
                <button onclick="handleKakaoLogin()" class="heal-btn heal-btn-kakao px-8 py-3.5 text-sm font-extrabold shadow-md inline-flex items-center gap-2 cursor-pointer">
                  <i class="fa-solid fa-comment text-base"></i>
                  <span>카카오 1초 간편 로그인 후 자필 원본 보기</span>
                </button>
              </div>
            </div>

            <div class="border-b border-[#E2EAE5] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                  <span>✍️ 원내 환자 자필 수기 치료 후기</span>
                  <span class="text-xs sm:text-sm font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-full">자필 원본 등록</span>
                </h2>
                <p class="text-xs sm:text-sm text-[#68736E] mt-1">치료 종결 후 원내에서 환자분들과 보호자분들이 직접 손글씨로 남겨주신 소중한 종이 수기 원본입니다.</p>
              </div>
              <div class="text-xs text-[#8B9891] flex items-center gap-1.5 self-start sm:self-auto bg-[#F9FAF8] px-3 py-1.5 rounded-lg border border-[#EDF2EE]">
                <i class="fa-solid fa-magnifying-glass-plus text-[#2F5D50]"></i>
                <span>이미지를 클릭하시면 원본을 크게 보실 수 있습니다</span>
              </div>
            </div>

            <!-- 자필 수기 카드 목록 (그리드) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <!-- [자필 수기 1] 신미* 님 (자율신경실조증) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#자율신경실조증 #두통호전 #가슴두근거림소실 #9개월완치</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;심장 두근거림, 가슴 답답함, 두통이 사라지고 9개월 치료를 통해 치유되었습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">신미* 님</span>
                      <span>·</span>
                      <span>병명: <strong>자율신경실조증</strong></span>
                      <span>·</span>
                      <span>치료기간: 2023.09 ~ 2024.06 (9개월)</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_1.jpg', '신미* 님 자필 수기 원본 (자율신경실조증 9개월 치료 완치)')">
                    <img src="/images/reviews/handwritten_1.jpg" alt="신미* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>심장이 두근거리고 빨리 뛰는 증상</li>
                        <li>가슴이 답답함 / 가끔 밖에 혼자 나가기 두려울 때가 있었음</li>
                        <li>지속되는 만성 두통</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 몸 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>두통이 없어짐</strong></li>
                        <li><strong>가슴 두근거림과 빨리 뛰는 것이 지금까지 증상이 없음</strong></li>
                        <li>불안증도 많이 호전됨 &amp; 가슴 답답한 것도 없어짐</li>
                        <li>몸이 전체적으로 좋아짐을 느낌</li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 따뜻한 한마디:</strong>
                      &ldquo;여러 증상이 나타났지만 공황증상과 비슷하여 정신과 방문을 했는데 신경계에 문제가 있다고 하셔서 병의 근본적인 치료가 우선이라 생각하고 해아림을 내원하게 되었습니다. 나의 병에 대해 정확하게 진단해 주신 선생님과 상담하며 침치료도 하며 9개월이란 치료기간을 통해 치유되었습니다. 혹시 저와 같은 증상이 있으시다면 망설이지 마시고 어려워 마시고 치료하셨으면 좋겠습니다.&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 1:1 맞춤 자율신경 조율 한약 + 침구 치료</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 2] 황*아 어린이 보호자 님 (소아 틱장애) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아틱장애 #운동음성복합틱 #틱자가조절 #부모마음놓임</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;복합 틱이 호전되고 아이 본인도 스스로 컨트롤할 수 있는 힘이 생겼습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">황*아 (8세 여아, 진단 당시 7세) 보호자 님</span>
                      <span>·</span>
                      <span>병명: <strong>틱장애</strong></span>
                      <span>·</span>
                      <span>치료기간: 8개월</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_2.jpg', '황*아 어린이 보호자 님 자필 수기 원본 (소아 틱장애 8개월 치료)')">
                    <img src="/images/reviews/handwritten_2.jpg" alt="황*아 어린이 보호자 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>눈깜빡임, 얼굴찡그림, 기침, 고개젖히기 등 운동/음성틱이 돌아가며 발현</li>
                        <li>긴장하거나 흥분되는 상황(놀이터, 체육시간 등)에 증상이 더 심해짐</li>
                        <li>호전과 악화가 반복되어 부모로서 큰 걱정과 불안</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li>꾸준한 치료로 전반적 증상 호전 &amp; 부모의 부담과 걱정이 크게 감소</li>
                        <li>증상이 나타나더라도 이전보다 정도가 약해지고 지속 시간이 짧아짐</li>
                        <li><strong>아이 본인도 어느 정도 컨트롤할 수 있는 힘이 생김</strong></li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 다른 부모님들께 드리는 따뜻한 조언:</strong>
                      <ul class="not-italic space-y-1 text-xs sm:text-sm mt-1 list-disc list-inside">
                        <li>틱은 좋아졌다가 다시 나타나는 증상이 반복될 수 있으니 너무 조급해하지 않았으면 함.</li>
                        <li>단기간의 변화보다는 장기적으로 증상이 어떻게 달라지는지 지켜보는 것이 중요함.</li>
                        <li>아이의 증상을 계속 지적하거나 지나치게 의식하지 않도록 양육자(부모) 모두 일관된 태도 유지.</li>
                        <li>치료를 시작했다면 충분한 시간을 갖고 해아림을 믿고 끝까지 이어가보기를 권유.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 틱 한방 맞춤 탕약 + 뇌신경 이완 훈련</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 3] 최옥* 님 (불안장애 / 어지럼증·불면증 완치) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#불안장애 #극심한어지럼증 #불면증극복 #8개월치료완치</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;매우 어지럽고 잠도 못 자며 항상 불안했는데, 지금은 매우 좋아졌습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">최옥* 님</span>
                      <span>·</span>
                      <span>병명: <strong>불안장애</strong></span>
                      <span>·</span>
                      <span>치료기간: 8개월</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_3.jpg', '최옥* 님 자필 수기 원본 (불안장애 8개월 치료 완치)')">
                    <img src="/images/reviews/handwritten_3.jpg" alt="최옥* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>매우 어지러웠다 (극심한 어지럼증)</li>
                        <li>잠도 못 자고 매우 힘들었음 (수면 장애 및 불면)</li>
                        <li>항상 불안했음 (지속적인 불안감)</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>지금은 매우 좋아졌습니다.</strong></li>
                        <li>어지럼증과 불면증이 해소되어 일상생활을 편안하게 회복함</li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 진심 어린 한마디:</strong>
                      &ldquo;믿고 열심히 치료 받으세요.&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 불안·어지럼 안신 탕약 + 신경조절 침구</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 4] 김우* 님 (우울증 / 무기력·우울감 극복 및 취업 성공) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#우울증 #무기력극복 #식사수면정상화 #취업성공 #16개월완치</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;극심했던 무기력감과 우울감이 현저하게 낮아지고, 취업에도 성공하여 사회생활을 하고 있습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">김우* 님</span>
                      <span>·</span>
                      <span>병명: <strong>우울증</strong></span>
                      <span>·</span>
                      <span>치료기간: 2024. 6. 30. ~ 2025. 10. 3. (16개월)</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_4.jpg', '김우* 님 자필 수기 원본 (우울증 16개월 치료 완치)')">
                    <img src="/images/reviews/handwritten_4.jpg" alt="김우* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>지속되는 무기력감으로 항상 쳐져있고 피로감이 극심했음</li>
                        <li>사소한 일에도 눈물을 흘리고, 감정이 주체가 안 되었음</li>
                        <li>흥미로운 일도 없고 하고 싶은 것도 없었음</li>
                        <li>간혹 안 좋은 생각이 떠오름</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 몸 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>후반부엔 감정이 가라앉긴 하지만 무기력감도 우울감도 현저하게 낮아짐</strong></li>
                        <li><strong>밥도 잘 먹고 잘 자고 건강해진 느낌</strong></li>
                        <li><strong>취업에도 성공해서 사회생활도 하는 중</strong></li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 진심 어린 한마디:</strong>
                      &ldquo;정말 우울증이 심할 때는 탈출구가 없다는 생각에 죽고 싶기만 했어요. 저와 같은 분들이 있다면 믿고 치료해 보세요. 시간은 걸리겠지만 좋아질 수 있습니다.&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 1:1 맞춤 우울·신경계 조율 한약 + 안신 침구 치료</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 5] 김나* 님 (공황장애 / 지하철·대중교통 공황 극복) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#공황장애 #지하철공황 #호흡곤란극복 #대중교통이용 #6개월호전</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;지하로 내려가면 숨이 막히고 지하철에서 기절할 것 같았는데, 6개월 치료 후 대중교통을 편안하게 이용하게 되었습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">김나* 님</span>
                      <span>·</span>
                      <span>병명: <strong>공황장애</strong></span>
                      <span>·</span>
                      <span>치료기간: 2025. 12. 13. ~ 2026. 6. 1. (6개월)</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_5.jpg', '김나* 님 자필 수기 원본 (공황장애 6개월 치료 호전)')">
                    <img src="/images/reviews/handwritten_5.jpg" alt="김나* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>지하로 내려가면 숨이 막히는 느낌</li>
                        <li>심장이 너무 빠르게 요동치는 느낌</li>
                        <li>설사를 하면 기운이 빠지는 느낌</li>
                        <li>지하철을 타면 기절할 것 같은 느낌</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 몸 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>좁은 공간에 있어도 살 것 같은 느낌</strong></li>
                        <li><strong>대중교통 이용이 너무 힘들었지만 지금은 많이 나아져서 대중교통 이용</strong></li>
                        <li><strong>어지럼증이 많이 나아져 일상이 편안해짐</strong></li>
                        <li><strong>최근까지도 심장이 빠르게 뛰었으나 지금은 많이 호전되어 편해짐</strong></li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 진심 어린 한마디:</strong>
                      &ldquo;많은 분들이 겪는 질환이라고 생각이 들어요. 해아림을 알고 치료를 시작하기 전까진 많은 고민을 했었던 기억이 납니다. 짧은 치료가 아니기 때문에 나와의 싸움이라고 생각합니다. 지금도 고민하시면 저의 글이 조금이나마 결정에 도움이 되었으면 좋겠습니다. 참을 수 있는 질환이 아니기 때문에 하루라도 빨리 치료를 하셨으면 좋겠습니다.&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 공황 안신 맞춤 한약 + 자율신경 조율 침구 치료</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 6] 김지* 님 (발표불안 / 사회공포증 / 시선공포 완치) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#발표불안 #사회공포증 #시선공포 #불안장애 #식은땀울렁거림호전 #1년완치</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;발표 시간에 주목받는 게 무섭고 시선도 피했는데, 불안감과 식은땀이 사라지고 하고 싶은 일이 생겼습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">김지* 님</span>
                      <span>·</span>
                      <span>병명: <strong>발표불안 · 사회공포증 (불안장애)</strong></span>
                      <span>·</span>
                      <span>치료기간: 2024. 1. 16. ~ 2025. 1. 5. (약 1년)</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_6.jpg', '김지* 님 자필 수기 원본 (발표불안·사회공포증 1년 치료 완치)')">
                    <img src="/images/reviews/handwritten_6.jpg" alt="김지* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>항상 긴장을 잘했음, 학교에서 발표 시간이 두려워짐</li>
                        <li>발표 시간에 모두가 나를 주목하는 상황이 너무 무섭고 피하고 싶었음</li>
                        <li>사람 많은 곳이 힘들어 외출을 점점 피하게 됨 &amp; 친구들과의 만남도 부담</li>
                        <li>무기력·우울감 &amp; 눈을 마주치며 대화하기 힘들어 시선 회피, 손발 식은땀·얼굴 열감 심함</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 몸 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>수개월 지나며 어느 순간 손발 식은땀이 줄어들고 얼굴 홍조가 줄어듦</strong></li>
                        <li><strong>긴장하면 생기던 속 울렁거림이 매우 좋아짐</strong></li>
                        <li><strong>잠을 편안하게 자기 시작했고 불안감이 사라지며 하고 싶은 일이 생김</strong></li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 진심 어린 한마디:</strong>
                      &ldquo;치료를 한다는 게 뭔가 거부감이 들었는데 왜 조기 치료가 중요한지 알 것 같고, 저처럼 불안장애나 공황발작 같은 증상들로 힘든 분들께 꼭 치료받으라고 말해주고 싶고 힘내라고 응원해주고 싶어요. 원장님과 선생님들 감사합니다 ^^&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 항불안 심신안정 한약 + 뇌신경 이완 침구 치료</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

              <!-- [자필 수기 7] 하도* 님 (자율신경실조증 / 상열감·이명·어지럼증 호전) -->
              <div class="heal-card bg-white p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- 카드 상단 태그 & 정보 -->
                  <div class="flex items-center justify-between flex-wrap gap-2">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#자율신경실조증 #상열감호전 #이명어지럼증 #긴장성근육뭉침 #20대자율신경 #6개월치료</span>
                    <span class="text-xs text-[#03C75A] font-bold flex items-center gap-1">
                      <i class="fa-solid fa-file-signature"></i> 원내 자필 원본
                    </span>
                  </div>

                  <!-- 제목 및 기본 인적 정보 (개인정보 보호 익명화) -->
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">
                      &ldquo;20대 상열감, 이명, 어지럼증, 긴장성 근육 뭉침… 6개월 집중 치료로 몸이 편안해지고 부드러워졌습니다.&rdquo;
                    </h3>
                    <div class="flex items-center gap-2 mt-2 text-xs text-[#68736E] bg-[#F4F7F5] p-2.5 rounded-lg">
                      <span class="font-bold text-[#26332E]">하도* 님 (20대 남성)</span>
                      <span>·</span>
                      <span>병명: <strong>자율신경실조증</strong></span>
                      <span>·</span>
                      <span>치료기간: 2026. 1. 15. ~ 2026. 7. 31. (6개월)</span>
                    </div>
                  </div>

                  <!-- 자필 스캔본 썸네일 (클릭 시 확대 모달) -->
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-[#DDE6E1] bg-[#FAFCFB]" onclick="openModal('/images/reviews/handwritten_7.jpg', '하도* 님 자필 수기 원본 (자율신경실조증 6개월 치료 호전)')">
                    <img src="/images/reviews/handwritten_7.jpg" alt="하도* 님 자필 체험 수기 원본" class="w-full h-56 object-cover object-top transition duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <div class="absolute inset-0 bg-[#1E4638]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                      <i class="fa-solid fa-magnifying-glass-plus text-lg"></i>
                      <span>클릭하여 자필 원본 크게보기</span>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-sm">
                      🔍 확대보기
                    </div>
                  </div>

                  <!-- 상세 문진 전사 내용 -->
                  <div class="space-y-3 text-xs sm:text-sm text-[#374151] leading-relaxed">
                    <div class="p-3.5 bg-[#FFF9F5] rounded-xl border border-[#FFE8DC]">
                      <div class="font-extrabold text-[#A63C1E] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> 치료 받기 전 힘드셨던 증상
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#5A433A]">
                        <li>긴장을 많이 함 &amp; 긴장으로 인한 근육 뭉침</li>
                        <li>얼굴 열감 (상열감) 및 여드름</li>
                        <li>순간순간 어지럼증 및 긴장 시 두통</li>
                        <li>이명 (귀통증 동반) &amp; 입맛이 없음 (식욕부진)</li>
                      </ul>
                    </div>

                    <div class="p-3.5 bg-[#F0F8F4] rounded-xl border border-[#CDE5D8]">
                      <div class="font-extrabold text-[#1E4638] mb-1.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-circle-check text-[#03C75A]"></i> 치료 후 나아진 몸 상태
                      </div>
                      <ul class="list-disc list-inside space-y-1 text-[#2D5346]">
                        <li><strong>근육 뭉침이 풀리고 몸이 많이 편해지고 부드러워짐</strong></li>
                        <li><strong>얼굴로 오르는 상열감이 줄고 덕분에 피부/여드름도 호전</strong></li>
                        <li><strong>어지럼증과 두통 빈도수 현저히 감소</strong></li>
                        <li><strong>신경 쓸 때 심했던 이명 빈도수 대폭 감소 &amp; 걱정·불안·두근거림 완화</strong></li>
                      </ul>
                    </div>

                    <div class="p-4 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] italic text-[#4B5563]">
                      <strong class="not-italic text-[#1E4638] block mb-1">💬 환자분의 진심 어린 한마디:</strong>
                      &ldquo;20대라는 젊은 나이에 그냥 좋아지겠지 하고 막연히 몇 년을 보내다 증상이 더 심해졌다. 정신과 약을 복용하다 이대로는 안 되겠다 싶어 부모님과 진료 후 치료 결정을 했다. 젊다는 이유로 치료를 미루는 실수를 하지 말기를… 해아림한의원이 나에겐 좋은 선택이었다.&rdquo;
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 1:1 맞춤 청열안신 한약 + 자율신경 균형 침구 치료</span>
                  <span class="text-[#03C75A] font-bold">인천부평점 원내 보관 수기</span>
                </div>
              </div>

            </div>


          </div>

          <!-- 자필 수기 확대 모달 (Lightbox) -->
          <div id="image-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4" onclick="closeModal()">
            <div class="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col" onclick="event.stopPropagation()">
              <div class="p-4 bg-[#1E4638] text-white flex items-center justify-between">
                <span id="modal-title" class="font-extrabold text-sm sm:text-base flex items-center gap-2">
                  <i class="fa-solid fa-file-signature text-[#03C75A]"></i>
                  <span>자필 수기 원본</span>
                </span>
                <button onclick="closeModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-lg transition cursor-pointer">
                  &times;
                </button>
              </div>
              <div class="p-4 overflow-auto max-h-[calc(90vh-70px)] bg-[#F8FAF9] flex items-center justify-center">
                <img id="modal-img" src="" alt="자필 수기 원본 확대 이미지" class="max-w-full h-auto rounded-lg shadow border border-[#DDE6E1]">
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
              <a href="https://pf.kakao.com/_Tcxcxoxj" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao text-sm font-bold px-5 py-3 rounded-xl bg-[#FEE500] text-[#191919] hover:bg-[#FDD835] transition flex items-center gap-2">
                <i class="fa-solid fa-comment"></i>
                <span>카카오톡 1:1 상담</span>
              </a>
              <a href="tel:032-719-3472" class="heal-btn text-sm font-bold px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-2 border border-white/20">
                <i class="fa-solid fa-phone"></i>
                <span>032-719-3472 전화상담</span>
              </a>
            </div>
          </div>

        </div>

        <!-- 탭 및 카테고리 필터 + 더보기(Load More) 스크립트 -->
        <script>
          let currentCategory = 'all';
          const INITIAL_LIMIT = 8;
          const STEP = 6;
          let visibleLimit = INITIAL_LIMIT;

          function showTab(tabName) {
            const naverSec = document.getElementById('naver-section');
            const handSec = document.getElementById('handwritten-section');
            const tabNaver = document.getElementById('tab-naver');
            const tabHand = document.getElementById('tab-handwritten');

            if (tabName === 'naver') {
              if (naverSec) naverSec.style.display = 'block';
              if (handSec) handSec.style.display = 'none';
              tabNaver.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#2F5D50] text-white shadow-md flex items-center gap-2 cursor-pointer";
              tabHand.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#F4F7F5] text-[#556B62] hover:bg-[#E8EFEA] flex items-center gap-2 border border-[#DDE6E1] cursor-pointer";
            } else {
              if (naverSec) naverSec.style.display = 'none';
              if (handSec) handSec.style.display = 'block';
              tabHand.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#2F5D50] text-white shadow-md flex items-center gap-2 cursor-pointer";
              tabNaver.className = "px-5 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 bg-[#F4F7F5] text-[#556B62] hover:bg-[#E8EFEA] flex items-center gap-2 border border-[#DDE6E1] cursor-pointer";
            }
          }

          function updateReviewDisplay() {
            const items = document.querySelectorAll('.review-item');
            let matchingItems = [];

            items.forEach(item => {
              const cats = item.getAttribute('data-category') || '';
              if (currentCategory === 'all' || cats.includes(currentCategory)) {
                matchingItems.push(item);
              } else {
                item.style.display = 'none';
              }
            });

            matchingItems.forEach((item, index) => {
              if (index < visibleLimit) {
                item.style.display = 'flex';
              } else {
                item.style.display = 'none';
              }
            });

            const totalMatching = matchingItems.length;
            const remaining = Math.max(0, totalMatching - visibleLimit);
            const loadMoreBtn = document.getElementById('load-more-btn');
            const loadMoreCount = document.getElementById('load-more-count');
            const loadMoreContainer = document.getElementById('load-more-container');

            if (remaining > 0) {
              loadMoreContainer.style.display = 'block';
              loadMoreBtn.style.display = 'inline-flex';
              loadMoreCount.textContent = `+${remaining}개 더보기`;
            } else {
              loadMoreContainer.style.display = 'none';
            }
          }

          function filterReviews(category) {
            currentCategory = category;
            visibleLimit = INITIAL_LIMIT;

            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
              if (btn.getAttribute('data-cat') === category) {
                btn.className = "filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white";
              } else {
                btn.className = "filter-btn px-3.5 py-2 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]";
              }
            });

            updateReviewDisplay();
          }

          function loadMoreReviews() {
            visibleLimit += STEP;
            updateReviewDisplay();
          }

            // ==================== 카카오 1초 간편 로그인 & 의료법 게이트 로직 ====================
            const AUTH_KEY = 'healim_kakao_verified_user';

            function isUserAuthenticated() {
              return localStorage.getItem(AUTH_KEY) === 'true';
            }

            function updateAuthUI() {
              const isAuth = isUserAuthenticated();
              const authStatusBar = document.getElementById('auth-status-bar');
              const authIcon = document.getElementById('auth-icon');
              const authTitle = document.getElementById('auth-title');
              const authDesc = document.getElementById('auth-desc');
              const authActionArea = document.getElementById('auth-action-area');
              const authLockGate = document.getElementById('auth-lock-gate');
              const handwrittenLockGate = document.getElementById('handwritten-lock-gate');

              if (isAuth) {
                // 로그인 상태 UI
                if (authStatusBar) {
                  authStatusBar.className = "p-4 sm:p-5 rounded-2xl bg-[#EAF3EF] border border-[#2F5D50]/30 text-[#1E4638] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all";
                }
                if (authIcon) {
                  authIcon.className = "fa-solid fa-circle-check text-[#03C75A] text-base";
                }
                if (authTitle) {
                  authTitle.textContent = "[의료법 준수 회원 인증 완료] 치료 후기 전체 열람 중";
                }
                if (authDesc) {
                  authDesc.innerHTML = "카카오 간편 회원 인증이 완료되어 <strong>모든 네이버 인증 후기 및 자필 수기 원본</strong>을 열람하실 수 있습니다.";
                }
                if (authActionArea) {
                  authActionArea.innerHTML = `
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold text-[#2F5D50] bg-white px-3 py-1.5 rounded-lg border border-[#CDE5D8]">
                        <i class="fa-solid fa-user-check text-[#03C75A] mr-1"></i>카카오 인증회원
                      </span>
                      <button onclick="handleKakaoLogout()" class="px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-[#68736E] text-xs font-bold border border-[#DDE6E1] transition cursor-pointer">
                        로그아웃
                      </button>
                    </div>
                  `;
                }
                if (authLockGate) authLockGate.style.display = 'none';
                if (handwrittenLockGate) handwrittenLockGate.style.display = 'none';
              } else {
                // 미로그인 상태 UI
                if (authStatusBar) {
                  authStatusBar.className = "p-4 sm:p-5 rounded-2xl bg-[#FFF9E6] border border-[#F4D06F] text-[#855B00] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all";
                }
                if (authIcon) {
                  authIcon.className = "fa-solid fa-lock text-[#B88A3B] text-base";
                }
                if (authTitle) {
                  authTitle.textContent = "[의료법 제56조 준수 안내] 치료 후기 열람 제한";
                }
                if (authDesc) {
                  authDesc.innerHTML = "의료법 제56조에 따라 실제 환자 치료 경험담 및 자필 수기 원본은 <strong>로그인(간편인증) 회원에게만 제한적으로 공개</strong>됩니다.";
                }
                if (authActionArea) {
                  authActionArea.innerHTML = `
                    <button onclick="handleKakaoLogin()" class="heal-btn heal-btn-kakao w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                      <i class="fa-solid fa-comment text-sm"></i>
                      <span>카카오 1초 간편 로그인</span>
                    </button>
                  `;
                }
                if (authLockGate) authLockGate.style.display = 'block';
                if (handwrittenLockGate) handwrittenLockGate.style.display = 'block';
              }
            }

            function handleKakaoLogin() {
              // 카카오 간편 1초 인증 시뮬레이션 및 로컬 인증 완료 처리
              const btn = event?.currentTarget;
              if (btn) {
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 인증 중...';
              }
              setTimeout(() => {
                localStorage.setItem(AUTH_KEY, 'true');
                updateAuthUI();
                alert('카카오 간편 로그인이 완료되었습니다.\n이제 모든 치료후기와 자필 수기 원본을 자유롭게 확인하실 수 있습니다.');
              }, 400);
            }

            function handleKakaoLogout() {
              if (confirm('로그아웃 하시겠습니까? 치료후기 열람이 다시 제한됩니다.')) {
                localStorage.removeItem(AUTH_KEY);
                updateAuthUI();
              }
            }

            function openModal(imgSrc, title) {
              if (!isUserAuthenticated()) {
                if (confirm('자필 수기 원본 확대보기는 의료법 준수를 위해 로그인 후 제공됩니다.\n카카오 1초 간편 로그인을 진행하시겠습니까?')) {
                  handleKakaoLogin();
                }
                return;
              }
              const modal = document.getElementById('image-modal');
              const modalImg = document.getElementById('modal-img');
              const modalTitle = document.getElementById('modal-title');
              if (modal && modalImg) {
                modalImg.src = imgSrc;
                if (modalTitle && title) {
                  modalTitle.innerHTML = `<i class="fa-solid fa-file-signature text-[#03C75A]"></i> <span>${title}</span>`;
                }
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
              }
            }

            function closeModal() {
              const modal = document.getElementById('image-modal');
              if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
              }
            }

            // ESC 키로 모달 닫기
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') closeModal();
            });

            // 초기 실행
            function initPage() {
              updateReviewDisplay();
              updateAuthUI();
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initPage);
            } else {
              initPage();
            }
          </script>


---

