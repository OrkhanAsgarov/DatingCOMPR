let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let totalSlides = slides.length;
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  if (n > totalSlides) {slideIndex = 1}
  if (n < 1) {slideIndex = totalSlides}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "rotate(0deg)";  // Reset rotation
  }

  slides[slideIndex - 1].style.display = "block";
  let rotateDegree = getRandomRotation();
  slides[slideIndex - 1].style.transform = `rotate(${rotateDegree}deg)`;
  if (window.innerWidth > 750) {
  slides[slideIndex - 1].querySelector(".numbertext").innerText = `ABOUT (${slideIndex} of ${totalSlides})`;
  } else {
    slides[slideIndex - 1].querySelector(".numbertext").innerText = `ABOUT ${slideIndex} / ${totalSlides}`;
  }

  // Hide or show buttons
  if (slideIndex === 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (slideIndex === totalSlides) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

function getRandomRotation() {
  return Math.floor(Math.random() * 7) - 3; // Random degree between -3 and 3
}
