export default {
  head: {
    title: 'idaproject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  plugins: [
    { src: '@plugins/directives.js' },
    { src: '@plugins/vee-validate.js' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: ['./assets/scss/resources.scss']
  },

  modules: [
    '@nuxtjs/style-resources'
  ],

  build: {
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    extend (config) {
      config.node = { fs: 'empty' }
    },
    transpile: ['vee-validate/dist/rules']
  }
}
