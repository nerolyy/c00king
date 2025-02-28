let currentIndex = 0;
const images = [
    'img/2c6b2f2811efd7b10a5f008d056de23f.jpg',
    'img/bdaeb8589364882e0ae68721eb76085e.jpg', 
    
]

const imgElement = document.querySelector('.recipe-image img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateImage() {
    imgElement.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {

    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateImage();
});

nextButton.addEventListener('click', () => {
    
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage();
});


updateImage();
