const arrowIcon = document.querySelector('.arrow');
const nameTitleDiv = document.getElementById('name-title');
const profilePicture = document.querySelector('.profile-pic');
const sidePanel = document.querySelector('.side-panel');

let isRotated = false;

arrowIcon.addEventListener('click', () => {
  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';

  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
  }
  isRotated = !isRotated; // Toggle the state


});