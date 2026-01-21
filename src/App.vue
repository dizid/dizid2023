<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
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
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
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
