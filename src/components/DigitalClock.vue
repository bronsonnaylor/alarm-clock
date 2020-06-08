<template>
    <div>
        <Meridian v-bind:meridian="AM"/>
        <Digit v-bind:timeDigit="hour1" ref="hour1"/>
        <Digit v-bind:timeDigit="hour2" ref="hour2"/>
        <Colon/>
        <Digit v-bind:timeDigit="minute1" ref="minute1"/>
        <Digit v-bind:timeDigit="minute2" ref="minute2"/>
    </div>
</template>

<script>
import Digit from './Digit.vue'
import Colon from './Colon.vue'
import Meridian from './Meridian.vue'
import moment from 'moment'

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
      let dateTime = moment(Date.now())

      if (dateTime.format('a') == 'pm') {
        this.AM = false
      }

      let hour = parseInt(dateTime.format('hh'))
      if (hour < 10) {
        this.hour1 = 0
        this.hour2 = hour
      } else {
        this.hour1 = 1
        this.hour2 = hour - 10
      }

      let minute = dateTime.format('mm')
      this.minute1 = Math.floor(minute / 10)
      this.minute2 = minute % 10
    },
    updateTime: function () {
      setInterval(()=>{
        this.timeSplit()
        this.$refs.hour1.defineDigit(this.hour1)
        this.$refs.hour2.defineDigit(this.hour2)
        this.$refs.minute1.defineDigit(this.minute1)
        this.$refs.minute2.defineDigit(this.minute2)
      }, 1000)
    },
    getTime: function () {
      return `${this.AM}${this.hour1}${this.hour2}${this.minute1}${this.minute2}`
    }
  },
  created: function () {
    this.timeSplit()
    this.updateTime()
  }
}
</script>

<style>
</style>