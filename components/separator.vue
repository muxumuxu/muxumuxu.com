<template>
  <div :style="{ 'background-color': data.backgroundColor }">
    <div class="wrapper" :style="{ 'background-color': data.backgroundColor }">
      <div class="separator" :style="{ 'color': data.strokeColor }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.wrapper
  padding: 0 30px

.separator
  width: 100%
  height: 1px

</style>
