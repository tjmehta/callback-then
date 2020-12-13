# Name

Easily convert a callback-based function to a promise in TypeScript

# Installation

```sh
npm i --save callback-then
```

# Usage

#### Supports both ESM and CommonJS

```js
// esm
import toPromise from 'callback-then`
// commonjs
const toPromise = require('callback-then').default
```

#### Example Usage

```js
import toPromise from 'callback-then`

const result = await toPromise(cb => {
  setTimeout(() => cb(null, 'success'), 10)
}) // resolves to 'success'

await toPromise(cb => {
  setTimeout(() => cb(), 10)
}) // resolves undefined

await toPromise(cb => {
  setTimeout(() => cb(new Error('boom')), 10)
}) // rejects with Error: boom
```

#### TypeScript Example Usage

```ts
import toPromise from 'callback-then`

const result = await toPromise<string>(cb => {
  setTimeout(() => cb(null, 10), 10)
}) // resolves to 'success' and type is a string
```

# License

MIT
