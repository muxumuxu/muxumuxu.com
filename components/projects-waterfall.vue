<template>
  <div class="wrapper projects">
    <h2>{{data.title}}</h2>
    <div class="project" v-for="project in data.projects" :key="project.title" @click="showProject(project)">
      <image-hi-res-contentful :data="project.image" :height="424" />
      <h5>{{project.title}}</h5>
      <h4>{{project.subtitle}}</h4>
    </div>
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

h2
  min-height: 200px

h5
  margin: 15px 0 10px

.projects
  column-count: 2
  column-gap: 40px

.project
  max-width: 470px
  cursor: pointer
  margin-top: 50px
</style>
