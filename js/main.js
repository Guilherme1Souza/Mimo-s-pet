import { toggleMenu, closeMenu, hamburgerMenu, overlay } from './nav.js';
import { nextSlide, prevSlide } from './carrossel.js'

hamburgerMenu.addEventListener('click', toggleMenu);

overlay.addEventListener('click', closeMenu);

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);