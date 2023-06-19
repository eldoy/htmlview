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

it('should escape HTML in vars', async () => {
  const result = h`<div>${'<p>hello</p>'}</div>`
  expect(result).toBe('<div>&lt;p&gt;hello&lt;/p&gt;</div>')
})

it('should not escape raw vars', async () => {
  const result = h`<div>!!${'<p>hello</p>'}</div>`
  expect(result).toBe('<div><p>hello</p></div>')
})
