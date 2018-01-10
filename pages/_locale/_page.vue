<template>
  <div>
    <component v-for="section in sections" :key="section.id" :is="getComponentName(section)" :data="section" />
  </div>
</template>

<script>
import Separator from '@/components/separator'

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
  components: {
    Separator
  },
  methods: {
    getComponentName (section) {
      const mapping = {
        separator: 'separator'
      }
      if (!mapping[section.id] && process.env.NODE_ENV !== 'production') {
        console.log('Missing component =>', section.id)
      }
      return mapping[section.id]
    }
  }
}
</script>
