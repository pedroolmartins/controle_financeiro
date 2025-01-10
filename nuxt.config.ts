// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  experimental: { appManifest: false },

  modules: [
    '@vite-pwa/nuxt',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  app: {
    baseURL: '/controle_financeiro',
    // head
    head: {
      title: 'Controle de Finanças',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // css
  css: [
    '~/assets/scss/index.scss',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pwa: {

  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  elementPlus: {
    importStyle: 'scss',
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