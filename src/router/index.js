import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/category/:id',
      name: 'category-id',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/category-men',
      name: 'category-men',
      component: () => import ('../views/CategoryMenView.vue')
    },
    {
      path: '/category-women',
      name: 'category-women',
      component: () => import ('../views/CategoryWomenView.vue')
    },
    {
      path: '/all',
      name: 'products',
      component: () => import ('../views/AllProductsView.vue')
    }
    
  ]
})

export default router
