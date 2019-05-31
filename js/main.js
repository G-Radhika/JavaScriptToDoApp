//A global array that holds all task list.
var taskList = [];

var previoustasks = localStorage.getItem("taskList");
if (previoustasks) {            //If previous tasks are present load them.
    taskList = JSON.parse(localStorage.getItem("taskList"));
    for (var i in taskList) {
        addItem(taskList[i]);
        //If previous todos are present in the localstorage add them to db.collections.
        db.collection("todos").doc(taskList[i]).set({
            details: "",
            startDate: "",
            endDate: ""
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }
}
//Adding a NEW todo to list. Adding event listerner to the "Add" button
document.getElementById('add').addEventListener('click', function (event) {
    event.preventDefault();
    var value = document.getElementById('item').value;
    if (value) {
        //Check for duplicate tasks.
        var item = taskList.includes(value);
        if (item) {
            document.getElementById('notification').innerHTML = "Duplicate TODO entry";
        } else {
            taskList.push(value);
            // window.db 
            db.collection("todos").doc(value).set({
                details: "",
                startDate: "",
                endDate: ""
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            localStorage.setItem("taskList", JSON.stringify(taskList));
            addItem(value); //previous TODOs + new TODOs
        }
    }
    document.getElementById("item").value = "";
});
function addItem(value) {
    var listElement = document.createElement("li");
    listElement.innerHTML = value;
    document.getElementById('list').appendChild(listElement);//Add element to list
    localStorage.textContent = listElement.innerHTML;
    listElement.onclick = liClick; //Listen to the click event on particular ToDo.    
}
// when a pirtucular ToDo is clicked go to details page.
function liClick(event) {
    var taskDetails = location.href;
    var splitDetails = taskDetails.split('index.html');
    var detailTitle = document.createElement("p");
    detailTitle.innerHTML = this.textContent;
    var title = detailTitle.innerHTML;
    var newURL = splitDetails[0] + 'details.html' + '?' + 'title' + '=' + title;
    window.location.href = newURL;
}