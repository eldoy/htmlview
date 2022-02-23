const esc = require('escape-html')

module.exports = function h(strings, ...keys) {
  let s = ''
  for (let i = 0; i < strings.length; i++) {
    let text = strings[i]
    let val = keys[i]

    if (typeof val == 'function') {
      val = val()

    } else if (Array.isArray(val)) {
      val = val.join('')

    } else if (typeof val == 'string') {
      if (text.slice(-1) == '$') {
        text = text.slice(0, -1)
      } else if (typeof esc == 'function') {
        val = esc(val)
      }
    }
    s += `${text}${val || ''}`
  }
  return s
}
