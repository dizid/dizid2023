<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const scrollToProjects = () => {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
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
        <p class="hero-greeting">Hi, I'm</p>
        <h1 class="hero-name">
          Marc de Ruijter
          <span class="hero-alias">@dizid</span>
        </h1>
        <p class="hero-tagline">
          <span class="quote-mark">"</span>A user interface is like a joke.<br />
          If you have to explain it, it's not that good.<span class="quote-mark">"</span>
        </p>
        <p class="hero-description">
          Web developer crafting intuitive interfaces with Vue.js,
          experimenting with AI integrations, and building tools that just work.
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToProjects">
            <i class="fa-solid fa-rocket"></i>
            View Projects
          </button>
          <button class="btn btn-secondary" @click="scrollToContact">
            <i class="fa-solid fa-envelope"></i>
            Get in Touch
          </button>
        </div>

        <div class="hero-links">
          <a href="https://github.com/dizid" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://playground.dizid.com" target="_blank" rel="noopener" class="social-link" aria-label="Playground">
            <i class="fa-solid fa-gamepad"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="code-window">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="file-name">dizid.js</span>
          </div>
          <pre class="code-content"><code><span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">'Marc de Ruijter'</span>,
  <span class="property">alias</span>: <span class="string">'dizid'</span>,
  <span class="property">focus</span>: [
    <span class="string">'Vue.js'</span>,
    <span class="string">'User Experience'</span>,
    <span class="string">'AI Integrations'</span>
  ],
  <span class="property">status</span>: <span class="string">'Building cool stuff'</span>
};

<span class="keyword">export default</span> developer;</code></pre>
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
  grid-template-columns: 1fr 1fr;
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

.hero-greeting {
  color: var(--color-accent);
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.hero-name {
  font-size: var(--text-6xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  line-height: 1.1;
}

.hero-alias {
  display: block;
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
  font-weight: 400;
  margin-top: var(--space-2);
}

.hero-tagline {
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: var(--space-6);
  line-height: 1.5;
}

.quote-mark {
  color: var(--color-accent);
  font-size: var(--text-2xl);
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.hero-links {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  font-size: var(--text-xl);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-window {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  box-shadow: var(--shadow-xl);
  animation: float 6s ease-in-out infinite;
}

.code-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-tertiary);
  border-bottom: 1px solid var(--color-border);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca40; }

.file-name {
  margin-left: auto;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.code-content {
  padding: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.7;
  overflow-x: auto;
}

.code-content code {
  color: var(--color-text-secondary);
}

.keyword { color: #c792ea; }
.variable { color: #82aaff; }
.property { color: #f07178; }
.string { color: #c3e88d; }

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

  .hero-links {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .code-window {
    max-width: 400px;
  }
}

@media (max-width: 640px) {
  .hero-name {
    font-size: var(--text-4xl);
  }

  .hero-tagline {
    font-size: var(--text-base);
  }

  .hero-actions {
    flex-direction: column;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
