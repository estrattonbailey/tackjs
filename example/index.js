document.addEventListener('DOMContentLoaded', e => {
  window.target = document.getElementById('target')
  window.box = [
    document.getElementById('box0'),
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3')
  ]
  window.tack = tack

  console.log(`welcome to the tackjs demo 📌

attached to the window are a few objects for you to mess with:
  1. target (the small black square you see in the top left)
  2. box (array of the tomato colored squares)
  3. tackjs library, available as \`window.tack\`

use them like this:

  tack(target, box[1], 'top')

also, tack returns some utils:

  const pin = tack(target, box[3], 'bottomLeft')

  pin.update() // update position, like after resize
  pin.destroy() // unpin

bonus points: attach an event listener, like resize, and call update on each tick to maintain pinned position.
  `)
})
