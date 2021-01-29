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

window.onload = function () {
    addNavBar();
    addTypes();
}