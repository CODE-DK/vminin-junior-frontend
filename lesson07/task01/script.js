//warning: debugger not works with browser functions (prompt, alert e.t.c)

let health = prompt('Введите число параметра "здоровье" для персонажа');
console.log(`Health: ${health}`);

//working with numbers always check it
if (!isDigits(health)) {
  alert('Параметр "здоровье должен быть числом!"');
} else {
  health = +health;
  if (health < 0) {
    alert('Параметр "здоровье" должен быть больше нуля!');
  } else {
    alert(`Параметр "здоровье" равен ${health}`);
  }
}

function isDigits(source) {
  return /^[0-9]+$/.test(source);
}