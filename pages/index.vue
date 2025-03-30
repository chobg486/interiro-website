<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero-section h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style="background-image: url('/images/placeholder-hero.jpg');" <!-- Placeholder image -->
    >
      <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay -->
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          기분 좋은 인테리어의 시작과 끝
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          첫 상담부터 마무리까지 표준화된 프로세스와 정직하고 일관된 견적 시스템, 취향을 찾아주는 디자인까지. 페르323와 함께한 인테리어는 기대와 설렘이 가득합니다.
        </p>
        <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300">
          상담 신청하기
        </NuxtLink>
      </div>
    </section>

    <!-- Recent Portfolio Section -->
    <PortfolioPreview />

    <!-- Business Areas Section -->
    <section class="business-areas py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">사업 영역</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">전체 리모델링</h3>
            <p class="text-gray-600">주거 공간의 전반적인 개선을 위한 종합 리모델링 솔루션.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">부분 인테리어</h3>
            <p class="text-gray-600">주방, 욕실 등 특정 공간의 맞춤형 인테리어 디자인.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-3">신축 컨설팅</h3>
            <p class="text-gray-600">새로운 건축물의 초기 단계부터 참여하는 인테리어 컨설팅.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News/Events Section (Placeholder) -->
    <section class="latest-news py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">최신 소식 및 이벤트</h2>
        <p class="text-gray-600">관련 소식이 업데이트될 예정입니다.</p>
        <!-- Content will be added here later -->
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>
import PortfolioPreview from '~/components/PortfolioPreview.vue'

// Add any specific logic for the homepage here
// e.g., fetching data for the hero section or news
</script>

<style scoped>
/* Add specific styles for the homepage if needed */
.hero-section {
  /* You might want to add parallax effects or other styles */
}
</style>
