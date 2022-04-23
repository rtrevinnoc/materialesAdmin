import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/signup',
    component: () => import ('../views/SignupPage.vue')
  },
  {
    path: '/addProducto',
    component: () => import ('../views/AddProducto.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
