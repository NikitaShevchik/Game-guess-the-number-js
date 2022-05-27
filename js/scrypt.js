"use strict"
/*--------DOM--------*/
const inputNumber = document.querySelector(".guessnumber__input");
const confirmButton = document.querySelector(".guessnumber__submit");
const resultText = document.querySelector(".guessnumber__result");
const winConfetti = document.querySelector(".confetti");
const restartButton = document.querySelector(".guessnumber__restart");
const gameTitle = document.querySelector(".guessnumber__title");
/*--------RANDOM NUMBER GENERATOR--------*/
function randomNumber() {
    return Number((Math.random() * 100).toFixed(0));
};
/*--------DECLARATION RANDOM NUMBER + TRY COUNTER--------*/
var computerNumber = randomNumber();
var tryCounter = 0;
/*--------EVENTS (CLICK ON BUTTON + ENTER)--------*/
confirmButton.addEventListener("click", analysNumber);
inputNumber.addEventListener("keyup", enterInput);
function enterInput(e) {
    if (e.key == "Enter") {
        analysNumber();
    }
};
/*--------MAIN FUNCTION ANALYS INPUT NUMBER--------*/
function analysNumber() {
    var playerNumber = Number(inputNumber.value);
    if (playerNumber === computerNumber) {
        inputNumber.removeEventListener("keyup", enterInput);
        inputNumber.setAttribute("disabled", "disabled");
        tryCounter++;
        winConfetti.classList.remove("_block");
        confirmButton.classList.add("_hide");
        restartButton.classList.remove("_hide");
        gameTitle.innerHTML = "Вы победили!";
        resultText.innerHTML = `<p>Вы угадали! Компьютер загадал число <span class="guessnumber__computer">${computerNumber}</span></p>
        <p>Вы угадали с <span class="guessnumber__counter">${tryCounter}</span> раза!</p>`
    } else if (playerNumber > computerNumber) {
        tryCounter++;
        resultText.innerHTML = "Загаданное число меньше"
    } else if (playerNumber < computerNumber) {
        tryCounter++;
        resultText.innerHTML = "Загаданное число больше"
    }
};
/*--------RESTART GAME--------*/
restartButton.addEventListener("click", restartPage);
function restartPage() {
    location.reload();
}
