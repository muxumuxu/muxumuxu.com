import * as marked from 'marked'

const markdownMixin = {
  methods: {
    convertMarkdownToHTML (mardown) {
      return marked(mardown)
    }
  }
}

export default markdownMixin
