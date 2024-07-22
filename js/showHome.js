// .menuItem hover olduğunda .container class'ını değiştiren kod
const menuItems = document.querySelectorAll(".leftMenu .menuItem");
const container = document.querySelector(".container");
const blueNotesIcon = document.querySelector(".notesIcon.blueMode");
const pinkNotesIcon = document.querySelector(".notesIcon.pinkMode");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobilMenuContainer = document.querySelector(".mobilMenuContainer");
const closeMenu = document.querySelector(".mobilMenuContainer .closeMenu");

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    container.classList.remove("blueMode");
    container.classList.add("pinkMode");

    // Notes icon değişimi
    blueNotesIcon.classList.remove("active");
    pinkNotesIcon.classList.add("active");

    // Arrow iconlarının background değişimi
    leftArrow.style.backgroundImage = "url('/icons/doubleLeftArrowPink.svg')";
    rightArrow.style.backgroundImage = "url('/icons/doubleRightArrowPink.svg')";
  });

  item.addEventListener("mouseleave", () => {
    container.classList.remove("pinkMode");
    container.classList.add("blueMode");

    // Notes icon değişimi
    blueNotesIcon.classList.add("active");
    pinkNotesIcon.classList.remove("active");

    // Arrow iconlarının background değişimi
    leftArrow.style.backgroundImage = "url('/icons/doubleLeftArrow.svg')";
    rightArrow.style.backgroundImage = "url('/icons/doubleRightArrow.svg')";
  });
});

document.querySelector(".courseSpan").addEventListener("click", function() {
  if (window.innerWidth < 750) {
      // const container = document.querySelector(".container");
      // const blueIcon = document.querySelector(".notesIcon.blueMode.active");
      // const pinkIcon = document.querySelector(".notesIcon.pinkMode");
      
      if (container.classList.contains("blueMode")) {
          container.classList.remove("blueMode");
          container.classList.add("pinkMode");
          
          blueNotesIcon.classList.remove("active");
          pinkNotesIcon.classList.add("active");

          document.querySelector(".arrowBack").style.backgroundImage =
      "url('/icons/ArrowBackPink.svg')";
    document.querySelector(".closeButton").style.backgroundImage =
      "url('/icons/ExitPink.svg')";
    document.querySelector(".arrowForwards").style.backgroundImage =
      "url('/icons/ArrowForwardsPink.svg')";
      } else {
          container.classList.remove("pinkMode");
          container.classList.add("blueMode");
          
          pinkNotesIcon.classList.remove("active");
          blueNotesIcon.classList.add("active");

          document.querySelector(".arrowBack").style.backgroundImage =
      "url('/icons/ArrowBack.svg')";
    document.querySelector(".closeButton").style.backgroundImage =
      "url('/icons/Exit.svg')";
    document.querySelector(".arrowForwards").style.backgroundImage =
      "url('/icons/ArrowForwards.svg')";
      }
  }
});


hamburgerMenu.addEventListener("click", function () {
  container.style.display = 'none';
  mobilMenuContainer.style.display = 'flex';
});

closeMenu.addEventListener("click", function () {
  container.style.display = 'flex';
  mobilMenuContainer.style.display = 'none';
});


