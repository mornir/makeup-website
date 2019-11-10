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

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-js-modal',
    '~plugins/v-lazy-image',
    '~plugins/vue-gallery.client.js',
  ],

  buildModules: ['@nuxtjs/tailwindcss', 'svg-to-vue-component/nuxt'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-polyfill',
    '@nuxtjs/axios',
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
        baseUrl: 'https://www.solinewang.com',
        defaultLocale: 'en',
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              meta: {
                description: 'Professional makeup artist in Switzerland',
              },
              links: {
                index: 'home',
                about: 'about me',
                portfolio: 'portfolio',
                contact: 'contact',
              },
            },
            fr: {
              meta: {
                description:
                  'Maquilleuse professionnelle suisse offre ses services de maquillage pour toute occasion.',
              },
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
  ],

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

  polyfill: {
    features: [
      {
        require: 'url-search-params-polyfill',
        detect: () => 'URLSearchParams ' in window,
      },
    ],
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
