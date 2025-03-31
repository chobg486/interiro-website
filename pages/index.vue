<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section h-screen bg-cover bg-center flex items-center justify-center text-white relative" :style="{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">기분 좋은 인테리어의 시작과 끝</h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">첫 상담부터 마무리까지 표준화된 프로세스와 정직하고 일관된 견적 시스템, 취향을 찾아주는 디자인까지. 페르323와 함께한 인테리어는 기대와 설렘이 가득합니다.</p>
        <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300">상담 신청하기</NuxtLink>
      </div>
      <div class="absolute bottom-5 left-0 w-full flex justify-center">
        <span v-for="(url, index) in imageUrls" :key="index" class="dot" :class="{ active: index === currentImageIndex }" @click="currentImageIndex = index"></span>
      </div>
    </section>

    <!-- Section Data -->
    <section v-for="(section, index) in sectionData" :key="index" class="py-16 fade-up" :class="{'bg-gray-100': index % 2 === 0}">
      <div class="container mx-auto px-4 flex items-center" :class="{'flex-row-reverse': index % 2 !== 0}">
        <div class="w-1/2">
          <img :src="section.image" :alt="section.title" class="rounded-lg shadow-md">
        </div>
        <div class="w-1/2 px-8">
          <h2 class="text-3xl font-bold mb-4">{{ section.title }}</h2>
          <p class="text-gray-600" v-if="section.description1">{{ section.description1 }}</p>
          <p class="text-gray-600" v-if="section.description2">{{ section.description2 }}</p>
          <p class="text-gray-600" v-if="section.description">{{ section.description }}</p>
        </div>
      </div>
    </section>

    <!-- Information Section -->
    <section class="information py-16 bg-gray-200 fade-up">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-10">정보</h2>
        <p class="text-gray-600">회사 소개 | 아파트멘터리 브랜드 | 아파트멘터리 파츠 | 오피스멘터리 | 채용 정보</p>
        <p class="text-gray-600">안내 | 가까운 직영점 | 자주 묻는 질문</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import PortfolioPreview from '~/components/PortfolioPreview.vue';
import heroImage from '~/assets/images/portfolio_01.jpg';
import portfolio_02 from '~/assets/images/portfolio_02.jpg';
import portfolio_03 from '~/assets/images/portfolio_03.jpg';
import portfolio_04 from '~/assets/images/portfolio_04.jpg';
import portfolio_05 from '~/assets/images/portfolio_05.jpg';

const imageUrls = ref([
  heroImage,
  portfolio_02,
  portfolio_03,
  portfolio_04,
  portfolio_05
]);

import portfolio01 from '~/assets/images/portfolio_01.jpg';
import portfolio02 from '~/assets/images/portfolio_02.jpg';
import portfolio03 from '~/assets/images/portfolio_03.jpg';
import portfolio04 from '~/assets/images/portfolio_04.jpg';
import portfolio05 from '~/assets/images/portfolio_05.jpg';

const currentImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % imageUrls.value.length;
  }, 5000);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });
});

const sectionData = ref([
  {
    title: '지점 안내',
    description1: '아파트멘터리 반포점 OPEN',
    description2: '부산 인테리어도 아파트멘터리에서',
    image: portfolio01
  },
  {
    title: '우리만의 특별한 순간',
    description: '꿈꾸던 아파트라이프를 기록합니다.',
    image: portfolio02
  },
  {
    title: '반려동물을 위한 작은 배려',
    description: '가족 모두를 위한 서비스, PET',
    image: portfolio03
  },
  {
    title: '한눈에 보는 인테리어 여정',
    description: '길고 복잡한 인테리어, 쉽게 설명해 드립니다.',
    image: portfolio04
  },
  {
    title: '아파트는 아파트멘터리',
    description: '남다른 인테리어 서비스, 아파트멘터리를 소개합니다.',
    image: portfolio05
  },
  {
    title: '온전한 휴식이 가능한 안식처',
    description: '일상에서 찾는 사소한 행복',
    image: portfolio01
  },
  {
    title: '취향이 느껴지는 아파트',
    description: '공간에 온전히 담긴 라이프 스타일',
    image: portfolio02
  },
  {
    title: '오래된 아파트의 새로운 모습',
    description: '연식있는 집일수록 숙련된 전문가에게 맡겨야 합니다.',
    image: portfolio03
  },
  {
    title: '기대와 설렘이 가득한 리모델링 경험',
    description: '리모델링을 결심한 순간부터 쌓이는 걱정과 고민, 아파트멘터리가 함께 해결해 드립니다.',
    image: portfolio04
  },
  {
    title: '공간 활용도를 높인 30평대 아파트',
    image: portfolio05
  },
  {
    title: '오래도록 아름다운 구축 아파트',
    image: portfolio01
  },
  {
    title: '아파트멘터리와 함께한 분들의 후기',
    image: portfolio02
  }
]);
// Add any specific logic for the homepage here
// e.g., fetching data for the hero section or news
</script>

<style scoped>
/* Add specific styles for the homepage if needed */
.hero-section {
  /* You might want to add parallax effects or other styles */
  transition: background-image 0.5s ease-in-out;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dot.active {
  background-color: #717171;
}

/* Fade-up animation */
.fade-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
