let todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push ({
            todoText: todoText,
            completed: false
        });
    }, // this method now adds objects which can be used to store various datas and not just plain text, it also stores info whether the todo is completed or not
    editTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    }, // method edits a function at given position with the todoText value (just for the name/text, it won't edit whole object, just the name of it) and then displays todo (to be practical and see changes immediately)
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    }, // this method deletes a todo at given position
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed != todo.completed;
    }, // this method takes a position of todo we want, and then flips the property of it (completed) to opposite of what it currently is
    toggleAll: function() {
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
    } // this method toggles all objects completed or vice versa
}; // this is an object which has property that is set to an array of items, it's a good thing to be programming with OOP in mind (object oriented programming) = cleaner code
   // it also has a few methods which execute things and then always display the list for clarity and practicality

let inputHandlers =  {
    addTodo: function() {
        let addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        userView.displayTodos();
    },
    editTodo: function() {
        let editTodoPositionInput = document.getElementById("editTodoPositionInput");
        let editTodoTextInput = document.getElementById("editTodoTextInput");
        todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
        editTodoPositionInput.value = "";
        editTodoTextInput.value = "";
        userView.displayTodos();
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        userView.displayTodos();
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        userView.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        userView.displayTodos();
    }
}; // created a new object that will handle input from user and run methods accordingly

let userView = {
    displayTodos: function() {
        let todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement("li");
            let todo = todoList.todos[i];
            let todoTextWithStatus = "";
            if (todo.completed === true) {
                todoTextWithStatus = "(X) " + todo.todoText
            } else {
                todoTextWithStatus = "( ) " + todo.todoText
            }
            todoLi.textContent = todoTextWithStatus;
            todosUl.appendChild(todoLi);
        }
    }, // this method looks for unordered list in .html and then creates a list item in it for each item in our todo list and shows its name and status
}; // this object handles output for user to view, we no longer need to have any looks into console, so we deleted our previous viewing functionalities that outputed to console