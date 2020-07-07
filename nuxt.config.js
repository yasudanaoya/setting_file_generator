require("dotenv").config();

module.exports = {
  mode: "spa",
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "My Editune",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles/application.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["plugins/prism", "plugins/modal", "plugins/dropdown"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // Doc: https://github.com/webcore-it/nuxt-clipboard2
    "nuxt-clipboard2",
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    "@nuxtjs/toast",
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
            iso: "en",
            file: "en.json"
          },
          {
            code: "ja",
            name: "Japanese",
            iso: "ja",
            file: "ja.json"
          }
        ],
        strategy: "prefix_and_default",
        vueI18nLoader: true,
        defaultLocale: "ja",
        lazy: true,
        langDir: "./assets/lang/"
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
