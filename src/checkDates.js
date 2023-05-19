import { getTaskFromStorage } from "./localStorage";
import isToday from "date-fns/isToday";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { createTaskBlueprint } from "./task";

function dueToday() {
  let tasks = getTaskFromStorage();
  let todayTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (isToday(parseISO(tasks[i].date))) {
      todayTasks.push(tasks[i]);
    }
  }
  return todayTasks;
}
function createCardDay() {
  const todayDiv = document.getElementById("tasksToday");
  todayDiv.innerHTML ="";
  const todayTasks = dueToday();
  for (let i = 0; i < todayTasks.length; i++) {
    const task = todayTasks[i];
    createTaskBlueprint(
      "tasksToday",
      task.title,
      task.priority,
      task.date,
      task.description,
      task.taskData,
    );
  }
}
function overDue() {
  let todayDate = format(new Date(),"yyyy-MM-dd");
  let tasks = getTaskFromStorage();
  let overDueTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (todayDate > tasks[i].date) {
      overDueTasks.push(tasks[i]);
    }
  }
  return overDueTasks;
}

function createCardOverdue() {
  const overDueElement = document.getElementById("tasksOverdue");
  overDueElement.innerHTML = "";
  const overdueTasks = overDue();
  for (let i = 0; i < overdueTasks.length; i++) {
    const task = overdueTasks[i];
    createTaskBlueprint(
      'tasksOverdue',
      task.title,
      task.priority,
      task.date,
      task.description,
      task.taskData
    );
  }
}
export { createCardDay,createCardOverdue,overDue};
