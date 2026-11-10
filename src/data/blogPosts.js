// Blog post list (metadata only). The post bodies are plain HTML files in
// src/content/blog/<slug>.html, loaded by BlogPostView. To add a post: add an
// entry here (newest first) and a matching HTML file. The router, the /blog
// list, the sitemap and rss.xml (scripts/build-blog-feeds.mjs) all read this list.
// Kept free of imports so the Node build script can import it directly.

export const SITE_URL = 'https://dizid.com'

export const blogPosts = [
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
    dateModified: '2026-11-09'
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
    dateModified: '2026-11-09'
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
