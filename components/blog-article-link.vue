<template>
  <div class="wrapper flex-row space-between">
    <h2>{{data.title}}</h2>
    <div class="right">
      <p>{{data.description}}</p>
      <hyper-link class="underlined" :data="data.link" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

h2
  font-size: 25px
  line-height: 33px
  font-weight: 400
  width: 380px

p
  margin-bottom: 20px

.right
  width: 550px
  padding-left: 20px

@media screen and (max-width: 700px)

  h2
    width: 100%
    margin-bottom: 30px

  .wrapper
    flex-direction: column
    padding-bottom: 60px

  .right
    width: 100%
    padding: 0

</style>
