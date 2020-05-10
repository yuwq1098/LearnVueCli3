// 引入polyfill，解决部分es6 babel转译问题
import '@babel/polyfill/dist/polyfill.min.js'
import Vue from 'vue'
import App from './App'
// import "./registerServiceWorker"; // 离线加载， 提高应用程序的访问速度
import router from './router'
import store from './store'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
