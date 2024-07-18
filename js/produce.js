let clickCount = 0;

function handleCalculatorClick() {
    const result = document.querySelector(".result");
    const mobilResult = document.querySelector(".mobilResult");
    const calculatorScreen = document.querySelector(".calculator-screen");
    const boobsScreen = document.querySelector(".boobsScreen");
    const eMailDisplay = document.querySelector(".eMailDisplay");


    if (window.innerWidth > 750) {
        clickCount++;
        if (clickCount === 1) {
            result.classList.add("active");
        } else if (clickCount === 2) {
            calculatorScreen.style.display = "none";
            boobsScreen.style.display = "block";
        }
    } else {
        if (!mobilResult.classList.contains("active")) {
            mobilResult.classList.add("active");
            eMailDisplay.style.display = "none";
        } else {
            mobilResult.classList.remove("active");
            eMailDisplay.style.display = "block";
        }
    }
}

// Removing any existing event listeners to prevent multiple triggers
document.querySelector(".calculator-container").removeEventListener("click", handleCalculatorClick);
document.querySelector(".calculator-container").addEventListener("click", handleCalculatorClick);
