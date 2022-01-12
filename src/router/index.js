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
    props: { name: "" },
    component: () => import('../views/Search.vue')
  },
  {
    path: '/Movie/:id?',
    name: 'Movie',
    component: () => import('../views/MoviePage.vue')
  },
  {
    path: '/Show/:id?',
    name: 'Show',
    component: () => import('../views/ShowPage.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
