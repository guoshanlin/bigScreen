'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API: '"/api/"',
  API: '"http://localhost:8080/"',
  URL: '"http://localhost:8080/"'
})
