let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

// Función para mover al testimonio anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Función para mover al testimonio siguiente
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Mover automáticamente entre testimonios cada 5 segundos
function autoSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Iniciar el carrusel automático
setInterval(autoSlide, 5000); // Cambia cada 5 segundos

// Inicializar la vista del primer testimonio
showTestimonial(currentIndex);