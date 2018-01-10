<template>
  <div>
    <component v-for="section in sections" :key="section.id" :is="getComponentName(section)" :data="section" />
  </div>
</template>

<script>
import { default as componentsMapping } from '@/api/components-mapping'
import _ from 'lodash'

export default {
  asyncData ({ store, route, redirect }) {
    const page = route.params.page || '/'
    const data = store.state.pages[page]
    if (data) return data
    redirect('/404') // The way to handle 404
  },
  head () {
    return { ...this.head, __dangerouslyDisableSanitizers: ['script'] }
  },
  components: componentsMapping
    .reduce((acc, curr) => ({ ...acc, [curr.componentName]: curr.component }), {}),
  methods: {
    getComponentName (section) {
      const matched = componentsMapping.find(mapping => mapping.contentfulId === section.id)
      if (!matched && process.env.NODE_ENV !== 'production') {
        console.log('Missing component =>', section.id)
      }
      return _.kebabCase(matched.componentName)
    }
  }
}
</script>
