import Vue from 'vue'
import App from './app.vue'
import router from './router'
import components from './components/'

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, components[key])
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  ...App
})

export { 
  app,
  router
}
