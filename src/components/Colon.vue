<template>
    <span>
        <img class="colon" :src="image">
    </span>
</template>

<script>
export default {
  name: 'Colon',
  data: function() {
      return {
          image: require("@/assets/Colon-off.png"),
          toggle: true
      };
  },
  methods: {
      colonBlink: function () {
          setInterval(()=>{
              if (this.toggle) {
                this.image = require("@/assets/Colon-on.png")
                this.toggle = false
                return
              }
              this.image = require("@/assets/Colon-off.png")
              this.toggle = true
          }, 1000)
      }
  },
  mounted: function () {
      this.colonBlink()
  }
}
</script>

<style>
    @media (max-width: 510px) {
        .colon {
            height: 6rem;
        }
    }
    @media (min-width: 511px) {
        .colon {
            height: 10rem;
        }
    }
</style>