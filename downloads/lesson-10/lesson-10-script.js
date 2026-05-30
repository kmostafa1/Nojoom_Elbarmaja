const title = document.getElementById("title");
const message = document.getElementById("message");
const changeButton = document.getElementById("changeButton");
const colorButton = document.getElementById("colorButton");

changeButton.addEventListener("click", function() {
  message.textContent = "You clicked the button!";
});

colorButton.addEventListener("click", function() {
  title.style.color = "purple";
  document.body.style.backgroundColor = "lightyellow";
});
