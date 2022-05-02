let tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function render() {
  removeTasks();

  tasks.map((it) => {
    const checkboxForm_Checkbox = document.createElement("input");
    checkboxForm_Checkbox.classList.add("checkbox-form__checkbox");
    checkboxForm_Checkbox.setAttribute("type", "checkbox");
    checkboxForm_Checkbox.id = it.id;

    const checkboxForm_label = document.createElement("label");
    checkboxForm_label.htmlFor = it.id;

    const taskItem_Text = document.createElement("span");
    taskItem_Text.textContent = it.text;

    const checkboxForm = document.createElement("form");
    checkboxForm.classList.add("checkbox-form");
    checkboxForm.append(checkboxForm_Checkbox);
    checkboxForm.append(checkboxForm_label);

    const taskItem_MainContent = document.createElement("div");
    taskItem_MainContent.classList.add("task-item__main-content");
    taskItem_MainContent.append(checkboxForm);
    taskItem_MainContent.append(taskItem_Text);

    const taskItem_DeleteBtn = document.createElement("button");
    taskItem_DeleteBtn.classList.add("task-item__delete-button");
    taskItem_DeleteBtn.classList.add("default-button");
    taskItem_DeleteBtn.classList.add("delete-button");
    taskItem_DeleteBtn.dataset.deleteTaskId = it.id;
    taskItem_DeleteBtn.textContent = "Удалить";

    const taskItem_MainContainer = document.createElement("div");
    taskItem_MainContainer.classList.add("task-item__main-container");
    taskItem_MainContainer.append(taskItem_MainContent);
    taskItem_MainContainer.append(taskItem_DeleteBtn);

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.dataset.taskId = it.id;
    taskItem.append(taskItem_MainContainer);

    const taskList = document.querySelector(".tasks-list");
    taskList.append(taskItem);
  });
}

render();

// --- Задание 3

document
  .querySelector(".create-task-block")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const { target } = event;
    const textValue = target.querySelector(".create-task-block__input").value;

    if (isEmpty(textValue)) {
      showErrorMessage("Название задачи не должно быть пустым");
    } else if (isDuplicate(textValue)) {
      showErrorMessage("Задача с таким названием уже существует");
    } else {
      hideErrorMessage();

      tasks.push({
        id: `${Date.now()}`,
        completed: false,
        text: textValue,
      });
    }

    render();
  });

function isDuplicate(text) {
  return tasks.findIndex((it) => it.text === text) !== -1;
}

function isEmpty(text) {
  return text.length === 0;
}

// --- задание 4

function showErrorMessage(message) {
  hideErrorMessage();

  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message-block");
  errorMessage.textContent = message;

  const target = document.querySelector(".tasks__input-wrapper");
  target.append(errorMessage);
}

function hideErrorMessage() {
  const errorMessage = document.querySelector(".error-message-block");
  if (errorMessage) errorMessage.remove();
}

function removeTasks() {
  const tasksList = document.querySelector(".tasks-list");
  tasksList.innerHTML = "";

  const input = document.querySelector(".create-task-block__input");
  input.value = "";
}

// --- задание 5

const tasksList = document.querySelector(".tasks-list");
tasksList.addEventListener("click", ({ target }) => {
  if (target.classList.contains("task-item__delete-button")) {
    showModal(target.dataset.deleteTaskId);
  }
});

const showModal = (itemId) => {
  const confirmBtn = document.createElement("button");
  confirmBtn.classList.add("delete-modal__button");
  confirmBtn.classList.add("delete-modal__confirm-button");
  confirmBtn.textContent = "Удалить";
  confirmBtn.addEventListener("click", () => {
    tasks = tasks.filter((it) => it.id !== itemId);
    render();
    hideModal();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("delete-modal__button");
  cancelBtn.classList.add("delete-modal__cancel-button");
  cancelBtn.textContent = "Отмена";
  cancelBtn.addEventListener("click", () => {
    hideModal();
  });

  const deleteModal_Buttons = document.createElement("div");
  deleteModal_Buttons.classList.add("delete-modal__buttons");
  deleteModal_Buttons.append(cancelBtn);
  deleteModal_Buttons.append(confirmBtn);

  const deleteModal_Question = document.createElement("h3");
  deleteModal_Question.classList.add("delete-modal__question");
  deleteModal_Question.textContent =
    "Вы действительно хотите удалить эту задачу?";

  const deleteModal = document.createElement("div");
  deleteModal.classList.add("delete-modal");
  deleteModal.append(deleteModal_Question);
  deleteModal.append(deleteModal_Buttons);

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.append(deleteModal);
  modalOverlay.style.marginBottom = "1rem";

  const target = document.querySelector("#tasks");
  target.prepend(modalOverlay);
};

function hideModal() {
  const modal = document.querySelector(".modal-overlay");
  modal.innerHTML = "";
}

// --- задание 6
