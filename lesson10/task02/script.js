// ---

function giveTalonsInOrder(patients, id) {
  const orderPatients = [];

  //works only for sorting patients
  patients.sort((a, b) => a.id - b.id);

  id.forEach((i) => orderPatients.push(patients[i - 1]));
  return orderPatients;
}

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

// ---


