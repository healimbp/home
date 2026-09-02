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
                전체보기 <span class="text-[11px] opacity-80" id="qa-tab-count-all">(7)</span>
              </button>
              <button onclick="filterQA('tic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                소아청소년 & 성인 ADHD·틱 <span class="text-[11px] opacity-80" id="qa-tab-count-tic">(2)</span>
              </button>
              <button onclick="filterQA('insomnia', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                불면증 & 수면장애 <span class="text-[11px] opacity-80" id="qa-tab-count-insomnia">(1)</span>
              </button>
              <button onclick="filterQA('panic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                공황 · 불안 & 강박증 <span class="text-[11px] opacity-80" id="qa-tab-count-panic">(1)</span>
              </button>
              <button onclick="filterQA('autonomic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                자율신경 & 실신·어지럼증·이명 <span class="text-[11px] opacity-80" id="qa-tab-count-autonomic">(2)</span>
              </button>
              <button onclick="filterQA('stress', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                우울증 · 화병 & 번아웃 <span class="text-[11px] opacity-80" id="qa-tab-count-stress">(1)</span>
              </button>
              <button onclick="filterQA('somatic', this)" class="qa-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition">
                신체화 & 담적·두통·턱관절 <span class="text-[11px] opacity-80" id="qa-tab-count-somatic">(0)</span>
              </button>
            </div>

            <!-- Q&A 카드 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]" id="qa-grid">
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
                      <span class="truncate">질문자: 인천 계양구 거주 OO님 (30대 직장인 / 여성)</span>
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
                      수승화강 탕약으로 상체의 열을 내리고 뇌 혈류를 복원하며, 상부경추 추나요법으로 뇌간 자율신경 중추의 압박을 해소합니다.
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 자율신경실조증 • 어지럼증 • 미주신경실신</span>
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
                      이비인후과 내시경 검사상 식도나 후두에 아무런 혹이나 물리적 이물질이 없음에도 목에 무언가 걸려 있는 듯한 느낌을 한의학에서는 '매핵기(梅核氣)'라고 부릅니다. 이는 마치 매실 씨앗(梅核)이 목에 걸려 뱉으려 해도 나오지 않고 삼키려 해도 넘어가지 않는 증상을 뜻합니다. 서양의학에서는 이를 '인두 신경증(Globus Hy...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 화병 • 매핵기 • 우울증한방치료</span>
                  <a href="/qa/bupyeong-hwabyeong-maehaekgi/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 성인이 되어서도 물건을 자주 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천·송도 성인 ADHD) -->
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
                        성인이 되어서도 물건을 자주 잃어버리고 마감 직전까지 일을 미루는데 성인 ADHD인가요? (인천·송도 성인 ADHD)
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
                      많은 분들이 성인 ADHD를 단순한 '의지 부족'이나 '게으름'으로 오해하고 자책합니다. 하지만 성인 ADHD는 성격의 문제가 아니라 뇌 전두엽(Frontal Lobe)의 '실행기능(Executive Function)'과 도파민 조절 장애에서 비롯되는 신경발달학적 질환입니다. 단순 게으름: 쉬고 싶어서 의도적으로 일을 안...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 소아틱장애 • 성인ADHD • 두뇌훈련</span>
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
                      이비인후과(귀의 평형기관)와 신경과(뇌의 기질적 이상) 검사에서 이상이 없다는 것은 구조적 파괴나 뇌 질환(뇌경색, 종양 등)이 없다는 뜻입니다. 하지만 혈관의 수축과 이완, 뇌로 가는 혈류량, 심장 박동을 조절하는 '기능적 신경계'인 자율신경계(교감-부교감신경)에 불균형이 생기면 다음과 같은 비회전성 만성 어지럼증이 발...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 자율신경실조증 • 어지럼증 • 미주신경실신</span>
                  <a href="/qa/cheongra-autonomic-dizziness/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 공황 · 불안 & 강박증] 지하철이나 밀폐된 곳에서 숨이 턱 막히고 죽을 것 같은데 공황장애인가요? (부천·인천 공황장애) -->
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
                      <span class="truncate">질문자: 부천시 원미구 중동 박OO님 (30대 남성)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/bucheon-panic-hyperventilation/" class="hover:underline">
                        지하철이나 밀폐된 곳에서 숨이 턱 막히고 죽을 것 같은데 공황장애인가요? (부천·인천 공황장애)
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
                      질문해주신 증상은 공황장애(Panic Disorder)의 전형적인 '공황발작' 및 '예기불안(Anticipatory Anxiety)' 양상입니다. 공황발작은 실제 생명을 위협하는 신체 질환이 있는 것이 아니라, 뇌의 편도체(Amygdala)라는 공포 중추가 오작동하여 "지금 당장 죽을 것 같다"는 잘못된 비상경보를 울리는...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 공황장애 • 예기불안 • 과호흡응급대처</span>
                  <a href="/qa/bucheon-panic-hyperventilation/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 불면증 & 수면장애] 수면제를 1년 넘게 복용 중인데 한방으로 줄이거나 끊을 수 있을까요? (인천·부평 불면증 치료) -->
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
                      <span class="truncate">질문자: 인천 남동구 구월동 이OO님 (40대 여성)</span>
                    </div>
                    <h3 class="text-base font-extrabold text-[#26332E] leading-snug hover:text-[#2F5D50] transition">
                      <a href="/qa/incheon-insomnia-tapering/" class="hover:underline">
                        수면제를 1년 넘게 복용 중인데 한방으로 줄이거나 끊을 수 있을까요? (인천·부평 불면증 치료)
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
                      수면유도제(졸피뎀 계열)나 신경안정제(벤조디아제핀 계열)는 뇌의 억제성 신경전달물질인 GABA 수용체에 강제로 작용하여 뇌 신경을 일시적으로 마취시키듯 잠을 유도합니다. 장기간 복용 시 뇌 스스로 잠을 준비하고 멜라토닌을 분비하는 자연 수면 메커니즘이 퇴화하게 됩니다. 이때 환자분이 임의로 약을 갑자기 끊으면 뇌가 극심한...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 수면장애 • 불면증한의원 • 수면제감약</span>
                  <a href="/qa/incheon-insomnia-tapering/" class="inline-flex items-center gap-1 font-bold text-[#2F5D50] bg-[#EAF3EF] px-3.5 py-1.5 rounded-lg hover:bg-[#2F5D50] hover:text-white transition shrink-0">
                    <span>답변 전체보기</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </article>

              <!-- [Q&A | 소아청소년 & 성인 ADHD·틱] 틱장애는 스트레스와 어떤 관계가 있나요? (인천·부평 소아 및 성인 틱장애) -->
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
                        틱장애는 스트레스와 어떤 관계가 있나요? (인천·부평 소아 및 성인 틱장애)
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
                      해아림한의원에서는 틱 증상 억제에만 급급한 대증 치료가 아니라, 아이의 뇌 신경계가 스스로 운동과 음성을 자연스럽게 통제할 수 있도록 자생력을 기르는 근본 치료를 시행합니다. 3대 정밀 검사: 뇌파(EEG) 검사, 자율신경계(HRV) 스트레스 검사, 체열 진단 및 SCL-90R 심리 평가를 통해 뇌 과각성 상태를 객관적으...
                    </p>
                  </div>
                </div>

                <div class="pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-xs">
                  <span class="text-[#68736E] truncate max-w-[200px] sm:max-w-none">• 소아틱장애 • 성인ADHD • 두뇌훈련</span>
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
                총 <strong class="text-[#2F5D50] font-bold" id="qa-total-count">7</strong>개 상담사례 중 <span id="qa-page-range" class="font-semibold text-[#26332E]">1 - 7</span>개 표시
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
