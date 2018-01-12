<template>
  <div class="overlay">
    <img src="../assets/images/close.svg" alt="close" class="close" @click="closeVideo()">
    <iframe id="video" :src="url" width="480" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
  methods: {
    closeVideo () {
      this.$emit('onClose')
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.overlay
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: 100%
  background: $black
  z-index: 10
  transition: opacity .3s ease

iframe
   width: 100%
   height: 100%

.close
  position: absolute
  top: 20px
  left: 20px
  z-index: 10
  cursor: pointer
  opacity: 0.6
  transition: .3s opacity linear

  &:hover
    opacity: 1

</style>
