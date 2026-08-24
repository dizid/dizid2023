<script setup>
import { useHead } from '@unhead/vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import WhoShouldUseSection from '../components/WhoShouldUseSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'

useHead({
  title: 'Marc de Ruijter | Vue.js Developer & AI Integration Specialist',
  meta: [
    {
      name: 'description',
      content: 'Marc de Ruijter (Dizid) — web developer specializing in Vue.js, AI integrations, and user-focused interfaces. 25+ years building web applications.'
    },
    { property: 'og:title', content: 'Marc de Ruijter | Vue.js Developer & AI Integration Specialist' },
    {
      property: 'og:description',
      content: 'Web developer crafting intuitive interfaces with Vue.js, experimenting with AI integrations, and building tools that just work.'
    },
    { property: 'og:url', content: 'https://dizid.com/' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://dizid.com/' }]
})
</script>

<template>
  <HeroSection />
  <AboutSection />
  <WhoShouldUseSection />
  <ProjectsSection />
  <SkillsSection />
  <ContactSection />
</template>
