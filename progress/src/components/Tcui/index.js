import TcProgress from "../progerss.vue";
// 利用install里面的注册组件
export default {
  install(Vue) {
    Vue.component("TcProgress", TcProgress);
  },
};
