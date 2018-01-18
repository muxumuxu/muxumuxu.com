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

@media screen and (max-width: 850px)

  .logo:last-child
    display: none

@media screen and (max-width: 730px)

  .logo:nth-last-child(-n+2)
    display: none

@media screen and (max-width: 600px)

  .logo:nth-last-child(-n+3)
    display: none

@media screen and (max-width: 500px)

  .logo:nth-last-child(-n+4)
    display: none

@media screen and (max-width: 400px)

  .logo:nth-last-child(-n+5)
    display: none
    
</style>
