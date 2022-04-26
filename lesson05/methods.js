// toUpperCase, toLowerCase
const animal = "Lion";
console.log("upper", animal.toUpperCase());
console.log("lower", animal.toLowerCase());

// Find symbol (indexOf, includes)
const textMessage2 = "My favorite language - Java Script";
console.log("indexOf(Java)", textMessage.indexOf("Java")); // index of first Symbol => J
console.log("indexOf(o)", textMessage.indexOf("o")); // index of first 'o'

console.log("includes", textMessage.includes("o")); // true
console.log("includes", textMessage.includes("123")); // false

//Cut string (slice == substring) you can use any you want. They are the same!
const programmingLanguage2 = "JavaScript";
console.log("slice", programmingLanguage.slice(4));
console.log("slice", programmingLanguage.slice(0, 4));

console.log("substring", programmingLanguage2.substring(4));
console.log("substring", programmingLanguage2.substring(0, 4));

//Change symbol in string (replace, replaceAll)
const programmingLanguage3 = 'JavaScript';
console.log('replace', programmingLanguage3.replace('Java', 'Qwerty'));
console.log('replaceAll', programmingLanguage3.replaceAll('a', 'A'));

// repeate
const helloText = 'hello->'
console.log(helloText.repeat(8));

// trim
const nameOfUser = prompt('What is your name')