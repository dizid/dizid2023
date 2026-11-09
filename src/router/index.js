import HomeView from '../views/HomeView.vue'
import { blogPosts } from '../data/blogPosts.js'
import { aiFeaturesPages } from '../data/aiFeaturesPages.js'

// One static route per blog post (not a dynamic /blog/:slug), so vite-ssg
// prerenders every post to its own HTML file without extra config.
const blogPostRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  name: `blog-${post.slug}`,
  component: () => import('../views/BlogPostView.vue'),
  props: { slug: post.slug }
}))

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
    path: '/fixed-price-mvp-for-non-technical-founders',
    name: 'fixed-price-mvp',
    component: () => import('../views/FixedPriceMvpView.vue')
  },
  // "Add AI features to your existing app" page, Dutch + English (T-0052)
  {
    path: aiFeaturesPages.nl.path,
    name: 'ai-features-nl',
    component: () => import('../views/AiFeaturesView.vue'),
    props: { lang: 'nl' }
  },
  {
    path: aiFeaturesPages.en.path,
    name: 'ai-features-en',
    component: () => import('../views/AiFeaturesView.vue'),
    props: { lang: 'en' }
  },
  {
    path: '/what-is-dizid',
    name: 'what-is-dizid',
    component: () => import('../views/WhatIsDizidView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogIndexView.vue')
  },
  ...blogPostRoutes
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
