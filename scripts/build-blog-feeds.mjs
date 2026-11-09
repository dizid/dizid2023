// Runs after `vite-ssg build` (see package.json "build").
// 1. Adds /blog and every post from src/data/blogPosts.js to dist/sitemap.xml
//    (public/sitemap.xml keeps the hand-written static pages).
// 2. Writes dist/rss.xml, an RSS 2.0 feed of all posts.
import { readFile, writeFile } from 'node:fs/promises'
import { blogPosts, blogPostUrl, SITE_URL } from '../src/data/blogPosts.js'

const DIST_DIR = new URL('../dist/', import.meta.url)

// Escape text for use inside XML elements
const escapeXml = (text) =>
  String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// "2026-11-09" -> RFC 822 date for RSS
const toRfc822 = (isoDate) => new Date(`${isoDate}T00:00:00Z`).toUTCString()

async function addPostsToSitemap() {
  const sitemapUrl = new URL('sitemap.xml', DIST_DIR)
  const sitemap = await readFile(sitemapUrl, 'utf8')
  const newestDate = blogPosts.map((post) => post.dateModified).sort().at(-1)

  const entries = [
    { loc: `${SITE_URL}/blog`, lastmod: newestDate, priority: '0.7' },
    ...blogPosts.map((post) => ({ loc: blogPostUrl(post.slug), lastmod: post.dateModified, priority: '0.6' }))
  ]
    // Never add a URL twice (e.g. if one is later added to public/sitemap.xml by hand)
    .filter((entry) => !sitemap.includes(`<loc>${entry.loc}</loc>`))
    .map((entry) =>
      `  <url><loc>${entry.loc}</loc><lastmod>${entry.lastmod}</lastmod><changefreq>monthly</changefreq><priority>${entry.priority}</priority></url>`
    )

  if (!sitemap.includes('</urlset>')) throw new Error('dist/sitemap.xml has no </urlset>')
  const updated = sitemap.replace('</urlset>', `${entries.join('\n')}\n</urlset>`)
  await writeFile(sitemapUrl, updated)
  console.log(`blog feeds: ${entries.length} URL(s) added to sitemap.xml`)
}

async function writeRssFeed() {
  const items = blogPosts.map((post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${blogPostUrl(post.slug)}</link>
      <guid isPermaLink="true">${blogPostUrl(post.slug)}</guid>
      <pubDate>${toRfc822(post.datePublished)}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`)

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dizid blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical notes on AI apps, the EU AI Act and AI search, by Marc de Ruijter.</description>
    <language>en</language>
${items.join('\n')}
  </channel>
</rss>
`
  await writeFile(new URL('rss.xml', DIST_DIR), feed)
  console.log(`blog feeds: rss.xml written with ${items.length} post(s)`)
}

await addPostsToSitemap()
await writeRssFeed()
