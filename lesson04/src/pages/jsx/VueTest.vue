<script type="text/jsx">
export default {
    name: 'test',
    data() {
        return {
            show: 22
        }
    },
    props: {
        typeSpan: {
            type: Object,
            default: () => {
                return {
                    class: '',
                    style: ''
                }
            }
        }
    },
    created() {
        console.log('创建')
        const list = [{id: 12}, {id: 15}]
        console.log('_.find', this._.find(list, {id: 15}))
    },
    methods: {
        // 触发
        handleOk() {
            this.show = this.show + 1
            console.log('有意思', this.show)
            this.bus.$emit('triggerTestFn')
        }
    },
    render() {
        return (
            <div
                className={this.typeSpan.attrs.class}
                style={this.typeSpan.attrs.style}
            >
                {this.typeSpan.text}
                <el-button>什么鬼</el-button>
                <p onClick={() => this.handleOk()}>word</p>
            </div>
        )
    }
}
</script>
