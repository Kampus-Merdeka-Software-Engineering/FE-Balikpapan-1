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

const imageContainers = document.querySelectorAll('.image-container');
let activeIndex = 0;

function updateSlides() {
  imageContainers.forEach((container, index) => {
    if (index === activeIndex) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });
}

function slideNext() {
  activeIndex = (activeIndex + 1) % imageContainers.length;
  updateSlides();
}

// Initial setup
updateSlides();

// Set up automatic sliding
setInterval(slideNext, 5000); // Change image every 5 seconds
