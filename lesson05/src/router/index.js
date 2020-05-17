/**
 *  @description: 项目所使用的路由文件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('@pages/home')
// 示例1代码
const Example01 = () => import('@pages/example/example01')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/demo1', // 重定向
    },
    {
        name: 'Home', // 首页
        path: '/home',
        component: Home,
    },
    {
        path: '/demo1', // 示例1代码
        name: 'Example01',
        component: Example01,
    },
]

const router = new VueRouter({
    routes,
})

export default router
