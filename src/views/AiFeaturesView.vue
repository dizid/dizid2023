<script setup>
// "Add AI features to your existing web app" page, in Dutch or English
// (T-0052). Content and the reason it is worded this way live in
// src/data/aiFeaturesPages.js; this view only renders it, with FAQPage +
// BreadcrumbList schema and hreflang links between the two languages.
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import { aiFeaturesPages } from '../data/aiFeaturesPages.js'

const props = defineProps({
  lang: { type: String, required: true, validator: (value) => value in aiFeaturesPages }
})

const SITE = 'https://dizid.com'
const page = aiFeaturesPages[props.lang]
const otherPage = aiFeaturesPages[props.lang === 'nl' ? 'en' : 'nl']
const canonicalUrl = `${SITE}${page.path}`

useHead({
  htmlAttrs: { lang: page.lang },
  title: page.metaTitle,
  meta: [
    { name: 'description', content: page.metaDescription },
    { property: 'og:title', content: page.metaTitle },
    { property: 'og:description', content: page.metaDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: page.lang === 'nl' ? 'nl_NL' : 'en_GB' }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'nl', href: `${SITE}${aiFeaturesPages.nl.path}` },
    { rel: 'alternate', hreflang: 'en', href: `${SITE}${aiFeaturesPages.en.path}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE}${aiFeaturesPages.en.path}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      // Same text as rendered below, so the schema always matches the page.
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: page.lang,
        mainEntity: page.questions.map((question) => ({
          '@type': 'Question',
          name: question.heading,
          acceptedAnswer: { '@type': 'Answer', text: question.text }
        }))
      })
    }
  ]
})

useBreadcrumbSchema([
  { name: 'Home', url: `${SITE}/` },
  { name: 'Hire', url: `${SITE}/hire` },
  { name: page.breadcrumbName, url: canonicalUrl }
])
</script>

<template>
  <div class="ai-features-page" :lang="page.lang">
    <section class="section ai-features-hero">
      <div class="container">
        <h1 class="ai-features-title">{{ page.h1 }}</h1>
        <h2 class="ai-features-heading">{{ page.intro.heading }}</h2>
        <p class="ai-features-body">{{ page.intro.text }}</p>
      </div>
    </section>

    <section v-for="question in page.questions" :key="question.heading" class="section ai-features-question">
      <div class="container">
        <h2 class="ai-features-heading">{{ question.heading }}</h2>
        <p class="ai-features-body">{{ question.text }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="ai-features-heading">{{ page.closing.heading }}</h2>
        <p class="ai-features-body">{{ page.closing.text }}</p>
        <div class="ai-features-actions">
          <a href="/hire#contact-hire" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-calendar-check"></i>
            {{ page.ctaPrimary }}
          </a>
          <a href="mailto:marc@dizid.com" class="btn btn-secondary btn-lg">
            <i class="fa-solid fa-envelope"></i>
            {{ page.ctaEmail }}
          </a>
        </div>
        <p class="ai-features-other-language">
          <router-link :to="otherPage.path" :hreflang="otherPage.lang">{{ page.otherLanguageLabel }}</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Same layout as FixedPriceMvpView: one readable column of question + answer. */
.ai-features-page {
  min-height: 100vh;
  padding-top: 80px;
}

.ai-features-hero {
  padding-top: var(--space-16);
}

.ai-features-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
  max-width: 820px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ai-features-question {
  padding-top: 0;
}

.ai-features-heading {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  max-width: 720px;
}

.ai-features-body {
  color: var(--color-text-secondary);
  max-width: 720px;
  line-height: 1.7;
}

.ai-features-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.ai-features-other-language {
  margin-top: var(--space-8);
  font-size: var(--text-sm);
}

.ai-features-other-language a {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .ai-features-title {
    font-size: var(--text-3xl);
  }
}
</style>
