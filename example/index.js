document.addEventListener('DOMContentLoaded', e => {
  window.pizza = document.getElementById('target')
  window.box = [
    document.getElementById('box0'),
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3')
  ]
  window.tack = window.tackjs

  console.log(`welcome to the tackjs demo 📌

attached to the window are a few objects for you to mess with:
  1. pizza - a tasty piece of pizza
  2. box - the array of tomato colored rectangles
  3. tackjs library, available as \`window.tack\`

use them like this:

  tack(pizza, box[1], 'top')

  💡 think "tack pizza to box 1 at the top"

also, tack returns some utils:

  const pin = tack(pizza, box[3], 'bottomLeft')

  pin.update() // update position, like after resize
  pin.destroy() // unpin

bonus points: attach an event listener, like resize, and call update on each tick to maintain pinned position.
  `)
})
