import Vue from 'vue';
import Router from 'vue-router';
import management from './management';
import home from './home';
Vue.use(Router);
const baseUrl = process.env.BASE_URL || '';

export default new Router({
  mode: 'history',
  base: baseUrl ? `/${baseUrl}/` : '',
  routes: [
    ...management,
    ...home,
    { path: '/', redirect: '/home' },
  ],
});