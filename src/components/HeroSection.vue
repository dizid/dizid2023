<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

// Everything a non-technical customer gets, in the order they care about it.
// Each point is already promised on /hire (fixed scope + price, 24h quote,
// weekly demos, solo builder).
const promises = [
  'A fixed price, agreed before we start',
  'A scoped quote within 24 hours',
  'A working demo every week',
  'One person accountable, start to finish'
]

// Trust strip under the buttons
const stats = [
  { value: '25+', label: 'Years in IT' },
  { value: '20+', label: 'Products shipped' },
  { value: '2-4', label: 'Weeks to launch' },
  { value: 'EU', label: 'Timezone (CET)' }
]

const scrollToProof = () => {
  document.querySelector('#proof')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-grid"></div>
    </div>

    <div class="container hero-content" :class="{ 'visible': isVisible }">
      <div class="hero-text">
        <p class="hero-eyebrow">Marc de Ruijter &middot; Developer &amp; project lead</p>
        <h1 class="hero-title">
          Your software project, built <span class="text-gradient">and managed</span> by one person.
        </h1>
        <p class="hero-description">
          Have an idea or a business problem that needs software? I take you from idea
          to a working product in 2-4 weeks. Fixed price, a demo every week, and you
          don't need to be technical.
        </p>

        <div class="hero-actions">
          <router-link to="/hire#contact-hire" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-calendar-check"></i>
            Get a fixed-price quote
          </router-link>
          <button class="btn btn-secondary btn-lg" @click="scrollToProof">
            <i class="fa-solid fa-briefcase"></i>
            See what I've built
          </button>
        </div>

        <div class="stats-bar">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="promise-card">
          <p class="promise-title">Working with me</p>
          <ul class="promise-list">
            <li v-for="promise in promises" :key="promise">
              <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              <span>{{ promise }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-gradient {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-16);
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-eyebrow {
  color: var(--color-accent-light);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: 700;
  margin-bottom: var(--space-6);
  line-height: 1.1;
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 540px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

/* Trust strip */
.stats-bar {
  display: flex;
  gap: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}

/* "Working with me" card */
.hero-visual {
  display: flex;
  justify-content: center;
}

.promise-card {
  width: 100%;
  max-width: 400px;
  padding: var(--space-8);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  animation: float 6s ease-in-out infinite;
}

.promise-title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-6);
}

.promise-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.promise-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.promise-list i {
  color: var(--color-secondary-light);
  margin-top: 0.2em;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  animation: fadeInUp 1s ease 1s both;
}

.mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--color-border-light);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 3px;
  height: 8px;
  background: var(--color-accent);
  border-radius: var(--radius-full);
  animation: scroll 2s ease infinite;
}

@keyframes scroll {
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(6px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-12);
  }

  .hero-description {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .stats-bar {
    justify-content: center;
  }

  .stat-item {
    align-items: center;
  }

  .promise-card {
    text-align: left;
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-description {
    font-size: var(--text-base);
  }

  .hero-actions {
    flex-direction: column;
  }

  .stats-bar {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .stat-item {
    width: 40%;
  }

  .promise-card {
    padding: var(--space-6);
  }

  .promise-list li {
    font-size: var(--text-base);
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
