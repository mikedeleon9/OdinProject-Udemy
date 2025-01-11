const arrowIcon = document.querySelector('.arrow');
const nameTitleDiv = document.getElementById('name-title');
const profilePicture = document.querySelector('.profile-pic');
const sidePanel = document.querySelector('.side-panel');

let isRotated = false;

arrowIcon.addEventListener('click', () => {
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    profilePicture.style.width = '8rem';
    nameTitleDiv.classList.remove('hidden');

  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    profilePicture.style.width = '3rem';
    nameTitleDiv.classList.add('hidden');
    sidePanel.classList.remove('w-3/12');
  }
  isRotated = !isRotated; // Toggle the state


});