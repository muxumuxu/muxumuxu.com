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
        <p v-for="item in data.list.items" :key="`p-${item}`">{{item}}</p>
        <hyper-link v-for="link in data.list.links" :data="link" :key="`link-${link.url}`" />
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
  max-width: 820px
  margin-bottom: 80px

a
  display: block
  font-size: 18px
  line-height: 28px

  &:hover
    opacity: 0.7

.description
  width: 470px
  padding-right: 10px

  /deep/ .underlined
    padding-bottom: 5px

.list
  padding-left: 10px

@media screen and (max-width: 820px)

  .sections
    flex-direction: column

  .description
    padding: 0
    width: 100%

  .list
    padding: 0
    margin-top: 70px

</style>
