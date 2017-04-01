# tackjs
A minimal toolkit to pin an element relative to another element.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Usage
```javascript
import { tack } from 'tackjs'

const scope = document.getElementById('scope')
const target = document.getElementById('target')

const pin = tack(target, scope, 'top')

// refresh position
pin.update()

// remove class and transform
pin.destroy()

// can be re-pinned!
pin.update()
```

## Alignment
Tack supports the following coordinates relative to the passed `scope` element:
- `top`
- `bottom`
- `left`
- `right`
- `topLeft`
- `topRight`
- `bottomLeft`
- `bottomRight`

## Browser Support
TODO, but should work in all evergreen browsers and IE 10+.

## Example
To run the example, clone this repo, then:
```bash
# move into example dir
cd tackjs/example
# install deps
npm i
# compile JS
npm run js:build # or js:watch
# serve index.html and update with changes
live-server 
```

MIT License
