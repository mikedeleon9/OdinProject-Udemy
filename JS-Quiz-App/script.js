const welcomeScreen = document.querySelector('.wrapper').innerHTML;
const mainScreen = document.querySelector('.wrapper');
let currentIndex = 0;
let activeCategory = null;
let score = 0;



function changeMainScreen(category){

    activeCategory = category;

    mainScreen.innerHTML = `
    
        <div class="left-wrapper left-after">
            <p>Question ${currentIndex +1} of 10</p>
           <p class="question-p-element">${category[currentIndex].question}</p>
            ${category[currentIndex].picture ? `<img class="conditional-image" src="${category[currentIndex].picture}" alt="Question Image"/>` : ''}
           <div class="bar"></div>
           <img />
        </div>
        <div class="right-wrapper">
           <div class="category choice">
           <p>${category[currentIndex].options[0]}</p>
           </div>
           <div class="category choice">
           <p>${category[currentIndex].options[1]}</p>
           </div>
           <div class="category choice">
           <p>${category[currentIndex].options[2]}</p>
           </div>
           <div class="category choice">
           <p>${category[currentIndex].options[3]}</p>
           </div>
            
           <button onclick="submitAnswer()">Submit answer</button>
          
        </div>
        <button class="restart-button" onclick="restartQuiz()">Restart</button>
    `

    const answerChoices = document.querySelectorAll('.choice');

answerChoices.forEach(choice => {
    choice.addEventListener('click', () => {
        answerChoices.forEach(answer => answer.classList.remove('answer-selected'));
       
        choice.classList.add('answer-selected');
    })
})



};

function restartQuiz() {
    mainScreen.innerHTML = welcomeScreen;
    score = 0;
    currentIndex = 0;
}


function submitAnswer(){
    const selectedAnswer = document.querySelector('.answer-selected');
    const correctAnswer = activeCategory[currentIndex].correct;
    const answerChoices = document.querySelectorAll('.choice');


    if(selectedAnswer.textContent.trim() === correctAnswer){
        selectedAnswer.classList.add('correct-answer');
        score++;
    }
    else{
        selectedAnswer.classList.add('incorrect-answer');

        answerChoices.forEach(choice => {
            if (choice.textContent.trim() === correctAnswer){
                choice.classList.add('correct-blink')
            }
        })
    
    }

    currentIndex++;

    if (currentIndex < activeCategory.length ) {
        setTimeout(() => {
            changeMainScreen(activeCategory)
           },  1200);
           
    } else {
        setTimeout(()=> {
            mainScreen.innerHTML = `<p>You've completed all the questions for this category! Your Score is ${score}</p>`;
        }, 1000);
        
    }
    
 
    
}


