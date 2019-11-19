import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/part',
    name: 'part',
    component: () => import(/* webpackChunkName: "part" */ '../views/Part.vue')
  },
  {
    path: '/repair',
    name: 'repair',
    component: () => import(/* webpackChunkName: "repair" */ '../views/Repair.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ '../views/Client.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    component: () => import(/* webpackChunkName: "sale" */ '../views/Sale.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue')
  },
  // {
  //   path: '/buy/buyForm',
  //   name: 'buyForm',
  //   component: () => import(/* webpackChunkName: "buyForm" */ '../views/BuyForm.vue')
  // },
  {
    path: '/technical',
    name: 'technical',
    component: () => import(/* webpackChunkName: "technical" */ '../views/Technical.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../views/Report.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
