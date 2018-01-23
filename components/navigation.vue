<template>
  <div class="container">

    <navigation-responsive class="mobile-only" :data="data"/>

    <div class="wrapper flex-row space-between align-center desktop-only">
      <router-link to="/" style="width: 123px; height: 22px">
        <image-hi-res-contentful :data="data.logo" />
      </router-link>
      <div>
        <router-link class="link" v-for="link in data.links" :key="link.url" :to="link.url">
          {{link.title}}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import NavigationResponsive from '@/components/navigation-responsive'

export default {
  props: ['data'],
  components: { NavigationResponsive }
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.mobile-only
  display: none

.wrapper
  padding: 70px 20px

.link
  color: $normal-grey
  margin-left: 25px
  font-size: 16px

  &.nuxt-link-active
    color: $muxu-green

  &:hover
    opacity: 0.7

@media screen and (max-width: 700px)

  .desktop-only
    display: none

  .mobile-only
    display: block

</style>
