<template>
  <div class="wrapper projects" :class="{'fixed-height': data.projects.length === 2}">
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
  display: block
  padding-top: 35px
  max-width: 470px

h5
  margin: 15px 0 10px

img
  width: 424px
  height: 424px

.projects
  overflow: hidden

.project
  max-width: 470px
  cursor: pointer
  margin-bottom: 80px
  display: block
  float: left
  &:nth-child(odd)
    position: relative
    top: -200px
    float: right

.fixed-height
  height: 790px

@media screen and (max-width: 920px)

  h2
    padding: 0
    min-height: inherit
    max-width: none

  .wrapper
    flex-direction: column
    text-align: center
    padding: 50px 20px 100px

  .projects
    column-count: 1

  .project
    display: block
    margin: 50px auto 0
    float: none
    &:nth-child(odd)
      position: relative
      top: 0
      float: none

  .fixed-height
    height: inherit

@media screen and (max-width: 600px)

  .wrapper
    text-align: left
    padding: 50px 20px

  .project
    max-width: none
    width: 100%
    text-align: left

  img
    width: 100%
    height: auto
</style>
