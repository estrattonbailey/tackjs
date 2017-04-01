export const getCoords = element => {
  const { left: l, right: r, top: t, bottom: b } = element.getBoundingClientRect()
  const { pageYOffset: y } = window

  return {
    top: {
      y: y + t,
      x: l + ((r - l) / 2)
    },
    bottom: {
      y: y + b,
      x: l + ((r - l) / 2)
    },
    left: {
      y: t + ((b - t) / 2),
      x: l
    },
    right: {
      y: t + ((b - t) / 2),
      x: r
    },
    topLeft: {
      y: y + t,
      x: l
    },
    bottomLeft: {
      y: y + b,
      x: l
    },
    topRight: {
      y: y + t,
      x: r
    },
    bottomRight: {
      y: y + b,
      x: r
    }
  }
}

export const position = (target, scope, placement) => {
  const c = getCoords(scope)[placement]
  const e = getCoords(target)
  const x = c.x - ((e.right.x - e.left.x) / 2)
  const y = c.y - ((e.bottom.y - e.top.y) / 2)

  target.style.transform = `translateX(${x}px) translateY(${y}px)`
}

export const tack = (target, scope, placement) => {
  target.classList.add('is-tacked')
  position(target, scope, placement)

  return {
    update () {
      position(target, scope, placement)
    },
    destroy () {
      target.style.transform = ''
      target.classList.remove('is-tacked')
    }
  }
}
