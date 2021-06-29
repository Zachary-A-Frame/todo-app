// All of this content relates to dark mode.

const toggleswitch = document.querySelector(".lamp")
const bulb = document.querySelector(".bulb")

console.log(document.body.classList.value)
toggleswitch.addEventListener("click", function (e) {
  if (document.body.classList == "") {
    document.body.className = "dark"
    bulb.classList.add("bulbOff")
  } else {
    document.body.classList.remove("dark")
    bulb.classList.remove("bulbOff")
  }
});
// -----------------------------------------------------
// Initializing our variables, one selecting our only form, the other our actual list.
const form = document.querySelector("form")
const todoList = document.querySelector("#todo-list")


// Add a new todo (by submitting a form)

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const newTodoInput = document.querySelector("#new-todo")
  // Here we have some input validation. We do require our todos to be above a length of 0, and we do require them to not be too wordy.
  if (newTodoInput.value.length > 0 && newTodoInput.value.length < 40) {
    const newLi = document.createElement("li")
    const newButton = document.createElement("button")
    newButton.innerText = "remove"
    newButton.classList.add("remover")
    newLi.innerText = newTodoInput.value
    newLi.isCompleted = false
    newLi.classList.add("new-li")

    newLi.addEventListener("click", function () {
      if (newLi.classList.contains("strike")) {
        newLi.classList.remove("strike")

      } else {
        newLi.classList.add("strike")

      }
    });

    newLi.append(newButton)
    todoList.append(newLi)
    form.reset();

    // This is validation, if the user tries to enter nothing as a todo we alert them. If it's too long, we let them know why.
  } else {
    if (newTodoInput.value.length === 0) {
      alert("Enter a todo in the text box!")
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
    event.target.parentElement.remove()
  }
});


