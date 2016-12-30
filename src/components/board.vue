<template lang="html">
  <div class="game-board">
    <dice></dice>
    <div class="player-card__container" v-for="player in players">
      <card v-bind:player="player"></card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './card';
import Dice from './dice';

export default {
  components: { Card, Dice },
  computed: {
    ...mapGetters({ players: 'players' }),
  },
}
</script>

<style lang="css">
</style>
