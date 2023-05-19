import { createTask, addTaskToArray } from "./task";
import removeTask from "./removeTask";
import { addProjectToArray, createProject } from "./project";
import removeProject from "./removeProject";
import { initialize, projectStorage} from "./localStorage";
import { createCardDay ,createCardOverdue} from "./checkDates";

let projectId = "";
export default function createTODO() {
  // tab switching
  const tabsContainer = document.getElementById("btnContainer");

  tabsContainer.addEventListener("click", (event) => {
    if (event.target.matches("[data-tab-target]")) {
      const target = document.querySelector(event.target.dataset.tabTarget);
      const tabContents = document.querySelectorAll("[data-tab]");
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      target.classList.add("active");
      projectId = target.id;
    }
    if (event.target.matches(".projectRemove")) {
      removeProject(event);
    }
  });

  const tabSection = document.getElementById("tabSection");

  tabSection.addEventListener("click", (event) => {
    if (event.target.matches("#addTask")) {
      modal.style.display = "block";
    }
    // remove btn
    if (event.target.matches(".remove")) {
      removeTask(event);
    }
  });

  // modal popUp
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  span.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // submit button
  const submit = document.getElementById("submitBtn");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let newTask = createTask();
    if (newTask !== null) {
      addTaskToArray(newTask);
      createCardDay();
      createCardOverdue();
      modal.style.display = "none";
      document.getElementById("submitTask").reset();
    }
  });

  // project Pop up
  const addProjectBtn = document.querySelector(".addProject");
  const modalProject = document.getElementById("projectmyModal");
  const spanClose = document.getElementsByClassName("closeProject")[0];
  const submitProject = document.getElementById("submitProject");

  submitProject.addEventListener("click", (e) => {
    e.preventDefault();
    let newProject = createProject();
    if (newProject !== null) {
      addProjectToArray(newProject);
      document.getElementById("projectForm").reset();
      projectStorage();
      modalProject.style.display = "none";
    }
  });
  addProjectBtn.addEventListener("click", () => {
    modalProject.style.display = "block";
  });
  spanClose.addEventListener("click", () => {
    modalProject.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target == modalProject) {
      modalProject.style.display = "none";
    }
  });
}
createCardOverdue();
createCardDay();
initialize();
export { projectId };
