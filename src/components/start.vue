<template lang="html">
  <div class="container">
    <h2>Welcome to Quixx-clone</h2>
    <label for="playerName">Player Name</label>
    <input v-model="name" type="text">
    <button :disabled="!name" @click="addPlayer()">Create Player</button>
  </div>
</template>

<script>
export default {
  data() { return { name: '' } },
  methods: {
    resetForm() {
      this.name = '';
    },
    addPlayer() {
      this.$store.dispatch('addPlayer', this.name).then(() => this.resetForm());
    },
  }
}
</script>

<style lang="css">
</style>
