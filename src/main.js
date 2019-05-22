import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bulma/css/bulma.min.css'
import routes from './route'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')





