/**
 *  @description: vue-cli3.x+ 框架搭建项目的主入口
 *  @author: 则丸
 *  @producer: 海康威视 & 易立德
 **/

// 引入polyfill，解决部分es6 babel转译问题
// 靠polyfill来实现在旧的浏览器上支持一些新的ES6+的JS特性，例如（Promise、async\await、spread语法等等）。
// 实际上这些polyfill的本质就是通过ES5甚至ES3的代码来实现新的特性，以实现在旧的浏览器上能跑新版本的JS。
import '@babel/polyfill/dist/polyfill.min.js'
import Vue from 'vue'
// 引入vue路由
import VueRouter from 'vue-router'
// import './registerServiceWorker' // 离线加载， 提高应用程序的访问速度
import routes from '@/router/index'
import store from '@/store'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)

// 路由对象
const router = new VueRouter({
    routes,
    mode: 'hash',
})

new Vue({
    router,
    store,
}).$mount('#app')
