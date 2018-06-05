<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="members">
      <div v-for="member in data.images" class="member">
        <div class="picture-container">
          <image-hi-res-contentful class="emoji" :data="member.emoji" :width="220" />
          <div class="gif" :style="{'background': 'url(' + member.gifUrl + ') no-repeat center center', 'background-size': 'cover'}"></div>
          <image-hi-res-contentful class="picture" :data="member.picture" :width="220" />
        </div>
        <h5>{{member.title}}</h5>
        <h4>{{member.subtitle}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">

h2
  margin-bottom: 30px

h4
  margin-top: 10px

h5
  margin-top: 15px

.members
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(222px, 1fr))
  grid-gap: 30px

.picture-container
  width: 100%
  height: auto
  border-radius: 4px
  position: relative
  overflow: hidden

  &:hover
    .emoji, .gif
      opacity: 1

.picture
  width: 100%
  display: block
  border-radius: 4px

.emoji
  width: 100%
  border-radius: 4px
  opacity: 0
  z-index: 11
  position: absolute
  transition: .3s opacity linear
  background-image: linear-gradient(-180deg, rgba(98,232,98,0.8) 0%, rgba(50,204,50,0.7) 100%)

.gif
  width: 100%
  height: auto
  border-radius: 4px
  opacity: 0
  position: absolute
  z-index: 10
  transition: .3s opacity linear

</style>
