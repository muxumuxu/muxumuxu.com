<template>
  <div class="wrapper">
    <h2 v-if="data.title">{{data.title}}</h2>
    <div class="sections flex-row space-between">
      <div class="description">
        <h4>{{data.description.title}}</h4>
        <div class="content" v-html="convertMarkdownToHTML(data.description.description)"></div>
      </div>
      <image-hi-res-contentful :data="data.image" :width="470" />
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
  max-width: 530px
  margin-bottom: 80px

.sections
  align-items: flex-start

.content
  width: 470px

img
  width: 470px
  height: auto

@media screen and (max-width: 980px)

  .sections
    flex-direction: column

  .content
    width: 100%

  img
    order: -1
    margin-bottom: 50px

@media screen and (max-width: 600px)

  h2
    margin-bottom: 30px

  img
    width: 100%
    height: auto

</style>
