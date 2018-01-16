<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="jobs flex-row">
      <div class="job" v-for="job in data.jobs">
        <h5>{{job.title}}</h5>
        <p>{{job.description}}</p>
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

.jobs
  margin-top: 40px

.job
  margin-right: 70px

p
  font-size: 14px
  opacity: 0.5
</style>
