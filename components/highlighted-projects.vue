<template>
  <div class="wrapper">
    <div class="projects flex-row space-between">
      <div class="project" v-for="project in data.projects" :key="project.title" @click="showProject(project)">
        <image-hi-res-contentful :data="project.image" :height="424" />
        <h5>{{project.title}}</h5>
        <h4>{{project.subtitle}}</h4>
      </div>
    </div>
    <hyper-link class="underlined" :data="data.link" />
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    showProject (project) {
      window.open(project.link.url, '_self')
    }
  }
}
</script>

<style scoped lang="sass">

img
  height: 424px
  width: auto
  border-radius: 4px

h5
  margin: 15px 0 10px

.projects
  margin-bottom: 60px

.project
  cursor: pointer

@media screen and (max-width: 1000px)

  img
    width: 100%
    height: auto

  .project
    width: 30%

@media screen and (max-width: 600px)

  .projects
    flex-direction: column
    margin: 0

  .project
    width: 70%
    margin: 0 auto 40px

</style>
