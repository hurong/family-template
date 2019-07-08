import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
require('@/style/common.less');
require('@/style/family-ui.less');
require('../static/iconfont.css');

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App)
})