<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <span class="footer-logo">dizid<span class="dot">.</span></span>
        <p class="footer-tagline">Building interfaces that don't need explaining.</p>
      </div>

      <div class="footer-links">
        <a href="https://github.com/dizid" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/dizid" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/dizid" target="_blank" rel="noopener" aria-label="Twitter">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://dev.to/dizid" target="_blank" rel="noopener" aria-label="Dev.to">
          <i class="fa-brands fa-dev"></i>
        </a>
        <a href="https://playground.dizid.com" target="_blank" rel="noopener" aria-label="Playground">
          <i class="fa-solid fa-gamepad"></i>
        </a>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Marc de Ruijter. All rights reserved.
        </p>
        <p class="built-with">
          Built with <i class="fa-brands fa-vuejs"></i> Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-8);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.footer-brand {
  text-align: center;
}

.footer-logo {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.dot {
  color: var(--color-accent);
}

.footer-tagline {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-top: var(--space-2);
}

.footer-links {
  display: flex;
  gap: var(--space-4);
}

.footer-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.footer-links a:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
  width: 100%;
  text-align: center;
}

.copyright {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.built-with {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.built-with i {
  color: #42b883;
}
</style>
