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

          <!-- 2. 네이버 공식 블로그 연동 배너 -->
          <div class="heal-card-primary flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="space-y-2 text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03C75A] text-white text-xs font-bold">
                <i class="fa-solid fa-blog"></i>
                <span>NAVER OFFICIAL BLOG</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-extrabold text-white">해아림한의원 인천부평점 공식 블로그</h2>
              <p class="text-xs sm:text-sm text-[#DCE7E2]">
                매주 업데이트되는 질환별 최신 임상 치료 사례와 일상 속 힐링 가이드를 블로그에서 직접 확인해보세요.
              </p>
            </div>
            <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="heal-btn heal-btn-naver text-sm flex-shrink-0">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span>공식 블로그 바로가기</span>
            </a>
          </div>

          <!-- 3. 질환별 카테고리 필터 탭 (Interactive Tabs) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>질환별 칼럼 모아보기</span>
              </h2>
              <div class="text-xs text-[#68736E]">카테고리를 클릭하여 원하는 질환의 칼럼을 확인하세요.</div>
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

            <!-- 칼럼 카드 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [자동발행: 자율신경 · 실신/어지럼증 - 2026-08-21] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">2026-08-21 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    손발이 차갑고 식은땀이 나는 수족냉증과 자율신경실조증의 상관관계 - 원인 분석과 1:1 맞춤 한방 치료 솔루션
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    손발이 차갑고 식은땀이 나는 수족냉증과 자율신경실조증의 상관관계에 대한 한의학적 기전과 뇌 신경계·자율신경 균형을 회복하는 해아림한의원 인천부평점의 단계별 맞춤 치료법을 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경 • 맞춤한방치료 • 신경안정</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>


              <!-- [공황·불안 1] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    공황발작이 올 때 응급 대처법과 자율신경계 과흥분을 진정시키는 4-7-8 호흡법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    공황발작의 핵심 메커니즘은 교감신경의 급격한 과흥분과 과호흡입니다. 4초 들이마시고 7초 멈춘 뒤 8초간 내쉬는 복식호흡을 통해 미주신경을 자극하고 심장 박동을 안정시키는 응급 대처 요령과 근본 한방 치료법을 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 교감신경 흥분 억제 • 호흡 이완 훈련</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [공황·불안 2] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    "또 발작이 오면 어쩌지?" 예기불안의 악순환을 끊는 두뇌 변연계 안정 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    공황장애 환자를 가장 괴롭히는 것은 발작이 없을 때도 찾아오는 ‘예기불안’입니다. 뇌의 편도체와 해마 부위의 공포 기억 과활성을 진정시키고 신경전달물질의 자연스러운 분비를 돕는 1:1 맞춤 한약 처방의 원리를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 편도체 흥분 완화 • 예기불안 차단</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [공황·불안 3] -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    발표할 때 목소리가 떨리고 심장이 쿵쾅거리는 사회공포증, 체질별 한방 치료
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    시선 공포, 무대 공포, 발표 불안은 단순한 소심함이 아닌 자율신경계 긴장 불균형 질환입니다. 심담허겁(心膽虛怯) 체질을 개선하고 가슴 두근거림과 식은땀을 가라앉혀 자신감을 회복하는 방법을 알아봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 사회공포증 극복 • 심담강화 처방</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [불면증 1] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    새벽 2~3시에 자다 깨는 수면유지장애, 간(肝)과 심(心)의 허열(虛熱)을 다스려야 하는 이유
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    잠들기는 쉬우나 중간에 자주 깨거나 꿈이 많아 숙면을 취하지 못하는 증상은 만성 피로와 스트레스로 인해 체내 음혈(陰血)이 부족해지고 허열이 뜰 때 발생합니다. 수면제 없이 뇌의 열을 내리는 한방 숙면 치료법을 제시합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 수면유지장애 해결 • 뇌 과각성 해소</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [불면증 2] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    수면제 의존 없이 자연스러운 입면을 돕는 뇌파 안정 및 자생적 수면 리듬 회복법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    수면유도제를 장기 복용할 경우 낮 시간 멍함이나 내성 위험이 커질 수 있습니다. 뇌가 스스로 멜라토닌을 분비하고 델타파(깊은 수면파)를 형성할 수 있도록 돕는 한약과 생기능 조절 훈련의 중요성을 짚어봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 약물 내성 극복 • 자연 수면 유도</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [자율신경 1] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    원인 모를 어지럼증과 식은땀, 미주신경성 실신의 전조 증상과 자율신경 검사(HRV)
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    오래 서 있거나 사람이 많은 지하철에서 갑자기 눈앞이 캄캄해지고 쓰러지는 미주신경성 실신. 일시적인 혈관 확장과 뇌 혈류 부족을 유발하는 자율신경실조증의 원인과 혈관 탄력성을 키우는 한방 치료법을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 미주신경실신 예방 • 혈류 순환 촉진</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [자율신경 2] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    가슴 답답함, 만성 소화불량, 체온 조절 장애를 동반하는 자율신경실조증 총정리
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    내과나 이비인후과에서 "이상 없다"는 진단을 받았음에도 몸 전체가 아프고 피로하다면 자율신경실조증을 의심해야 합니다. 교감-부교감신경의 시소 균형을 바로잡는 심신 통합 치료 프로토콜을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경실조증 정밀 진단 • 심신 통합 치료</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [자율신경 3] -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 · 실신/어지럼증</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    손발 다한증과 상열감, 교감신경의 항진을 가라앉히는 체질별 한방 처방
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    긴장하거나 스트레스를 받으면 손발에 땀이 흥건해지고 얼굴로 열이 치솟는 다한증. 땀샘을 억지로 막는 대신 뇌의 열과 교감신경의 긴장을 완화하여 땀 분비를 정상화하는 한방 원리를 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 다한증 근본 개선 • 상열하한 해소</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [소아 틱장애 1] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    아이 눈 깜빡임과 헛기침 틱, 무조건 참으라고 혼내면 악화되는 이유와 올바른 부모 대처법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    틱 증상은 아이의 나쁜 버릇이 아니라 뇌 기저핵의 운동 억제 기능 미숙으로 발생하는 불수의적 반응입니다. 지적과 질책 대신 두뇌 신경계의 긴장을 풀어주는 양육 환경 조성법과 순한 맞춤 한약 치료를 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 틱장애 부모 양육법 • 기저핵 발달 지원</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [소아 틱장애 2] -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아 틱장애 · ADHD</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    산만하고 충동적인 아이 ADHD, 전두엽 억제 기능을 강화하는 두뇌 훈련 프로그램
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    주의력 결핍과 과잉행동(ADHD)은 뇌 전두엽의 실행 기능 및 신경전달물질의 불균형에서 비롯됩니다. 아이의 뇌 성장을 저해하지 않는 천연 총명 한약과 시청지각·소뇌기저핵 훈련의 시너지 효과를 분석합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 전두엽 기능 강화 • 안전한 소아 한방 치료</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [우울·스트레스 1] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    가슴에 큰 돌을 얹은 듯한 화병(火病), 울체된 기운을 소통시키는 한의학적 해법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    억울함과 분노를 억누르며 생기는 화병은 가슴 답답함, 목 이물감(매핵기), 두통 등 다양한 신체화 증상으로 나타납니다. 간기울결(肝氣鬱結)을 풀고 심장의 열을 내려 마음의 응어리를 풀어주는 한방 치료법을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 화병 가슴 답답함 해소 • 매핵기 치료</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

              <!-- [우울·스트레스 2] -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병/스트레스</span>
                    <span class="text-xs text-[#68736E]">권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug">
                    만성 번아웃 증후군과 무기력증, 신정(腎精)과 기혈(氣血)을 보강하여 활력을 되찾는 법
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    현대 직장인과 수험생을 위협하는 번아웃 증후군은 뇌의 에너지가 완전히 고갈된 상태입니다. 항우울제에만 의존하지 않고 체내 근본 원기를 북돋아 자생적 활력과 맑은 집중력을 되찾는 공진단·건뇌단 처방의 역할을 짚어봅니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 번아웃 극복 • 원기 보강 한약</span>
                  <a href="https://blog.naver.com/s72x6o8cv" target="_blank" rel="noopener" class="text-xs font-bold text-[#2F5D50] hover:underline">상세보기 →</a>
                </div>
              </article>

            </div>
          </div>

          <!-- JavaScript 카테고리 실시간 필터링 스크립트 & 탭 스타일 -->
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
              // 1. 탭 활성화 클래스 변경
              var tabs = document.querySelectorAll('.column-tab-btn');
              tabs.forEach(function(t) {
                t.classList.remove('active-tab');
              });
              btn.classList.add('active-tab');

              // 2. 카드 필터링
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
