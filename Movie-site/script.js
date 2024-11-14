const api_key = "6e25a0897fa0a1b4190163bd654a0ae2";
const url = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`
const mainContainer = document.querySelector('.main-container');


async function fetchData() {
   
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      mainContainer.innerHTML = `
      <h2>${data.title}</h2>
      <p>Release Date: ${data.release_date}</p>
      <p>Rating: ${data.vote_average}</p>
      <p>${data.overview}</p>
  `;
    } catch (error) {
      console.error('Error:', error);
    }

   
  }
  
  fetchData();

 
  