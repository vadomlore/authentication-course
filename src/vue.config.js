const path = require("path");

// module.exports = {
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
//     }
//   }
// };

module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/global.scss";` // 根据你的项目路径修改
        }
      }
    }
  };
  