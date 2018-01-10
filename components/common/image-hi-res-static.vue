<template>
  <img
  :data-src="src"
  :data-srcset="`${getRetinaPath} 2x`"
  class="lazyload"
  :width="width"
  :height="height"
  :style="{ width: `${width}px`, height: `${height}px` }" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    getRetinaPath () {
      return this.src.replace(/(?=\.[^.]+$)/g, '@2x')
    }
  }
}
</script>

<style>
/* fade image in after load */
.lazyload,
.lazyloading {
  opacity: 0;
}
.lazyloaded {
  opacity: 1;
  transition: opacity 300ms;
}
</style>
