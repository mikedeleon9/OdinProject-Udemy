const welcomeScreen = document.querySelector('.wrapper').innerHTML;
const mainScreen = document.querySelector('.wrapper');
let currentIndex = 0;
let activeCategory = null;




function changeMainScreen(category){

    activeCategory = category;

    mainScreen.innerHTML = `
    
        <div class="left-wrapper left-after">
            <p>Question ${currentIndex +1} of 10</p>
           <p class="question-p-element">${category[currentIndex].question}</p>
           <div class="bar"></div>
        </div>
        <div class="right-wrapper">
           <div class="category">
           <span class="option-div">A</span>
           <p>${category[currentIndex].options[0]}</p>
           </div>
           <div class="category">
           <span class="option-div">B</span>
           <p>${category[currentIndex].options[1]}</p>
           </div>
           <div class="category">
           <span class="option-div">C</span>
           <p>${category[currentIndex].options[2]}</p>
           </div>
           <div class="category">
           <span class="option-div">D</span>
           <p>${category[currentIndex].options[3]}</p>
           </div>
            
           <button onclick="submitAnswer()">Submit answer</button>
          
        </div>
    
    `
};




function submitAnswer(){
    currentIndex++;
    changeMainScreen(activeCategory)
}


