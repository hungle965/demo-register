const DEFAULT_HOST = '0.0.0.0'

export default {
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@/libs/modules/head.module'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: DEFAULT_HOST,
  },
}
