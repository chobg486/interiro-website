<template>
  <div class="service-page py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12">서비스 소개</h1>

      <!-- Service Types Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold text-center mb-10">제공 서비스</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service Item 1 -->
          <div class="service-item bg-white p-6 rounded-lg shadow-md text-center">
            <img src="~/assets/images/portfolio_01.jpg" alt="전체 리모델링" class="w-full h-40 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold mb-2">전체 리모델링</h3>
            <p class="text-gray-600 text-sm">주거 공간 전체를 새롭게 디자인하고 시공하여 라이프스타일에 맞는 최적의 환경을 제공합니다.</p>
          </div>
          <!-- Service Item 2 -->
          <div class="service-item bg-white p-6 rounded-lg shadow-md text-center">
            <img src="~/assets/images/portfolio_02.jpg" alt="부분 인테리어" class="w-full h-40 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold mb-2">부분 인테리어</h3>
            <p class="text-gray-600 text-sm">주방, 욕실, 거실 등 특정 공간에 집중하여 기능성과 디자인을 개선하는 맞춤형 솔루션입니다.</p>
          </div>
          <!-- Service Item 3 -->
          <div class="service-item bg-white p-6 rounded-lg shadow-md text-center">
             <img src="~/assets/images/portfolio_03.jpg" alt="신축 컨설팅" class="w-full h-40 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold mb-2">신축 컨설팅</h3>
            <p class="text-gray-600 text-sm">건축 초기 단계부터 참여하여 공간 설계 및 인테리어 전반에 대한 전문적인 컨설팅을 제공합니다.</p>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="mb-16 bg-gray-100 p-10 rounded-lg">
        <h2 class="text-3xl font-semibold text-center mb-10">서비스 프로세스</h2>
        <div class="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
          <!-- Process Step -->
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-2xl font-bold">1</div>
            <h4 class="font-semibold">상담 및 실측</h4>
            <p class="text-sm text-gray-600">요구사항 파악 및 현장 방문</p>
          </div>
          <div class="text-gray-400 hidden md:block">&rarr;</div>
          <!-- Process Step -->
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-2xl font-bold">2</div>
            <h4 class="font-semibold">디자인 제안</h4>
            <p class="text-sm text-gray-600">컨셉 및 3D 시안 제공</p>
          </div>
           <div class="text-gray-400 hidden md:block">&rarr;</div>
          <!-- Process Step -->
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-2xl font-bold">3</div>
            <h4 class="font-semibold">계약 및 시공</h4>
            <p class="text-sm text-gray-600">세부 일정 조율 및 공사 진행</p>
          </div>
           <div class="text-gray-400 hidden md:block">&rarr;</div>
          <!-- Process Step -->
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-2xl font-bold">4</div>
            <h4 class="font-semibold">마무리 및 점검</h4>
            <p class="text-sm text-gray-600">최종 확인 및 사후 관리</p>
          </div>
        </div>
      </section>

      <!-- Customer Reviews Section (Placeholder) -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold text-center mb-10">고객 후기</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote class="bg-white p-6 rounded-lg shadow italic border-l-4 border-blue-500">
            <p>"꼼꼼한 상담과 제안 덕분에 상상했던 것보다 더 멋진 공간이 완성되었어요. 정말 감사합니다!"</p>
            <footer class="mt-4 text-sm text-gray-600">- 김 O O 고객님</footer>
          </blockquote>
          <blockquote class="bg-white p-6 rounded-lg shadow italic border-l-4 border-blue-500">
            <p>"프로세스가 투명하고 소통이 원활해서 믿고 맡길 수 있었습니다. 결과물도 대만족입니다."</p>
            <footer class="mt-4 text-sm text-gray-600">- 박 O O 고객님</footer>
          </blockquote>
        </div>
      </section>

      <!-- Pricing Section (Placeholder) -->
      <section class="mb-16 text-center">
        <h2 class="text-3xl font-semibold mb-4">가격 정보</h2>
        <p class="text-gray-700 mb-6">
          프로젝트의 규모와 범위, 사용 자재에 따라 비용이 달라집니다. 정확한 견적은 상담을 통해 안내해 드립니다.
        </p>
        <NuxtLink to="/contact" class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md font-medium transition duration-300">
          견적 문의하기
        </NuxtLink>
      </section>

    </div>
  </div>
</template>

<script lang="ts" setup>
// Add specific logic for the service page if needed
// e.g., fetching customer reviews
</script>

<style scoped>
/* Add specific styles for the service page */
</style>
