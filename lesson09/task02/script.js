// ---

function getArrayOfSequence(number) {
  const arr = [];
  if (number < 2) return arr;

  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr;
}

function getSumOfSequence(number) {
  const arr = getArrayOfSequence(number);
  console.log("Array", arr);

  return arr[0] + arr[arr.length - 1];
}

console.log(getSumOfSequence(15));

// ---