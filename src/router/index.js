import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['@/pages/index'], resolve)
      }
    },
    {
      path: '/posts/:id',
      component: function (resolve) {
        require(['@/pages/posts'], resolve)
      }
    },
    {
      path: '/tags',
      component: function (resolve) {
        require(['@/pages/tags'], resolve)
      }
    },
    {
      path: '/about',
      component: function (resolve) {
        require(['@/pages/about'], resolve)
      }
    },
    {
      path: '/page/:current',
      component: function (resolve) {
        require(['@/pages/page'], resolve)
      }
    },
    {
      path: '/archives',
      component: function (resolve) {
        require(['@/pages/archives'], resolve)
      }
    },
  ]
})
