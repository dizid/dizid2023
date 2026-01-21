<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Playground',
    description: 'A digital playground for experimenting with web technologies and AI integrations. Features multiple interactive tools including AI chatbots with unique personalities, a meme editor, and more.',
    icon: 'fa-solid fa-gamepad',
    tech: ['Vue 3', 'OpenAI', 'Netlify Functions'],
    features: ['Grumpy AI Chat', 'Funny Image Editor', 'Love Calculator', 'Age Guesser'],
    github: 'https://github.com/dizid/playground',
    live: 'https://playground.dizid.com',
    featured: true
  },
  {
    title: 'Marketing Todo',
    description: 'A focused marketing tool designed for startups to plan and track their marketing initiatives efficiently.',
    icon: 'fa-solid fa-bullseye',
    tech: ['JavaScript', 'Vue'],
    github: 'https://github.com/dizid/marketing-todo',
    live: null
  },
  {
    title: 'Analyze.me',
    description: 'An AI-powered self-analyzer that provides insights and analysis based on user input.',
    icon: 'fa-solid fa-brain',
    tech: ['Vue', 'AI/ML'],
    github: 'https://github.com/dizid/analyze.me',
    live: null
  },
  {
    title: 'Chess',
    description: 'An interactive chess game implementation with a clean UI and smooth gameplay experience.',
    icon: 'fa-solid fa-chess',
    tech: ['Vue', 'Game Logic'],
    github: 'https://github.com/dizid/chess',
    live: null
  },
  {
    title: 'Daily Dog',
    description: 'A fun app that shows you a new dog with interesting information every time you visit.',
    icon: 'fa-solid fa-dog',
    tech: ['Vue', 'REST API'],
    github: 'https://github.com/dizid/dailydog',
    live: null
  },
  {
    title: 'Drift Scanner',
    description: 'A monitoring application for tracking and analyzing drift in various systems.',
    icon: 'fa-solid fa-radar',
    tech: ['Vue', 'Real-time'],
    github: 'https://github.com/dizid/driftscanner',
    live: null
  }
]
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A selection of projects I've built - from practical tools to playful experiments
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
          :featured="project.featured"
        />
      </div>

      <div class="projects-cta">
        <a
          href="https://github.com/dizid?tab=repositories"
          target="_blank"
          rel="noopener"
          class="btn btn-secondary"
        >
          <i class="fa-brands fa-github"></i>
          View All 52+ Repositories
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--color-bg-primary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-subtitle {
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  margin-top: var(--space-4);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  display: inline-block;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.projects-cta {
  text-align: center;
  margin-top: var(--space-12);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
