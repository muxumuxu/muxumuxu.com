<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="partners flex-row">
      <div class="partner" v-for="partner in data.partners" :key="partner.title">
        <image-hi-res-contentful :data="partner.logo" class="logo" :height="50" />
        <h4>{{partner.title}}</h4>
        <p>{{partner.subtitle}}</p>
      </div>
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

.partners
  justify-content: flex-start
  margin-top: 50px
  flex-wrap: wrap

.partner
  width: 300px
  margin: 0 26px 50px 0

  &:nth-last-child(-n+3)
    margin-bottom: 0

.logo
  margin-bottom: 10px
  height: 50px

@media screen and (max-width: 1020px)

  .partners
    justify-content: space-between

  .partner
    width: 400px

@media screen and (max-width: 900px)

  .partner
    width: 350px

@media screen and (max-width: 800px)

  .partners
    margin-bottom: 0

  .partner
    width: 100%

    &:nth-last-child(-n+3):not(:last-child)
      margin-bottom: 50px

</style>
