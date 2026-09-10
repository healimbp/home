---
title: "Q&A 상담 사례"
linkTitle: "Q&A 상담사례"
summary: "인천 부평, 구월동, 송도, 부천 질환별 환자 상담 질문과 권형근 대표원장의 1:1 심층 전문 답변"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-12">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Clinical Case & Doctor Q&A</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              1:1 진료 Q&A 상담 사례
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              나와 비슷한 증상으로 고민하셨던 환자분들의 생생한 상담 내용과<br class="hidden sm:block">
              권형근 대표원장(한방침구과 전문의)의 1:1 심층 의학적 해답 및 치료 계획을 확인해보세요.
            </p>
          </div>

          <!-- 2. Q&A 카테고리 필터 탭 & 검색 -->
          <div class="space-y-8" id="qa-list-section">
            <div class="flex items-center justify-between flex-wrap gap-3 border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-clipboard-question text-[#2F5D50]"></i>
                <span>질환별 1:1 전문 상담 사례</span>
              </h2>
              <div class="text-xs text-[#68736E]">카드를 클릭하시면 원장님의 상세 전문 답변을 확인하실 수 있습니다.</div>
            </div>

            <!-- 탭 버튼 목록 -->
            <div class="flex flex-wrap gap-2 pb-2" id="qa-category-tabs">
              <button onclick="filterQA('all', this)" class="qa-tab-btn active-tab px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                전체보기 <span class="text-[11px] opacity-80" id="qa-tab-count-all">(16)</span>
              </button>
              <button onclick="filterQA('tic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80" id="qa-tab-count-tic">(6)</span>
              </button>
              <button onclick="filterQA('insomnia', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80" id="qa-tab-count-insomnia">(1)</span>
              </button>
              <button onclick="filterQA('panic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80" id="qa-tab-count-panic">(1)</span>
              </button>
              <button onclick="filterQA('autonomic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80" id="qa-tab-count-autonomic">(3)</span>
              </button>
              <button onclick="filterQA('stress', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80" id="qa-tab-count-stress">(3)</span>
              </button>
              <button onclick="filterQA('somatic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80" id="qa-tab-count-somatic">(2)</span>
              </button>
            </div>

            <!-- Q&A 카드 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]" id="qa-grid">
              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천 계양구) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">인천 계양구 • 2026-09-10</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 계양구 거주 OO님 (20대 대학원생 / 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-10-tic-5879/" class="hover:underline">
                        물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천 계양구)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      업무와 일상생활을 잘 해내고 싶은 마음은 간절한데, 생각처럼 계획대로 몸이 움직이지 않고 중요한 일정이나 물건을 자주 놓치면서 스스로를 자책하며 많은 스트레스를 받으셨을 것 같습니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 성인ADHD • 집중력저하 • 만성미루기</span>
                  <a href="/qa/qa-2026-09-10-tic-5879/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 아이가 긴장하면 눈 깜빡임과 헛기침 틱을 하는데 스트레스 때문인가요? (경기 시흥시) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">경기 시흥시 • 2026-09-09</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 경기 시흥시 거주 OO님 (초등학생 학부모)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-09-tic-9176/" class="hover:underline">
                        아이가 긴장하면 눈 깜빡임과 헛기침 틱을 하는데 스트레스 때문인가요? (경기 시흥시)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      초등학교 입학 후 아이의 눈 깜빡임과 헛기침 증상이 늘어나면서 걱정이 많으셨겠습니다. 특히 아이가 긴장할 때 증상이 뚜렷해지고 지적하면 더 힘들어하는 모습을 보면서 부모님으로서 마음고생이 크셨으리라 생각됩니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 소아틱장애 • 눈깜빡임 • 음성틱</span>
                  <a href="/qa/qa-2026-09-09-tic-9176/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 신체화 & 담적·두통·턱관절] 식사만 하면 명치가 돌처럼 굳고 트림이 끊이지 않는 담적병 치료 (인천 남동구 구월동) -->
              <article class="qa-item somatic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="somatic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">인천 남동구 구월동 • 2026-09-08</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 남동구 구월동 거주 OO님 (40대 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-08-somatic-1131/" class="hover:underline">
                        식사만 하면 명치가 돌처럼 굳고 트림이 끊이지 않는 담적병 치료 (인천 남동구 구월동)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      식사 후 반복되는 명치의 답답함과 팽만감, 그리고 끊이지 않는 트림으로 일상과 업무 중에 큰 불편과 고통을 겪고 계실 것 같습니다. 위내시경 검사에서는 특별한 궤양이나 용종이 없다고 하는데도 소화제를 먹어도 낫지 않고 답답함이 지속되어 불안감도 크셨으리라 생각됩니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 담적병 • 신경성소화불량 • 명치답답</span>
                  <a href="/qa/qa-2026-09-08-somatic-1131/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 우울증 · 화병 & 번아웃] 가슴이 터질 듯 답답하고 목에 뭔가 걸려 안 넘어가는 화병과 매핵기 (인천 연수구 송도) -->
              <article class="qa-item stress heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="stress">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">인천 연수구 송도 • 2026-09-07</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 연수구 송도 거주 OO님 (50대 주부)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-07-stress-3659/" class="hover:underline">
                        가슴이 터질 듯 답답하고 목에 뭔가 걸려 안 넘어가는 화병과 매핵기 (인천 연수구 송도)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      목구멍에 무언가 걸려 있는 듯한 이물감과 가슴 답답함, 그리고 불쑥 치밀어 오르는 열감으로 일상생활에서 큰 불편을 겪고 계시는군요. 병원 검사에서는 이상이 없다고 하지만 환자분께서 겪으시는 신체적 답답함은 오랜 기간 누적된 스트레스와 정서적 울화가 몸으로 표출된 전형적인 신체화 반응입니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 화병 • 매핵기 • 목이물감</span>
                  <a href="/qa/qa-2026-09-07-stress-3659/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천 서구 청라) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">인천 서구 청라 • 2026-09-06</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 서구 청라 거주 OO님 (20대 대학원생 / 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-06-tic-1968/" class="hover:underline">
                        물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천 서구 청라)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      1. 질환의 원인 및 신경학적 발생 기전
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 성인ADHD • 집중력저하 • 만성미루기</span>
                  <a href="/qa/qa-2026-09-06-tic-1968/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 아이가 긴장하면 눈 깜빡임과 헛기침 틱을 하는데 스트레스 때문인가요? (경기 부천시) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">경기 부천시 • 2026-09-05</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 경기 부천시 거주 OO님 (초등학생 학부모)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-05-tic-2212/" class="hover:underline">
                        아이가 긴장하면 눈 깜빡임과 헛기침 틱을 하는데 스트레스 때문인가요? (경기 부천시)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      1. 질환의 원인 및 신경학적 발생 기전
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 소아틱장애 • 눈깜빡임 • 음성틱</span>
                  <a href="/qa/qa-2026-09-05-tic-2212/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 신체화 & 담적·두통·턱관절] 식사만 하면 명치가 돌처럼 굳고 트림이 끊이지 않는 담적병 치료 (인천 부평구) -->
              <article class="qa-item somatic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="somatic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">신체화 & 담적·두통·턱관절</span>
                    <span class="text-xs text-[#68736E]">인천 부평구 • 2026-09-04</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 부평구 거주 최OO님 (40대 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-04-somatic-8136/" class="hover:underline">
                        식사만 하면 명치가 돌처럼 굳고 트림이 끊이지 않는 담적병 치료 (인천 부평구)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      식사 후 반복되는 명치의 답답함과 팽만감, 그리고 끊이지 않는 트림으로 일상과 업무 중에 큰 불편과 고통을 겪고 계실 것 같습니다. 위내시경 검사에서는 특별한 궤양이나 용종이 없다고 하는데도 소화제를 먹어도 낫지 않고 답답함이 지속되어 불안감도 크셨으리라 생각됩니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 담적병 • 신경성소화불량 • 명치답답</span>
                  <a href="/qa/qa-2026-09-04-somatic-8136/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 우울증 · 화병 & 번아웃] 가슴이 터질 듯 답답하고 목에 뭔가 걸려 안 넘어가는 화병과 매핵기 (인천 서구 검단) -->
              <article class="qa-item stress heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="stress">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">인천 서구 검단 • 2026-09-03</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 서구 검단 거주 윤OO님 (50대 주부)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-03-stress-1944/" class="hover:underline">
                        가슴이 터질 듯 답답하고 목에 뭔가 걸려 안 넘어가는 화병과 매핵기 (인천 서구 검단)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      목구멍에 무언가 걸려 있는 듯한 이물감과 가슴 답답함, 그리고 불쑥 치밀어 오르는 열감으로 일상생활에서 큰 불편을 겪고 계시는군요. 병원 검사에서는 이상이 없다고 하지만 환자분께서 겪으시는 신체적 답답함은 오랜 기간 누적된 스트레스와 정서적 울화가 몸으로 표출된 전형적인 신체화 반응입니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 화병 • 매핵기 • 목이물감</span>
                  <a href="/qa/qa-2026-09-03-stress-1944/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 자율신경 & 실신·어지럼증·이명] 지하철이나 더운 곳에 서 있으면 눈앞이 하얘지며 쓰러지는 미주신경성 실신 (인천 미추홀구) -->
              <article class="qa-item autonomic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">인천 미추홀구 • 2026-09-02</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 미추홀구 거주 김OO님 (20대 대학생 / 여성)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-02-autonomic-4275/" class="hover:underline">
                        지하철이나 더운 곳에 서 있으면 눈앞이 하얘지며 쓰러지는 미주신경성 실신 (인천 미추홀구)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      대중교통이나 사람이 붐비는 장소에서 갑작스러운 식은땀과 메스꺼움, 그리고 의식을 잃고 쓰러지는 경험을 겪으시면서 신체적 충격뿐 아니라 언제 또 쓰러질지 모른다는 극심한 불안감으로 많은 고통을 겪고 계실 것 같습니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 미주신경성실신 • 실신전조증상 • 기립성저혈압</span>
                  <a href="/qa/qa-2026-09-02-autonomic-4275/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 자율신경 & 실신·어지럼증·이명] 귀·뇌 검사는 다 정상인데 머리가 붕 뜨고 어지러운 이유는 무엇인가요? (인천 계양구) -->
              <article class="qa-item autonomic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">인천 계양구 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 계양구 거주 박OO님 (30대 직장인 / 여성)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/qa-2026-09-01-autonomic-7352/" class="hover:underline">
                        귀·뇌 검사는 다 정상인데 머리가 붕 뜨고 어지러운 이유는 무엇인가요? (인천 계양구)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      이비인후과와 신경과에서 정밀 검사를 받았음에도 특별한 이상이 없다는 진단을 받아 답답함과 불안이 크셨을 것으로 생각됩니다. 검사 결과는 정상이지만 환자분께서 느끼시는 머리 멍함(브레인포그)과 붕 뜨는 어지럼증은 결코 기분 탓이나 착각이 아닙니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 만성어지럼증 • 브레인포그 • 자율신경실조증</span>
                  <a href="/qa/qa-2026-09-01-autonomic-7352/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 우울증 · 화병 & 번아웃] 목에 뭔가 걸린 듯 답답하고 가슴에 불이 난 것 같은데 화병과 매핵기인가요? (인천·부평 화병 치료) -->
              <article class="qa-item stress heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="stress">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">우울증 · 화병 & 번아웃</span>
                    <span class="text-xs text-[#68736E]">인천 부평구 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 부평구 삼산동 한OO님 (50대 주부)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/bupyeong-hwabyeong-maehaekgi/" class="hover:underline">
                        목에 뭔가 걸린 듯 답답하고 가슴에 불이 난 것 같은데 화병과 매핵기인가요? (인천·부평 화병 치료)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      목구멍에 무언가 걸려 있는 듯한 이물감과 함께 가슴이 꽉 막히고 열이 훅 치밀어 오르는 증상으로 오랫동안 마음고생이 심하셨을 것으로 생각됩니다. 특히 내시경 검사에서는 아무런 혹이나 염증이 없다고 하니 주위에서는 꾀병으로 여길까 봐 답답함이 더 크셨을 것입니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 화병 • 매핵기 • 목이물감</span>
                  <a href="/qa/bupyeong-hwabyeong-maehaekgi/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천·송도 성인 ADHD) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">인천 연수구 송도 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 연수구 송도동 정OO님 (20대 후반 대학원생)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/songdo-adult-adhd-focus/" class="hover:underline">
                        물건을 매일 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천·송도 성인 ADHD)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      학업과 연구를 잘 해내고 싶은 마음은 간절한데, 생각처럼 계획대로 몸이 움직이지 않고 중요한 일정이나 물건을 자주 놓치면서 스스로를 자책하며 많은 스트레스를 받으셨을 것 같습니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 성인ADHD • 만성미루기 • 집중력저하</span>
                  <a href="/qa/songdo-adult-adhd-focus/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 자율신경 & 실신·어지럼증·이명] 이비인후과·뇌 MRI 다 정상인데 머리가 붕 뜨고 어지러운 이유는 무엇인가요? (인천·청라 자율신경실조증) -->
              <article class="qa-item autonomic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="autonomic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">자율신경 & 실신·어지럼증·이명</span>
                    <span class="text-xs text-[#68736E]">인천 서구 청라 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 서구 청라동 최OO님 (30대 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/cheongra-autonomic-dizziness/" class="hover:underline">
                        이비인후과·뇌 MRI 다 정상인데 머리가 붕 뜨고 어지러운 이유는 무엇인가요? (인천·청라 자율신경실조증)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      수개월째 지속되는 머리 멍함과 붕 뜨는 어지럼증으로 큰 고통을 겪고 계시는군요. 특히 대학병원 이비인후과와 신경과에서 정밀 검사를 받아도 '이상 없음'이라는 결과를 받으셨을 때, 증상은 여전히 심한데 원인을 알 수 없어 더욱 답답하고 불안하셨을 것으로 생각됩니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 만성어지럼증 • 자율신경실조증 • 브레인포그</span>
                  <a href="/qa/cheongra-autonomic-dizziness/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 공황 · 불안 & 강박증] 출근길 지하철에서 숨이 턱 막히고 쓰러질 것 같은데 공황장애인가요? (부천·인천 공황장애) -->
              <article class="qa-item panic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="panic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">공황 · 불안 & 강박증</span>
                    <span class="text-xs text-[#68736E]">경기 부천시 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 경기 부천시 원미구 박OO님 (30대 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/bucheon-panic-hyperventilation/" class="hover:underline">
                        출근길 지하철에서 숨이 턱 막히고 쓰러질 것 같은데 공황장애인가요? (부천·인천 공황장애)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      출근길 대중교통 안에서 갑작스러운 호흡곤란과 심장 두근거림, 그리고 죽을 것 같은 극심한 공포를 겪으시면서 얼마나 놀라고 두려우셨을지 깊이 공감합니다. 특히 응급실 검사에서는 아무 이상이 없다고 하는데도, 다시 발작이 일어날까 봐 외출조차 꺼려지는 예기불안 때문에 일상생활에 큰 지장을 받고 계실 것 같습니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 공황장애 • 공황발작 • 과호흡</span>
                  <a href="/qa/bucheon-panic-hyperventilation/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 불면증 & 수면장애] 수면제를 1년 넘게 먹었는데 한방으로 줄여서 끊을 수 있나요? (인천·부평 불면증 치료) -->
              <article class="qa-item insomnia heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="insomnia">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">불면증 & 수면장애</span>
                    <span class="text-xs text-[#68736E]">인천 남동구 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 남동구 구월동 이OO님 (40대 직장인)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/incheon-insomnia-tapering/" class="hover:underline">
                        수면제를 1년 넘게 먹었는데 한방으로 줄여서 끊을 수 있나요? (인천·부평 불면증 치료)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      수면제를 오랜 기간 복용하시면서 약의 효과는 예전만 못하고, 약을 먹지 않으면 밤을 꼬박 새우게 되어 약물에 의존하게 된 것은 아닌지 많은 두려움과 불안을 겪고 계시는군요.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 불면증 • 수면제감약 • 졸피뎀</span>
                  <a href="/qa/incheon-insomnia-tapering/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 틱장애는 스트레스와 어떤 관계가 있나요? (인천·부평 소아 틱장애) -->
              <article class="qa-item tic heal-card p-6 bg-white flex flex-col justify-between border border-[#DDE6E1] hover:border-[#2F5D50] hover:shadow-lg transition space-y-4 rounded-2xl" data-category="tic">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="heal-tag bg-[#EAF3EF] text-[#2F5D50] font-bold text-xs">소아청소년 & 성인 ADHD·틱</span>
                    <span class="text-xs text-[#68736E]">인천 부평구 • 2026-09-01</span>
                  </div>

                  <!-- Q. 질문 미리보기 -->
                  <div class="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#EADFCB] space-y-1">
                    <div class="flex items-center gap-2 font-bold text-xs text-[#C87941]">
                      <span class="w-4 h-4 rounded-full bg-[#C87941] text-white text-[10px] flex items-center justify-center font-extrabold">Q</span>
                      <span class="truncate">질문자: 인천 부평구 김OO님 (초등학생 학부모)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/bupyeong-tic-stress/" class="hover:underline">
                        틱장애는 스트레스와 어떤 관계가 있나요? (인천·부평 소아 틱장애)
                      </a>
                    </h3>
                  </div>

                  <!-- A. 답변 요약 -->
                  <div class="space-y-1.5 pt-1">
                    <div class="flex items-center gap-1.5 font-bold text-xs text-[#2F5D50]">
                      <span class="w-4 h-4 rounded-full bg-[#2F5D50] text-white text-[10px] flex items-center justify-center font-extrabold">A</span>
                      <span>권형근 대표원장 답변 요약</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed line-clamp-3">
                      초등학교 입학 후 아이의 눈 깜빡임과 헛기침 증상이 늘어나면서 걱정이 많으셨겠습니다. 특히 아이가 긴장할 때 증상이 뚜렷해지고 지적하면 더 힘들어하는 모습을 보면서 부모님으로서 마음고생이 크셨으리라 생각됩니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 소아틱장애 • 눈깜빡임 • 음성틱</span>
                  <a href="/qa/bupyeong-tic-stress/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>
            </div>

            <!-- 페이지네이션 컨트롤 바 -->
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DDE6E1] pt-6 not-prose" id="qa-pagination-wrapper">
              <div class="text-xs sm:text-sm text-[#68736E] font-medium" id="qa-pagination-info">
                총 <strong class="text-[#2F5D50] font-bold" id="qa-total-count">16</strong>개 상담사례 중 <span id="qa-page-range" class="font-semibold text-[#26332E]">1 - 8</span>개 표시
              </div>
              <div class="flex items-center gap-1.5 flex-wrap justify-center" id="qa-pagination-controls">
                <!-- 동적 페이지 번호 버튼 -->
              </div>
            </div>

            <!-- 하단 빠른 상담 CTA 배너 -->
            <div class="heal-card bg-[#F2F7F4] p-6 sm:p-8 rounded-2xl border border-[#DDE6E1] space-y-4 mt-8">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div class="w-16 h-16 rounded-2xl overflow-hidden border border-[#DDE6E1] flex-shrink-0 bg-white shadow-xs">
                  <img src="/images/director.jpg" alt="권형근 대표원장" class="w-full h-full object-cover" />
                </div>
                <div class="space-y-1 text-center sm:text-left flex-1">
                  <h3 class="text-base sm:text-lg font-extrabold text-[#26332E]">
                    "원장님과 1:1 상담 및 진료 예약을 원하시나요?"
                  </h3>
                  <p class="text-xs sm:text-sm text-[#53615B] leading-relaxed">
                    카카오톡 실시간 채팅 상담과 24시간 네이버 예약, 전화 문의를 통해 편리하게 일정을 잡으실 수 있습니다.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a href="https://pf.kakao.com/_Tcxcxoxj" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-comment"></i>
                  <span>카카오톡 1:1 상담</span>
                </a>
                <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-calendar-check"></i>
                  <span>네이버 진료예약</span>
                </a>
                <a href="tel:032-719-3472" class="heal-btn heal-btn-primary text-xs sm:text-sm py-3 px-4 font-bold flex items-center justify-center gap-2">
                  <i class="fa-solid fa-phone"></i>
                  <span>전화 문의 (032-719-3472)</span>
                </a>
              </div>
            </div>

          </div>

          <!-- JavaScript 필터링 & 반응형 페이지네이션 로직 -->
          <script>
            (function() {
              const ITEMS_PER_PAGE = 8;
              let currentCategory = 'all';
              let currentPage = 1;
              let filteredItems = [];

              function getFilteredItems() {
                const allItems = Array.from(document.querySelectorAll('.qa-item'));
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

                const allItems = document.querySelectorAll('.qa-item');
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

                const totalCountEl = document.getElementById('qa-total-count');
                const rangeEl = document.getElementById('qa-page-range');

                if (totalCountEl) totalCountEl.textContent = totalCount;
                if (rangeEl) {
                  if (totalCount === 0) {
                    rangeEl.textContent = '0';
                  } else {
                    rangeEl.textContent = `${startIndex + 1} - ${endIndex}`;
                  }
                }

                renderPaginationControls(totalPages);

                if (scrollToTop) {
                  const sectionEl = document.getElementById('qa-list-section');
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }

              function renderPaginationControls(totalPages) {
                const container = document.getElementById('qa-pagination-controls');
                if (!container) return;

                if (totalPages <= 1) {
                  container.innerHTML = '';
                  return;
                }

                let html = '';
                const prevDisabled = currentPage === 1;
                html += `<button onclick="window.changeQAPage(${currentPage - 1})" ${prevDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${prevDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <i class="fa-solid fa-chevron-left text-[10px]"></i>
                  <span>이전</span>
                </button>`;

                let startPage = Math.max(1, currentPage - 2);
                let endPage = Math.min(totalPages, startPage + 4);
                if (endPage - startPage < 4) {
                  startPage = Math.max(1, endPage - 4);
                }

                if (startPage > 1) {
                  html += `<button onclick="window.changeQAPage(1)" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">1</button>`;
                  if (startPage > 2) {
                    html += `<span class="text-xs text-gray-400 px-1">...</span>`;
                  }
                }

                for (let p = startPage; p <= endPage; p++) {
                  const isActive = p === currentPage;
                  html += `<button onclick="window.changeQAPage(${p})" class="w-8 h-8 rounded-lg text-xs font-bold transition ${isActive ? 'bg-[#2F5D50] text-white shadow-sm' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">${p}</button>`;
                }

                if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                    html += `<span class="text-xs text-gray-400 px-1">...</span>`;
                  }
                  html += `<button onclick="window.changeQAPage(${totalPages})" class="w-8 h-8 rounded-lg text-xs font-bold transition bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white">${totalPages}</button>`;
                }

                const nextDisabled = currentPage === totalPages;
                html += `<button onclick="window.changeQAPage(${currentPage + 1})" ${nextDisabled ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${nextDisabled ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#EAF3EF] text-[#2F5D50] hover:bg-[#2F5D50] hover:text-white'}">
                  <span>다음</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </button>`;

                container.innerHTML = html;
              }

              window.filterQA = function(category, btn) {
                currentCategory = category;
                currentPage = 1;

                const buttons = document.querySelectorAll('.qa-tab-btn');
                buttons.forEach(b => {
                  b.classList.remove('active-tab', 'bg-[#2F5D50]', 'text-white');
                  b.classList.add('bg-white', 'text-[#53615B]');
                });

                if (btn) {
                  btn.classList.add('active-tab', 'bg-[#2F5D50]', 'text-white');
                  btn.classList.remove('bg-white', 'text-[#53615B]');
                }

                updateDisplay(false);
              };

              window.changeQAPage = function(page) {
                currentPage = page;
                updateDisplay(true);
              };

              document.addEventListener('DOMContentLoaded', () => {
                const activeBtn = document.querySelector('.qa-tab-btn.active-tab');
                if (activeBtn) {
                  activeBtn.classList.add('bg-[#2F5D50]', 'text-white');
                }
                updateDisplay(false);
              });
            })();
          </script>

          <style>
            .qa-tab-btn {
              background-color: #ffffff;
              color: #53615B;
              border: 1px solid #DDE6E1;
            }
            .qa-tab-btn.active-tab {
              background-color: #2F5D50 !important;
              color: #ffffff !important;
              border-color: #2F5D50 !important;
            }
            .qa-tab-btn:hover:not(.active-tab) {
              background-color: #EAF3EF;
              color: #2F5D50;
            }
          </style>

        </div>
---
