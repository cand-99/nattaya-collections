// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700]
    },
    useStylesheet: true
  },
  colorMode: {
    preference: 'light'
  },
  ui: {
    global: true,
    icons: ['heroicons', 'mdi', 'simple-icons', 'ph']
  }
})
