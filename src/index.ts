import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('@/style/common.less');

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
})