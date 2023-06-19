# HTML View

HTML view template string function.

This is a convenience function for creating HTML with Javascript.

### Install

In the browser, grab one of the files from the `dist` folder in this repository.

You will also need an escape function such as the one found in [haka.](https://github.com/eldoy/haka#escape-string)

```
npm i htmlview
```

### Usage

```js
// For usage with NodeJS only
const h = require('htmlview')

// HTML string, just like normal template string
const html = h`<div>hello</div>`
// <div>hello</div>

// HTML string with variables, like normal
const html = h`<div>hello ${5}</div>`
// <div>hello 5</div>

// Automatically joins array variables
const html = h`<div>hello ${[ '1', '2', '3']}</div>`
// <div>hello 123</div>

// Avoid automatically joining array variables
const html = h`<div>hello ${[ '1', '2', '3'].join(',')}</div>`
// <div>hello 1,2,3</div>

// Automatically calls functions
const html = h`<div>hello ${() => 'bye'}</div>`
// <div>hello bye</div>

// Escapes all string variables by default
const html = h`<div>hello ${'<b>bye</b>'}</div>`
// <div>hello &lt;b&gt;hello&lt;/b&gt;</div>

// Raw string, no escaping
const html = h`<div>hello !!${'<b>bye</b>'}</div>`
// <div>hello <b>bye</b></div>

// Returns empty string by default, not 'undefined'
const html = h`<div>hello${() => {
  if (project.done) return '<b>bye</b>'
}}</div>`
// <div>hello</div>
```

MIT Licensed. Enjoy!
