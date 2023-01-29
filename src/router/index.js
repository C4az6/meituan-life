import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/pages/List.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/pages/Detail.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/City.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/Search.vue')
    }

  ]
})