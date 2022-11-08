import Vue from 'vue'
import App from './App.vue'
import store from './store'
import PrimeVue from 'primevue/config';
import axios from 'axios';

import './assets/tailwind.css'

Vue.use(PrimeVue);

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
