const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobilMenuContainer = document.querySelector(".mobilMenuContainer");
const closeMenu = document.querySelector(".mobilMenuContainer .closeMenu");




hamburgerMenu.addEventListener("click", function () {
  container.style.display = 'none';
  mobilMenuContainer.style.display = 'flex';
});

closeMenu.addEventListener("click", function () {
  container.style.display = 'flex';
  mobilMenuContainer.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
  const sectionRow = document.querySelector(".sectionRow");
  const selectedRow = document.querySelector(".selectedRow");
  const xButton = document.querySelector(".xButton");
  const videoElement = document.querySelector(".videoContainer video source");
  const videoTitle = document.querySelector(".videoTitle");
  const videoText = document.querySelector(".videoText");
  const submitButton = document.querySelector(".noteBtnContainer button");
  const leaveContainer = document.querySelector(".leaveContainer");
  const succesContainer = document.querySelector(".succesContainer");
  const nameInput = document.querySelector(".name");
  const noteText = document.querySelector(".noteText");
  const noteBtnContainer = document.querySelector(".noteBtnContainer");
  const recentNotes = document.querySelector(".recentNotes");
  const header = document.querySelector("header");

  const yearbookImages = document.querySelectorAll(".yearbookContainer .content img");

  yearbookImages.forEach(image => {
    image.addEventListener("click", function() {
      const name = image.nextElementSibling.textContent.split(",")[0].trim();
      const videoFileName = name.toLowerCase() + (name === 'Sam' || name === 'Lauryn' || name === 'vSpencer' ? '.mp4' : '.mov');

      videoElement.src = `/video/meetTheDates/${videoFileName}`;
      videoElement.parentElement.load(); // Reload the video element

      sectionRow.style.display = 'none';
      selectedRow.style.display = 'flex';
      

      if (window.innerWidth <= 750) {
        header.style.display = 'none'; // Hide header
        xButton.classList.add("mobileView");
      }

      videoTitle.textContent = name.toUpperCase() + ", " + image.nextElementSibling.textContent.split(",")[1].trim();
      videoText.textContent = "Millburn, New Jersey"; // You can update this to fetch dynamic content based on the person
    });
  });

  xButton.addEventListener("click", function () {
    sectionRow.style.display = 'flex';
    selectedRow.style.display = 'none';

    if (window.innerWidth <= 750) {
      header.style.display = 'flex'; // Show header
      xButton.classList.remove("mobileView");
    }
  });

  if (window.innerWidth <= 750) {
    function toggleButtonState() {
      if (nameInput.value.length > 0 && noteText.value.length > 0) {
        noteBtnContainer.classList.add('active');
      } else {
        noteBtnContainer.classList.remove('active');
      }
    }

    nameInput.addEventListener("input", toggleButtonState);
    noteText.addEventListener("input", toggleButtonState);
  }

  submitButton.addEventListener("click", function () {
    if(nameInput.value.length > 0 && noteText.value.length > 0){
      leaveContainer.style.display = 'none';
      succesContainer.style.display = 'flex';
      recentNotes.innerHTML += `<span>${nameInput.value}: ${noteText.value}</span>`;
    } 
  });
});






