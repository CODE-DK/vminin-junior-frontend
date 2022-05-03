function runCode() {
  console.log("before promise"); // main 1
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Zero Promise"); // callback 1

      resolve();
    }, 0);
  });
}

setTimeout(() => {
  console.log("Zero"); // callback 2
}, 0);

runCode().then(() => console.log("Zero Promise Invoked")); // micro 1

console.log("One"); // main 2

// before promise       | before promise
// One                  | One
// Zero Promise Invoked | Zero ??
// Zero Promise         | Zero Promise ??
// Zero                 | Zero Promise Invoked ??