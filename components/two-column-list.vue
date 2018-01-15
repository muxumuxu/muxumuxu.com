<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="sections flex-row space-between">
      <div class="description">
        <h4>{{data.description.title}}</h4>
        <div class="content" v-html="convertMarkdownToHTML(data.description.description)"></div>
      </div>
      <div class="list">
        <h4>{{data.list.title}}</h4>
        <p v-for="item in data.list.items">{{item}}</p>
      </div>
    </div>
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

h2
  max-width: 780px
  margin-bottom: 80px

.description
  width: 470px
</style>
