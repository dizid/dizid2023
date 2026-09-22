<script setup>
// The four steps from first message to launch. Same process as described
// on /hire, so the promises stay consistent across pages.
const steps = [
  {
    title: 'You describe',
    text: 'Tell me what you need built and when you need it.'
  },
  {
    title: 'I scope & quote',
    text: 'A fixed-price proposal within 24 hours.'
  },
  {
    title: 'We build',
    text: 'Delivered in short sprints, with a working demo every week.'
  },
  {
    title: 'You ship',
    text: 'Deployed, documented, and handed off.'
  }
]
</script>

<template>
  <section id="process" class="section process">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">How it works</h2>
        <p class="section-subtitle">
          Four steps, and you're never left guessing where things stand.
        </p>
      </div>

      <ol class="steps">
        <li v-for="(step, index) in steps" :key="step.title" class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-text">{{ step.text }}</p>
        </li>
      </ol>

      <div class="process-cta">
        <router-link to="/hire#contact-hire" class="btn btn-primary btn-lg">
          <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
          Start with step 1
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background: var(--color-bg-primary);
}

.section-header {
  margin-bottom: var(--space-12);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
}

.steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.step {
  text-align: center;
  padding: var(--space-4);
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
  background: var(--gradient-primary);
  border-radius: 50%;
  font-weight: 700;
  font-size: var(--text-lg);
  color: white;
}

.step-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
}

.step-text {
  font-size: var(--text-sm);
  line-height: 1.6;
}

.process-cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-12);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

@media (max-width: 1024px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
