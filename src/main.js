import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './state';

import Start from './components/start';
import App from './app';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Start },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
