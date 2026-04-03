<script setup lang="ts">
  const route = useRoute()
  const guestId = route.params.id as string | undefined
</script>

<template>
  <div class="invitation-page">
    <!-- Show home for root path, invitation for /i/:id -->
    <NuxtPage />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cormorant Garamond', Georgia, serif;
    background: #faf9f7;
    color: #2d2d2d;
  }

  #app {
    min-height: 100vh;
  }
</style>
