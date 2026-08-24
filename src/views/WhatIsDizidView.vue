<script setup>
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import WhoShouldUseSection from '../components/WhoShouldUseSection.vue'
import FaqSection from '../components/FaqSection.vue'

useHead({
  title: 'What is Dizid? | Marc de Ruijter, Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Dizid is the web development practice of Marc de Ruijter — a solo full-stack developer with 25+ years in IT specializing in Vue.js and AI integrations.'
    },
    { property: 'og:title', content: 'What is Dizid? | Marc de Ruijter, Web Developer' },
    {
      property: 'og:description',
      content: 'Dizid is the web development practice of Marc de Ruijter — a solo full-stack developer with 25+ years in IT specializing in Vue.js and AI integrations.'
    },
    { property: 'og:url', content: 'https://dizid.com/what-is-dizid' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://dizid.com/what-is-dizid' }]
})

useBreadcrumbSchema([
  { name: 'Home', url: 'https://dizid.com/' },
  { name: 'What is Dizid?', url: 'https://dizid.com/what-is-dizid' }
])

const faqs = [
  {
    question: 'Is Dizid a company or a freelancer?',
    answer: "Dizid is Marc de Ruijter working solo, based in the Netherlands — not an agency. There's no account manager or project layer; you work directly with the person writing the code."
  },
  {
    question: 'What does Dizid specialize in?',
    answer: 'Vue.js web development and AI integrations — building custom tools, MVPs, and SaaS products, often adding Claude API or GPT features into the core of a product rather than as a bolted-on chatbot.'
  },
  {
    question: 'How much experience does Dizid have?',
    answer: "25+ years in IT, from enterprise work at Microsoft to shipping 20+ modern SaaS products solo. Recent projects include LaunchPilot.marketing, Unplugged.cv, and Site Improver — see the full portfolio at /projects."
  },
  {
    question: 'How can I work with Dizid?',
    answer: 'Project-based engagements — AI integration sprints, MVP builds, and full SaaS products — are described at /hire, along with a contact form and direct email.'
  }
]
</script>

<template>
  <div class="what-is-page">
    <section class="section what-is-hero">
      <div class="container">
        <h1 class="what-is-title">What is Dizid?</h1>
        <p class="what-is-intro">
          Dizid is the web development practice of Marc de Ruijter, a Vue.js developer
          and digital craftsman with over 25 years of experience building responsive
          websites and web applications. Based in the Netherlands, Dizid specializes in
          Vue.js development and AI integrations — turning ideas into deployed products,
          usually in 2-4 weeks.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">What Dizid builds</h2>
        <p class="what-is-body">
          Dizid takes on three kinds of project-based engagements: AI Integration
          Sprints (adding Claude API or GPT features to an existing app), MVP Web Apps
          (full-stack builds with authentication, database, and payments), and full
          SaaS products (user management, billing, dashboards, and AI features, built
          and deployed end to end). Recent examples include LaunchPilot.marketing (an
          AI marketing automation platform), Unplugged.cv (an AI-first CV builder), and
          Site Improver (an automated website-rebuilding tool) — all built solo, from
          concept to production.
        </p>
      </div>
    </section>

    <WhoShouldUseSection />
    <FaqSection :faqs="faqs" title="Frequently Asked Questions" />
  </div>
</template>

<style scoped>
.what-is-page {
  min-height: 100vh;
  padding-top: 80px;
}

.what-is-hero {
  padding-top: var(--space-16);
}

.what-is-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-6);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.what-is-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 720px;
  line-height: 1.7;
}

.what-is-body {
  color: var(--color-text-secondary);
  max-width: 720px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .what-is-title {
    font-size: var(--text-3xl);
  }
}
</style>
