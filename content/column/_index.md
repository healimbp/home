---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "인천 부평 공황장애, 불면증, 자율신경실조증, 소아 틱장애, 우울·화병 한의원 치료 및 검사 - 권형근 원장의 전문 건강 의학 칼럼"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Health Column & Insights</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              인천 · 부평 · 부천 질환별 건강 의학 칼럼
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              해아림한의원 인천부평점 권형근 대표원장이 전하는 공황장애, 불면증, 자율신경실조증, 소아 틱장애 한의원 치료와 검사 이야기입니다.
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

            <!-- 칼럼 카드 그리드 (SEO 키워드 강화 & 장문 인페이지 리더) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [공황·불안 1] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-1')">
                    [인천부평 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 1:1 맞춤 치료법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    인천, 부평, 부천 지역에서 공황장애 병원 및 한의원 치료를 찾는 분들을 위한 공황발작 신경학적 기전과 4-7-8 호흡, 편도체 안정 한약 치료 솔루션입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 공황장애 • 부평 한의원 • 공황발작 치료</span>
                  <button type="button" onclick="openColumnModal('col-panic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-1" style="display:none;" 
                     data-title="[인천부평 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 1:1 맞춤 치료법" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.04.15" 
                     data-summary="인천 부평 공황장애 한의원에서 전하는 공황발작 시 교감신경 과흥분 완화 4-7-8 복식호흡과 뇌 변연계 안정 한방 치료 프로토콜입니다." 
                     data-tags="인천공황장애한의원, 부평공황장애병원, 부천공황장애, 공황발작치료, 자율신경실조증">
                  <p>안녕하세요. <strong>인천 · 부평 · 부천 신경정신과 및 자율신경 특화 클리닉, 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;인천 부평역 지하철 안에서 갑자기 숨이 턱 막히고 심장이 미친 듯이 뛰어 당장이라도 쓰러질 것 같았습니다.&rdquo;<br>
                    &ldquo;응급실 병원에 실려가서 심전도와 피검사를 다 해봤는데 아무 이상이 없다고 합니다. 공황장애 한의원 치료로 완치될 수 있을까요?&rdquo;
                  </blockquote>

                  <p>진료실에서 인천, 부평, 부천 등지에서 내원하신 공황장애 환자분들을 뵐 때 가장 많이 듣는 질문입니다. 대학병원 응급실에서는 "수치상 이상이 없으니 신경안정제를 복용하라"고 하지만, 환자 본인에게는 생명의 위협을 느끼는 극심한 고통입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 공황발작의 신경학적 원인과 교감신경 과흥분</h3>
                  <p>공황장애는 심장이나 폐의 기질적 이상이 아니라, 뇌의 정서와 공포 반응을 담당하는 **변연계(편도체)**가 오작동하여 발생합니다.</p>
                  <p>위험하지 않은 일상 상황에서도 뇌의 경보 장치가 잘못 켜져 **자율신경계(교감신경)를 폭발적으로 흥분**시키면서 아드레날린 분비, 심장 박동 급상승, 혈관 수축, 과호흡, 어지럼증, 손발 저림이 동반됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 발작 순간 미주신경을 자극하는 응급 4-7-8 호흡법</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>4초간</strong> 코로 천천히 숨을 들이마십니다.</li>
                    <li><strong>7초간</strong> 숨을 멈추고 뇌에 안정 신호를 전달합니다.</li>
                    <li><strong>8초간</strong> 입으로 가늘고 길게 숨을 내쉬며 심장 박동을 안정시킵니다.</li>
                  </ul>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림한의원 인천부평점의 1:1 맞춤 한방 치료 시스템</h3>
                  <p>인천 부평 해아림한의원에서는 약물에만 의존하지 않고 뇌 신경계 스스로 공포를 조절할 수 있도록 자생력을 키웁니다.</p>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>심비양허·간기울결 맞춤 한약</strong>: 뇌 신경전달물질의 균형을 맞추고 교감신경의 과각성을 가라앉힙니다.</li>
                    <li><strong>경혈 자극 침구 및 약침 요법</strong>: 전중혈, 신문혈을 자극하여 흉격의 뭉친 화기를 내리고 심장 혈류 순환을 촉진합니다.</li>
                    <li><strong>두개천골 추나요법</strong>: 경추와 척추 정렬을 바로잡아 뇌척수액 순환과 미주신경 소통을 원활하게 돕습니다.</li>
                  </ul>
                </div>
              </article>

              <!-- [공황·불안 2] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-2')">
                    [부평 불안장애 한의원] &ldquo;또 발작 올까 두려운&rdquo; 예기불안과 공황장애 뇌 변연계 안정 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    발작이 없는 시간에도 일상을 마비시키는 24시간 예기불안의 원인과 인천 부평 해아림한의원의 편도체 안정 한약 처방을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평 불안장애 • 인천 예기불안 • 한의원 치료</span>
                  <button type="button" onclick="openColumnModal('col-panic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-2" style="display:none;" 
                     data-title="[부평 불안장애 한의원] &ldquo;또 발작 올까 두려운&rdquo; 예기불안과 공황장애 뇌 변연계 안정 한방 치료" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.28" 
                     data-summary="인천 부평 공황장애 불안장애 한의원에서 전하는 예기불안 극복과 뇌 변연계 신경안정 치료 솔루션입니다." 
                     data-tags="부평불안장애한의원, 인천예기불안, 공황장애병원, 한방신경정신과">
                  <p>안녕하세요. <strong>인천 · 부평 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  
                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;운전 중이거나 모임에 갈 때 '혹시 또 공황 발작이 오면 어쩌지?' 하는 생각에 하루 종일 가슴이 조마조마합니다.&rdquo;<br>
                    &ldquo;인천 부평 근처 불안장애 병원과 한의원을 알아보고 있는데 예기불안도 한약으로 치료가 되나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 예기불안의 악순환 메커니즘</h3>
                  <p>공황 발작의 공포 기억이 뇌의 **해마**와 **편도체**에 깊이 각인되면, 뇌는 미세한 가슴 답답함조차 공황의 전조로 오인하여 24시간 지속적인 불안 상태를 만듭니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 안심정지 맞춤 한약과 생기능 훈련</h3>
                  <p>해아림한의원 인천부평점에서는 <strong>안심정지 맞춤 탕약</strong>으로 과민해진 뇌 신경을 안정시키고, <strong>생기능 자기조절 훈련</strong>으로 환자 스스로 긴장을 조절하는 능력을 길러드립니다.</p>
                </div>
              </article>

              <!-- [자율신경 1] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-1')">
                    [인천 부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하, 검사 방법과 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    병원 검사에서 이상 없는 만성 피로와 무기력증, 자율신경실조증의 원인과 인천 부평 해아림한의원의 심박변이도(HRV) 검사 및 맞춤 한방 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 자율신경실조증 • 부평 한의원 • 만성피로 검사</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-1" style="display:none;" 
                     data-title="[인천 부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하, 검사 방법과 한방 치료" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.18" 
                     data-summary="인천 부평 자율신경실조증 한의원에서 전하는 만성피로와 자율신경계 기능 저하 원인, HRV 검사 및 맞춤 한방 치료법입니다." 
                     data-tags="인천자율신경실조증한의원, 부평자율신경실조증병원, 부천만성피로, HRV검사, 맞춤한약">
                  <p>안녕하세요. <strong>인천 부평 자율신경실조증 특화 한의원, 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;인천, 부평 내과 병원 종합검진에서는 간수치도 정상이고 이상이 없다는데, 매일 아침 몸이 물에 젖은 솜처럼 무겁습니다.&rdquo;<br>
                    &ldquo;가슴이 답답하고 머리가 멍한 브레인포그 증상이 있는데 자율신경실조증 한의원 검사로 원인을 찾을 수 있나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 기능 저하와 한스 셀리에 3단계</h3>
                  <p>자율신경계 조절 능력이 저하되면 긴장 상태를 버티다 **소진기(Burnout)**에 접어들며 만성 피로, 무기력증, 소화불량, 어지럼증이 동반됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 인천 부평 해아림한의원의 정밀 검사 및 치료</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>심박변이도(HRV) 자율신경 검사</strong>: 교감-부교감신경 균형도와 신경계 피로도를 객관적 수치로 측정.</li>
                    <li><strong>체질별 맞춤 보양·안신 탕약</strong>: 고갈된 신정과 기혈을 보강하고 뇌 신경계 자생력을 회복.</li>
                    <li><strong>두개천골 추나요법</strong>: 경추 정렬을 바로잡아 뇌 혈류와 뇌척수액 순환 촉진.</li>
                  </ul>
                </div>
              </article>

              <!-- [소아 틱장애 1] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-tic-1')">
                    [인천 부평 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    인천, 부평, 부천 소아 틱장애 병원 및 한의원 치료를 찾는 부모님들을 위한 뇌 기저핵 원인 분석과 순한 소아 한약, 부모 양육 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 틱장애 • 부평 소아한의원 • 음성틱 치료</span>
                  <button type="button" onclick="openColumnModal('col-tic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-tic-1" style="display:none;" 
                     data-title="[인천 부평 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭" 
                     data-category="소아 틱장애 · ADHD" 
                     data-date="2025.11.25" 
                     data-summary="인천 부평 소아 틱장애 한의원에서 전하는 틱 증상 발생 시 부모 양육 태도와 뇌 기저핵 성장 맞춤 한방 치료법입니다." 
                     data-tags="인천틱장애한의원, 부평틱장애병원, 부천소아틱장애, 뚜렛증후군치료, 소아두뇌클리닉">
                  <p>안녕하세요. <strong>인천 · 부평 소아 두뇌 질환 클리닉 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;아이가 눈을 세게 깜빡이고 '음음' 소리를 내는데 참으라고 혼냈더니 틱이 더 심해졌습니다.&rdquo;<br>
                    &ldquo;인천 부평 소아 틱장애 한의원에서는 어떤 검사와 한약으로 치료하나요?&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 틱장애의 신경학적 원인: 뇌 기저핵의 미성숙</h3>
                  <p>틱은 나쁜 버릇이 아니라 뇌의 운동 억제 필터인 **기저핵(Basal Ganglia)**이 아직 덜 성숙하여 일어나는 불수의적 반응입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 순하고 안전한 해아림 소아 한방 치료</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li>성장기 뇌 발달을 돕고 신경 흥분을 가라앉히는 <strong>순한 천연 맞춤 한약</strong> 처방.</li>
                    <li>아프지 않은 <strong>무통 침 치료와 시청지각 두뇌 훈련</strong> 병행.</li>
                  </ul>
                </div>
              </article>

              <!-- [불면증 1] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-insomnia-1')">
                    [인천부평 불면증 한의원/병원] 새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    수면제 없이 자연스러운 숙면을 유도하는 인천 부평 해아림한의원의 청열안신 탕약과 뇌파 안정 치료를 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 불면증 • 부평 수면장애 • 수면유지장애</span>
                  <button type="button" onclick="openColumnModal('col-insomnia-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-insomnia-1" style="display:none;" 
                     data-title="[인천부평 불면증 한의원/병원] 새벽 2~3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리" 
                     data-category="불면증 · 수면장애" 
                     data-date="2026.02.20" 
                     data-summary="인천 부평 불면증 한의원에서 전하는 새벽 중도각성과 다몽증 원인, 뇌 과각성을 해소하는 맞춤 한약 숙면 치료법입니다." 
                     data-tags="인천불면증한의원, 부평불면증병원, 부천수면장애, 수면유지장애, 숙면한약">
                  <p>안녕하세요. <strong>인천 부평 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;인천 부평 근처 수면 클리닉 병원에서 수면제를 처방받아 먹고 있는데, 약 없이 스스로 깊이 자고 싶습니다.&rdquo;<br>
                    &ldquo;새벽 2~3시만 되면 눈이 번쩍 떠져 다시 잠을 못 잡니다.&rdquo;
                  </blockquote>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 수면제 없이 뇌를 재우는 한방 치료법</h3>
                  <p>심장과 간의 허열(虛熱)을 식혀주는 **청열안신 맞춤 한약**과 두부 경혈 침구 치료로 뇌파를 안정시키고 깊은 델타파 수면을 회복시킵니다.</p>
                </div>
              </article>

              <!-- [우울·스트레스 1] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-stress-1')">
                    [인천부평 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학적 치료법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    가슴이 꽉 막힌 듯 답답하고 목에 이물감이 느껴지는 화병과 매핵기, 인천 부평 해아림한의원의 간기울결 해소 한방 처방을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 화병 한의원 • 부평 우울증 • 매핵기 치료</span>
                  <button type="button" onclick="openColumnModal('col-stress-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-stress-1" style="display:none;" 
                     data-title="[인천부평 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학적 치료법" 
                     data-category="우울증 · 화병/스트레스" 
                     data-date="2025.10.12" 
                     data-summary="인천 부평 화병 우울증 한의원에서 전하는 가슴 답답함, 매핵기(목 이물감) 치료 분심기음 한약과 신경안정 솔루션입니다." 
                     data-tags="인천화병한의원, 부평우울증병원, 부천화병치료, 매핵기한약, 한방신경정신과">
                  <p>안녕하세요. <strong>인천 · 부평 화병 우울증 특화 클리닉 해아림한의원 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;가슴 한가운데 바위가 얹힌 것처럼 답답하고 목에 무언가 걸려 넘어가지 않습니다.&rdquo;<br>
                    &ldquo;인천 부평 화병 한의원 치료로 가슴의 화를 풀 수 있을까요?&rdquo;
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
                  <div class="text-xs text-[#68736E]">원장 직접 1:1 맞춤 진료 • 부평역 7번출구 도보 5분</div>
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
