<template>
  <a
    :href="data.link.url"
    :style="{'background': 'black url(' + data.backgroundImage.src + ') no-repeat center center', 'background-size': 'cover'}">
    <div class="title" v-html="convertMarkdownToHTML(data.title)"></div>
  </a>
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

a
  color: $white
  font-size: 50px
  font-weight: 300
  display: block
  text-align: center

.title
  background: black
  display: block
  padding: 170px 0
  transition: 0.3s all
  line-height: 61px

  &:hover
    background: rgba(0, 0, 0, 0.75)

</style>
