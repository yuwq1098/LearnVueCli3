/**
 *  @description: 项目运行所使用的入口js文件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

// 引入 polyfill，解决部分es6 babel转译问题
import '@babel/polyfill/dist/polyfill.min.js'
// 引入 已经按需引入element-ui的 Vue实例对象
import Vue from 'vue'
import ElementVue from './element-vue'
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
import EventBus from './event-bus'
// 全局的混入mixin
import globalMixin from './mixins/global'
// 全局引入字段过滤器的安装文件
import TextFilters from './text-filters'

// 引入element-ui使用的样式文件
import '@/assets/css/main.styl'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(TextFilters)
Vue.use(EventBus)
Vue.use(ElementVue)

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.prototype._ = _

Vue.mixin(globalMixin)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// 框架结构调整 √
// eslint结合 vscode的自动修复 √
// axiso二次封装 √
// 自定义Event Bus √
// 按需加载 element ui组件 √
// jsx语法 √
// 字段过滤器 √
// mixin/mixins √
// stylus全局 √
// mock.js √
// vuex及 vuex数据持久化
// 字体图标iconfont
// demo1 盒子组件

// 自定义指令
// 国际化 i18n
// 二次封装ui库, 并穿透修改第三方组件的样式
// 多入口设计
// 项目打包,发布
// 打包压缩、项目包体优化
// demo2 高德地图vue组件
// demo3 打字机效果
// demo3 粒子波浪效果
