import { RouteConfig } from 'vue-router'
import App from '@/App'

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: App, // 顶层路由
        redirect: '/home', // 页面重定向
        children: [
            // 二级路由
            {
                path: '/home',
                name: 'Home',
                component: (r) => require.ensure([], () => r(require('@/views/Home')), 'Home'),
                // component: () => import('@/views/Home'),
            },
        ],
    },
]

export default routes
