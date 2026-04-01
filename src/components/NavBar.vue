<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Anchor links for homepage sections
const anchorLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (href) => {
  isMobileMenuOpen.value = false

  // If not on homepage, navigate home first then scroll
  if (route.path !== '/') {
    router.push('/' + href)
  } else {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const goHome = () => {
  isMobileMenuOpen.value = false
  if (route.path !== '/') {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const goToProjects = () => {
  isMobileMenuOpen.value = false
  router.push('/projects')
}

const goToHire = () => {
  isMobileMenuOpen.value = false
  router.push('/hire')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-content">
      <a href="/" class="logo" @click.prevent="goHome">
        <span class="logo-text">dizid</span>
        <span class="logo-dot">.</span>
      </a>

      <div class="nav-links" :class="{ 'active': isMobileMenuOpen }">
        <a
          v-for="link in anchorLinks"
          :key="link.name"
          :href="link.href"
          class="nav-link"
          @click.prevent="scrollToSection(link.href)"
        >
          {{ link.name }}
        </a>

        <!-- Projects page link -->
        <a
          href="/projects"
          class="nav-link"
          :class="{ 'active': route.path === '/projects' }"
          @click.prevent="goToProjects"
        >
          Projects
        </a>

        <!-- Hire page link -->
        <a
          href="/hire"
          class="nav-link hire-link"
          :class="{ 'active': route.path === '/hire' }"
          @click.prevent="goToHire"
        >
          <i class="fa-solid fa-bolt"></i>
          Hire Me
        </a>
      </div>

      <button
        class="mobile-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-4) 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-3) 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
}

.logo:hover {
  color: var(--color-text-primary);
}

.logo-dot {
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  gap: var(--space-8);
}

.nav-link {
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  position: relative;
  padding: var(--space-2) 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-accent);
}

.nav-link.active::after {
  width: 100%;
}

.hire-link {
  color: var(--color-secondary-light) !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.hire-link:hover {
  color: var(--color-secondary) !important;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: var(--text-xl);
  cursor: pointer;
  padding: var(--space-2);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--color-bg-secondary);
    flex-direction: column;
    padding: var(--space-6);
    gap: var(--space-4);
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    transition: all var(--transition-base);
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    font-size: var(--text-base);
  }
}
</style>
