<template>
  <div class="font-sans"> <!-- Apply the default sans font (pretendard) -->
    <Header />
    <main>
      <NuxtPage /> <!-- This component renders the current page based on the route -->
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
// Import components - Header and Footer will be created in the next steps
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// You can add global setup logic here if needed
</script>

<style>
/* Global styles can be added here or in tailwind.css */
body {
  @apply bg-white text-gray-800; /* Example base styles */
}
</style>
