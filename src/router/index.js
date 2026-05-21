import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',                // L'URL del browser
      name: 'home',             // Un nome univoco per la rotta (opzionale ma consigliato)
      component: HomeView       // Il componente associato
    },
    {
      path: '/products',            // L'URL del browser
      name: 'products',             // Un nome univoco per la rotta (opzionale ma consigliato)
      component: ProductsView       // Il componente associato
    },
    {
      path:'/users',
      name:'users',
      component: UsersView
    }
  ],
})

export default router
