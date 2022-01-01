module.exports = {
  eslint: {
    fix: true,
  },
  head: {
    title: 'blog',
  },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  vuetify: {},
  axios: {
    baseURL: 'http://localhost:9000',
  },
  router: {
    middleware: 'authenticated'
  },
};
