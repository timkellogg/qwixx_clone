<template lang="html">
  <div class="primary-container">
    <h2>Welcome to Quixx-clone</h2>
    <label for="playerName">Player Name</label>
    <input v-model="name" type="text">
    <button :disabled="!name" @click="addPlayer()">Create Player</button>

    <div v-if="players.length" class="secondary-container">
      <h2>Current Players</h2>
      <ol class="player-list">
        <li class="player-list__item" v-for="player in players">
          {{ player.name }}
          <button @click="removePlayer(player)">remove</button>
        </li>
      </ol>
      <button v-if="players.length > 1" @click="startGame()">Start Game</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() { return { name: '' } },
  computed: {
    ...mapGetters({ players: 'players' }),
  },
  methods: {
    resetForm() {
      this.name = '';
    },
    addPlayer() {
      this.$store.dispatch('addPlayer', this.name).then(() => this.resetForm());
    },
    removePlayer(player) {
      this.$store.dispatch('removePlayer', player);
    },
    startGame() {
      this.$store.dispatch('startGame').then(() => this.$router.replace('/board'));
    }
  },
}
</script>

<style lang="css">
  .player-list {
    max-width: 300px;
    display: block;
    text-align: center;
    margin: auto;
    padding-left: 0;
  }
  .player-list__item {
    /*list-style-type: none;*/
  }
</style>
