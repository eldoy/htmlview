#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const htmlview = require('../index.js')

const code = `window.h = ${htmlview.toString()}\n`

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/htmlview.js', code)

const result = uglify.minify(code)
fs.writeFileSync('./dist/htmlview-min.js', result.code)
