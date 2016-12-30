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
  dice: {
    yellow: 1,
    red: 4,
    blue: 5,
    green: 2,
    whiteOne: 3,
    whiteTwo: 5,
  },
};
// check if die in player has rolled


export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
