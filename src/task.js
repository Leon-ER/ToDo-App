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
}

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
  createTaskBlueprint(
    containerID,
    title,
    priority,
    date,
    description,
    taskData
  );
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
  return new Task(title, priority, date, description, containerID, taskData);
}
function editTask(taskID) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const taskToEdit = tasks.find((task) => task.taskData === taskID);

  taskToEdit.title = document.getElementById("name").value;
  taskToEdit.priority = document.getElementById("priority").value;
  taskToEdit.date = document.getElementById("date").value;
  taskToEdit.description = document.getElementById("description").value;
  taskToEdit.taskData = taskToEdit.title.split(" ").join("").toLowerCase();
  console.log(taskToEdit.taskData);
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function createTaskBlueprint(
  containerID,
  taskName,
  priority,
  dateTask,
  description,
  taskID
) {
  const container = document.getElementById(containerID);
  const divTask = document.createElement("div");
  const text = document.createElement("p");
  const date = document.createElement("input");
  const button = document.createElement("button");
  const taskPriosity = document.createElement("p");
  const taskDescription = document.createElement("p");
  const checkbox = document.createElement("input");
  const collapsable = document.createElement("div");
  const editBtn = document.createElement("button");
  const div = document.createElement("div");

  container.appendChild(collapsable);
  collapsable.classList.add("collapsible");
  collapsable.appendChild(checkbox);
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", "projectCompleted");
  collapsable.appendChild(text);
  text.innerHTML = taskName;
  collapsable.appendChild(div);
  div.classList.add("btnDiv");
  div.appendChild(button);
  button.classList.add("remove");
  button.innerHTML = "Remove";
  div.appendChild(editBtn);
  editBtn.setAttribute("id", "edit");
  editBtn.innerHTML = "Edit";

  container.appendChild(divTask);
  divTask.setAttribute("id", "task");
  divTask.appendChild(taskDescription);
  taskDescription.innerHTML = description;
  divTask.appendChild(taskPriosity);
  taskPriosity.innerHTML = priority;
  divTask.appendChild(date);
  date.type = "date";
  date.value = dateTask;
  date.disabled = true;

  editBtn.setAttribute("dataedit", taskID);
  button.setAttribute("data", taskID);
  collapsable.setAttribute("data", taskID);
  divTask.setAttribute("data", taskID);
}

export {
  Task,
  createTask,
  addTaskToArray,
  tasks,
  createTaskBlueprint,
  editTask,
};
