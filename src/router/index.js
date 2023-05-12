import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  

  {
      path: '/user/:userId',
      name: 'home',
      component: () => import('@/views/dashboard/users/UserList.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
