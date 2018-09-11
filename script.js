let todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function () {
        console.log ("My todos: ", this.todos);
    }, // this is a method (a function which is a property of an object) that displays todos.. since we don't have variables set up in an object, we use this keyword to access properties in current object
    addTodo: function (newTodo) {
        this.todos.push (newTodo);
        this.displayTodos()
    }, // this method adds a new todo with name given, it accesses todos array and displayTodos method with this keyword - we're in the object
    editTodo: function (position, newTodo) {
        this.todos[position] = newTodo;
        this.displayTodos();
    }, // method edits a function at given position with the newTodo value and then displays todo (to be practical and see changes immediately)
    deleteTodo: function (position) {
        this.todos.splice (position, 1);
        this.displayTodos();
    } // this method deletes a todo at given position
}; // this is an object which has property that is set to an array of items, it's a good thing to be programming with OOP in mind (object oriented programming) = cleaner code
    // it also has a few methods which execute things and then always display the list for clarity and practicality

