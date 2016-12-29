import * as types from './types';

export default {
  [types.START_GAME](state) {
    state.gameStarted = true;
  },
};
