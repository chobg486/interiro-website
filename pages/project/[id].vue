<template>
  <div class="project-detail-page py-12">
    <div v-if="project" class="container mx-auto px-4">
      <!-- Project Title -->
      <h1 class="text-4xl font-bold text-center mb-8">{{ project.title }}</h1>

      <!-- Image Gallery/Slider -->
      <div class="image-gallery mb-10">
        <!-- Placeholder for main image or slider component -->
        <!-- Clicking image should open a full-screen slider -->
        <img
          :src="project.imageUrl"
          :alt="project.title"
          class="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg cursor-pointer"
          @click="openFullScreenSlider"
        />
        <!-- Add thumbnails or slider controls here -->
        <p class="text-center text-sm text-gray-500 mt-2">이미지를 클릭하면 전체 화면 슬라이더로 전환됩니다 (구현 예정).</p>
      </div>

      <!-- Project Details Section -->
      <div class="details grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-semibold mb-4">프로젝트 설명</h2>
          <p class="text-gray-700 leading-relaxed">
            {{ project.description || '상세 설명이 여기에 추가됩니다.' }}
          </p>
          <!-- Customer Evaluation Placeholder -->
           <div class="mt-6">
             <h3 class="text-xl font-semibold mb-2">고객 평가</h3>
             <p class="text-gray-600 italic">"매우 만족스러운 결과였습니다..." (샘플 평가)</p>
           </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">상세 정보</h2>
          <ul class="space-y-2 text-gray-700">
            <li><strong>아파트명:</strong> {{ project.apartmentName || '정보 없음' }}</li>
            <li><strong>시공 범위:</strong> {{ project.scope || '정보 없음' }}</li>
            <li><strong>시공 시기:</strong> {{ project.period || '정보 없음' }}</li>
            <li><strong>평형:</strong> {{ project.size }}</li>
            <li><strong>시공 기간:</strong> {{ project.duration || '정보 없음' }}</li>
            <li>
              <strong>키워드:</strong>
              <span v-if="project.tags.length > 0" class="ml-1">
                <span v-for="(tag, index) in project.tags" :key="tag" class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs mr-1">
                  #{{ tag }}
                </span>
              </span>
              <span v-else>정보 없음</span>
            </li>
             <li><strong>스타일:</strong> {{ project.style || '정보 없음' }}</li>
             <li><strong>예산:</strong> {{ project.budget }}</li>
          </ul>
        </div>
      </div>

      <!-- Related Projects Section (Placeholder) -->
      <div class="related-projects border-t pt-10">
        <h2 class="text-2xl font-semibold text-center mb-8">관련 프로젝트</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Placeholder for related project cards -->
          <div v-for="n in 3" :key="n" class="bg-gray-100 p-4 rounded-lg text-center">관련 프로젝트 {{ n }}</div>
        </div>
      </div>

      <!-- Full Screen Slider Modal (Placeholder) -->
       <div v-if="isSliderOpen" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" @click.self="closeFullScreenSlider">
         <div class="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative">
            <button @click="closeFullScreenSlider" class="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-1 text-2xl leading-none">&times;</button>
            <p class="text-black">전체 화면 이미지 슬라이더 구현 영역</p>
            <img :src="project.imageUrl" :alt="project.title" class="max-w-full max-h-[80vh] object-contain"/>
            <!-- Add slider controls (prev/next) here -->
         </div>
       </div>

    </div>
    <div v-else class="text-center py-20">
      <p class="text-xl text-gray-500">프로젝트 정보를 불러오는 중이거나 해당 프로젝트가 존재하지 않습니다.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// --- Types ---
interface Project {
  id: number;
  title: string;
  type: string;
  size: string;
  budget: string;
  imageUrl: string; // Main image for now
  images?: string[]; // Array of images for gallery/slider
  style: string;
  tags: string[];
  description?: string;
  apartmentName?: string;
  scope?: string; // 시공 범위
  period?: string; // 시공 시기
  duration?: string; // 시공 기간
  // Add other fields as needed
}

// --- Reactive Data ---
const route = useRoute()
const projectId = computed(() => parseInt(route.params.id as string, 10))
const project = ref<Project | null>(null)
const isSliderOpen = ref(false)

// Placeholder data fetching function - replace with actual API/Firestore call
const fetchProjectData = (id: number): Project | null => {
  // Simulate fetching data based on ID
  const projects: Project[] = [
    { id: 1, title: '모던 미니멀 하우스', type: '아파트', size: '32평', budget: '5000만원', imageUrl: '~/assets/images/portfolio_01.jpg', style: 'minimal', tags: ['거실', '주방'], description: '깔끔하고 현대적인 미니멀리즘 스타일로 디자인된 32평 아파트입니다.', apartmentName: '래미안 팰리스', scope: '전체 리모델링', period: '2024년 상반기', duration: '4주' },
    { id: 2, title: '따뜻한 내추럴 홈', type: '빌라', size: '45평', budget: '7000만원', imageUrl: '~/assets/images/portfolio_02.jpg', style: 'natural', tags: ['침실', '욕실'], description: '자연 소재를 활용하여 따뜻하고 아늑한 분위기를 연출한 45평 빌라입니다.', apartmentName: '힐스테이트 빌리지', scope: '거실, 주방, 침실', period: '2023년 하반기', duration: '6주' },
    { id: 3, title: '세련된 도시 아파트', type: '아파트', size: '24평', budget: '4000만원', imageUrl: '~/assets/images/portfolio_03.jpg', style: 'modern', tags: ['거실', '현관'], description: '도시적인 감각과 모던한 디자인이 돋보이는 24평 아파트 인테리어입니다.', apartmentName: '아이파크 타워', scope: '전체 리모델링', period: '2024년 1분기', duration: '3주' },
    // Add other projects corresponding to the portfolio list (ensure paths start with /images/)
    { id: 4, title: '클래식 프렌치 스타일', type: '단독주택', size: '60평', budget: '1억원', imageUrl: '~/assets/images/portfolio_04.jpg', style: 'classic', tags: ['주방', '베란다'], description: '우아하고 클래식한 프렌치 스타일의 60평 단독주택입니다.', apartmentName: '프레스티지 하우스', scope: '전체 리모델링', period: '2023년 4분기', duration: '8주' },
    { id: 5, title: '감각적인 스튜디오', type: '오피스텔', size: '15평', budget: '3000만원', imageUrl: '~/assets/images/portfolio_05.jpg', style: 'modern', tags: ['거실'], description: '젊은 감각의 모던한 15평 오피스텔 인테리어입니다.', apartmentName: '더샵 센트럴', scope: '부분 리모델링', period: '2024년 2분기', duration: '2주' },
    { id: 6, title: '북유럽풍 아파트', type: '아파트', size: '34평', budget: '6000만원', imageUrl: '~/assets/images/portfolio_01.jpg', style: 'natural', tags: ['침실', '주방', '욕실'], description: '밝고 따뜻한 북유럽 스타일로 꾸민 34평 아파트입니다.', apartmentName: '자이 아파트', scope: '전체 리모델링', period: '2023년 3분기', duration: '5주' },
  ];
  return projects.find(p => p.id === id) || null;
}

// --- Methods ---
const openFullScreenSlider = () => {
  // Logic to open a full-screen image slider/modal
  console.log('Open full screen slider for project:', project.value?.title);
  isSliderOpen.value = true;
  // This will likely involve a dedicated slider component or library
}

const closeFullScreenSlider = () => {
  isSliderOpen.value = false;
}

// --- Lifecycle Hooks ---
onMounted(() => {
  project.value = fetchProjectData(projectId.value)
})

</script>

<style scoped>
/* Add specific styles for the project detail page */
</style>
