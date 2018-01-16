<template>
  <div class="logos wrapper flex-row space-between">
    <image-hi-res-contentful v-for="logo in data.logos" :key="logo.src" :data="logo" class="logo" :height="40" />
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.logo
  height: 40px
</style>
