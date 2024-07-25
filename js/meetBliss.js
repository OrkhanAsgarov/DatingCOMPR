const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobilMenuContainer = document.querySelector(".mobilMenuContainer");
const closeMenu = document.querySelector(".mobilMenuContainer .closeMenu");
const submitButton = document.querySelector(".noteBtnContainer button");
const leaveContainer = document.querySelector(".leaveContainer");
const succesContainer = document.querySelector(".succesContainer");
const nameInput = document.querySelector(".name");
const noteText = document.querySelector(".noteText");
const noteBtnContainer = document.querySelector(".noteBtnContainer");
const recentNotes = document.querySelector(".recentNotes");




hamburgerMenu.addEventListener("click", function () {
  container.style.display = 'none';
  mobilMenuContainer.style.display = 'flex';
});

closeMenu.addEventListener("click", function () {
  container.style.display = 'flex';
  mobilMenuContainer.style.display = 'none';
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
    recentNotes.innerHTML += nameInput.value + ": " + noteText.value;
  } 
  
})


