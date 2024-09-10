// .menuItem hover olduğunda .container class'ını değiştiren kod
const menuItems = document.querySelectorAll(".leftMenu .menuItem");
const container = document.querySelector(".container");
const blueNotesIcon = document.querySelector(".notesIcon.blueMode");
const pinkNotesIcon = document.querySelector(".notesIcon.pinkMode");

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

  });

  item.addEventListener("mouseleave", () => {
    container.classList.remove("pinkMode");
    container.classList.add("blueMode");

    // Notes icon değişimi
    blueNotesIcon.classList.add("active");
    pinkNotesIcon.classList.remove("active");

  });
});

document.querySelector(".courseSpan").addEventListener("click", function() {
  if (window.innerWidth < 750) {
      
      if (container.classList.contains("blueMode")) {
          container.classList.remove("blueMode");
          container.classList.add("pinkMode");
          
          blueNotesIcon.classList.remove("active");
          pinkNotesIcon.classList.add("active");

      } else {
          container.classList.remove("pinkMode");
          container.classList.add("blueMode");
          
          pinkNotesIcon.classList.remove("active");
          blueNotesIcon.classList.add("active");

      }
  }
});


hamburgerMenu.addEventListener("click", function () {
  console.log("test");
  container.style.display = 'none';
  mobilMenuContainer.style.display = 'flex';
});

closeMenu.addEventListener("click", function () {
  container.style.display = 'flex';
  mobilMenuContainer.style.display = 'none';
});


