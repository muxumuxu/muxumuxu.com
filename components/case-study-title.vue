<template>
  <div class="wrapper">
    <h1>{{data.title}}</h1>
    <div class="information flex-row space-between">
      <div class="details" v-for="information in data.information">
        <h4>{{information.title}}</h4>
        <p>{{information.description}}</p>
      </div>
      <div class="link">
        <h4>{{data.link.title}}</h4>
        <hyper-link class="underlined" :data="data.link.link" :key="link" />
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
@import '../assets/css/variables.sass'

h1
  margin-bottom: 50px

a
  line-height: 28px

.underlined
  padding-bottom: 5px

.link
  min-width: 200px

@media screen and (max-width: 980px)

  h1
    margin-bottom: 0

  .information
    flex-direction: column

  .details, .link
    margin-top: 30px

</style>
