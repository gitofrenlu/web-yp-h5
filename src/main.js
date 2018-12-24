import Vue from 'vue'
import App from './App'


import VueRouter from 'vue-router'
import routes from './router/index'
import VueLocalStorage from 'vue-localstorage'

import './mock/mock'


import G from '@/common/js/global.js'

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import '@/style/base.scss'
import '@/style/common.scss'

Vue.use(YDUI);
Vue.use(G);
Vue.use(VueRouter)
Vue.use(VueLocalStorage)



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

    next()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

