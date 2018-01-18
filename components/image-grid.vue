<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="members">
      <div v-for="member in data.images" class="member">
        <div class="picture-container">
          <image-hi-res-contentful class="emoji" :data="member.emoji" />
          <div class="gif" :style="{'background': 'url(' + member.gifUrl + ') no-repeat center center', 'background-size': 'cover'}"></div>
          <image-hi-res-contentful class="picture" :data="member.picture" />
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
  display: inline-flex
  flex-wrap: wrap

.member
  max-width: 220px
  margin: 0 33px 40px 0

  &:nth-child(4n)
    margin-right: 0

  &:nth-last-child(-n+4)
    margin-bottom: 0

.picture-container
  width: 220px
  height: 220px
  border-radius: 4px
  position: relative
  overflow: hidden

  &:hover
    .emoji, .gif
      opacity: 1

.picture
  width: 100%
  height: 100%
  border-radius: 4px

.emoji
  width: 100%
  height: 100%
  opacity: 0
  z-index: 11
  position: absolute
  transition: .3s opacity linear
  background-image: linear-gradient(-180deg, rgba(98,232,98,0.8) 0%, rgba(50,204,50,0.7) 100%)

.gif
  width: 100%
  height: 100%
  opacity: 0
  position: absolute
  z-index: 10
  transition: .3s opacity linear

@media screen and (max-width: 1020px)

  .members
    justify-content: space-between

  .member
    max-width: 250px

    &:nth-child(4n)
      margin-right: 33px

    &:nth-last-child(-n+4)
      margin-bottom: 40px

    &:last-child
      margin-bottom: 0

  .picture-container
    width: 250px
    height: 250px

@media screen and (max-width: 890px)

  .picture-container
    width: 200px
    height: 200px

  .member
    max-width: 200px
    margin: 0 0 40px

    &:nth-last-child(-n+4)
      margin: 0 0 40px

    &:nth-child(4n)
      margin: 0 0 40px

@media screen and (max-width: 710px)

  .picture-container
    width: 250px
    height: 250px

  .member
    max-width: 250px

@media screen and (max-width: 550px)

  .picture-container
    width: 100%
    height: auto

  .member
    max-width: none
    width: 100%


</style>
