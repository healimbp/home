---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "인천 부평구, 남동구, 부천, 시흥, 서구 청라·검단, 계양구, 영종도, 김포 지역 공황장애, 불면증, 자율신경실조증, 소아 틱장애 한의원 치료 의학 칼럼"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Regional Medical Column & Insights</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              부평 · 남동구 · 부천 · 시흥 · 청라 질환별 건강 의학 칼럼
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              부평구를 중심으로 구월동, 상동, 배곧, 청라, 계양, 영종도, 김포 지역 환자분들을 위한 권형근 원장의 심층 한의학 진료 가이드입니다.
            </p>
          </div>

          <!-- 2. 질환별 카테고리 필터 탭 (Interactive Tabs) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>질환별 전문 칼럼 모아보기</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하면 홈페이지에서 바로 칼럼 전문을 읽으실 수 있습니다.</div>
            </div>

            <!-- 탭 버튼 목록 -->
            <div class="flex flex-wrap gap-2 pb-2" id="column-category-tabs">
              <button onclick="filterColumn('all', this)" class="column-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80">(12)</span>
              </button>
              <button onclick="filterColumn('panic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안장애 <span class="text-[11px] opacity-80">(3)</span>
              </button>
              <button onclick="filterColumn('insomnia', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 · 수면장애 <span class="text-[11px] opacity-80">(2)</span>
              </button>
              <button onclick="filterColumn('autonomic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 · 실신/어지럼증 <span class="text-[11px] opacity-80">(3)</span>
              </button>
              <button onclick="filterColumn('tic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아 틱장애 · ADHD <span class="text-[11px] opacity-80">(2)</span>
              </button>
              <button onclick="filterColumn('stress', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병/스트레스 <span class="text-[11px] opacity-80">(2)</span>
              </button>
            </div>

            <!-- 칼럼 카드 그리드 (상세 지역명 타겟 SEO) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [공황·불안 1: 부평·삼산동] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-1')">
                    [부평구 산곡동·삼산동 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 1:1 맞춤 치료법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    부평동, 산곡동, 삼산동, 부개동 지역에서 공황장애 병원 및 한의원 치료를 찾는 분들을 위한 공황발작 신경학적 기전과 4-7-8 호흡, 편도체 안정 한약 치료 솔루션입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평 공황장애 • 삼산동 한의원 • 공황발작 치료</span>
                  <button type="button" onclick="openColumnModal('col-panic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-1" style="display:none;" 
                     data-title="[부평구 산곡동·삼산동 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 1:1 맞춤 치료법" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.04.15" 
                     data-summary="부평구(부평동, 산곡동, 삼산동, 부개동) 공황장애 한의원에서 전하는 공황발작 시 교감신경 과흥분 완화 4-7-8 복식호흡과 뇌 변연계 안정 한방 치료 프로토콜입니다." 
                     data-tags="부평공황장애한의원, 삼산동공황장애, 산곡동한의원, 공황발작치료, 부평역한의원">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 부평구(부평동, 산곡동, 삼산동, 부개동, 십정동) 및 인근 지역 환자분들의 자율신경·신경정신과 질환을 진료하는 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;부평역 지하철 안에서 갑자기 숨이 턱 막히고 심장이 미친 듯이 뛰어 당장이라도 쓰러질 것 같았습니다.&rdquo;<br>
                    &ldquo;인천 부평 인근 응급실 병원에서 검사했을 때는 이상이 없다는데 공황장애 한의원 치료로 극복할 수 있을까요?&rdquo;
                  </blockquote>

                  <p>부평역 인근 진료실에는 부평구뿐만 아니라 남동구(구월동, 간석동, 논현동), 부천(상동, 중동), 시흥, 청라 등지에서 공황발작과 불안장애로 고통받는 환자분들이 많이 내원하십니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 공황발작의 신경학적 원인과 교감신경 과흥분</h3>
                  <p>공황장애는 심장이나 폐의 기질적 이상이 아니라, 뇌의 정서와 공포 반응을 담당하는 **변연계(편도체)**가 오작동하여 발생합니다. 자율신경계(교감신경)가 폭발적으로 흥분하며 심장 박동 급상승, 혈관 수축, 과호흡, 어지럼증, 손발 저림이 동반됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 발작 순간 미주신경을 자극하는 응급 4-7-8 호흡법</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>4초간</strong> 코로 천천히 숨을 들이마십니다.</li>
                    <li><strong>7초간</strong> 숨을 멈추고 뇌에 안정 신호를 전달합니다.</li>
                    <li><strong>8초간</strong> 입으로 가늘고 길게 숨을 내쉬며 심장 박동을 안정시킵니다.</li>
                  </ul>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림한의원 인천부평점의 1:1 맞춤 한방 치료</h3>
                  <p>심비양허·간기울결 맞춤 탕전으로 뇌 신경전달물질의 균형을 맞추고, 전중혈·신문혈 침구 치료와 두개천골 추나요법을 통해 뇌 신경계의 자생력을 키워드립니다.</p>
                </div>
              </article>

              <!-- [공황·불안 2: 남동구 구월동·간석동] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-2')">
                    [남동구 구월동·간석동 불안장애 한의원] &ldquo;또 발작 올까 두려운&rdquo; 예기불안과 공황장애 뇌 변연계 안정 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    구월동, 간석동, 논현동, 만수동 지역 주민들을 위한 24시간 예기불안의 악순환 차단과 뇌 변연계 신경안정 한방 치료 솔루션입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 남동구 불안장애 • 구월동 한의원 • 간석동 공황장애</span>
                  <button type="button" onclick="openColumnModal('col-panic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-2" style="display:none;" 
                     data-title="[남동구 구월동·간석동 불안장애 한의원] &ldquo;또 발작 올까 두려운&rdquo; 예기불안과 공황장애 뇌 변연계 안정 치료" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.28" 
                     data-summary="인천 남동구(구월동, 간석동, 논현동, 만수동) 불안장애 한의원에서 전하는 예기불안 극복과 뇌 변연계 신경안정 맞춤 치료입니다." 
                     data-tags="남동구불안장애한의원, 구월동공황장애, 간석동한의원, 만수동불안장애, 한방신경정신과">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 남동구(구월동, 간석동, 논현동, 만수동, 서창동) 환자분들의 불안신경증을 치료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  
                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;구월동 로데오거리나 마트에 갈 때 '혹시 또 숨이 막히면 어쩌지?' 하는 생각에 하루 종일 가슴이 조마조마합니다.&rdquo;<br>
                    &ldquo;남동구 인근 병원에서 신경안정제를 먹고 있는데 한의원 맞춤 한약으로 예기불안을 치료할 수 있나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 예기불안의 악순환 메커니즘</h3>
                  <p>공황 발작의 공포 기억이 뇌의 **해마**와 **편도체**에 각인되면 사소한 신체 변화조차 공황 전조로 오인하여 24시간 긴장 상태가 지속됩니다. 안심정지 맞춤 탕전과 생기능 조절 훈련으로 뇌 본연의 평온을 되찾아드립니다.</p>
                </div>
              </article>

              <!-- [자율신경 1: 시흥 배곧·은계·정왕동] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-1')">
                    [시흥 배곧·은계·정왕동 자율신경실조증 한의원] 만성피로와 자율신경 기능 저하, HRV 검사와 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    시흥시 배곧신도시, 은계지구, 은행동, 정왕동 주민들을 위한 검사상 이상 없는 만성 피로와 자율신경실조증 3단계 소진 모델 및 맞춤 한방 치료법입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥 자율신경실조증 • 배곧 한의원 • 은계지구 만성피로</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-1" style="display:none;" 
                     data-title="[시흥 배곧·은계·정왕동 자율신경실조증 한의원] 만성피로와 자율신경 기능 저하, HRV 검사와 한방 치료" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.18" 
                     data-summary="시흥시(배곧, 은계, 은행동, 정왕동) 자율신경실조증 한의원에서 전하는 만성피로와 자율신경계 기능 저하 원인, HRV 검사 및 맞춤 한방 치료법입니다." 
                     data-tags="시흥자율신경실조증한의원, 배곧한의원, 은계지구병원, 정왕동만성피로, HRV검사">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 시흥시(배곧신도시, 은계지구, 은행동, 정왕동, 대야동) 환자분들의 자율신경실조증을 진료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;시흥 인근 내과 병원 종합검진에서는 간수치도 정상이고 이상이 없다는데, 매일 아침 몸이 천근만근 무겁고 머리가 멍합니다.&rdquo;<br>
                    &ldquo;자율신경실조증 한의원에서 심박변이도(HRV) 검사로 신경계 피로도를 정확히 측정받고 싶습니다.&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 기능 저하와 소진(Burnout) 3단계</h3>
                  <p>자율신경 조절 능력이 무너지면 긴장 상태를 버티다 소진기에 접어들며 만성 피로, 브레인포그, 무기력증, 소화불량이 고착화됩니다. 심박변이도(HRV) 검사와 체질 맞춤 탕약으로 뇌 신경계 자생력을 길러줍니다.</p>
                </div>
              </article>

              <!-- [자율신경 2: 서구 청라·가정동·검단] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-2')">
                    [인천 서구 청라·가정동·검단 미주신경성 실신 한의원] 출퇴근길 어지럼증과 식은땀, 혈관 탄력 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    청라국제도시, 루원시티 가정동, 가좌동, 검단구 주민들을 위한 지하철 어지럼증과 미주신경성 실신 전조증상 대처 및 혈관 탄력 강화 한방 솔루션입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 청라 어지럼증 • 검단 실신 한의원 • 가정동 자율신경</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-2" style="display:none;" 
                     data-title="[인천 서구 청라·가정동·검단 미주신경성 실신 한의원] 출퇴근길 어지럼증과 식은땀, 혈관 탄력 한방 치료" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.05" 
                     data-summary="인천 서구(청라, 가정동, 가좌동, 검단) 미주신경성 실신 한의원에서 전하는 어지럼증 전조 대처법과 혈관 탄력 강화 한약 치료입니다." 
                     data-tags="청라어지럼증한의원, 검단실신병원, 가정동한의원, 미주신경성실신, 기립성저혈압">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 인천 서구(청라국제도시, 가정동 루원시티, 가좌동, 검단구) 환자분들을 진료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;공항철도나 7호선 지하철 안에서 갑자기 눈앞이 캄캄해지고 식은땀이 흐르며 주저앉았습니다.&rdquo;<br>
                    &ldquo;인천 서구 병원에서는 미주신경성 실신이라는데 한의원 치료로 재발을 막을 수 있나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 미주신경성 실신의 발생 기전과 한방 치료</h3>
                  <p>부교감신경의 과도한 작동으로 하체 혈관이 확장되어 뇌 혈류가 급감하는 질환입니다. 심장과 비장의 기운을 돋우는 맞춤 탕전으로 혈관 탄력을 높여 실신을 근본 예방합니다.</p>
                </div>
              </article>

              <!-- [소아 틱장애 1: 계양구 계산동·작전동] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-tic-1')">
                    [계양구 계산동·작전동 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    계산동, 작전동, 효성동 지역 부모님들을 위한 소아 틱장애 뇌 기저핵 발달 원인과 순한 천연 한약, 부모 양육 코칭 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 계양구 틱장애 • 계산동 소아한의원 • 작전동 틱치료</span>
                  <button type="button" onclick="openColumnModal('col-tic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-tic-1" style="display:none;" 
                     data-title="[계양구 계산동·작전동 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육법" 
                     data-category="소아 틱장애 · ADHD" 
                     data-date="2025.11.25" 
                     data-summary="인천 계양구(계산동, 작전동, 효성동) 소아 틱장애 한의원에서 전하는 틱 증상 발생 시 부모 양육 태도와 기저핵 성장 맞춤 한방 치료법입니다." 
                     data-tags="계양구틱장애한의원, 계산동소아한의원, 작전동틱장애, 소아음성틱, 부모양육법">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 계양구(계산동, 작전동, 효성동) 어린이들의 두뇌 질환을 진료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;아이가 눈을 세게 깜빡이고 '음음' 소리를 내서 참으라고 혼냈더니 틱이 더 심해졌습니다.&rdquo;<br>
                    &ldquo;계양구 인근 소아 틱장애 한의원에서는 어떤 검사와 한약으로 치료하나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 틱장애의 신경학적 원인: 뇌 기저핵의 미성숙</h3>
                  <p>틱은 나쁜 버릇이 아니라 뇌의 운동 억제 필터인 **기저핵(Basal Ganglia)**이 아직 덜 성숙하여 일어나는 불수의적 반응입니다. 순한 천연 맞춤 한약과 무통 침 치료, 시청지각 훈련으로 기저핵의 건강한 성장을 돕습니다.</p>
                </div>
              </article>

              <!-- [불면증 1: 부천 상동·중동·신중동] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-insomnia-1')">
                    [부천 상동·중동·신중동 불면증 한의원/병원] 새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    부천시 상동, 중동, 신중동, 소사동 주민들을 위한 수면제 없이 뇌의 열을 내리고 깊은 잠을 유도하는 청열안신 한약 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천 불면증 • 상동 한의원 • 신중동 수면장애</span>
                  <button type="button" onclick="openColumnModal('col-insomnia-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-insomnia-1" style="display:none;" 
                     data-title="[부천 상동·중동·신중동 불면증 한의원/병원] 새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리" 
                     data-category="불면증 · 수면장애" 
                     data-date="2026.02.20" 
                     data-summary="부천시(상동, 중동, 신중동, 원미동) 불면증 한의원에서 전하는 새벽 중도각성과 다몽증 원인, 뇌 과각성을 해소하는 맞춤 한약 숙면 치료법입니다." 
                     data-tags="부천불면증한의원, 상동수면장애, 중동불면증병원, 신중동한의원, 숙면한약">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 부천시(상동, 중동, 신중동, 소사동, 원미동) 환자분들의 수면장애를 진료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;부천 상동 인근 병원에서 수면제를 처방받아 먹고 있는데, 약 없이 스스로 깊이 자고 싶습니다.&rdquo;<br>
                    &ldquo;새벽 2~3시만 되면 눈이 번쩍 떠져 다시 잠을 못 잡니다.&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 수면제 없이 뇌를 재우는 한방 치료법</h3>
                  <p>심장과 간의 허열(虛熱)을 식혀주는 **청열안신 맞춤 한약**과 두부 경혈 침구 치료로 뇌파를 안정시키고 깊은 델타파 수면을 회복시킵니다.</p>
                </div>
              </article>

              <!-- [우울·스트레스 1: 김포시·영종도·동구/중구] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-stress-1')">
                    [영종도·김포·인천중구 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    영종도, 김포, 인천 중구·동구, 강화·옹진군 환자분들을 위한 가슴 답답함과 매핵기(목 이물감), 분심기음 한약 처방을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 영종도 화병 • 김포 우울증 • 매핵기 한약</span>
                  <button type="button" onclick="openColumnModal('col-stress-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-stress-1" style="display:none;" 
                     data-title="[영종도·김포·인천중구 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학 치료" 
                     data-category="우울증 · 화병/스트레스" 
                     data-date="2025.10.12" 
                     data-summary="영종도, 김포, 인천 중구·동구 화병 우울증 한의원에서 전하는 가슴 답답함, 매핵기(목 이물감) 치료 분심기음 한약과 신경안정 솔루션입니다." 
                     data-tags="영종도화병한의원, 김포우울증병원, 인천중구한의원, 매핵기치료, 분심기음">
                  <p>안녕하세요. <strong>부평역 7번 출구에서 영종도, 김포시, 인천 중구·동구, 강화·옹진군 환자분들의 화병과 신경정신과 질환을 진료하는 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;가슴 한가운데 바위가 얹힌 것처럼 답답하고 목에 무언가 걸려 넘어가지 않습니다.&rdquo;<br>
                    &ldquo;화병 한의원 치료로 가슴의 울화와 매핵기를 풀 수 있을까요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 화병과 매핵기의 한의학적 치료</h3>
                  <p>뭉친 기운을 소통시키는 **분심기음 가감방**과 전중혈 약침 치료를 통해 가슴의 화기를 시원하게 흩어버리고 깊은 호흡을 되찾아드립니다.</p>
                </div>
              </article>

            </div>
          </div>

          <!-- 3. 인페이지 칼럼 전문 리더 모달 (Interactive In-Site Reader Modal) -->
          <div id="column-modal-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4" style="display:none;" onclick="if(event.target===this) closeColumnModal();">
            <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDE6E1] relative flex flex-col p-6 sm:p-8 space-y-6">
              
              <!-- 모달 상단 닫기 버튼 -->
              <div class="flex items-center justify-between border-b border-[#DDE6E1] pb-4">
                <div class="flex items-center gap-2">
                  <span id="modal-category" class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs"></span>
                  <span id="modal-date" class="text-xs text-[#68736E]"></span>
                </div>
                <button type="button" onclick="closeColumnModal()" class="w-8 h-8 rounded-full bg-gray-100 text-[#26332E] hover:bg-gray-200 flex items-center justify-center font-bold text-base transition" title="닫기">
                  ✕
                </button>
              </div>

              <!-- 칼럼 타이틀 & 작성자 프로필 -->
              <div class="space-y-4">
                <h2 id="modal-title" class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#26332E] leading-snug"></h2>
                
                <div class="flex items-center gap-3 p-3.5 bg-[#F2F7F4] rounded-2xl border border-[#DDE6E1]">
                  <div class="w-12 h-12 rounded-full overflow-hidden border border-[#DDE6E1] flex-shrink-0">
                    <img src="/images/director.jpg" alt="권형근 대표원장" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="font-extrabold text-sm text-[#26332E]">권형근 대표원장 (한방침구과 전문의)</div>
                    <div class="text-xs text-[#2F5D50] font-semibold">해아림한의원 인천부평점 • 1:1 맞춤 진료</div>
                  </div>
                </div>
              </div>

              <!-- 핵심 요약 콜아웃 -->
              <div class="bg-[#FAF8F3] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl text-xs sm:text-sm text-[#3D4D47] leading-relaxed">
                <strong class="text-[#2F5D50] block mb-1">💡 칼럼 핵심 요약</strong>
                <div id="modal-summary"></div>
              </div>

              <!-- 칼럼 본문 -->
              <div id="modal-content" class="prose prose-sm sm:prose-base max-w-none text-[#26332E] leading-relaxed space-y-4 pt-2">
              </div>

              <!-- 하단 태그 -->
              <div id="modal-tags" class="pt-4 border-t border-[#DDE6E1] flex items-center gap-2 flex-wrap text-xs text-[#68736E]">
              </div>

              <!-- 하단 진료 예약/상담 퀵 CTA -->
              <div class="bg-[#F2F7F4] p-5 rounded-2xl border border-[#DDE6E1] flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div class="text-center sm:text-left">
                  <div class="font-extrabold text-sm text-[#26332E]">해아림한의원 인천부평점 진료 예약</div>
                  <div class="text-xs text-[#68736E]">부평역 7번 출구 도보 5분 • 사전 예약제 1:1 진료</div>
                </div>
                <div class="flex items-center gap-2 flex-wrap justify-center">
                  <a href="tel:032-719-3472" class="heal-btn heal-btn-primary text-xs py-2 px-3">
                    <i class="fa-solid fa-phone"></i>
                    <span>032-719-3472</span>
                  </a>
                  <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao text-xs py-2 px-3">
                    <i class="fa-solid fa-comment"></i>
                    <span>카톡 상담</span>
                  </a>
                  <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="heal-btn heal-btn-naver text-xs py-2 px-3">
                    <i class="fa-solid fa-calendar-check"></i>
                    <span>네이버 예약</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- JavaScript 카테고리 필터링 & 인페이지 리더 모달 스크립트 -->
          <style>
            .column-tab-btn {
              background-color: #F2F7F4;
              color: #4E6159;
              border: 1px solid #DDE6E1;
              cursor: pointer;
            }
            .column-tab-btn:hover {
              background-color: #E2EAE6;
              color: #26332E;
            }
            .column-tab-btn.active-tab {
              background-color: #2F5D50 !important;
              color: #ffffff !important;
              border-color: #2F5D50 !important;
              box-shadow: 0 2px 6px rgba(47, 93, 80, 0.25);
            }
          </style>

          <script>
            function filterColumn(category, btn) {
              var tabs = document.querySelectorAll('.column-tab-btn');
              tabs.forEach(function(t) {
                t.classList.remove('active-tab');
              });
              btn.classList.add('active-tab');

              var items = document.querySelectorAll('.column-item');
              items.forEach(function(item) {
                if (category === 'all') {
                  item.style.display = 'flex';
                } else {
                  if (item.classList.contains(category)) {
                    item.style.display = 'flex';
                  } else {
                    item.style.display = 'none';
                  }
                }
              });
            }

            function openColumnModal(id) {
              var dataEl = document.getElementById('data-' + id);
              if (!dataEl) return;

              document.getElementById('modal-title').innerText = dataEl.getAttribute('data-title');
              document.getElementById('modal-category').innerText = dataEl.getAttribute('data-category');
              document.getElementById('modal-date').innerText = dataEl.getAttribute('data-date');
              document.getElementById('modal-summary').innerText = dataEl.getAttribute('data-summary');
              document.getElementById('modal-content').innerHTML = dataEl.innerHTML;
              
              var tags = dataEl.getAttribute('data-tags');
              if (tags) {
                var tagHtml = '<span class="font-bold mr-1">태그:</span>';
                tags.split(',').forEach(function(t) {
                  tagHtml += '<span class="heal-tag bg-gray-100 text-[#4E6159] text-[11px]">#' + t.trim() + '</span> ';
                });
                document.getElementById('modal-tags').innerHTML = tagHtml;
              } else {
                document.getElementById('modal-tags').innerHTML = '';
              }

              document.getElementById('column-modal-backdrop').style.display = 'flex';
              document.body.style.overflow = 'hidden';
            }

            function closeColumnModal() {
              document.getElementById('column-modal-backdrop').style.display = 'none';
              document.body.style.overflow = '';
            }

            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') closeColumnModal();
            });
          </script>

          <!-- 4. 상담/예약 배너 -->
          <div class="text-center pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:032-719-3472" class="heal-btn heal-btn-primary">
              <i class="fa-solid fa-phone"></i>
              <span>전화 상담: 032-719-3472</span>
            </a>
            <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao">
              <i class="fa-solid fa-comment"></i>
              <span>카카오톡 1:1 상담</span>
            </a>
            <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="heal-btn heal-btn-naver">
              <i class="fa-solid fa-calendar-check"></i>
              <span>네이버 진료 예약</span>
            </a>
          </div>

        </div>
---
