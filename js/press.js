let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.grid-area');
  if (index >= slides.length) {
    currentIndex = slides.length - 1;
  } else if (index < 0) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  
  slides.forEach((slide, i) => {
    if (i <= currentIndex) {
      slide.style.display = 'flex';
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Başlangıçta ilk slaytı göster
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});
