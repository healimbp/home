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
                <button onclick="filterReviews('all')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#2F5D50] text-white" data-cat="all">전체 (18편)</button>
                <button onclick="filterReviews('panic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="panic">공황·불안장애 (3)</button>
                <button onclick="filterReviews('insomnia')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="insomnia">불면증·수면장애 (3)</button>
                <button onclick="filterReviews('autonomic')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="autonomic">자율신경·어지럼 (3)</button>
                <button onclick="filterReviews('depression')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="depression">화병·우울·신체화 (3)</button>
                <button onclick="filterReviews('child')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="child">소아 틱·ADHD·야경증 (3)</button>
                <button onclick="filterReviews('adhd')" class="filter-btn px-3 py-1.5 rounded-lg text-xs font-extrabold transition bg-[#F4F7F5] text-[#556B62] hover:bg-[#EAEFEA]" data-cat="adhd">성인ADHD·브레인포그 (3)</button>
              </div>
            </div>

            <!-- 리뷰 그리드 (2열 반응형 카드) -->
            <div id="reviews-grid" class="grid grid-cols-1 md:grid-cols-2 gap-5">

              <!-- [실제 네이버 영수증/예약 인증 리뷰 1] 민흠 님 -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border-2 border-[#CDE5D8] shadow-sm hover:shadow-md transition space-y-4" data-category="all panic autonomic">
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


              <!-- 2. 공황장애 2 (터널/운전 공포증) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#운전공포증 #터널폐쇄공포</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"고속도로 터널에만 들어가면 심장이 터질 것 같았는데, 장거리 운전도 거뜬해졌습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 한*경 님 (40대 주부 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    차를 몰고 터널에 들어가거나 차가 막혀 갇히는 느낌이 들면 손발이 굳고 심장이 쿵쾅거려 운전을 전면 중단했었습니다. 원장님께서 폐소공포와 뇌 편도체의 과각성 신호를 완화하는 한약 치료를 설계해 주셨습니다.<br><br>
                    치료 1달 만에 동네 주행이 편안해졌고, 2달 치료 후에는 남편 없이도 고속도로 터널을 안정적으로 통과했습니다. 삶의 활동 반경이 다시 넓어져 눈물나게 기쁩니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 안신진경 탕약 + 약침 치료</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 3. 공황장애 3 (발표불안 & 예기불안) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#발표불안 #면접예기불안</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"면접장에만 가면 목소리가 떨리고 머리가 하얘졌는데, 자신감 있게 공기업 최종 합격했습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 이*훈 님 (20대 취준생 / 치료기간 2.5개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    중요한 발표나 면접 때마다 심장 박동이 귀에서 들릴 정도로 뛰고 호흡이 가빠져 여러 번 면접에서 탈락했습니다. 인데놀 같은 약은 일시적이었지만 해아림에서 심장 담력을 키워주는 심비보강 한약과 자율신경 훈련을 받으며 체질 자체가 탄탄해졌습니다.<br><br>
                    긴장되는 순간에도 침착하게 호흡을 고를 수 있게 되었고, 이번 하반기 원하던 공기업 최종 면접을 당당히 통과했습니다!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 심담강화 탕약 + 이완 훈련</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 4. 만성 불면증 1 (수면유도제 단약) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#만성불면증 #수면제단약성공</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"새벽 2시마다 깨서 지옥 같았는데, 5년 만에 수면유도제 끊고 통잠 잡니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 박*수 님 (40대 자영업 / 치료기간 2.5개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    사업 스트레스로 5년 동안 수면유도제를 매일 밤 복용했습니다. 최근엔 약을 먹어도 새벽 2~3시만 되면 눈이 번쩍 떠져서 아침까지 뜬눈으로 뒤척였습니다. 뇌가 타들어 가는 느낌이었어요.<br><br>
                    해아림에서 심장과 간의 허열을 내리는 탕약 처방과 안면혈 침 치료를 받았습니다. 한약 복용 2주 차부터 자다 깨는 횟수가 주 5회에서 1회로 줄었고, 점진적으로 양약을 줄여나간 끝에 지금은 한약 치료만으로 밤 11시에 누우면 아침 7시까지 깨지 않고 깊은 잠을 잡니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 청심안신 탕약 + 안면혈 침구</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 5. 만성 불면증 2 (입면장애) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#입면장애 #잡념과각성</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"눕기만 하면 머릿속 생각이 꼬리를 물어 2시간 뒤척였는데, 15분 만에 잠듭니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 조*희 님 (50대 교사 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    몸은 녹초인데 자려고 침대에만 누우면 뇌 스위치가 켜진 것처럼 온갖 걱정과 잡념이 쏟아져 기본 2시간을 뒤척였습니다. 수면클리닉 수면제는 다음 날 낮까지 멍해서 복용을 중단했었어요.<br><br>
                    해아림에서 머리로 치솟은 열을 내려주는 수면 한약과 백회혈 침 치료를 꾸준히 받았습니다. 복용 3주 차부터 눕고 나서 15분 이내로 자연스럽게 스르륵 잠이 듭니다. 아침 출근길이 너무 가뿐합니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 청심안신 탕약 + 두개천골 추나</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 6. 만성 불면증 3 (다몽증 & 가위눌림) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#다몽증 #가위눌림수면장애</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"매일 밤 악몽과 가위눌림으로 식은땀 흘리며 깼는데, 꿈자리 없이 꿀잠 잡니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 송*민 님 (30대 디자이너 / 치료기간 6주)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    밤마다 쫓기는 꿈이나 가위눌림에 시달려 자고 일어나도 두들겨 맞은 것처럼 온몸이 쑤셨습니다. 심포와 담경의 열을 가라앉히는 맞춤 한약을 복용한 뒤 일주일 만에 가위눌림이 뚝 끊겼습니다.<br><br>
                    꿈을 거의 꾸지 않는 깊은 델타파 수면을 취하게 되니 만성 피로와 다크서클도 눈에 띄게 좋아졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 온담안신 탕약 + 약침 요법</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 7. 자율신경실조증 1 (어지럼증 & 미주신경 실신) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#어지럼증 #미주신경성실신</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"지하철이나 서 있을 때마다 눈앞이 캄캄해지던 실신 공포에서 완전히 벗어났어요."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 최*아 님 (20대 대학생 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    조금만 오래 서 있거나 밀폐된 공간에 가면 속이 울렁거리고 눈앞이 핑 돌면서 쓰러질 것 같았습니다. 대학병원 뇌 MRI 검사까지 다 해봤지만 '신경성'이라는 말만 들어서 너무 막막했습니다.<br><br>
                    권형근 원장님께서 자율신경계 미주신경 불균형과 경추 정렬 문제를 정확히 짚어주셨고, 맞춤 한약과 함께 두개천골 추나요법으로 목과 척추 긴장을 풀어주셨습니다. 치료 4주 차부터 어지럼증과 울렁거림이 사라졌고, 지금은 대중교통도 안심하고 다닙니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 자율신경 탕약 + 두개천골 추나</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 8. 자율신경실조증 2 (경추성 어지럼 & 이명) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#경추불어지럼 #이명자율신경</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"고개만 돌려도 핑 돌던 어지럼증과 삐- 소리 이명이 싹 가라앉았습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 오*철 님 (40대 직장인 / 치료기간 8주)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    모니터를 오래 보는 직업이라 일자목이 심했는데, 어느 날부터 귀에서 삐 소리가 나고 걸을 때 스펀지를 밟는 듯 휘청거렸습니다. 이석증 치료를 받아도 재발했었어요.<br><br>
                    해아림에서 경추부 미세 혈류 순환 장애와 자율신경 긴장을 추나 교정과 한약으로 다스려주셨습니다. 2주 차에 이명 소리가 절반으로 줄더니 8주 차에 어지럼증이 완전히 사라졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 경추교정 추나 + 청이활혈 탕약</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 9. 자율신경실조증 3 (다한증 & 안면홍조) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#긴장성다한증 #안면상열홍조</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"조금만 긴장해도 얼굴과 손에 비 오듯 쏟아지던 식은땀이 거짓말처럼 멎었습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 배*주 님 (30대 직장인 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    사람들과 미팅하거나 조금만 집중해도 얼굴이 붉어지며 땀이 줄줄 흘러 사회생활에 큰 콤플렉스였습니다. 체열 검사에서 상체는 뜨겁고 하체는 차가운 상열하한 불균형이 심각하다는 진단을 받았습니다.<br><br>
                    교감신경 항진을 진정시키고 수승화강을 돕는 탕약을 2달간 복용한 결과, 대화 중 땀 흘림이 80% 이상 줄고 얼굴 붉어짐도 완전히 안정되었습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 수승화강 탕약 + 약침 치료</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 10. 화병 / 우울증 1 (매핵기 & 가슴답답) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="depression">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#화병치료 #매핵기목이물감</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"목에 뭔가 걸린 듯 답답하고 가슴이 터질 것 같던 화병이 시원하게 뚫렸습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 윤*숙 님 (50대 주부 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    가족 문제로 큰 스트레스를 받은 후 목에 사탕이 걸린 것처럼 뱉어지지도 삼켜지지도 않는 이물감(매핵기)과 가슴이 뻐근하게 조여오는 통증으로 물 한 모금 넘기기 힘들었습니다. 내시경 검사는 깨끗하다고만 하더군요.<br><br>
                    해아림에서 원장님께서 제 이야기를 묵묵히 들어주시는 것만으로도 큰 위로가 되었습니다. 울체된 가슴 기운을 풀어주는 탕약과 약침을 꾸준히 맞은 결과, 3주 차부터 목에 걸렸던 덩어리가 싹 녹아내리듯 사라졌고 가슴이 시원해졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 화병 해울 탕약 + 가슴 혈위 약침</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 11. 화병 / 우울증 2 (만성 무기력 & 번아웃 우울) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="depression">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#만성우울 #무기력증회복</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"아무 의욕도 없고 침대에서 일어나는 것조차 버거웠는데, 일상의 활력을 되찾았습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 류*원 님 (40대 직장인 / 치료기간 3개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    오랜 직장 내 갈등으로 완전히 번아웃이 오면서 주말 내내 누워만 있고 사람 만나는 것조차 두려웠습니다. 항우울제 부작용인 체중 증가와 무기력감 때문에 고민하다 해아림을 찾았습니다.<br><br>
                    고갈된 기혈을 채우고 심장과 비장의 소화기를 보강하는 한약 치료를 받으며 1달 차부터 아침 기상이 가벼워졌고, 3달 만에 운동과 취미 활동을 다시 시작할 정도로 에너지가 회복되었습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 심비보강 탕약 + 원기회복 약침</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 12. 화병 / 우울증 3 (신경성 위염 & 담적 소화불량) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="depression">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#신경성위염 #담적증소화불량</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"스트레스만 받으면 꽉 막히던 명치와 헛구역질이 싹 사라지고 밥맛이 돕니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 서*경 님 (30대 프리랜서 / 치료기간 6주)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    신경만 쓰면 명치가 돌처럼 딱딱하게 굳고 트림과 복부 팽만감으로 밥을 반 공기도 못 먹었습니다. 위내시경에는 가벼운 위염 외에 이상이 없다는데 환자는 죽을 맛이었죠.<br><br>
                    해아림 복진 검사를 통해 담적과 위장 자율신경 실조를 진단받고, 굳은 위장 평활근을 풀어주는 한약과 온열 뜸 치료를 병행했습니다. 3주 만에 명치 뭉침이 부드러워지며 편안하게 식사하게 되었습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소적건비 탕약 + 복부 온열 침구</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 13. 소아 틱장애 / ADHD 1 (눈깜빡임 & 헛기침 틱) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아틱장애 #눈깜빡임음성틱</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"초등 입학 후 눈 깜빡임과 '음음' 헛기침 틱으로 가슴 찢어졌는데 거의 다 나았습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 이*정 님 (초등 1학년 학부모 / 치료기간 3개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    아이가 초등학교에 입학하면서 낯선 환경 탓인지 눈을 심하게 깜빡이고 1분에도 수차례 '음! 음!' 헛기침 소리를 내기 시작했습니다. 정신과 독한 약은 부작용 때문에 먹이기 두려워 수소문 끝에 해아림 권형근 원장님을 찾아갔습니다.<br><br>
                    원장님께서 아이를 다정하게 안심시켜 주시며 진료해 주셨고, 아이가 쓴맛 없이 잘 마실 수 있는 순한 체질 맞춤 탕약을 처방해 주셨습니다. 1달 차부터 소리 내는 빈도가 확연히 줄더니 3달이 지난 지금은 틱 증상이 거의 완전히 사라졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 순한 탕약 + 무통 두개천골 교정</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 14. 소아 틱장애 / ADHD 2 (초등 산만함 & 충동성) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아ADHD #집중력향상</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"수업시간에 자리 이탈하고 충동적이던 아이가 차분하게 앉아 수업을 잘 듣습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 강*영 님 (초등 3학년 학부모 / 치료기간 4개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    선생님께 매주 전화가 올 정도로 수업시간에 친구들을 방해하고 충동적인 행동이 심해 아이도 저도 눈물로 밤을 지샜습니다. ADHD 진단을 받고 약물 복용 시 식욕 감퇴와 불면 부작용이 와서 한방 치료로 전환했습니다.<br><br>
                    해아림에서 뇌 전두엽과 기저핵의 자제력을 키워주는 탕약과 뇌 기능 훈련을 4개월간 병행했습니다. 담임선생님께서 요즘 아이가 너무 의젓해지고 발표도 잘한다는 칭찬 전화를 주셨을 때 감격했습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 두뇌기능 개선 탕약 + 뇌파 훈련</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 15. 소아 틱장애 / 야경증 3 (밤비명 & 야뇨증) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="child">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#소아야경증 #야뇨증치료</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"밤마다 자지러지게 울며 깨던 7세 아이 야경증이 3주 만에 멈췄습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 문*지 님 (7세 남아 학부모 / 치료기간 1개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    새벽 1시만 되면 눈도 안 뜬 채 비명을 지르고 악을 쓰며 울어 온 가족이 1년 넘게 잠을 못 잤습니다. 심신이 허약하고 간열(肝熱)이 많은 체질이라는 설명을 듣고 소아 맞춤 안신 탕약을 복용시켰습니다.<br><br>
                    신기하게도 복용 10일 차부터 깨는 빈도가 주 1회로 줄더니, 3주 차부터는 아침까지 한 번도 안 깨고 푹 잡니다. 온 가족의 삶의 질이 달라졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 소아 안신 탕약 + 무통 자석 침구</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 16. 성인 ADHD & 브레인포그 1 (IT개발자 집중력) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#성인ADHD #브레인포그만성피로</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"머릿속에 안개가 낀 것처럼 멍하고 집중이 안 되던 뇌 피로가 말끔해졌습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 정*우 님 (30대 IT개발자 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    회사 프로젝트 과부하 이후 기억력이 급격히 떨어지고, 업무에 10분 이상 집중하기 어려우며 머리가 항상 무거운 브레인포그 증상이 심각했습니다. 커피를 4~5잔 마셔도 피로가 풀리지 않았습니다.<br><br>
                    해아림에서 두뇌 피로도 및 적외선 체열 검사를 통해 뇌 혈류 순환 장애와 상열하한 상태를 진단받고, 뇌 신경총을 활성화하는 맞춤 한약과 약침 치료를 받았습니다. 복용 3주 차부터 머리가 맑아지며 오후 집중력이 눈에 띄게 좋아졌고 야간 숙면의 질도 높아졌습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 뇌 혈류 개선 탕약 + 총명 침구</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 17. 성인 ADHD & 브레인포그 2 (전문직 번아웃) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#만성피로증후군 #직장인번아웃</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"아침에 일어날 때마다 몸이 납덩이 같던 만성 피로가 사라지고 에너지가 넘칩니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 신*민 님 (40대 회계사 / 치료기간 2개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    야근 시즌 후 주말 내내 잠만 자도 피로가 풀리지 않고 온몸 관절과 근육이 쑤셨습니다. 수액을 맞아도 반나절 효과뿐이었어요.<br><br>
                    자율신경 방전 상태를 정상화하는 부신 보강 탕약과 면역 약침 치료를 8주간 진행했습니다. 아침 기상 시 찌뿌둥함이 사라지고 주말에도 가족들과 나들이를 다녀올 만큼 활력이 완벽하게 충전되었습니다.
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 부신원기보강 탕약 + 면역 약침</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
                </div>
              </div>

              <!-- 18. 성인 ADHD & 브레인포그 3 (성인 실행장애) -->
              <div class="review-item heal-card bg-white flex flex-col justify-between p-6 rounded-2xl border border-[#E2EAE5] shadow-sm hover:shadow-md transition space-y-4" data-category="adhd">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag text-xs font-bold text-[#2F5D50] bg-[#EAF2ED] px-2.5 py-1 rounded-md">#성인실행장애 #건망증집중력</span>
                    <div class="flex items-center text-[#FFB800] text-xs gap-0.5">★★★★★ <span class="text-[#888888] ml-1 font-medium text-[11px]">5.0</span></div>
                  </div>
                  <div>
                    <h3 class="text-base sm:text-lg font-extrabold text-[#1E4638] leading-snug">"일을 시작하지 못하고 미루기만 하던 실행장애가 개선되어 프로젝트를 기한 내 마쳤습니다."</h3>
                    <p class="text-xs text-[#8B9891] mt-1">작성자: 황*진 님 (20대 대학원생 / 치료기간 3개월)</p>
                  </div>
                  <div class="p-3.5 bg-[#F9FAF8] rounded-xl border border-[#EDF2EE] text-xs sm:text-sm text-[#4E5E56] leading-relaxed">
                    논문을 써야 하는데 컴퓨터 앞에만 앉으면 딴짓을 하거나 시작을 못해 매번 마감에 쫓기고 자괴감에 빠졌습니다. 성인 ADHD 진단 후 한방 치료를 선택했습니다.<br><br>
                    도파민과 노르에피네프린 대사를 자연스럽게 활성화하는 한약과 뇌척수액 순환을 돕는 추나요법을 받았습니다. 뇌의 과부하가 걷히면서 우선순위를 정하고 차근차근 집중하여 마침내 논문 심사를 통과했습니다!
                  </div>
                </div>
                <div class="pt-3 border-t border-[#EAEFEA] flex items-center justify-between text-xs text-[#68736E]">
                  <span>치료: 총명정신 탕약 + 두개천골 추나</span>
                  <span class="text-[#03C75A] font-bold"><i class="fa-solid fa-circle-check mr-1"></i>네이버 예약 인증</span>
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

