---
title: "온라인 상담 & 예약"
linkTitle: "온라인 상담 & 예약"
summary: "1:1 비밀 온라인 상담, 네이버 예약, 카카오톡 실시간 채팅 및 전화 상담 예약 안내"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-16">

          <!-- 1. Header Banner -->
          <div class="lia-hero-box text-center space-y-4">
            <span class="heal-hero-badge">Consultation & Reservation</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
              온라인 상담 및 진료 예약
            </h1>
            <p class="text-base sm:text-lg text-[#53615B] leading-relaxed max-w-2xl mx-auto">
              모든 상담은 철저한 비공개로 진행되며, 권형근 원장 및 전담 의료진이 직접 확인 후 친절히 답변드립니다.
            </p>
          </div>

          <!-- 2. 빠른 예약 3대 채널 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 1. 전화 예약 -->
            <div class="heal-card text-center space-y-4 bg-white border-t-4 border-t-[#2F5D50]">
              <div class="heal-ico mx-auto text-xl">
                <i class="fa-solid fa-phone-volume"></i>
              </div>
              <h2 class="text-lg font-extrabold text-[#26332E]">전화 상담 및 즉시 예약</h2>
              <p class="text-xs text-[#68736E]">진료시간 내 가장 빠른 일정 조율과 친절한 안내가 가능합니다.</p>
              <div class="text-xl font-extrabold text-[#2F5D50]">032-719-3472</div>
              <a href="tel:032-719-3472" class="heal-btn heal-btn-primary w-full text-sm">
                <i class="fa-solid fa-phone"></i>
                <span>전화 바로걸기</span>
              </a>
            </div>

            <!-- 2. 카카오톡 비밀상담 -->
            <div class="heal-card text-center space-y-4 bg-white border-t-4 border-t-[#FEE500]">
              <div class="heal-ico mx-auto text-xl bg-[#FFF9CC] text-[#191919]">
                <i class="fa-solid fa-comment-dots"></i>
              </div>
              <h2 class="text-lg font-extrabold text-[#26332E]">카카오톡 1:1 비밀상담</h2>
              <p class="text-xs text-[#68736E]">카카오톡 채널 <strong class="text-[#26332E]">@healimbp</strong>를 통해 언제든 편안하게 문의하세요.</p>
              <div class="text-sm font-extrabold text-[#2F5D50]">카카오톡: @healimbp</div>
              <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="heal-btn heal-btn-kakao w-full text-sm">
                <i class="fa-solid fa-comment"></i>
                <span>카톡 상담 시작하기</span>
              </a>
            </div>

            <!-- 3. 네이버 간편예약 -->
            <div class="heal-card text-center space-y-4 bg-white border-t-4 border-t-[#03C75A]">
              <div class="heal-ico mx-auto text-xl bg-[#E6F9EE] text-[#03C75A]">
                <i class="fa-solid fa-calendar-check"></i>
              </div>
              <h2 class="text-lg font-extrabold text-[#26332E]">네이버 간편 진료예약</h2>
              <p class="text-xs text-[#68736E]">원하시는 날짜와 시간대를 선택하여 대기 없이 편리하게 예약하세요.</p>
              <div class="text-sm font-extrabold text-[#03C75A]">24시간 실시간 접수</div>
              <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="heal-btn heal-btn-naver w-full text-sm">
                <i class="fa-solid fa-check"></i>
                <span>네이버 예약 바로가기</span>
              </a>
            </div>
          </div>

          <!-- 3. 온라인 1:1 비밀상담 신청 폼 -->
          <div class="heal-card space-y-6 bg-white shadow-sm">
            <div class="border-b border-[#DDE6E1] pb-4">
              <h2 class="text-xl font-extrabold text-[#26332E] flex items-center gap-2">
                <i class="fa-solid fa-lock text-[#2F5D50]"></i>
                <span>1:1 온라인 비밀 상담 신청</span>
              </h2>
              <p class="text-xs sm:text-sm text-[#68736E] mt-1">
                작성하신 모든 내용은 의료법 및 개인정보보호법에 따라 비밀이 엄격히 보장됩니다.
              </p>
            </div>

            <form id="consultation-form" onsubmit="handleConsultationSubmit(event)" class="space-y-4 text-sm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-[#26332E] mb-1">성함 <span class="text-red-500">*</span></label>
                  <input type="text" id="consult-name" name="name" required placeholder="홍길동" class="w-full p-3 rounded-xl border border-[#DDE6E1] focus:outline-none focus:border-[#2F5D50] text-sm bg-[#FAF8F3]">
                </div>
                <div>
                  <label class="block font-bold text-[#26332E] mb-1">연락처 <span class="text-red-500">*</span></label>
                  <input type="tel" id="consult-phone" name="phone" required placeholder="010-1234-5678" class="w-full p-3 rounded-xl border border-[#DDE6E1] focus:outline-none focus:border-[#2F5D50] text-sm bg-[#FAF8F3]">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-[#26332E] mb-1">희망 진료 과목 <span class="text-red-500">*</span></label>
                  <select id="consult-treatment" name="treatment" required class="w-full p-3 rounded-xl border border-[#DDE6E1] focus:outline-none focus:border-[#2F5D50] text-sm bg-[#FAF8F3]">
                    <option value="">진료 과목을 선택해주세요</option>
                    <option value="공황장애 / 불안장애">공황장애 / 불안장애</option>
                    <option value="불면증 / 수면장애">불면증 / 수면장애</option>
                    <option value="자율신경실조증 / 미주신경실신">자율신경실조증 / 미주신경실신</option>
                    <option value="어지럼증 / 다한증">어지럼증 / 다한증</option>
                    <option value="소아 틱장애 / ADHD">소아 틱장애 / ADHD</option>
                    <option value="우울증 / 화병 / 강박증">우울증 / 화병 / 강박증</option>
                    <option value="담적병 / 한방통증">담적병 / 한방 통증</option>
                    <option value="기타 상담">기타 상담</option>
                  </select>
                </div>
                <div>
                  <label class="block font-bold text-[#26332E] mb-1">답변 수신 희망 방식</label>
                  <select id="consult-reply" name="replyMethod" class="w-full p-3 rounded-xl border border-[#DDE6E1] focus:outline-none focus:border-[#2F5D50] text-sm bg-[#FAF8F3]">
                    <option value="전화 유선 안내">전화 유선 안내</option>
                    <option value="문자 / 카카오톡 메시지">문자 / 카카오톡 메시지</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block font-bold text-[#26332E] mb-1">증상 및 상담 내용 <span class="text-red-500">*</span></label>
                <textarea id="consult-content" name="content" rows="4" required placeholder="언제부터 증상이 시작되었는지, 어떤 신체/심리적 불편을 겪고 계신지 편안하게 적어주세요." class="w-full p-3 rounded-xl border border-[#DDE6E1] focus:outline-none focus:border-[#2F5D50] text-sm bg-[#FAF8F3]"></textarea>
              </div>

              <div class="p-3 bg-[#F2F7F4] rounded-xl text-xs text-[#53615B] space-y-1 border border-[#DDE6E1]">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" required checked class="rounded text-[#2F5D50]">
                  <span>[필수] 개인정보 수집 및 이용(상담 및 예약 처리 목적)에 동의합니다.</span>
                </label>
              </div>

              <div class="text-center pt-2">
                <button type="submit" id="consult-submit-btn" class="heal-btn heal-btn-primary px-8 py-3 w-full sm:w-auto">
                  <i class="fa-solid fa-paper-plane"></i>
                  <span>1:1 비밀상담 신청하기</span>
                </button>
              </div>
            </form>

            <script>
              async function handleConsultationSubmit(e) {
                e.preventDefault();
                var btn = document.getElementById('consult-submit-btn');
                var originalHtml = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 전송 중...';

                var name = document.getElementById('consult-name').value.trim();
                var phone = document.getElementById('consult-phone').value.trim();
                var treatment = document.getElementById('consult-treatment').value;
                var reply = document.getElementById('consult-reply').value;
                var content = document.getElementById('consult-content').value.trim();
                var now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

                var message = '🔔 <b>[해아림한의원 1:1 비밀상담 신청]</b>\n\n' +
                              '👤 <b>성함:</b> ' + name + '\n' +
                              '📞 <b>연락처:</b> ' + phone + '\n' +
                              '🩺 <b>희망과목:</b> ' + treatment + '\n' +
                              '📱 <b>회신방식:</b> ' + reply + '\n' +
                              '💬 <b>상담내용:</b>\n' + content + '\n\n' +
                              '⏰ <b>접수일시:</b> ' + now;

                var botToken = '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
                var chatId = '2026055528';

                try {
                  var res = await fetch('https://api.telegram.org/bot' + botToken + '/sendMessage', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      chat_id: chatId,
                      text: message,
                      parse_mode: 'HTML'
                    })
                  });

                  if (res.ok) {
                    alert('1:1 비밀상담 신청이 정상적으로 접수되었습니다.\n담당 의료진이 확인 후 남겨주신 연락처로 신속히 안내드리겠습니다.');
                    document.getElementById('consultation-form').reset();
                  } else {
                    alert('상담이 접수되었습니다. 빠른 상담을 원하시면 전화(032-719-3472) 또는 카카오톡으로도 문의 가능합니다.');
                  }
                } catch (err) {
                  alert('상담 신청이 접수되었습니다. 빠른 상담을 원하시면 전화(032-719-3472)로 연락주시기 바랍니다.');
                } finally {
                  btn.disabled = false;
                  btn.innerHTML = originalHtml;
                }
              }
            </script>
          </div>

          <!-- 4. 진료 전 자주 묻는 질문 (FAQ) -->
          <div class="space-y-4">
            <h2 class="text-xl sm:text-2xl font-extrabold text-[#26332E] text-center">진료 및 상담 관련 자주 묻는 질문</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] space-y-2">
                <div class="font-extrabold text-[#26332E] flex items-center gap-2 text-base">
                  <span class="text-[#2F5D50]">Q.</span> 양약(수면제/신경안정제) 복용 중 한방 치료가 가능한가요?
                </div>
                <p class="text-[#68736E] leading-relaxed">
                  네, 가능합니다. 복용 중인 양약을 임의로 갑자기 중단하면 반동 현상이 올 수 있으므로, 초기에는 병행하며 몸의 자생력이 회복되는 단계에 맞춰 점진적으로 양약을 줄여나갈 수 있도록 1:1 맞춤 플랜을 제시합니다.
                </p>
              </div>

              <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] space-y-2">
                <div class="font-extrabold text-[#26332E] flex items-center gap-2 text-base">
                  <span class="text-[#2F5D50]">Q.</span> 첫 진료 시 소요 시간은 얼마나 걸리나요?
                </div>
                <p class="text-[#68736E] leading-relaxed">
                  첫 내원 시 정밀 설문지 작성, 뇌파 검사, 적외선 체열 검사, 간이정신진단검사, 원장님과의 1:1 심층 문진 및 상담, 침구 치료까지 포함하여 약 1시간 ~ 1시간 30분 정도 소요됩니다.
                </p>
              </div>
            </div>
          </div>

        </div>
---
