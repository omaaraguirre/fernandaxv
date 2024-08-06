import simpleParallax from 'simple-parallax-js/vanilla'

const images = document.querySelectorAll('.parallax')
new simpleParallax(images, {
  orientation: 'down',
  scale: 1.5,
})
