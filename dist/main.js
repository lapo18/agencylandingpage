const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
menuIcon.addEventListener('click',toggleMenu)
function toggleMenu() {
  menu.classList.toggle('hidden');
}
