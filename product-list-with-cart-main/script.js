const dessertContainer = document.querySelector('.desserts-container');
const cartContainer = document.querySelector('.cart-container')
let numberOfItemsInCart = 0;
let cartArray = [];
let buttonClicked = false;
let orderNumber = 1;

fetch('./data.json')
.then(response => response.json())
.then(data => {
    
   
    
    data.forEach((dessert, index) =>{
        const dessertSquare = document.createElement('div');
        dessertSquare.className = 'dessert-item';
        dessertSquare.innerHTML = `
          <img src="${dessert.image.desktop}" /> 
          <div class="add-to-cart-button"><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg></span class="cart-text">Add to cart</div>
          <p class="category">${dessert.category}</p> 
          <p class="dessert-name">${dessert.name}</p>
          <p class="pricing">$${dessert.price.toFixed(2)}</p>
        `
        dessertContainer.appendChild(dessertSquare);
        
    })
    //Adding H2 Add To Cart to Your Cart
    cartContainer.innerHTML = `
        <h3 class="yourCartTexth3">Your Cart (${numberOfItemsInCart})</h3>
        <div class="cart-inner-container">
        <svg class="empty-brownie-image" xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>
        </div>
        `

    //Adding button functionality
    const addToCartButton = document.querySelectorAll('.add-to-cart-button');
    addToCartButton.forEach((button, index) => {

        button.addEventListener('click', () => {
           const dessertName = button.closest('.dessert-item').querySelector('.dessert-name').textContent;
           const dessertPrice = button.closest('.dessert-item').querySelector('.pricing').textContent;
           
         

        if(!cartArray.includes(dessertName)){
            cartArray.push(dessertName);
            numberOfItemsInCart++;
            
           
                button.classList.add('buttonIsClicked');
                button.innerHTML = `
                <div class="clickedButton">
                <div class="circle decreaseOrder">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                </div>
                <span class="quantity-ordered">${orderNumber}</span>
                <div class="circle increaseOrder">
               <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                </div>
                </div>
                `
          

            //adding event listener to increase/decrease buttons
            const decreaseButton = button.querySelector('.decreaseOrder');
            const increaseButton = button.querySelector('.increaseOrder');
            const quantityOrdered = button.querySelector('.quantity-ordered');
           

            decreaseButton.addEventListener('click', (e) => {
                e.stopPropagation();
                if(orderNumber > 1){
                   orderNumber--;
                   quantityOrdered.textContent = orderNumber;
                   
                }
                else{
                    cartArray = cartArray.filter(item => item !== dessertName);
                    buttonClicked = false;
                    numberOfItemsInCart--;
                    button.classList.remove('buttonIsClicked');
                    button.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg></span class="cart-text">Add to cart`;
                    
                }
            });

            increaseButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    orderNumber++;
                    quantityOrdered.textContent = orderNumber;

            })

            updateCart(dessertName, dessertPrice);
        }
        })
    })

  
    function updateCart(dessert, price){
        const cartInnerContainer = document.querySelector('.cart-inner-container');
        const emptyImage = document.querySelector('.empty-brownie-image');
       
        if(orderNumber <= 0){
            emptyImage.style.display = 'block';
        }
        else{
            emptyImage.style.display = 'none';
        }
       
       cartArray.forEach(item => {

        const innerContainerArray = Array.from(cartInnerContainer);

        if(!innerContainerArray.some(child => child.textContent === item)){

            const cartItem = document.createElement('div');
            cartItem.classList.add('cartItem');
    
            cartItem.innerHTML = `
                
            <p>${dessert}</p>
            <p>@${price}</p>
        `
        cartInnerContainer.appendChild(cartItem)
        }
      
       })
       
       

        document.querySelector('.yourCartTexth3').textContent = `Your Cart(${numberOfItemsInCart})`;
       
       
        
       
        
    }
    
})
.catch(error => console.error('Error loading JSON:', error))