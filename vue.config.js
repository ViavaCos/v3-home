const { resolve } = require('path')

module.exports = {
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    }
}