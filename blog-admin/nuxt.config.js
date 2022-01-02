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
    browserBaseURL: 'http://localhost:9000',
    baseURL: 'http://localhost:9000',
  },
  router: {
    middleware: 'authenticated'
  },
};
