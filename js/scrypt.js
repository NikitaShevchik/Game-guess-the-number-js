"use strict"

const inputNumber = document.querySelector(".guessnumber__input");
const confirmButton = document.querySelector(".guessnumber__submit");
const resultText = document.querySelector(".guessnumber__result");
const winConfetti = document.querySelector(".confetti");

function randomNumber() {
    return Number((Math.random() * 100).toFixed(0));
}

var computerNumber = randomNumber();
var tryCounter = 0;
console.log(computerNumber);

confirmButton.addEventListener("click", analysNumber);

function analysNumber() {
    var playerNumber = Number(inputNumber.value);
    if (playerNumber === computerNumber) {
        tryCounter++;
        winConfetti.classList.remove("_block")
        resultText.innerHTML = `<p>Вы угадали! Компьютер загадал число <span class="guessnumber__computer">${computerNumber}</span></p>
        <p>Вы угадали с <span class="guessnumber__counter">${tryCounter}</span> раза!</p>`
    } else if (playerNumber > computerNumber) {
        tryCounter++;
        resultText.innerHTML = "Загаданное число меньше"
    } else if (playerNumber < computerNumber) {
        tryCounter++;
        resultText.innerHTML = "Загаданное число больше"
    }
}