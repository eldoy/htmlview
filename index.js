const { esc } = require('haka')

module.exports = function h(strings, ...keys) {
  var s = ''
  for (let i = 0; i < strings.length; i++) {
    var text = strings[i]
    var val = keys[i]

    if (Array.isArray(val)) {
      val = val.join('')
    } else if (typeof val == 'string') {
      if (text.endsWith('!!')) {
        text = text.slice(0, -2)
      } else if (typeof esc == 'function') {
        val = esc(val)
      }
    }
    s += `${text}${val == null ? '' : val}`
  }
  return s
}
