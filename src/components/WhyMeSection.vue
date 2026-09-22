<script setup>
// Why a non-technical customer should hire Marc. Every claim here is already
// made on /hire (fixed price, 24h quote, weekly demos, solo builder, 25+ years,
// 20+ shipped products, EU/EUR).
const reasons = [
  {
    icon: 'fa-solid fa-user-check',
    title: 'One person, fully accountable',
    text: 'I build it and I run the project: scope, budget, timeline. You never have to manage a developer.'
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'A fixed price, no surprises',
    text: 'Fixed scope and a fixed-price quote within 24 hours, before any work starts.'
  },
  {
    icon: 'fa-solid fa-display',
    title: 'Built to finish',
    text: '20+ products shipped. You see a working demo every week and go live in 2-4 weeks.'
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Business experience, not just code',
    text: "25+ years, from Microsoft enterprise to modern SaaS. I've managed teams, shipped software and run businesses, so I think about your business, not only the technology."
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Plain language, EU-friendly',
    text: 'No jargon. Dutch or English, EU timezone, direct contact with no agency overhead, and invoicing in EUR.'
  }
]
</script>

<template>
  <section id="why-me" class="section why-me">
    <div class="container">
      <div class="why-grid">
        <div class="why-intro">
          <h2 class="section-title">Why work with me</h2>

          <p class="why-lead">
            I'm Marc de Ruijter, a Dutch web developer with over 25 years in IT.
            You talk to me, not to an account manager, and I'm accountable for the result.
          </p>

          <p class="why-text">
            My approach is simple: great software should feel invisible. When your
            customers don't notice the interface, that's when you know it's done right.
          </p>

          <p class="why-text">
            I built and run my own products too, including
            <a href="https://launchpilot.marketing" target="_blank" rel="noopener">LaunchPilot.marketing</a>
            and <a href="https://unplugged.cv" target="_blank" rel="noopener">Unplugged.cv</a>,
            so I know first-hand what it takes to get from idea to a live product.
          </p>
        </div>

        <ul class="reasons">
          <li v-for="reason in reasons" :key="reason.title" class="reason">
            <div class="reason-icon">
              <i :class="reason.icon" aria-hidden="true"></i>
            </div>
            <div class="reason-body">
              <h3 class="reason-title">{{ reason.title }}</h3>
              <p class="reason-text">{{ reason.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-me {
  background: var(--color-bg-secondary);
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-16);
  align-items: start;
}

.why-lead {
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-top: var(--space-6);
  margin-bottom: var(--space-6);
  line-height: 1.6;
}

.why-text {
  margin-bottom: var(--space-4);
  line-height: 1.7;
}

.reasons {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.reason {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.reason-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-lg);
  font-size: var(--text-xl);
  color: var(--color-accent-light);
}

.reason-title {
  font-size: var(--text-lg);
  margin-bottom: var(--space-1);
}

.reason-text {
  font-size: var(--text-sm);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
</style>
