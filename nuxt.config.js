import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */

  server: {
    port: 8080, // default: 3000
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        crossorigin: 'anonymous',
      },
    ],
  },

  router: {
    linkExactActiveClass: 'active-link',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFFFFF' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-js-modal', '~plugins/v-lazy-image'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'nuxt-purgecss',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'fr',
            name: 'Français',
            iso: 'fr-FR',
          },
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
          },
        ],
        // TODO: baseUrl: 'https://www.solinewang.com',
        defaultLocale: 'en',
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            en: {
              links: {
                index: 'home',
                about: 'about me',
                portfolio: 'portfolio',
                contact: 'contact',
              },
            },
            fr: {
              links: {
                index: 'accueil',
                about: 'à mon propos',
                portfolio: 'portfolio',
                contact: 'contact',
              },
            },
          },
        },
      },
    ],
    [
      'svg-to-vue-component/nuxt',
      {
        // ...
      },
    ],
  ],

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
