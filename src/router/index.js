import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/Movies',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/Shows',
    name: 'Shows',
    component: () => import('../views/Shows.vue')
  },
  {
    path: '/Search/:name?',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
