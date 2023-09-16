
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);

}

function addTodo(todo) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        alert("Please enter")
    }else {
        addTodoTuUI(inputText);
    }
    todo.preventDefault();
}

function addTodoTuUI (newTodo) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newTodo;
    todoList.appendChild(li);
    addInput.value = "";
                    
}