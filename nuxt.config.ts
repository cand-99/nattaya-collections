// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module'
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'mdi', 'simple-icons', 'ph']
  }
})
