<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    icon: 'fa-solid fa-palette',
    skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    title: 'Backend & APIs',
    icon: 'fa-solid fa-server',
    skills: ['Node.js', 'REST APIs', 'Airtable', 'Firebase', 'Netlify Functions']
  },
  {
    title: 'Tools & Practices',
    icon: 'fa-solid fa-toolbox',
    skills: ['Git/GitHub', 'Vite/Webpack', 'VS Code', 'Figma', 'Responsive Design']
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
            <span v-for="skill in category.skills" :key="skill" class="tag">{{ skill }}</span>
            <span class="tag tag-accent">& many more</span>
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
  flex-wrap: wrap;
  gap: var(--space-2);
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
