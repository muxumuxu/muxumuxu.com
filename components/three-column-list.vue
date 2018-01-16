<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="sections flex-row">
      <div class="section" v-for="(list, index) in data.lists" :key="`three-column-div-${data.title}-${index}`">
        <h4 v-if="list.title">{{list.title}}</h4>
        <p v-for="item in list.items"  :key="`three-column-p-${item}-${index}`">{{item}}</p>
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

.section
  width: 32%
  padding-right: 20px

  p
    margin-bottom: 4px
</style>
