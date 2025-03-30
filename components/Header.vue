<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="block h-8"> <!-- Adjust height as needed -->
        <img src="~/assets/images/logo.PNG" alt="페르323 로고" class="h-full w-auto">
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">홈</NuxtLink>
        <NuxtLink to="/portfolio" class="text-gray-600 hover:text-gray-900">포트폴리오</NuxtLink>
        <NuxtLink to="/company" class="text-gray-600 hover:text-gray-900">회사소개</NuxtLink>
        <NuxtLink to="/service" class="text-gray-600 hover:text-gray-900">서비스소개</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900">문의하기</NuxtLink>
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
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Add specific styles for the header if needed */
.sticky {
  position: sticky;
}
</style>
