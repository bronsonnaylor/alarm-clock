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
    @media (max-width: 510px) {
        .digit {
            height: 6rem;
        }
    }
    @media (min-width: 511px) {
        .digit {
            height: 10rem;
        }
    }
</style>