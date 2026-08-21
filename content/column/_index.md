---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "공황장애, 불면증, 자율신경실조증, 소아 틱장애, 우울·스트레스 질환별 권형근 원장의 심층 전문 의학 칼럼"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Health Column & In-Depth Insights</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              질환별 심층 건강 의학 칼럼
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              권형근 대표원장이 임상 현장에서 직접 집필하는 질환별 병리 기전, 한의학적 진단 및 근본 자생력 회복 가이드입니다.
            </p>
          </div>

          <!-- 2. 질환별 카테고리 필터 탭 (Interactive Tabs) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>질환별 전문 칼럼 모아보기</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드 또는 [칼럼 전문 읽기]를 누르면 홈페이지에서 바로 심층 전문을 읽으실 수 있습니다.</div>
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

            <!-- 칼럼 카드 그리드 (홈페이지 내 장문 리더 지원) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [자동발행: 자율신경 · 실신/어지럼증 - 2026-08-21] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">2026-08-21 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-797897')">
                    앉았다 일어설 때 눈앞이 캄캄해지는 기립성 어지럼증과 뇌 혈류 순환 장애의 한의학적 해법은 어떤 관계일까요?
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    앉았다 일어설 때 눈앞이 캄캄해지는 기립성 어지럼증과 뇌 혈류 순환 장애의 한의학적 해법에 대한 신경학적 원인과 한스 셀리에의 스트레스 적응 단계, 뇌 신경계 균형을 회복하는 해아림한의원 인천부평점의 1:1 맞춤 한방 치료 솔루션을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경 • 자율신경검사 • 체질맞춤한약 • 신경안정</span>
                  <button type="button" onclick="openColumnModal('col-797897')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>

                <!-- 숨겨진 칼럼 전체 본문 데이터 (인페이지 모달용) -->
                <div id="data-col-797897" style="display:none;" 
                     data-title="앉았다 일어설 때 눈앞이 캄캄해지는 기립성 어지럼증과 뇌 혈류 순환 장애의 한의학적 해법은 어떤 관계일까요?" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026-08-21" 
                     data-summary="앉았다 일어설 때 눈앞이 캄캄해지는 기립성 어지럼증과 뇌 혈류 순환 장애의 한의학적 해법에 대한 신경학적 원인과 한스 셀리에의 스트레스 적응 단계, 뇌 신경계 균형을 회복하는 해아림한의원 인천부평점의 1:1 맞춤 한방 치료 솔루션을 설명합니다." 
                     data-tags="자율신경, 자율신경검사, 체질맞춤한약, 신경안정">

<p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

<blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
  &ldquo;병원 검사에서는 아무런 이상이 없다는데, 왜 자고 일어나도 개운하지 않고 매일 기운이 없을까요?&rdquo;<br>
  &ldquo;가슴이 두근거리고 머리가 멍해서 예전처럼 일에 집중하기가 어렵습니다.&rdquo;
</blockquote>

<p>진료실에서 환자분들을 뵐 때 가장 안타까운 순간 중 하나는, 내과나 신경과 등에서 각종 정밀 검사를 받아보아도 &ldquo;수치는 정상입니다, 신경성/스트레스성입니다&rdquo;라는 설명만 듣고 명확한 해결책을 찾지 못해 오랜 기간 불안과 피로 속에 방치되어 오신 경우입니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 기능 저하가 만성 증상으로 이어지는 메커니즘</h3>
<p>자율신경계는 우리의 의지와 상관없이 심장 박동, 혈관 수축·이완, 호흡, 소화, 체온 조절, 수면 주기 등을 24시간 쉬지 않고 조절하는 인체의 자동 제어 시스템입니다.</p>
<p>낮에는 교감신경이 적절히 활성화되어 활력을 내고, 밤에는 부교감신경이 우세해져 심신을 이완하고 충전해야 건강한 생체 리듬이 유지됩니다. 그러나 지속적인 과로와 정신적 스트레스가 누적되면 이 시소 균형이 붕괴됩니다.</p>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 긴장 상태에서 소진(Burnout)으로 가는 3단계 과정</h3>
<p>캐나다의 생리학자 한스 셀리에(Hans Selye)가 제시한 일반적응증후군(GAS) 이론은 몸이 스트레스에 의해 무너지는 과정을 잘 설명해 줍니다.</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>1단계 (경고 반응기)</strong>: 급성 스트레스에 직면하여 교감신경이 급격히 흥분합니다. 가슴 두근거림, 혈압 상승, 근육 긴장, 식은땀 등이 나타납니다.</li>
  <li><strong>2단계 (저항기)</strong>: 스트레스가 지속되면서 겉으로는 일상을 유지하지만, 내부적으로는 긴장 상태를 버티기 위해 코르티솔과 에너지가 지속 고갈됩니다.</li>
  <li><strong>3단계 (소진기 / 탈진)</strong>: 신체 저항력과 자율신경 조절 능력이 바닥납니다. 이때는 심한 가슴 두근거림보다는 <em>&ldquo;극심한 만성 피로, 무기력증, 브레인포그(머리 멍함), 수면장애, 소화불량&rdquo;</em>이 주된 증상으로 고착됩니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 객관적 검사와 한의학적 진단</h3>
<p>해아림한의원 인천부평점에서는 눈대중으로 증상을 짐작하지 않습니다.</p>
<ul class="list-disc pl-5 space-y-1.5 text-sm text-[#4E6159] my-3">
  <li><strong>심박변이도(HRV) 자율신경 검사</strong>: 교감·부교감신경 활성도와 신경계 피로도, 스트레스 저항력을 객관적 수치로 측정합니다.</li>
  <li><strong>한의학적 맥진(脈診) 및 복진(腹診)</strong>: 오장육부의 기혈 허실(氣血虛實)과 담음(痰飮), 어혈, 화기(火氣)의 울체를 정밀 평가합니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">4. 1:1 맞춤 한방 치료: 자생력(自生力) 회복 솔루션</h3>
<p>단순히 몸을 억지로 각성시키는 카페인이나 임시 진정제에 의존해서는 신경계 회복이 불가능합니다.</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
  <li><strong>체질 맞춤 탕약 처방</strong>: 뇌 신경계의 과열된 열을 내리고(청열안신), 고갈된 진액과 원기를 보강(보중익기, 사향공진단·건뇌단)하여 자연 수면과 활력을 되찾아줍니다.</li>
  <li><strong>경혈 자극 침구 및 약침 치료</strong>: 뇌 혈류 순환을 촉진하고 자율신경절의 긴장을 이완합니다.</li>
  <li><strong>두개천골 추나요법</strong>: 경추와 척추의 정렬을 바로잡아 뇌척수액 순환과 미주신경 경로를 원활하게 소통시킵니다.</li>
</ul>

<h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">5. 일상생활 속 자가 회복 가이드</h3>
<p>치료와 함께 규칙적인 기상 시간 유지, 햇볕 쬐기, 격렬한 유산소 운동보다는 가벼운 산책과 복식호흡 훈련을 병행하시면 신경계 안정에 큰 시너지를 낼 수 있습니다.</p>
<p class="font-bold text-[#2F5D50] mt-4">오래된 증상일수록 혼자 참지 마시고 내 몸의 자율신경 균형 상태를 정확히 진단받아 회복의 길을 찾으시기를 바랍니다.</p>

                </div>
              </article>


              <!-- [공황·불안 1] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-panic-1')">
                    공황발작과 자율신경계 과흥분은 어떤 관계일까요? 응급 4-7-8 호흡과 한방 치료 솔루션
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    숨이 턱 막히고 심장이 미친 듯이 뛰는 공황발작의 신경학적 기전과 편도체 흥분을 가라앉히는 단계별 한의학 치료 원리를 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 편도체 흥분 억제 • 호흡 이완 훈련 • 맞춤 한약</span>
                  <button type="button" onclick="openColumnModal('col-panic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-1" style="display:none;" 
                     data-title="공황발작과 자율신경계 과흥분은 어떤 관계일까요? 응급 4-7-8 호흡과 한방 치료 솔루션" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.04.15" 
                     data-summary="공황발작 시 교감신경 과흥분을 진정시키는 4-7-8 복식호흡과 뇌 변연계 안정 한방 치료 프로토콜을 상세히 설명합니다." 
                     data-tags="공황장애, 불안장애, 호흡이완법, 자율신경실조증, 한방신경정신과">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;지하철 안에서 갑자기 숨이 턱 막히고 심장이 미친 듯이 뛰어 당장이라도 죽을 것 같았습니다.&rdquo;<br>
                    &ldquo;응급실에 실려가서 심전도와 피검사를 다 해봤는데 아무 이상이 없다고 합니다. 도대체 왜 이런 걸까요?&rdquo;
                  </blockquote>

                  <p>진료실에서 공황장애 환자분들을 뵐 때 가장 많이 듣는 절박한 호소입니다. 응급실에서는 "몸에는 이상이 없으니 신경안정제를 드시라"고 하지만, 환자 본인에게는 생명의 위협을 느낄 정도의 극심한 공포입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 공황발작의 신경학적 메커니즘</h3>
                  <p>공황발작은 심장이나 폐의 기질적 질환이 아닙니다. 뇌의 정서와 공포를 담당하는 **변연계(편도체, Amygdala)**가 오작동하여 발생합니다.</p>
                  <p>실제로는 생명의 위협이 없는 평범한 상황(지하철, 엘리베이터, 운전 중, 강의실 등)임에도 불구하고, 뇌의 경보 장치가 오작동하여 **교감신경계를 폭발적으로 흥분**시키는 것입니다. 이로 인해 아드레날린이 혈액으로 쏟아져 나오며 심장 박동 급상승, 혈관 수축, 과호흡, 어지럼증, 손발 저림과 식은땀이 동반됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 발작 순간 교감신경을 진정시키는 응급 4-7-8 호흡법</h3>
                  <p>공황발작이 시작될 때 과호흡(Hyperventilation)을 방치하면 혈중 이산화탄소 농도가 급격히 떨어져 어지럼증과 질식감이 악화됩니다. 이때 **미주신경(부교감신경)**을 강제로 자극하여 심장 박동을 늦추는 호흡이 필수적입니다.</p>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>4초간</strong> 코로 천천히 깊게 숨을 들이마십니다. (배를 풍선처럼 부풀립니다)</li>
                    <li><strong>7초간</strong> 숨을 멈추고 뇌에 산소가 공급될 시간을 줍니다.</li>
                    <li><strong>8초간</strong> 입으로 촛불을 끄듯 가늘고 길게 숨을 내쉽니다.</li>
                  </ul>
                  <p>이 과정을 4~5회 반복하면 뇌의 편도체에 "지금은 안전하다"는 신호가 전달되어 발작의 지속 시간을 획기적으로 줄일 수 있습니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 3단계 근본 한방 치료 프로토콜</h3>
                  <p>신경안정제는 급할 때 증상을 억누르는 효과가 있지만, 장기적으로 복용할 경우 뇌 스스로 긴장을 조절하는 능력이 약화될 수 있습니다. 해아림한의원 인천부평점은 뇌와 자율신경계의 자생력을 키우는 치료를 지향합니다.</p>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>1단계 (뇌 신경계 안정)</strong>: 심비양허(心脾兩虛), 간기울결(肝氣鬱結)을 다스리는 맞춤 탕전으로 뇌 신경전달물질의 균형을 맞추고 교감신경의 과각성을 낮춥니다.</li>
                    <li><strong>2단계 (자율신경 순환 개선)</strong>: 전중혈, 신문혈, 백회혈 침구 치료와 약침 요법을 통해 가슴의 뭉친 화기(火氣)를 내리고 심장 혈류를 안정화합니다.</li>
                    <li><strong>3단계 (두개천골 추나요법 & 재발 방지)</strong>: 경추 정렬과 뇌척수액 순환을 원활하게 하여 자율신경계의 시소 밸런스를 바로잡습니다.</li>
                  </ul>

                  <p class="font-bold text-[#2F5D50] mt-4">공황장애는 조기에 정확한 원인을 찾아 치료하면 반드시 완치될 수 있는 질환입니다. 두려워하지 마시고 편안하게 상담을 받아보세요.</p>
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
                    &ldquo;또 발작이 오면 어쩌지?&rdquo; 예기불안이 일상을 잠식하는 이유와 극복법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    발작이 없는 시간에도 끊임없이 찾아오는 예기불안의 악순환 고리와 뇌 해마 부위의 공포 기억을 지우는 한방 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 예기불안 차단 • 안심정지 처방 • 자생력 회복</span>
                  <button type="button" onclick="openColumnModal('col-panic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-2" style="display:none;" 
                     data-title="&quot;또 발작이 오면 어쩌지?&quot; 예기불안이 일상을 잠식하는 이유와 극복법" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.28" 
                     data-summary="공황장애 환자를 가장 괴롭히는 24시간 예기불안의 원인과 뇌 변연계 안정 한방 솔루션을 설명합니다." 
                     data-tags="예기불안, 공황장애, 불안신경증, 한방신경정신과">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  
                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;지금은 발작이 없는데도 '혹시 운전하다가 또 공황이 오면 어떡하지?'라는 생각에 하루 종일 가슴이 조마조마합니다.&rdquo;<br>
                    &ldquo;외출하는 것 자체가 두려워지고 사람 많은 곳은 아예 피하게 됩니다.&rdquo;
                  </blockquote>

                  <p>공황장애 환자분들을 진료하면서 가장 안타까운 점은, 발작 그 자체의 고통보다 **발작이 없을 때도 24시간 머릿속을 지배하는 '예기불안(Anticipatory Anxiety)'** 때문에 삶의 반경이 좁아지고 대인관계와 사회생활이 마비된다는 사실입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 예기불안이 만성화되는 신경학적 이유</h3>
                  <p>첫 발작 때 겪었던 극한의 공포는 뇌의 기억 중추인 **해마(Hippocampus)**에 매우 강력한 트라우마로 저장됩니다. 이후 뇌의 편도체는 신체의 사소한 감각 변화(소화불량으로 인한 가슴 답답함, 더위로 인한 심박수 증가)조차 "공황의 재발 신호"로 왜곡하여 인식합니다.</p>
                  <p>이로 인해 몸은 24시간 방어 태세(교감신경 항진)를 유지하게 되고, 만성적인 피로와 목·어깨 결림, 두통, 소화불량이 끊이지 않게 됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 해아림의 예기불안 차단 한방 치료</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>안심정지(安心定志) 맞춤 탕전</strong>: 원지, 석창포, 산조인, 복신 등 뇌 신경을 안정시키고 해마의 공포 반응을 희석시키는 한약을 처방합니다.</li>
                    <li><strong>생기능 자기조절 훈련</strong>: 모니터를 통해 자신의 심박수와 피부 온도, 뇌파 반응을 직접 보며 스스로 긴장을 이완시키는 생체 되먹임(Biofeedback) 훈련을 진행합니다.</li>
                    <li><strong>교감신경 자극 차단 생활 지도</strong>: 커피(카페인), 에너지 음료, 고당질 식단 등 신경계를 흥분시키는 요소를 단계적으로 차단합니다.</li>
                  </ul>

                  <p class="font-bold text-[#2F5D50] mt-4">예기불안의 고리를 끊어내면 두려움 없이 원하는 곳 어디든 자유롭게 다닐 수 있는 일상이 다시 시작됩니다.</p>
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
                    시선 공포, 무대 공포, 발표 불안은 단순한 소심함이 아닌 심담허겁(心膽虛怯) 체질 질환입니다. 심장의 담력을 키우는 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 사회공포증 극복 • 심담강화 처방 • 무대불안</span>
                  <button type="button" onclick="openColumnModal('col-panic-3')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-panic-3" style="display:none;" 
                     data-title="발표할 때 목소리가 떨리고 심장이 쿵쾅거리는 사회공포증, 체질별 한방 치료" 
                     data-category="공황 · 불안장애" 
                     data-date="2026.03.10" 
                     data-summary="사회공포증과 발표불안을 유발하는 심담허겁 체질의 원인과 자율신경 긴장을 완화하는 한방 솔루션을 설명합니다." 
                     data-tags="사회공포증, 발표불안, 무대공포증, 체질개선">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
                  
                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;회사 회의 시간이나 팀 발표 때만 되면 얼굴이 빨개지고 목소리가 염소처럼 떨립니다.&rdquo;<br>
                    &ldquo;남들이 나를 비웃거나 이상하게 볼까 봐 사람 눈을 쳐다보기가 너무 두렵습니다.&rdquo;
                  </blockquote>

                  <p>많은 분들이 사회공포증(Social Phobia)이나 무대 불안을 '내 성격이 소심하고 멘탈이 약해서'라고 자책하십니다. 하지만 이는 의지나 성격의 문제가 아니라 **자율신경계 긴장 조절 장애**입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 한의학에서 바라보는 사회공포증: '심담허겁(心膽虛怯)'</h3>
                  <p>한의학에서는 심장(心)과 담(膽, 쓸개)의 기운이 허약하여 외부의 사소한 자극이나 타인의 시선에 심장이 쿵쾅거리고 기운이 빠지는 상태를 '심담허겁'이라 진단합니다.</p>
                  <p>교감신경이 급격히 치솟으면서 인두와 성대 근육이 수축되어 목소리가 떨리고, 말초 모세혈관이 확장되어 안면홍조가 나타나는 것입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 체질별 맞춤 한방 치료 프로세스</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>온담탕(溫膽湯) 가감방</strong>: 심장의 담력을 강화하고 담음(痰飮)과 화기를 내려 긴장된 상황에서도 심장 박동이 일정하게 유지되도록 돕습니다.</li>
                    <li><strong>이침(耳針) 및 경혈 자극 침 요법</strong>: 교감신경절 흥분을 직접 가라앉히는 이침과 내관혈, 신문혈 자극으로 신체 떨림을 억제합니다.</li>
                  </ul>
                  <p class="font-bold text-[#2F5D50] mt-4">심장의 힘을 보강하면 낯선 사람들 앞에서도 당당하고 편안하게 자신의 생각을 표현할 수 있습니다.</p>
                </div>
              </article>

              <!-- [자율신경 1: 메인 벤치마크 심층 칼럼] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-1')">
                    만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    자율신경계 기능 저하가 오래 지속되면 두근거림이나 불면뿐 아니라 만성적인 피로와 무기력감이 주된 증상으로 나타납니다. 스트레스 적응 3단계와 회복 원리를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 한스셀리에 3단계 • 만성피로 • HRV 검사</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-1" style="display:none;" 
                     data-title="만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.18" 
                     data-summary="자율신경계 기능 저하가 만성화되며 신체 에너지가 소진되는 기전과 한스 셀리에 3단계 모델, 한의학적 자생력 회복 치료를 다룹니다." 
                     data-tags="만성피로, 자율신경실조증, 한스셀리에, HRV검사, 체질맞춤한약">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;종합검진에서는 간수치도 정상이고 아무 이상이 없다는데 왜 매일 아침 몸이 물에 젖은 솜처럼 무거울까요?&rdquo;<br>
                    &ldquo;주말에 12시간씩 잠을 자도 피로가 전혀 풀리지 않고 머리가 안개 낀 것처럼 멍합니다(브레인포그).&rdquo;
                  </blockquote>

                  <p>자율신경계 기능 저하는 초기에는 흔히 두근거림, 불안, 불면처럼 몸이 과도하게 긴장된 상태의 증상으로 시작됩니다. 그러나 이러한 상태가 오래 지속되고 만성화되면 증상의 양상이 완전히 달라집니다.</p>
                  <p>몸을 깨우고 쉬게 하는 조절 능력과 신체 회복력이 함께 고갈되면서, **만성적인 피로와 무기력감, 전신 통증**이 가장 주된 증상으로 자리잡게 됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 자율신경계 기능이 떨어지면 왜 피곤할까요?</h3>
                  <p>자율신경계는 심장 박동, 혈압, 호흡, 소화, 체온 조절, 수면처럼 우리가 의식적으로 조절하기 어려운 체내 모든 생명 활동을 24시간 자동으로 관리합니다.</p>
                  <p>낮에는 필요한 만큼 교감신경이 활성화되어 뇌와 근육에 혈액을 공급하고, 밤에는 부교감신경이 활성화되어 긴장을 풀고 깊은 잠을 통해 에너지를 충전해야 합니다. 그러나 조절 기능이 저하되면 낮에는 필요한 만큼 각성되지 않아 머리가 멍하고 기운이 없으며, 밤에는 긴장이 충분히 풀리지 않아 깊은 잠을 자지 못합니다. 결국 **'자고 일어나도 충전되지 않는 악순환'**이 반복되는 것입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 긴장에서 소진으로 이어지는 3단계 (한스 셀리에 적응 모형)</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>1단계 (경고 반응기)</strong>: 스트레스 초기에는 교감신경이 과도하게 흥분합니다. 쉽게 긴장하고, 가슴이 두근거리며, 잠이 얕아지고 소화가 불편해집니다.</li>
                    <li><strong>2단계 (저항기)</strong>: 스트레스가 계속되어도 겉으로는 일상생활을 유지합니다. 그러나 몸 내부에서는 긴장 상태를 버티기 위해 코르티솔과 에너지가 지속적으로 소모됩니다.</li>
                    <li><strong>3단계 (소진기 / 탈진)</strong>: 충분한 휴식 없이 버티는 시간이 길어지면 신체의 적응 능력이 완전히 바닥납니다. 이때는 가슴 두근거림보다 <em>피로, 무기력, 집중력 저하, 브레인포그, 근육통, 소화불량, 어지럼증</em>이 동시에 쏟아져 나옵니다.</li>
                  </ul>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 정밀 검사와 한의학적 치료</h3>
                  <p>만성 피로를 치료할 때 단순히 고카페인 음료나 비타민제처럼 몸을 억지로 각성시키는 방법은 배터리가 0%인 스마트폰에 과전압을 주는 것과 같아 신경계를 더욱 손상시킵니다.</p>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>심박변이도(HRV) 검사 & 맥진·복진</strong>: 자율신경계의 총 활성도와 교감-부교감 밸런스를 측정하고, 오장육부의 허실을 정밀 감별합니다.</li>
                    <li><strong>체질 맞춤 보양·안신 탕약</strong>: 고갈된 신정(腎精)과 기혈을 채워주고(사향공진단, 보중익기탕), 뇌 신경계의 열을 식혀 자연스러운 에너지 생성을 돕습니다.</li>
                    <li><strong>두개천골 추나요법 & 침구 치료</strong>: 뇌척수액 순환을 정상화하고 뇌 혈류를 개선하여 머리의 멍함을 맑게 걷어냅니다.</li>
                  </ul>

                  <p class="font-bold text-[#2F5D50] mt-4">오래된 피로는 쉬지 못해 생긴 병이 아니라, 몸의 조절 능력이 고장 난 신호입니다. 정확한 한방 진단을 통해 회복의 첫걸음을 떼어보세요.</p>
                </div>
              </article>

              <!-- [자율신경 2: 미주신경성 실신] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-autonomic-2')">
                    출퇴근길 지하철에서 핑 돌고 쓰러지는 미주신경성 실신, 전조증상과 한방 치료법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    갑작스러운 혈압 저하와 뇌 혈류 부족으로 의식을 잃는 미주신경성 실신의 발생 기전과 혈관 탄력 강화 한방 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 미주신경실신 • 기립성 어지럼증 • 혈류 순환</span>
                  <button type="button" onclick="openColumnModal('col-autonomic-2')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-autonomic-2" style="display:none;" 
                     data-title="출퇴근길 지하철에서 핑 돌고 쓰러지는 미주신경성 실신, 전조증상과 한방 치료법" 
                     data-category="자율신경 · 실신/어지럼증" 
                     data-date="2026.01.05" 
                     data-summary="미주신경성 실신의 전조 증상 대처법과 심비양허 체질 개선 및 혈관 탄력을 높이는 한방 치료를 다룹니다." 
                     data-tags="미주신경실신, 기립성어지럼증, 자율신경검사, 혈류개선">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;만원 지하철에서 서 있는데 갑자기 속이 울렁거리고 식은땀이 비 오듯 쏟아지더니 눈앞이 캄캄해지며 바닥에 주저앉았습니다.&rdquo;<br>
                    &ldquo;피검사와 뇌 MRI는 다 정상이라는데 언제 또 쓰러질지 몰라 외출하기가 겁이 납니다.&rdquo;
                  </blockquote>

                  <p>이는 **미주신경성 실신(Vasovagal Syncope)**의 가장 전형적인 사례입니다. 실신 자체도 위험하지만, 쓰러질 때 머리나 안면부에 2차 외상을 입거나 공공장소에서의 공포감으로 대인기피증까지 번지는 경우가 많습니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 미주신경성 실신이 일어나는 병리 기전</h3>
                  <p>피로, 탈수, 밀폐된 공간의 답답함, 극심한 긴장 등의 자극을 받으면 부교감신경(미주신경)이 비정상적으로 과민하게 반응합니다.</p>
                  <p>그 결과 심장 박동수가 급격히 느려지고 하체 말초 혈관이 비정상적으로 확장되면서, 혈액이 하체로 쏠려 **뇌로 공급되는 혈류량이 순간적으로 급감**하여 뇌가 셧다운(의식 소실)되는 것입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 전조 증상 발생 시 골든타임 응급 수칙</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li>하품이 계속 나고, 속이 메스꺼우며 시야가 좁아질 때는 <strong>체면을 차리지 말고 즉시 바닥에 주저앉거나 누우세요.</strong></li>
                    <li>다리를 꼬고 양 허벅지와 엉덩이 근육을 강하게 쥐어짜는 '근육 압박법'으로 하체의 혈액을 뇌로 강하게 밀어 올립니다.</li>
                  </ul>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 혈관 탄력 강화 한방 치료</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>심장·비장 강화 한약</strong>: 황기, 당귀, 인삼, 백출 등 기혈을 보강하여 혈관 내피세포의 수축 탄력을 회복시키는 맞춤 처방.</li>
                    <li><strong>경추 교정 추나요법</strong>: 경동맥과 뇌 혈류 순환 경로의 압박을 해소합니다.</li>
                  </ul>
                </div>
              </article>

              <!-- [소아 틱장애 1: 부모 코칭 심층 칼럼] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-tic-1')">
                    아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 뇌 기저핵 원인과 부모 양육법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    틱 증상은 아이의 나쁜 버릇이 아닙니다. 뇌 기저핵의 운동 억제 회로 미성숙 원인과 부모의 현명한 대처 가이드를 제시합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 뇌 기저핵 발달 • 소아 한방 치료 • 부모 코칭</span>
                  <button type="button" onclick="openColumnModal('col-tic-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-tic-1" style="display:none;" 
                     data-title="아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 뇌 기저핵 원인과 부모 양육법" 
                     data-category="소아 틱장애 · ADHD" 
                     data-date="2025.11.25" 
                     data-summary="소아 틱장애의 신경학적 발병 원인과 부모의 올바른 양육 태도, 순한 천연 한약 치료 원리를 상세히 설명합니다." 
                     data-tags="소아틱장애, 틱증상, 뚜렛증후군, 부모양육법, 소아두뇌한의원">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;아이가 자꾸 눈을 심하게 깜빡이고 '음음' 소리를 내서 '참아봐라, 하지 마라'고 혼을 냈더니 증상이 더 심해졌습니다.&rdquo;<br>
                    &ldquo;혹시 이게 평생 가는 뚜렛증후군이 될까 봐 밤마다 가슴이 무너집니다.&rdquo;
                  </blockquote>

                  <p>진료실에서 아이 손을 잡고 눈물을 흘리시는 부모님들을 만날 때마다 제가 가장 먼저 강조해 드리는 말씀은 **"어머님, 아버님의 잘못도 아니고 아이의 나쁜 버릇도 아닙니다"**라는 것입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 틱장애의 신경학적 원인: 뇌 기저핵의 미성숙</h3>
                  <p>우리의 뇌 속 **기저핵(Basal Ganglia)**은 몸에서 일어나는 수많은 운동 신호 중 불필요한 움직임을 걸러내고 억제하는 정밀 필터 역할을 합니다.</p>
                  <p>틱장애는 이 기저핵의 운동 억제 회로가 아직 완전히 발달하지 않아, 억제되지 못한 신호가 눈 깜빡임, 코 찡긋거림, 고개 꺾기, 헛기침(음성틱) 형태로 밖으로 튀어나오는 불수의적(의지와 무관한) 반응입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 부모님이 반드시 지켜야 할 3대 양육 수칙</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>절대 지적하거나 나무라지 마세요</strong>: 지적을 받으면 아이는 틱을 참으려 애쓰고, 이로 인해 뇌 기저핵에 극심한 긴장성 압력이 쌓여 나중에 폭발적으로 증상이 악화됩니다.</li>
                    <li><strong>틱 증상을 모르는 척 무시해 주세요</strong>: 틱에 집중하지 말고 아이가 좋아하는 놀이나 대화로 자연스럽게 주의를 전환시켜 줍니다.</li>
                    <li><strong>스마트폰과 자극적 미디어를 엄격히 제한하세요</strong>: 빠른 화면 전환과 게임의 시각적 자극은 뇌 도파민 회로를 과흥분시켜 틱을 악화시키는 주범입니다.</li>
                  </ul>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">3. 해아림의 순하고 안전한 소아 한방 치료</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>순한 천연 맞춤 한약</strong>: 성장기 아이의 뇌 발달을 저해하지 않고 간화(肝火)를 내리며 기저핵 신경망을 성숙시키는 천연 한약재 처방.</li>
                    <li><strong>무통 소아 자침 & 뜸 치료</strong>: 아프지 않은 무통 자침으로 두부 경혈을 자극하여 뇌 신경 이완을 유도합니다.</li>
                    <li><strong>시청지각 훈련 & 소뇌 훈련</strong>: 두뇌 좌우 밸런스를 바로잡는 통합 뇌 훈련을 병행합니다.</li>
                  </ul>

                  <p class="font-bold text-[#2F5D50] mt-4">부모님의 따뜻한 지지와 조기 한방 치료가 결합되면 아이의 두뇌는 건강하게 균형을 되찾을 수 있습니다.</p>
                </div>
              </article>

              <!-- [불면증 1: 심층 칼럼] -->
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
                    잠들기는 쉬우나 중간에 자주 깨거나 꿈이 많은 중도각성의 원인과 수면제 없이 뇌의 열을 내리는 한방 숙면 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 수면유지장애 • 허열 해소 • 델타파 유도</span>
                  <button type="button" onclick="openColumnModal('col-insomnia-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-insomnia-1" style="display:none;" 
                     data-title="새벽 2~3시에 자다 깨는 수면유지장애, 간(肝)과 심(心)의 허열(虛熱)을 다스려야 하는 이유" 
                     data-category="불면증 · 수면장애" 
                     data-date="2026.02.20" 
                     data-summary="새벽 중도각성과 다몽증의 한의학적 기전 및 뇌 과각성을 해소하는 숙면 치료 원리를 다룹니다." 
                     data-tags="불면증, 수면장애, 중도각성, 허열치료, 숙면한약">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;밤 11시에 누워 금방 잠들었는데, 새벽 2시만 되면 어김없이 눈이 번쩍 떠져서 아침까지 잠을 못 잡니다.&rdquo;<br>
                    &ldquo;꿈을 너무 많이 꾸고 가위눌림이 심해 자고 일어나도 개운한 날이 하루도 없습니다.&rdquo;
                  </blockquote>

                  <p>불면증은 단순히 '잠에 들기 힘든 증상(입면장애)'뿐 아니라, **'자다 깨어 다시 잠들지 못하는 수면유지장애(중도각성)'**와 **'악몽과 다몽증'**까지 포함하는 광범위한 신경계 피로 질환입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 한의학에서 보는 새벽 중도각성의 원인</h3>
                  <p>한의학의 자오유주(子午流注) 이론에 따르면, 새벽 1시부터 3시는 **간경(肝經)**의 기운이 가장 왕성해지는 시간입니다. 만성 스트레스와 피로로 간기(肝氣)가 뭉치고 심장에 허열(虛熱)이 뜨면, 뇌의 중심 체온이 떨어져야 하는 수면 주기에서 뇌 혈류가 과열되어 얕은 수면(REM)에서 깨어나게 됩니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 수면제 없이 뇌를 재우는 한방 치료법</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>청열안신(淸熱安神) 맞춤 한약</strong>: 산조인, 원지, 시호, 치자 등을 배합하여 심장과 간의 허열을 식히고 맑은 진액을 보충하여 깊은 서파 수면(Delta wave)을 유도합니다.</li>
                    <li><strong>두부 경혈 침구 치료</strong>: 백회, 신문, 안면혈 자극으로 뇌파 과각성을 억제합니다.</li>
                    <li><strong>상열하한(上熱下寒) 교정 족욕</strong>: 취침 2시간 전 40도 미온수 족욕으로 상체의 열을 발 쪽으로 끌어내립니다.</li>
                  </ul>
                </div>
              </article>

              <!-- [우울·스트레스 1: 화병 심층 칼럼] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition" onclick="openColumnModal('col-stress-1')">
                    가슴에 큰 돌을 얹은 듯한 화병(火病)과 매핵기(梅核氣), 울체된 기운을 소통시키는 한의학적 해법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    억울함과 분노를 억누르며 생기는 가슴 답답함, 목 이물감, 두통 등 다양한 신체화 증상을 치료하는 한방 솔루션을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 화병 치료 • 매핵기 해소 • 간기울결</span>
                  <button type="button" onclick="openColumnModal('col-stress-1')" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-book-open text-[10px]"></i>
                  </button>
                </div>
                <div id="data-col-stress-1" style="display:none;" 
                     data-title="가슴에 큰 돌을 얹은 듯한 화병(火病)과 매핵기(梅核氣), 울체된 기운을 소통시키는 한의학적 해법" 
                     data-category="우울증 · 화병/스트레스" 
                     data-date="2025.10.12" 
                     data-summary="억압된 분노로 인한 화병과 매핵기(목 이물감), 가슴 답답함을 치료하는 간기울결 해소 한방 솔루션을 제시합니다." 
                     data-tags="화병, 울화병, 매핵기, 스트레스성가슴답답함, 분심기음">
                  <p>안녕하세요. <strong>해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>

                  <blockquote class="bg-[#F2F7F4] border-l-4 border-l-[#2F5D50] p-4 rounded-r-xl my-4 text-[#3D4D47] text-sm leading-relaxed italic">
                    &ldquo;가슴 한가운데에 바위가 얹힌 것처럼 숨을 들이쉬기가 힘들고 한숨이 절로 나옵니다.&rdquo;<br>
                    &ldquo;목구멍에 매화 씨앗이 걸린 것처럼 침을 삼켜도 안 넘어가고 뱉어지지도 않습니다.&rdquo;
                  </blockquote>

                  <p>오랜 기간 갈등과 억울함, 분노를 표출하지 못하고 속으로 삭이며 살아오신 한국인 특유의 문화관련 질환 **화병(火病)**과 **매핵기(梅核氣)**의 전형적인 증상입니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">1. 화병의 신체화 기전: 간기울결(肝氣鬱結)</h3>
                  <p>기운이 온몸을 원활하게 흘러야 하는데 억눌린 감정으로 인해 기운이 명치와 가슴에 뭉쳐 정체됩니다. 뭉친 기운은 시간이 지나면서 열(火)로 변해 가슴을 답답하게 조이고, 목구멍 근육을 경련시켜 이물감을 만들며, 머리로 치솟아 편두통과 안면홍조를 일으킵니다.</p>

                  <h3 class="text-lg font-extrabold text-[#2F5D50] mt-6 mb-3 border-b border-[#DDE6E1] pb-2">2. 한방 치료 프로토콜</h3>
                  <ul class="list-disc pl-5 space-y-2 text-sm text-[#4E6159] my-3">
                    <li><strong>분심기음(分心氣飮) 및 시호청간탕 처방</strong>: 흉격에 뭉친 화기를 흩어버리고 기혈 순환을 소통시켜 가슴이 시원해지게 합니다.</li>
                    <li><strong>전중혈·단중혈 약침 및 온열 치료</strong>: 굳어진 흉골 부위 긴장을 풀어 심장 박동을 편안하게 만듭니다.</li>
                  </ul>
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
