<template>
  <div class="wrapper">
    <div class="title" v-html="convertMarkdownToHTML(data.title)"></div>
    <image-hi-res-contentful class="illustration" :data="data.illustration" />
    <p class="video-cta" :style="{'background': 'url(' + data.icon.src + ') no-repeat left center'}"><span>{{data.videoCta}}</span></p>
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

.wrapper
  position: relative
  padding-bottom: 220px
  box-shadow: inset 0 -1px 0 0 #EAEAEA

.title /deep/ p
  font-size: 32px
  line-height: 44px
  font-weight: 300
  max-width: 780px

.illustration
  position: absolute
  bottom: 0
  right: 0

.video-cta
  padding: 5px 0 5px 40px
  cursor: pointer
  margin-top: 40px
  span
    font-size: 16px
    color: rgba(0,0,0,0.3)

    &:hover
      color: $muxu-green

</style>
