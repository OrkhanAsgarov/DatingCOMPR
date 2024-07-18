let clickCount = 0;
let isMobileActive = false; 

function handleCalculatorClick() {
    const result = document.querySelector(".result");
    const mobilResult = document.querySelector(".mobilResult");
    const calculatorScreen = document.querySelector(".calculator-screen");
    const boobsScreen = document.querySelector(".boobsScreen");

    if (window.innerWidth > 750) {
        clickCount++;
        if (clickCount === 1) {
            result.classList.add("active");
        } else if (clickCount === 2) {
            calculatorScreen.style.display = "none";
            boobsScreen.style.display = "block";
        }
    } else {
        if (!isMobileActive) {
            mobilResult.classList.add("active"); 
            isMobileActive = true; 
        } else {
            mobilResult.classList.remove("active"); 
            isMobileActive = false; 
        }
    }
}

document.querySelector(".calculator-container").addEventListener("click", handleCalculatorClick);
