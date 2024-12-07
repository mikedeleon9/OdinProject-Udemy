const hamburgerIcon = document.getElementById('icon-hamburger');
const dropDown = document.querySelector('.drop-down');


hamburgerIcon.addEventListener('click', () => {
   
    hamburgerIcon.classList.toggle('rotate-90');
    dropDown.classList.toggle('show');
    
})

const menuIcons = document.querySelectorAll('.menu-icon');

menuIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        menuIcons.forEach(i => i.classList.remove('menu-border'));

    icon.classList.add('menu-border')
    }
    
    )
})