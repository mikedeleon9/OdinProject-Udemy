const burgerIcon = document.getElementById('burger-icon');
const sidePanel = document.getElementById('side-panel')
const body = document.querySelector('body');
const header = document.querySelector('header');

burgerIcon.addEventListener('click', () => {
   sidePanel.classList.toggle('hidden');

   if(!header.classList.contains('w-1/2')){
        header.classList.add('w-1/2')
        header.classList.add('px-4')
        
   }
   else{
    header.classList.remove('w-1/2')
    header.classList.remove('px-4')
   }
   
})