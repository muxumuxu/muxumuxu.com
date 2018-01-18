<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="sections flex-row space-between">
      <div v-for="description in data.descriptions" class="section">
        <h4>{{description.title}}</h4>
        <p>{{description.description}}</p>
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

h2
  max-width: 780px
  margin-bottom: 80px

.section
  max-width: 470px

  &:first-child
    padding-right: 10px

  &:last-child
    padding-left: 10px

@media screen and (max-width: 700px)

  h2
    margin-bottom: 50px

  .sections
    flex-direction: column

  .section
    max-width: none
    width: 100%

    &:first-child
      padding: 0

    &:last-child
      padding: 0
      margin-top: 30px

</style>
