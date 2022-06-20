require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

module.exports = {
    eslint: {
        fix: true,
    },
    head: {
        title: "blog",
        meta: [{name: "referrer", content: "no-referrer"}],
        script: [
            {src: 'https://apis.google.com/js/api.js'},
            {src: 'https://apis.google.com/js/platform.js'},
        ]
    },
    router: {
        middleware: ['getMyInfo']
    },
    buildModules: [
        ['@nuxtjs/dotenv', {filename: `.env.${process.env.NODE_ENV}`, systemvars: true}, {path: './'}],
        '@nuxtjs/moment',
        "@nuxtjs/vuetify"
    ],
    modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],
    moment: {
        locales: ['ko']
    },
    vuetify: {},
    axios: {
        // browserBaseURL: "http://localhost:9000",
        // baseURL: "http://localhost:9000",
        baseURL: process.env.BASE_URL || "https://api-lovga.site",
        browserBaseURL: process.env.BASE_URL || "https://api-lovga.site",
    },
    ssr: false,
    env: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        REDIRECT_URI: process.env.REDIRECT_URI
    },
    build: {
        analyze: false,
        extend(config, {isServer}) {
            if (isServer && config.mode === 'production') {
                config.devtool = 'hidden-source-map';
            }
        }
    }
}