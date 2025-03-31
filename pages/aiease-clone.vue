<template>
  <div class="aiease-clone-container bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <!-- Assuming logo.PNG is the correct logo -->
          <img src="~/assets/images/logo.PNG" alt="AIEase Logo" class="h-8 w-auto">
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Blog</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <!-- Mobile Menu Button (Placeholder) -->
        <div class="md:hidden">
          <button class="text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main>
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6">
        <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Unlock the Power of AI with AIEase
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              Streamline your workflows, enhance creativity, and drive growth with our intuitive AI solutions.
            </p>
            <button class="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-lg shadow-lg">
              Explore Features
            </button>
          </div>
          <!-- Right Image -->
          <div class="flex justify-center md:justify-end">
            <!-- Placeholder image - replace with actual image later -->
            <img src="https://via.placeholder.com/500x400?text=AI+Illustration" alt="AI Illustration" class="rounded-lg shadow-xl">
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          Powerful Features to Boost Your Productivity
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div class="mb-4 text-blue-600">
              <!-- Placeholder Icon -->
              <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17.25v-.001M9.75 14.25v-.001M14.25 17.25v-.001M14.25 14.25v-.001M5.25 19.5h13.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">AI Content Generation</h3>
            <p class="text-gray-600">Generate high-quality articles, blog posts, and marketing copy in seconds.</p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div class="mb-4 text-blue-600">
              <!-- Placeholder Icon -->
              <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Intelligent Automation</h3>
            <p class="text-gray-600">Automate repetitive tasks and streamline your business processes.</p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div class="mb-4 text-blue-600">
              <!-- Placeholder Icon -->
              <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Data Analysis & Insights</h3>
            <p class="text-gray-600">Gain valuable insights from your data with powerful AI-driven analytics.</p>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="bg-gray-100 py-16 px-6">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
            Get Started in 3 Simple Steps
          </h2>
          <div class="grid md:grid-cols-3 gap-10 text-center">
            <!-- Step 1 -->
            <div class="relative">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg">1</div>
              <div class="bg-white p-8 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Sign Up</h3>
                <p class="text-gray-600">Create your account quickly and easily to get started.</p>
              </div>
            </div>
            <!-- Step 2 -->
            <div class="relative">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg">2</div>
              <div class="bg-white p-8 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Choose Your Tool</h3>
                <p class="text-gray-600">Select from our wide range of AI tools tailored to your needs.</p>
              </div>
            </div>
            <!-- Step 3 -->
            <div class="relative">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg">3</div>
              <div class="bg-white p-8 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Generate & Optimize</h3>
                <p class="text-gray-600">Let AI do the heavy lifting and refine the results as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="bg-blue-600 text-white py-16 px-6">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users leveraging AIEase to save time, boost creativity, and achieve more. Get started today!
          </p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-lg shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-gray-300 py-12 px-6">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Column 1: Logo & Description -->
            <div>
                <img src="~/assets/images/logo.PNG" alt="AIEase Logo" class="h-8 w-auto mb-4 filter brightness-0 invert"> <!-- Inverted for dark background -->
                <p class="text-sm">AI solutions to streamline your workflow and boost creativity.</p>
            </div>
            <!-- Column 2: Quick Links -->
            <div>
                <h4 class="text-white font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-white">Home</a></li>
                    <li><a href="#" class="hover:text-white">Features</a></li>
                    <li><a href="#" class="hover:text-white">Pricing</a></li>
                    <li><a href="#" class="hover:text-white">Blog</a></li>
                </ul>
            </div>
            <!-- Column 3: Resources -->
            <div>
                <h4 class="text-white font-semibold mb-4">Resources</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-white">Documentation</a></li>
                    <li><a href="#" class="hover:text-white">Support</a></li>
                    <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
            <!-- Column 4: Social Media -->
            <div>
                <h4 class="text-white font-semibold mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                    <!-- Placeholder Social Icons -->
                    <a href="#" class="hover:text-white"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg></a> <!-- Replace with actual SVG paths -->
                    <a href="#" class="hover:text-white"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg></a>
                    <a href="#" class="hover:text-white"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M..."></path></svg></a>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            &copy; 2025 AIEase Clone. All rights reserved. Built with Nuxt.js and Tailwind CSS.
        </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Script setup for potential future logic
</script>

<style scoped>
/* Scoped styles for this page */
/* Using Tailwind primarily, minimal custom CSS needed for now */
.aiease-clone-container {
  /* Removed padding as container class handles it */
}

/* Add any specific non-Tailwind styles here if needed */
</style>
