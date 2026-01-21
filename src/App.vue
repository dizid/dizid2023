<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>

<template>
  <div class="app" :class="{ 'is-loaded': isLoaded }">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.app.is-loaded {
  opacity: 1;
}

main {
  position: relative;
}
</style>
