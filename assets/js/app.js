// /**
//  * In this file app.js you will find all CRUD functions name.
//  * 
//  */
//to submit
document.getElementById('hamid').reset();
let task = document.getElementById("button-save");
let Title = document.getElementById("recipient-name");
// let exampleRadios1 = document.getElementById("exampleRadios1");
// let exampleRadios2 = document.getElementById("exampleRadios2");
let Priority = document.getElementById("recipient-Priority");
let Status = document.getElementById("recipient-Status");
let recipientDate = document.getElementById("recipient-Date");
let Description = document.getElementById("message-text");

//check 
let msg = document.getElementById("errormsg");
let ToDoTasks = document.getElementById("to-do-tasks");
    task.addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log("button clicked");
        taskValidation();
    });
       
// validation(succes or failure)
let taskValidation = ()=>{
  if(Title.value === ""){
    console.log("failure");
    errormsg.innerHTML = "Title cannot be blank";
  }
  else{console.log("success");
  errormsg.innerHTML = "";
  saveTask();
  }
}
reloadTasks();

// function createTask() {
//     // initialiser task form
initTaskForm();
//     // Afficher le boutton save

//     // Ouvrir modal form
    
// }

function saveTask() {
//     // Recuperer task attributes a partir les champs input

//     // Créez task object

//     // Ajoutez object au Array
tasks.push({
  "title" : Title.value,
  "priority" : Priority.value,
  "status" : Status.value,
  "date" : recipientDate.value,
  "description" : Description.value,
  });
//     // refresh tasks
reloadTasks();
}

// function editTask(index) {
//     // Initialisez task form
initTaskForm();
//     // Affichez updates

//     // Delete Button

//     // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

//     // Definir FORM INPUTS

//     // Ouvrir Modal form
// }

// function updateTask() {
//     // GET TASK ATTRIBUTES FROM INPUTS

//     // Créez task object

//     // Remplacer ancienne task par nouvelle task

//     // Fermer Modal form

//     // Refresh tasks
    
// }

// function deleteTask() {
//     // Get index of task in the array

//     // Remove task from array by index splice function

//     // close modal form

//     // refresh tasks
// }

// function initTaskForm() {
//     // Clear task form from data
form.reset();
//     // Hide all action buttons
// }

function reloadTasks() {
    // Remove tasks elements
    document.getElementById('to-do-tasks').innerHTML = '<!-- TO DO TASKS HERE -->';
    document.getElementById('in-progress-tasks').innerHTML = '<!-- IN PROGRESS TASKS HERE -->';
    document.getElementById('done-tasks').innerHTML = '<!-- DONE TASKS HERE -->';
    // Set Task count
    var test;
var doing = 0;
var done = 0;
var todo = 0;
console.log(tasks.length);
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "To Do") {
        test = '<button class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="bi bi-question-circle text-success fs-4"></i></div><div class="text-start ms-3"><div class="fw-bold fs-5">'+tasks[i].title+'</div><div class=""><div class="text-black-50">#1 '+tasks[i].date+'</div><div class="mb-2">'+tasks[i].description+'</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">'+tasks[i].priority+'</span><span class="btn bg-light-600  btn-xs">'+tasks[i].type+'</span></div></div></button>';
        document.getElementById('to-do-tasks').innerHTML += test;
        todo++;
    }else if (tasks[i].status === "In Progress") {
        test = '<button class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="bi bi-question-circle text-success fs-4"></i></div><div class="text-start ms-3"><div class="fw-bold fs-5">'+tasks[i].title+'</div><div class=""><div class="text-black-50">#1 '+tasks[i].date+'</div><div class="mb-2">'+tasks[i].description+'</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">'+tasks[i].priority+'</span><span class="btn bg-light-600  btn-xs">'+tasks[i].type+'</span></div></div></button>';
        document.getElementById('in-progress-tasks').innerHTML += test;
        doing++;
    }
    else if (tasks[i].status === "Done") {
        test = '<button class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="bi bi-question-circle text-success fs-4"></i></div><div class="text-start ms-3"><div class="fw-bold fs-5">'+tasks[i].title+'</div><div class=""><div class="text-black-50">#1 '+tasks[i].date+'</div><div class="mb-2">'+tasks[i].description+'</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">'+tasks[i].priority+'</span><span class="btn bg-light-600  btn-xs">'+tasks[i].type+'</span></div></div></button>';
        document.getElementById('done-tasks').innerHTML += test;
        done++;
    }
}
//counter
document.getElementById('to-do-tasks-count').innerHTML = todo;
document.getElementById('in-progress-tasks-count').innerHTML = doing;
document.getElementById('done-tasks-count').innerHTML = done;
}