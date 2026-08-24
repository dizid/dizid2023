<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useBreadcrumbSchema } from '../composables/useBreadcrumbSchema.js'
import WhoShouldUseSection from '../components/WhoShouldUseSection.vue'

useHead({
  title: 'Hire a Vue.js & AI Developer | Dizid',
  meta: [
    {
      name: 'description',
      content: 'Marc de Ruijter (Dizid) builds AI-powered web apps and SaaS MVPs in 2-4 weeks. 25+ years in IT, 20+ products shipped. Get a quote.'
    },
    { property: 'og:title', content: 'Hire a Vue.js & AI Developer | Dizid' },
    {
      property: 'og:description',
      content: 'Full-stack developer with 25+ years IT experience and 20+ shipped products. I turn your idea into a deployed, AI-enhanced web application — fast.'
    },
    { property: 'og:url', content: 'https://dizid.com/hire' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'canonical', href: 'https://dizid.com/hire' }]
})

useBreadcrumbSchema([
  { name: 'Home', url: 'https://dizid.com/' },
  { name: 'Hire', url: 'https://dizid.com/hire' }
])

const isVisible = ref(false)
const formData = ref({ name: '', email: '', project: '', budget: '', message: '' })
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submitError = ref(null)

onMounted(() => {
  setTimeout(() => { isVisible.value = true }, 100)
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitError.value = null
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'hire',
        'bot-field': '',
        ...formData.value
      }).toString()
    })
    if (response.ok) {
      isSubmitted.value = true
      formData.value = { name: '', email: '', project: '', budget: '', message: '' }
    } else {
      throw new Error('Submission failed')
    }
  } catch {
    submitError.value = 'Something went wrong. Please email marc@dizid.com directly.'
  } finally {
    isSubmitting.value = false
  }
}

const services = [
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Integration Sprint',
    description: 'Add Claude API, GPT, or custom AI features to your existing web app. Chat interfaces, content generation, smart automation.',
    timeline: '1-2 weeks',
    price: 'From \u20AC3,000'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'MVP Web App',
    description: 'Full-stack MVP with authentication, database, payments, and AI features. From idea to deployed product.',
    timeline: '2-4 weeks',
    price: 'From \u20AC8,000',
    link: '/hire/mvp-development'
  },
  {
    icon: 'fa-solid fa-building',
    title: 'Full SaaS Build',
    description: 'Complete SaaS product with user management, billing, dashboards, AI features, and production deployment.',
    timeline: '4-8 weeks',
    price: 'From \u20AC15,000'
  }
]

const caseStudies = [
  {
    title: 'LaunchPilot.marketing',
    subtitle: 'AI Marketing Automation Platform',
    description: 'Built a full SaaS platform with 32 automated marketing tasks, AI-powered copy generation, 4-phase journey structure, and tiered pricing. Solo build from concept to production.',
    tech: ['Vue 3', 'Supabase', 'Claude API', 'Netlify Functions', 'Stripe'],
    timeline: '4 weeks',
    url: 'https://launchpilot.marketing',
    metric: '32 automated tasks'
  },
  {
    title: 'Unplugged.cv',
    subtitle: 'AI-First CV Builder',
    description: 'AI-powered CV builder that parses job descriptions, generates tailored resumes, creates cover letters, and exports to PDF. Full auth + payments.',
    tech: ['Next.js 16', 'React 19', 'Neon PostgreSQL', 'Claude API', 'Stripe'],
    timeline: '3 weeks',
    url: 'https://unplugged.cv',
    metric: 'AI-generated CVs'
  },
  {
    title: 'Site Improver',
    subtitle: 'Automated Website Rebuilding Tool',
    description: 'Scrapes existing websites, generates modern redesigns using AI, and deploys to Netlify. Built for cold outreach to local businesses.',
    tech: ['Vue 3', 'Firecrawl', 'Claude API', 'Netlify API', 'Node.js'],
    timeline: '2 weeks',
    url: '#',
    metric: 'Automated redesigns'
  }
]

const stats = [
  { value: '20+', label: 'Products Shipped' },
  { value: '25+', label: 'Years in IT' },
  { value: '2-4', label: 'Weeks per MVP' },
  { value: 'EU', label: 'Timezone (CET)' }
]
</script>

<template>
  <div class="hire-page">
    <!-- Hero Section -->
    <section class="hire-hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="container hero-content" :class="{ 'visible': isVisible }">
        <div class="hero-text">
          <span class="hero-badge">
            <i class="fa-solid fa-circle-check"></i>
            Available for projects
          </span>
          <h1 class="hero-title">
            I Build <span class="text-gradient">AI-Powered</span><br />
            Web Apps in 2-4 Weeks
          </h1>
          <p class="hero-subtitle">
            Full-stack developer with 25+ years IT experience and 20+ shipped products.
            I turn your idea into a deployed, AI-enhanced web application — fast.
          </p>
          <div class="hero-actions">
            <a href="#contact-hire" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-calendar-check"></i>
              Start a Project
            </a>
            <a href="#case-studies" class="btn btn-secondary btn-lg">
              <i class="fa-solid fa-briefcase"></i>
              See My Work
            </a>
          </div>

          <!-- Stats bar -->
          <div class="stats-bar">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section services">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title centered">What I Build</h2>
          <p class="section-subtitle">
            Project-based engagements. Fixed scope, fixed price, fast delivery.
          </p>
        </div>

        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">
              <router-link v-if="service.link" :to="service.link">{{ service.title }}</router-link>
              <template v-else>{{ service.title }}</template>
            </h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-meta">
              <span class="service-timeline">
                <i class="fa-solid fa-clock"></i>
                {{ service.timeline }}
              </span>
              <span class="service-price">{{ service.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section tech-stack">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title centered">Tech Stack</h2>
          <p class="section-subtitle">Battle-tested tools I ship production apps with</p>
        </div>
        <div class="tech-categories">
          <div class="tech-category">
            <h4 class="tech-cat-title">Frontend</h4>
            <div class="tech-tags">
              <span class="tag">Vue 3</span>
              <span class="tag">React / Next.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Tailwind CSS</span>
              <span class="tag">Vite</span>
            </div>
          </div>
          <div class="tech-category">
            <h4 class="tech-cat-title">Backend</h4>
            <div class="tech-tags">
              <span class="tag">Node.js</span>
              <span class="tag">Netlify Functions</span>
              <span class="tag">PostgreSQL / Neon</span>
              <span class="tag">Supabase</span>
              <span class="tag">Stripe</span>
            </div>
          </div>
          <div class="tech-category">
            <h4 class="tech-cat-title">AI & Automation</h4>
            <div class="tech-tags">
              <span class="tag tag-accent">Claude API</span>
              <span class="tag tag-accent">AI Agents</span>
              <span class="tag tag-accent">Prompt Engineering</span>
              <span class="tag tag-accent">MCP Servers</span>
              <span class="tag tag-accent">LLM Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section id="case-studies" class="section case-studies">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title centered">Recent Projects</h2>
          <p class="section-subtitle">
            Real products I built and shipped — not mockups or concepts
          </p>
        </div>

        <div class="cases-grid">
          <div v-for="project in caseStudies" :key="project.title" class="case-card">
            <div class="case-header">
              <div>
                <h3 class="case-title">{{ project.title }}</h3>
                <p class="case-subtitle">{{ project.subtitle }}</p>
              </div>
              <span class="case-timeline-badge">
                <i class="fa-solid fa-bolt"></i>
                {{ project.timeline }}
              </span>
            </div>
            <p class="case-description">{{ project.description }}</p>
            <div class="case-tech">
              <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <div class="case-footer">
              <span class="case-metric">
                <i class="fa-solid fa-chart-line"></i>
                {{ project.metric }}
              </span>
              <a
                v-if="project.url !== '#'"
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="case-link"
              >
                View Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <p class="more-projects">
            <i class="fa-solid fa-plus-circle"></i>
            Plus 17+ more shipped products.
            <a href="/projects" class="text-gradient">See full portfolio</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Why Hire Me -->
    <section class="section why-section">
      <div class="container">
        <div class="text-center mb-8">
          <h2 class="section-title centered">Why Work With Me</h2>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-bolt"></i></div>
            <h4>Ship Fast</h4>
            <p>I've built 20+ products solo. No committee decisions, no bloat. Idea to deployed product in 2-4 weeks.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-brain"></i></div>
            <h4>AI-Native</h4>
            <p>I don't just add a chatbot. I architect AI into your product's core — content generation, analysis, automation, agents.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-handshake"></i></div>
            <h4>Senior Experience</h4>
            <p>25+ years from Microsoft enterprise to modern SaaS. I've managed teams, shipped software, and run businesses.</p>
          </div>
          <div class="why-card">
            <div class="why-icon"><i class="fa-solid fa-globe-europe"></i></div>
            <h4>EU Friendly</h4>
            <p>Dutch native, fluent English, EU timezone. Direct communication, no agency overhead, invoicing in EUR.</p>
          </div>
        </div>
      </div>
    </section>

    <WhoShouldUseSection />

    <!-- Contact / CTA Section -->
    <section id="contact-hire" class="section contact-hire">
      <div class="container">
        <div class="contact-hire-grid">
          <div class="contact-info-hire">
            <h2 class="section-title">Let's Build Something</h2>
            <p class="contact-intro">
              Tell me about your project. I'll get back to you within 24 hours
              with an estimate and timeline.
            </p>

            <div class="process-steps">
              <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>You Describe</h4>
                  <p>Tell me what you need built and your timeline</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>I Scope & Quote</h4>
                  <p>Fixed price proposal within 24 hours</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>We Build</h4>
                  <p>Sprint-based delivery with weekly demos</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>You Ship</h4>
                  <p>Deployed, documented, and handed off</p>
                </div>
              </div>
            </div>

            <div class="contact-direct">
              <p class="contact-or">Or reach out directly:</p>
              <a href="mailto:marc@dizid.com" class="contact-method-hire">
                <i class="fa-solid fa-envelope"></i>
                marc@dizid.com
              </a>
              <a href="https://linkedin.com/in/dizid" target="_blank" rel="noopener" class="contact-method-hire">
                <i class="fa-brands fa-linkedin"></i>
                linkedin.com/in/dizid
              </a>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form
              v-if="!isSubmitted"
              class="contact-form"
              name="hire"
              data-netlify="true"
              @submit.prevent="handleSubmit"
            >
              <input type="hidden" name="form-name" value="hire" />

              <div class="form-group">
                <label for="hire-name" class="form-label">Name</label>
                <input
                  id="hire-name"
                  v-model="formData.name"
                  type="text"
                  name="name"
                  class="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="hire-email" class="form-label">Email</label>
                <input
                  id="hire-email"
                  v-model="formData.email"
                  type="email"
                  name="email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="hire-project" class="form-label">Project Type</label>
                <select
                  id="hire-project"
                  v-model="formData.project"
                  name="project"
                  class="form-input"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="ai-integration">AI Integration Sprint (1-2 weeks)</option>
                  <option value="mvp">MVP Web App (2-4 weeks)</option>
                  <option value="saas">Full SaaS Build (4-8 weeks)</option>
                  <option value="consulting">AI Consulting / Audit</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div class="form-group">
                <label for="hire-budget" class="form-label">Budget Range</label>
                <select
                  id="hire-budget"
                  v-model="formData.budget"
                  name="budget"
                  class="form-input"
                >
                  <option value="" disabled>Select budget range (optional)</option>
                  <option value="3-5k">&euro;3,000 - &euro;5,000</option>
                  <option value="5-10k">&euro;5,000 - &euro;10,000</option>
                  <option value="10-15k">&euro;10,000 - &euro;15,000</option>
                  <option value="15-30k">&euro;15,000 - &euro;30,000</option>
                  <option value="30k+">&euro;30,000+</option>
                </select>
              </div>

              <div class="form-group">
                <label for="hire-message" class="form-label">Tell me about your project</label>
                <textarea
                  id="hire-message"
                  v-model="formData.message"
                  name="message"
                  class="form-input form-textarea"
                  placeholder="What do you want to build? What problem does it solve? Any timeline constraints?"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div v-if="submitError" class="form-error">
                <i class="fa-solid fa-exclamation-circle"></i>
                {{ submitError }}
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
                <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
                <i v-else class="fa-solid fa-paper-plane"></i>
                {{ isSubmitting ? 'Sending...' : 'Send Project Brief' }}
              </button>
            </form>

            <div v-else class="success-message">
              <div class="success-icon">
                <i class="fa-solid fa-check"></i>
              </div>
              <h3>Project Brief Received!</h3>
              <p>I'll review your project and get back to you within 24 hours with a scope and estimate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.hire-hero {
  min-height: 85vh;
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
  background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.07) 0%, transparent 50%);
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
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-full);
  color: var(--color-secondary-light);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.hero-title {
  font-size: var(--text-6xl);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-6);
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--space-8);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  margin-bottom: var(--space-12);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

/* Stats bar */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: var(--space-12);
  padding: var(--space-6) 0;
  border-top: 1px solid var(--color-border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}

/* Services */
.services {
  background: var(--color-bg-secondary);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
}

.section-title.centered {
  display: block;
  text-align: center;
}

.section-title.centered::after {
  left: 50%;
  transform: translateX(-50%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.service-card {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.service-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-xl);
  font-size: var(--text-2xl);
  color: var(--color-accent-light);
  margin: 0 auto var(--space-4);
}

.service-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
}

.service-title a {
  color: inherit;
}

.service-title a:hover {
  color: var(--color-accent);
}

.service-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-6);
}

.service-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.service-timeline {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.service-price {
  font-weight: 600;
  color: var(--color-secondary-light);
  font-size: var(--text-sm);
}

/* Tech Stack */
.tech-stack {
  background: var(--color-bg-primary);
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.tech-cat-title {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
  text-align: center;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}

/* Case Studies */
.case-studies {
  background: var(--color-bg-secondary);
}

.cases-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.case-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all var(--transition-base);
}

.case-card:hover {
  border-color: var(--color-border-light);
  box-shadow: var(--shadow-lg);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-4);
}

.case-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-1);
}

.case-subtitle {
  font-size: var(--text-sm);
  color: var(--color-accent-light);
}

.case-timeline-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  color: var(--color-accent-light);
  white-space: nowrap;
}

.case-description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}

.case-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.case-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.case-metric {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.case-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent);
}

.case-link:hover {
  color: var(--color-accent-light);
}

.more-projects {
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

.more-projects a {
  font-weight: 600;
  margin-left: var(--space-2);
}

/* Why Section */
.why-section {
  background: var(--color-bg-primary);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.why-card {
  text-align: center;
  padding: var(--space-6);
}

.why-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-xl);
  font-size: var(--text-xl);
  color: var(--color-accent-light);
  margin: 0 auto var(--space-4);
}

.why-card h4 {
  margin-bottom: var(--space-2);
}

.why-card p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Contact Hire */
.contact-hire {
  background: var(--color-bg-secondary);
}

.contact-hire-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.contact-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  line-height: 1.6;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.step-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: 50%;
  font-weight: 700;
  font-size: var(--text-sm);
  color: white;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: var(--text-base);
  margin-bottom: var(--space-1);
}

.step-content p {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.contact-or {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.contact-direct {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-method-hire {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.contact-method-hire:hover {
  color: var(--color-accent-light);
}

.contact-method-hire i {
  width: 20px;
  color: var(--color-accent);
}

/* Form */
.contact-form-wrapper {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.form-input {
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  transition: all var(--transition-fast);
}

.form-input::placeholder {
  color: var(--color-text-muted);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-glow);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

select.form-input {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6b7a' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
}

.form-error {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-lg);
  color: #ef4444;
  font-size: var(--text-sm);
}

.submit-btn {
  margin-top: var(--space-2);
  width: 100%;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: var(--space-8);
}

.success-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  border-radius: 50%;
  font-size: var(--text-2xl);
  color: white;
  margin: 0 auto var(--space-6);
}

.success-message h3 {
  font-size: var(--text-xl);
  margin-bottom: var(--space-2);
}

.success-message p {
  color: var(--color-text-secondary);
}

/* Responsive */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .tech-categories {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-hire-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-4xl);
  }

  .hero-subtitle {
    font-size: var(--text-base);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .stats-bar {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .stat-item {
    width: 40%;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .case-header {
    flex-direction: column;
    gap: var(--space-3);
  }

  .case-card {
    padding: var(--space-6);
  }
}
</style>
