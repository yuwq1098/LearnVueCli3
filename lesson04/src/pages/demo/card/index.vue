<!--
  - @description: Card的 卡片组件demo
  - @author: 则丸
  - @weChat: yuwq1098
  - @producer: 海康威视 & 易立德
  -->

<template>
    <div class='CardDemo'>
        <div class="m-card-wrap">
            <CardBox :list="listData"></CardBox>
        </div>
    </div>
</template>

<script>
import CardBox from '@components/wqui/card-box'
export default {
    name: 'CardDemo',
    // 注册组件
    components: {
        CardBox
        // components...
    },
    // 数据
    data() {
        return {
            listData: Array(6)
                .fill({})
                .map((n, i) => {
                    return {
                        name: `demo${i}`
                    }
                })
        }
    },
    // 接收父组件传入的参数
    props: {
        // props...
    },
    // vue实例被创建时
    created() {
        console.log('listData', this.listData)
    },
    // vue实例被挂载至dom上时
    mounted() {
        // mounted...
    },
    // 销毁实例的钩子
    destroyed() {
        // destroyed...
    },
    // 属性值计算
    computed: {
        // computed...
    },
    // 数据监听
    watch: {
        // watch...
    },
    // 实例方法
    methods: {
        // methods...
    },
    // 视图渲染
    render() {
        return <div>{/** 我是模板 */}</div>
    }
}
</script>

<!-- 限定作用域'scoped' 不要误写成scope -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
.CardDemo
    width 1200px
    min-height 240px
    background rgba(255, 255, 255, 0.5)
    _completeCenter(0, 0, 50px, auto)
</style>