import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mian',
      component: Main,
      children: [
        { path: '/', name: 'home', component: Home }
      ]
    },

  ]
})
