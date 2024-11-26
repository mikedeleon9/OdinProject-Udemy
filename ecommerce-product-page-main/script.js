//Adding Functionality to cycle through the smaller images
const images = document.querySelectorAll('.image');
const mainImage = document.querySelector('.big-image');
const mainSection = document.querySelector('.main-section');


images.forEach((image, index) => {
    image.addEventListener('click', ()=>{
        images.forEach(i =>{ 
            i.style.opacity = '1';
            i.style.outline = "none";
        });
        image.style.outline = "2px solid hsla(26, 100%, 55%, 0.849)";
        image.style.opacity = '0.3';
        
        mainImage.src = `./images/image-product-${index +1 }.jpg`;
    });
});


//Adding Event Listener to Plus and Minus Buttons to Add to Cart
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const numberOfItems = document.querySelector('.number-of-items');
let itemNumbers = 0;

plusButton.addEventListener('click', ()=> {
    itemNumbers++;
    numberOfItems.textContent = itemNumbers;
});

minusButton.addEventListener('click', () => {
    if(itemNumbers > 0){
        itemNumbers--;
        numberOfItems.textContent = itemNumbers;
    };
});

//Creating Modal that appears when larger image is clicked

mainImage.addEventListener('click', () =>{
    
   const modalDiv = document.querySelector('.modal-div');
   const modalOverlay = document.querySelector('.modal-overlay');
   modalDiv.style.display = "flex";
   modalOverlay.style.display = "block";
   
})

// Close modal when clicking on the overlay
const modalOverlay = document.querySelector('.modal-overlay');
modalOverlay.addEventListener('click', () => {
  const modalDiv = document.querySelector('.modal-div');
  modalOverlay.style.display = "none";
  modalDiv.style.display = "none";
});
