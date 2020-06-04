<template>
    <div>
        <Meridian v-bind:meridian="AM"/>
        <Digit v-bind:timeDigit="0"/>
        <Digit v-bind:timeDigit="0"/>
        <Colon/>
        <Digit v-bind:timeDigit="0"/>
        <Digit v-bind:timeDigit="0"/>
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
            AM: true
        }
    }
}
</script>