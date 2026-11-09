// Blog post list (metadata only). The post bodies are plain HTML files in
// src/content/blog/<slug>.html, loaded by BlogPostView. To add a post: add an
// entry here (newest first) and a matching HTML file. The router, the /blog
// list, the sitemap and rss.xml (scripts/build-blog-feeds.mjs) all read this list.
// Kept free of imports so the Node build script can import it directly.

export const SITE_URL = 'https://dizid.com'

export const blogPosts = [
  {
    slug: 'eu-ai-act-article-50-chatbot-check',
    title: "Does your website chatbot say it's an AI? The 1-minute AI Act check",
    description: '',
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'ai-built-app-database-security-checks',
    title: 'Your AI-built app works. Is your database open?',
    description: '',
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'lessons-shipping-5-ai-apps-solo',
    title: 'What I learned shipping 5 AI apps solo',
    description: '',
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  },
  {
    slug: 'get-recommended-by-chatgpt-geo-basics',
    title: 'How to get your business recommended by ChatGPT (GEO basics)',
    description: '',
    datePublished: '2026-11-09',
    dateModified: '2026-11-09'
  }
]

export const blogPostUrl = (slug) => `${SITE_URL}/blog/${slug}`
