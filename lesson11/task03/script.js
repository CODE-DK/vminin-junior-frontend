// ---

function addDays(date, days) {
  return new Date(date.getTime() + dayToMs(days));
}

function dayToMs(days) {
  return days * 24 * 60 * 60 * 1000;
}

console.log(addDays(new Date(), 25));

// ---
