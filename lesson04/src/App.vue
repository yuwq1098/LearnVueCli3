<template>
    <div class="hello">
        <vue-test :typeSpan="typeSpan"></vue-test>
    </div>
</template>

<script type="text/jsx">
import VueTest from '@pages/jsx/VueTest'
export default {
    name: 'HelloWorld',
    components: {
        VueTest
    },
    created () {
        console.log(this)
        this.bus.$once('triggerTestFn', () => {
            console.log('我是 triggerTestFn')
        })
    },
    computed: {
        typeSpan() {
            return {
                text: 'hello',
                attrs: {
                    class: 'open-service',
                    style: 'color:#0199f0;cursor:pointer'
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.hello
    background #e45
</style>
