<template>
  <header :class="{'scrolled': isScrolled}" class="shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="block h-8"> <!-- Adjust height as needed -->
        <img src="~/assets/images/logo.PNG" alt="페르323 로고" class="h-full w-[100px] object-contain">
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="nav-link">홈</NuxtLink>
        <NuxtLink to="/portfolio" class="nav-link">포트폴리오</NuxtLink>
        <NuxtLink to="/company" class="nav-link">회사소개</NuxtLink>
        <NuxtLink to="/service" class="nav-link">서비스소개</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">문의하기</NuxtLink>
      </nav>

      <!-- Login Button -->
      <div class="hidden md:block">
        <NuxtLink to="/admin" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          관리자 로그인 <!-- Or simply "로그인" -->
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
      <nav class="flex flex-col p-4 space-y-2">
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900" @click="closeMobileMenu">홈</NuxtLink>
        <NuxtLink to="/portfolio" class="text-gray-600 hover:text-gray-900" @click="closeMobileMenu">포트폴리오</NuxtLink>
        <NuxtLink to="/company" class="text-gray-600 hover:text-gray-900" @click="closeMobileMenu">회사소개</NuxtLink>
        <NuxtLink to="/service" class="text-gray-600 hover:text-gray-900" @click="closeMobileMenu">서비스소개</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900" @click="closeMobileMenu">문의하기</NuxtLink>
        <NuxtLink to="/admin" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center mt-2" @click="closeMobileMenu">
          관리자 로그인
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Add specific styles for the header if needed */
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

header.scrolled {
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 50; /* Ensure it stays on top */
}

.nav-link {
  color: white;
  transition: color 0.3s ease;
}

header.scrolled .nav-link {
  color: #6b7280; /* Gray-600 */
}
</style>
