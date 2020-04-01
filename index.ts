type Placement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "bottomLeft"
  | "topRight"
  | "bottomRight";

export function getCoords(element: HTMLElement) {
  const {
    left: l,
    right: r,
    top: t,
    bottom: b
  } = element.getBoundingClientRect();
  const { pageYOffset: y } = window;

  return {
    height: b - t,
    width: r - l,
    top: {
      y: y + t,
      x: l + (r - l) / 2
    },
    bottom: {
      y: y + b,
      x: l + (r - l) / 2
    },
    left: {
      y: y + t + (b - t) / 2,
      x: l
    },
    right: {
      y: y + t + (b - t) / 2,
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
  };
}

export function position(
  target: HTMLElement,
  scope: HTMLElement,
  placement: Placement
) {
  const c = getCoords(scope)[placement];
  const e = getCoords(target);
  const { pageYOffset: y } = window;

  const vp = {
    top: y,
    bottom: y + window.innerHeight,
    left: 0,
    right: window.innerWidth
  };

  const offsets = {
    top: {
      x: e.width / 2,
      y: e.height
    },
    bottom: {
      x: e.width / 2,
      y: 0
    },
    left: {
      x: e.width,
      y: e.height / 2
    },
    right: {
      x: 0,
      y: e.height / 2
    },
    topLeft: {
      x: e.width,
      y: e.height
    },
    topRight: {
      x: 0,
      y: e.height
    },
    bottomLeft: {
      x: e.width,
      y: 0
    },
    bottomRight: {
      x: 0,
      y: 0
    }
  };

  let posx = c.x - offsets[placement].x;
  let posy = c.y - offsets[placement].y;

  if (posx < vp.left) {
    posx = vp.left;
  } else if (posx + e.width > vp.right) {
    posx = vp.right - e.width;
  }

  if (posy < vp.top) {
    posy = vp.top;
  } else if (posy + e.height > vp.bottom) {
    posy = vp.bottom - e.height;
  }

  target.style.transform = `translateX(${Math.round(
    posx
  )}px) translateY(${Math.round(posy)}px)`;
}

export function tack(
  target: HTMLElement,
  scope: HTMLElement,
  placement: Placement
) {
  target.classList.add("is-tacked");
  position(target, scope, placement);

  return {
    update() {
      position(target, scope, placement);
    },
    destroy() {
      target.style.transform = "";
      target.classList.remove("is-tacked");
    }
  };
}
