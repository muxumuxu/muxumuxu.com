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
  font-weight: 300
  display: block
  text-align: center

.title
  background: black
  display: block
  padding: 170px 0
  transition: 0.3s all

  /deep/ p
    font-size: 50px
    line-height: 61px

  &:hover
    background: rgba(0, 0, 0, 0.75)

@media screen and (max-width: 600px)

  .title
    padding: 120px 20px

    /deep/ p
      font-size: 24px
      line-height: 30px

</style>
