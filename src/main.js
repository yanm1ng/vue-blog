import Vue from 'vue'
import App from './app'
import router from './router'
import components from './components/'

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
