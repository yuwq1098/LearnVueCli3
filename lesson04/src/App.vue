<template>
    <div class="hello">
        <p>{{tel | telAnonymization}}</p>
        <p>{{15 | formatAmount(3)}}</p>
        <vue-test :typeSpan="typeSpan"></vue-test>
    </div>
</template>

<script type="text/jsx">
import VueTest from '@pages/jsx/VueTest.jsx'
export default {
    name: 'HelloWorld',
    components: {
        VueTest
    },
    filters: {
        filterA: function(str) {
            return str + 'xxx'
        }
    },
    data() {
        return {
            tel: '18870836264'
        }
    },
    created() {
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
