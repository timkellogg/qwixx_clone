<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Start from './components/start';

export default {
  components: { Start },
};
</script>

<style>
html {
  background-color: #e3e3e3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
