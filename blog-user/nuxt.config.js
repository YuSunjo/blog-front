
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export default {
  eslint: {
    fix: true,
  },
  head: {
    title: "blog",
    meta: [{ name: "referrer", content: "no-referrer" }],
    script: [
      { src: 'https://apis.google.com/js/api.js' },
      { src: 'https://apis.google.com/js/platform.js' },
    ]
  },
  router: {
    middleware: ['getMyInfo']
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "cookie-universal-nuxt"],
  vuetify: {},
  axios: {
    // browserBaseURL: "http://localhost:9000",
    // baseURL: "http://localhost:9000",
    browserBaseURL: "https://api-lovga.site",
    baseURL: "https://api-lovga.site",
  },
  ssr: false,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    REDIRECT_URI: process.env.REDIRECT_URI
  }
}
