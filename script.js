const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
});
