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
  const backVideoBtn = document.querySelector(".backVideoBtn");
  const nextVideoBtn = document.querySelector(".nextVideoBtn");
  const sectionContainer = document.querySelector(".sectionContainer");

  let videos = [
    {
      "name": "vSpencer",
      "file": "vspencer.mp4",
      "location": "Millburn, New Jersey",
      "age": "33",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    {
      "name": "Hollis",
      "file": "hollis.mov",
      "location": "Millburn, New Jersey",
      "age": "36",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    {
      "name": "Rick",
      "file": "rick.mov",
      "location": "Millburn, New Jersey",
      "age": "30",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    
    {
      "name": "Sam",
      "file": "sam.mp4",
      "location": "Millburn, New Jersey",
      "age": "30",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    {
      "name": "Lauryn",
      "file": "lauryn.mp4",
      "location": "Millburn, New Jersey",
      "age": "28",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    {
      "name": "Daniel",
      "file": "daniel.mov",
      "location": "Millburn, New Jersey",
      "age": "34",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    },
    
    {
      "name": "Kendrick",
      "file": "kendrick.mov",
      "location": "Millburn, New Jersey",
      "age": "37",
      "comments": [
        "SingleGal1990: OMG Bliss is adorable. If she’s single, there’s really no hope for me.",
        "JustBeinMe: @SingleGal1990 Facts.",
        "ARTthrob: I meeeeean... I’d date her.",
        "GanchasaurausFlex: Adorbs"
      ]
    }
  ];

  let currentVideoIndex = 0;

  const yearbookImages = document.querySelectorAll(".yearbookContainer .content img");

  function initializeYearbookImages() {
    yearbookImages.forEach((image, index) => {
      image.addEventListener("click", function() {
        const name = image.nextElementSibling.textContent.split(",")[0].trim();
        const videoData = videos.find(video => video.name.toLowerCase() === name.toLowerCase());
        sectionContainer.classList.add("videoOpen");

        if (videoData) {
          currentVideoIndex = videos.indexOf(videoData);
          videoElement.src = `/video/meetTheDates/${videoData.file}`;
          videoElement.parentElement.load(); // Reload the video element

          sectionRow.style.display = 'none';
          selectedRow.style.display = 'flex';

          if (window.innerWidth <= 750) {
            header.style.display = 'none'; // Hide header
            xButton.classList.add("mobileView");
          }

          videoTitle.textContent = videoData.name.toUpperCase() + ", " + videoData.age;
          videoText.textContent = videoData.location;

          displayComments(videoData.comments);
        }
      });
    });
  }

  function displayComments(comments) {
    recentNotes.innerHTML = '';
    comments.forEach(comment => {
      const commentElement = document.createElement('span');
      commentElement.classList.add('comment');
      commentElement.textContent = comment;
      recentNotes.appendChild(commentElement);
    });
  }

  xButton.addEventListener("click", function () {
    sectionRow.style.display = 'flex';
    selectedRow.style.display = 'none';
    sectionContainer.classList.remove("videoOpen");

    if (window.innerWidth <= 750) {
      header.style.display = 'flex'; // Show header
      xButton.classList.remove("mobileView");
    }
  });

  backVideoBtn.addEventListener("click", function() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      const videoData = videos[currentVideoIndex];
      videoElement.src = `/video/meetTheDates/${videoData.file}`;
      videoElement.parentElement.load();
      videoTitle.textContent = videoData.name.toUpperCase() + ", " + videoData.age;
      videoText.textContent = videoData.location;
      displayComments(videoData.comments);
    }
  });

  nextVideoBtn.addEventListener("click", function() {
    if (currentVideoIndex < videos.length - 1) {
      currentVideoIndex++;
      const videoData = videos[currentVideoIndex];
      videoElement.src = `/video/meetTheDates/${videoData.file}`;
      videoElement.parentElement.load();
      videoTitle.textContent = videoData.name.toUpperCase() + ", " + videoData.age;
      videoText.textContent = videoData.location;
      displayComments(videoData.comments);
    }
  });

  submitButton.addEventListener("click", function () {
    if(nameInput.value.length > 0 && noteText.value.length > 0){
      const currentVideoName = videoTitle.textContent.split(",")[0].toLowerCase();
      const videoData = videos.find(video => video.name.toLowerCase() === currentVideoName);

      if (videoData) {
        const newComment = `${nameInput.value}: ${noteText.value}`;
        videoData.comments.push(newComment);
        displayComments(videoData.comments);
        noteText.value = ''; // Clear the input field
        leaveContainer.style.display = 'none';
        succesContainer.style.display = 'flex';

        setTimeout(() => {
          succesContainer.style.display = 'none';
          leaveContainer.style.display = 'flex';
        }, 3000); // 3 seconds
      }
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

  initializeYearbookImages();
});

