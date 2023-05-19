import "./style.css";
import { projectId } from "./page";
import { taskStorage } from "./localStorage";

let tasks = [];

// object constructor for tasks
function Task(title, priority, date, description, projectID, taskData) {
  (this.title = title),
  (this.priority = priority),
  (this.date = date),
  (this.description = description),
  (this.projectID = projectID),
  (this.taskData = taskData);
};

// add task to Array
function addTaskToArray(newTask) {
  const title = document.getElementById("name").value;
  const priority = document.getElementById("priority").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const containerID = document.getElementById(projectId).getAttribute("id");

  let taskData = title.split(" ").join("").toLowerCase();

  tasks.push(newTask);
  taskStorage();
  createTaskBlueprint(containerID, title, priority, date, description,taskData);
}
// create the task card
function createTask() {
  const title = document.getElementById("name").value;
  const priority = document.getElementById("priority").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const containerID = document.getElementById(projectId).getAttribute("id");

  let taskData = title.split(" ").join("").toLowerCase();
  if (
    title === "" ||
    priority === "" ||
    date === "dd/mm/yyy" ||
    description === ""
  ) {
    alert("Please enter inputs");
    return null;
  }
  return new Task(title, priority, date, description, containerID,taskData);
}

function createTaskBlueprint(containerID,taskName,priority,dateTask,description,taskID,) {
  

  const container = document.getElementById(containerID);
  const divTask = document.createElement("div");
  const text = document.createElement("p");
  const date = document.createElement("input");
  const button = document.createElement("button");
  const taskPriosity = document.createElement("p");
  const taskDescription = document.createElement("p");
  const checkbox = document.createElement("input");
  const collapsable = document.createElement("div");


  container.appendChild(collapsable);
  collapsable.classList.add('collapsible');
  collapsable.appendChild(checkbox);
  checkbox.type = "checkbox";
  checkbox.setAttribute('id','projectCompleted');
  collapsable.appendChild(text);
  text.innerHTML = taskName;
  collapsable.appendChild(button);
  button.classList.add("remove");
  button.innerHTML = "Remove";


  container.appendChild(divTask);
  divTask.setAttribute("id","task");
  divTask.appendChild(taskDescription);
  taskDescription.innerHTML = description;
  taskDescription.classList.add('item');
  taskPriosity.classList.add('item');
  date.classList.add('item');
  divTask.appendChild(taskPriosity);
  taskPriosity.innerHTML = priority;
  divTask.appendChild(date);
  date.type = "date";
  date.value = dateTask;
  date.disabled = true;


  button.setAttribute("data", taskID);
  collapsable.setAttribute("data", taskID);
  divTask.setAttribute("data", taskID);
}

export { Task, createTask, addTaskToArray, tasks, createTaskBlueprint };
