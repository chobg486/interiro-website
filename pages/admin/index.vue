<template>
  <div class="admin-page py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12">관리자 페이지</h1>

      <!-- Login Section (Placeholder) -->
      <section v-if="!isAdminLoggedIn" class="login-section max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">로그인</h2>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="admin-email" class="block text-sm font-medium text-gray-700 mb-1">이메일</label>
            <input type="email" id="admin-email" v-model="loginCredentials.email" required class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label for="admin-password" class="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <input type="password" id="admin-password" v-model="loginCredentials.password" required class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
          </div>
          <p v-if="loginError" class="text-red-500 text-sm text-center">{{ loginError }}</p>
          <div class="text-center pt-2">
            <button type="submit" class="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 rounded-md font-medium transition duration-300">
              로그인
            </button>
          </div>
        </form>
      </section>

      <!-- Admin Dashboard (Shown after login) -->
      <section v-else class="admin-dashboard">
        <div class="flex justify-between items-center mb-8">
           <h2 class="text-3xl font-semibold">관리자 대시보드</h2>
           <button @click="handleLogout" class="text-sm text-red-500 hover:underline">로그아웃</button>
        </div>


        <!-- Portfolio Management Section -->
        <div class="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold mb-4">포트폴리오 관리</h3>
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4 text-sm">
            새 포트폴리오 추가
          </button>
          <!-- Placeholder for portfolio list table -->
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">타입</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Example Row (Repeat with actual data) -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">모던 미니멀 하우스</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">아파트</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button class="text-blue-600 hover:text-blue-900">수정</button>
                    <button class="text-red-600 hover:text-red-900">삭제</button>
                  </td>
                </tr>
                <!-- More rows... -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Inquiry Management Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold mb-4">상담 리스트 관리</h3>
          <!-- Placeholder for inquiry list table -->
           <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">문의일</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Example Row (Repeat with actual data) -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">김 O O</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">010-1234-5678</td>
                   <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-03-30</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button class="text-blue-600 hover:text-blue-900">상세/수정</button>
                    <button class="text-red-600 hover:text-red-900">삭제</button>
                  </td>
                </tr>
                 <!-- More rows... -->
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// --- Authentication State (Placeholder) ---
// In a real app, this would be managed by Nuxt auth module or similar, integrated with Firestore Auth
const isAdminLoggedIn = ref(false) // Default to not logged in
const loginCredentials = ref({ email: '', password: '' })
const loginError = ref<string | null>(null)

// --- Placeholder Methods ---
const handleLogin = async () => {
  loginError.value = null
  console.log('Attempting login with:', loginCredentials.value)
  // --- TODO: Implement actual Firestore Authentication ---
  // Example (replace with real logic):
  if (loginCredentials.value.email === 'admin@example.com' && loginCredentials.value.password === 'password') {
    isAdminLoggedIn.value = true
    console.log('Login successful (placeholder)')
  } else {
    loginError.value = '이메일 또는 비밀번호가 잘못되었습니다.'
    console.log('Login failed (placeholder)')
  }
  // Clear password field after attempt
  loginCredentials.value.password = ''
}

const handleLogout = () => {
  // --- TODO: Implement actual Logout (clear auth state) ---
  isAdminLoggedIn.value = false
  console.log('Logged out (placeholder)')
}

// --- TODO: Add Firestore data fetching and manipulation logic ---
// - Fetch portfolio items
// - Add/Edit/Delete portfolio items
// - Fetch inquiries
// - Update/Delete inquiries
</script>

<style scoped>
/* Add specific styles for the admin page */
</style>
