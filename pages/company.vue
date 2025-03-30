<template>
  <div class="company-page py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12">회사 소개</h1>

      <!-- About Section -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-3xl font-semibold mb-4">페르323 이야기</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              저희 페르323는 고객의 삶에 가치를 더하는 공간을 창조하기 위해 설립되었습니다. 다년간의 경험과 혁신적인 디자인 철학을 바탕으로, 단순한 인테리어를 넘어 고객의 라이프스타일에 맞는 맞춤형 공간 솔루션을 제공합니다.
            </p>
            <p class="text-gray-700 leading-relaxed">
              정직한 소통과 투명한 프로세스를 통해 고객과의 신뢰를 최우선으로 생각하며, 최고의 만족을 드리기 위해 끊임없이 노력하고 있습니다.
            </p>
          </div>
          <div>
            <!-- Placeholder for an image about the company -->
            <img src="~/assets/images/portfolio_01.jpg" alt="회사 소개 이미지" class="rounded-lg shadow-md w-full h-auto object-cover">
          </div>
        </div>
      </section>

      <!-- Vision & Mission Section -->
      <section class="mb-16 bg-gray-100 p-10 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-3">비전</h3>
            <p class="text-gray-700">모든 이가 꿈꾸는 공간을 현실로 만드는 최고의 인테리어 파트너가 되는 것.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-3">미션</h3>
            <p class="text-gray-700">창의적인 디자인과 전문적인 시공, 진정성 있는 소통을 통해 고객의 삶의 질을 향상시키는 것.</p>
          </div>
        </div>
      </section>

      <!-- Team Section (Placeholder) -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-10">전문가 팀</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Repeat for each team member -->
          <div class="text-center">
            <img src="~/assets/images/portfolio_02.jpg" alt="팀원 사진" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md">
            <h4 class="font-semibold text-lg">팀원 이름</h4>
            <p class="text-sm text-gray-600">직책 (예: 수석 디자이너)</p>
          </div>
          <div class="text-center">
            <img src="~/assets/images/portfolio_03.jpg" alt="팀원 사진" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md">
            <h4 class="font-semibold text-lg">팀원 이름</h4>
            <p class="text-sm text-gray-600">직책</p>
          </div>
          <div class="text-center">
            <img src="~/assets/images/portfolio_04.jpg" alt="팀원 사진" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md">
            <h4 class="font-semibold text-lg">팀원 이름</h4>
            <p class="text-sm text-gray-600">직책</p>
          </div>
          <div class="text-center">
            <img src="~/assets/images/portfolio_05.jpg" alt="팀원 사진" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md">
            <h4 class="font-semibold text-lg">팀원 이름</h4>
            <p class="text-sm text-gray-600">직책</p>
          </div>
        </div>
      </section>

      <!-- Media/Press Section (Placeholder) -->
      <section>
        <h2 class="text-3xl font-bold text-center mb-10">미디어 & 보도자료</h2>
        <div class="text-center text-gray-600">
          관련 보도자료 및 미디어 콘텐츠가 업데이트될 예정입니다.
          <!-- Add links or embeds here -->
        </div>
      </section>

    </div>
  </div>
</template>

<script lang="ts" setup>
// Add specific logic for the company page if needed
// e.g., fetching team member data
</script>

<style scoped>
/* Add specific styles for the company page */
</style>
