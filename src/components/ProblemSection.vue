<script setup>
// The four ways a software project typically goes wrong for someone who
// isn't technical. Each one is answered by a point in WhyMeSection.
const problems = [
  {
    icon: 'fa-solid fa-circle-question',
    title: 'Nobody can tell you what it should cost',
    text: 'Every quote is a different number and you have no way of knowing which one is fair.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'The agency team keeps changing',
    text: 'You pitch to a senior person, then your project goes to juniors and every update takes a week.'
  },
  {
    icon: 'fa-solid fa-ghost',
    title: 'The freelancer went quiet',
    text: 'Messages go unanswered, and what finally arrives is something nobody else can maintain.'
  },
  {
    icon: 'fa-solid fa-hourglass-half',
    title: 'Deadlines slip, and nobody says so',
    text: "You find out it's late when it's already late, and by then the budget is gone."
  }
]
</script>

<template>
  <section id="problem" class="section problem">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Sound familiar?</h2>
        <p class="section-subtitle">
          Building software is stressful when you're not technical. These are the usual ways it goes wrong.
        </p>
      </div>

      <div class="problem-grid">
        <div v-for="problem in problems" :key="problem.title" class="problem-card card">
          <div class="problem-icon">
            <i :class="problem.icon" aria-hidden="true"></i>
          </div>
          <h3 class="problem-title">{{ problem.title }}</h3>
          <p class="problem-text">{{ problem.text }}</p>
        </div>
      </div>

      <p class="problem-answer">
        I work differently: <strong>one person, a fixed price, and a demo every week.</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.problem {
  background: var(--color-bg-secondary);
}

.section-header {
  margin-bottom: var(--space-12);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.problem-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  font-size: var(--text-xl);
  color: #f87171;
  margin-bottom: var(--space-4);
}

.problem-title {
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
}

.problem-text {
  font-size: var(--text-sm);
  line-height: 1.6;
}

.problem-answer {
  text-align: center;
  font-size: var(--text-xl);
  margin-top: var(--space-12);
}

.problem-answer strong {
  color: var(--color-text-primary);
}

@media (max-width: 1024px) {
  .problem-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .problem-grid {
    grid-template-columns: 1fr;
  }

  .problem-answer {
    font-size: var(--text-lg);
  }
}
</style>
