<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { fetchProjects } from '../services/airtable.js'

// State for Airtable integration
const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

// Fallback projects when Airtable is not configured or fails
const fallbackProjects = [
  {
    id: '1',
    title: 'Playground',
    description: 'A digital playground for experimenting with web technologies and AI integrations. Features multiple interactive tools including AI chatbots with unique personalities, a meme editor, and more.',
    icon: 'fa-solid fa-gamepad',
    tech: ['Vue 3', 'OpenAI', 'Netlify Functions'],
    features: ['Grumpy AI Chat', 'Funny Image Editor', 'Love Calculator', 'Age Guesser'],
    github: 'https://github.com/dizid/playground',
    url: 'https://playground.dizid.com',
    featured: true
  },
  {
    id: '2',
    title: 'Marketing Todo',
    description: 'A focused marketing tool designed for startups to plan and track their marketing initiatives efficiently.',
    icon: 'fa-solid fa-bullseye',
    tech: ['JavaScript', 'Vue'],
    github: 'https://github.com/dizid/marketing-todo',
    url: null
  },
  {
    id: '3',
    title: 'Analyze.me',
    description: 'An AI-powered self-analyzer that provides insights and analysis based on user input.',
    icon: 'fa-solid fa-brain',
    tech: ['Vue', 'AI/ML'],
    github: 'https://github.com/dizid/analyze.me',
    url: null
  },
  {
    id: '4',
    title: 'Chess',
    description: 'An interactive chess game implementation with a clean UI and smooth gameplay experience.',
    icon: 'fa-solid fa-chess',
    tech: ['Vue', 'Game Logic'],
    github: 'https://github.com/dizid/chess',
    url: null
  },
  {
    id: '5',
    title: 'Daily Dog',
    description: 'A fun app that shows you a new dog with interesting information every time you visit.',
    icon: 'fa-solid fa-dog',
    tech: ['Vue', 'REST API'],
    github: 'https://github.com/dizid/dailydog',
    url: null
  },
  {
    id: '6',
    title: 'Drift Scanner',
    description: 'A monitoring application for tracking and analyzing drift in various systems.',
    icon: 'fa-solid fa-satellite-dish',
    tech: ['Vue', 'Real-time'],
    github: 'https://github.com/dizid/driftscanner',
    url: null
  }
]

onMounted(async () => {
  try {
    const airtableProjects = await fetchProjects()
    if (airtableProjects && airtableProjects.length > 0) {
      projects.value = airtableProjects
    } else {
      // Use fallback projects if Airtable is not configured
      projects.value = fallbackProjects
    }
  } catch (err) {
    console.error('Failed to load projects:', err)
    error.value = 'Failed to load projects'
    // Use fallback projects on error
    projects.value = fallbackProjects
  } finally {
    isLoading.value = false
  }
})
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

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner">
          <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
        <p>Loading projects...</p>
      </div>

      <!-- Error State (still shows fallback projects) -->
      <div v-if="error && !isLoading" class="error-notice">
        <i class="fa-solid fa-exclamation-triangle"></i>
        <span>{{ error }} - showing cached projects</span>
      </div>

      <!-- Projects Grid -->
      <div v-if="!isLoading" class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id || project.title"
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
          View All Repositories
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

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) 0;
  color: var(--color-text-muted);
  gap: var(--space-4);
}

.loading-spinner {
  font-size: var(--text-3xl);
  color: var(--color-accent);
}

.error-notice {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: var(--radius-lg);
  color: #fbbf24;
  font-size: var(--text-sm);
  margin-bottom: var(--space-8);
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
