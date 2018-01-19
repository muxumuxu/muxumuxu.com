<template>
  <div class="wrapper flex-row space-between align-center">
    <router-link to="/" style="width: 123px; height: 22px">
      <image-hi-res-contentful :data="data.logo" />
    </router-link>

    <button @click="toggleMenu" class="menu-button" v-if="hasLinks">{{data.menu}}</button>

    <div id="menu-list" class="invisible" v-if="hasLinks">
      <router-link class="link" v-for="link in data.links" :key="link.url" :to="link.url">
        {{link.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    hasLinks () {
      return this.data.links.length > 0
    }
  },
  methods: {
    toggleMenu () {
      console.log('coucou')
      const list = document.getElementById('menu-list')
      list.classList.toggle('invisible')
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.wrapper
  padding: 50px 20px

.menu-button
  color: $normal-grey
  font-size: 18px
  float: right
  cursor: pointer

.menu-list
  display: block

</style>
