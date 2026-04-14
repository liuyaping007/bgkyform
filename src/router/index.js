import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/big1935219200305926145/1935219200305926145.vue'),
  },

  {
    path: '/big1948914776579035137',
    name: 'big1948914776579035137',
    component: () => import('@/views/big1948914776579035137/1948914776579035137.vue'),
  },
  {
    path: '/big1952989324777644033',
    name: 'big1952989324777644033',
    component: () => import('@/views/big1952989324777644033/1952989324777644033.vue'),
  },
  {
    path: '/big1949998322924179457',
    name: 'big1949998322924179457',
    component: () => import('@/views/big1949998322924179457/1949998322924179457.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
