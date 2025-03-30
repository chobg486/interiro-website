<template>
  <footer class="bg-gray-100 text-gray-600 py-8 mt-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">페르323</h3>
          <p class="text-sm">
            첫 상담부터 마무리까지 표준화된 프로세스와 정직하고 일관된 견적 시스템, 취향을 찾아주는 디자인까지.
          </p>
          <!-- Add address, phone number etc. if available -->
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">바로가기</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/portfolio" class="hover:text-gray-900">포트폴리오</NuxtLink></li>
            <li><NuxtLink to="/company" class="hover:text-gray-900">회사소개</NuxtLink></li>
            <li><NuxtLink to="/service" class="hover:text-gray-900">서비스소개</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-900">문의하기</NuxtLink></li>
            <!-- Add links to privacy policy, terms of service if needed -->
          </ul>
        </div>

        <!-- Contact/Social Media -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">연락처</h3>
          <p class="text-sm">Email: contact@per323.com</p>
          <p class="text-sm">Phone: 02-1234-5678</p>
          <!-- Add social media links -->
          <div class="flex space-x-4 mt-4">
            <!-- Example: <a href="#" class="text-gray-500 hover:text-gray-900">FB</a> -->
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-6 text-center text-sm">
        &copy; {{ new Date().getFullYear() }} 페르323. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// No specific script logic needed for this basic footer
</script>

<style scoped>
/* Add specific styles for the footer if needed */
</style>
