<template>
    <div>
        <img class="digit" src="../assets/7seg-null.png">

    </div>
</template>

<script>
export default {
  name: 'Digit',
  props: {
    msg: String
  }
}
</script>

<style>
    .digit {
        height: 10rem;
    }
</style>