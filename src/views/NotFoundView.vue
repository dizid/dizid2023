<script setup>
import { useHead } from '@unhead/vue'

// Shown for any URL that isn't a real page. Netlify serves the prerendered
// dist/404.html with status 404 (netlify.toml), and the router's catch-all route
// renders this view in the browser, so old or mistyped links never end up blank.
useHead({
  title: 'Page not found | Dizid',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<template>
  <section class="not-found-page">
    <div class="container">
      <h1 class="page-title">Page not found</h1>
      <p class="page-subtitle">
        This page doesn't exist, or it has moved. These links should get you where you wanted to go.
      </p>
      <div class="not-found-links">
        <router-link to="/" class="btn btn-primary">Home</router-link>
        <router-link to="/hire" class="btn btn-secondary">Hire me</router-link>
        <router-link to="/blog" class="btn btn-secondary">Blog</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found-page {
  min-height: 70vh;
  padding-top: 140px;
  padding-bottom: var(--space-16);
  background: var(--color-bg-primary);
}

.page-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-bottom: var(--space-8);
}

.not-found-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
</style>
