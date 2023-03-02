import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('../view/test/index.vue')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('../view/test/Teleport.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
