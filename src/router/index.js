import { createRouter, createWebHistory } from 'vue-router'

import SignUpView from '@/views/SignUp.vue'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Movies from '@/views/Movie.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import Cart from '@/views/Cart.vue'
import Cart2 from '@/components/CartOption2/Cart2.vue'
import ModalWrap from '@/components/secondModal/ModalWrap'
import notFound from '@/views/notFound.vue'
const routes = [  
  {
    path:'/',
    name:'Home',
    component:Home
  }, 
  // movies
  {
    path:'/movies',
    name:'Movies',
    component:Movies
  }, 
   {
    path:'/movie/:id',
    name:'MovieDetail',
    component:MovieDetail
  },
  // end movies 
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  }, 
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  }, 
  {
    path:'/cart-option-2',
    name:'Cart2',
    component:Cart2
  }, 
  {
    path:'/sign-up-form',
    name:'SignUpView',
    component:SignUpView
  }, 
  {
    path:'/old-sign-up-form',
    redirect:'/sign-up-form'
  }, 
  {
    path:'/second-modal',
    component:ModalWrap
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // catchAll= 404; just '*' no longer supported in vue.js 3
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
