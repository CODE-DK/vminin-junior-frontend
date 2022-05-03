setTimeout(() => {
  console.log("setTimeout"); // callback queue (1)
}, 0);

const promise = new Promise((resolve) => {
  console.log("Promise"); // main task (1)
  resolve();
});

promise.then(() => {
  console.log("Promise resolve"); // microtask queue (1)
});

console.log("End"); // main task (2)

// Promise -> End -> Promise resolve -> setTimeout
