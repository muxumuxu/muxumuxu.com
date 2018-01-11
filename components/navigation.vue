<template>
  <div class="wrapper flex-row space-between">
    <image-hi-res-contentful :data="data.logo" />
    <div>
      <router-link v-for="link in data.links" :key="link.url" :to="link.url">
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

a
  color: $grey
  margin-left: 25px
</style>
