let todoList = {
    todos: [],
    displayTodos: function () {
        console.log ("My todos: ", this.todos);
    }, // this is a method (a function which is a property of an object) that displays todos.. since we don't have variables set up in an object, we use this keyword to access properties in current object
    addTodo: function (newTodo) {
        this.todos.push ({
            newTodo: newTodo,
            completed: false
        });
        this.displayTodos()
    }, // this method now adds objects which can be used to store various datas and not just plain text, it also stores info whether the todo is completed or not
    editTodo: function (position, newTodo) {
        this.todos[position].newTodo = newTodo;
        this.displayTodos();
    }, // method edits a function at given position with the newTodo value (just for the name/text, it won't edit whole object, just the name of it) and then displays todo (to be practical and see changes immediately)
    deleteTodo: function (position) {
        this.todos.splice (position, 1);
        this.displayTodos();
    }, // this method deletes a todo at given position
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed != todo.completed;
        this.displayTodos();
    } // this method takes a position of todo we want, and then flips the property of it (completed) to opposite of what it currently is
}; // this is an object which has property that is set to an array of items, it's a good thing to be programming with OOP in mind (object oriented programming) = cleaner code
    // it also has a few methods which execute things and then always display the list for clarity and practicality