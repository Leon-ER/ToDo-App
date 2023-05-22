import { createTask, addTaskToArray, editTask } from "./task";
import removeTask from "./removeTask";
import { addProjectToArray, createProject } from "./project";
import removeProject from "./removeProject";
import { initialize, projectStorage } from "./localStorage";
import { createCardDay, createCardOverdue } from "./checkDates";
import { completeTask, setCompleted } from "./completedTask";

let projectId = "";
export default function app() {
  const tabSection = document.getElementById("tabSection");
  const confirmationModal = document.getElementById("confirmation");
  const spanConfirmation =
    document.getElementsByClassName("closeConfirmation")[0];
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const editModal = document.getElementById("editModal");
  const spanEdit = document.getElementsByClassName("closeEdit")[0];
  const tabsContainer = document.getElementById("btnContainer");
  const editSubmit = document.getElementById("editBtn");
  const addProjectBtn = document.querySelector(".addProject");
  const modalProject = document.getElementById("projectmyModal");
  const spanClose = document.getElementsByClassName("closeProject")[0];
  const submitProject = document.getElementById("submitProject");
  const submit = document.getElementById("submitBtn");
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  // collapsable div
  function addCollapsibleListeners() {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content) {
          if (content.style.display === "flex") {
            content.style.display = "none";
            content.style.maxHeight = null;
          } else {
            content.style.display = "flex";
            content.style.maxHeight = content.scrollHeight + 16 + "px";
          }
        }
      });
    }
  }

  //  add event listeners for buttons
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
      // confirmation buttons
      yesBtn.addEventListener("click", () => {
        removeProject(event);
        confirmationModal.style.display = "none";
      });
      noBtn.addEventListener("click", () => {
        confirmationModal.style.display = "none";
      });
    }
  });

  tabSection.addEventListener("click", (event) => {
    // addTask button
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
    // edit btn for form
    if (event.target.matches("#edit")) {
      editModal.style.display = "block";
      const editBtn = event.target;
      const dataId = editBtn.getAttribute("dataedit");
      const editSubmit = document.getElementById("editBtn");
      editSubmit.setAttribute("dataedit", dataId);
    }
    // complete project
    if (event.target.matches("#projectCompleted")) {
      let completedAttribute = document
        .getElementById("projectCompleted")
        .getAttribute("completed");
      completeTask(completedAttribute);
      addCollapsibleListeners();
    }
  });
  // submit button to edit the task
  editSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const dataId = editSubmit.getAttribute("dataedit");
    editTask(dataId);
    createCardDay();
    createCardOverdue();
    addCollapsibleListeners();
    editModal.style.display = "none";
  });

  // submit button to creat task
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
  // submit button to create project
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
  // MODALS
  // task modal
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });
  // project modal
  addProjectBtn.addEventListener("click", () => {
    modalProject.style.display = "block";
  });
  spanClose.addEventListener("click", () => {
    modalProject.style.display = "none";
  });
  // edit modal
  spanEdit.addEventListener("click", () => {
    editModal.style.display = "none";
  });
  spanConfirmation.addEventListener("click", () => {
    confirmationModal.style.display = "none";
  });
  // if user clicks out side of modal it closes it
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
  addCollapsibleListeners();
}
setCompleted();
createCardOverdue();
createCardDay();
initialize();
export { projectId };
