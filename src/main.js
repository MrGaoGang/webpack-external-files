import Vue from "vue";
import App from "./App.vue";
// 此处手工import只是作为样例使用
import { widgets } from "../dist-lib/webpack-external-files.umd.js";
console.log(widgets, "=========");

if (widgets && Array.isArray(widgets)) {
  widgets.forEach(ele => {
    Vue.component(ele.key, ele.value);
  });
}
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
