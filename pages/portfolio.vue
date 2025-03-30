<template>
  <div class="portfolio-page py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12">포트폴리오</h1>

      <!-- Filters Section -->
      <div class="filters mb-10 p-6 bg-gray-100 rounded-lg shadow">
        <h3 class="text-xl font-semibold mb-4">필터</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <!-- Example Filter: Style -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">스타일</label>
            <select v-model="filters.style" class="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="">전체</option>
              <option value="modern">모던</option>
              <option value="minimal">미니멀</option>
              <option value="natural">내추럴</option>
              <option value="classic">클래식</option>
              <!-- Add more styles -->
            </select>
          </div>
          <!-- Example Filter: Budget -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">예산</label>
            <select v-model="filters.budget" class="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="">전체</option>
              <option value="3000">~3천만원</option>
              <option value="5000">~5천만원</option>
              <option value="7000">~7천만원</option>
              <option value="10000">~1억원</option>
              <option value="10001">1억원 이상</option>
            </select>
          </div>
          <!-- Example Filter: Space -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">공간</label>
             <select v-model="filters.space" class="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="">전체</option>
              <option value="apartment">아파트</option>
              <option value="villa">빌라</option>
              <option value="house">단독주택</option>
              <option value="studio">오피스텔/원룸</option>
              <!-- Add more space types -->
            </select>
          </div>
           <!-- Example Filter: Size (평형) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">평형</label>
             <select v-model="filters.size" class="w-full border border-gray-300 rounded-md p-2 text-sm">
              <option value="">전체</option>
              <option value="10">10평대</option>
              <option value="20">20평대</option>
              <option value="30">30평대</option>
              <option value="40">40평대</option>
              <option value="50">50평 이상</option>
            </select>
          </div>
          <!-- Example Filter: Tags -->
           <div class="col-span-2">
             <label class="block text-sm font-medium text-gray-700 mb-1">태그</label>
             <div class="flex flex-wrap gap-2">
                <button
                  v-for="tag in availableTags"
                  :key="tag"
                  @click="toggleTag(tag)"
                  :class="['px-3 py-1 rounded-full text-xs border', filters.tags.includes(tag) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50']"
                >
                  {{ tag }}
                </button>
             </div>
           </div>
        </div>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in filteredPortfolios" :key="item.id" class="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300">
          <NuxtLink :to="`/project/${item.id}`">
            <img :src="item.imageUrl" :alt="item.title" class="w-full h-56 object-cover">
            <div class="p-5">
              <h3 class="font-semibold text-xl mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 mb-1">{{ item.type }} | {{ item.size }}</p>
              <p class="text-sm text-gray-600">예산: {{ item.budget }}</p>
              <div class="mt-3 flex flex-wrap gap-1">
                 <span v-for="tag in item.tags" :key="tag" class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">#{{ tag }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

       <!-- No Results Message -->
       <div v-if="filteredPortfolios.length === 0" class="text-center py-10 text-gray-500">
         선택한 조건에 맞는 포트폴리오가 없습니다.
       </div>

      <!-- Pagination (Placeholder) -->
      <div class="pagination mt-12 text-center">
        <!-- Pagination controls will be added here -->
        <p class="text-gray-500">페이지네이션 구현 예정</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// --- Types ---
interface PortfolioItem {
  id: number;
  title: string;
  type: string; // 공간 종류 (아파트, 빌라 등)
  size: string; // 평형
  budget: string; // 예산
  imageUrl: string;
  style: string; // 스타일 (모던, 미니멀 등)
  tags: string[]; // 태그 (거실, 주방 등)
  // Add other relevant fields like budgetValue for filtering
  budgetValue: number;
  sizeValue: number;
}

interface Filters {
  style: string;
  budget: string;
  space: string;
  size: string;
  tags: string[];
}

// --- Reactive Data ---
const filters = ref<Filters>({
  style: '',
  budget: '',
  space: '',
  size: '',
  tags: [],
})

const availableTags = ref(['거실', '주방', '침실', '욕실', '현관', '베란다'])

// Placeholder portfolio data - replace with actual data fetching
const allPortfolios = ref<PortfolioItem[]>([
  { id: 1, title: '모던 미니멀 하우스', type: '아파트', size: '32평', budget: '5000만원', budgetValue: 5000, sizeValue: 30, imageUrl: '~/assets/images/portfolio_01.jpg', style: 'minimal', tags: ['거실', '주방'] },
  { id: 2, title: '따뜻한 내추럴 홈', type: '빌라', size: '45평', budget: '7000만원', budgetValue: 7000, sizeValue: 40, imageUrl: '~/assets/images/portfolio_02.jpg', style: 'natural', tags: ['침실', '욕실'] },
  { id: 3, title: '세련된 도시 아파트', type: '아파트', size: '24평', budget: '4000만원', budgetValue: 4000, sizeValue: 20, imageUrl: '~/assets/images/portfolio_03.jpg', style: 'modern', tags: ['거실', '현관'] },
  { id: 4, title: '클래식 프렌치 스타일', type: '단독주택', size: '60평', budget: '1억원', budgetValue: 10000, sizeValue: 60, imageUrl: '~/assets/images/portfolio_04.jpg', style: 'classic', tags: ['주방', '베란다'] },
  { id: 5, title: '감각적인 스튜디오', type: '오피스텔', size: '15평', budget: '3000만원', budgetValue: 3000, sizeValue: 10, imageUrl: '~/assets/images/portfolio_05.jpg', style: 'modern', tags: ['거실'] },
  { id: 6, title: '북유럽풍 아파트', type: '아파트', size: '34평', budget: '6000만원', budgetValue: 6000, sizeValue: 30, imageUrl: '~/assets/images/portfolio_01.jpg', style: 'natural', tags: ['침실', '주방', '욕실'] },
  // Add more portfolio items
])

// --- Computed Properties ---
const filteredPortfolios = computed(() => {
  return allPortfolios.value.filter(item => {
    const styleMatch = !filters.value.style || item.style === filters.value.style
    const spaceMatch = !filters.value.space || item.type.toLowerCase().includes(filters.value.space) // Simple match for type
    const budgetMatch = !filters.value.budget || checkBudget(item.budgetValue, filters.value.budget)
    const sizeMatch = !filters.value.size || checkSize(item.sizeValue, filters.value.size)
    const tagsMatch = filters.value.tags.length === 0 || filters.value.tags.every(tag => item.tags.includes(tag))

    return styleMatch && spaceMatch && budgetMatch && sizeMatch && tagsMatch
  })
})

// --- Methods ---
const toggleTag = (tag: string) => {
  const index = filters.value.tags.indexOf(tag)
  if (index === -1) {
    filters.value.tags.push(tag)
  } else {
    filters.value.tags.splice(index, 1)
  }
}

const checkBudget = (itemBudgetValue: number, filterBudget: string): boolean => {
  const budgetLimit = parseInt(filterBudget, 10)
  if (filterBudget === '10001') return itemBudgetValue >= 10000 // 1억 이상
  return itemBudgetValue <= budgetLimit
}

const checkSize = (itemSizeValue: number, filterSize: string): boolean => {
  const sizeLimit = parseInt(filterSize, 10)
   if (filterSize === '50') return itemSizeValue >= 50 // 50평 이상
   return itemSizeValue >= sizeLimit && itemSizeValue < sizeLimit + 10
}

// Add pagination logic here later
</script>

<style scoped>
/* Add specific styles for the portfolio page */
.portfolio-page {
  /* Example background */
  /* background-color: #f9f9f9; */
}
</style>
