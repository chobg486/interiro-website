import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Add other Nuxt configurations based on PRD if needed
  typescript: {
    strict: true, // Enable strict TypeScript checking
  },
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.jpg'], // Include uppercase PNG and jpg
  },
  compatibilityDate: '2025-03-30'
})
