/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue", // Include app.vue if you are using it
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'pretendard' font based on PRD
        sans: ['pretendard', 'sans-serif'], // Assuming pretendard is set up globally or imported
      },
      // Extend theme with custom colors, spacing, etc. based on PRD design guidelines if needed
    },
  },
  plugins: [],
}
