<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submitError = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitError.value = null

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      isSubmitted.value = true
      formData.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    submitError.value = 'Something went wrong. Please try again or email me directly.'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  isSubmitted.value = false
  submitError.value = null
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2 class="section-title">Let's Connect</h2>
          <p class="contact-intro">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I'd love to hear from you.
          </p>

          <div class="contact-methods">
            <a
              href="mailto:dev@dizid.com"
              class="contact-method"
            >
              <div class="method-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="method-info">
                <span class="method-label">Email</span>
                <span class="method-value">dev@dizid.com</span>
              </div>
              <i class="fa-solid fa-arrow-right method-arrow"></i>
            </a>

            <a
              href="https://linkedin.com/in/dizid"
              target="_blank"
              rel="noopener"
              class="contact-method"
            >
              <div class="method-icon">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div class="method-info">
                <span class="method-label">LinkedIn</span>
                <span class="method-value">in/dizid</span>
              </div>
              <i class="fa-solid fa-arrow-right method-arrow"></i>
            </a>

            <a
              href="https://github.com/dizid"
              target="_blank"
              rel="noopener"
              class="contact-method"
            >
              <div class="method-icon">
                <i class="fa-brands fa-github"></i>
              </div>
              <div class="method-info">
                <span class="method-label">GitHub</span>
                <span class="method-value">@dizid</span>
              </div>
              <i class="fa-solid fa-arrow-right method-arrow"></i>
            </a>

            <a
              href="https://twitter.com/dizid"
              target="_blank"
              rel="noopener"
              class="contact-method"
            >
              <div class="method-icon">
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div class="method-info">
                <span class="method-label">Twitter</span>
                <span class="method-value">@dizid</span>
              </div>
              <i class="fa-solid fa-arrow-right method-arrow"></i>
            </a>
          </div>

          <div class="contact-note">
            <i class="fa-solid fa-clock"></i>
            <span>Usually responds within 24-48 hours</span>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <form
            v-if="!isSubmitted"
            class="contact-form"
            @submit.prevent="handleSubmit"
          >

            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                name="name"
                class="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                name="email"
                class="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                name="message"
                class="form-input form-textarea"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <div v-if="submitError" class="form-error">
              <i class="fa-solid fa-exclamation-circle"></i>
              {{ submitError }}
            </div>

            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :disabled="isSubmitting"
            >
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
              <i v-else class="fa-solid fa-paper-plane"></i>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <div v-else class="success-message">
            <div class="success-icon">
              <i class="fa-solid fa-check"></i>
            </div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
            <button class="btn btn-secondary" @click="resetForm">
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-bg-primary);
}

.contact-grid {
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

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.contact-method:hover {
  border-color: var(--color-accent);
  background: var(--color-bg-tertiary);
}

.method-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  font-size: var(--text-lg);
  color: var(--color-accent);
}

.method-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.method-value {
  font-weight: 500;
}

.method-arrow {
  color: var(--color-accent);
  transition: transform var(--transition-fast);
}

.contact-method:hover .method-arrow {
  transform: translateX(4px);
}

.contact-note {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.contact-form-wrapper {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hidden {
  display: none;
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
  margin-bottom: var(--space-6);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
</style>
