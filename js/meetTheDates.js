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



