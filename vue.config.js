const { defineConfig } = require('@vue/cli-service')
const path = require("path");


function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = defineConfig({
  transpileDependencies: true
})


const port = 8080;
const name = "模版"; // page title

module.exports = {
  // publicPath: '/o/jwwx',
  devServer: {
    host: '0.0.0.0',
    // host:'jw.zhanhuo.com',
    port: port,
    // 使用代理
    proxy: {
      ['']: {
        target: `http://127.0.0.1:${port}`,
        ws: true,
        changeOrigin: true,
        pathReWrite: {
          ["^" + '']: "",
        }
      }
    },
    allowedHosts: [
      'natappfree.cc', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.natappfree.cc'   // .是二级域名的通配符   
    ],
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = name;
      return args;
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
}