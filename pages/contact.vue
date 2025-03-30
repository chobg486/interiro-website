<template>
  <div class="contact-page py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h1 class="text-4xl font-bold text-center mb-12">문의하기</h1>

      <p class="text-center text-gray-700 mb-10">
        인테리어 관련 문의사항이나 견적 요청이 있으시면 아래 폼을 작성해주세요.<br />
        최대한 빠른 시일 내에 답변드리겠습니다.
      </p>

      <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-md space-y-6">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">이름 <span class="text-red-500">*</span></label>
          <input type="text" id="name" v-model="formData.name" required class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
        </div>

        <!-- Contact Number -->
        <div>
          <label for="contact" class="block text-sm font-medium text-gray-700 mb-1">연락처 <span class="text-red-500">*</span></label>
          <input type="tel" id="contact" v-model="formData.contact" required class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="예: 010-1234-5678">
        </div>

        <!-- Address -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700 mb-1">주소</label>
          <input type="text" id="address" v-model="formData.address" class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="예: 서울시 강남구 테헤란로">
        </div>

        <!-- Expected Construction Date -->
        <div>
          <label for="constructionDate" class="block text-sm font-medium text-gray-700 mb-1">예상 공사 시기</label>
          <input type="text" id="constructionDate" v-model="formData.constructionDate" class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="예: 2025년 5월 중순">
        </div>

        <!-- Max Budget -->
        <div>
          <label for="budget" class="block text-sm font-medium text-gray-700 mb-1">최대 예산</label>
          <input type="text" id="budget" v-model="formData.budget" class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="예: 5000만원">
        </div>

        <!-- Inquiry Details -->
        <div>
          <label for="details" class="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
          <textarea id="details" v-model="formData.details" rows="5" class="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <!-- Privacy Policy Agreement -->
        <div class="flex items-start">
          <input type="checkbox" id="privacy" v-model="formData.privacyAgree" required class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1">
          <label for="privacy" class="ml-2 block text-sm text-gray-900">
            개인정보 처리방침에 동의합니다. <span class="text-red-500">*</span>
            <!-- Add link to actual privacy policy page/modal -->
            <a href="/privacy-policy" target="_blank" class="text-blue-600 hover:underline">(내용 보기)</a>
          </label>
        </div>

        <!-- Submit Button -->
        <div class="text-center pt-4">
          <button type="submit" :disabled="isSubmitting" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-md text-lg font-semibold transition duration-300 disabled:opacity-50">
            {{ isSubmitting ? '전송 중...' : '문의 제출' }}
          </button>
        </div>

        <!-- Submission Status -->
        <p v-if="submissionStatus" :class="['text-center mt-4', submissionStatus.type === 'success' ? 'text-green-600' : 'text-red-600']">
          {{ submissionStatus.message }}
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormData {
  name: string;
  contact: string;
  address: string;
  constructionDate: string;
  budget: string;
  details: string;
  privacyAgree: boolean;
}

interface SubmissionStatus {
    type: 'success' | 'error';
    message: string;
}

const formData = ref<FormData>({
  name: '',
  contact: '',
  address: '',
  constructionDate: '',
  budget: '',
  details: '',
  privacyAgree: false,
})

const isSubmitting = ref(false)
const submissionStatus = ref<SubmissionStatus | null>(null)

const submitForm = async () => {
  if (!formData.value.privacyAgree) {
    submissionStatus.value = { type: 'error', message: '개인정보 처리방침에 동의해주세요.' };
    return;
  }

  isSubmitting.value = true
  submissionStatus.value = null // Reset status

  try {
    // --- Placeholder for actual form submission logic ---
    // Example: Send data to an API endpoint or Firestore
    console.log('Form Data Submitted:', formData.value)
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Assume success for now
    submissionStatus.value = { type: 'success', message: '문의가 성공적으로 제출되었습니다. 감사합니다.' }
    // Reset form
    formData.value = { name: '', contact: '', address: '', constructionDate: '', budget: '', details: '', privacyAgree: false };

  } catch (error) {
    console.error('Form submission error:', error)
    submissionStatus.value = { type: 'error', message: '문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Add specific styles for the contact page */
</style>
