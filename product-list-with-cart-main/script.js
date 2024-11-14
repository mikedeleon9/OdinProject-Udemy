const dessertContainer = document.querySelector('.desserts-container');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    
    
    data.forEach((dessert, index) =>{
        const dessertSquare = document.createElement('div');
        dessertSquare.className = 'dessert-item';
        dessertSquare.innerHTML = `
          <img src="${dessert.image.desktop}" /> 
         
          <p class="category">${dessert.category}</p> 
          <p class="dessert-name">${dessert.name}</p>
          <p class="pricing">$${dessert.price.toFixed(2)}</p>
        `
        dessertContainer.appendChild(dessertSquare)
    })
    
})
.catch(error => console.error('Error loading JSON:', error))