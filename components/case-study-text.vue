<template>
  <div class="wrapper">
    <div class="content" v-html="convertMarkdownToHTML(data.description)"></div>
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

.content
  max-width: 640px

  /deep/ a
    border-bottom: 1px solid #ededed

    &:hover
      border-bottom: 1px solid $muxu-green
</style>
