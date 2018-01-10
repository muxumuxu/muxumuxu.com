<template>
  <img
    :class="imageClass"
    :key="lowResURL"
    :src="lowResURL"
    :srcset="srcset"
    :style="imageStyle"
    :alt="data.alt" />
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    width: Number,
    height: Number,
    animated: {
      type: Boolean,
      default: () => false
    },
    animationType: {
      type: String,
      default: () => 'fadeIn'
    },
    overrideStyle: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    hiResURL () {
      return this.insertParams(this.data.src, this.generateParams(2))
    },
    lowResURL () {
      return this.insertParams(this.data.src, this.generateParams(1))
    },
    srcset () {
      if (this.lowResURL === this.hiResURL) return null
      return `${this.hiResURL} 2x`
    },
    imageStyle () {
      if (!this.overrideStyle) {
        return {}
      }
      const style = {}
      if (this.width) {
        style.width = `${this.width}px`
      }
      if (this.height) {
        style.height = `${this.height}px`
      }
      return style
    },
    imageClass () {
      if (this.animated) {
        return ['animated', this.animationType]
      }
      return {}
    }
  },
  methods: {
    insertParams (url, params) {
      if (!url) return url
      const queryParams = params.map(p => `${p.key}=${p.value}`).join('&')
      if (queryParams.length === 0) return url
      const separator = url.indexOf('?') === -1 ? '?' : '&'
      return `${url}${separator}${queryParams}`
    },
    generateParams (coef) {
      const params = []
      if (this.width) {
        params.push({ key: 'w', value: this.width * coef })
      }
      if (this.height) {
        params.push({ key: 'h', value: this.height * coef })
      }
      return params
    }
  }
}
</script>
