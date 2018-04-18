import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend.vue'
import Hot from '@/components/Hot.vue'
import Search from '@/components/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/rec'
    },
    {
      path: '/rec',
      component: Recommend
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
