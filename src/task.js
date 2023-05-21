import "./style.css";
import { projectId } from "./page";
import { taskStorage, getTaskFromStorage } from "./localStorage";
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
  let tasks = getTaskFromStorage();
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
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      alert("Task already exists");
      return null;
    }
  }

  return new Task(title, priority, date, description, containerID, taskData);
}

function editTask(taskID) {
  const tasks = getTaskFromStorage();
  const taskIndex = tasks.findIndex((task) => task.taskData === taskID);

  if (taskIndex !== -1) {
    const titleInput = document.getElementById("editName").value;
    const priorityInput = document.getElementById("editPriority").value;
    const dateInput = document.getElementById("editDate").value;
    const descriptionInput = document.getElementById("editDescription").value;
    const containerID = document.getElementById(projectId).getAttribute("id");
    if (titleInput.trim() !== "") {
      tasks[taskIndex].title = titleInput;
      tasks[taskIndex].taskData = tasks[taskIndex].title
        .split(" ")
        .join("")
        .toLowerCase();
    }
    if (priorityInput !== "") {
      tasks[taskIndex].priority = priorityInput;
    }
    if (dateInput !== "") {
      tasks[taskIndex].date = dateInput;
    }
    if (descriptionInput !== "") {
      tasks[taskIndex].description = descriptionInput;
    }
    createTaskBlueprint(
      containerID,
      tasks[taskIndex].title,
      tasks[taskIndex].priority,
      tasks[taskIndex].date,
      tasks[taskIndex].description,
      tasks[taskIndex].taskData
    );

    const taskCard = document.querySelectorAll(`[data="${taskID}"]`);
    Array.from(taskCard).forEach((task) => {
      task.parentNode.removeChild(task);
    });
  }
  document.getElementById('editTask').reset();
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
