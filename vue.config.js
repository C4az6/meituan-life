const path = require('path');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'style': path.resolve('src/assets/style'),
        'js': path.resolve('src/assets/js'),
        'components': path.resolve('src/components'),
        'data': path.resolve('src/assets/data'),
        'utils': path.resolve('src/utils'),
        'images': path.resolve('src/assets/images')
      }
    }
  }
}