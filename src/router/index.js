import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/hire',
    name: 'hire',
    component: () => import('../views/HireView.vue')
  },
  {
    path: '/hire/mvp-development',
    name: 'mvp-development',
    component: () => import('../views/MvpDevelopmentView.vue')
  },
  {
    path: '/what-is-dizid',
    name: 'what-is-dizid',
    component: () => import('../views/WhatIsDizidView.vue')
  }
]

// Scroll to top on route change, or to hash if present
export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth' }
  }
  return { top: 0 }
}
