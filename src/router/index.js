import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
]

const router = new VueRouter({
  // base:
  routes
})

export default router
