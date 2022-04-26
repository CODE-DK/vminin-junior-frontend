const types = ["odd", "even", ""];
function getSumOfNubmers(number, type = "odd") {
  //validate type
  if (!types.includes(type)) {
    return console.error(
      "type should be ",
      types.map((it) => (it.length !== 0 ? `${it}` : "''")),
    );
  }

  let init = 0;
  let step = 1;

  if (type === "odd") {
    init = 1;
    step = 2;
  }
  if (type === "even") {
    step = 2;
  }

  let sum = 0;
  for (let i = init; i <= number; i += step) {
    sum += i;
  }

  return sum;
}

console.log(getSumOfNubmers(10)); //25
console.log(getSumOfNubmers(10, "even")); //30
console.log(getSumOfNubmers(10, "")); // 55
console.log(getSumOfNubmers(10, "something")); // undefined with error message
