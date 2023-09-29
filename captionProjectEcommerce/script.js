const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')   
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')   
    })
}

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 2000); // Ganti 2000 dengan interval yang Anda inginkan (dalam milidetik)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Tampilkan slide pertama saat halaman dimuat dan mulai otomatis
showSlide(currentIndex);
startAutoSlide();
