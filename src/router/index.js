import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },  
  {
    path: '/comments/:gameId',
    name: 'Comments',
    props: true,
    component: () => import('../views/Comments.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
