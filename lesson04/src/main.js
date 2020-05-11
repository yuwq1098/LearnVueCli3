/**
 *  @description: 项目运行所使用的入口js文件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

// 引入 polyfill，解决部分es6 babel转译问题
import '@babel/polyfill/dist/polyfill.min.js'
// 引入 已经按需引入element-ui的 Vue实例对象
import Vue from './element-vue'
import App from './App'
// import "./registerServiceWorker"; // 离线加载， 提高应用程序的访问速度
import router from './router'
import store from './store'
// 引入二次封装的axios
import axios from './axios-http'
import VueAxios from 'vue-axios'
// JavaScript 实用工具库
import _ from 'lodash'
// 中央事件总线Event Bus,实现兄弟组件通信
import bus from './event-bus'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.prototype._ = _
Vue.prototype.bus = bus

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// 框架结构调整
// eslint结合 vscode的自动修复
// axiso二次封装
// 自定义Event Bus
// 按需加载 element ui组件
// jsx语法
// 字段过滤器
// mock.js
// 多入口设计
// stylus全局
// 国际化 i18n
// vuex数据持久化
// mixin/mixins
// 字体图标iconfont
// 自定义指令
// 二次封装ui库, 并穿透修改第三方组件的样式
// 项目打包,发布
