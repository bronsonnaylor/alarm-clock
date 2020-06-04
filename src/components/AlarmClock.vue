<template>
    <div>
        <div class="clock">
            <span class="section">
                <img class="arrow" src="../assets/Arrow-Up.png"/>
                <Meridian v-bind:meridian="AM"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <Colon/>
            </span>
            <span class="section">
                <img class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
            </span>
            <span class="section">
                <img class="arrow" src="../assets/Arrow-Up.png"/>
                <Digit v-bind:timeDigit="0"/>
                <img class="arrow" src="../assets/Arrow-Down.png"/>
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
            AM: true
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