/**
 *  @description: 全局的mixin, 当mixin与组件对象的键名冲突时， 取组件对象的键值对
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

export default {
    components: {},
    // 数据
    data() {
        return {
            app_name: '这是一个vue-cli3.x+的框架搭建网站',
            app_author: '则丸',
        }
    },
    // 接收父组件传入的参数
    props: {},
    // vue实例被创建时
    created() {
        // 打印当前的vue.$router
        // console.log('currentRouter.name...', this.$router.currentRoute.name)
    },
    // vue实例被挂载至dom上时
    mounted() {},
    // vue实例销毁
    destroyed() {},
    // 属性值计算
    computed: {},
    // 数据侦听
    watch: {},
    // 实例方法
    methods: {},
}
