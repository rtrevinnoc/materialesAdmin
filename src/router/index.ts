import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, useRoute } from 'vue-router';
import { store } from '@/main';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import ('../views/SignupPage.vue')
  },
  {
    path: '/addProducto',
    name: 'addProducto',
    component: () => import ('../views/AddProductoPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manageOrdenes',
    name: 'manageOrdenes',
    component: () => import ('../views/ManageOrdenesPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logOut',
    name: 'logOut',
    component: () => import ('../views/LoginPage.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user.loggedIn) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
})

export default router
