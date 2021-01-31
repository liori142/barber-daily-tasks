let typesArray = ['גוונים', 'תספורת גבר/ילד', 'החלקה', 'צבע', 'אומברה']


function addTypes() {
    typesArray.forEach(type => {
        if (type == 'תספורת גבר/ילד') {
            document.getElementById('priority').innerHTML += `<option selected value="${type}">${type}</option>`
        } else {
            document.getElementById('priority').innerHTML += `<option value="${type}">${type}</option>`
        }
    });
}

function addNavBar() {
    document.getElementById("navId").innerHTML = `<img src="note2.png" width="60px" alt="">
   <ul class="navbar-nav mr-auto">
       <li class="nav-item">
       <a class="nav-link" href="#">Daily Notes</a>
       </li>
   </ul>
   <ul class="navbar-nav ml-auto">
       <li class="nav-item">
       <a class="nav-link mr-4" href="index.html">Home</a>
       </li>

       <li class="nav-item">
       <a class="nav-link mr-4" href="add.html">Add Entry</a>
       </li>
   </ul>`
}
function addTasks(){
    document.getElementById('containerId').innerHTML = `<h2 class="page-header">Add Task</h2>
    <!-- Form -->
<form action="index.html" role="form" id="add-task-form">
    <!-- Name -->
    <div class="form-group">
      <label>שם</label>
      <input type="text" class="form-control" id="task">
    </div>
    <!-- Type -->
    <div class="form-group" id="typeId">
      <label>סוג טיפול</label>
      <select class="form-control" id="priority">
    </select>
    </div>
    <!-- Amount -->
    <div class="form-group">
      <label>כמות</label><br>
      <input type="number" value='1' id="amountId" min="1">
    </div>
    <!-- Date -->
    <div class="form-group">
        <label>תאריך</label>
        <input type="date" class="form-control" id="date">
      </div>
      <!-- Hour -->
      <div class="form-group">
        <label>שעה</label>
        <input type="time" class="form-control" id="time">
      </div>
    <button type="submit" class="btn btn-default bg-primary text-light">Submit</button>
  </form>`
}
function editTasks(){
    document.getElementById('containerId').innerHTML = `<h2 class="page-header">Edit Task</h2>
    <!-- Form -->
    <form action="index.html" role="form" id="edit-task-form">
      <!-- Name -->
      <div class="form-group">
        <label>שם</label>
        <input type="text" class="form-control" id="task" placeholder="Enter Task">
      </div>
      <!-- Type -->
      <div class="form-group">
        <label>סוג טיפול</label>
        <select class="form-control" id="priority">
        </select>
      </div>
      <!-- Amount -->
      <div class="form-group">
        <label>כמות</label><br>
        <input type="number" value='1' id="amountId" min="1">
      </div>
      <!-- Date -->
      <div class="form-group">
        <label>תאריך</label>
        <input type="date" class="form-control" id="date">
      </div>
      <!-- Hour -->
      <div class="form-group">
        <label>שעה</label>
        <input type="time" class="form-control" id="time">
      </div>

      <input type="hidden" value="" id="task_id">
      <button type="submit" class="btn btn-default bg-primary text-light">Submit</button>
    </form>`
}

function addMainContent(){
   
    if(document.getElementById('titleId').innerHTML == 'Add Task'){
    addTasks()
    }else if(document.getElementById('titleId').innerHTML == 'Edit Task'){
    editTasks()
    }
}


addNavBar()
addMainContent()
addTypes();