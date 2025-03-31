<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section class="hero-section h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white relative" style="background-image: url('/assets/images/portfolio_01.jpg');"> <!-- Placeholder image -->
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">Find Your Dream Home</h1>
        <p class="text-lg md:text-xl mb-8 text-gray-200">Search through the most luxurious properties in the city.</p>
        <div class="mt-6 bg-white p-4 rounded-md shadow-lg max-w-2xl mx-auto flex items-center space-x-2">
          <input type="text" placeholder="Search by address, city, zip..." class="flex-grow p-2 border border-gray-300 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md font-semibold transition duration-300">Search</button>
        </div>
      </div>
    </section>

    <!-- Featured Properties Section -->
    <section class="featured-properties py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Featured Properties</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Placeholder Property Card 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/assets/images/portfolio_02.jpg" alt="Property 1" class="w-full h-48 object-cover">
            <div class="p-6">
              <p class="text-2xl font-bold text-blue-600 mb-2">$1,200,000</p>
              <p class="text-lg font-semibold mb-1">123 Luxury Ave, Suite 100</p>
              <p class="text-gray-600 mb-4">Metropolis, CA 90210</p>
              <div class="flex justify-between text-sm text-gray-500 border-t pt-4">
                <span><i class="fas fa-bed mr-1"></i> 3 Beds</span>
                <span><i class="fas fa-bath mr-1"></i> 2 Baths</span>
                <span><i class="fas fa-ruler-combined mr-1"></i> 1,800 sqft</span>
              </div>
            </div>
          </div>
          <!-- Placeholder Property Card 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/assets/images/portfolio_03.jpg" alt="Property 2" class="w-full h-48 object-cover">
            <div class="p-6">
              <p class="text-2xl font-bold text-blue-600 mb-2">$850,000</p>
              <p class="text-lg font-semibold mb-1">456 Modern St, Unit B</p>
              <p class="text-gray-600 mb-4">Downtown, CA 90211</p>
              <div class="flex justify-between text-sm text-gray-500 border-t pt-4">
                <span><i class="fas fa-bed mr-1"></i> 2 Beds</span>
                <span><i class="fas fa-bath mr-1"></i> 2 Baths</span>
                <span><i class="fas fa-ruler-combined mr-1"></i> 1,200 sqft</span>
              </div>
            </div>
          </div>
          <!-- Placeholder Property Card 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="/assets/images/portfolio_04.jpg" alt="Property 3" class="w-full h-48 object-cover">
            <div class="p-6">
              <p class="text-2xl font-bold text-blue-600 mb-2">$2,500,000</p>
              <p class="text-lg font-semibold mb-1">789 Vista Rd</p>
              <p class="text-gray-600 mb-4">Hillside, CA 90212</p>
              <div class="flex justify-between text-sm text-gray-500 border-t pt-4">
                <span><i class="fas fa-bed mr-1"></i> 5 Beds</span>
                <span><i class="fas fa-bath mr-1"></i> 4 Baths</span>
                <span><i class="fas fa-ruler-combined mr-1"></i> 3,500 sqft</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
           <NuxtLink to="/portfolio" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300 inline-block">View All Properties</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-16 md:py-24">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="feature-item">
            <div class="text-blue-600 mb-4"><i class="fas fa-trophy fa-3x"></i></div> {/* Placeholder Icon */}
            <h3 class="text-xl font-semibold mb-2">Expert Agents</h3>
            <p class="text-gray-600">Our team consists of experienced professionals dedicated to finding your perfect home.</p>
          </div>
          <div class="feature-item">
            <div class="text-blue-600 mb-4"><i class="fas fa-handshake fa-3x"></i></div> {/* Placeholder Icon */}
            <h3 class="text-xl font-semibold mb-2">Trusted Service</h3>
            <p class="text-gray-600">We prioritize transparency and client satisfaction throughout the buying process.</p>
          </div>
          <div class="feature-item">
            <div class="text-blue-600 mb-4"><i class="fas fa-map-marked-alt fa-3x"></i></div> {/* Placeholder Icon */}
            <h3 class="text-xl font-semibold mb-2">Local Knowledge</h3>
            <p class="text-gray-600">Deep understanding of local markets to provide you with the best opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Neighborhoods Section -->
     <section class="neighborhoods py-16 md:py-24 bg-gray-50">
       <div class="container mx-auto px-4">
         <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Explore Neighborhoods</h2>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <!-- Placeholder Neighborhood Card 1 -->
           <div class="relative rounded-lg overflow-hidden shadow-md group">
             <img src="/assets/images/portfolio_05.jpg" alt="Neighborhood 1" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300">
             <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
             <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">Downtown</h3>
           </div>
           <!-- Placeholder Neighborhood Card 2 -->
           <div class="relative rounded-lg overflow-hidden shadow-md group">
             <img src="/assets/images/portfolio_01.jpg" alt="Neighborhood 2" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300">
             <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
             <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">Hillside</h3>
           </div>
           <!-- Placeholder Neighborhood Card 3 -->
           <div class="relative rounded-lg overflow-hidden shadow-md group">
             <img src="/assets/images/portfolio_02.jpg" alt="Neighborhood 3" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300">
             <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
             <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">Riverside</h3>
           </div>
           <!-- Placeholder Neighborhood Card 4 -->
           <div class="relative rounded-lg overflow-hidden shadow-md group">
             <img src="/assets/images/portfolio_03.jpg" alt="Neighborhood 4" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300">
             <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
             <h3 class="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">Suburban Bliss</h3>
           </div>
         </div>
       </div>
     </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-16 md:py-24">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div class="max-w-3xl mx-auto">
          {/* Basic Testimonial - Replace with slider later if needed */}
          <div class="bg-gray-100 p-8 rounded-lg shadow-sm">
            <p class="text-gray-600 italic text-lg mb-4">"Working with Apartb was a fantastic experience. They helped us find our dream home quickly and efficiently. Highly recommended!"</p>
            <p class="font-semibold">- Jane & John Doe</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta py-16 md:py-24 bg-blue-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Home?</h2>
        <p class="text-lg md:text-xl mb-8 text-blue-100">Contact us today to start your property search with our expert team.</p>
        <NuxtLink to="/contact" class="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md text-lg font-semibold transition duration-300 inline-block">Get In Touch</NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-10 bg-gray-800 text-gray-400">
      <div class="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm mb-4 md:mb-0">&copy; {{ new Date().getFullYear() }} Apartb Real Estate. All rights reserved.</p>
        <div class="flex space-x-4">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <NuxtLink to="/portfolio" class="hover:text-white">Properties</NuxtLink>
          <NuxtLink to="/company" class="hover:text-white">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script lang="ts" setup>
// Note: Vetur errors likely persist due to project setup issues.
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Import images (using placeholders for now, adjust as needed)
// Note: Using direct paths for background-image in template, but importing might be better for build process.
// import heroBg from '~/assets/images/portfolio_01.jpg';
// import propertyImg1 from '~/assets/images/portfolio_02.jpg';
// ... etc ...

// --- Hero Slideshow Data ---
// This version uses a single background image set in the template style.
// If a slideshow is needed for the hero background, uncomment and adapt the previous slideshow logic.
// const imageUrls = ref([...]);
// const currentImageIndex = ref(0);
// let heroIntervalTimer: ReturnType<typeof setInterval> | null = null;
// const nextHeroSlide = () => { ... };

onMounted(() => {
  // Hero Slideshow Timer (if needed)
  // heroIntervalTimer = setInterval(nextHeroSlide, 5000);
});

onBeforeUnmount(() => {
  // Clear timers (if needed)
  // if (heroIntervalTimer) { clearInterval(heroIntervalTimer); }
});

// Placeholder data - replace with actual data fetching if needed
// const featuredProperties = ref([...]);
// const neighborhoods = ref([...]);
// const testimonials = ref([...]);

// Font Awesome icons are used as placeholders (e.g., fas fa-bed).
// Ensure Font Awesome is installed and configured in your Nuxt project if you want to use them,
// or replace with other icons (e.g., SVG or a Nuxt icon library).

</script>

<style scoped>
/* Add any specific custom styles here */
.hero-section {
  /* Example: Use an imported image variable for background */
  /* background-image: url(heroBg); */
}

/* Add Font Awesome CSS if using */
/* @import '@fortawesome/fontawesome-free/css/all.min.css'; */

/* Basic styling for icon placeholders if not using Font Awesome */
.feature-item i {
  display: inline-block;
  width: 1em; /* Adjust size as needed */
  height: 1em;
  background-color: currentColor; /* Simple placeholder */
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  /* Example using Font Awesome class names for potential mask URLs */
}
.fa-bed { /* mask-image: url(...) */ }
.fa-bath { /* mask-image: url(...) */ }
.fa-ruler-combined { /* mask-image: url(...) */ }
.fa-trophy { /* mask-image: url(...) */ }
.fa-handshake { /* mask-image: url(...) */ }
.fa-map-marked-alt { /* mask-image: url(...) */ }

</style>
