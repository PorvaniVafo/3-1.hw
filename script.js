const img = document.getElementById('image');
const changeButton = document.getElementById('changeImage');
let currentImage = 1;

const imageSources = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg'
];

changeButton.addEventListener('click', function () {
    currentImage = (currentImage % imageSources.length) + 1;

    img.src = imageSources[currentImage - 1];
});