const hamburgerIcon = document.getElementById('icon-hamburger');
const dropDown = document.querySelector('.drop-down');


hamburgerIcon.addEventListener('click', () => {
    dropDown.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('rotate-90')
})