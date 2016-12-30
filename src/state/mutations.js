import * as types from './types';

const defaultPlayerState = {
  total: 0,
  redMarked: [],
  yellowMarked: [],
  greenMarked: [],
  blueMarked: [],
  combinationSelected: [],
  foulsTaken: [],
};

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function randomDie() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function nextPlayer(playerList, id) {
  const currentPlayerIndex = playerList.findIndex(player => player.id === id);

  if (playerList.length === (currentPlayerIndex + 1)) {
    return playerList[0];
  }

  return playerList[currentPlayerIndex + 1];
}

export default {
  [types.START_GAME](state) {
    state.gameStarted = true;
    state.playerOrder = shuffle(state.players);
    state.currentPlayerTurn = state.playerOrder[0];
  },

  [types.ADD_PLAYER](state, name) {
    state.players.push({ ...defaultPlayerState, name, id: randId() });
  },

  [types.REMOVE_PLAYER](state, player) {
    state.players.splice(player, 1);
  },

  [types.ROLL_DICE](state) {
    // 'roll' dice
    state.dice.whiteOne = randomDie();
    state.dice.whiteTwo = randomDie();
    state.dice.red = randomDie();
    state.dice.yellow = randomDie();
    state.dice.blue = randomDie();
    state.dice.green = randomDie();

    const currentItemId = state.currentPlayerTurn.id;

    // set currentPlayerTurn
    state.currentPlayerTurn = nextPlayer(state.playerOrder, currentItemId);
  },
};
