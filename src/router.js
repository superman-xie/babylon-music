import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './views/Recommend'
import Ranking from './views/Ranking'
//import Singer from './views/Singer'
import Search from './views/Search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Singer')
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
