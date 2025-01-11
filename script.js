const arrowIcon = document.querySelector('.arrow');
const nameTitleDiv = document.getElementById('name-title');
const profilePicture = document.querySelector('.profile-pic');
const sidePanel = document.querySelector('.side-panel');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

let isRotated = false;

arrowIcon.addEventListener('click', () => {
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    profilePicture.style.width = '8rem';
    nameTitleDiv.classList.remove('hidden');
    
    
    navMenuItems.forEach(item => {
        item.classList.remove('hidden');
    })

  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    profilePicture.style.width = '3rem';
    nameTitleDiv.classList.add('hidden');

    if(sidePanel.classList.contains('w-3/12')){
        sidePanel.classList.replace('w-3/12', 'w-0');
    }
    
    
    
    navMenuItems.forEach(item => {
        item.classList.add('hidden');
    })
    
  }
  isRotated = !isRotated; // Toggle the state


});