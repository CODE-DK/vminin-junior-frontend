// 1. string
const myName = "DK";
console.log("myName", myName, typeof myName);

// 2. number
const age = 42;
console.log("age", age, typeof age);

// 3. boolean
const isMan = true;
console.log("isMan", isMan, typeof isMan);

// 4. null
const empty = null;
console.log("empty", empty, typeof empty);

// 5. undefined
const neverSelected = undefined;
console.log("neverSelected", neverSelected, typeof neverSelected);

// 6. symbol
const mySymbol = Symbol(42);
console.log("mySymbol", mySymbol, typeof mySymbol);

// 7. object
const myObject = {
    myName, 
    age
};
console.log("myObject", myObject, typeof myObject);

// 8. bigint
const superDigit = BigInt(42);
console.log("superDigit", superDigit, typeof superDigit);