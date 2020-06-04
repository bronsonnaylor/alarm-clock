<template>
  <div id="app">
    <img alt="MVP-logo" src="./assets/MVP-logo.png">
    <div>
      <DigitalClock/>
      <AlarmClock/>
    </div>
  </div>
</template>

<script>
import DigitalClock from './components/DigitalClock.vue'
import AlarmClock from './components/AlarmClock.vue'

export default {
  name: 'App',
  components: {
    DigitalClock,
    AlarmClock
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
