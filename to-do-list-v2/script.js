// Variables for our button, text input and <ul> for tasks
const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// add the function at the start below DOM elements
loadTasks();

function addTask() {
    // trim to avoid inputs consisting of white space, trims it down
    const task = taskInput.value.trim();

    // if statement: if task is not empty, we call the create task element
    // pass the task value, then we clear the input field
    if (task) {
        createTaskElement(task);

        taskInput.value = ' ';

        // calls function that saves to local storage
        saveTasks();

    }
    // warns user if task is empty - prompt box pops up
    else {
        alert("Task can't be empty. \nType one into the text field");
    }
}

// on click, we call the function addTask
addButton.addEventListener('click', addTask);

function createTaskElement(task){
    // creates new li inside ul "taskList"
    const listItem = document.createElement('li');
    // text content from addTask function gets added as a li
    listItem.textContent = task;

    // creates delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'deleteTask';
    // append delete button to each task li
    listItem.appendChild(deleteBtn);

    // need to append the child to the list for it to appear
    taskList.appendChild(listItem);

    /*
    // click on task to mark as done
    listItem.addEventListener('click', function() {
        listItem.style.textDecoration = 'line-through';
    }) 
    */

    // functionality to delete
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
        // makes sure deleted items don't reappear when refreshing browser, by deleting from local storage
        saveTasks();
    });
}

// allows you to store data in local storage. tasks will remain when browser is refreshed.
function saveTasks() {
    let tasks = [];
    // takes all li inside the list, then pushes them to an array
    taskList.querySelectorAll('li').forEach(function(item) {
        // removes the X emoji on each task when it's saved
        tasks.push(item.textContent.replace('❌','').trim());
    });

    // local storage function, sets item to tasks and turns the array into json format
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// loads tasks saved in local storage when you refresh the page
function loadTasks() {
    // reconverts the json object into an array - || or if nothing is inside the array it will be left empty
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // for each array item we get, run function createTaskElement, turn into an array, create li elements then add to the list
    tasks.forEach(createTaskElement);
}
// need to call this function right at the top for it to work ^

// console log to check if li are being recorded
// console.log(taskList);