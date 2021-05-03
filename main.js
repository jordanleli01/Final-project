let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodo, false);

class todo {
    constructor(text, complete) {
        this.text = text;
        this.complete = complete;
    }
}

let todoList =[];


function addTodo() {
    let todoInput = document.getElementById("todo").value;

    let newTodo = new todo(todoInput, false);
    todoList[todoList.length] = newTodo;

    let newTodop = document.createElement("p"),
        newTodoCheckb = document.createElement("button"),
        newTodoDelb = document.createElement("button");

    newTodop.innerHTML = todoInput;
    newTodoCheckb.innerHTML = "Check" ;
    newTodoDelb.innerHTML = "x";

    let main = document.getElementById("todo-list");
    main.appendChild(newTodop);
    main.appendChild(newTodoCheckb);
    main.appendChild(newTodoDelb);

    newTodoCheckb.addEventListener("click", function checkListen() {
        newTodo.complete = "true";
        newTodop.innerHTML = "<del>" + todoInput + "</del>";
    },false);

    newTodoDelb.addEventListener("click", function checkdel() {
        newTodoCheckb.parentNode.removeChild(newTodoCheckb);
        newTodoDelb.parentNode.removeChild(newTodoDelb);
        newTodop.parentNode.removeChild(newTodop);

        for (let i = 0; i < todoList.length; i++) {
            if(todoList[i].text == todoInput) {
                todoList.splice(i,i);
            }
        }
    },false)
    }