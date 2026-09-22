<script setup>
const fits = [
  'Founders and business owners with an idea and no technical team, who need a working product in weeks, not months.',
  'Small businesses stuck on spreadsheets, manual processes or an outdated website.',
  'Anyone who wants one accountable person, not an agency layer, to build the product and manage the project.'
]

const notFits = 'Not the right fit for enterprise builds that need a large multi-person team from day one.'
</script>

<template>
  <section class="section who-section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Who should use Dizid?</h2>
      </div>
      <div class="who-grid">
        <div v-for="fit in fits" :key="fit" class="who-card card">
          <i class="fa-solid fa-circle-check who-icon"></i>
          <p>{{ fit }}</p>
        </div>
      </div>
      <p class="who-not-fit">
        <i class="fa-solid fa-circle-info"></i>
        {{ notFits }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.who-section {
  background: var(--color-bg-primary);
}

.section-header {
  margin-bottom: var(--space-8);
}

.who-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.who-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.who-icon {
  color: var(--color-secondary);
  font-size: var(--text-xl);
}

.who-not-fit {
  margin-top: var(--space-8);
  text-align: center;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

@media (max-width: 768px) {
  .who-grid {
    grid-template-columns: 1fr;
  }
}
</style>
