class TaskDetails {
    constructor(taskTitle) {
        this.taskTitle = taskTitle;
        this.taskDetails = '';
        this.taskStartDate = undefined;
        this.taskEndDate = undefined;
    }
    //getter and setter methods.
    setTaskDetails(tDetail) {
        this.taskDetails = tDetail;
    }
    setStartDate(sDate) {
        this.taskStartDate = sDate;
    }
    setEndDate(eDate) {
        this.taskEndDate = eDate;
    }
}

var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

var todoTitle = sPageURL.split('=')[1];//got title here.{details.taskTitle}

//currentToDo = String(todoTitle); 
var title = localStorage.getItem(todoTitle);
if (title) {
    var task = JSON.parse(localStorage.getItem(todoTitle));
    console.log(task);
    //previousDetails
    document.getElementById('taskDetails').value = task.taskDetails;
    //previous start date
    document.getElementById('startDate').value = task.taskStartDate;
    //previous end date
    document.getElementById('endDate').value = task.taskEndDate;
}

var newTask = new TaskDetails(todoTitle);
//Date: listing on the click on 'saveDate' button
document.getElementById('saveDate').addEventListener('click', function () {
    sDate = document.getElementById("startDate").value;
    eDate = document.getElementById("endDate").value;
    newTask.setStartDate(sDate);//Add START DATE to OBJ
    document.getElementById('startDate').value = sDate;
    newTask.setEndDate(eDate);//Add END DATE to OBJ
    document.getElementById('endDate').value = eDate;
});

// Back 
document.getElementById('back').addEventListener('click', function (event) {
    var currentLocation = location.href;
    var splitCurrentLoc = currentLocation.split('details.html');
    var backHome = splitCurrentLoc[0] + 'index.html';
    window.location.href = backHome;
    //Storing OBJ
    localStorage.setItem(newTask.taskTitle, JSON.stringify(newTask));
});

// Done.
document.getElementById('done').addEventListener('click', function (event) {
    var currentLocation = location.href;
    var splitCurrentLoc = currentLocation.split('details.html');
    var backHome = splitCurrentLoc[0] + 'index.html';
    window.location.href = backHome;
    //Task is completed.
    this.style.setProperty("text-decoration", "line-through");
});

var detailsTitle = document.createElement("h2");
detailsTitle.innerHTML = todoTitle;

detailsTitle.setAttribute("id", "h2");
detailsTitle.id = title;
document.getElementById('title').appendChild(detailsTitle);

//Add details to the ToDo task
document.getElementById('detailsSave').addEventListener('click', function (event) {
    event.preventDefault();
    var value = document.getElementById('taskDetails').value;
    if (value) {
        addTodoDetails(value);
    }
    document.getElementById("taskDetails").value = "";
});

function addTodoDetails(value) {
    var detailsText = value;
    newTask.setTaskDetails(detailsText); //Add taskDetails to OBJ
    document.getElementById('taskDetails').value = detailsText;//Add element
    localStorage.setItem(title, detailsText); //title : details.
};