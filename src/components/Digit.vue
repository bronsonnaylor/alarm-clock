<template>
    <span>
        <img class="digit" :src="source">
    </span>
</template>

<script>
export default {
    name: 'Digit',
    data: function () {
        return {
            source: require("../assets/7seg-null.png")
        }
    },
    props: {
        timeDigit: Number
    },
    methods: {
        defineDigit: function (digit) {
            this.source = require(`../assets/7seg-${digit}.png`)
        }
    },
    mounted: function () {
        this.defineDigit(this.timeDigit)
    }
}
</script>

<style>
    .digit {
        height: 10rem;
    }
</style>