<!-- individual player score card -->
<template lang="html">
  <div class="player-card">
    <label>{{player.name}}'s Scoresheet</label>
    <label>{{whiteCombination}}</label>
    <ul v-for="color in colors" class="player-card__row">
      <li
        v-if="color === 'green' || color === 'blue'"
        v-for="n in numbersReversed"
        :class="color"
        class="player-card__cell"
      >
        <span @click="mark()" class="player-card__cell--inner">{{ n }}</span>
      </li>
      <li
        v-if="color === 'red' || color === 'yellow'"
        v-for="n in numbers"
        :class="color"
        class="player-card__cell"
      >
        <span class="player-card__cell--inner">{{ n }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['player'],
  computed: {
    ...mapGetters({
      whiteCombination: 'whiteCombination',
      blueCombinations: 'blueCombinations',
      redCombinations: 'redCombinations',
      yellowCombinations: 'yellowCombinations',
      greenCombinations: 'greenCombinations',
    }),
  },
  data() {
    return {
      colors: ['red', 'yellow', 'green', 'blue'],
      numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      numbersReversed: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    }
  },
  methods: {
    mark(player, value, ) {

    }
  }
}
</script>

<style lang="css" scoped>
  .player-card {
    margin-bottom: 20px;
  }

  .player-card__row {
    padding: 0;
    margin: 0;
    margin-bottom: 3px;
    list-style: none;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-flex-flow: row wrap;
    justify-content: center;
  }

  .player-card__cell {
    padding: 10px;
    width: 30px;
    color: white;
    font-weight: bold;
    line-height: 24px;
  }

  .player-card__cell--inner {
    line-height: 24px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }

  .player-card__cell {
    background-color: blue;
    width: 30px;
    height: 20px;
    color: white;
    font-weight: bold;
  }

  .red {
    background-color: rgb(255, 170, 170);
    border: 6px solid red;
    color: red;
  }
  .yellow {
    background-color: rgb(255, 255, 0);
    border: 6px solid rgb(220, 220, 0);
    color: rgb(220, 220, 0);
  }
  .green {
    background-color: rgb(0, 100, 50);
    border: 6px solid rgb(0, 50, 0);
    color: rgb(0, 50, 0);
  }
  .blue {
    background-color: rgb(50, 50, 200);
    border: 6px solid rgb(0, 0, 100);
    color: rgb(0, 0, 100);
  }
</style>
