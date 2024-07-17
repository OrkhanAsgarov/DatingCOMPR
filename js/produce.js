console.log("produce");

function showResult() {
  const result = document.querySelector(".result");
  const mobilResult = document.querySelector(".mobilResult");

  if (window.innerWidth > 750) {
    result.style.display = "flex";
  } else {
    mobilResult.style.display = "block";
  }
}

document.querySelector(".calculator-container").addEventListener("click", showResult);
