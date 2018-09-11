let todos = ["item1", "item2", "item3", "item4"] //array that can display any amount of data
console.log ("My todos: ", todos) //easy way to display things into console (in browser's console)
todos.push ("item5") // this adds a new item to the end of array, pop can delete it (deletes last item)
todos[0] = "item1updated" // you can access an item in array with its index in [], starts at 0 with first item
todos.splice (2, 1) // splice can access desired item in an array and delete it.. first paramater is index number of the item, second paramater is the number of items we need removed