var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
};

buttonE1.addEventListener("click", createTaskHandler); //find button, execute createTaskHandler with event







/*
//pseudo code
//var btn = window.document.querySelector("button");
//var buttonE1 = document.querySelector("#save-task");
//console.log(buttonE1);
//document.querySelector(".btn");

//find the button object
//find the li element and clone it
//var listEl = document.querySelector("#");
//var ... = document.createElement("li"); //createElement creats li's here when executed 
//... .textContent ="";
//... .className ="list-group-item";

buttonE1.addEventListener("click", function(){
    var listItemE1 = document.querySelector("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
});

*/