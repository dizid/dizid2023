<script setup>
// Small fixed-price jobs (data in src/data/services.js). Shown under the big
// project offers on the homepage (OffersSection) and on /hire, so a lead who
// doesn't need a €3,000+ build still sees something they can buy today.
import { quickOffers } from '../data/services.js'
</script>

<template>
  <div class="quick-offers">
    <h3 class="quick-offers-title">Small fixed-price jobs</h3>
    <p class="quick-offers-subtitle">Clear scope, one price, you know the cost before I start.</p>

    <div class="quick-offers-grid">
      <div v-for="offer in quickOffers" :key="offer.title" class="quick-offer card">
        <div class="quick-offer-head">
          <span class="quick-offer-icon">
            <i :class="offer.icon" aria-hidden="true"></i>
          </span>
          <h4 class="quick-offer-name">{{ offer.title }}</h4>
        </div>
        <p class="quick-offer-description">{{ offer.description }}</p>
        <div class="quick-offer-meta">
          <span class="quick-offer-timeline">
            <i class="fa-solid fa-clock" aria-hidden="true"></i>
            {{ offer.timeline }}
          </span>
          <span class="quick-offer-price">{{ offer.price }}</span>
        </div>
        <router-link to="/hire#contact-hire" class="quick-offer-cta">
          Ask for this <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quick-offers {
  margin-top: var(--space-12);
}

.quick-offers-title {
  font-size: var(--text-xl);
  text-align: center;
}

.quick-offers-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
  margin-bottom: var(--space-6);
}

.quick-offers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.quick-offer {
  display: flex;
  flex-direction: column;
}

.quick-offer-head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.quick-offer-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-lg);
  color: var(--color-secondary-light);
  font-size: var(--text-lg);
}

.quick-offer-name {
  font-size: var(--text-lg);
}

.quick-offer-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-4);
}

.quick-offer-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.quick-offer-timeline {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.quick-offer-price {
  font-weight: 600;
  color: var(--color-secondary-light);
}

.quick-offer-cta {
  margin-top: var(--space-4);
  font-weight: 600;
  font-size: var(--text-sm);
}

@media (max-width: 768px) {
  .quick-offers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
