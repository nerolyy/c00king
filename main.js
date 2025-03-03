let currentIndex = 0;
const images = [
    'img/zmed-hero.jpg'
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
