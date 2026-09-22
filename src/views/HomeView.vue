<script setup>
import { useHead } from '@unhead/vue'
import HeroSection from '../components/HeroSection.vue'
import ProblemSection from '../components/ProblemSection.vue'
import OffersSection from '../components/OffersSection.vue'
import WhyMeSection from '../components/WhyMeSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import ProofSection from '../components/ProofSection.vue'
import WhoShouldUseSection from '../components/WhoShouldUseSection.vue'
import FaqSection from '../components/FaqSection.vue'
import ContactSection from '../components/ContactSection.vue'

useHead({
  title: 'Dizid | Custom Software Built & Managed for Founders',
  meta: [
    {
      name: 'description',
      content: 'Marc de Ruijter builds your web app or MVP and manages the whole project. Fixed price, a demo every week, live in 2-4 weeks. 25+ years in IT, 20+ products shipped.'
    },
    { property: 'og:title', content: 'Dizid | Custom Software Built & Managed for Founders' },
    {
      property: 'og:description',
      content: 'One developer who builds your software and manages the project: fixed price, a demo every week, live in 2-4 weeks.'
    },
    { property: 'og:url', content: 'https://dizid.com/' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://dizid.com/' }]
})

// Customer questions, answered only with claims the site already makes
// elsewhere (/hire pricing, timelines, process). Rendered visibly and as
// FAQPage schema by FaqSection.
const faqs = [
  {
    question: 'Do I need to be technical to work with you?',
    answer: "No. I explain everything in plain language and I run the project for you: scope, timeline and delivery. You describe what you need, I handle the rest."
  },
  {
    question: 'How much does it cost?',
    answer: 'Projects are fixed-price. Adding AI features to an existing app starts from €3,000, a first working version (MVP) from €8,000, and a complete product from €15,000. After you describe your project I send a fixed-price quote within 24 hours.'
  },
  {
    question: 'How long does it take?',
    answer: '1-2 weeks for adding AI features to an existing app, 2-4 weeks for a first working version, and 4-8 weeks for a complete product. You see a working demo every week.'
  },
  {
    question: 'Who will actually build my project?',
    answer: "I do, personally: Marc de Ruijter. Not an agency, and no hand-off to juniors. I have 25+ years in IT and have shipped 20+ products."
  },
  {
    question: 'What happens after I send my project details?',
    answer: "I review them and reply within 24 hours with a scope, a timeline and a fixed-price quote. If it's a fit, we start, and you get a demo every week until your product is live."
  }
]
</script>

<template>
  <HeroSection />
  <ProblemSection />
  <OffersSection />
  <WhyMeSection />
  <ProcessSection />
  <ProofSection />
  <WhoShouldUseSection />
  <FaqSection :faqs="faqs" title="Common questions" />
  <ContactSection />
</template>
