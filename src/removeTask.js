import { tasks } from "./task";

export default function removeTask(e) {
  let dataNumb = e.target.getAttribute("data");
  let taskCard = document.querySelectorAll(`[data="${dataNumb}"]`);
  Array.from(taskCard).forEach((task) => {
    task.parentNode.removeChild(task);
  });

  tasks.splice(dataNumb, 1); 

  localStorage.setItem("tasks", JSON.stringify(tasks));

}
