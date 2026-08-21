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

          <!-- 2. 질환별 카테고리 필터 탭 (6대 진료영역 통합) -->
          <div class="space-y-8">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-newspaper text-[#2F5D50]"></i>
                <span>6대 핵심 진료 분야별 전문 칼럼</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하시면 해당 칼럼의 상세 전문 페이지로 이동합니다.</div>
            </div>

            <!-- 탭 버튼 목록 (6대 분야) -->
            <div class="flex flex-wrap gap-2 pb-2" id="column-category-tabs">
              <button onclick="filterColumn('all', this)" class="column-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80">(25)</span>
              </button>
              <button onclick="filterColumn('panic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('autonomic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('insomnia', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80">(4)</span>
              </button>
              <button onclick="filterColumn('tic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80">(5)</span>
              </button>
              <button onclick="filterColumn('stress', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80">(3)</span>
              </button>
              <button onclick="filterColumn('somatic', this)" class="column-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80">(3)</span>
              </button>
            </div>

            <!-- 칼럼 카드 그리드 (개별 상세 페이지 직결 링크) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="column-grid">

              <!-- [SEO 자동발행: 불면증 · 수면장애 - 2026-08-22] -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-22 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/post-2026-08-22-insomnia-7730/" class="hover:underline">[인천 부평 불면증 한의원] 악몽과 가위눌림, 심비양허를 보강하여 깊은 델타파 숙면 유도</a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    인천 부평 지역에서 불면증 · 수면장애 증상으로 한의원 및 병원 치료를 찾는 분들을 위한 권형근 대표원장의 심층 원인 분석과 1:1 맞춤 한방 치료 가이드입니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천 부평한의원 • 부평한의원 • 불면증 • 맞춤한약 • 뇌파검사 • 체열검사</span>
                  <a href="/column/post-2026-08-22-insomnia-7730/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>


              <!-- [공황 · 불안 & 강박증] [구월동 불안장애 한의원] “또 발작 올까 두려운” 예기불안과 뇌 변연계 안정 한방 치료 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/anticipatory-anxiety/" class="hover:underline">
                      [구월동 불안장애 한의원] “또 발작 올까 두려운” 예기불안과 뇌 변연계 안정 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    발작이 없는 시간에도 일상을 마비시키는 24시간 예기불안의 악순환 고리와 뇌 해마의 공포 기억을 지우는 안심정지 한방 치료 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/anticipatory-anxiety/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] [부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-fatigue/" class="hover:underline">
                      [부평 자율신경실조증 한의원] 만성피로와 자율신경계 기능 저하는 어떤 관계일까요? 몸이 긴장에서 소진으로 가는 과정
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    병원 검사에서 이상 없는 만성 피로와 무기력증, 자율신경계 조절 기능 저하와 한스 셀리에 3단계 소진 모델, 뇌파·체열·간이정신진단 검사 및 맞춤 한방 치료 가이드
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/autonomic-fatigue/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] [시흥 배곧 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-tic-disorder/" class="hover:underline">
                      [시흥 배곧 소아 틱장애 한의원] 아이 눈 깜빡임과 헛기침 틱, 뇌 기저핵 안정과 부모 양육 코칭
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    아이의 틱 증상은 나쁜 버릇이 아닙니다. 뇌 기저핵의 운동 억제 회로 미성숙 원인과 부모의 현명한 양육 대처법, 순한 천연 소아 한약 치료 원리
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/child-tic-disorder/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [우울증 · 화병 & 번아웃] [영종도 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/hwabyeong-maehaekgi/" class="hover:underline">
                      [영종도 화병/우울증 한의원] 가슴 답답함과 목 이물감(매핵기), 울화병 한의학 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    가슴에 큰 돌을 얹은 듯한 답답함과 목에 무언가 걸린 듯한 매핵기 증상, 억울함과 분노로 울체된 기운을 소통시키는 분심기음 한방 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/hwabyeong-maehaekgi/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 & 수면장애] [계양구 불면증 한의원] 새벽 2～3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 & 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/insomnia-sleep-maintenance/" class="hover:underline">
                      [계양구 불면증 한의원] 새벽 2～3시에 자다 깨는 수면유지장애, 간·심장 허열 치료 원리
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    잠들기는 쉬우나 새벽에 자꾸 깨거나 악몽이 많은 수면유지장애의 한의학적 기전과 수면제 없이 뇌의 열을 내리는 청열안신 한방 숙면 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/insomnia-sleep-maintenance/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] [인천 부평 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 맞춤 치료법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/panic-disorder-breathing/" class="hover:underline">
                      [인천 부평 공황장애 한의원] 공황발작과 자율신경계 과흥분, 응급 호흡과 맞춤 치료법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    숨이 턱 막히고 심장이 미친 듯이 뛰는 공황발작의 신경학적 기전과 미주신경을 자극하는 응급 4-7-8 호흡법, 편도체 흥분을 가라앉히는 단계별 한의학 치료 원리
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/panic-disorder-breathing/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] [청라 어지럼증 한의원] 출퇴근길 지하철에서 핑 돌고 쓰러지는 미주신경성 실신, 전조증상과 한방 치료 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vasovagal-syncope/" class="hover:underline">
                      [청라 어지럼증 한의원] 출퇴근길 지하철에서 핑 돌고 쓰러지는 미주신경성 실신, 전조증상과 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    갑작스러운 혈압 저하와 뇌 혈류 부족으로 의식을 잃는 미주신경성 실신의 발생 기전과 전조증상 대처법, 심비양허 체질 개선 및 혈관 탄력 강화 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/vasovagal-syncope/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] [송도 자율신경 한의원] 검사상 이상 없는 심장 두근거림과 다한증·상열감, 교감신경 과항진 치료 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-palpitation-sweating/" class="hover:underline">
                      [송도 자율신경 한의원] 검사상 이상 없는 심장 두근거림과 다한증·상열감, 교감신경 과항진 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    심장내과 검사에서 이상이 없는데도 시도 때도 없이 가슴이 두근거리고 얼굴로 열이 오르며 손발에 땀이 나는 교감신경 과항진의 병리와 상열하한 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 송도자율신경실조증 • 심장두근거림 • 다한증한의원 • 상열감</span>
                  <a href="/column/autonomic-palpitation-sweating/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] [부천 상동 어지럼증 한의원] 일어설 때 핑 돌고 머리가 멍한 경추성 어지럼증과 브레인포그 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-13 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/cervicogenic-dizziness/" class="hover:underline">
                      [부천 상동 어지럼증 한의원] 일어설 때 핑 돌고 머리가 멍한 경추성 어지럼증과 브레인포그
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    이비인후과 이석증이나 뇌 질환이 아닌데도 고개를 돌리거나 일어설 때 핑 도는 경추성 어지럼증과 머리가 멍한 브레인포그의 원인 및 두개천골 추나 치료법을 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천어지럼증한의원 • 경추성어지럼증 • 브레인포그 • 기립성저혈압</span>
                  <a href="/column/cervicogenic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] [부평 광장공포증 한의원] 지하철·터널·비행기 타기 두려운 공황장애와 폐쇄공포증 극복법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/claustrophobia-agoraphobia/" class="hover:underline">
                      [부평 광장공포증 한의원] 지하철·터널·비행기 타기 두려운 공황장애와 폐쇄공포증 극복법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    지하철, 만원 버스, 터널, 엘리베이터, 비행기 등 즉시 탈출하기 어려운 밀폐 공간에서 발생하는 광장공포증과 공황발작의 신경학적 기전 및 뇌 변연계 안정 한방 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평공황장애 • 광장공포증 • 폐쇄공포증 • 비행공포증</span>
                  <a href="/column/claustrophobia-agoraphobia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] [논현동 발표불안 한의원] 사람들 앞에만 서면 목소리가 떨리고 얼굴 붉어지는 사회불안장애 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-11 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/social-anxiety-tremor/" class="hover:underline">
                      [논현동 발표불안 한의원] 사람들 앞에만 서면 목소리가 떨리고 얼굴 붉어지는 사회불안장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    회의 발표, 면접, 대인관계에서 목소리 떨림, 손 떨림, 안면홍조, 심장 두근거림으로 고통받는 사회공포증(대인공포증)의 원인과 뇌 신경계 안정 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천사회공포증 • 발표불안 • 목소리떨림 • 안면홍조</span>
                  <a href="/column/social-anxiety-tremor/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 & 수면장애] [부평 불면증 한의원] 누우면 잡생각으로 1 ~ 2시간씩 잠 못 드는 입면장애, 뇌 과각성 낮추기 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 & 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-10 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleep-onset-insomnia/" class="hover:underline">
                      [부평 불면증 한의원] 누우면 잡생각으로 1 ~ 2시간씩 잠 못 드는 입면장애, 뇌 과각성 낮추기
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    몸은 피곤한데 침대에만 누우면 뇌가 각성되어 꼬리에 꼬리를 무는 잡생각으로 새벽까지 뒤척이는 입면장애의 병리와 뇌파 안정 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평불면증한의원 • 입면장애 • 잡생각불면 • 뇌과각성</span>
                  <a href="/column/sleep-onset-insomnia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 & 수면장애] [구월동 수면장애 한의원] 잦은 악몽과 가위눌림, 심비양허(心脾兩虛)를 보강하는 숙면 처방 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 & 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-09 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/nightmare-sleep-paralysis/" class="hover:underline">
                      [구월동 수면장애 한의원] 잦은 악몽과 가위눌림, 심비양허(心脾兩虛)를 보강하는 숙면 처방
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    밤마다 쫓기거나 떨어지는 악몽에 시달리고 몸이 움직이지 않는 가위눌림(수면마비)으로 깊은 잠을 못 자는 원인과 심비양허 한방 보강 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천수면클리닉 • 악몽치료 • 가위눌림 • 심비양허</span>
                  <a href="/column/nightmare-sleep-paralysis/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 & 수면장애] [부천 불면증 한의원] 수면제·스틸녹스 장기 복용과 내성, 안전하게 단약(Tapering)하는 한방 프로토콜 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 & 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-08 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleeping-pill-withdrawal/" class="hover:underline">
                      [부천 불면증 한의원] 수면제·스틸녹스 장기 복용과 내성, 안전하게 단약(Tapering)하는 한방 프로토콜
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    스틸녹스, 자낙스, 리보트릴 등 수면제·신경안정제 복용 후 발생하는 약물 내성과 반동성 불면을 극복하고 단계적으로 감약(Tapering)하여 자연 숙면을 되찾는 치료법을 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 수면제단약 • 스틸녹스부작용 • 수면제내성 • 부천불면증</span>
                  <a href="/column/sleeping-pill-withdrawal/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] [인천 소아 틱장애 한의원] 음성 틱(킁킁·음음 소리)과 뚜렛증후군으로 번지는 과정과 조기 치료 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-07 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vocal-tic-tourette/" class="hover:underline">
                      [인천 소아 틱장애 한의원] 음성 틱(킁킁·음음 소리)과 뚜렛증후군으로 번지는 과정과 조기 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    비염이나 감기로 오해하기 쉬운 아이의 킁킁거림, 헛기침, 음음 소리 등 음성 틱의 초기 징후와 뚜렛증후군으로의 악화를 막는 뇌 기저핵 안정 한방 치료를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천틱장애한의원 • 음성틱치료 • 뚜렛증후군 • 소아신경정신과</span>
                  <a href="/column/vocal-tic-tourette/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] [송도 소아 ADHD 한의원] 산만하고 충동적인 우리 아이, 전두엽 뇌 발달과 집중력 한방 치료 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-06 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-adhd-concentration/" class="hover:underline">
                      [송도 소아 ADHD 한의원] 산만하고 충동적인 우리 아이, 전두엽 뇌 발달과 집중력 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    수업 시간에 가만히 앉아 있지 못하고 충동적이며 실수가 잦은 소아 주의력결핍 과잉행동장애(ADHD)의 원인과 전두엽 자생력을 높이는 1:1 맞춤 한방 솔루션을 소개합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 송도ADHD한의원 • 주의력결핍 • 소아산만함 • 전두엽발달</span>
                  <a href="/column/child-adhd-concentration/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] [부평 소아 야경증 한의원] 밤마다 자다 깨서 우는 야경증·야뇨증과 소아 분리불안장애 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-05 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-night-terror-anxiety/" class="hover:underline">
                      [부평 소아 야경증 한의원] 밤마다 자다 깨서 우는 야경증·야뇨증과 소아 분리불안장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    밤마다 자다 깨어 자지러지게 울부짖는 소아 야경증, 낮 동안 엄마와 떨어지지 못하는 분리불안장애, 만 5세 이후의 야뇨증을 치료하는 심비보강 한방 처방을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평소아야경증 • 소아야뇨증 • 분리불안장애 • 소아수면장애</span>
                  <a href="/column/child-night-terror-anxiety/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [우울증 · 화병 & 번아웃] [인천 우울증 한의원] 마음의 감기? 무기력증과 식욕부진, 뇌 세로토닌 자생력 회복 한방 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-04 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/chronic-depression-lethargy/" class="hover:underline">
                      [인천 우울증 한의원] 마음의 감기? 무기력증과 식욕부진, 뇌 세로토닌 자생력 회복 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    아무것도 하기 싫은 만성 무기력증, 의욕 저하, 이유 없는 눈물과 신체 통증으로 고통받는 우울증의 신경생리학적 기전과 뇌 세로토닌 자생력 회복 한방 치료를 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천우울증한의원 • 무기력증치료 • 만성우울 • 세로토닌회복</span>
                  <a href="/column/chronic-depression-lethargy/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [우울증 · 화병 & 번아웃] [부평 번아웃증후군 한의원] 직장인 만성 번아웃과 전신 신체화 증상, 원기 보강과 기혈 순환 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-03 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/burnout-somatization/" class="hover:underline">
                      [부평 번아웃증후군 한의원] 직장인 만성 번아웃과 전신 신체화 증상, 원기 보강과 기혈 순환
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    과도한 업무와 만성 스트레스로 몸과 마음이 완전히 타버린 직장인 번아웃 증후군(탈진 증후군)과 전신 통증·소화불량 등 신체화 장애의 한방 원기 회복 치료법을 제시합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평번아웃 • 직장인스트레스 • 신체화장애 • 부신피로</span>
                  <a href="/column/burnout-somatization/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] [부천 화병 한의원] 신경만 쓰면 체하고 머리가 깨질 듯 아픈 신경성 두통과 위장장애 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-02 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/stress-headache-digestion/" class="hover:underline">
                      [부천 화병 한의원] 신경만 쓰면 체하고 머리가 깨질 듯 아픈 신경성 두통과 위장장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    스트레스나 화를 참으면 명치가 꽉 막히고 체하며 관자놀이가 지끈거리는 신경성 편두통과 담적병(痰積病)의 한의학적 원인 및 소통 치료를 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부천신경성두통 • 신경성소화불량 • 담적병치료 • 스트레스위염</span>
                  <a href="/column/stress-headache-digestion/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] [부평 강박증 한의원] 씻고 확인해도 불안한 오염·확인 강박과 침투적 사고의 뇌 회로 치료 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-01 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/ocd-compulsive-thoughts/" class="hover:underline">
                      [부평 강박증 한의원] 씻고 확인해도 불안한 오염·확인 강박과 침투적 사고의 뇌 회로 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    가스 밸브 잠그기, 손 씻기, 정렬하기를 반복해도 불안이 가시지 않는 강박장애(OCD)와 원치 않는 침투적 생각의 신경학적 기전 및 뇌 선조체 안정 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평강박증한의원 • 확인강박 • 오염강박 • 침투적사고</span>
                  <a href="/column/ocd-compulsive-thoughts/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] [인천 이명 한의원] 삐- 소리 나는 신경성 귀울림과 어지럼증, 뇌 혈류와 청신경 안정 한방 솔루션 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-07-31 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tinnitus-autonomic-dizziness/" class="hover:underline">
                      [인천 이명 한의원] 삐- 소리 나는 신경성 귀울림과 어지럼증, 뇌 혈류와 청신경 안정 한방 솔루션
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    조용할 때나 피곤할 때 귀에서 삐-, 매미 소리, 웅- 소리가 울리는 신경성 이명과 어지럼증(메니에르), 청신경 과민 및 상열하한 한방 치료 원리를 설명합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천이명한의원 • 신경성이명 • 메니에르병 • 귀울림치료</span>
                  <a href="/column/tinnitus-autonomic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] [인천 성인 ADHD 한의원] 자꾸 미루고 덤벙대는 성인 주의력 결핍, 전두엽 실행 기능 강화 한방 치료 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-07-30 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/adult-adhd-executive-dysfunction/" class="hover:underline">
                      [인천 성인 ADHD 한의원] 자꾸 미루고 덤벙대는 성인 주의력 결핍, 전두엽 실행 기능 강화 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    잦은 마감 지각, 물건 분실, 정리정돈 곤란, 감정 기복 등 직장생활과 대인관계를 힘들게 만드는 성인 ADHD의 전두엽 도파민 회로 저하 원인과 한방 두뇌 활성화 치료를 안내합니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 인천성인ADHD • 성인주의력결핍 • 만성미루기 • 전두엽실행기능</span>
                  <a href="/column/adult-adhd-executive-dysfunction/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] [부평 담적병 한의원] 명치 통증과 만성 신경성 소화불량, 장-뇌 축(Gut-Brain) 담적 제거 한약 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-07-29 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/damjeok-functional-dyspepsia/" class="hover:underline">
                      [부평 담적병 한의원] 명치 통증과 만성 신경성 소화불량, 장-뇌 축(Gut-Brain) 담적 제거 한약
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    위내시경 검사에서는 깨끗하다는데 명치가 돌처럼 굳고 더부룩하며 트림·가스·두통이 지속되는 담적병(痰積病)의 원인과 위장 운동성 회복 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평담적병한의원 • 신경성소화불량 • 명치통증 • 담적치료</span>
                  <a href="/column/damjeok-functional-dyspepsia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] [부평 턱관절 한의원] 스트레스성 턱관절 소리·통증과 수면 중 이갈이, 두개천골 추나요법 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-07-28 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tmj-bruxism-stress/" class="hover:underline">
                      [부평 턱관절 한의원] 스트레스성 턱관절 소리·통증과 수면 중 이갈이, 두개천골 추나요법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    입을 벌릴 때 딱- 소리가 나고 턱과 관자놀이가 아픈 턱관절 장애(TMJ), 자면서 이를 악무는 이갈이의 원인과 경추 정렬 및 두개천골 추나 한방 치료법을 다룹니다.
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]">• 부평턱관절한의원 • 턱관절소리 • 턱관절통증 • 이갈이치료</span>
                  <a href="/column/tmj-bruxism-stress/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

            </div>
          </div>

          <!-- JavaScript 카테고리 필터링 스크립트 -->
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
          </script>

          <!-- 3. 상담/예약 배너 -->
          <div class="text-center pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:032-719-3472" class="heal-btn heal-btn-primary">
              <i class="fa-solid fa-phone"></i>
              <span>전화 상담: 032-719-3472</span>
            </a>
            <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao">
              <i class="fa-solid fa-comment"></i>
              <span>카카오톡 1:1 상담</span>
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver">
              <i class="fa-solid fa-calendar-check"></i>
              <span>네이버 진료 예약</span>
            </a>
          </div>

        </div>
---
