const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const list = document.getElementById("taskList");

addButton.addEventListener("click", function() {
  if (input.value === "") {
    alert("Please write a task first!");
  } else {
    const item = document.createElement("li");
    item.textContent = input.value;

    item.addEventListener("click", function() {
      item.classList.toggle("completed");
    });

    list.appendChild(item);
    input.value = "";
  }
});
