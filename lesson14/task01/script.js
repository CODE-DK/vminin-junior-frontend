const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Введите ваше имя";

const labelName = document.createElement("label");
labelName.textContent = "Имя";
labelName.append(inputName);

console.log('labelName', labelName);

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Придумайте Пароль";

const labelPassword = document.createElement("label");
labelPassword.textContent = "Пароль";
labelPassword.append(inputPassword);

console.log('labelPassword', labelPassword);

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Подтвердить";

console.log('submitBtn', submitBtn);

const form = document.createElement("form");
form.className = "create-user-form";
form.append(labelName);
form.append(labelPassword);
form.append(submitBtn);

console.log('form', form);

const body = document.querySelector("body");
body.append(form);