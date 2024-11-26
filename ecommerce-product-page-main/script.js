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
   bigImageIndex = 0;
});

// Close modal when clicking on the overlay
const modalOverlay = document.querySelector('.modal-overlay');
modalOverlay.addEventListener('click', () => {
  const modalDiv = document.querySelector('.modal-div');
  modalOverlay.style.display = "none";
  modalDiv.style.display = "none";
  bigImageIndex = 0;
});


//Adding Next/Previous Button Functionality within modal

const secondImages = document.querySelectorAll(".image-2");
const secondMainImage = document.querySelector(".second-big-image");
const previousButton = document.querySelector('.previous-icon-div');
const nextButton = document.querySelector('.next-icon-div');
let bigImageIndex = 0;

previousButton.addEventListener('click', ()=> {
    if(bigImageIndex >=1){
    bigImageIndex--
    secondMainImage.src = `./images/image-product-${bigImageIndex +1 }.jpg`
    }
    
})

nextButton.addEventListener('click', (index)=> {
    if(bigImageIndex < 3){
        bigImageIndex++;
    secondMainImage.src = `./images/image-product-${bigImageIndex +1 }.jpg`
    }
    
})


//Add to cart button functionality
const addToCartButton = document.querySelector('.add-to-cart-button');
const cartDiv = document.querySelector(".cart-div");


addToCartButton.addEventListener('click', () => {

    if(itemNumbers > 0) {
        const cartBadge = document.createElement('div');
        cartBadge.classList.add('cart-badge');
        cartBadge.textContent = itemNumbers;
        cartDiv.appendChild(cartBadge);
    }

})
