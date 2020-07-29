/*
 * @Author: PT
 * @Date: 2020-05-30 00:04:47
 * @LastEditors: PT
 * @LastEditTime: 2020-07-29 17:48:55
 * @Description: 项目入口
 */
import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import router from './router'

import { Button, Icon, Loading } from 'element-ui'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Loading)

Vue.prototype.$loading = Loading.service
Vue.prototype.$api = '--------------test======'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')