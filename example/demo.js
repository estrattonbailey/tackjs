(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _tackjs = require('tackjs');

document.addEventListener('DOMContentLoaded', function (e) {
  window.target = document.getElementById('target');
  window.box = [document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3'), document.getElementById('box4')];
  window.tack = _tackjs.tack;

  console.group('tackjs');
  console.log('welcome to the tack demo \uD83D\uDCCC\n\nattached to the window are a few objects for you to mess with:\n  1. target (the small black square you see in the top left)\n  2. box (array of the tomato colored squares)\n  3. tack (contructor function)\n\nuse them like this:\n\n  tack(target, box[1], \'top\')\n\nalso, tack returns some utils:\n\n  const pin = tack(target, box[4], \'bottomLeft\')\n\n  pin.update() // update position, like after resize\n  pin.destroy() // unpin\n\nbonus points: attach an event listener, like resize, and call update on each tick to maintain pinned position.\n  ');
  console.groupEnd();
});

},{"tackjs":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCoords = exports.getCoords = function getCoords(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      l = _element$getBoundingC.left,
      r = _element$getBoundingC.right,
      t = _element$getBoundingC.top,
      b = _element$getBoundingC.bottom;

  var _window = window,
      y = _window.pageYOffset;


  return {
    top: {
      y: y + t,
      x: l + (r - l) / 2
    },
    bottom: {
      y: y + b,
      x: l + (r - l) / 2
    },
    left: {
      y: t + (b - t) / 2,
      x: l
    },
    right: {
      y: t + (b - t) / 2,
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
};

var position = exports.position = function position(target, scope, placement) {
  var c = getCoords(scope)[placement];
  var e = getCoords(target);
  var x = c.x - (e.right.x - e.left.x) / 2;
  var y = c.y - (e.bottom.y - e.top.y) / 2;

  target.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
};

var tack = exports.tack = function tack(target, scope, placement) {
  target.classList.add('is-tacked');
  position(target, scope, placement);

  return {
    update: function update() {
      position(target, scope, placement);
    },
    destroy: function destroy() {
      target.style.transform = '';
      target.classList.remove('is-tacked');
    }
  };
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90YWNranMvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsYUFBSztBQUNqRCxTQUFPLE1BQVAsR0FBZ0IsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWhCO0FBQ0EsU0FBTyxHQUFQLEdBQWEsQ0FDWCxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEVyxFQUVYLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZXLEVBR1gsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBSFcsRUFJWCxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKVyxDQUFiO0FBTUEsU0FBTyxJQUFQOztBQUVBLFVBQVEsS0FBUixDQUFjLFFBQWQ7QUFDQSxVQUFRLEdBQVI7QUFvQkEsVUFBUSxRQUFSO0FBQ0QsQ0FoQ0Q7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyB0YWNrIH0gZnJvbSAndGFja2pzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gIHdpbmRvdy50YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JylcbiAgd2luZG93LmJveCA9IFtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94MScpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gyJyksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDMnKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94NCcpXG4gIF1cbiAgd2luZG93LnRhY2sgPSB0YWNrXG5cbiAgY29uc29sZS5ncm91cCgndGFja2pzJylcbiAgY29uc29sZS5sb2coYHdlbGNvbWUgdG8gdGhlIHRhY2sgZGVtbyDwn5OMXG5cbmF0dGFjaGVkIHRvIHRoZSB3aW5kb3cgYXJlIGEgZmV3IG9iamVjdHMgZm9yIHlvdSB0byBtZXNzIHdpdGg6XG4gIDEuIHRhcmdldCAodGhlIHNtYWxsIGJsYWNrIHNxdWFyZSB5b3Ugc2VlIGluIHRoZSB0b3AgbGVmdClcbiAgMi4gYm94IChhcnJheSBvZiB0aGUgdG9tYXRvIGNvbG9yZWQgc3F1YXJlcylcbiAgMy4gdGFjayAoY29udHJ1Y3RvciBmdW5jdGlvbilcblxudXNlIHRoZW0gbGlrZSB0aGlzOlxuXG4gIHRhY2sodGFyZ2V0LCBib3hbMV0sICd0b3AnKVxuXG5hbHNvLCB0YWNrIHJldHVybnMgc29tZSB1dGlsczpcblxuICBjb25zdCBwaW4gPSB0YWNrKHRhcmdldCwgYm94WzRdLCAnYm90dG9tTGVmdCcpXG5cbiAgcGluLnVwZGF0ZSgpIC8vIHVwZGF0ZSBwb3NpdGlvbiwgbGlrZSBhZnRlciByZXNpemVcbiAgcGluLmRlc3Ryb3koKSAvLyB1bnBpblxuXG5ib251cyBwb2ludHM6IGF0dGFjaCBhbiBldmVudCBsaXN0ZW5lciwgbGlrZSByZXNpemUsIGFuZCBjYWxsIHVwZGF0ZSBvbiBlYWNoIHRpY2sgdG8gbWFpbnRhaW4gcGlubmVkIHBvc2l0aW9uLlxuICBgKVxuICBjb25zb2xlLmdyb3VwRW5kKClcbn0pXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0Q29vcmRzID0gZXhwb3J0cy5nZXRDb29yZHMgPSBmdW5jdGlvbiBnZXRDb29yZHMoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkZ2V0Qm91bmRpbmdDID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGwgPSBfZWxlbWVudCRnZXRCb3VuZGluZ0MubGVmdCxcbiAgICAgIHIgPSBfZWxlbWVudCRnZXRCb3VuZGluZ0MucmlnaHQsXG4gICAgICB0ID0gX2VsZW1lbnQkZ2V0Qm91bmRpbmdDLnRvcCxcbiAgICAgIGIgPSBfZWxlbWVudCRnZXRCb3VuZGluZ0MuYm90dG9tO1xuXG4gIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgeSA9IF93aW5kb3cucGFnZVlPZmZzZXQ7XG5cblxuICByZXR1cm4ge1xuICAgIHRvcDoge1xuICAgICAgeTogeSArIHQsXG4gICAgICB4OiBsICsgKHIgLSBsKSAvIDJcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgeTogeSArIGIsXG4gICAgICB4OiBsICsgKHIgLSBsKSAvIDJcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHk6IHQgKyAoYiAtIHQpIC8gMixcbiAgICAgIHg6IGxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB5OiB0ICsgKGIgLSB0KSAvIDIsXG4gICAgICB4OiByXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICB5OiB5ICsgdCxcbiAgICAgIHg6IGxcbiAgICB9LFxuICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgIHk6IHkgKyBiLFxuICAgICAgeDogbFxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHk6IHkgKyB0LFxuICAgICAgeDogclxuICAgIH0sXG4gICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgIHk6IHkgKyBiLFxuICAgICAgeDogclxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBwb3NpdGlvbiA9IGV4cG9ydHMucG9zaXRpb24gPSBmdW5jdGlvbiBwb3NpdGlvbih0YXJnZXQsIHNjb3BlLCBwbGFjZW1lbnQpIHtcbiAgdmFyIGMgPSBnZXRDb29yZHMoc2NvcGUpW3BsYWNlbWVudF07XG4gIHZhciBlID0gZ2V0Q29vcmRzKHRhcmdldCk7XG4gIHZhciB4ID0gYy54IC0gKGUucmlnaHQueCAtIGUubGVmdC54KSAvIDI7XG4gIHZhciB5ID0gYy55IC0gKGUuYm90dG9tLnkgLSBlLnRvcC55KSAvIDI7XG5cbiAgdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB4ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB5ICsgJ3B4KSc7XG59O1xuXG52YXIgdGFjayA9IGV4cG9ydHMudGFjayA9IGZ1bmN0aW9uIHRhY2sodGFyZ2V0LCBzY29wZSwgcGxhY2VtZW50KSB7XG4gIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy10YWNrZWQnKTtcbiAgcG9zaXRpb24odGFyZ2V0LCBzY29wZSwgcGxhY2VtZW50KTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgcG9zaXRpb24odGFyZ2V0LCBzY29wZSwgcGxhY2VtZW50KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdGFja2VkJyk7XG4gICAgfVxuICB9O1xufTsiXX0=
