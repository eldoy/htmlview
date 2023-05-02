module.exports = function h(strings, ...keys) {
  var s = ''
  for (let i = 0; i < strings.length; i++) {
    var text = strings[i]
    var val = keys[i]

    if (typeof val == 'function') {
      val = val()
    } else if (Array.isArray(val)) {
      val = val.join('')
    }
    s += `${text}${val || ''}`
  }
  return s
}
