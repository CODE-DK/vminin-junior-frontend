//=================================================================
console.log("Задание #2");
//=================================================================

console.log(Number('10'), typeof Number('10')); // явное, number, 10
//1
console.log(+'50'); //не явно, number, 50
console.log(Number('50'));
//2            
console.log(Number('100')); //явно, number, 100
//3
console.log('' + 1); //не явно, string, '1'
console.log(String(1));
//4
console.log(String(1)); //явно, string, '1'
//5
console.log(Boolean(0)); //явно, boolean, false
//6
console.log(+'001'); //не явно, number, 1
console.log(Number('001'));
//7
console.log(1 + ''); //не явно, string, '1'
console.log(String(1));
//8
console.log(Boolean(1)); //явно, boolean, true
//9
console.log(String(001)); //явно, string, '1'
//10
console.log(Number('Hello World')); //явно, NaN, NaN

//=================================================================
console.log("Задание #3");
//=================================================================

console.log(Number(console.log), String(console.log), Boolean(console.log));
console.log(Number({ name: 'Maxim' }), String({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
console.log("Number(Symbol('key'))", String(Symbol('key')), Boolean(Symbol('key')));
console.log(Number(Number), String(Number), Boolean(Number));
console.log(Number(''), String(''), Boolean(''));
console.log(Number(0), String(0), Boolean(0));
console.log(Number(-10), String(-10), Boolean(-10));
console.log(Number('-105'), String('-105'), Boolean('-105'));

//=================================================================
console.log("Задание #4");
//=================================================================

// 1
console.log(Number(' 1 2 3 4 5')); //NaN
// 2
console.log(Number('1234 5')); //NaN
// 3
console.log(Number('12345')); //12345
// 4
console.log(String(false)); //'' X -> 'false'
// 5
console.log(Boolean(0000000)); //false
// 6
console.log(Boolean(0.0000001)); //true
// 7
console.log(String(undefined)); //undefined
// 8
console.log(Number('100f')); //100.0 X -> NaN
// 9
console.log(Number('100')); //100
// 10
console.log(Number('000001')); //1