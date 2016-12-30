import * as types from './types';

export const startGame = ({ commit }) => commit(types.START_GAME);
export const addPlayer = ({ commit }, name) => commit(types.ADD_PLAYER, name);
export const removePlayer = ({ commit }, player) => commit(types.REMOVE_PLAYER, player);
export const rollDice = ({ commit }) => commit(types.ROLL_DICE);
