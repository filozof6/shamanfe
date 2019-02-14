import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Secure from '@/components/Secure'
import dreamRoutes from './dream';

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: { 
      requiresAuth: true
    }
  }
]


const routes = baseRoutes.concat(dreamRoutes);
let router = new Router({
  routes 
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
