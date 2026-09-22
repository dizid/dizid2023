<script setup>
import { services } from '../data/services.js'
</script>

<template>
  <section id="services" class="section offers">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">What I can do for you</h2>
        <p class="section-subtitle">
          Project-based work. Fixed scope, fixed price, fast delivery.
        </p>
      </div>

      <div class="offers-grid">
        <div v-for="service in services" :key="service.title" class="offer-card card">
          <div class="offer-icon">
            <i :class="service.icon" aria-hidden="true"></i>
          </div>
          <h3 class="offer-title">
            <router-link v-if="service.link" :to="service.link">{{ service.title }}</router-link>
            <template v-else>{{ service.title }}</template>
          </h3>
          <p class="offer-description">{{ service.description }}</p>
          <div class="offer-meta">
            <span class="offer-timeline">
              <i class="fa-solid fa-clock" aria-hidden="true"></i>
              {{ service.timeline }}
            </span>
            <span class="offer-price">{{ service.price }}</span>
          </div>
        </div>
      </div>

      <p class="offers-more">
        Not sure which one fits?
        <router-link to="/hire#contact-hire">Describe your project</router-link>
        and I'll tell you.
      </p>
    </div>
  </section>
</template>

<style scoped>
.offers {
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

.offers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.offer-card {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.offer-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-xl);
  font-size: var(--text-2xl);
  color: var(--color-accent-light);
  margin: 0 auto var(--space-4);
}

.offer-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
}

.offer-title a {
  color: inherit;
}

.offer-title a:hover {
  color: var(--color-accent);
}

.offer-description {
  font-size: var(--text-sm);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-6);
}

.offer-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.offer-timeline {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.offer-price {
  font-weight: 600;
  color: var(--color-secondary-light);
  font-size: var(--text-sm);
}

.offers-more {
  text-align: center;
  margin-top: var(--space-8);
}

.offers-more a {
  font-weight: 600;
}

@media (max-width: 1024px) {
  .offers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
