module.exports = {
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'childApp',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: 'webpackJsonp_childApp',
    },
  },
  // 设置common要参与编译打包（ES6 -> ES5）
  transpileDependencies: ['common'],
};
