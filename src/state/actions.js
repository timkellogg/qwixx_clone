import * as types from './types';

// export const startGame = ({ commit }) => commit(types.START_GAME);
export const addPlayer = ({ commit }, name) => commit(types.ADD_PLAYER, name);
