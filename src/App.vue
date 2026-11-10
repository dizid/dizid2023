<script setup>
import { useHead } from '@unhead/vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

// Sitewide structured data — doesn't vary per route, unlike title/description/OG
// (those are set per-view via useHead in HomeView/ProjectsView/HireView).
// The share image is sitewide too: no view sets its own, so every page shared on
// LinkedIn/X/WhatsApp shows public/og-image.png (1200x630).
useHead({
  meta: [
    { property: 'og:image', content: 'https://dizid.com/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Dizid: your software project, built and managed by one person. Marc de Ruijter, developer and project lead.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://dizid.com/og-image.png' }
  ],
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
