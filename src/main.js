// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import http from './http'
import store from './store'
import directives from './directive'
import './components/static/jquery.js'
import lodings from '@/plugin/loading'

// console.log(api)

for (let key in directives) {
  Vue.directive(key, directives[key])
}
Vue.filter('wode', function (value) {
  return value + '1'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
