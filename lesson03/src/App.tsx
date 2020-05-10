import { Component, Vue } from 'vue-property-decorator'
// import { Action, State } from 'vuex-class'
// import router from './../../lesson01/src/router/index'

@Component
export default class App extends Vue {
    protected mounted() {
        console.log('我进入了钩子')
    }
    protected render() {
        return (
            <div class="m-container">
                <router-view></router-view>
            </div>
        )
    }
}
