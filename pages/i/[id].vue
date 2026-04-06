<script setup lang="ts">
import assetsData from "~/data/assets.json";
import guestsData from "~/data/guests.json";

type Gender = "male" | "female" | "helicopter";

interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  photoId?: string;
  role?: string;
  tableNumber?: number;
}

const getGenderEnding = () => {
  const gender = guest.value?.gender;
  if (gender === "male") return "ой";
  if (gender === "female") return "ая";
  if (gender === "family") return "ие";
  return "";
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

const targetDate = new Date("2026-09-05T16:30:00");
const countdown = ref(0);

onMounted(() => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;
  countdown.value = distance;
})

const formattedCountdown = computed(() => {
  const days = Math.floor(countdown.value / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown.value % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown.value % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
})

const getDateEnding = () => {
  const days = formattedCountdown.value.days;
  let daysLastDigit = Number(days.toString()[days.toString().length - 1]);
  if (isNaN(daysLastDigit)) return "дней";

  if (daysLastDigit === 1) return "день";
  if (daysLastDigit > 1 && daysLastDigit < 5) return "дня";
  return "дней";
}

// Find guest by ID
const guest = computed<Guest | null>(() => {
  return guestsData.guests.find((g: Guest) => g.id === guestId) || null;
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
    `Приглашение на свадьбу ${wedding.brideName} и ${wedding.groomName} — 05.09.2026`,
  ogDescription: () =>
    `Приглашение на свадьбу ${wedding.brideName} и ${wedding.groomName} — 05.09.2026`,
  ogImage: () => "/preview.png",
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
        <div class="hero-names-section">
          <h1 class="names">Таня</h1>
          <span class="amp names">&</span> 
          <h1 class="names">Илья</h1>
        </div>
        <p class="date">{{ wedding.date }}</p>
        <p class="time">{{ wedding.time }}</p>
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
          Дорог{{ getGenderEnding() }}
          <span class="guest-name">{{ guest.firstName }}</span
          >!
        </p>
        <p class="role">Нам очень хочется, чтобы в этот важный для нас день, Вы были с нами!
         Приглашаем вас на нашу свадьбу
        </p>
      </section>

      <!-- Hero divider -->
      <div class="divider">
        <span class="divider-icon">
          <img src="/heart.png" alt="Сердечко" />
        </span>
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
            <span class="timeline-time">16:30</span>
            <span class="timeline-text">сбор гостей</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-time">17:00</span>
            <span class="timeline-text">начало торжества</span>
          </div>
        </div>
      </section>

      <!-- Dress Code -->
      <section class="section dress-code-section">
        <h2 class="section-title">Дресс-код</h2>
        <p class="dress-code-hint">Мы знаем - вы прекрасно в любом наряде. Сияйте!</p>
      </section>

      <!-- Gifts -->
      <section class="section gifts-section">
        <h2 class="section-title">Пожелания</h2>
        <p class="gifts-text">
          В качестве подарка будем благодарны за вклад в бюджет нашей молодой семьи 💝
        </p>
      </section>

      <!-- Table -->
      <section v-if="guest?.tableNumber" class="section table-section">
        <h2 class="section-title">Ваш стол</h2>
        <div class="table-number">{{ guest.tableNumber }}</div>
      </section>

      <section class="section gifts-section">
        <p class="gifts-text">
          Если вы подготовили творческий подарок или сюрприз, пожалуйста предупредите нашего ведущего - Олега <a href="tel:+79308334624">8 (930) 833 46 24</a>.
          Он поможет Вам реализовать вашу задумку и  внести ее в программу
        </p>
      </section>

      <section class="section countdown-section">
        <p class="countdown-header">До встречи осталось:</p>
        <p class="countdown">
          {{ formattedCountdown.days }} {{ getDateEnding() }}
        </p>
        <p class="countdown-congratulate">С нетерпением ждём встречи!</p>
        <p class="countdown-post">—С любовью, Татьяна и Илья </p>
      </section>

    </main>

    <!-- Footer -->
    <!-- <footer class="footer">
      <p class="hashtag">#ТаняИИлья2026</p>
    </footer> -->
  </div>
</template>

<style scoped>
a {
  color: rgb(6, 52, 180)
}
.invitation-page {
  min-height: 100vh;
  background: #faf9f7;
  color: #2d2d2d;
  font-family: "Cormorant Garamond", Georgia, serif;
}

.hero {
  position: relative;
  min-height: 70vh;
  padding: 1rem;
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
  background-color: rgba(53, 53, 53, 0.65);
  border-radius: 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8);
  z-index: 1;
  text-align: center;
  padding: 3rem 1.5rem;
}

.hero-names-section {
  display: flex;
  justify-content: center;
  gap: 0;
  flex-direction: column;
}

@media (min-width: 768px) {
  .hero-names-section {
    flex-direction: row;
    gap: 1rem;
  }
}

.pre-title {
  font-size: 1.1rem;
  letter-spacing: 0.3em;
  /* text-transform: uppercase; */
  color: #c2c2c2;
  margin: 0 0 1rem;
  font-weight: 500;
}

.names {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 400;
  /* margin: 0 0 1.5rem; */
  line-height: 1.1;
  color: #d1ad6a;
}

.amp {
  display: inline-block;
  margin: 0 0.3rem;
  color: #cfcbc3;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.greeting-text {
  font-size: 2rem;
  margin: 0 0 0.5rem;
  font-style: italic;
}

.guest-name {
  /* font-weight: 600; */
}

.role {
  font-size: 1.25rem;
  color: #999;
  margin: 0;
  /* text-transform: uppercase; */
  letter-spacing: -2%;
}

.divider {
  text-align: center;
  margin: 2rem 0;
}

.divider-icon {
  font-size: 2rem;
  opacity: 0.6;
}

.divider-icon img {
  display: block;
  width: 4rem;
  margin: 0 auto;
}

.section {
  margin-bottom: 2.5rem;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  color: #2d2d2d;
  margin: 0 0 1.5rem;
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
  background-position: bottom;
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

.countdown-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.countdown-header {
  font-size: 1.8rem;
  font-weight: 400;
  color: #2d2d2d;
  margin: 0 0 0.5rem;
}

.countdown {
  font-size: 1.6rem;
  color: #2d2d2d;
  margin: 0;
}

.countdown-congratulate {
  font-size: 1.2rem;
  color: #2d2d2d;
  margin: 0;
}

.countdown-post {
  margin-top: 1rem;
  align-self: flex-end;
  color: #747474;
  font-style: italic;
}
</style>
