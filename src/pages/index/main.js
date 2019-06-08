import Vue from "vue";
import index from "./index.vue";
// import "../../../public/styles/reset.css";
Vue.config.productionTip = false;

new Vue({
  render: h => h(index)
}).$mount("#app");
