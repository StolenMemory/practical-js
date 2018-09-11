// a handful of additional functions/notes to better understand possibilities of JS

function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}


// you can set a timeout in milisecs for your functions to run after
setTimeout(function() {
    console.log("Wake up!");
}, 5000)

// forEach is a more nuanced, better version of for loop for arrays, it is a method each array has
let students = ["Adam", "Samko", "Marko"];
function logName(name) {
    console.log(name);
}
students.forEach(logName)

// forEach method functions like this
function forEach(myArray, myFunction) {
    for (let i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

// so you could use it as so and it would function exactly like forEach method
forEach(students, logName)

// you can grab any element you have highlighted on web by using $0
// every DOM element has method event listener, it listens for input (which you can select) and then adds a function of our choice that enhances it
let highlightedElement = $0;
highlightedElement.addEventListener("click", function() {
    console.log("the element was clicked");
});

// you can also see the detail of the event (in this case click) if you choose so
highlightedElement.addEventListener("click", function(event) {
    console.log(event)
    console.log("the element was clicked");
});

