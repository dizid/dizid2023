<script setup>
// /blog: list of all posts, newest first (order of src/data/blogPosts.js).
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import { blogPosts, blogPostUrl, SITE_URL } from '../data/blogPosts.js'

const pageTitle = 'Blog: AI apps, AI Act and AI search | Dizid'
const pageDescription = 'Practical notes from Marc de Ruijter, a Dutch full-stack developer: AI chatbots and the EU AI Act, database safety in AI-built apps, and getting found by AI.'

// "2026-11-09" -> "9 November 2026" (fixed locale, so prerender and browser match)
const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  })

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: `${SITE_URL}/blog` },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: `${SITE_URL}/blog` },
    { rel: 'alternate', type: 'application/rss+xml', title: 'Dizid blog', href: `${SITE_URL}/rss.xml` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Dizid blog',
        url: `${SITE_URL}/blog`,
        author: { '@type': 'Person', name: 'Marc de Ruijter', url: `${SITE_URL}/` },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: blogPostUrl(post.slug),
          datePublished: post.datePublished
        }))
      })
    }
  ]
})

useBreadcrumbSchema([
  { name: 'Home', url: `${SITE_URL}/` },
  { name: 'Blog', url: `${SITE_URL}/blog` }
])
</script>

<template>
  <div class="blog-page">
    <section class="section blog-hero">
      <div class="container">
        <h1 class="blog-title">Blog</h1>
        <p class="blog-intro">
          Practical notes for business owners and founders: AI chatbots and the EU AI Act,
          keeping AI-built apps safe, and getting found by AI assistants. Written by Marc de Ruijter,
          a Dutch full-stack developer who builds and runs his own AI apps.
        </p>
      </div>
    </section>

    <section class="section blog-list-section">
      <div class="container">
        <ul class="blog-list">
          <li v-for="post in blogPosts" :key="post.slug" class="card blog-card">
            <time class="blog-date" :datetime="post.datePublished">{{ formatDate(post.datePublished) }}</time>
            <h2 class="blog-card-title">
              <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
            </h2>
            <p class="blog-card-text">{{ post.description }}</p>
            <router-link :to="`/blog/${post.slug}`" class="blog-read-link">
              Read the post <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page {
  min-height: 100vh;
  padding-top: 80px;
}

.blog-hero {
  padding-top: var(--space-16);
  padding-bottom: var(--space-8);
}

.blog-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-intro {
  color: var(--color-text-secondary);
  max-width: 720px;
  line-height: 1.7;
}

.blog-list-section {
  padding-top: 0;
}

.blog-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-6);
  max-width: 820px;
}

.blog-date {
  display: block;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
}

.blog-card-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.blog-card-title a {
  color: var(--color-text-primary);
  text-decoration: none;
}

.blog-card-title a:hover {
  color: var(--color-accent-light);
}

.blog-card-text {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.blog-read-link {
  color: var(--color-accent-light);
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: var(--text-3xl);
  }
}
</style>
