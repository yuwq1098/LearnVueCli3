import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('@pages/home')
//  Card的 卡片组件demo
const CardDemo = () => import('@pages/demo/card')
//  高德地图组件的demo
const VueAmap = () => import('@pages/demo/vueAmap/index.jsx')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/demo1',
        name: 'CardDemo',
        component: CardDemo,
    },
    {
        path: '/demo2',
        name: 'VueAmap',
        component: VueAmap,
    },
]

const router = new VueRouter({
    routes,
})

export default router
