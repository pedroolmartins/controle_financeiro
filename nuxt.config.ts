// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  // css
  css: [
    '/assets/scss/index.scss'
  ],

  modules: [
    '@vite-pwa/nuxt',
    '@element-plus/nuxt'
  ],
  pwa: {

  },
  elementPlus: {
    themes: ['dark'],
    defaultLocale: 'pt-br',
    imports: [
      [
        'useLocale',
        'pt-br/hooks/use-locale/index.mjs'
      ]
    ],
  }
})