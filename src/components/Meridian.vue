<template>
    <span>
        <img class="meridian" :src="source">
    </span>
</template>

<script>
export default {
  name: 'Meridian',
  props: {
      meridian: Boolean
  },
  data: function () {
    return {
        source: require(`@/assets/Meridian-AM.png`)
    }
  },
  methods: {
      defineMeridian: function (meridian) {
          console.log("meridian", meridian)
          let AMPM = null
          if (meridian == true) {
              AMPM = "AM"
          } else {
              AMPM = "PM"
          }
          this.source = require(`@/assets/Meridian-${AMPM}.png`)
      }
  },
  mounted: function() {
      this.defineMeridian(this.meridian)
  }
}

</script>

<style>
    .meridian {
        height: 10rem;
    }
</style>