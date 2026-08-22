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
                <button onclick="filterReviews('all')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white" data-cat="all">전체 (26편)</button>
                <button onclick="filterReviews('autonomic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="autonomic">자율신경·갱년기·교감항진 (11)</button>
                <button onclick="filterReviews('panic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="panic">공황·호흡곤란·불안·운전공포 (10)</button>
                <button onclick="filterReviews('child')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="child">소아 틱·ADHD·집중력 (5)</button>
                <button onclick="filterReviews('insomnia')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="insomnia">불면증·스트레스·수면 (5)</button>
                <button onclick="filterReviews('adhd')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="adhd">성인ADHD·기억력 (2)</button>
                <button onclick="filterReviews('facial')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="facial">안면마비·경추·턱관절 (2)</button>
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

