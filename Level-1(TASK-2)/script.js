window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const listElement = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    const empty = input.value;

    if (empty == "") {
      return false;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskElement.appendChild(taskContent);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskInput);

    taskInput.addEventListener(
      "click",
      (e) => {
        if (e.target.tagName === "INPUT") {
          e.target.classList.toggle("text-line");
        }
      },
      false
    );

    const taskAction = document.createElement("div");
    taskAction.classList.add("actions");

    const taskEdit = document.createElement("span");
    taskEdit.classList.add("material-symbols-outlined", "edit_btn");
    taskEdit.innerText = "edit";

    const taskDelete = document.createElement("span");
    taskDelete.classList.add("material-symbols-outlined", "remove_btn");
    taskDelete.innerText = "Delete";

    taskAction.appendChild(taskEdit);
    taskAction.appendChild(taskDelete);

    taskElement.appendChild(taskAction);

    listElement.appendChild(taskElement);

    input.value = "";

    taskEdit.addEventListener("click", (e) => {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskEdit.innerText = "SAVE";
        // taskEdit.style.color= "black";
        taskInput.removeAttribute("readonly");
        taskInput.classList.remove("text-line");
        taskInput.focus();
      } else {
        taskEdit.innerText = "Edit";
        // taskEdit.style.color= "black";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    taskDelete.addEventListener("click", (e) => {
      listElement.removeChild(taskElement);
    });
  });
});
