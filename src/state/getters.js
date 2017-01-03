export const gameStarted = state => state.gameStarted;
export const players = state => state.players;
export const currentPlayerTurn = state => state.currentPlayerTurn;

/* dice */
export const whiteOneDie = state => state.dice.whiteOne;
export const whiteTwoDie = state => state.dice.whiteTwo;
export const yellowDie = state => state.dice.yellow;
export const redDie = state => state.dice.red;
export const blueDie = state => state.dice.blue;
export const greenDie = state => state.dice.green;
export const showDice = state => state.showDice;

/* combinations */
export const whiteCombination = state => state.dice.whiteOne + state.dice.whiteTwo;
export const blueCombinations = state =>
  [state.dice.whiteOne + state.dice.blue, state.dice.whiteTwo + state.dice.blue];
export const redCombinations = state =>
  [state.dice.whiteOne + state.dice.red, state.dice.whiteTwo + state.dice.red];
export const yellowCombinations = state =>
  [state.dice.whiteOne + state.dice.yellow, state.dice.whiteTwo + state.dice.yellow];
export const greenCombinations = state =>
  [state.dice.whiteOne + state.dice.green, state.dice.whiteTwo + state.dice.green];
