// ---

const numbers = [10, 4, 100, -5, 54, 2];

// with for
let summWithFor = 0;
for (let i = 0; i < numbers.length; i++) {
    summWithFor += Math.pow(numbers[i], 3);
}
console.log('With for loop', summWithFor);

// with for of
let summWithForOf = 0;
for (const num of numbers) {
    summWithForOf += Math.pow(num, 3);
}
console.log('With for of loop', summWithForOf);

// with forEach
let summWithForEach = 0;
numbers.forEach(num => {
    summWithForEach += Math.pow(num, 3);
});
console.log('With forEach', summWithForEach);

// with map reduce
const summWithReduce = numbers
  .map(it => Math.pow(it, 3))
  .reduce((buffer, it) => buffer += it);

console.log('With map reduce', summWithReduce);

// ---

