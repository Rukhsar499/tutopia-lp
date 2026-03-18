const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].clientWidth; // Get the width of one slide

  // Shift the entire slider by the width of one slide (negative for left)
  slider.style.transform = `translateX(${-slideWidth * index}px)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Add click event to dots to switch slides
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Initial display
showSlide(currentSlide);