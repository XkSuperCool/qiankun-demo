import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import startQiankun from './micro';

import '@/assets/global.css';

startQiankun();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app');
