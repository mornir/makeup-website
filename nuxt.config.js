import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Soline Wang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Professional Asian Makeup Artist in Switzerland',
      },
      {
        name: 'keywords',
        content:
          'Swiss, MUA, Asian, makeup, wedding, Switzerland, pre-wedding, photography',
      },
    ],
    link: [
      /*  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, */
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Grand+Hotel&text=SolineWang',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap',
      },
    ],
  },

  router: {
    linkExactActiveClass: 'active-link',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [],

  tailwindcss: {
    exposeConfig: true,
  },
  purgeCSS: {
    whitelistPatternsChildren: [/^blueimp.+/],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-js-modal',
    '~plugins/v-lazy-image',
    '~plugins/vue-gallery.client.js',
    '~plugins/global.js',
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@teamnovu/nuxt-breaky',
    'svg-to-vue-component/nuxt',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Axios config
   */
  axios: {
    baseURL: '/',
  },

  vue: {
    config: {
      productionTip: false,
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
