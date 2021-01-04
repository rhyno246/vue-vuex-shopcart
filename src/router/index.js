import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect : '/products'
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path : '/products/:id',
    props : true,
    component: () => import('../views/ProductsDetail.vue')
  },
  {
    path : '/blog',
    name : 'blog',
    component : () => import('../views/Blog.vue')
  },
  {
    path : '/contact',
    name : 'contact',
    component : () => import('../views/Contact.vue')
  },
  {
    path : '/cart',
    name : 'cart',
    component : () => import('../views/Cart.vue')
  },
  {
    path : '/search',
    name : 'search',
    component : () => import('../views/Search.vue')
  },
  { 
    path: '/:notFound(.*)',
    name : 'notfound',
    component : () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
