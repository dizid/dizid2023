// Blog post list (metadata only). The post bodies are plain HTML files in
// src/content/blog/<slug>.html, loaded by BlogPostView. To add a post: add an
// entry here (newest first) and a matching HTML file. The router, the /blog
// list, the sitemap and rss.xml (scripts/build-blog-feeds.mjs) all read this list.
// Kept free of imports so the Node build script can import it directly.

export const SITE_URL = 'https://dizid.com'

export const blogPosts = [
  {
    slug: 'supabase-project-paused-free-plan',
    title: "Supabase paused your project: why, and how to keep your app up",
    description: "Supabase paused your free project and your app stopped working? Why it happens, how to restore it, what to back up, and how to stop it happening again.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'roll-back-broken-deploy-netlify-vercel-lovable-bolt',
    title: "Roll back a broken deploy on Netlify, Vercel, Lovable and Bolt",
    description: "A deploy broke your app? How to roll back on Netlify, Vercel, Lovable, Bolt or GitHub, what a rollback does not undo, and how to prevent the next one.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'testing-ai-built-app-first-tests',
    title: "Testing an AI-built app: the first tests worth writing",
    description: "Every AI prompt breaks something that worked? The first tests to write, in order of risk: payments, permissions, webhooks, a browser test and a week plan.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'european-accessibility-act-small-apps-webshops',
    title: "The European Accessibility Act for small apps and webshops",
    description: "Does the European Accessibility Act apply to your webshop or app? What it covers, the micro-enterprise exemption, key dates and a 30-minute self-check.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'scheduled-jobs-cron-netlify-vercel-supabase',
    title: "Scheduled jobs for a small app: cron on Netlify, Vercel, Supabase",
    description: "A job that silently stopped? Where to run scheduled jobs on Netlify, Vercel, Supabase or GitHub Actions: documented limits, UTC, safe repeats, heartbeats.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'stop-fake-bot-signups-app',
    title: "Bots are signing up to your app: how to stop fake sign-ups",
    description: "Hundreds of junk accounts or spam in your forms? How to spot bots and stop them with rate limits, CAPTCHA, honeypots and cleanup, plus a 20-minute list.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'move-lovable-bolt-app-own-github-hosting',
    title: "Move your Lovable or Bolt app to your own GitHub and hosting",
    description: "Moving a Lovable or Bolt app to your own GitHub and host? What moves with the code, what does not, and a step-by-step checklist to test before DNS.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'social-sign-in-google-apple-what-breaks',
    title: "Adding Google, Apple or GitHub sign-in: what breaks in production",
    description: "Adding Google, Apple or GitHub sign-in? The redirect, consent screen, Apple rule and duplicate-account problems that break it, plus a test checklist.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'app-uptime-monitoring-error-alerts',
    title: "Is your app down? Uptime checks and error alerts for small apps",
    description: "Customers should not be your alarm. How to set up uptime checks, cron heartbeats, error tracking and money-path alerts on free tiers in 30 minutes.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'app-emails-spam-spf-dkim-dmarc',
    title: "Your app's emails land in spam: SPF, DKIM and DMARC explained",
    description: "Sign-up and password-reset emails landing in spam? How to tell, why default senders fail, what SPF, DKIM and DMARC do, and a safe setup in 15 minutes.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'stripe-payments-ai-built-app-launch',
    title: "Taking payments in an AI-built app: 8 things that break at launch",
    description: "Taking payments with Stripe in an AI-built app? The 8 things I check before launch: live keys, webhooks, double charges, failed renewals, VAT, disputes.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'gdpr-checklist-small-app',
    title: "GDPR for your app: 8 things to check before EU users sign up",
    description: "Building an app for EU users? The 8 GDPR checks I do on small apps: processing agreements, data location, privacy notice, cookies, deletion, AI, 72 hours.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'app-database-backups-supabase-neon-firebase',
    title: "Does your app have backups? What Supabase, Neon and Firebase keep",
    description: "What Supabase, Neon and Firebase really back up on each plan, what they never do (your uploaded files), and a 15-minute check that you can restore.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'small-web-app-running-costs',
    title: "What does a small web app cost to run? My real monthly bills",
    description: "What a small web app costs per month: hosting, database, email, AI and payments, with real bills from my own live apps and the hidden costs to watch.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'slow-ai-built-app-fixes',
    title: "Why is my AI-built app slow? 7 causes and what to fix first",
    description: "Your Lovable, Bolt or Cursor app feels slow? How to measure it in 10 minutes, the 7 usual causes (database, images, cold starts) and what to fix first.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'hiring-developer-app-access-handover',
    title: "Hiring a developer for your app? What to share, and how",
    description: "Hiring a developer to fix your app? What to put in the brief, how to give access on GitHub, Supabase, Firebase and Stripe without passwords, and clean-up.",
    datePublished: '2026-11-10',
    dateModified: '2026-11-10'
  },
  {
    slug: 'fix-or-rebuild-ai-built-app',
    title: "Lovable or Bolt app stuck? Fix it or rebuild it: how to decide",
    description: "Every new prompt breaks something else? How to tell if your Lovable, Bolt, Cursor or v0 app can be fixed or needs a rebuild, plus a 30-minute self-check.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'launch-ready-ai-built-app-checklist',
    title: "Launch-ready AI-built app: what I check before real users",
    description: "Built your app with Lovable, Bolt or Cursor? What I check before users pay: prices, Stripe webhooks, live keys, AI cost caps, emails, deploys, backups.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-10'
  },
  {
    slug: 'eu-ai-act-article-50-chatbot-check',
    title: "Does your chatbot say it's an AI? EU AI Act Article 50 check",
    description: "Since 2 August 2026, EU AI Act Article 50 requires website chatbots to say they are an AI. What the rule says, who must act, and a 1-minute check.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'ai-built-app-database-security-checks',
    title: "AI-built app? 5 database checks for Supabase, Firebase, Neon",
    description: "Built your app with Lovable, Bolt, Cursor or v0? Five checks for Supabase, Firebase and Neon that show if strangers can read your users' data.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-10'
  },
  {
    slug: 'lessons-shipping-5-ai-apps-solo',
    title: "What I learned shipping 5 AI apps as a solo developer",
    description: "Lessons from building 5 AI apps alone: capping AI API costs, honest scoring, Stripe webhooks, prerendering for SEO, and why traffic is the hard part.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'get-recommended-by-chatgpt-geo-basics',
    title: "How to get your business recommended by ChatGPT (GEO basics)",
    description: "How ChatGPT, Gemini, Claude and Grok find businesses, what our data on 909 AI-named businesses shows, and 7 GEO basics to get your business recommended.",
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  }
]

export const blogPostUrl = (slug) => `${SITE_URL}/blog/${slug}`
