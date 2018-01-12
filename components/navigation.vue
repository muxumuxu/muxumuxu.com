<template>
  <div class="wrapper flex-row space-between align-center">
    <router-link to="/" style="width: 123px; height: 22px">
      <image-hi-res-contentful :data="data.logo" />
    </router-link>
    <div>
      <router-link class="link" v-for="link in data.links" :key="link.url" :to="link.url">
        {{link.title}}
      </router-link>
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
  padding: 70px 20px

.link
  color: $normal-grey
  margin-left: 25px
  font-size: 16px

  &:hover
    opacity: 0.7

</style>
