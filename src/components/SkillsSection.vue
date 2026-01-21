<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    icon: 'fa-solid fa-palette',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    title: 'Backend & Tools',
    icon: 'fa-solid fa-server',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'Netlify Functions', level: 80 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Vite', level: 85 }
    ]
  },
  {
    title: 'Specializations',
    icon: 'fa-solid fa-rocket',
    skills: [
      { name: 'AI Integrations', level: 75 },
      { name: 'User Experience', level: 90 },
      { name: 'Web3/Blockchain', level: 60 },
      { name: 'Performance', level: 80 },
      { name: 'Accessibility', level: 75 }
    ]
  }
]
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">
          Technologies and areas I work with daily
        </p>
      </div>

      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.title" class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3 class="category-title">{{ category.title }}</h3>
          </div>

          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: var(--color-bg-secondary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-subtitle {
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  margin-top: var(--space-4);
}

.section-title {
  display: inline-block;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.skill-category {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.category-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  color: var(--color-accent);
  font-size: var(--text-lg);
}

.category-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.skill-level {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.skill-bar {
  height: 6px;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
  transition: width 1s ease;
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
