<template>
  <section class="portfolio-preview py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">최근 포트폴리오</h2>
      <!-- Placeholder for Carousel -->
      <!-- In a real application, you would use a library like Swiper.js or implement a custom carousel -->
      <div class="flex space-x-6 overflow-x-auto pb-4">
        <!-- Repeat this block for each portfolio item (fetching data dynamically later) -->
        <div v-for="item in recentPortfolios" :key="item.id" class="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden">
          <NuxtLink :to="`/project/${item.id}`">
            <img :src="item.imageUrl" alt="Portfolio Item" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">{{ item.type }} | {{ item.size }} | {{ item.budget }}</p>
            </div>
          </NuxtLink>
        </div>
        <!-- End of repeat block -->
      </div>
      <div class="text-center mt-8">
         <NuxtLink to="/portfolio" class="text-blue-600 hover:underline">전체 포트폴리오 보기</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Placeholder data - replace with actual data fetching logic (e.g., from Firestore)
const recentPortfolios = ref([
  { id: 1, title: '모던 미니멀 하우스', type: '아파트', size: '32평', budget: '5000만원', imageUrl: '~/assets/images/portfolio_01.jpg' },
  { id: 2, title: '따뜻한 내추럴 홈', type: '빌라', size: '45평', budget: '7000만원', imageUrl: '~/assets/images/portfolio_02.jpg' },
  { id: 3, title: '세련된 도시 아파트', type: '아파트', size: '24평', budget: '4000만원', imageUrl: '~/assets/images/portfolio_03.jpg' },
  { id: 4, title: '클래식 프렌치 스타일', type: '단독주택', size: '60평', budget: '1억원', imageUrl: '~/assets/images/portfolio_04.jpg' },
  { id: 5, title: '감각적인 스튜디오', type: '오피스텔', size: '15평', budget: '3000만원', imageUrl: '~/assets/images/portfolio_05.jpg' },
])

// Add logic for carousel functionality if needed (e.g., using a library)
</script>

<style scoped>
/* Add styles for the carousel or preview section */
/* Hide scrollbar for aesthetic purposes, but keep scroll functionality */
.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.overflow-x-auto {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
