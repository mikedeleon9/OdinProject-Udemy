const images = document.querySelectorAll('.image');
const mainImage = document.querySelector('.big-image');

images.forEach((image, index) => {
    image.addEventListener('click', ()=>{
        images.forEach(i =>{ 
            i.style.opacity = '1';
            i.style.outline = "none";
        });
        image.style.outline = "2px solid hsla(26, 100%, 55%, 0.849)";
        image.style.opacity = '0.3';
        
        mainImage.src = `./images/image-product-${index +1 }.jpg`
    })
})