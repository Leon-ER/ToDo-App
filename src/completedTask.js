import { getTaskFromStorage } from "./localStorage";
import { createTaskBlueprint } from "./task";

function completeTask(taskID) {
  const tasks = getTaskFromStorage();
  const taskIndex = tasks.findIndex((task) => task.taskData === taskID);

  const taskCard = document.querySelectorAll(`[data="${taskID}"]`);
  Array.from(taskCard).forEach((task) => {
    task.parentNode.removeChild(task);
  });

  tasks[taskIndex].projectID = "completedTask";
  createTaskBlueprint(
    tasks[taskIndex].projectID,
    tasks[taskIndex].title,
    tasks[taskIndex].priority,
    tasks[taskIndex].date,
    tasks[taskIndex].description,
    tasks[taskIndex].taskData
  );

  const completedTask = tasks.splice(taskIndex, 1)[0];
  const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

  completedTasks.push(completedTask);

  disableBtns()

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}
function disableBtns() {
  const completedCheckBox = document.querySelectorAll("#projectCompleted");
  const editBtn = document.querySelectorAll("#edit");
  const removeBtn = document.querySelectorAll('.remove')

  completedCheckBox.forEach((box) => {
    box.disabled = true;
  });
  editBtn.forEach((btn) => {
    btn.disabled = true;
  });
  removeBtn.forEach((btn)=>{
    btn.disabled = true;
  })
}
function getCompletedTaskFromStorage() {
  const completedTask = localStorage.getItem("completedTasks");
  if (completedTask) {
    return JSON.parse(completedTask);
  }
  return [];
}
function setCompleted() {
  const storedTask = getCompletedTaskFromStorage();
  if (storedTask.length !== 0) {
    storedTask.forEach((task) => {
      createTaskBlueprint(
        task.projectID,
        task.title,
        task.priority,
        task.date,
        task.description,
        task.taskData
      );
    });
  }
  disableBtns()
}
export { completeTask, setCompleted ,getCompletedTaskFromStorage };
