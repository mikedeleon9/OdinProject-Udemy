const dessertContainer = document.querySelector('.desserts-container');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    
    
    data.forEach((dessert, index) =>{
        const dessertSquare = document.createElement('div');
        dessertSquare.className = 'dessert-item';
        dessertSquare.innerHTML = `
          <img src="${dessert.image.desktop}" /> 
          <p>${dessert.category}</p> 
          <p>${dessert.name}</p>
        
        `
        dessertContainer.appendChild(dessertSquare)
    })
    
})
.catch(error => console.error('Error loading JSON:', error))