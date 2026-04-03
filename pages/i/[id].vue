<script setup lang="ts">
import guestsData from "~/data/guests.json";
import assetsData from "~/data/assets.json";

interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  photoId?: string;
  role?: string;
  tableNumber?: number;
}

interface Venue {
  photo: string;
  name: string;
  address: string;
  mapUrl: string;
}

interface WeddingData {
  brideName: string;
  groomName: string;
  date: string;
  time: string;
  venue: Venue;
}

const route = useRoute();
const guestId = route.params.id as string;
const wedding = assetsData.wedding as WeddingData;
const venue = computed(() => wedding.venue);

// Find guest by ID
const guest = computed<Guest | null>(() => {
  return guestsData.guests.find((g: Guest) => g.id === guestId) || null;
});

const formattedDate = computed(() => {
  const date = new Date(wedding.date);
  return date.toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const formattedTime = computed(() => {
  const [hours, minutes] = wedding.time.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
});

// Generate unique metadata for each guest
const guestName = computed(() => {
  if (!guest.value) return "";
  return `${guest.value.firstName} ${guest.value.lastName}`;
});

const pageTitle = computed(() => {
  if (!guest.value) return "Приглашение не найдено";
  return `Приглашение для ${guestName.value}`;
});

// SEO Metadata - This enables rich previews when sharing links
useSeoMeta({
  title: () => pageTitle.value,
  ogTitle: () => pageTitle.value,
  description: () =>
    `Приглашение на свадьбу ${wedding.brideName} и ${wedding.groomName} — ${formattedDate.value} года`,
  ogDescription: () =>
    `Приглашение на свадьбу ${wedding.brideName} и ${wedding.groomName} — ${formattedDate.value} года`,
  ogImage: () => "/header-bg.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
});

// Error handling
const error = computed(() => {
  if (!guest.value) {
    return "Гость не найден. Проверьте ссылку.";
  }
  return null;
});
</script>

<template>
  <div class="invitation-page">
    <!-- Hero with banner image -->
    <section class="hero">
      <div class="hero-image"></div>
      <div class="hero-content backdrop-blur-sm">
        <p class="pre-title">Приглашение на свадьбу</p>
        <h1 class="names">
          {{ wedding.brideName }} <span class="amp">&</span>
          {{ wedding.groomName }}
        </h1>
        <p class="date">{{ formattedDate }}</p>
        <p class="time">{{ formattedTime }}</p>
      </div>
      <div class="hero-decor"></div>
    </section>

    <!-- Error -->
    <div v-if="error" class="error">
      <div class="error-card">
        <p>{{ error }}</p>
        <video src="/chipi-chapa.mp4" autoplay loop muted></video>
      </div>
    </div>

    <!-- Content -->
    <main v-else class="content">
      <!-- Guest greeting -->
      <section v-if="guest" class="greeting">
        <p class="greeting-text">
          Дорог{{ guest.firstName.endsWith("а") ? "ая" : "ой" }}
          <span class="guest-name">{{ guest.firstName }}</span
          >!
        </p>
        <p v-if="guest?.role" class="role">{{ guest?.role }}</p>
      </section>

      <!-- Hero divider -->
      <div class="divider">
        <span class="divider-icon">💕</span>
      </div>

      <!-- Venue with image -->
      <section class="section venue-section">
        <h2 class="section-title">Место проведения</h2>
        <div class="venue-card">
          <div class="venue-image"></div>
          <div class="venue-info">
            <p class="venue-name">{{ venue.name }}</p>
            <p class="venue-address">{{ venue.address }}</p>
            <a :href="venue.mapUrl" target="_blank" class="map-link">
              Открыть на карте 📍
            </a>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="section timeline-section">
        <h2 class="section-title">Программа дня</h2>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-time">14:00</span>
            <span class="timeline-text">Сбор гостей</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-time">14:30</span>
            <span class="timeline-text">Церемония бракосочетания</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-time">16:00</span>
            <span class="timeline-text">Праздничный ужин</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-time">18:00</span>
            <span class="timeline-text">Тосты и поздравления</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-time">20:00</span>
            <span class="timeline-text">Танцы</span>
          </div>
        </div>
      </section>

      <!-- Dress Code -->
      <section class="section dress-code-section">
        <h2 class="section-title">Дресс-код</h2>
        <p class="dress-code-main">Элегантный / Formal</p>
        <p class="dress-code-hint">Просим избегать белого и чёрного цветов</p>
        <div class="dress-icons">
          <span>👗</span>
          <span>🤵</span>
          <span>👔</span>
        </div>
      </section>

      <!-- Gifts -->
      <section class="section gifts-section">
        <h2 class="section-title">Подарки</h2>
        <p class="gifts-text">
          Мы будем рады любому подарку, но если вы хотите порадовать нас
          денежным вкладом в наше будущее, мы будем особенно благодарны 💝
        </p>
      </section>

      <!-- Table -->
      <section v-if="guest?.tableNumber" class="section table-section">
        <h2 class="section-title">Ваш стол</h2>
        <div class="table-number">{{ guest.tableNumber }}</div>
      </section>
    </main>

    <!-- Footer -->
    <!-- <footer class="footer">
      <p class="hashtag">#ТаняИИлья2025</p>
    </footer> -->
  </div>
</template>

<style scoped>
.invitation-page {
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

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
}

.error-card {
  text-align: center;
  padding: 2rem;
}

.content {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.greeting {
  text-align: center;
  margin-bottom: 2rem;
}

.greeting-text {
  font-size: 2rem;
  margin: 0 0 0.5rem;
  font-style: italic;
}

.guest-name {
  font-weight: 600;
  color: #8b7355;
}

.role {
  font-size: 0.95rem;
  color: #999;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
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
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 1.5rem;
  color: #2d2d2d;
}

.venue-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.venue-image {
  height: 180px;
  background-image: url("/place-photo.jpg");
  background-size: cover;
  background-position: center;
}

.venue-info {
  padding: 1.5rem;
  text-align: center;
}

.venue-name {
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.venue-address {
  color: #777;
  margin: 0 0 1rem;
}

.map-link {
  display: inline-block;
  color: #8b7355;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #d4c4a8;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.map-link:hover {
  background: #8b7355;
  color: #fff;
  border-color: #8b7355;
}

.timeline {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px dashed #eee;
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-time {
  font-weight: 600;
  color: #c9a86c;
  font-size: 1rem;
}

.timeline-text {
  color: #555;
  font-size: 1rem;
}

.dress-code-section {
  text-align: center;
}

.dress-code-main {
  font-size: 1.4rem;
  margin: 0 0 0.5rem;
}

.dress-code-hint {
  color: #999;
  font-size: 0.95rem;
  margin: 0 0 1rem;
}

.dress-icons {
  font-size: 2rem;
  opacity: 0.7;
}

.dress-icons span {
  margin: 0 0.5rem;
}

.gifts-section {
  text-align: center;
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.gifts-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin: 0;
}

.table-section {
  text-align: center;
}

.table-number {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 3rem;
  font-weight: 600;
  color: #c9a86c;
  border: 3px solid #c9a86c;
  border-radius: 50%;
}

.footer {
  text-align: center;
  padding: 2rem;
  background: #2d2d2d;
  color: #cfcbc3;
}

.hashtag {
  font-size: 1.2rem;
  margin: 0;
}
</style>
