const h = require('../index.js')

it('should return the string', async () => {
  const result = h`hello`
  expect(result).toBe('hello')
})

it('should return the html string', async () => {
  const result = h`<div>hello</div>`
  expect(result).toBe('<div>hello</div>')
})

it('should return the string with number vars', async () => {
  const result = h`hello ${5}`
  expect(result).toBe('hello 5')
})

it('should return the string with string vars', async () => {
  const result = h`hello ${'bye'}`
  expect(result).toBe('hello bye')
})

it('should join arrays', async () => {
  const result = h`hello ${[1, 2, 3]}`
  expect(result).toBe('hello 123')
})

it('should call functions', async () => {
  const result = h`hello ${function () {
    return 'bye'
  }}`
  expect(result).toBe('hello bye')
})

it('should return empty for undefined functions', async () => {
  const result = h`hello ${function () {
    if (false) return
  }}`
  expect(result).toBe('hello ')
})
