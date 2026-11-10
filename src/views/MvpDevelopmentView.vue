<script setup>
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import WhoShouldUseSection from '../components/WhoShouldUseSection.vue'
import FaqSection from '../components/FaqSection.vue'

useHead({
  title: 'MVP Development | Dizid',
  meta: [
    {
      name: 'description',
      content: 'Full-stack MVP development with authentication, database, payments, and AI features. Idea to deployed product in 2-4 weeks, from €8,000.'
    },
    { property: 'og:title', content: 'MVP Development | Dizid' },
    {
      property: 'og:description',
      content: 'Full-stack MVP development with authentication, database, payments, and AI features. Idea to deployed product in 2-4 weeks.'
    },
    { property: 'og:url', content: 'https://dizid.com/hire/mvp-development' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://dizid.com/hire/mvp-development' }]
})

useBreadcrumbSchema([
  { name: 'Home', url: 'https://dizid.com/' },
  { name: 'Hire', url: 'https://dizid.com/hire' },
  { name: 'MVP Development', url: 'https://dizid.com/hire/mvp-development' }
])

// Case studies reused verbatim from HireView.vue — same real projects, not
// restated or invented.
const caseStudies = [
  {
    title: 'Foreground.info',
    subtitle: 'AI Visibility Scanner',
    description: 'Shows business owners whether ChatGPT, Gemini, Claude and Grok recommend them, which competitors get named instead, and writes a fact-checked action plan. Scanning engine across four AI APIs, accounts and Stripe subscriptions. Solo build from concept to production.',
    tech: ['Vue 3', 'TypeScript', 'Node.js', 'Neon PostgreSQL', '4 AI APIs', 'Stripe'],
    timeline: 'WIP',
    url: 'https://foreground.info'
  },
  {
    title: 'HappyRoam.travel',
    subtitle: 'Thailand Travel App with Paid AI Tools',
    description: 'One app for travellers to Thailand: a 60-second visa wizard, AI trip plans and packing lists, onward tickets with a PDF, 400+ places and 46 guides. Paid AI subscription with a free trial, plus paid onward tickets. Solo build from concept to production.',
    tech: ['Vue 3', 'TypeScript', 'Neon PostgreSQL', 'Claude API', 'Stripe', 'Netlify Functions'],
    timeline: '5 weeks',
    url: 'https://happyroam.travel'
  },
  {
    title: 'Site Improver',
    subtitle: 'Automated Website Rebuilding Tool',
    description: 'Scrapes existing websites, generates modern redesigns using AI, and deploys to Netlify. Built for cold outreach to local businesses.',
    tech: ['Vue 3', 'Firecrawl', 'Claude API', 'Netlify API', 'Node.js'],
    timeline: '2 weeks',
    url: '#'
  }
]

const faqs = [
  {
    question: 'How long does an MVP take?',
    answer: '2-4 weeks for a full-stack MVP with authentication, database, payments, and AI features — fixed scope, fixed price.'
  },
  {
    question: 'What does an MVP build cost?',
    answer: 'MVP Web App engagements start from €8,000. Smaller AI Integration Sprints (adding AI features to an existing app) start from €3,000 and take 1-2 weeks.'
  },
  {
    question: 'What tech stack is used?',
    answer: 'Vue 3, React/Next.js, TypeScript, and Tailwind CSS on the frontend; Node.js, Netlify Functions, PostgreSQL/Neon, and Supabase on the backend; Claude API for AI features.'
  },
  {
    question: 'Who builds the MVP?',
    answer: 'Marc de Ruijter, solo — not an agency. You work directly with the person writing the code, with 25+ years of IT experience and 20+ shipped products.'
  }
]
</script>

<template>
  <div class="mvp-page">
    <section class="section mvp-hero">
      <div class="container text-center">
        <h1 class="mvp-title">AI-Powered MVP Development</h1>
        <p class="mvp-subtitle">
          Full-stack MVP with authentication, database, payments, and AI features.
          From idea to deployed product in 2-4 weeks.
        </p>
        <div class="mvp-actions">
          <a href="/hire#contact-hire" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-calendar-check"></i>
            Start a Project
          </a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">What's Included</h2>
        <div class="mvp-included card">
          <p>
            A full-stack MVP web app: user authentication, a production database, payment
            integration, and AI features where they add real value — not a bolted-on
            chatbot. Fixed scope, fixed price, delivered in 2-4 weeks. Starts from €8,000.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Recent MVPs</h2>
        <div class="grid grid-3 mvp-cases">
          <div v-for="project in caseStudies" :key="project.title" class="case-card card">
            <h3 class="case-title">{{ project.title }}</h3>
            <p class="case-subtitle">{{ project.subtitle }}</p>
            <p class="case-description">{{ project.description }}</p>
            <div class="case-tech">
              <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <div class="case-footer">
              <span class="case-timeline"><i class="fa-solid fa-clock"></i> {{ project.timeline }}</span>
              <a v-if="project.url !== '#'" :href="project.url" target="_blank" rel="noopener">
                View Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WhoShouldUseSection />
    <FaqSection :faqs="faqs" title="MVP Development FAQ" />
  </div>
</template>

<style scoped>
.mvp-page {
  min-height: 100vh;
  padding-top: 80px;
}

.mvp-hero {
  padding-top: var(--space-16);
}

.mvp-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mvp-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto var(--space-8);
}

.mvp-actions {
  display: flex;
  justify-content: center;
}

.mvp-included {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-6);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.mvp-cases {
  margin-top: var(--space-8);
}

.case-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.case-title {
  font-size: var(--text-lg);
  font-weight: 700;
}

.case-subtitle {
  color: var(--color-accent-light);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
}

.case-description {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}

.case-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-3) 0;
}

.case-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.case-footer a {
  color: var(--color-accent-light);
}

@media (max-width: 768px) {
  .mvp-title {
    font-size: var(--text-3xl);
  }
}
</style>
