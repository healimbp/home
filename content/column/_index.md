---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "공황장애, 불면증, 자율신경실조증, 소아 틱장애, 우울·스트레스 질환별 권형근 원장의 전문 건강 의학 칼럼"
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
              질환별 건강 의학 칼럼
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              권형근 대표원장이 임상 현장에서 직접 집필하는 질환별 원인, 치료 원리 및 생활 속 자가 관리 가이드입니다.
            </p>
          </div>

          <!-- 2. 질환별 카테고리 필터 탭 (Interactive Tabs) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>질환별 칼럼 모아보기</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드 또는 [칼럼 전문 읽기]를 누르면 홈페이지에서 바로 전문을 읽으실 수 있습니다.</div>
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

            <!-- 칼럼 카드 그리드 (홈페이지 내 바로보기 지원) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [공황·불안 1] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-1')">
                    공황발작이 올 때 응급 대처법과 자율신경계 과흥분을 진정시키는 4-7-8 호흡법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    공황발작의 핵심 메커니즘은 교감신경의 급격한 과흥분과 과호흡입니다. 4초 들이마시고 7초 멈춘 뒤 8초간 내쉬는 복식호흡을 통해 미주신경을 자극하고 심장 박동을 안정시키는 응급 대처 요령과 근본 한방 치료법을 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 교감신경 흥분 억제 • 호흡 이완 훈련</span>
                  <button type="button" onclick="openColumnModal('col-panic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-1" style="display:none;" 
                     data-title="공황발작이 올 때 응급 대처법과 자율신경계 과흥분을 진정시키는 4-7-8 호흡법" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.04.15" 
                     data-summary="공황발작 시 교감신경 과흥분을 진정시키는 4-7-8 복식호흡과 한의학적 뇌 신경계 안정 치료 프로토콜을 설명합니다." 
                     data-tags="공황장애, 불안장애, 호흡이완법, 자율신경실조증">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>지하철 안이나 사람이 붐비는 곳에서 갑자기 가슴이 답답해지고, 심장이 미친 듯이 뛰며 숨을 쉴 수 없을 것 같은 공포를 겪으신 적이 있으신가요? 바로 <strong>공황발작(Panic Attack)</strong>의 대표적인 증상입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 공황발작의 신경학적 메커니즘</h3>
                  <p>공황발작은 심장이나 폐의 기질적 이상이 아니라, 뇌의 변연계(편도체)가 위험하지 않은 상황을 생명의 위협으로 잘못 인식하여 <strong>교감신경계를 폭발적으로 흥분</strong>시키면서 발생합니다. 이로 인해 아드레날린이 과다 분비되고 혈관 수축, 과호흡, 어지럼증, 식은땀이 동반됩니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 발작 순간을 이겨내는 4-7-8 복식호흡법</h3>
                  <p>공황발작이 시작되려 할 때 가장 중요한 것은 <strong>‘부교감신경(미주신경)’을 강제로 활성화</strong>하는 것입니다.</p>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li><strong>4초간</strong> 코로 깊게 숨을 들이마십니다.</li>
                    <li><strong>7초간</strong> 숨을 멈추고 심장 박동의 속도를 가라앉힙니다.</li>
                    <li><strong>8초간</strong> 입으로 천천히 바람을 빼듯 숨을 길게 내쉽니다.</li>
                  </ul>
                  <p>이 호흡을 4~5회 반복하면 뇌에 "지금은 안전하다"는 신호가 전달되어 발작의 강도와 지속 시간이 급격히 줄어듭니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">3. 해아림의 1:1 맞춤 근본 한방 치료</h3>
                  <p>임시 대처를 넘어 공황장애를 완치하기 위해서는 예민해진 뇌 신경계의 자생력을 키워야 합니다.</p>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li><strong>심비양허 및 간기울결 해소 한약</strong>: 뇌 신경전달물질의 균형을 맞추고 교감신경의 과각성을 낮춥니다.</li>
                    <li><strong>경혈 자극 침구 및 약침 요법</strong>: 가슴의 뭉친 기운을 풀고 심장 혈류 순환을 촉진합니다.</li>
                    <li><strong>두개천골 추나요법</strong>: 경추와 뇌척수액 순환을 원활하게 하여 자율신경계 시소 균형을 회복합니다.</li>
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
                    "또 발작이 오면 어쩌지?" 예기불안의 악순환을 끊는 두뇌 변연계 안정 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    공황장애 환자를 가장 괴롭히는 것은 발작이 없을 때도 찾아오는 ‘예기불안’입니다. 뇌의 편도체와 해마 부위의 공포 기억 과활성을 진정시키고 신경전달물질의 자연스러운 분비를 돕는 1:1 맞춤 한약 처방의 원리를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 편도체 흥분 완화 • 예기불안 차단</span>
                  <button type="button" onclick="openColumnModal('col-panic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-2" style="display:none;" 
                     data-title="&quot;또 발작이 오면 어쩌지?&quot; 예기불안의 악순환을 끊는 두뇌 변연계 안정 한방 치료" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.28" 
                     data-summary="발작이 없는 순간에도 일상을 마비시키는 예기불안의 원인과 두뇌 변연계 안정을 통한 근본 극복법을 다룹니다." 
                     data-tags="예기불안, 공황장애, 불안신경증, 한방신경정신과">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>공황장애를 앓는 분들께서 가장 힘들다고 호소하시는 것은 10~20분간 지속되는 발작 그 자체보다, <strong>"언제 또 발작이 일어날지 모른다"는 24시간 계속되는 예기불안(Anticipatory Anxiety)</strong>입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 예기불안이 만성화되는 이유</h3>
                  <p>첫 발작의 공포가 뇌의 '해마'와 '편도체'에 깊게 각인되면, 뇌는 사소한 신체 감각(약간의 가슴 두근거림, 소화불량, 엘리베이터 탑승)조차 공황의 전조로 착각하여 지속적인 방어 태세를 유지합니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 두뇌 과각성을 가라앉히는 한방 치료법</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li><strong>안심정지 맞춤 처방</strong>: 과민해진 뇌 변연계의 흥분을 낮추고 뇌 혈류량을 증진시킵니다.</li>
                    <li><strong>생기능 자기조절 훈련</strong>: 환자 스스로 자율신경계 반응을 모니터링하며 긴장을 푸는 법을 체득합니다.</li>
                    <li><strong>체질 맞춤 식이 지도</strong>: 카페인, 정제당 등 교감신경을 자극하는 요인을 차단합니다.</li>
                  </ul>
                </div>
              </article>

              <!-- [공황·불안 3] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-3')">
                    발표할 때 목소리가 떨리고 심장이 쿵쾅거리는 사회공포증, 체질별 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    시선 공포, 무대 공포, 발표 불안은 단순한 소심함이 아닌 자율신경계 긴장 불균형 질환입니다. 심담허겁(心膽虛怯) 체질을 개선하고 가슴 두근거림과 식은땀을 가라앉혀 자신감을 회복하는 방법을 알아봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 사회공포증 극복 • 심담강화 처방</span>
                  <button type="button" onclick="openColumnModal('col-panic-3')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-3" style="display:none;" 
                     data-title="발표할 때 목소리가 떨리고 심장이 쿵쾅거리는 사회공포증, 체질별 한방 치료" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.10" 
                     data-summary="발표불안과 시선공포를 유발하는 심담허겁 체질의 원인과 자율신경 긴장을 완화하는 한방 솔루션을 설명합니다." 
                     data-tags="사회공포증, 발표불안, 무대공포증, 체질개선">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>사람들 앞에서 발표를 하거나 회의에서 발언할 때 얼굴이 붉어지고, 목소리가 떨리며 머릿속이 하얘지는 사회공포증은 성격의 문제가 아니라 신경정신과적 질환입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 한의학에서 보는 사회공포증: '심담허겁(心膽虛怯)'</h3>
                  <p>심장과 담(쓸개)의 기운이 허약하여 사소한 자극에도 쉽게 놀라고 불안해지는 상태로, 교감신경의 과민으로 혈압과 심박수가 급상승하는 현상입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 맞춤 치료 프로세스</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>심장의 담력을 강화하고 화기를 내리는 <strong>온담탕 가감방</strong> 처방</li>
                    <li>교감신경 긴장을 풀어주는 <strong>침구 및 이침 요법</strong></li>
                    <li>발표 전 심신 이완 훈련 병행</li>
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
                    새벽 2~3시에 자다 깨는 수면유지장애, 간(肝)과 심(心)의 허열(虛熱)을 다스려야 하는 이유
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    잠들기는 쉬우나 중간에 자주 깨거나 꿈이 많아 숙면을 취하지 못하는 증상은 만성 피로와 스트레스로 인해 체내 음혈(陰血)이 부족해지고 허열이 뜰 때 발생합니다. 수면제 없이 뇌의 열을 내리는 한방 숙면 치료법을 제시합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 수면유지장애 해결 • 뇌 과각성 해소</span>
                  <button type="button" onclick="openColumnModal('col-insomnia-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-insomnia-1" style="display:none;" 
                     data-title="새벽 2~3시에 자다 깨는 수면유지장애, 간(肝)과 심(心)의 허열(虛熱)을 다스려야 하는 이유" 
                     data-category="불면증 · 수면장애" 
                     data-date="2026.02.20" 
                     data-summary="자다 깨는 중도각성과 다몽증의 한의학적 기전 및 뇌 과각성을 해소하는 숙면 치료 원리를 다룹니다." 
                     data-tags="불면증, 수면장애, 중도각성, 허열치료">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>잠들기는 쉬운데 새벽 2~3시만 되면 눈이 번쩍 떠져 아침까지 뜬눈으로 지새우는 중도각성 불면증 환자가 늘고 있습니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 한의학에서 보는 새벽 각성의 원인</h3>
                  <p>새벽 1시~3시는 간경(肝經)의 기운이 흐르는 시간입니다. 스트레스로 간기가 뭉치고 심장에 허열이 뜨면 뇌 혈류가 과열되어 얕은 수면에서 각성하게 됩니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 수면제 없이 뇌를 재우는 한방 치유법</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li><strong>청열안신 맞춤 한약</strong>: 심장과 간의 열을 식히고 맑은 진액을 보충하여 델타파 숙면을 유도합니다.</li>
                    <li><strong>두부 혈자리 침 치료</strong>: 백회, 신문, 안면 혈을 자극하여 뇌파 과각성을 억제합니다.</li>
                    <li>취침 2시간 전 족욕으로 상열하한 교정.</li>
                  </ul>
                </div>
              </article>

              <!-- [불면증 2] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-insomnia-2')">
                    수면제 의존 없이 자연스러운 입면을 돕는 뇌파 안정 및 자생적 수면 리듬 회복법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    수면유도제를 장기 복용할 경우 낮 시간 멍함이나 내성 위험이 커질 수 있습니다. 뇌가 스스로 멜라토닌을 분비하고 델타파(깊은 수면파)를 형성할 수 있도록 돕는 한약과 생기능 조절 훈련의 중요성을 짚어봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 약물 내성 극복 • 자연 수면 유도</span>
                  <button type="button" onclick="openColumnModal('col-insomnia-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-insomnia-2" style="display:none;" 
                     data-title="수면제 의존 없이 자연스러운 입면을 돕는 뇌파 안정 및 자생적 수면 리듬 회복법" 
                     data-category="불면증 · 수면장애" 
                     data-date="2026.02.05" 
                     data-summary="수면제 내성과 반동성 불면증을 예방하고 뇌 본연의 수면 호르몬 분비 능력을 되살리는 한방 치료를 소개합니다." 
                     data-tags="수면제중단, 만성불면증, 멜라토닌, 뇌파안정">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>수면제는 일시적으로 뇌를 억제할 뿐 수면의 질을 보장하지 못합니다. 한방 치료는 뇌 신경계를 안정시키는 한약과 병행하며 서서히 양약을 줄여 스스로 잠드는 힘을 길러줍니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 치료 전략</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>산조인, 원지, 백자인 중심의 <strong>신경 이완 맞춤 한약</strong></li>
                    <li>뇌 혈류를 개선하는 <strong>두개천골 추나요법</strong></li>
                    <li>이완파를 유도하는 <strong>생기능 자기조절 훈련</strong></li>
                  </ul>
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
                    원인 모를 어지럼증과 식은땀, 미주신경성 실신의 전조 증상과 자율신경 검사(HRV)
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    오래 서 있거나 사람이 많은 지하철에서 갑자기 눈앞이 캄캄해지고 쓰러지는 미주신경성 실신. 일시적인 혈관 확장과 뇌 혈류 부족을 유발하는 자율신경실조증의 원인과 혈관 탄력성을 키우는 한방 치료법을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 미주신경실신 예방 • 혈류 순환 촉진</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-1" style="display:none;" 
                     data-title="원인 모를 어지럼증과 식은땀, 미주신경성 실신의 전조 증상과 자율신경 검사(HRV)" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.18" 
                     data-summary="미주신경성 실신의 발생 원인과 전조증상 대처법, 자율신경계 균형도 검사 및 혈관 탄력 강화 한방 치료를 설명합니다." 
                     data-tags="미주신경실신, 어지럼증, 자율신경검사, 혈류개선">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>출퇴근길에 갑자기 속이 메스껍고 식은땀이 흐르며 주저앉거나 쓰러지는 미주신경성 실신은 자율신경 조절 기능 저하로 발생합니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 실신 전조 시 응급 대처</h3>
                  <p>즉시 자리에 쪼그려 앉거나 누워 다리를 높이고, 하체 근육에 힘을 주는 '근육 압박법'으로 뇌 혈류를 유지합니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 한의학적 근본 치료</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>심장과 비장의 기운을 보하여 혈관 탄력을 높이는 <strong>보중익기탕 가감방</strong></li>
                    <li>자율신경계 반응성을 정상화하는 <strong>침구 및 추나요법</strong></li>
                  </ul>
                </div>
              </article>

              <!-- [자율신경 2] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-2')">
                    가슴 답답함, 만성 소화불량, 체온 조절 장애를 동반하는 자율신경실조증 총정리
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    내과나 이비인후과에서 "이상 없다"는 진단을 받았음에도 몸 전체가 아프고 피로하다면 자율신경실조증을 의심해야 합니다. 교감-부교감신경의 시소 균형을 바로잡는 심신 통합 치료 프로토콜을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경실조증 정밀 진단 • 심신 통합 치료</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-2" style="display:none;" 
                     data-title="가슴 답답함, 만성 소화불량, 체온 조절 장애를 동반하는 자율신경실조증 총정리" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.05" 
                     data-summary="검사상 이상 없는 전신 통증과 소화불량, 어지럼증을 유발하는 자율신경실조증의 한방 치료 원리를 정리합니다." 
                     data-tags="자율신경실조증, 신경성위장장애, 심신통합치료, 체온조절장애">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>검사상 이상이 없는데도 가슴 답답함, 만성 소화불량, 상열감, 기립성 어지럼증이 동반된다면 자율신경계 불균형을 점검해야 합니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 치료 프로세스</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>교감신경 항진을 내리고 부교감신경을 활성화하는 <strong>체질 맞춤 한약</strong></li>
                    <li>척추 정렬을 맞추어 척수 신경 전달을 개선하는 <strong>추나요법</strong></li>
                  </ul>
                </div>
              </article>

              <!-- [자율신경 3] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-3')">
                    손발 다한증과 상열감, 교감신경의 항진을 가라앉히는 체질별 한방 처방
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    긴장하거나 스트레스를 받으면 손발에 땀이 흥건해지고 얼굴로 열이 치솟는 다한증. 땀샘을 억지로 막는 대신 뇌의 열과 교감신경의 긴장을 완화하여 땀 분비를 정상화하는 한방 원리를 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 다한증 근본 개선 • 상열하한 해소</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-3')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-3" style="display:none;" 
                     data-title="손발 다한증과 상열감, 교감신경의 항진을 가라앉히는 체질별 한방 처방" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2025.12.14" 
                     data-summary="긴장 시 땀이 쏟아지는 수족다한증의 원인인 교감신경 과민과 한방 체질 맞춤 땀 조절 처방을 안내합니다." 
                     data-tags="다한증, 수족다한증, 상열감, 교감신경항진">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>긴장할 때 쏟아지는 손발 땀은 땀샘 문제가 아닌 교감신경 과항진으로 인한 감정성 발한입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 한방 치료 원리</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>심장의 열을 내리고 진액을 수렴하는 <strong>황기, 오미자 중심 맞춤 탕전</strong></li>
                    <li>말초 교감신경절 긴장을 완화하는 침구 치료</li>
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
                    아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 이유와 올바른 부모 대처법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    틱 증상은 아이의 나쁜 버릇이 아니라 뇌 기저핵의 운동 억제 기능 미숙으로 발생하는 불수의적 반응입니다. 지적과 질책 대신 두뇌 신경계의 긴장을 풀어주는 양육 환경 조성법과 순한 맞춤 한약 치료를 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 틱장애 부모 양육법 • 기저핵 발달 지원</span>
                  <button type="button" onclick="openColumnModal('col-tic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-tic-1" style="display:none;" 
                     data-title="아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 이유와 올바른 부모 대처법" 
                     data-category="소아 틱장애 · ADHD" 
                     data-date="2025.11.25" 
                     data-summary="소아 틱장애의 뇌 기저핵 원인 분석과 부모의 올바른 양육 코칭 및 순한 맞춤 한방 치료법을 다룹니다." 
                     data-tags="소아틱장애, 틱증상, 뚜렛증후군, 부모양육법">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>틱은 아이의 고의적인 버릇이 아닌 뇌 기저핵(Basal Ganglia)의 운동 억제 기능 미숙으로 발생하는 불수의적 반응입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 부모님의 3대 대처 수칙</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>절대 지적하거나 나무라지 마세요 (의식할수록 악화됩니다).</li>
                    <li>모르는 척 편안하게 대하며 아이의 감정에 공감해 주세요.</li>
                    <li>스마트폰과 시각적 자극을 줄여주세요.</li>
                  </ul>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">2. 맞춤 한방 치료</h3>
                  <p>순한 천연 한약 처방과 무통 침 치료, 시청지각 훈련으로 기저핵의 안정적인 성장을 지원합니다.</p>
                </div>
              </article>

              <!-- [소아 틱장애 2] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-tic-2')">
                    산만하고 충동적인 아이 ADHD, 전두엽 억제 기능을 강화하는 두뇌 훈련 프로그램
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    주의력 결핍과 과잉행동(ADHD)은 뇌 전두엽의 실행 기능 및 신경전달물질의 불균형에서 비롯됩니다. 아이의 뇌 성장을 저해하지 않는 천연 총명 한약과 시청지각·소뇌기저핵 훈련의 시너지 효과를 분석합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 전두엽 기능 강화 • 안전한 소아 한방 치료</span>
                  <button type="button" onclick="openColumnModal('col-tic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-tic-2" style="display:none;" 
                     data-title="산만하고 충동적인 아이 ADHD, 전두엽 억제 기능을 강화하는 두뇌 훈련 프로그램" 
                     data-category="소아 틱장애 · ADHD" 
                     data-date="2025.11.02" 
                     data-summary="주의력 결핍 과잉행동장애(ADHD) 아동의 전두엽 기능 강화와 안전한 천연 한방 두뇌 치료법을 설명합니다." 
                     data-tags="소아ADHD, 주의력결핍, 두뇌훈련, 총명탕">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>ADHD는 전두엽의 충동 억제 회로와 신경전달물질 불균형에서 비롯됩니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 안전한 한방 치료</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>뇌 혈류와 인지 기능을 돕는 <strong>맞춤 총명 한약</strong></li>
                    <li>집중력을 기르는 <strong>시청지각 훈련 및 뉴로피드백</strong></li>
                    <li>두뇌 신경망을 조율하는 <strong>소뇌기저핵 훈련</strong></li>
                  </ul>
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
                    가슴에 큰 돌을 얹은 듯한 화병(火病), 울체된 기운을 소통시키는 한의학적 해법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    억울함과 분노를 억누르며 생기는 화병은 가슴 답답함, 목 이물감(매핵기), 두통 등 다양한 신체화 증상으로 나타납니다. 간기울결(肝氣鬱結)을 풀고 심장의 열을 내려 마음의 응어리를 풀어주는 한방 치료법을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 화병 가슴 답답함 해소 • 매핵기 치료</span>
                  <button type="button" onclick="openColumnModal('col-stress-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-stress-1" style="display:none;" 
                     data-title="가슴에 큰 돌을 얹은 듯한 화병(火病), 울체된 기운을 소통시키는 한의학적 해법" 
                     data-category="우울증 · 화병/스트레스" 
                     data-date="2025.10.12" 
                     data-summary="억압된 분노로 인한 화병과 매핵기(목 이물감), 가슴 답답함을 치료하는 간기울결 해소 한방 솔루션을 제시합니다." 
                     data-tags="화병, 울화병, 매핵기, 스트레스성가슴답답함">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>가슴이 꽉 막힌 듯 답답하고 목에 무언가 걸린 느낌의 화병은 억눌린 분노가 열(火)로 변해 발생합니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 치료법</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>화기를 풀고 가슴을 시원하게 소통시키는 <strong>분심기음 가감방</strong></li>
                    <li>전중혈과 단중혈을 자극하는 <strong>약침 및 온열 치료</strong></li>
                  </ul>
                </div>
              </article>

              <!-- [우울·스트레스 2] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-stress-2')">
                    만성 번아웃 증후군과 무기력증, 신정(腎精)과 기혈(氣血)을 보강하여 활력을 되찾는 법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    현대 직장인과 수험생을 위협하는 번아웃 증후군은 뇌의 에너지가 완전히 고갈된 상태입니다. 항우울제에만 의존하지 않고 체내 근본 원기를 북돋아 자생적 활력과 맑은 집중력을 되찾는 공진단·건뇌단 처방의 역할을 짚어봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 번아웃 극복 • 원기 보강 한약</span>
                  <button type="button" onclick="openColumnModal('col-stress-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-stress-2" style="display:none;" 
                     data-title="만성 번아웃 증후군과 무기력증, 신정(腎精)과 기혈(氣血)을 보강하여 활력을 되찾는 법" 
                     data-category="우울증 · 화병/스트레스" 
                     data-date="2025.09.28" 
                     data-summary="만성 피로와 극심한 무기력감의 번아웃 증후군을 극복하는 공진단·건뇌단 원기 보강 치료를 안내합니다." 
                     data-tags="번아웃증후군, 만성무기력증, 공진단, 뇌피로회복">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  <p>극심한 무기력감과 뇌 피로의 번아웃 증후군은 신장의 정기와 심비의 기혈이 고갈된 상태입니다.</p>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#2F5D50] mt-4 mb-2">1. 원기 회복 처방</h3>
                  <ul class="list-disc pl-5 space-y-1 text-sm text-[#4E6159]">
                    <li>뇌 혈류를 맑게 하고 원기를 돋우는 <strong>사향 공진단 및 건뇌단</strong></li>
                    <li>만성 피로와 소화 기능을 회복시키는 <strong>맞춤 보약 요법</strong></li>
                  </ul>
                </div>
              </article>

            </div>
          </div>

          <!-- 3. 인페이지 칼럼 전문 리더 모달 (Interactive In-Site Reader Modal) -->
          <div id="column-modal-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" style="display:none;" onclick="if(event.target===this) closeColumnModal();">
            <div class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DDE6E1] relative flex flex-col p-6 sm:p-8 space-y-6">
              
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
                
                <div class="flex items-center gap-3 p-3 bg-[#F2F7F4] rounded-2xl border border-[#DDE6E1]">
                  <div class="w-11 h-11 rounded-full overflow-hidden border border-[#DDE6E1] flex-shrink-0">
                    <img src="/images/director.jpg" alt="권형근 대표원장" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div class="font-extrabold text-sm text-[#26332E]">권형근 대표원장 (한방침구과 전문의)</div>
                    <div class="text-xs text-[#2F5D50]">해아림한의원 인천부평점 • 1:1 맞춤 진료</div>
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
                  <div class="text-xs text-[#68736E]">원장 직접 1:1 맞춤 진료 • 사전 예약제 운영</div>
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
