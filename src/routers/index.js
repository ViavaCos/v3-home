import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout'
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router