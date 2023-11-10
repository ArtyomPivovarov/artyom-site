// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  devtools: { enabled: true }
})
