import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/dashboard', name: 'DashBoard', component: DashBoard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
