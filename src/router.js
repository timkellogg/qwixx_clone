import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './state';

import Start from './components/start';
import Board from './components/board';

Vue.use(VueRouter);

function requirePlayers(to, from, next) {
  const numberOfPlayers = store.state.players.length;

  if (numberOfPlayers < 2) {
    next({ path: '/' });
  } else {
    next();
  }
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Start },
    { path: '/board', component: Board, beforeEnter: requirePlayers },
  ],
});

export default router;
