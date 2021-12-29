module.exports = {
  eslint: {
    fix: true,
  },
  head: {
    title: "blog",
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  vuetify: {},
  axios: {
    baseURL: "http://localhost:9000",
  },
};
