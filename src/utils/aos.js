import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  startEvent: 'DOMContentLoaded',
  duration: 1500,
  easing: 'ease-in-out',
  offset: -100,
})
