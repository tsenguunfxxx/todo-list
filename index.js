let todolist = document.getElementById("taskInput");
let hello = document.getElementById("texts2");
let value = todolist.value;
function addTask() {
  console.log(hello);
  console.log("input", todolist.value);
  let list = document.createElement("list");
  list.textContent = value;
  console.log(todolist.value);
  hello.innerHTML = `
  <p>${todolist.value}</p>
  `;
}
