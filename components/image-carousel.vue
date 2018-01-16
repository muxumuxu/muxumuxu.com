<template>
  <div data-fluffy-container data-fluffy-options='{"showScrollbars": false}'>
    <div data-fluffy-content>
      <image-hi-res-contentful
        class="slider-image"
        :data="data.image" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['data'],
  mounted () {
    setTimeout(Fluffy.detect, 1000)
  }
}
</script>

<style scoped lang="sass">

div[data-fluffy-container]
  height: 510px
  width: auto

@media screen and (max-width: 1050px)

  div[data-fluffy-container]
    height: 400px

@media screen and (max-width: 800px)

  div[data-fluffy-container]
    height: 300px

</style>
