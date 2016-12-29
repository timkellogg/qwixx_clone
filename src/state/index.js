import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// initial state
const state = {
  gameStarted: false,
  winner: false,
  locked: {
    yellow: false,
    red: false,
    green: false,
    blue: false,
  },
  players: [],
  playerOrder: [],
  currentPlayerTurn: '',
  die: {
    yellow: '',
    red: '',
    blue: '',
    green: '',
    white: [],
  },
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
