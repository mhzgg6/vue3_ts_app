import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('../view/test/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
