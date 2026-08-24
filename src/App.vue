<script setup>
import { useHead } from '@unhead/vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

// Sitewide structured data — doesn't vary per route, unlike title/description/OG
// (those are set per-view via useHead in HomeView/ProjectsView/HireView).
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Dizid',
        url: 'https://dizid.com',
        logo: 'https://dizid.com/dizid-logo.svg',
        email: 'marc@dizid.com',
        sameAs: [
          'https://github.com/dizid',
          'https://linkedin.com/in/dizid',
          'https://twitter.com/dizid',
          'https://dev.to/dizid'
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="app">
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
}

main {
  position: relative;
}
</style>
