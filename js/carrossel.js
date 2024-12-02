const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

export function updateCarousel() {
    const offset = -currentIndex * 1000; // Largura de cada slide
    slides.style.transform = `translateX(${offset}px)`;
}

export function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Função para voltar ao slide anterior
export function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}