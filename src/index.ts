import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('@/style/common.less');
require('@/style/family-ui.less');

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
})