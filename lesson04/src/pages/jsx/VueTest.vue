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
    methods: {
        // 触发
        handleOk() {
            this.show = this.show + 1
            console.log('有意思', this.show)
        }
    },
    render() {
        return (
            <div
                className={this.typeSpan.attrs.class}
                style={this.typeSpan.attrs.style}
            >
                {this.typeSpan.text}
                <p onClick={() => this.handleOk()}>word</p>
            </div>
        )
    }
}
</script>
