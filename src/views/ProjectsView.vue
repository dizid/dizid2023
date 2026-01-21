<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { fetchProjects } from '../services/airtable.js'

const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

// Fallback projects when Airtable is not configured
const fallbackProjects = [
  {
    id: '1',
    title: 'Playground',
    description: 'A digital playground for experimenting with web technologies and AI integrations.',
    icon: 'fa-solid fa-gamepad',
    tech: ['Vue 3', 'OpenAI', 'Netlify Functions'],
    github: 'https://github.com/dizid/playground',
    url: 'https://playground.dizid.com'
  },
  {
    id: '2',
    title: 'Marketing Todo',
    description: 'A focused marketing tool designed for startups to plan and track their marketing initiatives.',
    icon: 'fa-solid fa-bullseye',
    tech: ['JavaScript', 'Vue'],
    github: 'https://github.com/dizid/marketing-todo'
  },
  {
    id: '3',
    title: 'Analyze.me',
    description: 'An AI-powered self-analyzer that provides insights and analysis based on user input.',
    icon: 'fa-solid fa-brain',
    tech: ['Vue', 'AI/ML'],
    github: 'https://github.com/dizid/analyze.me'
  },
  {
    id: '4',
    title: 'Chess',
    description: 'An interactive chess game implementation with a clean UI and smooth gameplay.',
    icon: 'fa-solid fa-chess',
    tech: ['Vue', 'Game Logic'],
    github: 'https://github.com/dizid/chess'
  }
]

onMounted(async () => {
  try {
    const airtableProjects = await fetchProjects()
    if (airtableProjects && airtableProjects.length > 0) {
      projects.value = airtableProjects
    } else {
      projects.value = fallbackProjects
    }
  } catch (err) {
    console.error('Failed to load projects:', err)
    error.value = 'Failed to load projects'
    projects.value = fallbackProjects
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="projects-page">
    <div class="container">
      <div class="page-header">
        <router-link to="/" class="back-link">
          <i class="fa-solid fa-arrow-left"></i>
          Back to Home
        </router-link>
        <h1 class="page-title">All Projects</h1>
        <p class="page-subtitle">
          A complete collection of projects I've built over the years
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner">
          <i class="fa-solid fa-spinner fa-spin"></i>
        </div>
        <p>Loading projects...</p>
      </div>

      <!-- Error State -->
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
        />
      </div>

      <div class="projects-footer">
        <a
          href="https://github.com/dizid?tab=repositories"
          target="_blank"
          rel="noopener"
          class="btn btn-secondary"
        >
          <i class="fa-brands fa-github"></i>
          View GitHub Repositories
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: var(--space-16);
  background: var(--color-bg-primary);
}

.page-header {
  margin-bottom: var(--space-12);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-6);
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-accent);
}

.page-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.projects-footer {
  text-align: center;
  margin-top: var(--space-12);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-page {
    padding-top: 80px;
  }

  .page-title {
    font-size: var(--text-3xl);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
