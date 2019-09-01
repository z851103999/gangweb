import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

import './assets/scss/style.scss'
import './assets/scss/_variables.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
