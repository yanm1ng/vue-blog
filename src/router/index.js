import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Posts from '@/pages/posts'
import Tags from '@/pages/tags'
import About from '@/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/posts/:id',
      component: Posts
    },
    {
      path: '/tags',
      component: Tags
    },
    {
      path: '/about',
      component: About
    }
  ]
})
