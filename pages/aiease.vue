<template>
  <div class="container">
    <header>
      <h1>AI Ease</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h2>Your AI Solutions Partner</h2>
        <p>We provide cutting-edge AI solutions for your business needs.</p>
        <button>Learn More</button>
      </section>
      <section class="services">
        <h3>Our Services</h3>
        <div class="service-grid">
          <div class="service-item">
            <h4>AI Consulting</h4>
            <p>Expert advice on AI strategy and implementation.</p>
          </div>
          <div class="service-item">
            <h4>AI Development</h4>
            <p>Custom AI solutions tailored to your specific requirements.</p>
          </div>
          <div class="service-item">
            <h4>AI Training</h4>
            <p>Comprehensive training programs to empower your team.</p>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 AI Ease. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}

main {
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.hero h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.services {
  margin-bottom: 30px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service-item {
  padding: 20px;
  border: 1px solid #ccc;
}

footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>
