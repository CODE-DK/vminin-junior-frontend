const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;

let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

console.log("salaryOfJuniorDeveloper: ", salaryOfJuniorDeveloper);
console.log("numberOfJuniorDevelopers: ", numberOfJuniorDevelopers);
console.log("taxPercentage: ", taxPercentage);
console.log("totalJuniorDevelopersSalary: ", totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i++) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
  console.log("salaryWithTax: ", salaryWithTax);

  totalJuniorDevelopersSalary += salaryWithTax;
  console.log("new totalJuniorDevelopersSalary: ", totalJuniorDevelopersSalary);
}

console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
