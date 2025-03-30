<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section h-screen bg-cover bg-center flex items-center justify-center text-white relative" style="background-image: url(heroImage);">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">기분 좋은 인테리어의 시작과 끝</h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">첫 상담부터 마무리까지 표준화된 프로세스와 정직하고 일관된 견적 시스템, 취향을 찾아주는 디자인까지. 페르323와 함께한 인테리어는 기대와 설렘이 가득합니다.</p>
        <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300">상담 신청하기</NuxtLink>
      </div>
    </section>

    <!-- Branch Information Section -->
    <section class="branch-info py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">지점 안내</h2>
        <p class="text-gray-600">아파트멘터리 반포점 OPEN</p>
        <p class="text-gray-600">부산 인테리어도 아파트멘터리에서</p>
      </div>
    </section>

    <!-- Our Special Moments Section -->
    <section class="moments py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">우리만의 특별한 순간</h2>
        <p class="text-gray-600">꿈꾸던 아파트라이프를 기록합니다.</p>
      </div>
    </section>

    <!-- Pet Section -->
    <section class="pet py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">반려동물을 위한 작은 배려</h2>
        <p class="text-gray-600">가족 모두를 위한 서비스, PET</p>
      </div>
    </section>

    <!-- Interior Journey Section -->
    <section class="journey py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">한눈에 보는 인테리어 여정</h2>
        <p class="text-gray-600">길고 복잡한 인테리어, 쉽게 설명해 드립니다.</p>
      </div>
    </section>

    <!-- Apartmentary is Apartment Section -->
    <section class="apartmentary py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">아파트는 아파트멘터리</h2>
        <p class="text-gray-600">남다른 인테리어 서비스, 아파트멘터리를 소개합니다.</p>
      </div>
    </section>

    <!-- Relaxation Section -->
    <section class="relaxation py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">온전한 휴식이 가능한 안식처</h2>
        <p class="text-gray-600">일상에서 찾는 사소한 행복</p>
      </div>
    </section>

    <!-- Taste Section -->
    <section class="taste py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">취향이 느껴지는 아파트</h2>
        <p class="text-gray-600">공간에 온전히 담긴 라이프 스타일</p>
      </div>
    </section>

    <!-- Old Apartment Section -->
    <section class="old-apartment py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">오래된 아파트의 새로운 모습</h2>
        <p class="text-gray-600">연식있는 집일수록 숙련된 전문가에게 맡겨야 합니다.</p>
      </div>
    </section>

    <!-- Remodeling Experience Section -->
    <section class="remodeling-experience py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">기대와 설렘이 가득한 리모델링 경험</h2>
        <p class="text-gray-600">리모델링을 결심한 순간부터 쌓이는 걱정과 고민, 아파트멘터리가 함께 해결해 드립니다.</p>
      </div>
    </section>

    <!-- 30s Apartment Section -->
    <section class="apartment-30s py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">공간 활용도를 높인 30평대 아파트</h2>
      </div>
    </section>

    <!-- Long Time Apartment Section -->
    <section class="long-time-apartment py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">오래도록 아름다운 구축 아파트</h2>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="customer-reviews py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">아파트멘터리와 함께한 분들의 후기</h2>
      </div>
    </section>

    <!-- Information Section -->
    <section class="information py-16 bg-gray-200">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">정보</h2>
        <p class="text-gray-600">회사 소개 | 아파트멘터리 브랜드 | 아파트멘터리 파츠 | 오피스멘터리 | 채용 정보</p>
        <p class="text-gray-600">안내 | 가까운 직영점 | 자주 묻는 질문</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import PortfolioPreview from '~/components/PortfolioPreview.vue'
import heroImage from '~/assets/images/portfolio_01.jpg'

// Add any specific logic for the homepage here
// e.g., fetching data for the hero section or news
</script>

<style scoped>
/* Add specific styles for the homepage if needed */
.hero-section {
  /* You might want to add parallax effects or other styles */
}
</style>
