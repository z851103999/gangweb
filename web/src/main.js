import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false;

import Card from "./components/Card";
Vue.component('m-card', Card)

import ListCard from "./components/ListCard";
Vue.component('m-list-card', ListCard)

import './assets/scss/style.scss'
import './assets/scss/_variables.scss'

import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3000/web/api'
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
