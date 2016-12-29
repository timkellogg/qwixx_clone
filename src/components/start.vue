<template lang="html">
  <div class="">
    <p>{{ gameStarted }}</p>
    <button type="button" name="button" @click="startGame()">Click me!</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      gameStarted: 'gameStarted',
    }),
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame')
    }
  }
}
</script>

<style lang="css">
</style>
