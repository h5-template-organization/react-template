'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const theme = require('../theme.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'development'
    ? config.dev.assetsSubDirectory
    : config.build.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptionsAll) {
    const { cssLoaderOptions, ...loaderOptions } = loaderOptionsAll || {}
    const cssLoaderOpera = Object.assign({}, cssLoader)
    if (cssLoaderOptions) {
      cssLoaderOpera.options = Object.assign({}, cssLoaderOpera.options, cssLoaderOptions)
    }
    const loaders = options.usePostCSS ? [cssLoaderOpera, postcssLoader] : [cssLoaderOpera]

    if (loader) {
      loaders.push({
        loader: loader,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader',
        publicPath: process.env.NODE_ENV === 'development' ? config.dev.extractPath : config.build.extractPath
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return [
    {
      extension: /\.css$/,
      loader: generateLoaders()
    },
    {
      extension: /(?<!\.module)\.less$/,
      loader: generateLoaders('less-loader', {
        modifyVars: theme,
        javascriptEnabled: true
      })
    },
    {
      extension: /\.module\.less$/,
      loader: generateLoaders('less-loader', {
        cssLoaderOptions: { modules: true, localIdentName: '[local]-[hash:base64:5]' },
        modifyVars: theme,
        javascriptEnabled: true
      })
    },
    {
      extension: /(?<!\.module)\.scss$/,
      loader: generateLoaders('sass-loader')
    },
    {
      extension: /\.module\.scss$/,
      loader: generateLoaders('sass-loader', {
        cssLoaderOptions: { modules: true, localIdentName: '[local]-[hash:base64:5]' }
      })
    }
  ]
}

exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  loaders.forEach(item => {
    output.push({
      test: item.extension,
      use: item.loader
    })
  })

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.jpg')
    })
  }
}
