class TaskDetails {
    constructor(taskTitle) {
        this.taskTitle = taskTitle;
        this.taskDetails = '';
        this.taskStartDate = '';
        this.taskEndDate = '';
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
console.log(todoTitle);
//db.collection is populated with previous localStorage data.
var previousTask = JSON.parse(localStorage.getItem(todoTitle));
console.log("previousTask:  ",previousTask);
if (previousTask) {    
    //previousDetails, Start Date and End date.
    console.log("previousTask:  ", previousTask);
    document.getElementById('taskDetails').value = previousTask.taskDetails;
    document.getElementById('startDate').value = previousTask.taskStartDate;
    document.getElementById('endDate').value = previousTask.taskEndDate;
} else{
    var note = document.createElement("h4");   // Create a <button> element
    note.innerHTML = "New Todo! Pls fill in the details";                   // Insert text
    document.body.appendChild(note); 
}
///////////////////////////////////////////////////////////////////
// Brand new data if previous data is not present.
var newTask = new TaskDetails(todoTitle);
var detailsTitle = document.createElement("h2");
detailsTitle.innerHTML = todoTitle;

detailsTitle.setAttribute("id", "h2");
detailsTitle.id = title;
document.getElementById('title').appendChild(detailsTitle);

//Read the details input field on change
document.getElementById("taskDetails").addEventListener("change", function(){
    var details = document.getElementById("taskDetails").value;
    newTask.setTaskDetails(details);

    //clear this input field.
    document.getElementById("taskDetails").value = "";
});
document.getElementById("startDate").addEventListener("change", function(){
    var sDate = document.getElementById("startDate").value;
    newTask.setStartDate(sDate);

});
document.getElementById("endDate").addEventListener("change", function(){
    var eDate = document.getElementById("endDate").value;
    newTask.setEndDate(eDate);
    
});


document.getElementById('back').addEventListener('click', function () {
    var title = newTask.taskTitle;   
    
    localStorage.setItem(title, JSON.stringify(newTask));// localStorage.

    //back button to go back
    var currentLocation = location.href;
    var splitCurrentLoc = currentLocation.split('details.html');
    var backHome = splitCurrentLoc[0] + 'index.html';
    window.location.href = backHome;
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