import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import AboutPage from '@/views/AboutPage.vue'
import BlogsPage from '@/views/BlogsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ContributorsPage from '@/views/ContributorsPage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/dashboard', name: 'DashBoard', component: DashBoard },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/blog', name: 'BlogsPage', component: BlogsPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/contributors', name: 'ContributorsPage', component: ContributorsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
