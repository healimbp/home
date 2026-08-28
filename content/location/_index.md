---
title: "오시는 길 & 진료시간"
linkTitle: "오시는 길 & 진료시간"
summary: "인천 부평역 7번 출구 도보 5분. 월·수·금 저녁 8시 야간진료, 토·공휴일 점심시간 없이 진료"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-6 space-y-8">

          <!-- 1. Header (참조 이미지 스타일: Location 서브텍스트 + 타이틀 + 우측 다크 필 버튼 2개) -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div class="text-sm font-bold text-[#3B4A6B] tracking-wide mb-1">Location</div>
              <h1 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111827] tracking-tight">
                해아림한의원 인천부평점 <span class="text-[#202947] font-black underline decoration-[#3B4A6B] decoration-2 underline-offset-8">오시는 길</span>
              </h1>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <a href="/reviews/" class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#202947] text-white text-xs sm:text-sm font-bold hover:bg-[#2F3C64] transition shadow-sm">
                치료사례 더보기
              </a>
              <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#202947] text-white text-xs sm:text-sm font-bold hover:bg-[#2F3C64] transition shadow-sm">
                네이버 지도 바로가기
              </a>
            </div>
          </div>

          <!-- 2. 와이드 지도 영역 (부평역 7번 출구 경원대로 1412 인터랙티브 맵) -->
          <div class="w-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white relative">
            <div class="relative w-full h-[380px] sm:h-[430px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.617513812836!2d126.72147397637888!3d37.4933934720573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d0360a0f0ef%3A0x6a0c0a5a3a789a9!2z7J247Lap6rSR7Jet7IucIOu2gO2Pieq1rCDqsr3sm5DrjIDroZwgMTQxMg!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="해아림한의원 인천부평점 오시는 길 지도">
              </iframe>

              <!-- 지도 위 커스텀 오버레이 핀 뱃지 -->
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2.5 rounded-xl border border-[#E2E8F0] shadow-md pointer-events-auto flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-[#202947] text-white flex items-center justify-center text-xs font-black">
                  해
                </div>
                <div>
                  <div class="text-xs font-extrabold text-[#111827]">해아림한의원 인천부평점</div>
                  <div class="text-[11px] text-[#64748B]">부평역 7번 출구 도보 5분</div>
                </div>
              </div>

              <!-- 지도 바로가기 액션 버튼 -->
              <div class="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-auto">
                <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="bg-[#03C75A] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-md hover:bg-[#02b150] transition flex items-center gap-1.5">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <span>네이버 길찾기</span>
                </a>
                <a href="https://map.kakao.com/?q=%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="bg-[#FEE500] text-black text-xs font-bold px-3 py-2 rounded-lg shadow-md hover:bg-[#edd500] transition flex items-center gap-1.5">
                  <i class="fa-solid fa-location-arrow"></i>
                  <span>카카오맵</span>
                </a>
              </div>
            </div>
          </div>

          <!-- 3. 상세 정보 2컬럼 레이아웃 (완벽한 1:1 대칭 프리미엄 카드) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 items-stretch">
            
            <!-- [좌측 카드] 위치 & 교통 안내 -->
            <div class="bg-white rounded-3xl border border-[#DDE6E1] p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
              <!-- 헤더 -->
              <div class="flex items-center justify-between border-b border-[#F1F5F4] pb-4">
                <div class="flex items-center gap-2.5">
                  <div class="w-10 h-10 rounded-2xl bg-[#EAF3EF] text-[#2F5D50] flex items-center justify-center text-lg shadow-inner">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h2 class="text-base sm:text-lg font-extrabold text-[#202947]">위치 & 교통 안내</h2>
                    <p class="text-xs text-[#64748B]">부평역 7번 출구에서 350m (도보 5분)</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-full">지상 2층</span>
              </div>

              <!-- 주소 안내 및 복사 바 -->
              <div class="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE5] flex items-center justify-between gap-3">
                <div class="space-y-0.5">
                  <div class="text-xs sm:text-sm font-extrabold text-[#202947]">인천 부평구 경원대로 1412 (부평동 534-48)</div>
                  <div class="text-[11px] text-[#64748B]">스타벅스 부평역점 방면 직진 도로변</div>
                </div>
                <button onclick="navigator.clipboard.writeText('인천 부평구 경원대로 1412'); alert('주소가 복사되었습니다.');" class="text-xs font-bold text-[#2F5D50] hover:bg-[#EAF3EF] px-3 py-1.5 rounded-xl border border-[#DDE6E1] transition shrink-0 bg-white shadow-2xs">
                  주소복사
                </button>
              </div>

              <!-- 교통편 3대 항목 목록 -->
              <div class="space-y-4 text-xs sm:text-sm text-[#334155]">
                <!-- 지하철 -->
                <div class="space-y-1">
                  <div class="font-extrabold text-[#202947] flex items-center gap-2">
                    <i class="fa-solid fa-train-subway text-[#2F5D50]"></i>
                    <span>지하철 1호선 · 인천 1호선 부평역</span>
                  </div>
                  <p class="text-xs text-[#64748B] pl-6">
                    지상 1층 <strong>7번 출구(북광장)</strong>로 나와서 스타벅스 방면으로 직진 350m (도보 5분)
                  </p>
                </div>

                <!-- 버스 -->
                <div class="space-y-1">
                  <div class="font-extrabold text-[#202947] flex items-center gap-2">
                    <i class="fa-solid fa-bus text-[#2F5D50]"></i>
                    <span>시내버스 정류장</span>
                  </div>
                  <div class="pl-6 text-xs text-[#64748B] space-y-0.5">
                    <div>• <strong>부평역 7번출구:</strong> 11, 23, 30, 45, 88, 551</div>
                    <div>• <strong>부평시장 입구:</strong> 564, 574, 9500, 1400</div>
                  </div>
                </div>

                <!-- 주차 안내 -->
                <div class="space-y-1">
                  <div class="font-extrabold text-[#202947] flex items-center gap-2">
                    <i class="fa-solid fa-square-parking text-[#2F5D50]"></i>
                    <span>주차 지원 안내</span>
                  </div>
                  <div class="pl-6 text-xs text-[#64748B] space-y-0.5">
                    <div>• <strong>본 건물:</strong> 건물 내 기계식 주차장 완비 (일반 승용차 무료 주차 지원)</div>
                    <div>• <strong>SUV/대형차:</strong> 인근 공영주차장 이용 시 주차비 전액 지원</div>
                  </div>
                </div>
              </div>

              <!-- 하단 길찾기 팁 박스 -->
              <div class="p-3 rounded-2xl bg-[#FFF9E6] border border-[#F4D06F] text-[#855B00] text-xs leading-relaxed flex items-start gap-2">
                <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5 shrink-0"></i>
                <div><strong>도보 길찾기 팁:</strong> 복잡한 지하상가 대신 지상 <strong>부평역 7번 출구(북광장)</strong>로 나오시면 가장 쉽고 빠르게 찾아오실 수 있습니다.</div>
              </div>
            </div>

            <!-- [우측 카드] 진료시간 & 예약 안내 -->
            <div class="bg-white rounded-3xl border border-[#DDE6E1] p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
              <!-- 헤더 -->
              <div class="flex items-center justify-between border-b border-[#F1F5F4] pb-4">
                <div class="flex items-center gap-2.5">
                  <div class="w-10 h-10 rounded-2xl bg-[#EAF3EF] text-[#2F5D50] flex items-center justify-center text-lg shadow-inner">
                    <i class="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <h2 class="text-base sm:text-lg font-extrabold text-[#202947]">진료시간 & 예약 안내</h2>
                    <p class="text-xs text-[#64748B]">월·수·금 저녁 8시 야간진료 | 토·공휴일 연속진료</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#2F5D50] bg-[#EAF3EF] px-2.5 py-1 rounded-full">사전 예약제</span>
              </div>

              <!-- 전화번호 바로걸기 바 -->
              <div class="p-3.5 rounded-2xl bg-[#F8FAF9] border border-[#E2EAE5] flex items-center justify-between gap-3">
                <div class="space-y-0.5">
                  <div class="text-[11px] font-bold text-[#64748B]">대표 전화 및 예약 문의</div>
                  <a href="tel:032-719-3472" class="text-lg font-extrabold text-[#202947] hover:text-[#2F5D50] transition">032-719-3472</a>
                </div>
                <a href="tel:032-719-3472" class="text-xs font-bold bg-[#2F5D50] text-white hover:bg-[#202947] px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-xs shrink-0">
                  <i class="fa-solid fa-phone text-[10px]"></i>
                  <span>전화걸기</span>
                </a>
              </div>

              <!-- 진료시간 테이블 -->
              <div class="space-y-1.5 text-xs sm:text-sm">
                <!-- 월/수/금 야간진료 -->
                <div class="flex items-center justify-between p-2 rounded-xl bg-[#EAF3EF] text-[#2F5D50] font-extrabold">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#2F5D50]"></span>
                    월 · 수 · 금 <span class="text-[11px] font-normal opacity-90">(야간진료)</span>
                  </span>
                  <span class="tracking-tight">10:00 - 20:00</span>
                </div>

                <!-- 화요일 -->
                <div class="flex items-center justify-between p-2 rounded-xl text-[#334155] font-medium hover:bg-[#F8FAF9]">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#CBD5E1]"></span>
                    화요일 <span class="text-[11px] text-[#64748B]">(주간진료)</span>
                  </span>
                  <span class="font-bold text-[#1E293B] tracking-tight">10:00 - 19:00</span>
                </div>

                <!-- 목요일 정기휴진 -->
                <div class="flex items-center justify-between p-2 rounded-xl text-[#94A3B8] font-medium hover:bg-[#F8FAF9]">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#CBD5E1]"></span>
                    목요일
                  </span>
                  <span class="text-xs font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-md">정기휴진</span>
                </div>

                <!-- 토요일 연속진료 -->
                <div class="flex items-center justify-between p-2 rounded-xl bg-[#F8FAF9] text-[#1E293B] font-bold">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#202947]"></span>
                    토요일 <span class="text-[11px] text-[#2F5D50] font-semibold">(점심시간 없음)</span>
                  </span>
                  <span class="tracking-tight">09:00 - 15:00</span>
                </div>

                <!-- 공휴일 연속진료 -->
                <div class="flex items-center justify-between p-2 rounded-xl text-[#334155] font-medium hover:bg-[#F8FAF9]">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#CBD5E1]"></span>
                    공휴일 <span class="text-[11px] text-[#2F5D50] font-semibold">(점심시간 없음)</span>
                  </span>
                  <span class="font-bold text-[#1E293B] tracking-tight">09:00 - 13:00</span>
                </div>

                <!-- 일요일 정기휴진 -->
                <div class="flex items-center justify-between p-2 rounded-xl text-[#94A3B8] font-medium hover:bg-[#F8FAF9]">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#CBD5E1]"></span>
                    일요일
                  </span>
                  <span class="text-xs font-bold text-[#DC2626] bg-[#FEE2E2] px-2 py-0.5 rounded-md">정기휴진</span>
                </div>
              </div>

              <!-- 안내 각주 & 예약 바로가기 버튼 그룹 -->
              <div class="space-y-3">
                <div class="p-2.5 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-[11px] text-[#0369A1] flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-info shrink-0"></i>
                  <span>평일 점심시간(13:00~14:00) / 사전 예약제로 대기시간을 최소화합니다.</span>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="py-2.5 px-3 rounded-xl bg-[#03C75A] text-white text-xs font-extrabold hover:bg-[#02B150] transition shadow-xs flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-calendar-check"></i>
                    <span>네이버 간편예약</span>
                  </a>
                  <a href="https://pf.kakao.com/_Tcxcxoxj" target="_blank" rel="noopener" class="py-2.5 px-3 rounded-xl bg-[#FEE500] text-[#191919] text-xs font-extrabold hover:bg-[#FDD835] transition shadow-xs flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-comment"></i>
                    <span>카톡 1:1 상담</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
---
