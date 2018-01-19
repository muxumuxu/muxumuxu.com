const webpack = require('webpack')

const config = {
  css: [
    { src: '~assets/css/reset.sass', lang: 'sass' },
    { src: '~assets/css/variables.sass', lang: 'sass' },
    { src: '~assets/css/common.sass', lang: 'sass' },
    { src: '~assets/css/fluffy.scss', lang: 'scss' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Muxu.Muxu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Muxu.Muxu' },
      { hid: 'og:title', property: 'og:title', content: 'Muxu.Muxu' },
      { hid: 'og:image', property: 'og:image', content: 'https://muxumuxu.com/images/og-image.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://muxumuxu.com/' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'We help startups and established companies to invent, build, and launch their next product or venture. We also launch ventures of our own.'
      },
      { hid: 'twitter:title', property: 'twitter:site', content: '@wearemuxu' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://muxumuxu.com/images/og-image.png' },
      { hid: 'twitter:widgets:theme', property: 'twitter:widgets:theme', content: 'light' },
      { hid: 'twitter:widgets:link-color', property: 'twitter:widgets:link-color', content: '#33CC33' },
      { hid: 'twitter:widgets:border-color', property: 'twitter:widgets:border-color', content: '#33CC33' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/fluffy/fluffy.min.css', as: 'style', onload: "this.rel='stylesheet'" }
    ],
    script: [
      { type: 'text/javascript', id: 'fluffy', async: true, defer: true, src: '/fluffy/fluffy.min.js' }
    ]
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    routes: [
      '/',
      '/work',
      '/services',
      '/ventures',
      '/about',
      '/blog',
      '/careers'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#33CC33' },
  /*
  ** Router configuration
  */
  router: {
    middleware: ['contentful']
  },
  /*
  ** Plugin configuration
  */
  plugins: [
    { src: '~plugins/hyper-link.js', ssr: true },
    { src: '~plugins/image-hi-res.js', ssr: true },
    { src: '~plugins/webfont.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/console.js', ssr: false}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  // add caching
  config.modules.push(
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 120
    }]
  )
}

module.exports = config
