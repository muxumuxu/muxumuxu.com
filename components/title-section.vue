<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">

h2
  max-width: 700px
</style>
