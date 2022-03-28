module.exports = {
  eslint: {
    fix: true,
  },
  build: {
    babel: {
      plugins: [['transform-remove-console']],
    }
  },
  head: {
    title: "blog",
    meta: [{ name: "referrer", content: "no-referrer" }],
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "cookie-universal-nuxt"],
  vuetify: {},
  axios: {
    // browserBaseURL: "http://localhost:9000",
    // baseURL: "http://localhost:9000",
    browserBaseURL: "http://115.71.238.146:8080",
    baseURL: "http://115.71.238.146:8080",
  },
};
