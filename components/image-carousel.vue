<template>
  <div data-fluffy-container data-fluffy-options='{"showScrollbars": false}'>
    <div data-fluffy-content>
      <image-hi-res-contentful :data="data.image" :height="510" />
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

img
  height: 510px
  width: auto

@media screen and (max-width: 1050px)

  div[data-fluffy-container]
    height: 400px

    img
      height: 400px
      width: auto

@media screen and (max-width: 800px)

  div[data-fluffy-container]
    height: 300px

    img
      height: 300px
      width: auto

</style>
