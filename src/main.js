import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
require("bootstrap-vue-datatable");

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
const eventBus = new Vue(); // added line
new Vue({
  render: h => h(App),
}).$mount('#app')
export default eventBus;