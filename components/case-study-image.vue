<template>
  <div class="wrapper">
    <image-hi-res-contentful :data="data.image" :width="980" />
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">

.wrapper
  padding: 0 20px

img
  width: 100%
  height: auto
</style>
