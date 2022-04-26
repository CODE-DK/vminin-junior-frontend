// --- Задание #1
const goals = [8, 1, 1, 3, 2, -1, 5];

//Самый результативный матч по количеству голов

const copyOfGoals = [...goals];
let numberOfGoals = copyOfGoals.sort((a, b) => a - b)[goals.length - 1];
let number = goals.findIndex((game, i) => game === numberOfGoals);

console.log(`
    Самый результативный матч был под номером ${number + 1}. 
    В нем было забито ${numberOfGoals} гол(ов).
`);

//Самые нерезультативные игры

numberOfGoals = goals
  .filter((game, i) => game > 0)
  .find((game, i) => game < numberOfGoals);

const numbers = goals
  .filter((game, i) => game === numberOfGoals)
  .map((game, i) => i + 1);

console.log(`
    Самые нерезультативные матчи были под номерами ${numbers}. 
    В каждом из них было забито по ${numberOfGoals} мячу(а).
`);

// Общее количество голов за сезон

numberOfGoals = goals
  .filter((it) => it > -1)
  .reduce((sum, game) => (sum += game));

console.log(`Общее количество голов за сезон равно ${numberOfGoals}`);

// Были ли автоматические поражения

const hasAutoFails = goals.findIndex((game, i) => game < 0) !== -1;
console.log(`Были автоматические поражения: ${hasAutoFails ? "да" : "нет"}`);

// Среднее количество голов за матч

const sumOfGoals = goals.reduce((sum, game) => (sum += game));
numberOfGoals = sumOfGoals / goals.length;

console.log(`Среднее количество голов за матч равно ${numberOfGoals}`);

// Отсортируйте голы в порядке возрастания

console.log("Список голов ", copyOfGoals);

// --- Задание #2

const operations = [">", "<", "=", "+", "-", "*", "/"];
function clearefy(expression) {
  return expression
    .filter((x) => /^\d/.test(x) || operations.includes(x))
    .splice(0, 3);
}

function getMathResult(expression) {
  if (expression.length < 3) return "Ошибка";
  if (expression.length > 3) {
  }
  const x = typeof expression[0] === "string" ? +expression[0] : expression[0];
  const y = typeof expression[2] === "string" ? +expression[2] : expression[2];

  switch (expression[1]) {
    case ">":
      return x > y;
    case "<":
      return x < y;
    case "=":
      return x === y;
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return "Ошибка";
  }
}

console.log(getMathResult(["200", "+", 300])); // 500
console.log(getMathResult(["20", "-", "5"])); // 15
console.log(getMathResult([100, "/", 100])); // 1
console.log(getMathResult([2, "-", 2])); // 0
console.log(getMathResult(["5", ">", "10"])); // false
console.log(getMathResult(["5", "<", "10"])); // true
console.log(getMathResult(["1", "=", 1])); // true
console.log(getMathResult(["1", "**", 1])); // 'Ошибка'

// --- Задание #3

const columns = [];
for (let i = 0; i < 3; i++) {
  const row = [];
  for (let i = 0; i < 5; i++) {
    row.push(i + 1);
  }
  columns.push(row);
}

console.log('3x5', columns);

// --- Задание #4

const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];

const flatMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  flatMatrix.push(...matrix[i]);
}

console.log('Flat matrix:', flatMatrix);