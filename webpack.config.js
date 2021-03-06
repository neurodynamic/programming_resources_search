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
            head: '<link rel="gear icon" type="image/x-icon" href="/favicon.ico">' +
                  "<link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100' rel='stylesheet' type='text/css'>" +
                  '<script src="https://use.fontawesome.com/ce69380dcd.js"></script>',
            html: '<div id="main-app"></div>',
            title: 'Programming Resources Search'
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
