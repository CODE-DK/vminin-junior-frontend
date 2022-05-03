const getData = (callback) => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      console.log("Success"); // micro 1
      callback(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

getData(() => {
  console.log("user received"); // callback 1

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise resolved"); // micro 2
    }, 500);

    console.log("in promise"); // callback 3
    setTimeout(() => {
      console.log("last set timeout"); // callback 4
    }, 400);
  });

  promise.then((result) => {
    console.log(result); // micro 2
  });
});

console.log("End"); // main 1

// End
// Success
// user received
// in promise
// last set timeout
// promise resolved
