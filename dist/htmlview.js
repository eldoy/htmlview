window.h = function h(strings, ...keys) {
  var s = ''
  for (let i = 0; i < strings.length; i++) {
    var text = strings[i]
    var val = keys[i]

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
