/**
 *  @description: jsx的vscode模板
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

export default {
    name: 'Home',
    // 注册组件
    components: {
        // components...
    },
    // 数据
    data() {
        return {
            // date...
        }
    },
    // 接收父组件传入的参数
    props: {
        // props...
    },
    // vue实例被创建时
    created() {
        // this.axiox.get('mock/test1').then((res) => {
        //     console.log(res, 'res')
        // })
        this.axios.get('/mock/test1').then((response) => {
            console.log(response.data)
        })
        // created...
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
        return <div>首页</div>
    },
}
