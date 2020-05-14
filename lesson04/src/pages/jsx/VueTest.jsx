// https://blog.csdn.net/qq_43330090/article/details/100143925
// https://www.jianshu.com/p/96dc63e4e263
// https://www.jianshu.com/p/96dc63e4e263

{
    /* <script type="text/jsx"> */
}
import jsUtilsMixin from '@/mixins/jsUtils'
export default {
    name: 'test',
    mixins: [jsUtilsMixin],
    data() {
        return {
            show: 22,
            value: '77',
        }
    },
    props: {
        typeSpan: {
            type: Object,
            default: () => {
                return {
                    class: '',
                    style: '',
                }
            },
        },
    },
    created() {
        console.log('addPrefixZero', this.addPrefixZero(3))
        console.log('removeAllSpaces', this.removeAllSpaces('41 0    157x 9'))
        // console.log('创建')
        // const list = [{ id: 12 }, { id: 15 }]
        // console.log('_.find', this._.find(list, { id: 15 }))
    },
    methods: {
        // jsx使用字段过滤器
        useFilters(name, value, ...rest) {
            //使用this.$options.filters[]方式获取本地过滤器
            const filters = this.$options.filters[name]
            return filters(value, ...rest)
        },
        // 触发
        handleOk() {
            this.show = this.show + 1
            console.log('有意思', this.show)
            this.bus.$emit('triggerTestFn')
        },
    },
    render() {
        return (
            <div className={this.typeSpan.attrs.class} style={this.typeSpan.attrs.style}>
                {this.typeSpan.text}
                <el-button>什么鬼{this.useFilters('telAnonymization', 18870836264)}</el-button>
                <p onClick={() => this.handleOk()}>word</p>
                {/*使用自定义v-model*/}
                {/* <input
                    value={this.value}
                    onInput={(el) => {
                        this.value = el.target.value
                        console.log(this.value, 'this.value')
                    }}
                ></input> */}
                <el-input
                    value={this.value}
                    onInput={(value) => {
                        this.value = value
                        console.log(this.value, 'this.value')
                    }}
                ></el-input>
            </div>
        )
    },
}
// </script>
