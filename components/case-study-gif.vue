<template>
  <div class="wrapper">
    <image-hi-res-contentful :data="data.image" />
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">

.wrapper
  text-align: center
  padding: 0 20px

img
  width: 400px
  height: auto
</style>
