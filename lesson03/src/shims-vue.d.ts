import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'

// 声明模块vue, 返回Vue实力对象
declare module '*.vue' {
    export default Vue
}

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter
        $route: Route
        // 本地国际化映射配置
        $locale: {
            [propsName: string]: any
        }
    }
}
