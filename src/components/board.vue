<template lang="html">
  <ol class="player-list">
    <div class="player-board" v-for="player in players">
      {{ player.name }}
    </div>
  </ol>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ players: 'players' }),
  },
}
</script>

<style lang="css">
</style>
