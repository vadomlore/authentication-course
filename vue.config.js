const path = require("path");

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //         @import "@/assets/styles/global.scss";
  //       `
  //     }
  //   }
  // },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },
  lintOnSave: false
})

