<template>
  <div class="wrapper flex-row">
    <router-link to="/" style="width: 123px; height: 22px">
      <image-hi-res-contentful :data="data.logo" />
    </router-link>

    <span @click="toggleMenu" class="menu-button" v-if="hasLinks">{{data.menu}}</span>

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
  position: relative

.menu-button
  color: $normal-grey
  font-size: 18px
  float: right
  cursor: pointer
  margin-top: 4px

#menu-list
  position: absolute
  width: 100%
  top: 120px
  left: 0
  background: $white
  border-top: 1px solid #EAEAEA
  border-bottom: 1px solid #EAEAEA
  z-index: 9999

  a
    display: block
    font-size: 21px
    color: $black
    padding: 30px 0
    margin: 0 30px

    &:not(:last-child)
      border-bottom: 1px solid #EAEAEA

</style>
