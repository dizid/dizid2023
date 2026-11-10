<script setup>
// /hire/fix-ai-built-app: the offer the "fix or finish an AI-built app" blog posts
// point to (Chief OK Nov 10 2026, T-0205/T-0215: price on request, link the existing
// small fixed-price offers). Same layout as /hire/mvp-development.
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import QuickOffers from '../components/QuickOffers.vue'
import FaqSection from '../components/FaqSection.vue'

const PAGE_URL = 'https://dizid.com/hire/fix-ai-built-app'
const PAGE_TITLE = 'Fix or finish your AI-built app | Dizid'
const PAGE_DESCRIPTION =
  'Built with Lovable, Bolt, Cursor or Replit and stuck before launch? I fix logins, payments, data security, emails and deploys, and get it live.'

// The hire form reads ?project= and preselects "Fix or finish an app..."
const CONTACT_LINK = '/hire?project=fix-finish#contact-hire'

useHead({
  title: PAGE_TITLE,
  meta: [
    { name: 'description', content: PAGE_DESCRIPTION },
    { property: 'og:title', content: PAGE_TITLE },
    { property: 'og:description', content: PAGE_DESCRIPTION },
    { property: 'og:url', content: PAGE_URL },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: PAGE_URL }]
})

useBreadcrumbSchema([
  { name: 'Home', url: 'https://dizid.com/' },
  { name: 'Hire', url: 'https://dizid.com/hire' },
  { name: 'Fix or finish your AI-built app', url: PAGE_URL }
])

// What usually breaks, each with the guide that explains it in detail
const problems = [
  {
    icon: 'fa-solid fa-right-to-bracket',
    title: 'Sign-in that breaks in production',
    description: 'Google or Apple login works in the preview but not on your domain, or users end up with two accounts.',
    guide: { label: 'What breaks with social sign-in', to: '/blog/social-sign-in-google-apple-what-breaks' }
  },
  {
    icon: 'fa-solid fa-credit-card',
    title: 'Payments that don\'t arrive',
    description: 'Stripe still in test mode, webhooks that fail quietly, renewals that never update the account.',
    guide: { label: 'Stripe payments before launch', to: '/blog/stripe-payments-ai-built-app-launch' }
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Data other users can read',
    description: 'Missing Supabase row level security, Firebase rules in test mode, secret keys in the browser.',
    guide: { label: 'Database security checks', to: '/blog/ai-built-app-database-security-checks' }
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Emails that land in spam',
    description: 'Sign-up and password reset emails sent from a default sender, without SPF, DKIM and DMARC.',
    guide: { label: 'SPF, DKIM and DMARC explained', to: '/blog/app-emails-spam-spf-dkim-dmarc' }
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Slow pages',
    description: 'Large bundles, too many database calls, images that are far too big for a phone.',
    guide: { label: 'Why AI-built apps get slow', to: '/blog/slow-ai-built-app-fixes' }
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Hosting, deploys and your own GitHub',
    description: 'Moving off the builder to your own repository and hosting, safe deploys and a way to roll back.',
    guide: { label: 'Move your app to your own GitHub', to: '/blog/move-lovable-bolt-app-own-github-hosting' }
  },
  {
    icon: 'fa-solid fa-database',
    title: 'No backups, no alerts',
    description: 'Nobody notices when the app is down, and nobody has tried to restore a backup.',
    guide: { label: 'Backups for Supabase, Neon and Firebase', to: '/blog/app-database-backups-supabase-neon-firebase' }
  },
  {
    icon: 'fa-solid fa-vial-circle-check',
    title: 'Every change breaks something',
    description: 'Each new prompt fixes one screen and breaks another. A few tests on the money path stop that.',
    guide: { label: 'The first tests worth writing', to: '/blog/testing-ai-built-app-first-tests' }
  }
]

const steps = [
  {
    title: 'You send the details',
    text: 'What it is built with, what works, what is broken, and where it runs. A screen recording helps.'
  },
  {
    title: 'I look at the app',
    text: 'With read access to your code and hosting, I check what is wrong and what to fix first, and tell you if a fix makes more sense than a rebuild.'
  },
  {
    title: 'You get a fixed price',
    text: 'A short written plan and one price for the fix, before I start. You decide.'
  },
  {
    title: 'I fix it, you keep everything',
    text: 'The work happens in your own repository and accounts. Before handover I test the main path on the live app and write down what changed.'
  }
]

const faqs = [
  {
    question: 'What does it cost?',
    answer: 'Price on request: every app is different. After a first look at your app you get a written plan and a fixed price for the fix, before I start. For small jobs with a clear scope there are fixed prices, shown on this page.'
  },
  {
    question: 'Which tools and stacks do you work with?',
    answer: 'Apps built with Lovable, Bolt, Cursor, Replit, v0 or Base44, usually React or Vue with Supabase, Firebase or Neon, Stripe for payments, and hosting on Netlify or Vercel.'
  },
  {
    question: 'Do I have to move my app off Lovable or Bolt?',
    answer: 'No. I can work through the GitHub connection your builder offers. If you want your own repository and hosting, I can do that move too, tested before the switch.'
  },
  {
    question: 'What do you need from me?',
    answer: 'Access to the code (GitHub), the hosting and the database, ideally as a separate user for me so you can remove it afterwards. The blog post on giving a developer access lists exactly what to share.'
  },
  {
    question: 'Who does the work?',
    answer: 'Marc de Ruijter, solo, not an agency. A Dutch full-stack developer with 25+ years in IT who has shipped 20+ products, working remotely in English or Dutch.'
  }
]
</script>

<template>
  <div class="fix-page">
    <section class="section fix-hero">
      <div class="container text-center">
        <h1 class="fix-title">Fix or finish your <span class="nowrap">AI-built app</span></h1>
        <p class="fix-subtitle">
          Built with Lovable, Bolt, Cursor or Replit, and stuck before launch? I find what is broken,
          fix it, and get your app ready for real customers.
        </p>
        <div class="fix-actions">
          <router-link :to="CONTACT_LINK" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Describe your app
          </router-link>
        </div>
        <p class="fix-note">Price on request. You get a fixed price before I start.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">What I fix</h2>
        <p class="fix-intro">
          AI builders get you to a working demo fast. The last part, where real users sign up and pay,
          is where most apps get stuck. These are the problems I fix most:
        </p>
        <div class="grid grid-2 fix-problems">
          <div v-for="problem in problems" :key="problem.title" class="problem-card card">
            <div class="problem-head">
              <span class="problem-icon"><i :class="problem.icon" aria-hidden="true"></i></span>
              <h3 class="problem-title">{{ problem.title }}</h3>
            </div>
            <p class="problem-description">{{ problem.description }}</p>
            <router-link :to="problem.guide.to" class="problem-guide">
              {{ problem.guide.label }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">How it works</h2>
        <ol class="fix-steps">
          <li v-for="(step, index) in steps" :key="step.title" class="step card">
            <span class="step-number">{{ index + 1 }}</span>
            <div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-text">{{ step.text }}</p>
            </div>
          </li>
        </ol>
        <p class="fix-more">
          Not sure if your app is worth fixing? Read
          <router-link to="/blog/fix-or-rebuild-ai-built-app">fix it or rebuild it</router-link>,
          or check it yourself with the
          <router-link to="/blog/launch-ready-ai-built-app-checklist">launch-ready checklist</router-link>.
        </p>
        <div class="fix-actions">
          <router-link :to="CONTACT_LINK" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
            Describe your app
          </router-link>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <QuickOffers />
      </div>
    </section>

    <FaqSection :faqs="faqs" title="Fixing AI-built apps: FAQ" />
  </div>
</template>

<style scoped>
.fix-page {
  min-height: 100vh;
  padding-top: 80px;
}

.fix-hero {
  padding-top: var(--space-16);
}

.fix-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nowrap {
  white-space: nowrap;
}

.fix-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 640px;
  margin: 0 auto var(--space-8);
}

.fix-actions {
  display: flex;
  justify-content: center;
}

.fix-note {
  margin-top: var(--space-4);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
}

.fix-intro {
  max-width: 720px;
  margin: var(--space-4) auto var(--space-8);
  text-align: center;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.fix-problems {
  gap: var(--space-6);
}

.problem-card {
  display: flex;
  flex-direction: column;
}

.problem-head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.problem-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: var(--color-accent-light);
}

.problem-title {
  font-size: var(--text-lg);
  font-weight: 700;
}

.problem-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-4);
}

.problem-guide {
  font-size: var(--text-sm);
  font-weight: 600;
}

.fix-steps {
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: var(--space-8) auto 0;
  display: grid;
  gap: var(--space-4);
}

.step {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: #fff;
  font-weight: 700;
}

.step-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-1);
}

.step-text {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.fix-more {
  max-width: 720px;
  margin: var(--space-8) auto var(--space-6);
  text-align: center;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .fix-title {
    font-size: var(--text-3xl);
  }

  .fix-problems {
    grid-template-columns: 1fr;
  }
}
</style>
