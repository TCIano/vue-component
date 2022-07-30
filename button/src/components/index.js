import TcButton from "./buttonVue.vue";

export default {
  install(Vue) {
    //注册组件
    Vue.component("buttonVue", TcButton);
  },
};
