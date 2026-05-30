let secretNumber = 7;

const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let guess = Number(input.value);

  if (guess === secretNumber) {
    result.textContent = "Correct! You guessed the number!";
    result.style.color = "green";
  } else if (guess > secretNumber) {
    result.textContent = "Too high! Try again.";
    result.style.color = "orange";
  } else {
    result.textContent = "Too low! Try again.";
    result.style.color = "blue";
  }
});
