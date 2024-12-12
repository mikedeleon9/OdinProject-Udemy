const welcomeScreen = document.querySelector('.wrapper').innerHTML;
const mainScreen = document.querySelector('.wrapper');
let currentIndex = 0;





function changeMainScreen(category){
    mainScreen.innerHTML = `
    
        <div class="left-wrapper">
           <p class="question-p-element">${category[currentIndex].question}</p>
           <div class="bar"></div>
        </div>
        <div class="right-wrapper">
           <p>${category[currentIndex].options[0]}</p>
           <p>${category[currentIndex].options[1]}</p>
           <p>${category[currentIndex].options[2]}</p>
           <p>${category[currentIndex].options[3]}</p>
            
           <button>Submit answer</button>
        </div>
        
    
    
    `
}


