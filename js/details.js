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

var newTask = new TaskDetails(todoTitle);
//Date: listing on the click on 'saveDate' button
document.getElementById('saveDate').addEventListener('click', function () {
    sDate = document.getElementById("startDate").value;
    eDate = document.getElementById("endDate").value;

    newTask.setStartDate(sDate);//Add START DATE to OBJ
    displayStartDate(sDate);

    newTask.setEndDate(eDate);//Add END DATE to OBJ
    displayEndDate(eDate);
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
    var todoDetailsElement = document.createElement("p");
    var title = detailsTitle.innerHTML;
    todoDetailsElement.innerHTML = value;
    var tDetail = value;
    newTask.setTaskDetails(tDetail); //Add taskDetails to OBJ
    //console.log("newTask.taskDetails: ",newTask.taskDetails);
    document.getElementById('pDetails').appendChild(todoDetailsElement);//Add element
    localStorage.setItem(title, value); //title : details.
};

function displayStartDate(sDate) {
    var startDateElement = document.createElement('p');
    startDateElement.innerHTML = sDate;
    document.getElementById('sDate').appendChild(startDateElement);//Add element to list
};
function displayEndDate(eDate) {
    var endDateElement = document.createElement('p');
    endDateElement.innerHTML = eDate;
    document.getElementById('eDate').appendChild(endDateElement);//Add element to list
};

//Check previous newTask.
var previousDetails = localStorage.getItem("taskList");//previousDetails is an ARRAY.
console.log("previousDetails: ", previousDetails);
/* if(newTask.taskTitle){
    var details = JSON.parse(localStorage.getItem(this.newTask.taskTitle));
    console.log("details : ", details);
    //var todoDetails = document.createElement("li");
    //todoDetails.innerHTML = details;
    //document.getElementById('details').appendChild(todoDetails);
} */
for (let i = 0; i < previousDetails.length; i++) {
    console.log("previousDetails.length : ",previousDetails.length);
    console.log("this.newTask.taskTitle : ",this.newTask.taskTitle);
    var details = newTask.TaskDetails;
    console.log("details : ", details);
    var todoDetails = document.createElement("li");
    todoDetails.innerHTML = details;
    document.getElementById('details').appendChild(todoDetails);

 /*   var todoStartDate = newTask.taskStartDate;
    var todoStartDate = document.createElement("li");
    todoStartDate.innerHTML = details;
    document.getElementById('sDate').appendChild(todoStartDate);

    var todoEndDate = newTask.taskEndDate;
    var todoEndDate = document.createElement("li");
    todoStartDate.innerHTML = details;
    document.getElementById('eDate').appendChild(todoEndDate);*/
}
