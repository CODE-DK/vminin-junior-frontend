// ---

const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

console.log("В очереди было: ", peopleWaiting.length);

giveParcel();
giveParcel();
giveParcel();

const exists = peopleWaiting.length;
for (let i = 0; i < exists; i++) {
  leaveQueueWithoutParcel();
}

console.log("В очереди осталось: ", peopleWaiting.length);

function giveParcel() {
  let someone = peopleWaiting.shift();
  console.log(`
    ${someone} получил(а) посылку. 
    В очереди осталось ${peopleWaiting.length} человек.
`);
}

function leaveQueueWithoutParcel() {
  someone = peopleWaiting.shift();
  console.log(`${someone} не получил(а) посылку и ушел(ла) из очереди`);
}

// ---