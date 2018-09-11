let todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log ("The list is empty")
        } else {
            console.log ("My todos: ");
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos.completed === true) {
                    console.log ("(X)", this.todos[i].todoText);
                } else {
                    console.log ("( )", this.todos[i].todoText);
                }
            }
        }
    }, // now the method only display todo text instead of whole object and it also shows its completition status (as text), and also tells you if you don't have any objects in your list
    addTodo: function (todoText) {
        this.todos.push ({
            todoText: todoText,
            completed: false
        });
        this.displayTodos()
    }, // this method now adds objects which can be used to store various datas and not just plain text, it also stores info whether the todo is completed or not
    editTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    }, // method edits a function at given position with the todoText value (just for the name/text, it won't edit whole object, just the name of it) and then displays todo (to be practical and see changes immediately)
    deleteTodo: function (position) {
        this.todos.splice (position, 1);
        this.displayTodos();
    }, // this method deletes a todo at given position
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed != todo.completed;
        this.displayTodos();
    }, // this method takes a position of todo we want, and then flips the property of it (completed) to opposite of what it currently is
    toggleAll: function () {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        } // this for loop go through whole array to find todos with completed status, and if so, adds them to count
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else { // if all todos on list are completed, this marks them all as opposite
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        } // if at least one item is not completed, it marks all as true
        this.displayTodos();
    } // this method toggles all objects completed or vice versa
}; // this is an object which has property that is set to an array of items, it's a good thing to be programming with OOP in mind (object oriented programming) = cleaner code
    // it also has a few methods which execute things and then always display the list for clarity and practicality