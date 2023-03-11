let taskList = document.getElementById("taskList");

function addTask() {
    let newTask = document.getElementById("newTask").value;
    let li = document.createElement("li");
    let text = document.createTextNode(newTask);
    li.appendChild(text);
    taskList.appendChild(li);
    document.getElementById("newTask").value = "";
}