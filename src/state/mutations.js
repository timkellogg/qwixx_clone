/* eslint-disable */
import * as types from './types';

const defaultPlayerState = {
  total: 0,
  redMarked: [],
  yellowMarked: [],
  greenMarked: [],
  blueMarked: [],
  whiteCombinationSelected: false,
  otherCombinationSelected: false,
  foulsTaken: [],
  turnFinished: false,
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

function useWhiteCombination(n, color, state, player) {
  if (n === state.whiteCombination && useCombination(n, color, state, player)) {
    player.whiteCombinationSelected = true;
  }
}

// TODO: DRY-up
function useCombination(n, color, state, player) {
  switch (color) {
    case 'blue':
      // it's a valid blue combination and it hasn't been selected before
      if (state.blueCombinations.indexOf(n) && !player.blueMarked.indexOf(n)) {
        player.blueMarked.push(n);

        return true;
      }
      break;
    case 'red':
      if (state.redCombinations.indexOf(n) && !player.redMarked.indexOf(n)) {
        player.redMarked.push(n);

        return true;
      }
      break;
    case 'yellow':
      if (state.yellowCombinations.indexOf(n) && !player.yellowMarked.indexOf(n)) {
        player.yellowMarked.push(n);

        return true;
      }
      break;
    case 'green':
      if (state.greenCombinations.indexOf(n) && !player.greenMarked.indexOf(n)) {
        player.greenMarked.push(n);

        return true;
      }
      break;
  }

  return false;
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
    const currentItemId = state.currentPlayerTurn.id;

    state.currentPlayerTurn = nextPlayer(state.playerOrder, currentItemId);
    state.dice.whiteOne = randomDie();
    state.dice.whiteTwo = randomDie();
    state.dice.red = randomDie();
    state.dice.yellow = randomDie();
    state.dice.blue = randomDie();
    state.dice.green = randomDie();

    state.showDice = true;
  },

  [types.MARK](state, { player, n, color }) {
    const isCurrentPlayer = state.currentPlayerTurn.id === player.id;

    if (player.turnFinished) return;

    if (!isCurrentPlayer) {
        useWhiteCombination(n, color, state, player);
    } else {
      if (player.whiteCombinationSelected) {
        useCombination(n, color, state, player);
        player.turnFinished = true;
      } else {
        if (useWhiteCombination(n, color, state, player)) {
          player.whiteCombinationSelected = true;
        }
      }
    }
  }
};
