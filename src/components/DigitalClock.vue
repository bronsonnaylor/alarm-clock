<template>
    <div>
        <Meridian/><Digit/><Digit/><Colon/><Digit/><Digit/>
    </div>
</template>

<script>
import Digit from './Digit.vue'
import Colon from './Colon.vue'
import Meridian from './Meridian.vue'

export default {
  name: 'DigitalClock',
  components: {
    Digit,
    Colon,
    Meridian
  }
}
</script>

<style>
</style>