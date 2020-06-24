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
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
  plugins: ["plugins/prism"],
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
    "@nuxtjs/auth",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
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
  auth: {
    strategies: {
      auth0: {
        domain: process.env.DOMAIN_NAME, // 追加
        client_id: process.env.CLIENT_ID // 追加
      }
    },
    redirect: {
      login: "/", // 未ログイン時のリダイレクト先
      logout: "/", // ログアウト処理を実行した直後のリダイレクト先
      callback: "/", // コールバックURL
      home: "/" // ログイン後に遷移するページ
    }
  },
  env: {
    // auth0
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    CLIENT_ID: process.env.CLIENT_ID
  },
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
