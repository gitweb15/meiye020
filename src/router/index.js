import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../views/Home.vue')
const About = () =>import('../views/About.vue')
const Gerenziliao = () =>import('../views/gerenziliao.vue')
const Xiangxidizhi = () =>import('../views/xiangxidizhi.vue')
const Zijinguanli = () =>import('../views/zijinguanli.vue')
const Zijingxiangxi = () =>import('../views/zijingxiangxi.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
	component: About
  },
  {
    path: '/gerenziliao',
    name: 'Gerenziliao',
	component: Gerenziliao
  },
  {
    path: '/xiangxidizhi',
    name: 'Xiangxidizhi',
	component: Xiangxidizhi
  },
  {
    path: '/zijinguanli',
    name: 'Zijinguanli',
	component: Zijinguanli
  },
  {
    path: '/zijingxiangxi',
    name: 'Zijingxiangxi',
	component: Zijingxiangxi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
