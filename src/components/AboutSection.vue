<script setup>
const highlights = [
  { icon: 'fa-solid fa-calendar-check', label: 'Years in IT', value: '25+' },
  { icon: 'fa-solid fa-rocket', label: 'Products Shipped', value: '20+' },
  { icon: 'fa-solid fa-bolt', label: 'Weeks per MVP', value: '2-4' },
  { icon: 'fa-solid fa-globe-europe', label: 'Timezone', value: 'EU (CET)' }
]

const techStack = [
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#42b883' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#68a063' },
  { name: 'Tailwind', icon: 'fa-solid fa-wind', color: '#38bdf8' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' }
]
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title">About Me</h2>

          <p class="about-intro">
            Web Developer & Digital Craftsman with over 25 years of experience
            building responsive websites and web applications.
          </p>

          <p class="about-text">
            I've been coding since the early days of HTML 1.0, and founded Dizid Digital Development
            to help businesses create custom digital tools and user-focused interfaces.
            Based in the Netherlands, I specialize in Vue.js development and enjoy
            experimenting with AI integrations.
          </p>

          <p class="about-text">
            My approach is simple: great software should feel invisible. When users
            don't notice the interface, that's when you know you've done it right.
            From practical business tools to playful experiments, I approach each
            project with curiosity and attention to user experience.
          </p>

          <div class="highlights">
            <div v-for="item in highlights" :key="item.label" class="highlight-item">
              <i :class="item.icon" class="highlight-icon"></i>
              <div class="highlight-content">
                <span class="highlight-value">{{ item.value }}</span>
                <span class="highlight-label">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-tech">
          <h3 class="tech-title">Tech Stack</h3>
          <div class="tech-grid">
            <div v-for="tech in techStack" :key="tech.name" class="tech-item">
              <div class="tech-icon" :style="{ color: tech.color }">
                <i :class="tech.icon"></i>
              </div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>

          <div class="github-stats">
            <a href="https://github.com/dizid" target="_blank" rel="noopener" class="github-link">
              <i class="fa-brands fa-github"></i>
              <div class="github-info">
                <span class="github-username">@dizid</span>
                <span class="github-repos">52+ repositories</span>
              </div>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-bg-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.about-intro {
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  line-height: 1.6;
}

.about-text {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  line-height: 1.7;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.highlight-icon {
  font-size: var(--text-xl);
  color: var(--color-accent);
}

.highlight-content {
  display: flex;
  flex-direction: column;
}

.highlight-value {
  font-weight: 600;
  color: var(--color-text-primary);
}

.highlight-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.about-tech {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.tech-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-6);
  color: var(--color-text-primary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.tech-item:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-light);
}

.tech-icon {
  font-size: var(--text-2xl);
}

.tech-name {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.github-stats {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-6);
}

.github-link {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.github-link:hover {
  border-color: var(--color-accent);
  background: var(--color-bg-card-hover);
}

.github-link > i:first-child {
  font-size: var(--text-2xl);
}

.github-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.github-username {
  font-weight: 600;
}

.github-repos {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.github-link > i:last-child {
  color: var(--color-accent);
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

@media (max-width: 640px) {
  .highlights {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
