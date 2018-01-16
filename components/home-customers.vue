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

</style>
