// ООП

// in JS you can create object with 2 methods: function & class

// 1: function (in ES5 style)
// function Animal(name) {
//     this.name = name;
//
//     this.getName = function() {
//         return this.name;
//     };
// }

// 2: class (from ES6) - preferred
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// new
const cat = new Animal("cat");
console.log("cat", cat);
console.log("cat name", cat.name);
console.log("cat method", cat.getName());
