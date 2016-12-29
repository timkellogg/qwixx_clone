import * as types from './types';

const defaultPlayerState = {
  total: 0,
  redMarked: [],
  yellowMarked: [],
  greenMarked: [],
  blueMarked: [],
  combinationSelected: [],
};

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

export default {
  [types.START_GAME](state) {
    state.gameStarted = true;
  },

  [types.ADD_PLAYER](state, name) {
    state.players.push({ ...defaultPlayerState, name, id: randId() });
  },

  [types.REMOVE_PLAYER](state, player) {
    state.players.splice(player, 1);
  },
};
