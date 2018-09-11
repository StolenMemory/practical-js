let todos = ["item1", "item2", "item3", "item4"]
function displayTodos () {
    console.log ("My todos: ", todos);
} // this function displays todos without needing to console.log all of the time

function addTodo (todo) {
    todos.push (todo);
    displayTodos();
} // this add a todo with name given to it, also displays full list of todos immediately afterwards

function editTodo (position, newTodo) {
    todos[position] = newTodo;
    displayTodos();
} // this function edits todo in the array according to position given and then changes it to new value with second parameter

function deleteTodo (position) {
    todos.splice (position, 1);
    displayTodos();
} // this functions delete todo at the given position