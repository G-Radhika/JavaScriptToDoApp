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
    var todoDetailsElement = document.createElement('li');
    var title = detailsTitle.innerHTML;
    todoDetailsElement.innerHTML = value;
    var tDetail = value;
    newTask.setTaskDetails(tDetail); //Add taskDetails to OBJ
    document.getElementById('details').appendChild(todoDetailsElement);//Add element
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

//Previous details.
var chk = localStorage.taskList; //if taskList is empty DONT enter!
if(chk){
    var taskList = JSON.parse(localStorage.getItem("taskList")); //previous taskList.
    console.log("todoTitle: ", todoTitle,"taskList: ", taskList);
    currentToDo = String(todoTitle); 
    var e = taskList.includes(currentToDo); //check if taaskList has current page todoTitle
    if(e){
        console.log("IN IF!!!");
        var task = JSON.parse(localStorage.getItem(currentToDo));   
        console.log(task); 
        //previousDetails
        var detailsElement = document.createElement('p');
        detailsElement.innerHTML = task.taskDetails;
        document.getElementById('details').appendChild(detailsElement);
        //previous start date
        var startDateElement = document.createElement('p');
        startDateElement.innerHTML = task.taskStartDate;
        document.getElementById('sDate').appendChild(startDateElement);
        //previous end date
        var endDateElement = document.createElement('p');
        endDateElement.innerHTML = task.taskEndDate;
        document.getElementById('eDate').appendChild(endDateElement);
    }
    /*for (let i = 0; i < taskList.length; i++) {
        var e = taskList[i];
        // should know the current details page.
        strE = String(e);
        console.log(strE);
    
        var tmp = localStorage.getItem(strE);
        sKey = String(tmp);
        let task = JSON.parse(sKey);
        console.log(task.taskDetails);
    
        //previousDetails
        var detailsElement = document.createElement('p');
        detailsElement.innerHTML = task.taskDetails;
        document.getElementById('details').appendChild(detailsElement);
        //previous start date
        var startDateElement = document.createElement('p');
        startDateElement.innerHTML = task.taskStartDate;
        document.getElementById('sDate').appendChild(startDateElement);
        //previous end date
        var endDateElement = document.createElement('p');
        endDateElement.innerHTML = task.taskEndDate;
        document.getElementById('eDate').appendChild(endDateElement);
    }*/
}
