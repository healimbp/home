---
title: "오시는 길 & 진료시간"
linkTitle: "오시는 길 & 진료시간"
summary: "인천 부평역 7번 출구 도보 5분. 월·수·금 저녁 8시 야간진료, 토·공휴일 점심시간 없이 진료"
type: landing
sections:
  - block: html
    content:
      html: |
        <div class="w-full max-w-5xl mx-auto py-4 space-y-10">

          <!-- 1. Header Section (참조 이미지 스타일) -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#DDE6E1]">
            <div class="space-y-1">
              <div class="text-xs font-bold text-[#68736E] uppercase tracking-wider">Location</div>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#26332E]">
                해아림한의원 인천부평점 <span class="text-[#2F5D50] underline decoration-[#ADC4BA] underline-offset-8">오시는 길</span>
              </h1>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <a href="/reviews/" class="inline-flex items-center px-4 py-2 rounded-full bg-[#1F3F36] text-white text-xs sm:text-sm font-bold hover:bg-[#2F5D50] transition shadow-sm">
                치료사례 더보기
              </a>
              <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="inline-flex items-center px-4 py-2 rounded-full bg-[#1F3F36] text-white text-xs sm:text-sm font-bold hover:bg-[#2F5D50] transition shadow-sm">
                네이버 지도 바로가기
              </a>
            </div>
          </div>

          <!-- 2. 지도 영역 (와이드 맵 컨테이너 & 인터랙티브 지도) -->
          <div class="w-full rounded-2xl overflow-hidden border border-[#DDE6E1] shadow-sm bg-white relative">
            <div class="relative w-full h-[380px] sm:h-[440px]">
              <!-- 카카오/오픈스트리트맵 기반 부평역 7번출구 경원대로 1412 인터랙티브 맵 -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.617513812836!2d126.72147397637888!3d37.4933934720573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d0360a0f0ef%3A0x6a0c0a5a3a789a9!2z7J247Lap6rSR7Jet7IucIOu2gO2Pieq1rCDqsr3sm5DrjIDroZwgMTQxMg!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="해아림한의원 인천부평점 지도 위치">
              </iframe>

              <!-- 지도 위 커스텀 오버레이 핀 카드 -->
              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl border border-[#DDE6E1] shadow-md pointer-events-auto max-w-[280px]">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-[#2F5D50] text-white flex items-center justify-center text-xs font-bold">
                    해
                  </div>
                  <div>
                    <div class="text-xs font-extrabold text-[#26332E]">해아림한의원 인천부평점</div>
                    <div class="text-[11px] text-[#68736E]">부평역 7번 출구 도보 5분</div>
                  </div>
                </div>
              </div>

              <!-- 지도 바로가기 플로팅 버튼 -->
              <div class="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-auto">
                <a href="https://map.naver.com/p/search/%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="bg-[#03C75A] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-md hover:bg-[#02b150] transition flex items-center gap-1.5">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <span>네이버 길찾기</span>
                </a>
                <a href="https://map.kakao.com/?q=%ED%95%B4%EC%95%84%EB%A6%BC%ED%95%9C%EC%9D%98%EC%9B%90%20%EC%9D%B8%EC%B2%9C%EB%B6%80%ED%8F%89%EC%A0%90" target="_blank" rel="noopener" class="bg-[#FEE500] text-black text-xs font-bold px-3 py-2 rounded-lg shadow-md hover:bg-[#edd500] transition flex items-center gap-1.5">
                  <i class="fa-solid fa-location-arrow"></i>
                  <span>카카오맵 길찾기</span>
                </a>
              </div>
            </div>
          </div>

          <!-- 3. 상세 정보 2컬럼 레이아웃 (참조 이미지 완벽 구현) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            
            <!-- [왼쪽 컬럼] 위치 및 교통편 안내 -->
            <div class="space-y-4">
              <!-- 주소 헤더 -->
              <div class="space-y-1">
                <div class="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#26332E]">
                  <i class="fa-solid fa-location-dot text-[#2F5D50]"></i>
                  <span>인천광역시 부평구 경원대로 1412 (부평동)</span>
                </div>
                <p class="text-xs sm:text-sm text-[#68736E] pl-6">
                  부평역 7번 출구에서 350m, 도보 5분 거리
                </p>
              </div>

              <!-- 교통편 그레이 박스 -->
              <div class="bg-[#F6F8F7] border border-[#E2EAE6] rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-[#3D4D47]">
                
                <!-- 버스 안내 -->
                <div class="space-y-2">
                  <div class="flex items-center gap-2 font-bold text-[#26332E]">
                    <i class="fa-solid fa-bus text-[#2F5D50]"></i>
                    <span>버스</span>
                    <div class="flex items-center gap-1">
                      <span class="px-2 py-0.5 rounded bg-[#2F5D50] text-white text-[11px] font-semibold">부평역 정류장</span>
                      <span class="px-2 py-0.5 rounded bg-[#417364] text-white text-[11px] font-semibold">부평시장 입구</span>
                    </div>
                  </div>
                  <div class="pl-6 space-y-1 text-xs text-[#53615B] leading-relaxed">
                    <div><strong>일반 :</strong> 11, 23, 30, 45, 88, 551</div>
                    <div><strong>간선/광역 :</strong> 564, 574, 9500, 1400 (부천·인천 광역 연계)</div>
                  </div>
                </div>

                <div class="border-t border-[#E2EAE6]"></div>

                <!-- 지하철 안내 -->
                <div class="space-y-1">
                  <div class="flex items-center gap-2 font-bold text-[#26332E]">
                    <i class="fa-solid fa-train-subway text-[#2F5D50]"></i>
                    <span>지하철</span>
                  </div>
                  <p class="pl-6 text-xs text-[#53615B]">
                    <strong>1호선 · 인천 1호선 부평역 7번 출구</strong> 나와서 350m 직진 (도보 5분)
                  </p>
                </div>

                <div class="border-t border-[#E2EAE6]"></div>

                <!-- 주차 안내 -->
                <div class="space-y-1">
                  <div class="flex items-center gap-2 font-bold text-[#26332E]">
                    <i class="fa-solid fa-square-parking text-[#2F5D50]"></i>
                    <span>주차 안내</span>
                  </div>
                  <p class="pl-6 text-xs text-[#53615B]">
                    건물 내 기계식 주차장 및 인근 제휴 주차장 이용 가능 (진료 시 무료 주차권 지원)
                  </p>
                </div>

              </div>
            </div>

            <!-- [오른쪽 컬럼] 전화번호 및 진료시간 안내 -->
            <div class="space-y-4">
              <!-- 대표 전화 헤더 -->
              <div class="flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#26332E]">
                <i class="fa-solid fa-phone text-[#2F5D50]"></i>
                <a href="tel:032-719-3472" class="hover:text-[#2F5D50] transition">032-719-3472</a>
              </div>

              <!-- 진료시간 섹션 -->
              <div class="space-y-3">
                <div class="flex items-center gap-2 font-bold text-sm sm:text-base text-[#26332E]">
                  <i class="fa-regular fa-clock text-[#2F5D50]"></i>
                  <span>진료시간 안내</span>
                </div>

                <!-- 시간 정렬 리스트 -->
                <div class="bg-white border border-[#DDE6E1] rounded-2xl p-5 shadow-sm space-y-2 text-xs sm:text-sm">
                  <div class="flex justify-between items-center py-1 border-b border-[#F2F7F4]">
                    <span class="font-bold text-[#26332E]">월요일 / 수요일 / 금요일</span>
                    <span class="font-extrabold text-[#2F5D50]">10:00 - 20:00 <span class="text-[11px] bg-[#EAF3EF] text-[#2F5D50] px-1.5 py-0.5 rounded font-bold ml-1">야간진료</span></span>
                  </div>
                  <div class="flex justify-between items-center py-1 border-b border-[#F2F7F4]">
                    <span class="font-medium text-[#3D4D47]">화 &nbsp; 요 &nbsp; 일</span>
                    <span class="text-[#3D4D47] font-semibold">10:00 - 19:00</span>
                  </div>
                  <div class="flex justify-between items-center py-1 border-b border-[#F2F7F4] text-[#A67C1E]">
                    <span class="font-medium">목 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-bold">정기 휴진</span>
                  </div>
                  <div class="flex justify-between items-center py-1 border-b border-[#F2F7F4]">
                    <span class="font-bold text-[#26332E]">토 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-extrabold text-[#2F5D50]">09:00 - 15:00</span>
                  </div>
                  <div class="flex justify-between items-center py-1 border-b border-[#F2F7F4]">
                    <span class="font-bold text-[#26332E]">공 &nbsp; 휴 &nbsp; 일</span>
                    <span class="font-extrabold text-[#2F5D50]">09:00 - 13:00</span>
                  </div>
                  <div class="flex justify-between items-center py-1 text-red-500">
                    <span class="font-medium">일 &nbsp; 요 &nbsp; 일</span>
                    <span class="font-bold">정기 휴무</span>
                  </div>

                  <!-- 안내 각주 -->
                  <div class="pt-3 space-y-1 text-[11px] font-bold text-[#2F5D50]">
                    <div>* 토요일 / 공휴일은 점심시간 없이 연속 진료합니다.</div>
                    <div class="text-[#68736E] font-medium">* 평일 점심시간: 13:00 - 14:00</div>
                    <div class="text-[#A67C1E]">* 매주 목요일 및 일요일은 휴진입니다.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
---
