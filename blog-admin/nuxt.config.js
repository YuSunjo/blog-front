module.exports = {
  eslint: {
    fix: true,
  },
  head: {
    title: "blog",
  },
  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],
  vuetify: {},
  axios: {
    baseURL: "http://localhost:9000",
  },
};
