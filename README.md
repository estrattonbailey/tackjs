# tackjs
Hyper-minimal toolkit to pin an element relative to another element. [Demo here](https://estrattonbailey.github.io/tackjs/). **518b gzipped.**

## Install
```bash
npm i tackjs --save
```

## Usage
```javascript
import tack from 'tackjs'

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

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
