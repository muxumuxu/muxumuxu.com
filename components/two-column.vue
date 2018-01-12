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

</style>
