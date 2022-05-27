module.exports = {
  server: {
    port: 3030
  },
  eslint: {
    fix: true,
  },
  head: {
    title: "blog",
    meta: [{ name: "referrer", content: "no-referrer" }],
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "cookie-universal-nuxt"],
  vuetify: {},
  axios: {
    browserBaseURL: "http://115.71.238.146:9000",
    baseURL: "http://115.71.238.146:9000",
  },
  plugins: [
    { src: '~/plugins/TiptabVuetify', mode: 'client' }
  ],
  router: {
    middleware: "authenticated",
  },
  ssr: false
};
