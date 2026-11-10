<script setup>
// One blog post. Metadata comes from src/data/blogPosts.js; the body is the
// matching plain HTML file in src/content/blog/ (our own static content,
// rendered with v-html and prerendered by vite-ssg).
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import { blogPosts, blogPostUrl, SITE_URL } from '../data/blogPosts.js'

const props = defineProps({
  slug: { type: String, required: true }
})

// All post bodies, bundled into this route's chunk (small HTML strings).
const postBodies = import.meta.glob('../content/blog/*.html', {
  query: '?raw',
  import: 'default',
  eager: true
})

const post = computed(() => blogPosts.find((entry) => entry.slug === props.slug))
const bodyHtml = computed(() => postBodies[`../content/blog/${props.slug}.html`] || '')
const canonicalUrl = computed(() => blogPostUrl(props.slug))

// "2026-11-09" -> "9 November 2026" (fixed locale, so prerender and browser match)
const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  })

useHead({
  title: () => `${post.value.title} | Dizid`,
  meta: [
    { name: 'description', content: () => post.value.description },
    { name: 'author', content: 'Marc de Ruijter' },
    { property: 'og:title', content: () => post.value.title },
    { property: 'og:description', content: () => post.value.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: () => post.value.datePublished },
    { property: 'article:modified_time', content: () => post.value.dateModified }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', type: 'application/rss+xml', title: 'Dizid blog', href: `${SITE_URL}/rss.xml` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.datePublished,
        dateModified: post.value.dateModified,
        inLanguage: 'en',
        // Google lists image as recommended for articles; the posts share the site's share image
        image: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl.value },
        url: canonicalUrl.value,
        author: {
          '@type': 'Person',
          name: 'Marc de Ruijter',
          url: `${SITE_URL}/`,
          sameAs: ['https://linkedin.com/in/dizid', 'https://github.com/dizid']
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dizid',
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/dizid-logo.svg` }
        }
      })
    }
  ]
})

useBreadcrumbSchema([
  { name: 'Home', url: `${SITE_URL}/` },
  { name: 'Blog', url: `${SITE_URL}/blog` },
  { name: post.value.title, url: canonicalUrl.value }
])
</script>

<template>
  <div class="post-page">
    <article class="section post-article">
      <div class="container">
        <router-link to="/blog" class="post-back">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> All posts
        </router-link>
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-meta">
          Marc de Ruijter ·
          <time :datetime="post.datePublished">{{ formatDate(post.datePublished) }}</time>
        </p>
        <div class="post-body" v-html="bodyHtml"></div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.post-page {
  min-height: 100vh;
  padding-top: 80px;
}

.post-article {
  padding-top: var(--space-12);
}

.post-back {
  display: inline-block;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  text-decoration: none;
  margin-bottom: var(--space-6);
}

.post-back:hover {
  color: var(--color-accent-light);
}

.post-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
  max-width: 820px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-meta {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-10);
}

/* Post body typography: same text column and colours as the other content pages */
.post-body {
  max-width: 720px;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.post-body :deep(h2) {
  color: var(--color-text-primary);
  font-size: var(--text-2xl);
  font-weight: 700;
  margin: var(--space-10) 0 var(--space-4);
}

.post-body :deep(h3) {
  color: var(--color-text-primary);
  font-size: var(--text-xl);
  font-weight: 600;
  margin: var(--space-8) 0 var(--space-3);
}

.post-body :deep(p) {
  margin-bottom: var(--space-4);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 0 0 var(--space-4) var(--space-6);
}

.post-body :deep(li) {
  margin-bottom: var(--space-2);
}

.post-body :deep(a) {
  color: var(--color-accent-light);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.post-body :deep(strong) {
  color: var(--color-text-primary);
}

.post-body :deep(code) {
  font-size: 0.9em;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
  padding: 0.1em 0.35em;
}

@media (max-width: 768px) {
  .post-title {
    font-size: var(--text-3xl);
  }
}
</style>
