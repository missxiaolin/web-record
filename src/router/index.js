import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bmap from '../views/BMap.vue'
import Bmap2 from '../views/BMap2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/map',
    name: 'BMap',
    component: Bmap
  }, {
    path: '/map2',
    name: 'BMap2',
    component: Bmap2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
