const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const API_URL = "https://balikpapan-1-api.up.railway.app";

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
setInterval(slideNext, 5000);


const remove = document.querySelectorAll('#addedProduct')
close.forEach(function(el) {
  el.addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
      e.preventDefault();
      e.stopPropagation();
  });
});



// fetch('http://localhost:3000/api/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

