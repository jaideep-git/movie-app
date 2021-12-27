import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AxiosPlugin from 'vue-axios-cors';
import 'materialize-css/dist/css/materialize.css'
import VueMaterialTabs from 'vue-material-tabs';
Vue.use(VueMaterialTabs);
Vue.use(AxiosPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
