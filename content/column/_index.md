---
title: "건강 칼럼"
linkTitle: "건강 칼럼"
summary: "인천 부평, 구월동, 송도, 부천, 시흥, 청라 질환별 권형근 대표원장의 심층 건강 의학 칼럼"
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
              권형근 대표원장(한방침구과 전문의)이 임상 현장에서 직접 집필하는 6대 진료 분야별 병리 기전, 정밀 진단 및 근본 자생력 회복 가이드입니다.
            </p>
          </div>

          <!-- 2. 질환별 카테고리 필터 탭 (동적 개수 & 페이지 분할 지원) -->
          <div class="space-y-8" id="column-list-section">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>6대 핵심 진료 분야별 전문 칼럼</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하시면 해당 칼럼의 상세 전문 페이지로 이동합니다.</div>
            </div>

            <!-- 탭 버튼 목록 (동적 개수 반영) -->
            <div class="flex flex-wrap gap-2 pb-2" id="column-category-tabs">
              <button onclick="filterColumn('all', this)" class="column-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80" id="tab-count-all">(59)</span>
              </button>
              <button onclick="filterColumn('panic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80" id="tab-count-panic">(11)</span>
              </button>
              <button onclick="filterColumn('autonomic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80" id="tab-count-autonomic">(10)</span>
              </button>
              <button onclick="filterColumn('insomnia', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80" id="tab-count-insomnia">(11)</span>
              </button>
              <button onclick="filterColumn('tic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80" id="tab-count-tic">(10)</span>
              </button>
              <button onclick="filterColumn('stress', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80" id="tab-count-stress">(9)</span>
              </button>
              <button onclick="filterColumn('somatic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80" id="tab-count-somatic">(8)</span>
              </button>
            </div>

            <!-- 칼럼 카드 그리드 (페이지별 8개씩 분할 노출) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]" id="column-grid">

              <!-- [칼럼 #1 | 불면증 · 수면장애] 악몽과 가위눌림, [부천 상동 불면증] 심비양허를 보강하여 깊은 델타파 숙면 유도 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-31 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-31-insomnia-6695/" class="hover:underline">
                      악몽과 가위눌림, [부천 상동 불면증] 심비양허를 보강하여 깊은 델타파 숙면 유도
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 부천 상동 생활권 환자를 위한 불면증 · 수면장애의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천 상동한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-31-insomnia-6695/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #2 | 공황 · 불안 & 강박증] [인천 부평한의원 공황] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-31 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-31-panic-6701/" class="hover:underline">
                      [인천 부평한의원 공황] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평 지역에서 공황 · 불안 & 강박증 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-31-panic-6701/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #3 | 자율신경 & 실신·어지럼증·이명] 앉았다 일어설 때 눈앞이 하얘지는 기립성 어지럼증과 자율신경 밸런스 회복 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-30 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-30-autonomic-4189/" class="hover:underline">
                      앉았다 일어설 때 눈앞이 하얘지는 기립성 어지럼증과 자율신경 밸런스 회복
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    자율신경 & 실신·어지럼증·이명 증상으로 고통받는 환자분들과 보호자분들을 위한 권형근 대표원장의 신경학적 원인 분석 및 근본 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경 • 자율신경치료</span>
                  <a href="/column/post-2026-08-30-autonomic-4189/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #4 | 신체화 & 담적·두통·턱관절] 시험이나 미팅 직전 배가 살살 아프고 가스 차는 과민성대장증후군 뇌-장 치료 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-30 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-30-somatic-2807/" class="hover:underline">
                      시험이나 미팅 직전 배가 살살 아프고 가스 차는 과민성대장증후군 뇌-장 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    신체화 & 담적·두통·턱관절 증상으로 고통받는 환자분들과 보호자분들을 위한 권형근 대표원장의 신경학적 원인 분석 및 근본 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 신체화 • 신체화치료</span>
                  <a href="/column/post-2026-08-30-somatic-2807/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #5 | 우울증 · 화병 & 번아웃] 갱년기 화병 및 자율신경 불균형, [부천 상동 우울증] 한의학적 원인과 관리법 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-30 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-30-stress-2894/" class="hover:underline">
                      갱년기 화병 및 자율신경 불균형, [부천 상동 우울증] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 부천 상동 생활권 환자를 위한 우울증 · 화병 & 번아웃의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천 상동한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-30-stress-2894/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #6 | 소아청소년 & 성인 ADHD·틱장애] [인천 부평한의원 소아청소년] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 발달과 NeuronFlex 두뇌훈련 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-30 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-30-tic-3362/" class="hover:underline">
                      [인천 부평한의원 소아청소년] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 발달과 NeuronFlex 두뇌훈련
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평 지역에서 소아청소년 & 성인 ADHD·틱장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-30-tic-3362/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #7 | 자율신경 & 실신·어지럼증·이명] 조용한 밤마다 더 커지는 귓속 삐 소리, 신경성 이명과 뇌명증 한방 치료 원리 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-autonomic-4560/" class="hover:underline">
                      조용한 밤마다 더 커지는 귓속 삐 소리, 신경성 이명과 뇌명증 한방 치료 원리
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    자율신경 & 실신·어지럼증·이명 증상으로 고통받는 환자분들과 보호자분들을 위한 권형근 대표원장의 신경학적 원인 분석 및 근본 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 자율신경 • 자율신경치료</span>
                  <a href="/column/post-2026-08-29-autonomic-4560/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #8 | 불면증 · 수면장애] 생체시계 정상화 및 수면 리듬, [인천 간석동 불면증] 한의학적 원인과 관리법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-insomnia-0836/" class="hover:underline">
                      생체시계 정상화 및 수면 리듬, [인천 간석동 불면증] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 인천 간석동 생활권 환자를 위한 불면증 · 수면장애의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 간석동한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-29-insomnia-0836/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #9 | 불면증 · 수면장애] 수면의 질 개선 및 델타파 유도, [인천 송도 불면증] 한의학적 원인과 관리법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-insomnia-8754/" class="hover:underline">
                      수면의 질 개선 및 델타파 유도, [인천 송도 불면증] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 인천 송도 생활권 환자를 위한 불면증 · 수면장애의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 송도한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-29-insomnia-8754/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #10 | 공황 · 불안 & 강박증] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, [인천 청라 공황] 공황발작과 과호흡 응급 대처법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-panic-4630/" class="hover:underline">
                      갑자기 숨이 턱 막히고 죽을 것 같은 공포, [인천 청라 공황] 공황발작과 과호흡 응급 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 인천 청라 생활권 환자를 위한 공황 · 불안 & 강박증의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 청라한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-29-panic-4630/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #11 | 신체화 & 담적·두통·턱관절] 경추성 긴장성 두통 및 후두신경통, [시흥 은계 신체화] 한의학적 원인과 관리법 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-somatic-2566/" class="hover:underline">
                      경추성 긴장성 두통 및 후두신경통, [시흥 은계 신체화] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 시흥 은계 생활권 환자를 위한 신체화 & 담적·두통·턱관절의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥 은계한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-29-somatic-2566/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #12 | 우울증 · 화병 & 번아웃] 출산 후 무기력증과 산후우울증, [인천 간석동 우울증] 기혈 보강과 신경 안정 통합 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-stress-3243/" class="hover:underline">
                      출산 후 무기력증과 산후우울증, [인천 간석동 우울증] 기혈 보강과 신경 안정 통합 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 인천 간석동 생활권 환자를 위한 우울증 · 화병 & 번아웃의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 간석동한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-29-stress-3243/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #13 | 소아청소년 & 성인 ADHD·틱장애] [시흥 은계한의원 소아청소년] 스마트폰 과의존과 주의력 저하를 겪는 아이를 위한 감각통합 두뇌 솔루션 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-29-tic-2993/" class="hover:underline">
                      [시흥 은계한의원 소아청소년] 스마트폰 과의존과 주의력 저하를 겪는 아이를 위한 감각통합 두뇌 솔루션
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 은계 지역에서 소아청소년 & 성인 ADHD·틱장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥 은계한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-29-tic-2993/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #14 | 공황 · 불안 & 강박증] [인천 부평한의원 공황] 사소한 일에도 최악을 상상하는 범불안장애와 자율신경 과흥분 조절 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-28 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-28-panic-9755/" class="hover:underline">
                      [인천 부평한의원 공황] 사소한 일에도 최악을 상상하는 범불안장애와 자율신경 과흥분 조절
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평 지역에서 공황 · 불안 & 강박증 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-28-panic-9755/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #15 | 불면증 · 수면장애] [부천 신경정신과] 불면증 치료, 수면제 내성 없이 뇌 자생력으로 깊은 잠드는 법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/bucheon-neuropsychiatry-insomnia/" class="hover:underline">
                      [부천 신경정신과] 불면증 치료, 수면제 내성 없이 뇌 자생력으로 깊은 잠드는 법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천, 중동, 상동, 신중동 지역에서 불면증과 수면장애로 신경정신과 및 한의원 치료를 고민하는 분들을 위한 뇌신경계 원인 분석과 비약물적 1:1 맞춤 수면 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천신경정신과 • 부천불면증</span>
                  <a href="/column/bucheon-neuropsychiatry-insomnia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #16 | 자율신경 & 실신·어지럼증·이명] [인천 서구 어지럼증] 이비인후과·뇌 MRI 정상인데 붕 뜨고 흔들리는 어지럼증, 자율신경과 상부경추 한방 솔루션 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/incheon-seogu-dizziness/" class="hover:underline">
                      [인천 서구 어지럼증] 이비인후과·뇌 MRI 정상인데 붕 뜨고 흔들리는 어지럼증, 자율신경과 상부경추 한방 솔루션
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 서구(청라, 검단, 루원시티, 가정동) 지역에서 귀·뇌 검사상 이상 없는 비회전성 만성 어지럼증, 브레인포그, 이석증 후유증(PPPD)의 상부 경추 정렬 및 1:1 체질 맞춤 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천서구어지럼증 • 청라어지럼증한의원</span>
                  <a href="/column/incheon-seogu-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #17 | 공황 · 불안 & 강박증] [인천 계양구 공황] 문 잠갔을까 끊임없이 의심되는 확인 강박사고의 뇌 회로 안정법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-26-panic-7447/" class="hover:underline">
                      [인천 계양구 공황] 문 잠갔을까 끊임없이 의심되는 확인 강박사고의 뇌 회로 안정법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 계양구 지역에서 공황 · 불안 & 강박증 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 계양구한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-26-panic-7447/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #18 | 신체화 & 담적·두통·턱관절] 이갈이·이악물기 및 교근 긴장, [인천 부평 신체화] 한의학적 원인과 관리법 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-26-somatic-6467/" class="hover:underline">
                      이갈이·이악물기 및 교근 긴장, [인천 부평 신체화] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 인천 부평 생활권 환자를 위한 신체화 & 담적·두통·턱관절의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-26-somatic-6467/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #19 | 우울증 · 화병 & 번아웃] [인천 청라 우울증] 매사 무기력하고 의욕이 사라진 만성 우울감, 장-뇌 축 개선과 해울 한방 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-26-stress-4629/" class="hover:underline">
                      [인천 청라 우울증] 매사 무기력하고 의욕이 사라진 만성 우울감, 장-뇌 축 개선과 해울 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 청라 지역에서 우울증 · 화병 & 번아웃 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 청라한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-26-stress-4629/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #20 | 소아청소년 & 성인 ADHD·틱장애] 성인 ADHD 실행기능장애, [김포 검단 소아청소년] 한의학적 원인과 관리법 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-26 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-26-tic-3652/" class="hover:underline">
                      성인 ADHD 실행기능장애, [김포 검단 소아청소년] 한의학적 원인과 관리법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    환자분들의 생생한 고통과 호소에 공감하며, 김포 검단 생활권 환자를 위한 소아청소년 & 성인 ADHD·틱장애의 신경학적 원인과 한의학적 관리법을 정리했습니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 김포 검단한의원 • 인천한의원</span>
                  <a href="/column/post-2026-08-26-tic-3652/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #21 | 불면증 · 수면장애] [인천 구월동 불면증] 잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 DMN 과각성 해소법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-25 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-25-insomnia-7755/" class="hover:underline">
                      [인천 구월동 불면증] 잠들기까지 1시간 이상 뒤척이는 입면장애와 뇌 DMN 과각성 해소법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동 지역에서 불면증 · 수면장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 구월동한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-25-insomnia-7755/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #22 | 공황 · 불안 & 강박증] [인천 부평 공황] 발표할 때 목소리 떨림과 심장 두근거림, 사회공포증 한의학 솔루션 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-25 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-25-panic-7651/" class="hover:underline">
                      [인천 부평 공황] 발표할 때 목소리 떨림과 심장 두근거림, 사회공포증 한의학 솔루션
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평 지역에서 공황 · 불안 & 강박증 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-25-panic-7651/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #23 | 소아청소년 & 성인 ADHD·틱장애] [시흥 배곧 소아청소년] 청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-25 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-25-tic-0714/" class="hover:underline">
                      [시흥 배곧 소아청소년] 청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 배곧 지역에서 소아청소년 & 성인 ADHD·틱장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥 배곧한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-25-tic-0714/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #24 | 자율신경 & 실신·어지럼증·이명] [인천 간석동 자율신경] 긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-24 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-24-autonomic-5560/" class="hover:underline">
                      [인천 간석동 자율신경] 긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 간석동 지역에서 자율신경 & 실신·어지럼증·이명 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 간석동한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-24-autonomic-5560/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #25 | 신체화 & 담적·두통·턱관절] [인천 영종도 신체화] 검사상 이상 없다는데 온몸이 아픈 신체화장애와 만성 신경성 두통의 해법 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-24 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-24-somatic-5391/" class="hover:underline">
                      [인천 영종도 신체화] 검사상 이상 없다는데 온몸이 아픈 신체화장애와 만성 신경성 두통의 해법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 영종도 지역에서 신체화 & 담적·두통·턱관절 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 영종도한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-24-somatic-5391/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #26 | 우울증 · 화병 & 번아웃] [김포 검단 우울증] 직장인·전문직 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-24 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-24-stress-6016/" class="hover:underline">
                      [김포 검단 우울증] 직장인·전문직 번아웃 증후군과 무기력증 회복, 사향공진단·건뇌단 요법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    김포 검단 지역에서 우울증 · 화병 & 번아웃 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 김포 검단한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-24-stress-6016/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #27 | 불면증 · 수면장애] [부천 중동 불면증] 수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-23 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-23-insomnia-1128/" class="hover:underline">
                      [부천 중동 불면증] 수면제 의존 없이 깊은 잠드는 법, 뇌파 안정과 자생적 수면 리듬
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 중동 지역에서 불면증 · 수면장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천 중동한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-23-insomnia-1128/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #28 | 공황 · 불안 & 강박증] [인천 계양구 공황] 지하철·엘리베이터 공포증과 광장공포증, 공간 지각 왜곡 극복법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-23 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-23-panic-0544/" class="hover:underline">
                      [인천 계양구 공황] 지하철·엘리베이터 공포증과 광장공포증, 공간 지각 왜곡 극복법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 계양구 지역에서 공황 · 불안 & 강박증 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 계양구한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-23-panic-0544/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #29 | 신체화 & 담적·두통·턱관절] [인천 송도 신체화] 위내시경은 정상인데 명치가 꽉 막히는 신경성 소화불량과 담적병(痰積病) -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-23 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-23-somatic-6267/" class="hover:underline">
                      [인천 송도 신체화] 위내시경은 정상인데 명치가 꽉 막히는 신경성 소화불량과 담적병(痰積病)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 송도 지역에서 신체화 & 담적·두통·턱관절 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 송도한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-23-somatic-6267/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #30 | 우울증 · 화병 & 번아웃] [인천 청라 우울증] 가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-23 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-23-stress-2497/" class="hover:underline">
                      [인천 청라 우울증] 가슴 답답함과 목 이물감(매핵기), 울화병을 다스리는 한의학적 치료법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 청라 지역에서 우울증 · 화병 & 번아웃 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 청라한의원 • 부평한의원</span>
                  <a href="/column/post-2026-08-23-stress-2497/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #31 | 자율신경 & 실신·어지럼증·이명] [인천 구월동 자율신경] 긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-22 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-22-autonomic-8984/" class="hover:underline">
                      [인천 구월동 자율신경] 긴장하면 손발에 땀 쏟아지는 수족다한증, 교감신경 긴장 완화 처방
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동, 간석동, 만수동, 부평 지역에서 긴장하거나 집중할 때 손발에 땀이 쏟아지는 수족다한증과 자율신경 과흥분의 신경학적 기전, SGB 성상신경절 약침 및 체질 맞춤 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 구월동자율신경 • 구월동수족다한증</span>
                  <a href="/column/post-2026-08-22-autonomic-8984/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #32 | 불면증 · 수면장애] [부천 상동 불면증] 새벽 3~4시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-22 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-22-insomnia-7730/" class="hover:underline">
                      [부천 상동 불면증] 새벽 3~4시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천시 상동, 중동, 신중동, 부평 지역에서 잠든 뒤 매일 새벽 3~4시만 되면 눈이 번쩍 떠져 다시 못 자는 수면유지장애(중도각성)의 신경학적 원인과 간·심장 허열 해소 한방 수면 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천불면증 • 부천상동불면증</span>
                  <a href="/column/post-2026-08-22-insomnia-7730/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #33 | 우울증 · 화병 & 번아웃] [시흥 배곧 우울증] 가슴 뻐근함과 신경성 두통, 신체화장애와 화병 한방 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-22 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-22-stress-7343/" class="hover:underline">
                      [시흥 배곧 우울증] 가슴 뻐근함과 신경성 두통, 신체화장애와 화병 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 배곧, 정왕동, 월곶, 부평 지역에서 병원 검사상 원인 없는 가슴 뻐근함, 목 이물감(매핵기), 신경성 두통 등 신체화장애와 화병의 뇌 신경학적 원인 및 1:1 맞춤 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥배곧우울증 • 시흥화병한의원</span>
                  <a href="/column/post-2026-08-22-stress-7343/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #34 | 소아청소년 & 성인 ADHD·틱장애] [부천 상동 청소년틱] 청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-22 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-22-tic-2206/" class="hover:underline">
                      [부천 상동 청소년틱] 청소년기 복합 틱장애와 자존감 회복, 두뇌 신경망 1:1 맞춤 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 상동, 중동, 부평, 시흥 지역 중·고등학생 및 수험생의 학업 스트레스, 시험 불안으로 재발하는 복합 운동틱·음성틱의 기저핵 과민 원인과 NeuronFlex 두뇌훈련 및 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천청소년틱 • 부천틱장애한의원</span>
                  <a href="/column/post-2026-08-22-tic-2206/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #35 | 자율신경 & 실신·어지럼증·이명] [인천 부평 자율신경] 자고 일어나도 천근만근 무거운 몸, 만성피로와 자율신경실조증의 신경학적 기전 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-fatigue/" class="hover:underline">
                      [인천 부평 자율신경] 자고 일어나도 천근만근 무거운 몸, 만성피로와 자율신경실조증의 신경학적 기전
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평, 부천, 구월동 지역에서 병원 검사상 이상 없으나 피로가 가시지 않는 자율신경실조증 환자를 위한 한스 셀리에 3단계 소진 모델과 SGB 자율신경 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평자율신경실조증 • 인천만성피로</span>
                  <a href="/column/autonomic-fatigue/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #36 | 소아청소년 & 성인 ADHD·틱장애] [인천 부평 소아틱] 왜 틱은 눈에서 시작해 코, 입, 목으로 내려갈까요? 소아 틱장애 진행 원리와 대처법 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-tic-disorder/" class="hover:underline">
                      [인천 부평 소아틱] 왜 틱은 눈에서 시작해 코, 입, 목으로 내려갈까요? 소아 틱장애 진행 원리와 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평, 부천, 구월동, 청라 등 인근 지역에서 소아 틱장애로 고심하는 부모님을 위한 권형근 원장의 기저핵 발달, FCST 턱관절·경추 균형 치료 및 양육 가이드
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평틱장애 • 인천소아틱장애</span>
                  <a href="/column/child-tic-disorder/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #37 | 공황 · 불안 & 강박증] [인천 부평 공황장애] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡의 신경학적 기전과 응급 대처법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/panic-disorder-breathing/" class="hover:underline">
                      [인천 부평 공황장애] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡의 신경학적 기전과 응급 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평, 부천, 구월동 지역에서 응급실 검사상 이상 없는 급성 공황발작의 편도체 과열 기전, 과호흡 뇌 혈류 저하를 막는 응급 4-7-8 호흡법 및 한방 시호가용골모려탕 치료 원리
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평공황장애 • 인천공황발작</span>
                  <a href="/column/panic-disorder-breathing/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #38 | 불면증 · 수면장애] [부천 중동 불면증] 누우면 잡생각이 꼬리를 물고 2시간씩 뒤척여요, 입면장애와 뇌 과각성 스위치 끄는 법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleep-onset-insomnia/" class="hover:underline">
                      [부천 중동 불면증] 누우면 잡생각이 꼬리를 물고 2시간씩 뒤척여요, 입면장애와 뇌 과각성 스위치 끄는 법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 중동, 신중동, 상동, 부평 지역에서 잠들기 전 뇌의 디폴트모드네트워크(DMN) 과열로 잠들지 못하는 입면장애 환자를 위한 뇌 상열감 해소 및 청뇌안신 한방 처방
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천입면장애 • 중동불면증한의원</span>
                  <a href="/column/sleep-onset-insomnia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #39 | 공황 · 불안 & 강박증] [부천 중동 불안장애] '또 발작 올까 봐 24시간 불안해요' 공황장애 예기불안과 뇌 편도체 안정법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/anticipatory-anxiety/" class="hover:underline">
                      [부천 중동 불안장애] '또 발작 올까 봐 24시간 불안해요' 공황장애 예기불안과 뇌 편도체 안정법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 중동, 신중동, 상동, 부평 지역에서 24시간 엄습하는 예기불안과 외출 공포의 뇌 편도체 과민 기전, 자율신경계 과흥분 차단 및 심담허겁 한방 치료 원리
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천불안장애 • 부천예기불안</span>
                  <a href="/column/anticipatory-anxiety/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #40 | 신체화 & 담적·두통·턱관절] [시흥 배곧 담적병] 위내시경은 정상인데 명치가 꽉 막히고 체해요, 신경성 소화불량과 담적병(痰積病) -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/damjeok-functional-dyspepsia/" class="hover:underline">
                      [시흥 배곧 담적병] 위내시경은 정상인데 명치가 꽉 막히고 체해요, 신경성 소화불량과 담적병(痰積病)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 배곧, 정왕동, 부평, 안산 지역에서 위장약으로 낫지 않는 만성 체기, 복부 팽만감, 잦은 트림, 두통을 유발하는 위장 외벽 담적 독소 제거 및 뇌-위장 신경 조절 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥담적병 • 배곧신경성소화불량</span>
                  <a href="/column/damjeok-functional-dyspepsia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #41 | 우울증 · 화병 & 번아웃] [인천 부평 화병클리닉] 가슴이 답답하고 목에 무언가 걸린 듯 뱉어지지 않아요, 화병과 매핵기(梅核氣)의 한의학적 해법 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/hwabyeong-maehaekgi/" class="hover:underline">
                      [인천 부평 화병클리닉] 가슴이 답답하고 목에 무언가 걸린 듯 뱉어지지 않아요, 화병과 매핵기(梅核氣)의 한의학적 해법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평, 부천, 구월동 지역에서 이비인후과 내시경상 이상 없으나 목 이물감, 가슴 답답함, 치밀어 오르는 열감으로 고통받는 화병·매핵기 환자를 위한 소간해울 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평화병한의원 • 인천매핵기</span>
                  <a href="/column/hwabyeong-maehaekgi/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #42 | 불면증 · 수면장애] [인천 부평 불면증] 새벽 3~4시만 되면 눈이 번쩍 떠져요, 자다 깨는 수면유지장애와 간·심장 허열 치료 원리 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/insomnia-sleep-maintenance/" class="hover:underline">
                      [인천 부평 불면증] 새벽 3~4시만 되면 눈이 번쩍 떠져요, 자다 깨는 수면유지장애와 간·심장 허열 치료 원리
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 부평, 부천, 구월동 지역에서 새벽 중도 각성으로 재입면에 실패하는 수면유지장애 환자를 위한 간열(肝熱)·심화(心火) 해소 및 뇌파 델타파 유도 한방 수면 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평불면증 • 인천수면유지장애</span>
                  <a href="/column/insomnia-sleep-maintenance/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #43 | 자율신경 & 실신·어지럼증·이명] [인천 구월동 실신어지럼] 출퇴근 지하철에서 눈앞이 캄캄해지고 핑 돌며 쓰러지는 미주신경성 실신의 전조 증상과 한방 치료 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vasovagal-syncope/" class="hover:underline">
                      [인천 구월동 실신어지럼] 출퇴근 지하철에서 눈앞이 캄캄해지고 핑 돌며 쓰러지는 미주신경성 실신의 전조 증상과 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동, 만수동, 부평, 송도 지역에서 지하철·버스에서 갑자기 식은땀이 나며 쓰러지는 미주신경성 실신과 기립성 어지럼증의 뇌 혈류 저하 기전 및 심비양허 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 구월동미주신경성실신 • 인천실신한의원</span>
                  <a href="/column/vasovagal-syncope/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #44 | 소아청소년 & 성인 ADHD·틱장애] [부천 상동 음성틱] 단순 비염인 줄 알았는데… 아이의 킁킁·음음 소리가 잠잘 때는 멈추는 이유 (음성 틱 & 뚜렛) -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vocal-tic-tourette/" class="hover:underline">
                      [부천 상동 음성틱] 단순 비염인 줄 알았는데… 아이의 킁킁·음음 소리가 잠잘 때는 멈추는 이유 (음성 틱 & 뚜렛)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 상동, 중동, 부평, 시흥 지역에서 비염 약으로 낫지 않는 헛기침, 킁킁거림, 음음 소리 음성 틱 기전과 뚜렛증후군 진행 차단 한방 치료 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천음성틱 • 부천틱장애한의원</span>
                  <a href="/column/vocal-tic-tourette/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #45 | 자율신경 & 실신·어지럼증·이명] [부천 상동 심계항진] 긴장하지 않아도 가슴이 쿵쾅거리고 손발에 땀이 쏟아지는 자율신경 과흥분과 다한증 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-palpitation-sweating/" class="hover:underline">
                      [부천 상동 심계항진] 긴장하지 않아도 가슴이 쿵쾅거리고 손발에 땀이 쏟아지는 자율신경 과흥분과 다한증
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 상동, 중동, 부평, 시흥 지역에서 특별한 이유 없이 가슴이 두근거리고 상열감과 수족다한증을 앓는 분들을 위한 교감신경 긴장 해소 및 시호가용골모려탕 처방 원리
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천심계항진 • 상동수족다한증</span>
                  <a href="/column/autonomic-palpitation-sweating/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #46 | 우울증 · 화병 & 번아웃] [부천 상동 번아웃] 매사 의욕이 없고 출근길만 되면 가슴이 턱 막혀요, 직장인 번아웃 증후군과 뇌 신경망 방전 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/burnout-somatization/" class="hover:underline">
                      [부천 상동 번아웃] 매사 의욕이 없고 출근길만 되면 가슴이 턱 막혀요, 직장인 번아웃 증후군과 뇌 신경망 방전
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부천 상동, 중동, 부평, 시흥 지역 직장인·전문직의 감정 고갈, 무기력증, 뇌 브레인포그, 부신 기능 저하를 회복시키는 공진단·건뇌단 요법 및 뇌 자생력 회복 가이드
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천번아웃 • 상동무기력증</span>
                  <a href="/column/burnout-somatization/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #47 | 소아청소년 & 성인 ADHD·틱장애] [인천 송도 ADHD] 우리 아이는 왜 알면서도 가만히 있지 못할까요? 집중력이 아닌 '뇌 브레이크' 미성숙입니다 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-adhd-concentration/" class="hover:underline">
                      [인천 송도 ADHD] 우리 아이는 왜 알면서도 가만히 있지 못할까요? 집중력이 아닌 '뇌 브레이크' 미성숙입니다
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 송도, 연수구, 부평, 청라 지역에서 소아 ADHD 주의산만, 충동성으로 고민하는 가정을 위한 전두엽 실행기능 결핍 원인과 NeuronFlex 뇌 자생력 강화 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 송도ADHD • 인천소아ADHD</span>
                  <a href="/column/child-adhd-concentration/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #48 | 공황 · 불안 & 강박증] [인천 구월동 광장공포] 만원 지하철, 터널, 엘리베이터에서 도망치고 싶은 공포, 광장공포증과 폐쇄공포증의 탈출구 기전 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/claustrophobia-agoraphobia/" class="hover:underline">
                      [인천 구월동 광장공포] 만원 지하철, 터널, 엘리베이터에서 도망치고 싶은 공포, 광장공포증과 폐쇄공포증의 탈출구 기전
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동, 간석동, 부평, 송도 지역에서 지하철·터널·엘리베이터 등 밀폐 공간에서 극도의 패닉을 느끼는 광장공포증·폐쇄공포증의 뇌 공간 지각 왜곡 및 한방 조절 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 구월동광장공포증 • 인천폐쇄공포증</span>
                  <a href="/column/claustrophobia-agoraphobia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #49 | 불면증 · 수면장애] [인천 송도 수면장애] 매일 밤 악몽과 가위눌림에 시달려 잠자기가 두려워요, 렘수면 행동장애와 심비양허 체질 극복 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/nightmare-sleep-paralysis/" class="hover:underline">
                      [인천 송도 수면장애] 매일 밤 악몽과 가위눌림에 시달려 잠자기가 두려워요, 렘수면 행동장애와 심비양허 체질 극복
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 송도, 연수구, 부평 지역에서 반복되는 악몽, 가위눌림, 수면 중 소리 지름의 렘수면 신경망 과민 원인과 심장·비장 기혈을 채우는 가미귀비탕 한방 안신 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 송도악몽치료 • 인천가위눌림</span>
                  <a href="/column/nightmare-sleep-paralysis/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #50 | 신체화 & 담적·두통·턱관절] [인천 계양 신체화장애] 검사엔 이상 없다는데 온몸이 아파요, 신경성 두통·어지럼·소화장애가 동반되는 신체화장애 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/stress-headache-digestion/" class="hover:underline">
                      [인천 계양 신체화장애] 검사엔 이상 없다는데 온몸이 아파요, 신경성 두통·어지럼·소화장애가 동반되는 신체화장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 계양구(계산동, 작전동), 부평, 부천 지역에서 스트레스가 신체 통증과 자율신경 이상으로 표출되는 신체화장애 환자를 위한 뇌 감각 과민 억제 및 맞춤 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 계양구신체화장애 • 인천신경성두통</span>
                  <a href="/column/stress-headache-digestion/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #51 | 자율신경 & 실신·어지럼증·이명] [인천 청라 어지럼증] 이비인후과·신경과 검사에도 이상 없는 어지럼증과 멍함, 상부 경추(C1-C2)와 추골동맥의 관계 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/cervicogenic-dizziness/" class="hover:underline">
                      [인천 청라 어지럼증] 이비인후과·신경과 검사에도 이상 없는 어지럼증과 멍함, 상부 경추(C1-C2)와 추골동맥의 관계
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 청라, 루원시티, 검단, 부평 지역에서 이석증 치료 후에도 남아있는 만성 어지럼증, 브레인포그, 경추성 두통의 상부 경추 정렬 및 추나·FCST 한방 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 청라어지럼증 • 인천경추성어지럼증</span>
                  <a href="/column/cervicogenic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #52 | 소아청소년 & 성인 ADHD·틱장애] [인천 청라 소아수면] 밤마다 비명 지르며 울고 깨는 우리 아이, 단순 성장통일까요? 소아 야경증과 수면 각성 장애 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-night-terror-anxiety/" class="hover:underline">
                      [인천 청라 소아수면] 밤마다 비명 지르며 울고 깨는 우리 아이, 단순 성장통일까요? 소아 야경증과 수면 각성 장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 청라, 루원시티, 검단, 부평 지역에서 자다 깨서 비명 지르고 우는 소아 야경증·악몽의 뇌 신경학적 원인과 심담허겁 체질 개선, 야뇨증 동반 시 한방 안신 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 청라야경증 • 인천소아야경증</span>
                  <a href="/column/child-night-terror-anxiety/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #53 | 우울증 · 화병 & 번아웃] [인천 청라 우울증] 마음의 문제만이 아닙니다, 만성 우울감과 무기력증을 일으키는 뇌 염증과 세로토닌 저하 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="stress">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/chronic-depression-lethargy/" class="hover:underline">
                      [인천 청라 우울증] 마음의 문제만이 아닙니다, 만성 우울감과 무기력증을 일으키는 뇌 염증과 세로토닌 저하
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 청라, 루원시티, 검단, 부평 지역에서 항우울제 복용에도 무기력감이 지속되는 환자를 위한 뇌 신경염증 조절, 장-뇌 축(Gut-Brain Axis) 개선 및 한방 해울 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 청라우울증한의원 • 인천만성우울증</span>
                  <a href="/column/chronic-depression-lethargy/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #54 | 불면증 · 수면장애] [인천 구월동 수면제단약] 수면제(스틸녹스) 없이는 잠을 못 자요, 약물 내성과 의존성 없이 스스로 잠드는 뇌 자생력 회복법 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="insomnia">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleeping-pill-withdrawal/" class="hover:underline">
                      [인천 구월동 수면제단약] 수면제(스틸녹스) 없이는 잠을 못 자요, 약물 내성과 의존성 없이 스스로 잠드는 뇌 자생력 회복법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동, 간석동, 부평, 송도 지역에서 졸피뎀·신경안정제 장기 복용으로 인한 내성과 반동성 불면을 극복하고 안전하게 감량(테이퍼링)하는 한방 수면 단약 프로토콜
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 구월동수면제단약 • 인천스틸녹스부작용</span>
                  <a href="/column/sleeping-pill-withdrawal/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #55 | 공황 · 불안 & 강박증] [시흥 배곧 사회공포] 사람들 앞에만 서면 목소리가 떨리고 심장이 쿵쾅거려요, 발표불안과 무대공포증 극복법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/social-anxiety-tremor/" class="hover:underline">
                      [시흥 배곧 사회공포] 사람들 앞에만 서면 목소리가 떨리고 심장이 쿵쾅거려요, 발표불안과 무대공포증 극복법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 배곧, 정왕동, 부평, 안산 지역 직장인·수험생의 발표불안, 시선공포, 목소리·손 떨림 극복을 위한 교감신경 차단(베타차단제) 내성 없는 뇌 자율신경 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥발표불안 • 배곧사회공포증</span>
                  <a href="/column/social-anxiety-tremor/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #56 | 신체화 & 담적·두통·턱관절] [김포 검단 턱관절] 입 벌릴 때 딱 소리와 통증, 수면 중 이갈이·이악물기가 만성 두통과 뇌 신경을 위협하는 이유 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="somatic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tmj-bruxism-stress/" class="hover:underline">
                      [김포 검단 턱관절] 입 벌릴 때 딱 소리와 통증, 수면 중 이갈이·이악물기가 만성 두통과 뇌 신경을 위협하는 이유
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    김포시, 인천 검단, 청라, 부평 지역에서 턱관절 편차와 수면 중 이갈이로 인한 편두통, 목어깨 결림, 안면 비대칭을 치료하는 FCST 구강내 균형장치 및 경추 교정 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 김포턱관절 • 검단턱관절병원</span>
                  <a href="/column/tmj-bruxism-stress/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #57 | 소아청소년 & 성인 ADHD·틱장애] [인천 구월동 성인ADHD] 왜 나는 알면서도 매번 미루고 자책할까요? 게으름이 아닌 '뇌 실행기능 장애' -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="tic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/adult-adhd-executive-dysfunction/" class="hover:underline">
                      [인천 구월동 성인ADHD] 왜 나는 알면서도 매번 미루고 자책할까요? 게으름이 아닌 '뇌 실행기능 장애'
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 구월동, 간석동, 부평, 송도 지역 직장인·취준생의 만성 미루기, 마감 벼락치기, 브레인포그, 번아웃 극복을 위한 전두엽 도파민 결핍 원인과 한방 뇌 기능 개선 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 구월동성인ADHD • 인천성인ADHD</span>
                  <a href="/column/adult-adhd-executive-dysfunction/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #58 | 공황 · 불안 & 강박증] [인천 계양 강박증] 문은 잠갔을까? 가스 밸브는 잠갔을까? 끊임없이 맴도는 강박사고와 확인강박의 뇌 회로 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="panic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/ocd-compulsive-thoughts/" class="hover:underline">
                      [인천 계양 강박증] 문은 잠갔을까? 가스 밸브는 잠갔을까? 끊임없이 맴도는 강박사고와 확인강박의 뇌 회로
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    인천 계양구(계산동, 작전동), 부평, 부천 지역에서 반복되는 불안과 확인 강박으로 고통받는 분들을 위한 전대상피질(ACC) 과열 원인과 한방 청뇌사화 치료 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 계양구강박증 • 인천강박장애한의원</span>
                  <a href="/column/ocd-compulsive-thoughts/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [칼럼 #59 | 자율신경 & 실신·어지럼증·이명] [시흥 은계 이명어지럼] 피곤하면 더 커지는 귀뚜라미·삐 소리, 신경성 이명과 뇌명증의 자율신경 원인 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition" data-category="autonomic">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tinnitus-autonomic-dizziness/" class="hover:underline">
                      [시흥 은계 이명어지럼] 피곤하면 더 커지는 귀뚜라미·삐 소리, 신경성 이명과 뇌명증의 자율신경 원인
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    시흥 은계, 은행동, 대야동, 부평 지역에서 이비인후과 청력검사상 정상이나 귓속 소음과 머리 울림으로 잠 못 드는 신경성 이명의 내이 미세 혈류 장애 및 청간식풍 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 시흥이명한의원 • 은계신경성이명</span>
                  <a href="/column/tinnitus-autonomic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>
            </div>

            <!-- 3. 페이지네이션 컨트롤 바 -->
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DDE6E1] pt-6 not-prose" id="pagination-wrapper">
              <div class="text-xs sm:text-sm text-[#68736E] font-medium" id="pagination-info">
                총 <strong class="text-[#2F5D50] font-bold" id="page-total-count">59</strong>개 칼럼 중 <span id="page-range" class="font-semibold text-[#26332E]">1 - 8</span>개 표시
              </div>
              <div class="flex items-center gap-1.5 flex-wrap justify-center" id="pagination-controls">
                <!-- 자바스크립트에 의해 동적으로 렌더링되는 페이지 버튼들 -->
              </div>
            </div>

          </div>

          <!-- JavaScript 카테고리 필터링 & 반응형 페이지네이션 스크립트 -->
          <script>
            (function() {
              const ITEMS_PER_PAGE = 8; // 페이지당 노출 칼럼 수 (2열 그리드 기준 4줄)
              let currentCategory = 'all';
              let currentPage = 1;
              let filteredItems = [];

              function getFilteredItems() {
                const allItems = Array.from(document.querySelectorAll('.column-item'));
                if (currentCategory === 'all') {
                  return allItems;
                }
                return allItems.filter(item => item.getAttribute('data-category') === currentCategory);
              }

              function updateDisplay(scrollToTop = false) {
                filteredItems = getFilteredItems();
                const totalCount = filteredItems.length;
                const totalPages = Math.max(1, Math.ceil(totalCount / ITEMS_PER_PAGE));

                if (currentPage > totalPages) {
                  currentPage = totalPages;
                }

                // 1. 전체 카드 숨김 및 현재 페이지 카드만 flex 노출
                const allItems = document.querySelectorAll('.column-item');
                allItems.forEach(item => {
                  item.style.display = 'none';
                });

                const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
                const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalCount);

                for (let i = startIndex; i < endIndex; i++) {
                  if (filteredItems[i]) {
                    filteredItems[i].style.display = 'flex';
                  }
                }

                // 2. 페이지네이션 정보 텍스트 갱신
                const totalCountEl = document.getElementById('page-total-count');
                const rangeEl = document.getElementById('page-range');
                const infoWrapper = document.getElementById('pagination-wrapper');

                if (totalCountEl) totalCountEl.textContent = totalCount;
                if (rangeEl) {
                  if (totalCount === 0) {
                    rangeEl.textContent = '0';
                  } else {
                    rangeEl.textContent = `${startIndex + 1} - ${endIndex}`;
                  }
                }

                // 3. 페이지네이션 버튼 렌더링
                renderPaginationControls(totalPages);

                // 4. 페이지 이동 시 탭 영역 상단으로 부드럽게 스크롤
                if (scrollToTop) {
                  const sectionEl = document.getElementById('column-list-section');
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }

              function renderPaginationControls(totalPages) {
                const container = document.getElementById('pagination-controls');
                if (!container) return;

                if (totalPages <= 1) {
                  container.innerHTML = '';
                  return;
                }

                let html = '';

                // 이전 페이지 버튼
                const prevDisabled = currentPage === 1;
                html += `<button onclick="window.changeColumnPage(${currentPage - 1})" ${prevDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${prevDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <i class="fa-solid fa-chevron-left text-[10px]"></i>
                  <span>이전</span>
                </button>`;

                // 페이지 번호 버튼들
                let startPage = Math.max(1, currentPage - 2);
                let endPage = Math.min(totalPages, startPage + 4);
                if (endPage - startPage < 4) {
                  startPage = Math.max(1, endPage - 4);
                }

                if (startPage > 1) {
                  html += `<button onclick="window.changeColumnPage(1)" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">1</button>`;
                  if (startPage > 2) {
                    html += `<span class="text-xs text-gray-400 px-1">...</span>`;
                  }
                }

                for (let p = startPage; p <= endPage; p++) {
                  const isActive = p === currentPage;
                  html += `<button onclick="window.changeColumnPage(${p})" class="w-8 h-8 rounded-lg text-xs font-bold transition ${isActive ? 'bg-[#2F5D50] text-white shadow-sm' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">${p}</button>`;
                }

                if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                    html += `<span class="text-xs text-gray-400 px-1">...</span>`;
                  }
                  html += `<button onclick="window.changeColumnPage(${totalPages})" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">${totalPages}</button>`;
                }

                // 다음 페이지 버튼
                const nextDisabled = currentPage === totalPages;
                html += `<button onclick="window.changeColumnPage(${currentPage + 1})" ${nextDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${nextDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <span>다음</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>`;

                container.innerHTML = html;
              }

              // 전역 함수 등록
              window.filterColumn = function(category, btn) {
                currentCategory = category;
                currentPage = 1; // 탭 변경 시 1페이지로 리셋

                const buttons = document.querySelectorAll('.column-tab-btn');
                buttons.forEach(b => {
                  b.classList.remove('active-tab', 'bg-[#2F5D50]', 'text-white');
                  b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
                });

                if (btn) {
                  btn.classList.add('active-tab', 'bg-[#2F5D50]', 'text-white');
                  btn.classList.remove('bg-[#EAF3EF]', 'text-[#2F5D50]');
                }

                updateDisplay(false);
              };

              window.changeColumnPage = function(page) {
                currentPage = page;
                updateDisplay(true);
              };

              // 초기화
              document.addEventListener('DOMContentLoaded', () => {
                const activeBtn = document.querySelector('.column-tab-btn.active-tab');
                if (activeBtn) {
                  activeBtn.classList.add('bg-[#2F5D50]', 'text-white');
                  activeBtn.classList.remove('bg-[#EAF3EF]', 'text-[#2F5D50]');
                }
                const otherBtns = document.querySelectorAll('.column-tab-btn:not(.active-tab)');
                otherBtns.forEach(b => {
                  b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
                });

                updateDisplay(false);
              });
            })();
          </script>

        </div>
---
