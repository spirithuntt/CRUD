// /**
//  * In this file app.js you will find all CRUD functions name.
//  * 
//  */
//to submit
document.getElementById('form').reset();
let typetmp;
let saveBtn = document.getElementById("button-save");
let Title = document.getElementById("recipient-name");
let feature = document.getElementById("feature");
let bug = document.getElementById("bug");
let Priority = document.getElementById("recipient-Priority");
let Status = document.getElementById("recipient-Status");
let recipientDate = document.getElementById("recipient-Date");
let Description = document.getElementById("message-text");

// ----------------------------------------------------------
// ----------------------------------------------------------

//hide the update button in add task
document.getElementById("addbtn").addEventListener("click", btnswitch);
function btnswitch()//SWITCH BUTTONS
 {
    document.getElementById('form').reset();
    saveBtn.style.display='block';
    document.getElementById("update-button").style.display='none';
    document.getElementById("delete-btn").style.display='none';
    let msg = document.getElementById("errormsg");
    console.log('teeee')
}
// validation(succes or failure)
function taskValidation(){
  if(Title.value === "" || Status.value === "" || Priority.value === "" || recipientDate.value === "" || Description.value === ""){
    console.log("failure");
    Title.classList.add("is-invalid");
    Status.classList.add("is-invalid");
    Priority.classList.add("is-invalid");
    recipientDate.classList.add("is-invalid");
    Description.classList.add("is-invalid");
    errormsg.innerHTML = "Please enter a Title in the Title area.";
    errormsg.classList.add("invalid-feedback");

  }
  else{console.log("success");
  errormsg.innerHTML = "";
  saveTask();//
  document.getElementById("close-button").click();
  }
};
reloadTasks();//

//  function createTask() {
// //     // initialiser task form
// initTaskForm();
// //     // Afficher le boutton save

// //     // Ouvrir modal form
    
//  }

function saveTask() {
    // Recuperer task attributes a partir les champs input
    // Créez task object
    
    if (feature.checked) {
        typetmp = "Feature";
        } else {
        typetmp = "Bug";
        }
        // Ajoutez object au Array
    tasks.push({
    "title" : Title.value,//value of input 
    "type": typetmp,
    "priority" : Priority.value,
    "status" : Status.value,
    "date" : recipientDate.value,
    "description" : Description.value,
    });
    document.getElementById("close-button").click();
    // refresh tasks
reloadTasks();
}
let nmb;
 function editTask(index) {
    // Initialisez task form
    Title.classList.remove("is-invalid");
    Status.classList.remove("is-invalid");
    Priority.classList.remove("is-invalid");
    recipientDate.classList.remove("is-invalid");
    Description.classList.remove("is-invalid");

    errormsg.innerHTML = ""
document.getElementById('form').reset();

document.querySelector('#button-save').style.display='none';
document.getElementById("update-button").style.display='block';
document.getElementById("delete-btn").style.display='block';


//     // Affichez updates

//     // Delete Button

//     // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
nmb = index;
console.log(index);

    // Definir FORM INPUTS
Title.value = tasks[index].title;
Priority.value = tasks[index].priority;
Description.value = tasks[index].description;
recipientDate.value = tasks[index].date;
Status.value = tasks[index].status;

if (tasks[index].type == "Bug"){bug.checked=true}//if the type is bug check bug
}
 function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS
    let typetmp;
if (feature.checked) {
    typetmp = "Feature";
    } else {
    typetmp = "Bug";
    }
//     // Créez task object
let data={
    'title': Title.value,
    'type': typetmp,
    'priority': Priority.value,
    'status':  Status.value,
    'date': recipientDate.value,
    'description': Description.value,
  }
  console.log(data);
  console.log(nmb);
//     // Remplacer ancienne task par nouvelle task
tasks[nmb] = data;
console.log(nmb);
    // Fermer Modal form
document.getElementById("close-button").click();
// refresh tasks
reloadTasks();
}

  function deleteTask() {
// //     // Get index of task in the array

    // Remove task from array by index splice function
    tasks.splice(nmb,1);
    // close modal form
    document.getElementById("close-button").click(); //jQuery
    // refresh tasks
    reloadTasks();

}

// function initTaskForm() {
//     // Clear task form from data
//form.reset();
//     // Hide all action buttons
// }
function reloadTasks() {
    // Remove tasks elements
    document.getElementById('form').reset();
    document.getElementById('to-do-tasks').innerHTML = '<!-- TO DO TASKS HERE -->';
    document.getElementById('in-progress-tasks').innerHTML = '<!-- IN PROGRESS TASKS HERE -->';
    document.getElementById('done-tasks').innerHTML = '<!-- DONE TASKS HERE -->';
    // Set Task count
 let test;
let doing = 0;
let done = 0;
let todo = 0;
let taskCount = 1;
for (let i = 0; i < tasks.length; i++) {
    
    if (tasks[i].status === "To Do") {
        document.getElementById('to-do-tasks').innerHTML += `<button data-bs-toggle="modal"data-bs-target="#modal" onclick="editTask(${taskCount-1})"class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="bi bi-question-circle text-success fs-4"></i></div><div class="text-start ms-3 w-75"><div class="fw-bold fs-5">${tasks[i].title}</div><div class=""><div class="text-black-50">#${taskCount} created in ${tasks[i].date}</div><div class="mb-2 text-truncate">${tasks[i].description}</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">${tasks[i].priority}</span><span class="btn bg-light-600  btn-xs">${tasks[i].type}</span></div></div></button>`;
        taskCount++;
        todo++;
    }else if (tasks[i].status === "In Progress") {
        document.getElementById('in-progress-tasks').innerHTML += `<button data-bs-toggle="modal"data-bs-target="#modal" onclick="editTask(${taskCount-1})"class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="spinner-border spinner-border-sm text-success"></i></div><div class="text-start ms-3 w-75"><div class="fw-bold fs-5">${tasks[i].title}</div><div class=""><div class="text-black-50">#${taskCount} created in ${tasks[i].date}</div><div class="mb-2 text-truncate">${tasks[i].description}</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">${tasks[i].priority}</span><span class="btn bg-light-600  btn-xs">${tasks[i].type}</span></div></div></button>`;

        taskCount++;
        doing++;
    }
    else if (tasks[i].status === "Done") {
        document.getElementById('done-tasks').innerHTML += `<button data-bs-toggle="modal"data-bs-target="#modal" onclick="editTask(${taskCount-1})"class="border w-100 bg-white p-2 d-flex"> <div class="ms-3"><i class="bi bi-check-circle text-success fs-4"></i></div><div class="text-start ms-3 w-75"><div class="fw-bold fs-5">${tasks[i].title}</div><div class=""><div class="text-black-50">#${taskCount} created in ${tasks[i].date}</div><div class="mb-2 text-truncate">${tasks[i].description}</div></div><div class=""><span class="btn btn-primary btn-sm btn-xs">${tasks[i].priority}</span><span class="btn bg-light-600  btn-xs">${tasks[i].type}</span></div></div></button>`;

        taskCount++;
        done++;
    }
}
//counter
document.getElementById('to-do-tasks-count').innerHTML = todo;
document.getElementById('in-progress-tasks-count').innerHTML = doing;
document.getElementById('done-tasks-count').innerHTML = done;
}
