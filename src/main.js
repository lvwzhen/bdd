import Vue from 'vue'
import App from './App.vue'
import { router } from "./router";
import VueDragResize from "vue-drag-resize";
import VueClipboard from "vue-clipboard2";
import "./assets/less/style.less";

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

Vue.component("vue-drag-resize", VueDragResize);

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
