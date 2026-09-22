// Real products Marc built and runs himself, described by what they do for
// the user rather than by framework. Used by the homepage, /hire and
// /hire/mvp-development. These are own products, not client work, so copy
// must not imply client results. `tech` is kept for pages that show it.
export const caseStudies = [
  {
    title: 'LaunchPilot.marketing',
    subtitle: 'For founders who don\'t know where to start with marketing',
    description: 'A platform that walks founders through 32 marketing tasks in 4 phases, with AI writing the first drafts. Includes tiered pricing and payments. Built solo, from concept to production.',
    tech: ['Vue 3', 'Supabase', 'Claude API', 'Netlify Functions', 'Stripe'],
    timeline: '4 weeks',
    url: 'https://launchpilot.marketing',
    metric: '32 guided marketing tasks'
  },
  {
    title: 'Unplugged.cv',
    subtitle: 'For job seekers who want a CV tailored to every application',
    description: 'Paste a job ad and get a CV and cover letter tailored to it, exported as PDF. Includes user accounts and payments.',
    tech: ['Next.js 16', 'React 19', 'Neon PostgreSQL', 'Claude API', 'Stripe'],
    timeline: '3 weeks',
    url: 'https://unplugged.cv',
    metric: 'A tailored CV per job ad'
  },
  {
    title: 'Site Improver',
    subtitle: 'For small businesses with an outdated website',
    description: 'Reads an existing small-business website, generates a modern redesign with AI, and puts it online. Built for outreach to local businesses.',
    tech: ['Vue 3', 'Firecrawl', 'Claude API', 'Netlify API', 'Node.js'],
    timeline: '2 weeks',
    url: '#',
    metric: 'Automated redesigns'
  }
]
