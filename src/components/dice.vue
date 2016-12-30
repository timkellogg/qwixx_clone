<template lang="html">
  <div class="dice-container">
    <button @click="rollDice()" class="btn__roll">Roll</button>

    <span class="die die__white">{{ whiteOneDie }}</span>
    <span class="die die__white">{{ whiteTwoDie }}</span>
    <span class="die die__red">{{ redDie }}</span>
    <span class="die die__blue">{{ blueDie }}</span>
    <span class="die die__green">{{ greenDie }}</span>
    <span class="die die__yellow">{{ yellowDie }}</span>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      whiteOneDie: 'whiteOneDie',
      whiteTwoDie: 'whiteTwoDie',
      yellowDie: 'yellowDie',
      redDie: 'redDie',
      blueDie: 'blueDie',
      greenDie: 'greenDie',
    }),
  },
  methods: {
    rollDice() {
      this.$store.dispatch('rollDice');
    }
  }
}
</script>

<style scoped lang="css">
  .dice-container {
    margin-bottom: 10px;
  }
  .die {
    width: 50px;
    height: 50px;
    color: white;
    display: inline-block;
    color: white;
    line-height: 50px;
  }
  .die__white {
    background-color: black;
  }
  .die__red {
    background-color: rgb(255, 0, 0);
  }
  .die__blue {
    background-color: rgb(50, 50, 200);
  }
  .die__green {
    background-color: rgb(0, 100, 50);
  }
  .die__yellow {
    background-color: rgb(255, 255, 0);
  }
  .btn__roll {
    margin: auto;
    margin-bottom: 10px;
    display: block;
  }
</style>
