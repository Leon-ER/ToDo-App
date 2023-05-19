import { projects } from "./project";
import { tasks } from "./task";
import { projectStorage, taskStorage } from "./localStorage";

export default function removeProject(e) {
  const projectId = e.target.attributes.dataBtn.value;

  // Remove project button
  const projectBtn = document.querySelectorAll(`[id='#${projectId}']`);

  Array.from(projectBtn).forEach((btn) => {
    btn.parentNode.removeChild(btn);
  });

  // Remove project cards
  const projectCards = document.querySelectorAll(`[dataID='#${projectId}']`);
  Array.from(projectCards).forEach((project) => {
    project.parentNode.removeChild(project);
  });

  removeTasksByProjectId(projectId);

  projects.splice(projectId, 1);

  projectStorage();

  taskStorage();
}

function removeTasksByProjectId(projectId) {
  const filteredTasks = tasks.filter((task) => task.projectID !== projectId);

  tasks.length = 0;
  tasks.push(...filteredTasks);
}
