import * as types from './types';

const defaultPlayerState = {
  total: 0,
  redMarked: [],
  yellowMarked: [],
  greenMarked: [],
  blueMarked: [],
  combinationSelected: [],
};

// export default {
//   [types.START_GAME](state) {
//     state.gameStarted = true;
//   },
// };

export default {
  [types.ADD_PLAYER](state, name) {
    state.players.push({ ...defaultPlayerState, name });
  },
};
