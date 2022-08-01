import Vue from "vue";
import App from "./App.vue";
//全局引入
import TcUi from "./components/Tcui";
Vue.config.productionTip = false;

Vue.use(TcUi);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
