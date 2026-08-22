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

          <!-- 3. 상세 정보 2컬럼 레이아웃 (참조 이미지 완벽 동일 구조) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            <!-- [좌측 영역] 주소 & 교통편 박스 -->
            <div class="space-y-4">
              <!-- 주소 헤더 -->
              <div class="space-y-1">
                <div class="flex items-start gap-2 text-base sm:text-lg font-bold text-[#111827]">
                  <i class="fa-solid fa-location-dot text-[#202947] mt-1 text-base"></i>
                  <span>인천 부평구 경원대로 1412 (부평동)</span>
                </div>
                <p class="text-xs sm:text-sm text-[#64748B] pl-6">
                  부평역 7번 출구에서 350m, 도보 5분
                </p>
              </div>

              <!-- 회색 라운드 교통안내 박스 (참조 이미지와 동일) -->
              <div class="bg-[#F1F3F6] rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-[#334155]">
                
                <!-- 버스 안내 -->
                <div class="space-y-2">
                  <div class="flex items-center gap-2 font-bold text-[#1E293B]">
                    <i class="fa-solid fa-bus text-[#202947]"></i>
                    <span>버스</span>
                    <div class="flex items-center gap-1 flex-wrap">
                      <span class="px-2 py-0.5 rounded bg-[#202947] text-white text-[11px] font-semibold">부평역 7번출구</span>
                      <span class="px-2 py-0.5 rounded bg-[#334155] text-white text-[11px] font-semibold">부평시장 입구</span>
                    </div>
                  </div>
                  <div class="pl-6 space-y-1 text-xs text-[#475569]">
                    <div><strong class="text-[#1E293B]">일반 :</strong> 11, 23, 30, 45, 88, 551</div>
                    <div><strong class="text-[#1E293B]">직행/광역 :</strong> 564, 574, 9500, 1400</div>
                  </div>
                </div>

                <!-- 지하철 안내 & 도보 꿀팁 -->
                <div class="space-y-1.5 border-t border-[#E2E8F0] pt-3">
                  <div class="flex items-center gap-2 font-bold text-[#1E293B]">
                    <i class="fa-solid fa-train-subway text-[#202947]"></i>
                    <span>지하철 & 도보 안내</span>
                  </div>
                  <div class="pl-6 space-y-1 text-xs text-[#475569]">
                    <p><strong class="text-[#1E293B]">지하철 1호선 · 인천 1호선 부평역 7번 출구</strong>에서 스타벅스 방면으로 직진 350m (도보 5분)</p>
                    <p class="p-2.5 bg-[#FFF9E6] border border-[#F4D06F] text-[#855B00] rounded-xl leading-relaxed">
                      💡 <strong>도보 길찾기 팁:</strong> 부평역 지하상가 출구가 복잡하므로, 지상 1층 <strong>부평역 7번 출구(북광장)</strong>로 나오셔서 대로변을 따라 직진하시면 가장 쉽고 빠르게 찾아오실 수 있습니다.
                    </p>
                  </div>
                </div>

                <!-- 주차 안내 상세 -->
                <div class="space-y-1.5 border-t border-[#E2E8F0] pt-3">
                  <div class="flex items-center gap-2 font-bold text-[#1E293B]">
                    <i class="fa-solid fa-square-parking text-[#202947]"></i>
                    <span>주차 안내 (진료 시 무료 주차 지원)</span>
                  </div>
                  <div class="pl-6 space-y-1.5 text-xs text-[#475569]">
                    <div>• <strong>본 건물 주차장:</strong> 건물 내 기계식 주차장 완비 (일반 승용차 무료 주차 지원)</div>
                    <div>• <strong>대형차/SUV 주차:</strong> 차량 크기로 기계식 진입이 어려우신 경우, 인근 제휴 및 공영주차장 이용 시 주차비를 전액 지원해 드립니다.</div>
                    <div>• <strong>네비게이션 검색:</strong> '해아림한의원 인천부평점' 또는 '경원대로 1412' 검색</div>
                  </div>
                </div>

              </div>
            </div>

            <!-- [우측 영역] 전화번호 & 진료시간 안내 (참조 이미지와 동일) -->
            <div class="space-y-4">
              <!-- 전화번호 헤더 -->
              <div class="flex items-center gap-2 text-base sm:text-lg font-bold text-[#111827]">
                <i class="fa-solid fa-phone text-[#202947] text-base"></i>
                <a href="tel:032-719-3472" class="hover:text-[#202947] transition">032-719-3472</a>
              </div>

              <!-- 진료시간 섹션 -->
              <div class="space-y-3">
                <div class="flex items-center gap-2 font-bold text-sm sm:text-base text-[#111827]">
                  <i class="fa-regular fa-clock text-[#202947]"></i>
                  <span>진료시간 안내</span>
                </div>

                <!-- 시간 목록 (균등 정렬) -->
                <div class="space-y-2.5 text-xs sm:text-sm text-[#334155] pl-6 font-medium">
                  <div class="flex justify-between items-center max-w-[340px] p-2 rounded-lg bg-[#EAF3EF] font-bold text-[#2F5D50]">
                    <span>월요일 / 수요일 / 금요일 (야간)</span>
                    <span>10:00 - 20:00</span>
                  </div>
                  <div class="flex justify-between items-center max-w-[340px]">
                    <span>화 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-bold text-[#111827]">10:00 - 19:00</span>
                  </div>
                  <div class="flex justify-between items-center max-w-[340px] text-[#A67C1E]">
                    <span>목 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-bold">정기 휴진</span>
                  </div>
                  <div class="flex justify-between items-center max-w-[340px] p-2 rounded-lg bg-[#F8FAF9] font-bold text-[#26332E]">
                    <span>토 &nbsp; 요 &nbsp; 일 (연속진료)</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div class="flex justify-between items-center max-w-[340px]">
                    <span>공 &nbsp; 휴 &nbsp; 일 (연속진료)</span>
                    <span class="font-bold text-[#111827]">09:00 - 13:00</span>
                  </div>
                  <div class="flex justify-between items-center max-w-[340px] text-red-600">
                    <span>일 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-bold">정기 휴진</span>
                  </div>
                </div>

                <!-- 안내 각주 (하늘색/청록색 포인트) -->
                <div class="pt-3 pl-6 space-y-1 text-xs text-[#0284C7] font-semibold">
                  <div>* 토요일 / 공휴일은 점심시간 없이 진료합니다.</div>
                  <div class="text-[#64748B]">* 평일 점심시간: 13:00 - 14:00</div>
                  <div>* 예약제를 통해 대기 시간을 최소화하고 있습니다.</div>
                </div>

                <!-- 예약 바로가기 버튼 그룹 -->
                <div class="pt-4 pl-6 flex flex-wrap gap-2.5">
                  <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl bg-[#03C75A] text-white text-xs font-extrabold hover:bg-[#02B150] transition shadow flex items-center gap-1.5">
                    <i class="fa-solid fa-calendar-check"></i>
                    <span>네이버 간편예약</span>
                  </a>
                  <a href="https://open.kakao.com/o/sgbnTRJi" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl bg-[#FEE500] text-[#191919] text-xs font-extrabold hover:bg-[#FDD835] transition shadow flex items-center gap-1.5">
                    <i class="fa-solid fa-comment"></i>
                    <span>카톡 1:1 상담</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
---
