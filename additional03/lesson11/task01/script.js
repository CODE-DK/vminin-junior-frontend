// --- Задание #1

const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2023",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2021",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2022",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
  {
    firstName: "Perfect",
    lastName: "Men",
    criminalRecord: false,
    passportExpiration: "01.05.2035",
  },
];

const result = allowVisa(peopleWithVisa);
console.log("result", result);

function allowVisa(people) {
  return people
    .filter((human) => human.criminalRecord === false)
    .filter((human) => {
      const curDate = new Date();
      const extDate = human.passportExpiration.split(".");

      const day = +extDate[0];
      const month = +extDate[1] - 1;
      const year = +extDate[2];

      return (
        curDate.getFullYear() < year ||
        curDate.getFullYear() === year && curDate.getMonth() < month ||
        curDate.getFullYear() === year && curDate.getMonth() === month && curDate.getDate() < day
      );
    });
}

// ---
