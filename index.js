//  function addTask() {
//   let todolist = document.getElementById("taskInput");
//   let list = document.getElementById("texts2");
//   let li = document.createElement("li");
//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   li.className = "todo";
//   li.textContent = todolist.value;
//   li.appendChild(checkbox);
//   list.appendChild(li);
//   todolist.value = "";
//   button.textContent = "X";
//   let button = document.createElement("button");
// }
let todos = [
  { taskName: "Гэрээ цэвэрлэх", isCompleted: false },
  { taskName: "Код бичих", isCompleted: false },
];

let texts2 = document.getElementById("texts2");
let taskInput = document.getElementById("taskInput");

function renderTodos() {
  texts2.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let taskDiv = document.createElement("div");
    let p = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";

    deleteButton.onclick = function () {
      todos.splice(i, 1);
      renderTodos();
    };
    // checkbox.type = "checkbox";
    taskDiv.className = "todo-item";
    p.textContent = todo.taskName;

    taskDiv.appendChild(checkbox);
    checkbox.checked = todo.isCompleted;
    checkbox.onclick = function () {
      todos[i].isCompleted = checkbox.checked;
      console.log(this.checked);
    };
    taskDiv.appendChild(p);
    texts2.appendChild(taskDiv);

    taskDiv.appendChild(deleteButton);
  }
}
renderTodos();
function addTask() {
  if (taskInput.value === "") {
    return;
  }
  todos.push({
    taskName: taskInput.value,
    isCompleted: false,
  });
  taskInput.value = "";
  renderTodos();
}
function filtertodo(value) {
  console.log("value", value);
  if (value === "ALL") {
    renderTodos();
  } else if (value === "Active") {
    texts2.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].isCompleted) {
        let todo = todos[i];
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let taskDiv = document.createElement("div");
        let p = document.createElement("p");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";

        deleteButton.onclick = function () {
          todos.splice(i, 1);
          renderTodos();
        };
        // checkbox.type = "checkbox";
        taskDiv.className = "todo-item";
        p.textContent = todo.taskName;

        taskDiv.appendChild(checkbox);
        checkbox.checked = todo.isCompleted;
        checkbox.onclick = function () {
          todos[i].isCompleted = checkbox.checked;
          console.log(this.checked);
        };
        taskDiv.appendChild(p);
        texts2.appendChild(taskDiv);

        taskDiv.appendChild(deleteButton);
      } else if (todos[i].isCompleted) {
      }
    }
  }
  // if (value==="Complated") {
  //   .appendChild(div);
  // } else {
  //   todoList.appendChild();
  // }
}
// let personas = [
//   {
//     age: 21,
//     gender: "male",
//     phonenumber: 85129161,
//     name: "tsenguun",
//   },
//   {
//     age: 24,
//     gender: "female",
//     phonenumber: 85129166,
//     name: "sarnai",
//   },
//   {
//     age: 25,
//     gender: "male",
//     phonenumber: 85129161,
//     name: "boldooo",
//   },
//   {
//     age: 21,
//     gender: "female",
//     phonenumber: 99999161,
//     name: "oyuka",
//   },
//   {
//     age: 21,
//     gender: "male",
//     phonenumber: 88889161,
//     name: "boldsukh",
//   },
// ];
// for (i = 0; i < personas.length; i++) {
//   // console.log(personas[i].gender);
//   if (personas[i].gender === "male") {
//     console.log(personas[i].gender);
//   }
// }
