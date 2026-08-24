<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

const props = defineProps({
  faqs: {
    type: Array,
    required: true // [{ question, answer }]
  },
  title: {
    type: String,
    default: 'Frequently Asked Questions'
  }
})

const openIndex = ref(null)
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}

// FAQPage schema generated from the same array that renders the visible
// accordion below, so schema can never drift from what's actually shown.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }
  ]
})
</script>

<template>
  <section class="section faq-section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">{{ title }}</h2>
      </div>
      <div class="faq-list">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.question"
          class="faq-item"
          :class="{ open: openIndex === i }"
        >
          <button class="faq-question" @click="toggle(i)" :aria-expanded="openIndex === i">
            {{ faq.question }}
            <i class="fa-solid" :class="openIndex === i ? 'fa-minus' : 'fa-plus'"></i>
          </button>
          <p v-if="openIndex === i" class="faq-answer">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background: var(--color-bg-primary);
}

.section-header {
  margin-bottom: var(--space-8);
}

.faq-list {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-card);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: var(--text-base);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.faq-question i {
  color: var(--color-accent);
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 var(--space-5) var(--space-4);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
}
</style>
