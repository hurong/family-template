import Vue from 'vue';
import Router from 'vue-router';
import management from './management';
import home from './home';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/family/',
  routes: [
    ...management,
    ...home,
    { path: '/', redirect: '/home' },
  ],
});