import { tasks } from "./task";
import { projectBlueprint, projects } from "./project";
import { createTaskBlueprint } from "./task";


function taskStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function projectStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function getProjectFromStorage() {
  const project = localStorage.getItem("projects");
  if (project) {
    return JSON.parse(project);
  }
  return [];
}

function getTaskFromStorage() {
  const task = localStorage.getItem("tasks");
  if (task) {
    return JSON.parse(task);
  }
  return [];
}

function initialize() {
  const storedTask = getTaskFromStorage();
  const storedProject = getProjectFromStorage();

  tasks = storedTask.concat(tasks);
  projects = storedProject.concat(projects);

  if (storedProject.length !== 0) {
    storedProject.forEach((project) => {
      projectBlueprint(project.title);
    });
  }
  if (storedTask.length !== 0) {
    storedTask.forEach((task) => {
      createTaskBlueprint(
        task.projectID,
        task.title,
        task.priority,
        task.date,
        task.description,
        task.taskData,
      );
    });
  }
}

export { initialize, taskStorage, projectStorage, getTaskFromStorage };
