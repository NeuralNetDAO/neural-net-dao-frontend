import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vision',
    name: 'vision',
    component: () => import('../views/VisionView.vue')
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import('../views/MissionView.vue')
  },
  {
    path: '/problems',
    name: 'problems',
    component: () => import('../views/ProblemsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
