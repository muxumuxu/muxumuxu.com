<template>
  <a :href="data.url" :target="data.target">{{ data.title }}</a>
</template>

<script>

export default {
  props: ['data']
}
</script>
