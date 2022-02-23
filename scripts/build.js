#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const htmlview = require('../index.js')

const code = []
for (const fn in htmlview) {
  code.push(`window.${fn} = ${htmlview[fn].toString()}\n`)
}
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/htmlview.js', code.join('\n'))

const result = uglify.minify(code.join('\n'))
fs.writeFileSync('./dist/htmlview-min.js', result.code)