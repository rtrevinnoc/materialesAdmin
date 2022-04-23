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
    component: () => import ('../views/AddProductoPage.vue')
  },
  {
    path: '/manageVentas',
    component: () => import ('../views/manageVentasPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
