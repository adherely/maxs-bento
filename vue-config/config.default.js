const path = require('path')

module.exports = {
  /* See https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa for more details */
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/Variables.scss";`
      }
    }
  },
  pwa: {
    themeColor: '#FFFFFF',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.join('public', 'service-worker.js')
    }
  }
}
