// 1.string
let container = "test";
console.log(Number(container), Boolean(container), String(container));

// 2.number
container = 42;
console.log(Number(container), Boolean(container), String(container));

// 3.boolean
container = true;
console.log(Number(container), Boolean(container), String(container));

// 4.bigint
container = 42n;
console.log(Number(container), Boolean(container), String(container));

// 5.symbol
container = Symbol(42);
console.log("can't convert symbol to number", Boolean(container), String(container));

// 6.object
container = {value: 42};
console.log(Number(container), Boolean(container), String(container));

// 7.null
container = null;
console.log(Number(container), Boolean(container), String(container));

// 8.undefined
container = undefined;
console.log(Number(container), Boolean(container), String(container));

//boolean false: NaN, 0, '', null, undefined
//        true: everithing else