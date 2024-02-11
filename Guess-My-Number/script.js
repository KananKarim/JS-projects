"use strict";

let secretNum = Math.trunc(Math.random() * 20 + 1);
let number = document.querySelector(".number");
let score = 20;
const button = document.querySelector(".check");
let messageEl = document.querySelector(".message");
let bodyEl = document.querySelector("body");
let scoreEl = document.querySelector(".score");
let highscoreEl = document.querySelector(".highscore");
console.log(highscoreEl);
let newScore = 0;

button.addEventListener("click", () => {
  const inputEl = Number(document.querySelector(".guess").value);
  if (!inputEl) messageEl.textContent = "not valid number 😊";
  else if (inputEl > secretNum) {
    messageEl.textContent = "too high! 😁";
  } else if (inputEl < secretNum) {
    messageEl.textContent = "too low! 😁";
  } else if (inputEl === secretNum) {
    messageEl.textContent = "Congrats! 👌";
    bodyEl.style.backgroundColor = "green";
    number.style.width = "30rem";
    number.textContent = secretNum;
    button.disabled = true;
    if (newScore < score) {
      newScore = score - 1;
      highscoreEl.textContent = newScore;
    }
  }

  if (score > 1) {
    score -= 1;
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = "You lost the game!";
    scoreEl.textContent = 0;
    bodyEl.style.backgroundColor = "darkred";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  scoreEl.textContent = score;
  messageEl.textContent = "Start Guessing...";
  button.disabled = false;
  bodyEl.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector(".guess").value = ""
});
