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

<style lang="sass">
@import '../assets/css/variables.sass'

.content /deep/ blockquote p
  opacity: 0.5
  font-style: italic
  opacity: 0.5
  font-size: 14px

</style>
