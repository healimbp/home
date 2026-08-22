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

              <!-- [소아청소년 & 성인 ADHD·틱장애] 왜 틱은 눈에서 시작해 코, 입, 목으로 내려갈까요? 소아 틱장애 진행 원리와 대처법 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-tic-disorder/" class="hover:underline">
                      왜 틱은 눈에서 시작해 코, 입, 목으로 내려갈까요? 소아 틱장애 진행 원리와 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    처음엔 단순 눈 깜빡임으로 시작했던 틱이 코 찡긋, 입 씰룩, 목 꺾기로 내려가는 신경학적 이유와 기저핵 발달, FCST 턱관절·경추 균형 치료 및 부모 양육법
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

              <!-- [소아청소년 & 성인 ADHD·틱장애] 단순 비염인 줄 알았는데… 아이의 킁킁·음음 소리가 잠잘 때는 멈추는 이유 (음성 틱 & 뚜렛) -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vocal-tic-tourette/" class="hover:underline">
                      단순 비염인 줄 알았는데… 아이의 킁킁·음음 소리가 잠잘 때는 멈추는 이유 (음성 틱 & 뚜렛)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    감기·비염 약을 먹어도 낫지 않는 헛기침, 킁킁거림, 음음 소리의 음성 틱 기전과 뚜렛증후군 진행 차단, 호흡기·발성근 신경 과민 해소 한방 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/vocal-tic-tourette/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] 우리 아이는 왜 알면서도 가만히 있지 못할까요? ADHD의 본질은 집중력이 아닌 "뇌 브레이크" 미성숙입니다 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-adhd-concentration/" class="hover:underline">
                      우리 아이는 왜 알면서도 가만히 있지 못할까요? ADHD의 본질은 집중력이 아닌 "뇌 브레이크" 미성숙입니다
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    주의산만, 충동성, 과잉행동의 뇌과학적 원인인 전두엽 실행기능 결핍과 도파민 조절 장애, 콘서타 부작용 걱정 없는 뇌 자생력 강화 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/child-adhd-concentration/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] 밤마다 비명 지르며 울고 깨는 우리 아이, 단순 성장통일까요? 소아 야경증과 수면 각성 장애 -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/child-night-terror-anxiety/" class="hover:underline">
                      밤마다 비명 지르며 울고 깨는 우리 아이, 단순 성장통일까요? 소아 야경증과 수면 각성 장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    자다 깨서 부모도 못 알아보고 공포에 질려 우는 야경증·악몽의 뇌 신경학적 원인과 심담허겁 체질 개선, 야뇨증과 분리불안 동반 시 한방 안신 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/child-night-terror-anxiety/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [소아청소년 & 성인 ADHD·틱장애] 왜 나는 알면서도 매번 미루고 자책할까요? 게으름이 아닌 성인 ADHD의 "뇌 실행기능 장애" -->
              <article class="column-item tic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">소아청소년 & 성인 ADHD·틱장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/adult-adhd-executive-dysfunction/" class="hover:underline">
                      왜 나는 알면서도 매번 미루고 자책할까요? 게으름이 아닌 성인 ADHD의 "뇌 실행기능 장애"
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    만성 미루기, 마감 직전 벼락치기, 브레인포그, 잦은 이직과 번아웃으로 고통받는 성인 ADHD의 전두엽 도파민 결핍 원인과 한방 뇌 기능 개선 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/adult-adhd-executive-dysfunction/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡의 신경학적 기전과 응급 대처법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/panic-disorder-breathing/" class="hover:underline">
                      갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡의 신경학적 기전과 응급 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    심장내과와 응급실 검사상 이상 없는 급성 공황발작의 편도체 과열 기전, 과호흡 시 뇌 혈류 저하를 막는 응급 4-7-8 호흡법 및 한방 시호가용골모려탕 치료 원리
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

              <!-- [공황 · 불안 & 강박증] "또 발작이 오면 어쩌지?" 24시간 나를 옥죄는 예기불안의 늪, 뇌 해마의 공포 기억 소거법 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/anticipatory-anxiety/" class="hover:underline">
                      "또 발작이 오면 어쩌지?" 24시간 나를 옥죄는 예기불안의 늪, 뇌 해마의 공포 기억 소거법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    발작이 없는 시간에도 일상을 마비시키는 24시간 예기불안과 회피 행동의 뇌과학적 원인, 해마의 공포 기억 소거 및 안심정지 한방 치료 솔루션
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

              <!-- [공황 · 불안 & 강박증] 만원 지하철, 터널, 엘리베이터에서 도망치고 싶은 공포, 광장공포증과 폐쇄공포증의 탈출구 기전 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/claustrophobia-agoraphobia/" class="hover:underline">
                      만원 지하철, 터널, 엘리베이터에서 도망치고 싶은 공포, 광장공포증과 폐쇄공포증의 탈출구 기전
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    즉각 탈출하기 어려운 장소에서 극도의 패닉을 느끼는 광장공포증과 폐쇄공포증의 뇌 공간 지각 및 전정신경 과민 원인, 뇌-자율신경 조절 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/claustrophobia-agoraphobia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] 회의 때 발표만 하려면 목소리와 손이 덜덜 떨리는 이유, 사회불안장애와 인데놀의 한계 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/social-anxiety-tremor/" class="hover:underline">
                      회의 때 발표만 하려면 목소리와 손이 덜덜 떨리는 이유, 사회불안장애와 인데놀의 한계
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    발표, 면접, 낯선 사람과의 식사 자리에서 목소리 떨림, 손 떨림, 안면홍조가 폭발하는 사회불안장애(대인기피)의 신경학적 원인과 심담강화 한방 솔루션
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/social-anxiety-tremor/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [공황 · 불안 & 강박증] "혹시 문을 안 잠갔나? 끔찍한 일이 생기면 어쩌지?" 강박증과 침투적 사고의 뇌 선조체 필터 이상 -->
              <article class="column-item panic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/ocd-compulsive-thoughts/" class="hover:underline">
                      "혹시 문을 안 잠갔나? 끔찍한 일이 생기면 어쩌지?" 강박증과 침투적 사고의 뇌 선조체 필터 이상
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    원치 않는 불안한 생각(침투적 사고)과 확인·청결·정리 강박 행동의 뇌 전두엽-기저핵-선조체 회로 이상 원인 및 안심정지 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/ocd-compulsive-thoughts/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] 병원 검사는 다 정상인데 왜 물먹은 솜처럼 무기력할까요? 만성피로와 자율신경계 소진 3단계 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-fatigue/" class="hover:underline">
                      병원 검사는 다 정상인데 왜 물먹은 솜처럼 무기력할까요? 만성피로와 자율신경계 소진 3단계
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    간 기능, 갑상선, 피검사에서 이상 없는 만성 피로와 브레인포그의 원인인 자율신경실조증과 한스 셀리에 스트레스 소진(Exhaustion) 모델, 부신 기혈 보강 한방 치료
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

              <!-- [자율신경 & 실신·어지럼증·이명] 심장 검사는 정상인데 왜 시도 때도 없이 두근거리고 얼굴로 열이 쏟아질까요? 교감신경 과항진과 상열하한 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/autonomic-palpitation-sweating/" class="hover:underline">
                      심장 검사는 정상인데 왜 시도 때도 없이 두근거리고 얼굴로 열이 쏟아질까요? 교감신경 과항진과 상열하한
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    부정맥 없는 심장 두근거림(심계항진), 손발 다한증, 안면홍조와 상열감의 원인인 교감신경 과열 병리와 수승화강(水昇火降) 한방 정상화 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/autonomic-palpitation-sweating/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] 출퇴근길 지하철에서 눈앞이 핑 돌며 주저앉는 이유, 미주신경성 실신의 전조증상과 대처법 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/vasovagal-syncope/" class="hover:underline">
                      출퇴근길 지하철에서 눈앞이 핑 돌며 주저앉는 이유, 미주신경성 실신의 전조증상과 대처법
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    밀폐된 공간, 장시간 기립, 피로 시 갑작스러운 혈압 저하로 의식을 잃는 미주신경성 실신의 발생 기전과 전조증상(하품, 메스꺼움), 심비양허 체질 개선 한방 치료
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

              <!-- [자율신경 & 실신·어지럼증·이명] 이석증도 아니라는데 왜 세상이 붕 뜨고 멍할까요? 일자목과 경추성 어지럼증의 신경 압박 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/cervicogenic-dizziness/" class="hover:underline">
                      이석증도 아니라는데 왜 세상이 붕 뜨고 멍할까요? 일자목과 경추성 어지럼증의 신경 압박
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    이비인후과 귀 검사나 뇌 MRI에서 정상인 만성 어지럼증, 머리가 맑지 않은 브레인포그의 원인인 상부 경추 변위와 성상신경절 자극, 경추 추나 및 뇌혈류 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/cervicogenic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [자율신경 & 실신·어지럼증·이명] 조용한 방에만 들어가면 귀에서 삐- 소리가 커지는 이유, 신경성 이명과 뇌명증의 한방 치료 -->
              <article class="column-item autonomic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tinnitus-autonomic-dizziness/" class="hover:underline">
                      조용한 방에만 들어가면 귀에서 삐- 소리가 커지는 이유, 신경성 이명과 뇌명증의 한방 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    청력 검사상 정상인데도 멈추지 않는 귀뚜라미·매미·금속성 이명과 머리 울림(뇌명증)의 뇌 청각피질 과민성 원인 및 신허(腎虛) 보강 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/tinnitus-autonomic-dizziness/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 · 수면장애] 몸은 피곤해 쓰러질 것 같은데 침대에만 누우면 뇌 스위치가 켜지는 이유, 입면장애와 DMN 과각성 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-20 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleep-onset-insomnia/" class="hover:underline">
                      몸은 피곤해 쓰러질 것 같은데 침대에만 누우면 뇌 스위치가 켜지는 이유, 입면장애와 DMN 과각성
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    잠자리에 누워 1~2시간 이상 꼬리를 무는 잡생각으로 뒤척이는 입면장애의 뇌 신경학적 원인(DMN 과활성, 저녁 코르티솔 상승)과 수면제 없는 청열안신 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/sleep-onset-insomnia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 · 수면장애] 잠들기는 쉬운데 왜 매일 새벽 2~3시만 되면 눈이 번쩍 떠질까요? 수면유지장애와 간·심장 허열 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/insomnia-sleep-maintenance/" class="hover:underline">
                      잠들기는 쉬운데 왜 매일 새벽 2~3시만 되면 눈이 번쩍 떠질까요? 수면유지장애와 간·심장 허열
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    밤 11시에 잠들어도 새벽 2~3시, 4시만 되면 자꾸 깨서 아침까지 뜬눈으로 밤을 지새우는 조기 각성·수면유지장애의 한의학적 기전과 청열안신 한방 치료
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

              <!-- [불면증 · 수면장애] 밤마다 쫓기는 악몽과 몸이 굳는 가위눌림, 심비양허(心脾兩虛)를 보강하는 숙면 처방 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/nightmare-sleep-paralysis/" class="hover:underline">
                      밤마다 쫓기는 악몽과 몸이 굳는 가위눌림, 심비양허(心脾兩虛)를 보강하는 숙면 처방
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    끔찍한 악몽, 귀신을 보거나 몸이 움직이지 않는 가위눌림(수면마비)의 렘수면 불균형 원인과 기혈 고갈(심비양허)을 채워 꿈자리를 맑게 하는 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/nightmare-sleep-paralysis/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [불면증 · 수면장애] 스틸녹스를 1년째 못 끊고 있어요… 수면제 내성과 안전한 3단계 한방 감약(Tapering) 프로토콜 -->
              <article class="column-item insomnia heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">불면증 · 수면장애</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/sleeping-pill-withdrawal/" class="hover:underline">
                      스틸녹스를 1년째 못 끊고 있어요… 수면제 내성과 안전한 3단계 한방 감약(Tapering) 프로토콜
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    졸피뎀(스틸녹스), 자낙스, 리보트릴 등 수면제·신경안정제 장기 복용으로 인한 내성, 기억력 감퇴, 반동성 불면을 극복하고 안전하게 약을 끊는 3단계 한방 감약 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/sleeping-pill-withdrawal/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [우울증 · 화병 & 번아웃] 가슴 한가운데 큰 돌을 얹은 듯… 목에 걸린 매화 씨앗(매핵기)과 울화병의 한의학 치료 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-18 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/hwabyeong-maehaekgi/" class="hover:underline">
                      가슴 한가운데 큰 돌을 얹은 듯… 목에 걸린 매화 씨앗(매핵기)과 울화병의 한의학 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    이비인후과 내시경에서 이상 없는 목 이물감(매핵기), 가슴 답답함과 한숨, 억울함과 분노로 울체된 기운을 소통시키는 분심기음 및 반하후박탕 한방 솔루션
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

              <!-- [우울증 · 화병 & 번아웃] 아무것도 하기 싫고 세상 모든 게 무의미해요… 만성 우울증과 뇌 세로토닌 신경망 방전 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/chronic-depression-lethargy/" class="hover:underline">
                      아무것도 하기 싫고 세상 모든 게 무의미해요… 만성 우울증과 뇌 세로토닌 신경망 방전
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    단순한 마음의 나태함이 아닌 뇌 세로토닌·도파민 고갈과 뇌 혈류 저하로 인한 만성 우울증, 무기력증, 의욕 상실을 극복하는 체질 개선 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/chronic-depression-lethargy/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [우울증 · 화병 & 번아웃] 영혼까지 불태워 일했는데 남은 건 전신 통증… 직장인 번아웃과 신체화 장애 -->
              <article class="column-item stress heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/burnout-somatization/" class="hover:underline">
                      영혼까지 불태워 일했는데 남은 건 전신 통증… 직장인 번아웃과 신체화 장애
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    극심한 직무 스트레스 후 찾아오는 번아웃 증후군과 병원 검사에서 원인 없는 전신 섬유근육통, 두통, 소화장애 등 신체화 증상의 한방 전신 기력 재충전 프로토콜
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/burnout-somatization/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] 신경만 쓰면 머리가 깨질 듯 조이고 체하는 이유, 긴장성 두통과 신경성 소화불량의 뇌-장 축(Gut-Brain Axis) -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-16 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/stress-headache-digestion/" class="hover:underline">
                      신경만 쓰면 머리가 깨질 듯 조이고 체하는 이유, 긴장성 두통과 신경성 소화불량의 뇌-장 축(Gut-Brain Axis)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    스트레스 시 동시에 터지는 조이는 편두통, 명치 답답함, 메스꺼움의 원인인 뇌-장 축(Gut-Brain Axis)과 미주신경 마비, 담음(痰飮) 제거 한방 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/stress-headache-digestion/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] 내시경은 깨끗하다는데 왜 명치가 딱딱하고 가스가 찰까요? 만성 기능성 소화불량과 담적병(痰積病) -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-14 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/damjeok-functional-dyspepsia/" class="hover:underline">
                      내시경은 깨끗하다는데 왜 명치가 딱딱하고 가스가 찰까요? 만성 기능성 소화불량과 담적병(痰積病)
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    위내시경 검사상 이상 없는 만성 소화불량, 복부 팽만감, 조기 포만감, 역류성 식도염의 원인인 위장 외벽 담적(痰積)과 평위산·온담탕 맞춤 한방 치료
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/damjeok-functional-dyspepsia/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [신체화 & 담적·두통·턱관절] 자고 일어나면 턱이 뻐근하고 두통이… 턱관절 장애와 수면 중 이갈이, FCST 뇌신경 균형 치료 -->
              <article class="column-item somatic heal-card space-y-4 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">2026-08-12 • 권형근 원장 칼럼</span>
                  </div>
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E] leading-snug cursor-pointer hover:text-[#2F5D50] transition">
                    <a href="/column/tmj-bruxism-stress/" class="hover:underline">
                      자고 일어나면 턱이 뻐근하고 두통이… 턱관절 장애와 수면 중 이갈이, FCST 뇌신경 균형 치료
                    </a>
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                    입을 벌릴 때 딱딱 소리가 나고 턱 통증, 만성 편두통, 어깨 결림을 부르는 턱관절 장애와 수면 중 무의식적 이갈이·이악물기의 원인 및 FCST 턱관절 교정 치료법
                  </p>
                </div>
                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between">
                  <span class="text-[11px] text-[#68736E]"></span>
                  <a href="/column/tmj-bruxism-stress/" class="inline-flex items-center gap-1 text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-3 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0 ml-2">
                    <span>칼럼 전문 읽기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>
            </div>
          </div>

          <!-- JavaScript 카테고리 필터링 스크립트 -->
          <script>
            function filterColumn(category, btn) {
              const items = document.querySelectorAll('.column-item');
              const buttons = document.querySelectorAll('.column-tab-btn');

              buttons.forEach(b => {
                b.classList.remove('active-tab', 'bg-[#2F5D50]', 'text-white');
                b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
              });
              btn.classList.add('active-tab', 'bg-[#2F5D50]', 'text-white');
              btn.classList.remove('bg-[#EAF3EF]', 'text-[#2F5D50]');

              items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                  item.style.display = 'flex';
                } else {
                  item.style.display = 'none';
                }
              });
            }

            document.addEventListener('DOMContentLoaded', () => {
              const activeBtn = document.querySelector('.column-tab-btn.active-tab');
              if (activeBtn) {
                activeBtn.classList.add('bg-[#2F5D50]', 'text-white');
              }
              const otherBtns = document.querySelectorAll('.column-tab-btn:not(.active-tab)');
              otherBtns.forEach(b => {
                b.classList.add('bg-[#EAF3EF]', 'text-[#2F5D50]');
              });
            });
          </script>

        </div>
---
