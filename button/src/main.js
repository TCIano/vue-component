import Vue from "vue";
import App from "./App.vue";
import TcUI from "./components/index";
Vue.config.productionTip = false;

//全局使用组件
Vue.use(TcUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
