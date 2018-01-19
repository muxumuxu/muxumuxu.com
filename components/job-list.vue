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
  flex-wrap: wrap

.job
  margin-right: 70px

p
  font-size: 14px
  opacity: 0.5

@media screen and (max-width: 700px)

  .jobs
    flex-direction: column

  .job
    margin: 30px 0 0

    &:first-child
      margin: 0
</style>
