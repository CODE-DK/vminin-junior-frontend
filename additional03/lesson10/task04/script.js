// --- Задание#4

const todaysWinner = {
  prize: "10 000$",
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25,
  },
  201: {
    name: "Светлана",
    age: 20,
  },
  304: {
    name: "Екатерина",
    age: 35,
  },
};

function getWinner(applicants, winnerObject) {
  const lucky = getRandomNumberInRange(0, 3);
  console.log("lucky is", lucky);
  const candidates = Object.keys(applicants);
  const winner = candidates[lucky];
  return {
    ...winnerObject,
    ...applicants[winner],
  };
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }

// ---
