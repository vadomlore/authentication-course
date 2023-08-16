import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import RegisterUser from './views/RegisterUser.vue'
import Login from './views/Login.vue'
export const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      name: 'register',
      path: '/register',
      component: RegisterUser
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/')
  }else {
    next()
  }
})
