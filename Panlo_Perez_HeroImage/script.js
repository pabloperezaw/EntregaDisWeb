let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const buttons = document.querySelectorAll(".carousel-buttons button");

function changeSlide(index) {
    slides[currentSlide].classList.remove("active");
    buttons[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    buttons[currentSlide].classList.add("active");
}


// Inicializar el primer botón activo
buttons[currentSlide].classList.add("active");
