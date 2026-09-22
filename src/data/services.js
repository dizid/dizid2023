// Offers shown on the homepage and on /hire. Titles are written in the
// customer's language, not developer jargon. Prices and timelines are the
// same as before; `link` points at the detail page when one exists.
export const services = [
  {
    icon: 'fa-solid fa-robot',
    title: 'Make your existing app smarter',
    description: 'Already have a website or web app? I add AI features to it: chat assistants, automatic content generation, and smart automation of repetitive work.',
    timeline: '1-2 weeks',
    price: 'From €3,000'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Your first version, live',
    description: 'Your idea turned into a working product: user logins, a database, payments, and AI where it genuinely helps. Deployed and ready for real customers.',
    timeline: '2-4 weeks',
    price: 'From €8,000',
    link: '/hire/mvp-development'
  },
  {
    icon: 'fa-solid fa-building',
    title: 'A complete product',
    description: 'A full software product for your business: user management, billing, dashboards, AI features, and production deployment.',
    timeline: '4-8 weeks',
    price: 'From €15,000'
  }
]
