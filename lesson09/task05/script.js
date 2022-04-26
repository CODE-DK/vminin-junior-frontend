// ---

const clientsEstimations = [];

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

let goodEstimations = 0,
  notGoodEstimations = 0;

clientsEstimations.forEach((it) => {
  it < 5 ? notGoodEstimations++ : goodEstimations++;
});

alert(`
  Всего положительных оценок: ${goodEstimations}; 
  Всего отрицательных оценок: ${notGoodEstimations}
`);

function askClientToGiveEstimation() {
  let stars = prompt("Как вы оцениваете нашу кофейню от 1 до 10?").trim();
  if (/[0-9]/.test(stars)) {
    stars = +stars;
    stars = stars > -1 ? stars : 0;
    stars = stars < 11 ? stars : 10;

    console.log("Оценка: ", stars);
    clientsEstimations.push(stars);
  }
}

// ---