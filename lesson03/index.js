let num = 42;
let str = "something";
let bool = true;

num = "42";
str = str.length;
bool = null;

alert(num);
alert(str);
alert(bool);

let ageOfPerson1 = 18;
let ageOfPerson2 = "20";

console.log((ageOfPerson2 = ageOfPerson1), typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";

console.log((nameOfAnimal2 = nameOfAnimal1), typeof nameOfAnimal2);

const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "Java";

console.log(
  "Переменную с const переопределить нельзя",
  typeof bestProgrammingLanguage1,
  typeof bestProgrammingLanguage2,
);

let initialValue1;
let initialValue2 = 0;

console.log((initialValue2 = initialValue1), typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

console.log("var является устаревшим");
console.log(
  (isJavaScriptProgrammer2 = isJavaScriptProgrammer1),
  typeof isJavaScriptProgrammer2,
);

let helloText1 = "Hello!";
let helloText2 = "Привет!";

console.log((helloText2 = helloText1), typeof helloText2);
