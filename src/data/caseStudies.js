// Real products Marc built and runs himself, described by what they do for
// the user rather than by framework. Currently used by ProofSection on the
// homepage. /hire and /hire/mvp-development still carry their own separate,
// not-yet-unified case-study arrays (pending refactor). These are own
// products, not client work, so copy must not imply client results. `tech`
// is optional — ProofSection only renders the "Built with" line when present.
export const caseStudies = [
  {
    title: 'HappyRoam.travel',
    subtitle: 'For travellers heading to Thailand',
    description: 'Visa rules, onward-ticket checks, trip plans and safety info in one app: a 60-second visa wizard, AI trip plans and packing lists, onward tickets with a PDF, 400+ places and 46 guides. Free to start, with a paid AI subscription and paid onward tickets. Built solo.',
    tech: ['Vue 3', 'TypeScript', 'Neon PostgreSQL', 'Claude API', 'Stripe', 'Netlify Functions'],
    timeline: '5 weeks',
    url: 'https://happyroam.travel',
    metric: 'Visa check in 60 seconds'
  },
  {
    // No build duration: the first commit already held the whole MVP, so
    // the real build time can't be stated from the repo.
    title: 'TestSwap.dev',
    subtitle: 'For indie developers who need honest feedback',
    description: 'Test someone else\'s app to earn a credit, then spend it on a review of yours. Sign-in with X, a credit system where every step is one database transaction, and dashboards for makers and testers. Live with real makers and apps.',
    tech: ['Vue 3', 'TypeScript', 'Firebase Auth', 'Neon PostgreSQL', 'Netlify Functions'],
    url: 'https://testswap.dev',
    metric: 'Give a test, get a test'
  },
  {
    title: 'Foreground.info',
    description: 'Checks whether AI assistants (ChatGPT, Gemini, Claude, Grok) mention your business when someone asks a category question.',
    // Ongoing product, not a fixed past build — shown as a status badge
    // instead of a build duration like the other cards.
    timeline: 'WIP',
    url: 'https://foreground.info',
    metric: 'Checks 4 AI engines in one scan'
  }
]
