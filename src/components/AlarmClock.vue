<template>
    <div>
        <div class="clock">
            <span class="section">
                <img v-on:click="meridianSwitch" class="arrow" src="../assets/Arrow-Up.png"/>
                <Meridian v-bind:meridian="true" ref="meridian"/>
                <img v-on:click="meridianSwitch" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitch(0, 1)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit0"/>
                <img v-on:click="digitSwitch(0, -1)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitch(1, 1)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit1"/>
                <img v-on:click="digitSwitch(1, -1)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <Colon/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitch(2, 1)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit2"/>
                <img v-on:click="digitSwitch(2, -1)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitch(3, 1)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit3"/>
                <img v-on:click="digitSwitch(3, -1)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
        </div>
        <div class="buttons">
            <Stop v-bind:buttonName="'Stop'" v-on:stop='stopAlarm'/>
            <Stop v-bind:buttonName="'Snooze'" v-on:stop='snoozeAlarm'/>
        </div>
    </div>
</template>

<script>
import Digit from './Digit.vue'
import Colon from './Colon.vue'
import Meridian from './Meridian.vue'
import Stop from './Stop.vue'

export default {
    name: 'AlarmClock',
    components: {
        Digit,
        Colon,
        Meridian,
        Stop
    },
    data: function() {
        return {
            AMPM: true,
            digit: [0, 0, 0, 0],
            limit: [2, 3, 6, 10],
            alarmAudio: new Audio(require('../assets/AlienAlarm.mp3')),
            timeout: null
        }
    },
    methods: {
        meridianSwitch: function () {
            this.AMPM = !this.AMPM
            this.$refs.meridian.defineMeridian(this.AMPM)
            this.$emit('time-changed')
        },
        digitSwitch: function (refNum, direction) {
            this.digit[refNum] += direction
            if (this.digit[refNum] < 0) {
                this.digit[refNum] = this.limit[refNum] - 1
            }
            this.digit[refNum] = this.digit[refNum] % this.limit[refNum]
            this.$refs[`digit${refNum}`].defineDigit(this.digit[refNum])
            this.$emit('time-changed')
        },
        getTime: function () {
            return `${this.AMPM}${this.digit[0]}${this.digit[1]}${this.digit[2]}${this.digit[3]}`
        },
        startAlarm: function () {
            this.alarmAudio.play()
            this.alarmAudio.loop = true
            if (this.timeout) {
                clearTimeout(this.timeout)
                this.timeout = null
            }
            this.timeout = setTimeout(this.stopAlarm, 600000)
        },
        stopAlarm: function () {
            this.alarmAudio.pause()
            this.alarmAudio.currentTime = 0
            clearTimeout(this.timeout)
        },
        snoozeAlarm: function () {
            this.stopAlarm()
            setTimeout(this.startAlarm, 600000)
        }
    }
}
</script>

<style scoped>
    @media (max-width: 510px) {
        .arrow {
            height: 3rem;
        }
    }
    @media (min-width: 511px) {
        .arrow {
            height: 5rem;
        }
    }
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .digit {
        display: flex;
        flex-direction: column;
    }
    .clock {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>