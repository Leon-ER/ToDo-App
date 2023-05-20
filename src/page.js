import { createTask, addTaskToArray, editTask } from "./task";
import removeTask from "./removeTask";
import { addProjectToArray, createProject } from "./project";
import removeProject from "./removeProject";
import { initialize, projectStorage } from "./localStorage";
import { createCardDay, createCardOverdue } from "./checkDates";

let projectId = "";
export default function createTODO() {
  const tabsContainer = document.getElementById("btnContainer");
  tabsContainer.addEventListener("click", (event) => {
    // tab switching
    if (event.target.matches("[data-tab-target]")) {
      const target = document.querySelector(event.target.dataset.tabTarget);
      const tabContents = document.querySelectorAll("[data-tab]");
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      target.classList.add("active");
      projectId = target.id;
    }
    // remove project
    if (event.target.matches(".projectRemove")) {
      confirmationModal.style.display = "block";
      yesBtn.addEventListener("click", () => {
        removeProject(event);
        confirmationModal.style.display = "none";
      });
      noBtn.addEventListener("click", () => {
        confirmationModal.style.display = "none";
      });
    }
  });

  const tabSection = document.getElementById("tabSection");
  const confirmationModal = document.getElementById("confirmation");
  const spanConfirmation =
    document.getElementsByClassName("closeConfirmation")[0];
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const editModal = document.getElementById("editModal");
  const spanEdit = document.getElementsByClassName("closeEdit")[0];
  spanEdit.addEventListener("click", () => {
    editModal.style.display = "none";
  });
  spanConfirmation.addEventListener("click", () => {
    confirmationModal.style.display = "none";
  });

  tabSection.addEventListener("click", (event) => {
    if (event.target.matches("#addTask")) {
      modal.style.display = "block";
    }
    // remove btn
    if (event.target.matches(".remove")) {
      confirmationModal.style.display = "block";
      yesBtn.addEventListener("click", () => {
        removeTask(event);
        confirmationModal.style.display = "none";
      });
      noBtn.addEventListener("click", () => {
        confirmationModal.style.display = "none";
      });
    }
    // edit btn
    if (event.target.matches("#edit")) {
      editModal.style.display = "block";
      const dataId = editBtn.getAttribute('dataedit');
      editSubmit.setAttribute("dataEdit", dataId);
    }
  });
  
  const editBtn = document.getElementById('edit');
  const editSubmit = document.getElementById("editBtn");
  editSubmit.addEventListener("click", () => {
    const dataId = editSubmit.getAttribute('dataedit');
    editTask(dataId);
    editModal.style.display = "none";
  });
  function addCollapsibleListeners() {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content) {
          if (content.style.display === "flex") {
            content.style.display = "none";
          } else {
            content.style.display = "flex";
          }
        }
      });
    }
  }

  addCollapsibleListeners();
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
    if (event.target == confirmationModal) {
      confirmationModal.style.display = "none";
    }
    if (event.target == modalProject) {
      modalProject.style.display = "none";
    }
    if (event.target == editModal) {
      editModal.style.display = "none";
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
      addCollapsibleListeners();
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
}
createCardOverdue();
createCardDay();
initialize();
export { projectId };
