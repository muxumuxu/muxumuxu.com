<template>
  <div class="wrapper">
    <div class="logos flex-row space-between">
      <image-hi-res-contentful v-for="logo in data.logos" :key="logo.src" :data="logo" class="logo" :height="40" />
    </div>
    <div class="content" v-html="convertMarkdownToHTML(data.description)"></div>
    <router-link class="underlined" :to="data.link.url">{{data.link.title}}</router-link>
  </div>
</template>

<script>
import markdownMixin from '@/mixins/markdown-mixin'

export default {
  props: ['data'],
  mixins: [markdownMixin]
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.logos
  margin-bottom: 30px

.logo
  height: 40px

.content
  columns: 2
  column-gap: 70px
  margin-bottom: 50px

@media screen and (max-width: 850px)

  .logo:last-child
    display: none

@media screen and (max-width: 730px)

  .logo:nth-last-child(-n+2)
    display: none

  .content
    columns: 1

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
