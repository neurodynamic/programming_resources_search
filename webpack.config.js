// var webpack =
require('webpack')
var getConfig = require('hjs-webpack')
var environment = require('./environment.json')

var config = getConfig({
  in: 'src/app.js',
  out: './dist',
  minify: false,
  html: function (context) {
    return {
      'index.html':
        context.defaultTemplate(
          {
            head: '<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">',
            html: '<div id="main-app"></div>',
            title: 'Site Title'
          }
        )
    }
  },

  // Find computer network name in
  // System Preferences > Sharing
  hostname: environment.hostname,
  isDev: process.env.NODE_ENV !== 'production'
})

module.exports = config
