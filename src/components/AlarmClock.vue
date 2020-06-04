<template>
    <div>
        <div class="clock">
            <span class="section">
                <img v-on:click="meridianSwitch" class="arrow" src="../assets/Arrow-Up.png"/>
                <Meridian v-bind:meridian="true" ref="meridian"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitchUp(0)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit0"/>
                <img v-on:click="digitSwitchDown(0)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitchUp(1)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit1"/>
                <img v-on:click="digitSwitchDown(1)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <Colon/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitchUp(2)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit2"/>
                <img v-on:click="digitSwitchDown(2)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img v-on:click="digitSwitchUp(3)" class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0" ref="digit3"/>
                <img v-on:click="digitSwitchDown(3)" class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import Digit from './Digit.vue'
import Colon from './Colon.vue'
import Meridian from './Meridian.vue'

export default {
    name: 'AlarmClock',
    components: {
        Digit,
        Colon,
        Meridian
    },
    data: function() {
        return {
            AMPM: true,
            digit: [0, 0, 0, 0]
        }
    },
    methods: {
        meridianSwitch: function () {
            this.AMPM = !this.AMPM
            this.$refs.meridian.defineMeridian(this.AMPM)
        },
        digitSwitchUp: function (refNum) {
            this.digit[refNum] = (this.digit[refNum] + 1) % 10
            this.$refs[`digit${refNum}`].defineDigit(this.digit[refNum])
        },
        digitSwitchDown: function (refNum) {
            this.digit[refNum]--
            if (this.digit[refNum] < 0) {
                this.digit[refNum] = 9
            }
            this.$refs[`digit${refNum}`].defineDigit(this.digit[refNum])
        }
    }
}
</script>

<style scoped>
    .arrow {
        height: 4rem;
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
        margin-top: 100px
    }
</style>