function getName1(name) {
  return `${name}`;
}
const getName2 = (name) => {
  return `${name}`;
};
const getName3 = function (name) {
  return `${name}`;
};

console.log(getName1("John"));
console.log(getName2("John"));
console.log(getName3("John"));
