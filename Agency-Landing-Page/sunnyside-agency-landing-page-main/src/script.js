const burgerIcon = document.getElementById('burger-icon');
const body = document.querySelector('body');

burgerIcon.addEventListener('click', () => {
    body.classList.toggle('w-3/5')
})