<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="projects">
      <div class="line flex-row">
        <div class="project" v-for="project in data.projects1" :key="project.title" @click="showProject(project)">
          <image-hi-res-contentful :data="project.image" :height="220" />
          <h5>{{project.title}}</h5>
          <h4>{{project.subtitle}}</h4>
        </div>
      </div>
      <div class="line flex-row" v-if="data.projects2">
        <div class="project" v-for="project in data.projects2" :key="project.title" @click="showProject(project)">
          <image-hi-res-contentful :data="project.image" :height="220" />
          <h5>{{project.title}}</h5>
          <h4>{{project.subtitle}}</h4>
        </div>
      </div>
      <div class="line flex-row" v-if="data.projects3">
        <div class="project" v-for="project in data.projects3" :key="project.title" @click="showProject(project)">
          <image-hi-res-contentful :data="project.image" :height="220" />
          <h5>{{project.title}}</h5>
          <h4>{{project.subtitle}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    showProject (project) {
      window.open(project.link.url)
    }
  }
}
</script>

<style scoped lang="sass">

h2
  margin-bottom: 30px

img
  height: 220px
  width: auto
  border-radius: 4px

h5
  margin: 15px 0 10px

.line
  flex-wrap: wrap

  &:not(:last-child)
    margin-bottom: 40px

.project
  cursor: pointer

  &:not(:last-child)
    margin-right: 35px

</style>
