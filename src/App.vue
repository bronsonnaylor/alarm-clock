<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <Meridian/><Digit/><Digit/><Colon/><Digit/><Digit/>
    </div>
  </div>
</template>

<script>
import Digit from './components/Digit.vue'
import Colon from './components/Colon.vue'
import Meridian from './components/Meridian.vue'

export default {
  name: 'App',
  components: {
    Digit,
    Colon,
    Meridian
  }
}
</script>

<style>
body {
  background-color: #303030;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
