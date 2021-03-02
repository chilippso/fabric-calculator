const polyfills = require('rollup-plugin-node-polyfills')

module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  devOptions: {
    bundle: true
  },
  installOptions: {
    rollup: {
      plugins: [
        polyfills()
      ]
    }
  },
  plugins: [
    '@snowpack/plugin-webpack'
  ],
  install: ['svelte/internal']
}
