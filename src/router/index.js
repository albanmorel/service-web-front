import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.prototype.authToken = "123"
Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'login',
    component: () => import('../components/login.vue')
  },  
  {
    path: '/comments/:gameId',
    name: 'Comments',
    props: true,
    component: () => import('../views/Comments.vue')
  }, 
  {
    path: '/home/',
    name: 'Home',
    props: true,
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
