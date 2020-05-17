/**
 *  @description: 项目运行所使用的入口js文件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/
// 引入 polyfill，解决部分es6 babel转译问题
import '@babel/polyfill/dist/polyfill.min.js'
import Vue from 'vue'
// 引入 按需引入的element-ui组件库
import ElementVue from './element-vue'
import App from './App.vue'
// import "./registerServiceWorker"; // 离线加载， 提高应用程序的访问速度
import router from './router'
import store from './store'
// 引入二次封装的axios
import VueAxios from 'vue-axios'
import axios from './axios-http'
// JavaScript 实用工具库
import _ from 'lodash'
// 全局引入字段过滤器的安装文件
import TextFilters from './text-filters'
// 中央事件总线Event Bus,实现兄弟组件通信
import EventBus from './event-bus'
// 网站的api请求数据
import api from '@/api/request-data'

// 引入网站使用的主要样式文件
import '@/assets/css/main.styl'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(ElementVue)
Vue.use(TextFilters)
Vue.use(EventBus)

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.prototype._ = _
Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// 框架结构调整 √
// eslint结合 vscode的自动修复 √
// axiso二次封装 √
// vue代码片段（vscode vue完整模板）√
// 自定义Event Bus √
// 按需加载 element ui组件 √
// jsx语法 √
// 字段过滤器 √
// mixin/mixins √
// stylus全局 √
// mock.js √
// vue-cli4 热刷新 √
// 字体图标iconfont
// 站酷的部分盒子组件
