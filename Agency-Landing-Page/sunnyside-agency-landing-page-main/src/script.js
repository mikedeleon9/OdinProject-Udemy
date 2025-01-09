const burgerIcon = document.getElementById('burger-icon');
const menuPanel = document.getElementById('menu-panel')

burgerIcon.addEventListener('click', () => {
    menuPanel.classList.toggle('hidden');
  });