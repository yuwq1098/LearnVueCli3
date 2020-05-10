import { Vue, Component, Prop } from "vue-property-decorator";

// export interface State {
//     num1: number;
// }

@Component
class Home extends Vue {
  // 动态加载的组件
  //   @Prop(Function) load!: Function;
  //   // 动画延时
  //   @Prop(Number) delay!: number;
  lessonName = 0;
  btnLoading: boolean = false;
  // template: any = () => {
  //     return <div>{this.lessonName}</div>
  // }
  mounted() {
    console.log(this.lessonName);
  }
  render() {
    return <div>{this.lessonName}</div>;
  }
}

export default Form.create({})(Home);
