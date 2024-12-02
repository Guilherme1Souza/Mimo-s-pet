const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

export function updateCarousel() {
    const slideWidth = document.querySelector('.slide').offsetWidth; 
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
}

export function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

export function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}


window.addEventListener('resize', updateCarousel);
