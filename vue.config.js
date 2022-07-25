const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   host: 'localhost',
  //   port: '8080',
  //   proxy: {
  //     '/v1': {
  //       target: 'http://124.71.80.246',
  //       changeOrigin: true,
  //       pathRewrite: { '^/v1': '' }
  //     },

  //   }
  // }
});
