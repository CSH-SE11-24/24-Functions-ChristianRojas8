const prompt = require('prompt-sync')()
let tasks = []
// FUNCTION DEFINITIONS
// Write a function called addTask that takes in task as a parameter 
// The function should add the task to the end of the tasks array (push()) and console.log task + " added"
function addTask(task) {
  tasks.push(task);
  console.log(task+" added");
}



// Write a function called printTasks (no parameters) that console logs the tasks array

function printTasks(){
  console.log(tasks);
}

// Write a function called firstTask (no parameters) that returns the first element of the tasks array
function firstTask() {
  return tasks[0];
}


// Write a function called completeFirst (no parameters) that removes the first element (shift()) of the tasks array
 function completeFirst() {
   task.shift();
 }


// FUNCTION CALLS
while (true) {
  console.log("Current tasks")
  // Call printTasks
printTasks();
  
  // Prompt the user on what they want to do
let user = prompt("What do you want to do? ")
  
  // If the user says "add task", prompt the user on their task 
  // and call addTask with their task
if(user === "add task") {
  let newTask = prompt("Enter the task: ");
  addTask(newTask);
}

  
  // Else if user says "first task", call firstTask 
  // and console log the return value
else if(user === "first task") {
  console.log(firstTask());
}


  // Else if user says "complete first", call completeFirst
else if(user === "complete first"){
  completeFirst();
}


  // Else, says "I don't know how to do that! Try again."
else {
  console.log("I don't know how to do that! Try again.");
}


}
