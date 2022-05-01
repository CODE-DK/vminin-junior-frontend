const tasks = [
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

const taskList = document.querySelector(".tasks-list");
tasks.map((it) => {

  const checkboxForm_Checkbox = document.createElement('input');
        checkboxForm_Checkbox.classList.add('checkbox-form__checkbox');
        checkboxForm_Checkbox.setAttribute('type', 'checkbox');
        checkboxForm_Checkbox.id = it.id;
  const checkboxForm_label = document.createElement('label');
        checkboxForm_label.htmlFor = it.id;

  const taskItem_Text = document.createElement('span');
        taskItem_Text.textContent = it.text;
  const checkboxForm = document.createElement('form');
        checkboxForm.classList.add('checkbox-form');
        checkboxForm.append(checkboxForm_Checkbox);
        checkboxForm.append(checkboxForm_label);

  const taskItem_MainContent = document.createElement('div');
        taskItem_MainContent.classList.add('task-item__main-content');
        taskItem_MainContent.append(checkboxForm);
        taskItem_MainContent.append(taskItem_Text);
  const taskItem_DeleteBtn = document.createElement('button');
        taskItem_DeleteBtn.classList.add('task-item__delete-button');
        taskItem_DeleteBtn.classList.add('default-button');
        taskItem_DeleteBtn.classList.add('delete-button');
        taskItem_DeleteBtn.dataset.deleteTaskId = it.id;
        taskItem_DeleteBtn.textContent = 'Удалить';

  const taskItem_MainContainer = document.createElement('div');
        taskItem_MainContainer.classList.add('task-item__main-container');
        taskItem_MainContainer.append(taskItem_MainContent);
        taskItem_MainContainer.append(taskItem_DeleteBtn);

  const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.dataset.taskId = it.id;
        taskItem.append(taskItem_MainContainer);

  taskList.append(taskItem);
});
