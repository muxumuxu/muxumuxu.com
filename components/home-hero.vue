<template>
  <div class="wrapper">
    <div class="title" v-html="convertMarkdownToHTML(data.title)"></div>
    <p @click="showVideo()" class="video-cta" :style="{'background': 'url(' + data.icon.src + ') no-repeat left center'}"><span>{{data.videoCta}}</span></p>
    <image-hi-res-contentful class="illustration" :data="data.illustration" :interactive="true" :height="438" />
    <div class="border"></div>
    <div class="separator"></div>
    <video-overlay v-if="showingVideo" :url="data.videoUrl" @onClose="closeVideo" />
  </div>
</template>

<script>
import markdownMixin from '@/mixins/markdown-mixin'
import VideoOverlay from '@/components/video-overlay'

export default {
  props: ['data'],
  data () {
    return {
      showingVideo: false
    }
  },
  components: { VideoOverlay },
  mixins: [markdownMixin],
  methods: {
    showVideo () {
      this.showingVideo = true
    },
    closeVideo () {
      this.showingVideo = false
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.wrapper
  position: relative
  padding-bottom: 220px
  // box-shadow: inset 0 -1px 0 0 #EAEAEA

.border
  width: 97%
  height: 1px
  background: #EAEAEA
  position: absolute
  bottom: 0

.separator
  width: 100%
  height: 1px
  background: #EAEAEA
  display: none

.title /deep/ p
  font-size: 32px
  line-height: 44px
  font-weight: 300
  max-width: 780px

.illustration
  position: absolute
  bottom: 0
  right: 0
  z-index: 1

.video-cta
  padding: 5px 0 5px 40px
  cursor: pointer
  margin-top: 40px

  span
    font-size: 16px
    color: rgba(0,0,0,0.3)

  &:hover

    span
      color: $muxu-green

@media screen and (max-width: 800px)

  .wrapper
    padding-bottom: 50px

  .illustration
    position: relative
    width: 100%

  .border
    bottom: 53px

@media screen and (max-width: 700px)

  .wrapper
    padding-bottom: 50px

  .title /deep/ p
    font-size: 26px
    line-height: 36px

  .border
    display: none

  .separator
    display: block
    position: relative
    bottom: -50px

</style>
