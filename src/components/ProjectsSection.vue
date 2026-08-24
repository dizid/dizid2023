<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { fetchFeaturedProjects } from '../services/airtable.js'

// Fallback projects when Airtable is not configured (only show 4)
const fallbackProjects = [
  {
    id: '1',
    title: 'Playground',
    description: 'A digital playground for experimenting with web technologies and AI integrations. Features AI chatbots, meme editors, and more.',
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

// Present synchronously at SSG-render time so prerendered HTML always has
// real project content; onMounted overwrites with live Airtable data once
// the client hydrates, if configured.
const projects = ref(fallbackProjects)
const error = ref(null)

onMounted(async () => {
  try {
    // Fetch only 4 featured projects sorted by order
    const airtableProjects = await fetchFeaturedProjects(4)
    if (airtableProjects && airtableProjects.length > 0) {
      projects.value = airtableProjects
    }
  } catch (err) {
    console.error('Failed to load projects:', err)
    error.value = 'Failed to load projects'
  }
})
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          A selection of my latest work
        </p>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-notice">
        <i class="fa-solid fa-exclamation-triangle"></i>
        <span>{{ error }}</span>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id || project.title"
          :project="project"
        />
      </div>

      <div class="projects-cta">
        <router-link to="/projects" class="btn btn-primary">
          <i class="fa-solid fa-grid-2"></i>
          View All Projects
        </router-link>
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
