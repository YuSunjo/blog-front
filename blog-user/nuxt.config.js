
export default {
  eslint: {
    fix: true,
  },
  head: {
    title: "blog",
    meta: [{ name: "referrer", content: "no-referrer" }],
  },
  router: {
    middleware: ['getMyInfo']
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "cookie-universal-nuxt"],
  vuetify: {},
  axios: {
    // browserBaseURL: "http://localhost:9000",
    // baseURL: "http://localhost:9000",
    browserBaseURL: "http://115.71.238.146:8080",
    baseURL: "http://115.71.238.146:8080",
  },
  ssr: false,
}
