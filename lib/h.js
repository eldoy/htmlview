const esc = require('escape-html')

module.exports = function h(strings, ...keys) {
  let s = ''
  for (let i = 0; i < strings.length; i++) {
    let text = strings[i]
    let val = keys[i] || ''

    if (typeof val == 'function') {
      val = val() || ''

    } else if (Array.isArray(val)) {
      val = val.join('')

    } else if (val.constructor == String) {
      if (text.slice(-1) == '$') {
        text = text.slice(0, -1)
      } else {
        val = esc(String(val))
      }
    }
    s += `${text}${val}`
  }
  return s
}
