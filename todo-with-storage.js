// All of this content relates to dark mode.

const toggleswitch = document.querySelector(".lamp");
const bulb = document.querySelector(".bulb");

console.log(document.body.classList.value);
toggleswitch.addEventListener("click", function (e) {
  if (document.body.classList == "") {
    document.body.className = "dark";
    bulb.classList.add("bulbOff");
  } else {
    document.body.classList.remove("dark");
    bulb.classList.remove("bulbOff");
  }
});
// -----------------------------------------------------
// Initializing our variables, one selecting our only form, the other our actual list.
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

// Retrieval
for (let i = 0; i < savedTodos.length; i++) {
  let todo = document.createElement("li");
	todo.innerText = savedTodos[i].task;
	// const newButton = document.createElement("button");
     // newButton.innerText = "remove";
	// newButton.classList.add("remover");
	// todo.append(newButton)
	console.log(savedTodos[i].isCompleted)
	todo.isCompleted = savedTodos[i].isCompleted ? true : false;
	if (todo.isCompleted) {
		todo.classList.add("strike")
	}
  todoList.appendChild(todo);
}

// Add a new todo (by submitting a form)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodoInput = document.querySelector("#new-todo");
  // Here we have some input validation. We do require our todos to be above a length of 0, and we do require them to not be too wordy.
  if (newTodoInput.value.length > 0 && newTodoInput.value.length < 40) {
    const newLi = document.createElement("li");
//     const newButton = document.createElement("button");
//     newButton.innerText = "remove";
//     newButton.classList.add("remover");
    newLi.innerText = newTodoInput.value;
    newLi.isCompleted = false;
    newLi.classList.add("new-li");

    // Local Storage.
    savedTodos.push({ task: newTodoInput.value, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    newLi.addEventListener("click", function () {
      if (newLi.classList.contains("strike")) {
		 newLi.classList.remove("strike");
		 newLi.isCompleted = true;
      } else {
		 newLi.classList.add("strike");
		 newLi.isCompleted = false
	    }
	    for (let i = 0; i < savedTodos.length; i++) {
		    if (savedTodos[i].task === newLi.innerText) {
			    savedTodos[i].isCompleted = !savedTodos[i].isCompelted
			    localStorage.setItem("todos", JSON.stringify(savedTodos))
		    }
	    }
    });

//     newLi.append(newButton);
    todoList.append(newLi);
    form.reset();

    // This is validation, if the user tries to enter nothing as a todo we alert them. If it's too long, we let them know why.
  } else {
    if (newTodoInput.value.length === 0) {
      alert("Enter a todo in the text box!");
    } else {
      alert(
        `Your todo is too long! Try shortening it by ${
          newTodoInput.value.length - 40
        } characters`
      );
    }
  }
});

// Mark a todo as completed (cross out the text of the todo)
// Remove a todo
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
	  event.target.parentElement.remove();
  }
});

//     savedTodos.push({ task: newLi.innerText, isCompleted: false });
//     localStorage.setItem("todos", JSON.stringify(savedTodos));

// Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.
