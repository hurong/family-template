import Vue from 'vue';
import Router from 'vue-router';
import management from './management';
import home from './home';
console.log(process.env.base_url)

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...management,
    ...home,
    { path: '/', redirect: '/home' },
  ],
});