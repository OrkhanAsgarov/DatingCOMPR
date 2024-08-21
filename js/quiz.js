const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobilMenuContainer = document.querySelector(".mobilMenuContainer");
const closeMenu = document.querySelector(".mobilMenuContainer .closeMenu");

hamburgerMenu.addEventListener("click", function () {
  container.style.display = "none";
  mobilMenuContainer.style.display = "flex";
});

closeMenu.addEventListener("click", function () {
  container.style.display = "flex";
  mobilMenuContainer.style.display = "none";
});

// Handle secretLink click
const secretLink = document.querySelector(".secretLink");
const compatibilityRow = document.querySelector(".compatibilityRow");
const formRow = document.querySelector(".formRow");

secretLink.addEventListener("click", function () {
  compatibilityRow.classList.remove("active");
  formRow.classList.add("active");
});

// Single Select
const singleSelect = document.querySelector(".custom-select.singleselect");
const singleSelectUl = document.querySelector(".selectUl.singleselect-list");
const singleSelectPlaceholder = document.querySelector(
  ".selectPlaceholder.single"
);
const singleUpIcon = document.querySelector(".singleUp");

singleUpIcon.addEventListener("click", function () {
  singleSelect.classList.remove("active");
  singleSelectUl.classList.remove("active");
});

document.addEventListener("click", function (event) {
  // Eğer multiselect ve multiselectUl aktifse ve tıklanan element bu elementlerin dışındaysa
  if (
    singleSelect.classList.contains("active") &&
    !singleSelect.contains(event.target) &&
    !singleSelectUl.contains(event.target)
  ) {
    singleSelect.classList.remove("active");
    singleSelectUl.classList.remove("active");
  }
});

singleSelect.addEventListener("click", function (event) {
  singleSelect.classList.add("active");
  singleSelectUl.classList.add("active");
});

singleSelectUl.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-item")) {
    singleSelectPlaceholder.textContent = "";
    singleSelectPlaceholder.classList.add("choosen");
    singleSelectPlaceholder.textContent = event.target.textContent;
    singleSelectUl.classList.remove("active");
    singleSelect.classList.remove("active");
  }
  checkFormCompletion();
});

//Multi Select
const multiSelect = document.querySelector(".custom-select.multiselect");
const multiSelectUl = document.querySelector(".selectUl.multiselect-list");
const multiSelectPlaceholder = document.querySelector(
  ".selectPlaceholder.multi"
);
const multiSelectItems = document.querySelectorAll(
  ".multiselect-list  .select-list"
);
const multiUpIcon = document.querySelector(".multiUp");

multiUpIcon.addEventListener("click", function () {
  multiSelect.classList.remove("active");
  multiSelectUl.classList.remove("active");
});

document.addEventListener("click", function (event) {
  // Eğer multiselect ve multiselectUl aktifse ve tıklanan element bu elementlerin dışındaysa
  if (
    multiSelect.classList.contains("active") &&
    !multiSelect.contains(event.target) &&
    !multiSelectUl.contains(event.target)
  ) {
    multiSelect.classList.remove("active");
    multiSelectUl.classList.remove("active");
  }
});

multiSelect.addEventListener("click", function (event) {
  multiSelect.classList.add("active");
  multiSelectUl.classList.add("active");
});

multiSelectItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const selectedAny = document.querySelector(".multi.choosen");

    const checkbox = item.querySelector(".checkbox");
    const itemText = item.querySelector(".list-item").textContent;

    if (checkbox.classList.contains("selected")) {
      checkbox.classList.remove("selected");
      let content = multiSelectPlaceholder.textContent;

      if (content.includes(", " + itemText)) {
        multiSelectPlaceholder.textContent = content
          .replace(" , " + itemText, "")
          .trim();
      } else if (content.includes(itemText + " , ")) {
        multiSelectPlaceholder.textContent = content
          .replace(itemText + " , ", "")
          .trim();
      } else {
        multiSelectPlaceholder.textContent = "Select all that apply";
        multiSelectPlaceholder.classList.remove("choosen");
      }
    } else {
      checkbox.classList.add("selected");

      if (!selectedAny) {
        multiSelectPlaceholder.classList.add("choosen");
        multiSelectPlaceholder.textContent = "";
        multiSelectPlaceholder.textContent += " " + itemText;
      } else {
        multiSelectPlaceholder.textContent += " , " + itemText;
      }
    }

    multiSelectPlaceholder.textContent =
      multiSelectPlaceholder.textContent.trim();
    checkFormCompletion();
  });
});

// Handle form inputs dynamically
const formItems = document.querySelectorAll(
  ".form-item input, .form-item .select-list"
);
const btnBegin = document.querySelector(".btnBegin");

formItems.forEach((item) => {
  item.addEventListener("input", checkFormCompletion);
  item.addEventListener("click", checkFormCompletion);
});

function checkFormCompletion() {
  const allFilled = [...formItems].every((input) => {
    if (input.tagName === "INPUT") {
      return input.value.length > 0;
    } else if (
      document.querySelector(".single.choosen") &&
      document.querySelector(".multi.choosen")
    ) {
      return true;
    }
    return false;
  });

  if (allFilled) {
    btnBegin.classList.add("active");
  } else {
    btnBegin.classList.remove("active");
  }
}

// Handle btnBegin click
btnBegin.addEventListener("click", function (event) {
  if (btnBegin.classList.contains("active")) {
    event.preventDefault();
    formRow.classList.remove("active");
    document.querySelector(".questions-container").classList.add("active");
    document.querySelector(".question-bar").classList.add("active");
  }

  if (window.innerWidth <= 750) {
    document.querySelector(".compatibilityContainer").classList.add("mobileQuestion");
    document.querySelector(".timerContainer").classList.add("mobileQuestion");
  } else {
    document.querySelector(".compatibilityContainer").classList.add("desktopuestion");

  }
});

const questions = document.querySelectorAll(".question-content");
const questionNumber = document.querySelector(".question-number");
const questionTotal = document.querySelector(".question-total");

questionTotal.textContent = questions.length;

let currentQuestionIndex = 0;

function updateQuestionNumber() {
  questionNumber.textContent = currentQuestionIndex + 1;
}

function updateActiveQuestion() {
  questions.forEach((question, index) => {
    if (index === currentQuestionIndex) {
      question.classList.add("active");
    } else {
      question.classList.remove("active");
    }
  });
}

updateActiveQuestion(); // Initialize the first question as active

const answerItems = document.querySelectorAll(".answer-item");

answerItems.forEach((item) => {
  item.addEventListener("click", function () {
    answerItems.forEach((ans) =>
      ans.querySelector(".answer-checkbox").classList.remove("selected")
    );
    this.querySelector(".answer-checkbox").classList.add("selected");

    nextQuestionButton.classList.add("active"); // Activate next question button
  });
});

const nextQuestionButton = document.querySelector(".next-question-button");
const backQuestionButton = document.querySelector(".back-question-button");

function updateProgressBar() {
  const progressBarItem = document.querySelector(".bar-item");
  const progressWidth = (100 / questions.length) * (currentQuestionIndex + 1);
  progressBarItem.style.width = `${progressWidth}%`;
}

// İlk başta ilerleme çubuğunu güncelleyin
updateProgressBar();

nextQuestionButton.addEventListener("click", function (e) {
  if (this.classList.contains("active")) {
    e.preventDefault();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateQuestionNumber();
      updateActiveQuestion();
      updateProgressBar();
      this.classList.remove("active");

      if (currentQuestionIndex >= 1) {
        document.querySelector(".back-question-button").classList.add("active");
      }
    } else {
      // Son soru cevaplandığında
      if (window.innerWidth <= 750) {
        document.querySelector(".compatibilityContainer").classList.remove("mobileQuestion");
        document.querySelector(".timerContainer").classList.remove("mobileQuestion");
      } else {
      container.style.backgroundColor = "#FEDDDE";
      }
      document.querySelector(".questions-container").classList.remove("active");
      document.querySelector(".quizComplete-row").classList.add("active");
    }
  }
});


backQuestionButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestionNumber();
    updateActiveQuestion();
    updateProgressBar();
    nextQuestionButton.classList.remove("active");

    if (currentQuestionIndex === 0) {
      backQuestionButton.classList.remove("active");
      
    }
  }
});


  
  nextQuestionButton.addEventListener("mouseover", function () {
    if (window.innerWidth > 750){
      container.classList.remove("greenMode");
      container.classList.add("pinkMode");
    }

  });

  nextQuestionButton.addEventListener("mouseout", function () {
    if (window.innerWidth > 750){
      container.classList.remove("pinkMode");
    container.classList.add("greenMode");
    }
    
  });





