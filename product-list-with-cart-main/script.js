const dessertContainer = document.querySelector('.desserts-container');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    const dessertContainer = document.querySelector('.desserts-container');
    data.forEach((dessert, index) =>{
        const dessertSquare = document.createElement('div');
        dessertSquare.className = 'dessert-item';
        dessertSquare.innerHTML = `
          <img src="${dessert.image.desktop}" /> 
          <p>${dessert.category}</p> 
          <h3>${dessert.name}</h3>
        
        `
        dessertContainer.appendChild(dessertSquare)
    })
    
})
.catch(error => console.error('Error loading JSON:', error))