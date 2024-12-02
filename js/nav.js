const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');
const overlay = document.getElementById('overlay');


export function toggleMenu() {
  navList.classList.toggle('active');
  overlay.style.display = navList.classList.contains('active') ? 'block' : 'none';
}

export function closeMenu() {
  navList.classList.remove('active');
  overlay.style.display = 'none';
}

export { hamburgerMenu, overlay };
