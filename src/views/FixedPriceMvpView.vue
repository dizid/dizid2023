<script setup>
// Fixed-price MVP page for non-technical founders. Its copy is Dizid's own
// action plan for that customer niche, made by Foreground's fix-kit
// pipeline and fact checked against this site (Foreground order 036, the
// M4 test in ai-business-score NICHE-PLAN §4.2). The page is the thing
// being measured, so keep edits to facts that change.
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'

const intro = {"heading":"Who this is for","text":"This page is for founders and business owners who have an idea and no technical team, and who need a working product in weeks rather than months. It is also for small businesses that are stuck on spreadsheets, manual processes or an outdated website. You get one accountable person instead of an agency layer: Marc de Ruijter, a Dutch developer and project lead with over 25 years in IT and 20+ shipped products. You describe what you need, you get a fixed-price quote, and you see a working demo every week until your product is deployed, documented and handed off. It is not the right fit for enterprise builds that need a large multi-person team from day one, and that is said upfront rather than discovered halfway through."}

// Each niche question, answered. Rendered visibly below and reused for the
// FAQPage schema, so the schema text always matches what's shown.
const questions = [
  {
    heading: "Can a freelance developer build my MVP for a fixed price when I'm not technical?",
    text: "Yes, and that is how every Dizid project is set up. The price is fixed and agreed before any work starts, based on a fixed scope, so there is no open-ended hourly meter. Send a description of your project and you get a scoped, fixed-price proposal within 24 hours. There are two project shapes for a new product, with published starting prices: your first version live, with user logins, a database, payments and AI where it genuinely helps, in 2-4 weeks from €8,000; and a complete product with user management, billing, dashboards, AI features and production deployment in 4-8 weeks from €15,000. Being non-technical is assumed, not penalised. There is no jargon, conversations happen in Dutch or English, and you talk directly to the person writing the code instead of an account manager. You never have to manage a developer, because scope, budget and timeline are run by the same person who builds the product."
  },
  {
    heading: "I'm a non-technical founder in Europe and want a first version with weekly demos — who can do that?",
    text: "Dizid works from the Netherlands in the EU timezone (CET), invoices in EUR and keeps contact direct, with no agency overhead. A working demo every week is part of the standard way of working, not an extra: the build is delivered in short sprints, and each week you see something running that you can click through. That is the main protection a non-technical founder has against the classic failure of finding out a project is late only when it is already late. The process has four steps. You describe what you need and when you need it. You get a fixed-price proposal within 24 hours. The build runs in short sprints with a weekly demo. Then you ship: deployed, documented and handed off to you. For a first version that is live and ready for real customers, the typical window is 2-4 weeks, starting from €8,000. Usual response time to a new enquiry is 24-48 hours by email or LinkedIn."
  },
  {
    heading: "What should a non-technical founder look for in a developer who builds an MVP at a fixed price?",
    text: "Four things are worth checking before you sign anything. One: is the scope written down and the price fixed before work begins? Dizid gives a fixed scope and a fixed-price quote within 24 hours, so you are not comparing quotes that are all different numbers with no way of judging which is fair. Two: who actually builds it? A common pattern is pitching to a senior person and then being handed to juniors. Here one person builds the product and runs the project, start to finish, and is accountable for the result. Three: can you see progress? A working demo every week means you never have to guess where things stand. Four: is there real shipped work behind the claims? Dizid's portfolio includes products built and run in-house, not mockups: LaunchPilot.marketing, a platform that walks founders through 32 marketing tasks in 4 phases with AI writing the first drafts, including tiered pricing and payments, built solo in 4 weeks; Unplugged.cv, which turns a pasted job ad into a tailored CV and cover letter as PDF, with user accounts and payments, built in 3 weeks; and Foreground.info, which checks whether AI assistants mention your business when someone asks a category question. In total 20+ products have shipped. The background is 25+ years across Microsoft enterprise work and modern SaaS, including managing teams and running businesses, so the conversation is about your business outcome and not only the technology. Finally, look for a developer who hands over clean work: every project ends deployed, documented and handed off."
  }
]

const closing = {"heading":"Start with a description of your project","text":"Describe what you need in a few sentences and you'll hear back with a view on which project shape fits. If you want a fixed-price quote, the project brief form asks for a few more details, and the proposal follows within 24 hours."}

useHead({
  title: "Fixed-Price MVP Development for Non-Technical Founders | Dizid",
  meta: [
    { name: 'description', content: "A Dutch developer who builds your first version for a fixed price, with a working demo every week. Quote in 24 hours, live in 2-4 weeks, EU timezone, from €8,000." },
    { property: 'og:title', content: "Fixed-Price MVP Development for Non-Technical Founders | Dizid" },
    { property: 'og:description', content: "A Dutch developer who builds your first version for a fixed price, with a working demo every week. Quote in 24 hours, live in 2-4 weeks, EU timezone, from €8,000." },
    { property: 'og:url', content: "https://dizid.com/fixed-price-mvp-for-non-technical-founders" },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: "https://dizid.com/fixed-price-mvp-for-non-technical-founders" }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((q) => ({
          '@type': 'Question',
          name: q.heading,
          acceptedAnswer: { '@type': 'Answer', text: q.text }
        }))
      })
    }
  ]
})

useBreadcrumbSchema([
  { name: 'Home', url: 'https://dizid.com/' },
  { name: 'Hire', url: 'https://dizid.com/hire' },
  { name: "Fixed-price MVP development for non-technical founders", url: "https://dizid.com/fixed-price-mvp-for-non-technical-founders" }
])
</script>

<template>
  <div class="fixed-mvp-page">
    <section class="section fixed-mvp-hero">
      <div class="container">
        <h1 class="fixed-mvp-title">Fixed-price MVP development for non-technical founders</h1>
        <h2 class="fixed-mvp-heading">{{ intro.heading }}</h2>
        <p class="fixed-mvp-body">{{ intro.text }}</p>
      </div>
    </section>

    <section v-for="q in questions" :key="q.heading" class="section fixed-mvp-question">
      <div class="container">
        <h2 class="fixed-mvp-heading">{{ q.heading }}</h2>
        <p class="fixed-mvp-body">{{ q.text }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="fixed-mvp-heading">{{ closing.heading }}</h2>
        <p class="fixed-mvp-body">{{ closing.text }}</p>
        <div class="fixed-mvp-actions">
          <a href="/hire#contact-hire" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-calendar-check"></i>
            Describe your project
          </a>
          <router-link to="/hire/mvp-development" class="btn btn-secondary btn-lg">
            MVP development details
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fixed-mvp-page {
  min-height: 100vh;
  padding-top: 80px;
}

.fixed-mvp-hero {
  padding-top: var(--space-16);
}

.fixed-mvp-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
  max-width: 820px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fixed-mvp-question {
  padding-top: 0;
}

.fixed-mvp-heading {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  max-width: 720px;
}

.fixed-mvp-body {
  color: var(--color-text-secondary);
  max-width: 720px;
  line-height: 1.7;
}

.fixed-mvp-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

@media (max-width: 768px) {
  .fixed-mvp-title {
    font-size: var(--text-3xl);
  }
}
</style>
