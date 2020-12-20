import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// Import de los estilos globales
import "@/assets/global.css";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
