let projects = []

function Project(title){
  this.title = title;
}

function addProjectToArray(newProject){
  const getName = document.getElementById("projectName").value;
  projects.push(newProject);
  projectBlueprint(getName);
}

function createProject(){
  const getName = document.getElementById("projectName").value;
  if (getName === ""){
    alert('Please enter valid inputs')
    return null;
  }
  return new Project(getName);
}

function projectBlueprint(getName) {
  const projects = document.getElementById("projectsDiv");
  const button = document.createElement("button");
  const removeBtn = document.createElement('button');
  const divProject = document.createElement('div');
  
  let projectName = getName.split(" ").join("").toLowerCase();


  projects.appendChild(divProject);
  divProject.classList.add('projectDivStyle')
  divProject.appendChild(button);
  divProject.appendChild(removeBtn);
  removeBtn.classList.add('projectRemove');
  removeBtn.innerHTML = "X"
  button.classList.add("styleProject");
  button.innerHTML = getName;
  button.setAttribute("data-tab-target", `#${projectName}`);
  button.setAttribute("id", `#${projectName}`);
  removeBtn.setAttribute("id", `#${projectName}`);
  removeBtn.setAttribute('dataBtn',projectName);

  // Project tab
  const tabSection = document.getElementById("tabSection");
  const divTab = document.createElement("div");
  const addTaskBtn = document.createElement("button");
  const title = document.createElement("h1");
  
  tabSection.appendChild(divTab); 
  divTab.setAttribute("dataID", `#${projectName}`);
  divTab.setAttribute("id", projectName);
  divTab.setAttribute("data-tab", "");
  divTab.appendChild(title);
  divTab.appendChild(addTaskBtn);
  title.innerHTML = getName;
  addTaskBtn.classList.add("btnStyle");
  addTaskBtn.setAttribute("id", "addTask");
  addTaskBtn.innerHTML = "Add new task";
  addTaskBtn.setAttribute("data-id", projectName);
}
export {projects,Project,addProjectToArray,createProject,projectBlueprint};