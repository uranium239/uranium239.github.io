<script setup lang="ts">
// Home page - redirect to first invitation or show instructions
// Since this is an invitation-only site, we can either redirect or show a placeholder

// Auto-redirect to first guest for demo purposes
// In production, you might want a landing page
// navigateTo('/i/' + guests[0])
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-image"></div>
      <div class="hero-content backdrop-blur-sm">
        <p class="pre-title">Приглашение на свадьбу</p>
        <h1 class="names">Таня <span class="amp">&</span> Илья</h1>
        <p class="date">15 июня 2025</p>
        <p class="time">14:00</p>
      </div>
      <div class="hero-decor"></div>
    </section>

    <main class="content">
      <div class="divider">
        <span class="divider-icon">💕</span>
      </div>

      <section class="section">
        <p class="info-text">
          Это персональное приглашение. Пожалуйста, используйте ссылку, которую
          вы получили.
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #faf9f7;
  color: #2d2d2d;
  font-family: "Cormorant Garamond", Georgia, serif;
}

.hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  background-image: url("/header-bg.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(2px);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.95) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 3rem 1.5rem;
}

.pre-title {
  font-size: 0.9rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #cfcbc3;
  margin: 0 0 1rem;
  font-weight: 500;
}

.names {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 400;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  color: #cfcbc3;
}

.amp {
  display: inline-block;
  margin: 0 0.3rem;
  color: #c9a86c;
  font-style: italic;
}

.date {
  font-size: 1.4rem;
  margin: 0 0 0.5rem;
  color: #cfcbc3;
}

.time {
  font-size: 1.1rem;
  color: #cfcbc3;
  margin: 0;
}

.hero-decor {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #faf9f7;
}

.content {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.divider {
  text-align: center;
  margin: 2rem 0;
}

.divider-icon {
  font-size: 2rem;
  opacity: 0.6;
}

.section {
  margin-bottom: 2.5rem;
  text-align: center;
}

.info-text {
  font-size: 1.2rem;
  color: #777;
}
</style>
