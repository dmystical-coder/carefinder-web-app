import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/signup', name: 'SignUp', component: () => import('@/views/SignUp.vue') },
  { path: '/signin', name: 'SignIn', component: () => import('@/views/SignIn.vue') },
  { path: '/dashboard', name: 'DashBoard', component: () => import('@/views/DashBoard.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/AboutPage.vue') },
  { path: '/blog', name: 'BlogsPage', component: () => import('@/views/BlogsPage.vue') },
  { path: '/contact', name: 'ContactPage', component: () => import('@/views/ContactPage.vue') },
  {
    path: '/contributors',
    name: 'ContributorsPage',
    component: () => import('@/views/ContributorsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
