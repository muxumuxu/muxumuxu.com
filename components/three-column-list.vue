<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="sections flex-row">
      <div class="section" v-for="list in data.lists" :key="list.title">
        <h4 v-if="list.title">{{list.title}}</h4>
        <p v-for="item in list.items">{{item}}</p>
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
  margin-bottom: 10px

.section
  width: 30%
  padding-right: 20px

  p
    margin-bottom: 4px
</style>
