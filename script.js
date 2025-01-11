const arrowIcon = document.querySelector('.arrow');
const nameTitleDiv = document.getElementById('name-title');
const profilePicture = document.querySelector('.profile-pic');
const sidePanel = document.querySelector('.side-panel');
const navMenuItems = document.querySelectorAll('.nav-menu-item');
const listIcon = document.querySelectorAll('.list-icon')

let isRotated = false;

arrowIcon.addEventListener('click', () => {
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    sidePanel.classList.replace('w-24', 'w-3/12');
   
    
    setTimeout(()=> {
        profilePicture.style.width = '8rem';
        nameTitleDiv.classList.remove('hidden');
        navMenuItems.forEach(item => {
            item.classList.remove('hidden');
        })
    }, 300)

  
  

  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    sidePanel.classList.replace('w-3/12', 'w-24');

    setTimeout(()=> {
        nameTitleDiv.classList.add('hidden');
        profilePicture.style.width = '4rem';
        navMenuItems.forEach(item => {
            item.classList.add('hidden');
            
        })
        
    }, 300)
 
    
    listIcon.forEach(icon => {
        icon.addEventListener('mouseover', ()=>{
            icon.setAttribute('fill', "#9fd3c7")
        })
    })
    
    listIcon.forEach(icon => {
        icon.addEventListener('mouseout', ()=>{
            icon.setAttribute('fill', "#5f6368")
        })
    })
    
  }
  isRotated = !isRotated; // Toggle the state


});