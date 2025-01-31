export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-primevue',
    '@element-plus/nuxt'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/scss/mixins.scss";'
        }
      }
    }
  },

  typescript: {
    typeCheck: true,
    strict: true
  },

  css: [
    'primevue/resources/themes/viva-dark/theme.css',
    'primeicons/primeicons.css',
    '@/assets/scss/main.scss'
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  pinia: {
    storesDirs: ['./stores/**']
  },

  primevue: {
    components: {
      prefix: 'Prime'
    },
    options: {
      ripple: true
    }
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        files: ['en-US.yaml'],
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        files: ['ru-RU.yaml'],
        name: 'Русский'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },

  compatibilityDate: '2025-01-31'
})
