import i18nConfig from './config/i18n.config'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseApi: process.env.NUXT_BASE_API_URL,
      apiUrl: process.env.NUXT_API_URL
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],

  i18n: {
    strategy: 'no_prefix',
    ...i18nConfig
  },

  typescript: {
    typeCheck: true
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  vite: {
    optimizeDeps: {
      include: ['@intlify/core-base']
    }
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-10-07'
})