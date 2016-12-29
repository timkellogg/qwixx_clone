import Vue from 'vue';
import store from './state';
import App from './app';

import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
