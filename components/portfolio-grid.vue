<template>
  <div class="wrapper">
    <h2>{{data.title}}</h2>
    <div class="projects">
      <div class="line flex-row space-between">
        <div class="project" v-for="project in data.projects2" :key="project.title">
          <image-hi-res-contentful :data="project.image" :height="220" />
          <h5>{{project.title}}</h5>
          <h4>{{project.subtitle}}</h4>
        </div>
      </div>
      <div class="line flex-row space-between">
        <div class="project" v-for="project in data.projects3" :key="project.title">
          <image-hi-res-contentful :data="project.image" :height="220" />
          <h5>{{project.title}}</h5>
          <h4>{{project.subtitle}}</h4>
        </div>
      </div>
      <div class="line flex-row space-between">
        <div class="project" v-if="data.projects4" v-for="project in data.projects4" :key="project.title">
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
  props: ['data']
}
</script>

<style scoped lang="sass">

img
  height: 220px
  width: auto
  border-radius: 4px

h5
  margin: 15px 0 10px

.line
  margin-top: 40px

</style>
