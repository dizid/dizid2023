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

// Small fixed-price jobs, shown under the project offers on the homepage and
// on /hire. Same prices and scope as Marc's freelance listings (€490 chatbot,
// Marc yes Nov 3 2026; €390 AI notice, Nov 9 2026). Change them here only.
export const quickOffers = [
  {
    icon: 'fa-solid fa-comments',
    title: 'An AI chat assistant for your website',
    description: 'Answers the questions your customers ask most, in English and/or Dutch. When it can\'t help, it sends the visitor to your email or contact form. Up to about 30 FAQs, 1 website, 14 days of fixes.',
    timeline: 'Live in 48 hours',
    price: '€490 fixed'
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'An AI notice for your chatbot',
    description: 'The EU AI Act (Article 50) says people must be told when they are chatting with an AI, unless that is obvious. I check your chatbot and add a clear notice, with screenshots before and after. Technical help, not legal advice.',
    timeline: '1 day',
    price: '€390 fixed'
  }
]
