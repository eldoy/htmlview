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
  let result = h`hello ${5}`
  expect(result).toBe('hello 5')

  result = h`hello ${0}`
  expect(result).toBe('hello 0')
})

it('should return the string with string vars', async () => {
  const result = h`hello ${'bye'}`
  expect(result).toBe('hello bye')
})

it('should join arrays', async () => {
  const result = h`hello ${[1, 2, 3]}`
  expect(result).toBe('hello 123')
})

it('should return empty string for null and undefined', async () => {
  let result = h`<div>${null}</div>`
  expect(result).toBe('<div></div>')
  result = h`<div>${undefined}</div>`
  expect(result).toBe('<div></div>')
})
