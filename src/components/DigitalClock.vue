<template>
    <div>
        <Meridian/>
        <Digit v-bind:timeDigit="hour1"/>
        <Digit v-bind:timeDigit="hour2"/>
        <Colon/>
        <Digit v-bind:timeDigit="minute1"/>
        <Digit v-bind:timeDigit="minute2"/>
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
  },
  data: function() {
    return {
      hour1: null,
      hour2: null,
      minute1: null,
      minute2: null,
      AM: true
    }
  },
  methods: {
    timeSplit: function () {
      let dateTime = new Date()
      let dateTimeString = dateTime.toString()
      let dateTimeArray = dateTimeString.split(" ")
      let currentTimeSplit = dateTimeArray[4].split(":")
      let hour = currentTimeSplit[0]
      let standardHour = hour % 12
      if (hour > standardHour) {
        this.AM = false
      }
      let minute = currentTimeSplit[1]
      if (standardHour < 10) {
        this.hour1 = 0
        this.hour2 = standardHour
      } else {
        this.hour1 = 1
        this.hour2 = standardHour - 10
      }
      this.minute1 = Math.floor(minute / 10)
      this.minute2 = minute % 10
    }
  },
  created: function () {
    this.timeSplit()
  }
}
</script>

<style>
</style>