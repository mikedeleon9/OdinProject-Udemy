const welcomeScreen = document.querySelector('.wrapper').innerHTML;
const mainScreen = document.querySelector('.wrapper');
let currentIndex = 0;





function changeMainScreen(category){
    mainScreen.innerHTML = `
    <div class="wrapper">
        <div class="left-wrapper">
           <p>${category[currentIndex].question}</p>
        </div>
        <div class="right-wrapper">
           <p>${category[currentIndex].options[0]}</p>
           <p>${category[currentIndex].options[1]}</p>
           <p>${category[currentIndex].options[2]}</p>
           <p>${category[currentIndex].options[3]}</p>
            
        </div>
    </div>
    
    `
}


