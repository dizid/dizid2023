<script setup>
import { caseStudies } from '../data/caseStudies.js'
</script>

<template>
  <section id="proof" class="section proof">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Things I've built</h2>
        <p class="section-subtitle">
          Real products I built and run myself. Not mockups or concepts.
        </p>
      </div>

      <div class="proof-grid">
        <article v-for="project in caseStudies" :key="project.title" class="proof-card">
          <div class="proof-header">
            <div>
              <h3 class="proof-title">{{ project.title }}</h3>
              <p v-if="project.subtitle" class="proof-subtitle">{{ project.subtitle }}</p>
            </div>
            <span v-if="project.timeline" class="proof-timeline">
              <i class="fa-solid fa-bolt" aria-hidden="true"></i>
              {{ project.timeline }}
            </span>
          </div>

          <p class="proof-description">{{ project.description }}</p>

          <div class="proof-footer">
            <span class="proof-metric">
              <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
              {{ project.metric }}
            </span>
            <a
              v-if="project.url !== '#'"
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="proof-link"
            >
              View live <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>

          <!-- Tech is secondary for customers: one quiet line, not tags. Optional field. -->
          <p v-if="project.tech && project.tech.length" class="proof-tech">Built with {{ project.tech.join(' · ') }}</p>
        </article>
      </div>

      <p class="proof-more">
        Plus 17+ more shipped products.
        <router-link to="/projects" class="text-gradient">See the full portfolio</router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
.proof {
  background: var(--color-bg-secondary);
}

.section-header {
  margin-bottom: var(--space-12);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.proof-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.proof-card:hover {
  border-color: var(--color-border-light);
  box-shadow: var(--shadow-lg);
}

.proof-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.proof-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-1);
}

.proof-subtitle {
  font-size: var(--text-sm);
  color: var(--color-accent-light);
}

.proof-timeline {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  color: var(--color-accent-light);
  white-space: nowrap;
}

.proof-description {
  font-size: var(--text-sm);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-4);
}

.proof-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.proof-metric {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.proof-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  white-space: nowrap;
}

.proof-tech {
  margin-top: var(--space-4);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.proof-more {
  text-align: center;
  margin-top: var(--space-8);
  color: var(--color-text-muted);
}

.proof-more a {
  font-weight: 600;
  margin-left: var(--space-2);
}

@media (max-width: 1024px) {
  .proof-grid {
    grid-template-columns: 1fr;
  }
}
</style>
