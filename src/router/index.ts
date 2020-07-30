/*
 * @Author: PT
 * @Date: 2020-05-31 21:52:04
 * @LastEditors: PT
 * @LastEditTime: 2020-07-30 09:15:45
 * @Description: file content
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
console.log('process.env.PUB_PROJECTNAME', process.env.PUB_PROJECTNAME)
Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */'@/views/test/test.vue')
  },
  {
    path: '/test2',
    component: () => import(/* webpackChunkName: "test2" */ '@/views/test/test2.vue')
  },
  {
    path: '/test3',
    component: () => import(/* webpackChunkName: "test3" */ '@/views/test/test3')
  }
]

export default new VueRouter({
  base: process.env.PUB_PROJECTNAME ? `/${process.env.PUB_PROJECTNAME}/` : '/',
  routes
})