import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
