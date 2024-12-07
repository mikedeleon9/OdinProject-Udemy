const hamburgerIcon = document.getElementById('icon-hamburger');
const dropDown = document.querySelector('.drop-down');


hamburgerIcon.addEventListener('click', () => {
   
    hamburgerIcon.classList.toggle('rotate-90');
    dropDown.classList.toggle('show');
})