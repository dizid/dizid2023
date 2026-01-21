<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article class="project-card" :class="{ 'featured': featured }">
    <div class="project-header">
      <div class="project-icon">
        <i :class="project.icon"></i>
      </div>
      <div class="project-links">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="project-link"
          aria-label="View on GitHub"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          rel="noopener"
          class="project-link primary"
          aria-label="View live demo"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>

    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">{{ project.description }}</p>

    <div v-if="project.features && featured" class="project-features">
      <span v-for="feature in project.features" :key="feature" class="feature-tag">
        {{ feature }}
      </span>
    </div>

    <div class="project-tech">
      <span v-for="tech in project.tech" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-light);
  box-shadow: var(--shadow-lg);
}

.project-card.featured {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--color-bg-card) 0%, rgba(99, 102, 241, 0.05) 100%);
  border-color: rgba(99, 102, 241, 0.2);
}

.project-card.featured:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-4);
}

.project-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  font-size: var(--text-xl);
  color: var(--color-accent);
}

.featured .project-icon {
  width: 56px;
  height: 56px;
  font-size: var(--text-2xl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%);
  color: white;
}

.project-links {
  display: flex;
  gap: var(--space-2);
}

.project-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.project-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.project-link.primary:hover {
  color: var(--color-accent);
}

.project-title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--color-text-primary);
}

.featured .project-title {
  font-size: var(--text-2xl);
}

.project-description {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-4);
}

.project-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.feature-tag {
  padding: var(--space-1) var(--space-3);
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-accent-light);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: auto;
}

.tech-tag {
  padding: var(--space-1) var(--space-2);
  background: var(--color-bg-tertiary);
  color: var(--color-text-muted);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .project-card.featured {
    grid-column: span 1;
  }
}
</style>
