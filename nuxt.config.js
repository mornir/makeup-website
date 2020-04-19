const SEO = {
  title: 'Soline Wang',
  description: 'Freelance Makeup Artist based in Switzerland',
  keywords:
    'Swiss, MUA, Asian, makeup, wedding, Switzerland, pre-wedding, photography',
  url: 'https://www.solinewang.com',
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: SEO.title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'mAsxCXU6jWYOgdFPrgju1TI9DVDpHIjMmqu6SGgLqT0',
      },
      {
        name: 'description',
        content: SEO.description,
      },
      {
        name: 'keywords',
        content: SEO.keywords,
      },
      {
        name: 'theme-color',
        content: '#C49C56',
      },
      {
        property: 'og:title',
        content: SEO.title,
      },
      {
        property: 'og:description',
        content: SEO.description,
      },
      {
        property: 'og:image',
        content: SEO.url + '/social-share.jpg',
      },
      {
        property: 'og:url',
        content: SEO.url,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', sizes: '192x192', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
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
    trailingSlash: false,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#d1a66d',
  },

  /*
   ** Global CSS
   */
  css: [],

  purgeCSS: {
    whitelistPatternsChildren: [/^blueimp.+/],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/v-lazy-image',
    '~plugins/vue-gallery.client.js',
    '~plugins/global.js',
  ],

  buildModules: ['@nuxtjs/tailwindcss', 'svg-to-vue-component/nuxt'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/sitemap'],

  vue: {
    config: {
      productionTip: false,
    },
  },

  sitemap: {
    hostname: SEO.url,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
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
